-- ====================================================================
-- CampusSaathi AI - Supabase PostgreSQL Schema Definition
-- ====================================================================

-- Enable UUID extension if not enabled
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- --------------------------------------------------------------------
-- ENUM TYPES
-- --------------------------------------------------------------------
CREATE TYPE user_role AS ENUM ('student', 'admin', 'staff');
CREATE TYPE ticket_status AS ENUM ('submitted', 'assigned', 'in_review', 'action_required', 'processing', 'resolved', 'closed');
CREATE TYPE ticket_priority AS ENUM ('low', 'normal', 'medium', 'high', 'critical');
CREATE TYPE ticket_category AS ENUM ('Scholarship', 'Examination', 'Academic', 'Fee', 'Hostel', 'Certificate', 'ID Card', 'Library', 'Campus Facility', 'Other');
CREATE TYPE notification_type AS ENUM ('Request', 'Academic', 'Deadline', 'Emergency', 'Announcement');
CREATE TYPE incident_status AS ENUM ('Under Investigation', 'Resolved', 'Open');

-- --------------------------------------------------------------------
-- 1. DEPARTMENTS
-- --------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.departments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL UNIQUE,
    description TEXT,
    building VARCHAR(255) NOT NULL,
    floor VARCHAR(100) NOT NULL,
    room VARCHAR(100) NOT NULL,
    official_email VARCHAR(255),
    official_phone VARCHAR(50),
    office_hours VARCHAR(100) DEFAULT '10:00 AM - 04:00 PM',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- --------------------------------------------------------------------
-- 2. PROFILES (Extends auth.users)
-- --------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    phone VARCHAR(50),
    role user_role DEFAULT 'student',
    enrollment_number VARCHAR(100) UNIQUE,
    course VARCHAR(255),
    department_id UUID REFERENCES public.departments(id) ON DELETE SET NULL,
    semester INTEGER,
    avatar_url TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- --------------------------------------------------------------------
