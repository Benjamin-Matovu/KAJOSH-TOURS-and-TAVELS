import React from 'react';
import { cn } from './Button'; // Reusing cn utility for now

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, error, icon, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && <label className="block text-sm font-medium mb-1 text-textPrimary-light dark:text-textPrimary-dark">{label}</label>}
        <div className="relative">
          {icon && (
             <div className="absolute left-3 top-1/2 -translate-y-1/2 text-textSecondary">
               {icon}
             </div>
          )}
          <input
            type={type}
            className={cn(
              "flex h-10 w-full rounded-md border border-borderC-light dark:border-borderC-dark bg-transparent px-3 py-2 text-sm placeholder:text-textSecondary focus:outline-none focus:ring-2 focus:ring-primary disabled:cursor-not-allowed disabled:opacity-50",
              icon && "pl-10",
              error && "border-error focus:ring-error",
              className
            )}
            ref={ref}
            {...props}
          />
        </div>
        {error && <p className="mt-1 text-sm text-error">{error}</p>}
      </div>
    );
  }
);
Input.displayName = 'Input';
