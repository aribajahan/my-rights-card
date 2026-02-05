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
        className="font-body"
        style={{
          width: '540px',
          minHeight: '960px',
          aspectRatio: '9/16',
          backgroundColor: '#EFE9C8',
          color: '#0F2A3F',
          padding: '48px',
          fontFamily: "'Inter', system-ui, sans-serif",
        }}
      >
        {/* Header */}
        <div className="mb-10">
          <h1 
            className="text-4xl leading-tight tracking-tight mb-3"
            style={{ 
              color: '#0F2A3F',
              fontFamily: "'Source Serif 4', Georgia, serif",
              fontWeight: 700,
            }}
          >
            Know Your Rights
          </h1>
          {/* Golden accent line */}
          <div 
            className="h-1 w-20"
            style={{ backgroundColor: '#F7C86A' }}
          />
        </div>

        {/* Rights */}
        <div className="space-y-5 mb-8">
          <div className="flex items-start gap-4">
            <div 
              className="w-2 h-2 mt-2.5 flex-shrink-0 rounded-full"
              style={{ backgroundColor: '#0F2A3F' }}
            />
            <p className="text-lg font-medium leading-snug">
              You have the right to remain silent.
            </p>
          </div>
          
          <div className="flex items-start gap-4">
            <div 
              className="w-2 h-2 mt-2.5 flex-shrink-0 rounded-full"
              style={{ backgroundColor: '#0F2A3F' }}
            />
            <p className="text-lg font-medium leading-snug">
              You do not have to open your door without a warrant signed by a judge.
            </p>
          </div>
          
          <div className="flex items-start gap-4">
            <div 
              className="w-2 h-2 mt-2.5 flex-shrink-0 rounded-full"
              style={{ backgroundColor: '#0F2A3F' }}
            />
            <p className="text-lg font-medium leading-snug">
              You do not have to consent to a search.
            </p>
          </div>
          
          <div className="flex items-start gap-4">
            <div 
              className="w-2 h-2 mt-2.5 flex-shrink-0 rounded-full"
              style={{ backgroundColor: '#0F2A3F' }}
            />
            <p className="text-lg font-medium leading-snug">
              You have the right to a lawyer.
            </p>
          </div>
        </div>

        {/* Calm reminder - subtle golden background */}
        <div 
          className="p-4 mb-6 rounded-sm"
          style={{ backgroundColor: '#F7C86A' }}
        >
          <p 
            className="text-base font-semibold text-center"
            style={{ color: '#0F2A3F' }}
          >
            Stay calm. Do not run. Do not lie.
          </p>
        </div>

        {/* Status-specific guidance */}
        {showGuidance && (
          <div 
            className="mb-6 p-4 rounded-sm"
            style={{ 
              borderLeft: '3px solid #F7C86A',
              backgroundColor: 'rgba(247, 200, 106, 0.15)',
            }}
          >
            <p className="text-base" style={{ color: '#0F2A3F' }}>
              {statusGuidance[status]}
            </p>
          </div>
        )}

        {/* Emergency contacts */}
        {contacts.length > 0 && (
          <div className="mb-6">
            <p 
              className="text-xs font-semibold uppercase tracking-wider mb-2"
              style={{ color: '#0F2A3F', opacity: 0.6 }}
            >
              Emergency Contacts
            </p>
            <div className="space-y-1">
              {contacts.map((contact) => (
                <p key={contact.id} className="text-base">
                  {contact.name}: {contact.phone}
                </p>
              ))}
            </div>
          </div>
        )}

        {/* Divider */}
        <div 
          className="h-px w-full mb-6"
          style={{ backgroundColor: '#0F2A3F', opacity: 0.2 }}
        />

        {/* Hotline */}
        <div className="mb-6">
          <p 
            className="text-xs font-semibold uppercase tracking-wider mb-1"
            style={{ color: '#0F2A3F', opacity: 0.6 }}
          >
            24/7 Hotline
          </p>
          <p className="text-lg font-semibold" style={{ color: '#0F2A3F' }}>
            United We Dream: 1-844-363-1423
          </p>
        </div>

        {/* Disclaimer */}
        <p 
          className="text-xs text-center mt-auto"
          style={{ color: '#0F2A3F', opacity: 0.5 }}
        >
          This card asserts your constitutional rights. It is not legal advice.
        </p>
      </div>
    );
  }
);

RightsCard.displayName = 'RightsCard';
