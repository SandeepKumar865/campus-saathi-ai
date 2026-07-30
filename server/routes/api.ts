import { Router } from 'express';
import healthRouter from './health';
import { getTickets, getTicketById, createTicket } from '../controllers/ticketController';
import { getLocations, getLocationById } from '../controllers/locationController';
import { getIncidents } from '../controllers/incidentController';
import { requireAuth } from '../middleware/auth';

const router = Router();

// Mount Health Check Route
router.use('/', healthRouter);

// Tickets / Requests Routes
router.get('/tickets', requireAuth, getTickets);
router.get('/tickets/:id', requireAuth, getTicketById);
router.post('/tickets', requireAuth, createTicket);

// Campus Locations Routes
router.get('/locations', getLocations);
router.get('/locations/:id', getLocationById);

// Campus Pulse Incidents Routes
router.get('/incidents', requireAuth, getIncidents);

export default router;
