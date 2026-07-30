export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: {
    message: string;
    code?: string;
    details?: any;
  };
}

export interface AuthUser {
  id: string;
  email: string;
  role: 'student' | 'admin' | 'staff';
}
