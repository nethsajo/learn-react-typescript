import React, { useState } from 'react';

type Context = {
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
};

const DialogContext = React.createContext<Context>({
  open: false,
  onOpen: () => {},
  onClose: () => {},
});

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
