import React, { useState } from 'react';

type Context = {
  open: boolean;
  onOpen: () => void;
};

const DialogContext = React.createContext<Context>({
  open: false,
  onOpen: () => {},
});

export default function DialogProvider({ children }: React.HTMLAttributes<HTMLDivElement>) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(false);
  };

  return (
    <DialogContext.Provider value={{ open, onOpen: handleOpen }}>{children}</DialogContext.Provider>
  );
}
