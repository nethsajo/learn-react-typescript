import { X } from 'lucide-react';
import type React from 'react';
import { createPortal } from 'react-dom';
import { twJoin } from 'tailwind-merge';

type DialogProps = {
  children: React.ReactNode;
};

type DialogPortalProps = {
  children: React.ReactNode;
};

type DialogContentProps = {
  children: React.ReactNode;
};

function Dialog({ children }: DialogProps) {
  return <div>{children}</div>;
}

function DialogPortal({ children }: DialogPortalProps) {
  return createPortal(children, document.body);
}

function DialogOverlay() {
  return (
    <div
      data-state="closed"
      className="fixed inset-0 z-50 bg-white/80 backdrop-blur-sm duration-300 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
      data-aria-hidden="true"
      aria-hidden="true"
    ></div>
  );
}

function DialogContent({ children }: DialogContentProps) {
  return (
    <DialogPortal>
      <DialogOverlay />
      <div
        role="dialog"
        data-state="closed"
        className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-6 border bg-white px-4 py-8 shadow-lg duration-300 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:max-w-[525px] sm:rounded-lg sm:px-6"
      >
        {children}
        <button className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-slate-300 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-transparent focus:ring-offset-2 disabled:pointer-events-none">
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>
      </div>
    </DialogPortal>
  );
}

function DialogHeader({
  children,
  className,
  ...props
}: React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>) {
  return (
    <header
      {...props}
      className={twJoin('flex flex-col space-y-1.5 text-center sm:text-left', className)}
    >
      {children}
    </header>
  );
}

Dialog.Content = DialogContent;
Dialog.Header = DialogHeader;

export default Dialog;