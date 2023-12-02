import { X } from 'lucide-react';
import React, { useContext } from 'react';
import { createPortal } from 'react-dom';
import DialogProvider from 'shared/contexts/dialog/DialogProvider';
import DialogContext from 'shared/contexts/dialog/DialogContext';
import { twMerge, twJoin } from 'tailwind-merge';

type DialogProps = {
  children: React.ReactNode;
};

type DialogPortalProps = {
  children: React.ReactNode;
};

type DialogContentProps = {
  children: React.ReactNode;
};

type DialogTriggerProps = {
  children: React.ReactNode;
};

const Dialog = ({ children }: DialogProps) => {
  return <DialogProvider>{children}</DialogProvider>;
};

const DialogPortal = ({ children }: DialogPortalProps) => {
  return createPortal(children, document.body);
};

const DialogOverlay = () => {
  const context = useContext(DialogContext);
  return (
    <div
      data-state={getState(context.open)}
      className="fixed inset-0 z-50 bg-white/80 backdrop-blur-sm duration-300 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
      data-aria-hidden="true"
      aria-hidden="true"
    ></div>
  );
};

const DialogContent = ({ children }: DialogContentProps) => {
  const context = useContext(DialogContext);

  return (
    <DialogPortal>
      <DialogOverlay />
      <div
        role="dialog"
        data-state={getState(context.open)}
        className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-white px-4 py-8 shadow-lg duration-300 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:max-w-[525px] sm:rounded-lg sm:px-6"
      >
        {children}
        <button className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-slate-300 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-transparent focus:ring-offset-2 disabled:pointer-events-none">
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>
      </div>
    </DialogPortal>
  );
};

const DialogTrigger = ({ children }: DialogTriggerProps) => {
  const context = useContext(DialogContext);

  return (
    <button
      type="button"
      aria-haspopup="dialog"
      aria-expanded={context.open}
      data-state={getState(context.open)}
      className="inline-flex h-10 w-10 items-center justify-center text-blue-50 outline-none"
      onClick={context.onOpen}
    >
      {children}
    </button>
  );
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
      className={twJoin(
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
