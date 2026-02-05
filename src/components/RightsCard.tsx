import { forwardRef } from 'react';
import { ImmigrationStatus, EmergencyContact, statusGuidance } from '@/types/card';

interface RightsCardProps {
  status: ImmigrationStatus;
  contacts: EmergencyContact[];
}

export const RightsCard = forwardRef<HTMLDivElement, RightsCardProps>(
  ({ status, contacts }, ref) => {
    const showGuidance = status && status !== 'preferNot' && statusGuidance[status];

    return (
      <div
        ref={ref}
        style={{
          width: '540px',
          minHeight: '960px',
          aspectRatio: '9/16',
          backgroundColor: '#FAFAF7',
          color: '#1A2B3C',
          padding: '40px',
          fontFamily: "'DM Sans', system-ui, sans-serif",
        }}
      >
        {/* Header */}
        <div className="mb-8">
          <h1 
            className="text-3xl leading-tight mb-2"
            style={{ 
              color: '#0F2A3F',
              fontWeight: 600,
            }}
          >
            Know Your Rights
          </h1>
          {/* Golden accent line */}
          <div 
            className="h-1 w-16 rounded-full"
            style={{ backgroundColor: '#FFD666' }}
          />
        </div>

        {/* Rights - clean list */}
        <div className="space-y-4 mb-8">
          {[
            'You have the right to remain silent.',
            'You do not have to open your door without a warrant signed by a judge.',
            'You do not have to consent to a search.',
            'You have the right to a lawyer.',
          ].map((right, i) => (
            <div key={i} className="flex items-start gap-3">
              <div 
                className="w-1.5 h-1.5 mt-2 rounded-full flex-shrink-0"
                style={{ backgroundColor: '#1A2B3C', opacity: 0.3 }}
              />
              <p className="text-base leading-relaxed" style={{ fontWeight: 500 }}>
                {right}
              </p>
            </div>
          ))}
        </div>

        {/* Calm reminder */}
        <div 
          className="p-4 rounded-xl mb-6"
          style={{ backgroundColor: '#FFD666' }}
        >
          <p 
            className="text-sm font-medium text-center"
            style={{ color: '#0F2A3F' }}
          >
            Stay calm. Do not run. Do not lie.
          </p>
        </div>

        {/* Status-specific guidance */}
        {showGuidance && (
          <div 
            className="mb-6 p-4 rounded-xl"
            style={{ backgroundColor: 'rgba(255, 214, 102, 0.2)' }}
          >
            <p className="text-sm" style={{ color: '#1A2B3C' }}>
              {statusGuidance[status]}
            </p>
          </div>
        )}

        {/* Emergency contacts */}
        {contacts.length > 0 && (
          <div className="mb-6">
            <p 
              className="text-xs font-medium uppercase tracking-wider mb-2"
              style={{ color: '#1A2B3C', opacity: 0.5 }}
            >
              Emergency Contacts
            </p>
            <div className="space-y-1">
              {contacts.map((contact) => (
                <p key={contact.id} className="text-sm" style={{ fontWeight: 500 }}>
                  {contact.name}: {contact.phone}
                </p>
              ))}
            </div>
          </div>
        )}

        {/* Hotline */}
        <div 
          className="p-4 rounded-xl mb-6"
          style={{ backgroundColor: '#E07830' }}
        >
          <p className="text-center" style={{ color: 'white' }}>
            <span className="text-xs font-medium uppercase tracking-wide block mb-1" style={{ opacity: 0.8 }}>
              24/7 Hotline
            </span>
            <span className="text-lg font-semibold">
              1-844-363-1423
            </span>
            <span className="text-xs block mt-0.5" style={{ opacity: 0.8 }}>
              United We Dream
            </span>
          </p>
        </div>

        {/* Disclaimer */}
        <p 
          className="text-xs text-center"
          style={{ color: '#1A2B3C', opacity: 0.4 }}
        >
          This card asserts your constitutional rights. It is not legal advice.
        </p>
      </div>
    );
  }
);

RightsCard.displayName = 'RightsCard';
