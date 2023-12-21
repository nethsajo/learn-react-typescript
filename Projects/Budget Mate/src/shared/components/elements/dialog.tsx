import { X } from 'lucide-react';
import React, { cloneElement, useContext, useState } from 'react';
import { createPortal } from 'react-dom';
import { Transition, type TransitionStatus } from 'react-transition-group';
import { useClickOutside } from 'shared/hooks/useClickOutside';
import { twJoin, twMerge } from 'tailwind-merge';

type DialogProps = {
  children: React.ReactNode;
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
};

type DialogPortalProps = {
  children: React.ReactNode;
};

type DialogOverlayProps = {
  state: TransitionStatus;
};

type DialogContentProps = {
  children: React.ReactNode;
  size?: 'sm' | 'default' | 'lg' | 'xl';
};

type DialogTriggerProps = {
  children: React.ReactNode;
};

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

const Dialog = ({ children, open, onOpen, onClose }: DialogProps) => {
  // const [open, setOpen] = useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  const dialogContext = { open, onOpen, onClose };

  return <DialogContext.Provider value={dialogContext}>{children}</DialogContext.Provider>;
};

const DialogPortal = ({ children }: DialogPortalProps) => {
  return createPortal(children, document.body);
};

const DialogOverlay = ({ state }: DialogOverlayProps) => {
  return (
    <div
      data-state={state}
      className="fixed inset-0 z-50 bg-white/80 backdrop-blur-sm duration-200 data-[state=entering]:animate-in data-[state=exiting]:animate-out data-[state=entering]:fade-in-0 data-[state=exiting]:fade-out-0"
      data-aria-hidden="true"
      aria-hidden="true"
    ></div>
  );
};

const DialogContent = ({ children, size = 'default' }: DialogContentProps) => {
  const context = useContext(DialogContext);
  const ref = useClickOutside(context.onClose);

  const sizes = {
    sm: 'sm:max-w-[300px]',
    default: 'sm:max-w-[500px]',
    lg: 'sm:max-w-[800px]',
    xl: 'sm:max-w-[1140px]',
  };

  return (
    <Transition nodeRef={ref} in={context.open} timeout={100} unmountOnExit>
      {state => (
        <DialogPortal>
          <DialogOverlay state={state} />
          <div
            ref={ref}
            role="dialog"
            data-state={state}
            className={`fixed left-[50%] top-[50%] z-50 grid w-full max-w-2xl translate-x-[-50%] translate-y-[-50%] gap-4 border bg-white px-4 py-8 shadow-lg duration-200 data-[state=entering]:animate-in data-[state=exiting]:animate-out data-[state=entering]:fade-in-0 data-[state=exiting]:fade-out-0 data-[state=entering]:zoom-in-95 data-[state=exiting]:zoom-out-95 data-[state=entering]:slide-in-from-left-1/2 data-[state=entering]:slide-in-from-top-[48%] data-[state=exiting]:slide-out-to-left-1/2 data-[state=exiting]:slide-out-to-top-[48%] ${sizes[size]} sm:rounded-lg sm:px-6`}
          >
            {children}
            <button
              className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-slate-300 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-transparent focus:ring-offset-2 disabled:pointer-events-none"
              onClick={context.onClose}
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </button>
          </div>
        </DialogPortal>
      )}
    </Transition>
  );
};

const DialogTrigger = ({ children }: DialogTriggerProps) => {
  const context = useContext(DialogContext);

  const child = (
    typeof children === 'function' ? children : React.Children.only(children)
  ) as React.ReactElement;

  return React.cloneElement(child, {
    onClick: () => context.onOpen(),
    'aria-haspopup': 'dialog',
    'data-state': getState(context.open),
    'aria-expanded': context.open,
  });
};

const DialogHeader = ({
  children,
  className,
  ...props
}: React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>) => {
  return (
    <header {...props} className={twJoin('flex flex-col space-y-3 text-left', className)}>
      {children}
    </header>
  );
};

const DialogTitle = ({
  children,
  className,
  ...props
}: React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>) => {
  return (
    <h2 {...props} className={twJoin('text-lg font-bold leading-none tracking-tight', className)}>
      {children}
    </h2>
  );
};

const DialogDescription = ({
  children,
  className,
  ...props
}: React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>) => {
  return (
    <p {...props} className={twJoin('text-sm text-gray-400', className)}>
      {children}
    </p>
  );
};

const DialogFooter = ({
  children,
  className,
  ...props
}: React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>) => {
  return (
    <div
      {...props}
      className={twMerge(
        'flex flex-col space-y-2 sm:flex-row sm:justify-end sm:space-x-2 sm:space-y-0',
        className
      )}
    >
      {children}
    </div>
  );
};

const getState = (open: boolean) => {
  return open ? 'open' : 'closed';
};

Dialog.Trigger = DialogTrigger;
Dialog.Content = DialogContent;
Dialog.Header = DialogHeader;
Dialog.Title = DialogTitle;
Dialog.Description = DialogDescription;
Dialog.Footer = DialogFooter;

export default Dialog;
