import React from 'react';

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

export default DialogContext;
