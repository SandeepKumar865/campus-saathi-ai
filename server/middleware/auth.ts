import { Request, Response, NextFunction } from 'express';
import { ApiResponse } from '../types';

export interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    email: string;
    role: string;
  };
}

export const requireAuth = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;
  
  // Demo mode / Passthrough if auth header missing in development
  if (!authHeader) {
    req.user = {
      id: 'stu_123',
      email: 'rahul.s@student.csjmu.ac.in',
      role: 'student'
    };
    return next();
  }

  // Token decoding placeholder
  req.user = {
    id: 'stu_123',
    email: 'rahul.s@student.csjmu.ac.in',
    role: 'student'
  };
  
  next();
};

export const requireRole = (roles: string[]) => {
  return (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    if (!req.user || !roles.includes(req.user.role)) {
      const response: ApiResponse = {
        success: false,
        error: {
          message: 'Forbidden: Insufficient privileges',
          code: 'FORBIDDEN'
        }
      };
      return res.status(403).json(response);
    }
    next();
  };
};
