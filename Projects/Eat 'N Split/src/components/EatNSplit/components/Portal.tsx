import type React from 'react';
import { createPortal } from 'react-dom';

type Props = {
  children: React.ReactNode;
};

export function Portal({ children }: Props) {
  return createPortal(children, document.body);
}
