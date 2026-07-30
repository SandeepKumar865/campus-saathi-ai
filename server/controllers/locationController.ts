import { Request, Response } from 'express';
import { ApiResponse } from '../types';

const locationsStore = [
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
    category: 'Administration'
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
    category: 'Academic'
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
    category: 'Facility'
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
    category: 'Administration'
  }
];

export const getLocations = (req: Request, res: Response) => {
  const { query } = req.query;
  let results = locationsStore;

  if (query && typeof query === 'string') {
    const q = query.toLowerCase();
    results = locationsStore.filter(
      loc => loc.name.toLowerCase().includes(q) || loc.building.toLowerCase().includes(q)
    );
  }

  const response: ApiResponse = {
    success: true,
    data: results
  };
  res.status(200).json(response);
};

export const getLocationById = (req: Request, res: Response) => {
  const { id } = req.params;
  const loc = locationsStore.find(l => l.id === id);

  if (!loc) {
    const response: ApiResponse = {
      success: false,
      error: { message: 'Location not found', code: 'NOT_FOUND' }
    };
    return res.status(404).json(response);
  }

  res.status(200).json({ success: true, data: loc });
};
