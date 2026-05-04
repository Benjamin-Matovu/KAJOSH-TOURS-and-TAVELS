import React, { useRef, useEffect } from 'react';

interface DropdownProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  align?: 'left' | 'right';
  isOpen: boolean;
  onClose: () => void;
}

export function Dropdown({ trigger, children, align = 'left', isOpen, onClose }: DropdownProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClose();
      }
    };
    if (isOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onClose]);

  return (
    <div className="relative inline-block text-left" ref={ref}>
      <div>{trigger}</div>
      {isOpen && (
        <div
          className={`absolute z-50 mt-2 w-56 rounded-md bg-surface-light dark:bg-surface-dark shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${
            align === 'right' ? 'right-0 origin-top-right' : 'left-0 origin-top-left'
          }`}
        >
          <div className="py-1">{children}</div>
        </div>
      )}
    </div>
  );
}
