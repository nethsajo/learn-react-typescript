import React, { useState } from 'react';
import DialogContext from './DialogContext';

export default function DialogProvider({ children }: React.HTMLAttributes<HTMLDivElement>) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <DialogContext.Provider value={{ open, onOpen: handleOpen, onClose: handleClose }}>
      {children}
    </DialogContext.Provider>
  );
}
