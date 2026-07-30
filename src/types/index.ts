export type Role = 'student' | 'admin' | 'visitor';

export interface User {
  id: string;
  name: string;
  role: Role;
  enrollmentNo?: string;
  department?: string;
  email: string;
  avatarUrl?: string;
}

export type TicketStatus = 'Open' | 'Assigned' | 'In Review' | 'Action Required' | 'Resolved';
export type TicketPriority = 'Low' | 'Normal' | 'High' | 'Critical';
export type TicketCategory = 'Scholarship' | 'Examination' | 'Academic' | 'Fee' | 'Hostel' | 'Certificate' | 'ID Card' | 'Library' | 'Campus Facility' | 'Other';

export interface Ticket {
  id: string;
  title: string;
  description: string;
  category: TicketCategory;
  studentId: string;
  studentName: string;
  department: string;
  priority: TicketPriority;
  status: TicketStatus;
  createdAt: string;
  updatedAt: string;
  assignedTo?: string;
  aiClassification?: {
    category: TicketCategory;
    priority: TicketPriority;
    reason: string;
  };
}

export interface TicketMessage {
  id: string;
  ticketId: string;
  senderId: string;
  senderName: string;
  senderRole: Role;
  message: string;
  createdAt: string;
  isInternal?: boolean;
}

export interface CampusLocation {
  id: string;
  name: string;
  building: string;
  floor: string;
  roomNumber: string;
  officeTiming: string;
  contactPerson: string;
  designation: string;
  contactPhone: string;
  contactEmail: string;
  category: string;
}

export interface Notification {
  id: string;
  userId: string;
  title: string;
  message: string;
  type: 'Request' | 'Academic' | 'Deadline' | 'Emergency' | 'Announcement';
  isRead: boolean;
  createdAt: string;
  link?: string;
}

export interface CampusIncident {
  id: string;
  title: string;
  description: string;
  location: string;
  firstReportedAt: string;
  affectedCount: number;
  status: 'Under Investigation' | 'Resolved' | 'Open';
  relatedTickets: string[];
}
