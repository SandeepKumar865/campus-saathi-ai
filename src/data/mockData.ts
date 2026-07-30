import { CampusIncident, CampusLocation, Notification, Ticket, User } from '../types';

export const currentUser: User = {
  id: 'stu_123',
  name: 'Rahul Sharma',
  role: 'student',
  enrollmentNo: 'CSJMU210045',
  department: 'B.Tech Computer Science',
  email: 'rahul.s@student.csjmu.ac.in',
};

export const adminUser: User = {
  id: 'adm_001',
  name: 'Dr. Vivek Singh',
  role: 'admin',
  department: 'Student Welfare',
  email: 'vivek.singh@csjmu.ac.in',
};

export const mockLocations: CampusLocation[] = [
  {
    id: 'loc_001',
    name: 'Scholarship Cell',
    building: 'Administrative Block',
    floor: 'First Floor',
    roomNumber: 'Room 112',
    officeTiming: '10:00 AM - 4:00 PM',
    contactPerson: 'Mr. Anil Kumar',
    designation: 'Scholarship Officer',
    contactPhone: '+91 98765 43210',
    contactEmail: 'scholarship@csjmu.ac.in',
    category: 'Administration',
  },
  {
    id: 'loc_002',
    name: 'Examination Controller Office',
    building: 'Examination Building',
    floor: 'Ground Floor',
    roomNumber: 'Room 05',
    officeTiming: '10:00 AM - 5:00 PM',
    contactPerson: 'Dr. R.K. Mishra',
    designation: 'Controller of Examinations',
    contactPhone: '+91 98765 43211',
    contactEmail: 'coe@csjmu.ac.in',
    category: 'Academic',
  },
  {
    id: 'loc_003',
    name: 'Central Library',
    building: 'Library Block',
    floor: 'Ground, First & Second',
    roomNumber: 'Main Entrance',
    officeTiming: '8:00 AM - 8:00 PM',
    contactPerson: 'Dr. S. K. Pathak',
    designation: 'Chief Librarian',
    contactPhone: '+91 98765 43212',
    contactEmail: 'library@csjmu.ac.in',
    category: 'Facility',
  },
  {
    id: 'loc_004',
    name: 'Registrar Office',
    building: 'Administrative Block',
    floor: 'Ground Floor',
    roomNumber: 'Room 01',
    officeTiming: '10:00 AM - 5:00 PM',
    contactPerson: 'Dr. Anil Kumar Yadav',
    designation: 'Registrar',
    contactPhone: '+91 98765 43213',
    contactEmail: 'registrar@csjmu.ac.in',
    category: 'Administration',
  },
];

export const mockTickets: Ticket[] = [
  {
    id: 'SCH-1024',
    title: 'Scholarship Payment Not Received',
    description: 'My UP State Scholarship application was approved on the portal but the amount has not been credited to my bank account yet. It has been over 2 weeks.',
    category: 'Scholarship',
    studentId: 'stu_123',
    studentName: 'Rahul Sharma',
    department: 'Scholarship Cell',
    priority: 'Normal',
    status: 'In Review',
    createdAt: '2023-10-25T10:30:00Z',
    updatedAt: '2023-10-26T14:15:00Z',
    aiClassification: {
      category: 'Scholarship',
      priority: 'Normal',
      reason: 'Standard payment delay inquiry.',
    },
  },
  {
    id: 'EXM-0987',
    title: 'Correction in Marksheet',
    description: 'My name is misspelled in the 4th semester marksheet. It is printed as "Rahul Sharrma" instead of "Rahul Sharma". Please correct it.',
    category: 'Examination',
    studentId: 'stu_123',
    studentName: 'Rahul Sharma',
    department: 'Examination Department',
    priority: 'High',
    status: 'Action Required',
    createdAt: '2023-10-20T09:00:00Z',
    updatedAt: '2023-10-22T11:00:00Z',
    aiClassification: {
      category: 'Examination',
      priority: 'High',
      reason: 'Name correction in official document requires prompt action.',
    },
  },
  {
    id: 'FCL-2041',
    title: 'Electrical board in Hostel 3 is sparking',
    description: 'The main electrical board near room 305 is sparking and smells like burning plastic. Please send someone urgently.',
    category: 'Campus Facility',
    studentId: 'stu_456',
    studentName: 'Amit Patel',
    department: 'Maintenance',
    priority: 'Critical',
    status: 'Open',
    createdAt: '2023-10-28T18:45:00Z',
    updatedAt: '2023-10-28T18:45:00Z',
    aiClassification: {
      category: 'Campus Facility',
      priority: 'Critical',
      reason: 'Potential fire/safety hazard reported.',
    },
  }
];

export const mockNotifications: Notification[] = [
  {
    id: 'notif_1',
    userId: 'stu_123',
    title: 'Request Update',
    message: 'Your scholarship request SCH-1024 is now In Review.',
    type: 'Request',
    isRead: false,
    createdAt: '2023-10-26T14:15:00Z',
    link: '/student/requests/SCH-1024'
  },
  {
    id: 'notif_2',
    userId: 'stu_123',
    title: 'Action Required',
    message: 'Examination Department requested an additional document for EXM-0987.',
    type: 'Request',
    isRead: false,
    createdAt: '2023-10-22T11:00:00Z',
    link: '/student/requests/EXM-0987'
  },
  {
    id: 'notif_3',
    userId: 'stu_123',
    title: 'Important Announcement',
    message: 'Examination Form Deadline Extended to 5th November.',
    type: 'Announcement',
    isRead: true,
    createdAt: '2023-10-20T08:00:00Z',
  }
];

export const mockIncidents: CampusIncident[] = [
  {
    id: 'INC-991',
    title: 'Hostel 2 Wi-Fi Outage',
    description: 'Multiple students reporting complete loss of Wi-Fi connectivity in Hostel 2 since last night.',
    location: 'Boys Hostel 2',
    firstReportedAt: '2023-10-28T09:42:00Z',
    affectedCount: 42,
    status: 'Under Investigation',
    relatedTickets: ['TKT-101', 'TKT-102', 'TKT-105'] // mock ids
  }
];
