import { ROUTES } from '@/constants/routes';
import { useAuth } from '@/contexts/fake-auth';
import type React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProtectedRoutePage({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) navigate(ROUTES.HOME);
  }, [isAuthenticated, navigate]);

  return isAuthenticated ? children : null;
}
