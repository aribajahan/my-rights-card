import { Link } from 'react-router-dom';
import { ReactNode } from 'react';

interface FocusFrameCardProps {
  to: string;
  headline: string;
  subhead?: string;
  className?: string;
  onClick?: () => void;
  children?: ReactNode;
  as?: 'link' | 'button';
}

export function FocusFrameCard({ 
  to, 
  headline, 
  subhead, 
  className = '',
  onClick,
  children,
  as = 'link'
}: FocusFrameCardProps) {
  const content = (
    <>
      {/* Corner brackets */}
      <span className="focus-frame-corner top-left" />
      <span className="focus-frame-corner top-right" />
      <span className="focus-frame-corner bottom-left" />
      <span className="focus-frame-corner bottom-right" />
      
      {/* Content */}
      <div className="flex items-start justify-between gap-4 relative z-10">
        <div className="flex-1 min-w-0">
          {children || (
            <>
              <h3 className="focus-frame-headline text-lg uppercase tracking-wide font-display">
                {headline}
              </h3>
              {subhead && (
                <p className="focus-frame-subhead text-sm text-muted-foreground mt-1">
                  {subhead}
                </p>
              )}
            </>
          )}
        </div>
        <span className="focus-frame-arrow text-lg font-display shrink-0">→</span>
      </div>
    </>
  );

  if (as === 'button') {
    return (
      <button
        onClick={onClick}
        className={`focus-frame group ${className}`}
      >
        {content}
      </button>
    );
  }

  return (
    <Link 
      to={to} 
      className={`focus-frame group ${className}`}
      onClick={onClick}
    >
      {content}
    </Link>
  );
}

// Simpler variant for status selection without arrows
interface FocusFrameOptionProps {
  label: string;
  onClick: () => void;
  isSelected?: boolean;
  className?: string;
}

export function FocusFrameOption({ 
  label, 
  onClick, 
  isSelected = false,
  className = '' 
}: FocusFrameOptionProps) {
  return (
    <button
      onClick={onClick}
      className={`focus-frame-option group ${isSelected ? 'is-selected' : ''} ${className}`}
    >
      {/* Corner brackets */}
      <span className="focus-frame-corner top-left" />
      <span className="focus-frame-corner top-right" />
      <span className="focus-frame-corner bottom-left" />
      <span className="focus-frame-corner bottom-right" />
      
      {/* Content */}
      <span className="focus-frame-headline text-base uppercase tracking-wide font-display relative z-10">
        {label}
      </span>
    </button>
  );
}
