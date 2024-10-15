import type React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/button';

export function BackButton() {
  const navigate = useNavigate();

  const handleBackButton = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    navigate(-1);
  };

  return (
    <Button variant="outline" onClick={handleBackButton}>
      Back
    </Button>
  );
}