-- 3. UNIVERSITY SERVICES
-- --------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.university_services (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    category ticket_category NOT NULL,
    description TEXT,
    department_id UUID REFERENCES public.departments(id) ON DELETE CASCADE,
    requirements TEXT[],
    processing_information TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- --------------------------------------------------------------------
-- 4. TICKETS (Requests)
-- --------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.tickets (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    ticket_number VARCHAR(50) UNIQUE NOT NULL,
    student_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    category ticket_category NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    department_id UUID REFERENCES public.departments(id) ON DELETE SET NULL,
    priority ticket_priority DEFAULT 'normal',
    status ticket_status DEFAULT 'submitted',
    ai_classification JSONB,
    assigned_to UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    resolved_at TIMESTAMPTZ
);

-- --------------------------------------------------------------------
-- 5. TICKET MESSAGES
-- --------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.ticket_messages (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    ticket_id UUID NOT NULL REFERENCES public.tickets(id) ON DELETE CASCADE,
    sender_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    message TEXT NOT NULL,
    is_internal BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- --------------------------------------------------------------------
-- 6. TICKET ATTACHMENTS
-- --------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.ticket_attachments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    ticket_id UUID NOT NULL REFERENCES public.tickets(id) ON DELETE CASCADE,
    file_name VARCHAR(255) NOT NULL,
    file_url TEXT NOT NULL,
    file_size_bytes BIGINT,
    mime_type VARCHAR(100),
    uploaded_by UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- --------------------------------------------------------------------
-- 7. CAMPUS LOCATIONS
-- --------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.campus_locations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    category VARCHAR(100) NOT NULL,
    building VARCHAR(255) NOT NULL,
    floor VARCHAR(100) NOT NULL,
    room VARCHAR(100) NOT NULL,
    description TEXT,
    latitude DECIMAL(10, 8),
    longitude DECIMAL(11, 8),
    office_hours VARCHAR(100) DEFAULT '10:00 AM - 04:00 PM',
    department_id UUID REFERENCES public.departments(id) ON DELETE SET NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- --------------------------------------------------------------------
-- 8. OFFICIAL CONTACTS
-- --------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.official_contacts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    department_id UUID REFERENCES public.departments(id) ON DELETE CASCADE,
    campus_location_id UUID REFERENCES public.campus_locations(id) ON DELETE SET NULL,
    name VARCHAR(255) NOT NULL,
    designation VARCHAR(255) NOT NULL,
    official_phone VARCHAR(50) NOT NULL,
    official_email VARCHAR(255) NOT NULL,
    office_hours VARCHAR(100) DEFAULT '10:00 AM - 04:00 PM',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- --------------------------------------------------------------------
-- 9. NOTIFICATIONS
-- --------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.notifications (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    type notification_type DEFAULT 'Request',
    is_read BOOLEAN DEFAULT FALSE,
    related_ticket_id UUID REFERENCES public.tickets(id) ON DELETE SET NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- --------------------------------------------------------------------
-- 10. ANNOUNCEMENTS
-- --------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.announcements (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    category VARCHAR(100) DEFAULT 'General',
    published_at TIMESTAMPTZ DEFAULT NOW(),
    expires_at TIMESTAMPTZ,
    created_by UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- --------------------------------------------------------------------
-- 11. APPOINTMENTS
-- --------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.appointments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    student_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    official_id UUID REFERENCES public.official_contacts(id) ON DELETE SET NULL,
    department_id UUID REFERENCES public.departments(id) ON DELETE CASCADE,
    purpose TEXT NOT NULL,
    scheduled_at TIMESTAMPTZ NOT NULL,
    status VARCHAR(50) DEFAULT 'Scheduled',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- --------------------------------------------------------------------
-- 12. CAMPUS INCIDENTS & INCIDENT REPORTS
-- --------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.campus_incidents (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    category VARCHAR(100) NOT NULL,
    location_id UUID REFERENCES public.campus_locations(id) ON DELETE SET NULL,
    status incident_status DEFAULT 'Open',
    affected_count INTEGER DEFAULT 1,
    first_reported_at TIMESTAMPTZ DEFAULT NOW(),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.incident_reports (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    incident_id UUID NOT NULL REFERENCES public.campus_incidents(id) ON DELETE CASCADE,
    ticket_id UUID REFERENCES public.tickets(id) ON DELETE CASCADE,
    student_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    reported_at TIMESTAMPTZ DEFAULT NOW()
);

-- --------------------------------------------------------------------
-- 13. KNOWLEDGE DOCUMENTS (RAG Foundation)
-- --------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.knowledge_documents (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(255) NOT NULL,
    category VARCHAR(100) NOT NULL,
    content TEXT NOT NULL,
    department_id UUID REFERENCES public.departments(id) ON DELETE SET NULL,
    source_url TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- --------------------------------------------------------------------
-- INDEXES FOR PERFORMANCE
-- --------------------------------------------------------------------
CREATE INDEX IF NOT EXISTS idx_tickets_student ON public.tickets(student_id);
CREATE INDEX IF NOT EXISTS idx_tickets_status ON public.tickets(status);
CREATE INDEX IF NOT EXISTS idx_tickets_department ON public.tickets(department_id);
CREATE INDEX IF NOT EXISTS idx_ticket_messages_ticket ON public.ticket_messages(ticket_id);
CREATE INDEX IF NOT EXISTS idx_notifications_user ON public.notifications(user_id);
CREATE INDEX IF NOT EXISTS idx_locations_building ON public.campus_locations(building);

-- --------------------------------------------------------------------
-- ROW LEVEL SECURITY (RLS) POLICIES
-- --------------------------------------------------------------------

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.tickets ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ticket_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ticket_attachments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.notifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.departments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.campus_locations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.official_contacts ENABLE ROW LEVEL SECURITY;

-- Public read access for static information
CREATE POLICY "Public read for departments" ON public.departments FOR SELECT USING (true);
CREATE POLICY "Public read for locations" ON public.campus_locations FOR SELECT USING (true);
CREATE POLICY "Public read for contacts" ON public.official_contacts FOR SELECT USING (true);

-- Profile RLS: Users can view all profiles, but edit only their own
CREATE POLICY "Profiles viewable by authenticated users" ON public.profiles FOR SELECT USING (auth.role() = 'authenticated');
CREATE POLICY "Users can update own profile" ON public.profiles FOR UPDATE USING (auth.uid() = id);

-- Tickets RLS: Students see their own tickets, Admins/Staff see all
CREATE POLICY "Students view own tickets" ON public.tickets FOR SELECT USING (
    auth.uid() = student_id OR EXISTS (
        SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role IN ('admin', 'staff')
    )
);

CREATE POLICY "Students insert own tickets" ON public.tickets FOR INSERT WITH CHECK (auth.uid() = student_id);

CREATE POLICY "Admins and Staff update tickets" ON public.tickets FOR UPDATE USING (
    auth.uid() = student_id OR EXISTS (
        SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role IN ('admin', 'staff')
    )
);

-- Notifications RLS: Users see only their notifications
CREATE POLICY "Users view own notifications" ON public.notifications FOR SELECT USING (auth.uid() = user_id);
