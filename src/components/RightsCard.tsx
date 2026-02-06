import { forwardRef } from 'react';
import { ImmigrationStatus, EmergencyContact, DocumentInfo, statusLabels, documentLabels } from '@/types/card';

interface RightsCardProps {
  status: ImmigrationStatus;
  documentInfo: DocumentInfo;
  contacts: EmergencyContact[];
}

const getStatusBadge = (status: ImmigrationStatus): string => {
  switch (status) {
    case 'citizen': return 'U.S. CITIZEN';
    case 'greenCard': return 'PERMANENT RESIDENT';
    case 'visa': return 'VISA HOLDER';
    case 'dacaTps': return 'DACA / TPS';
    case 'asylum': return 'ASYLUM SEEKER';
    case 'undocumented': return 'UNDOCUMENTED';
    default: return '';
  }
};

// Bold, stencil-style SVG icons for the card
const DoorIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="4" width="16" height="24" rx="2" stroke="white" strokeWidth="3"/>
    <circle cx="20" cy="16" r="1.5" fill="white"/>
    <path d="M6 4L26 28" stroke="white" strokeWidth="3" strokeLinecap="round"/>
  </svg>
);

const SilenceIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="18" r="10" stroke="white" strokeWidth="3"/>
    <path d="M16 4V8" stroke="white" strokeWidth="3" strokeLinecap="round"/>
    <path d="M12 15C12 15 13 18 16 18C19 18 20 15 20 15" stroke="white" strokeWidth="3" strokeLinecap="round"/>
    <path d="M6 6L26 26" stroke="white" strokeWidth="3" strokeLinecap="round"/>
  </svg>
);

const HandIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 4V18" stroke="white" strokeWidth="3" strokeLinecap="round"/>
    <path d="M12 8V16" stroke="white" strokeWidth="3" strokeLinecap="round"/>
    <path d="M20 8V16" stroke="white" strokeWidth="3" strokeLinecap="round"/>
    <path d="M8 12V18C8 24 12 28 16 28C20 28 24 24 24 18V12" stroke="white" strokeWidth="3" strokeLinecap="round"/>
  </svg>
);

const PhoneIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 5C7 5 9 4 11 6C13 8 12 10 12 10L10 12C10 12 12 16 16 20C20 24 22 22 22 22L24 20C24 20 26 19 28 21C30 23 27 25 27 25C25 27 21 28 16 23C11 18 8 12 7 9C6 6 7 5 7 5Z" stroke="white" strokeWidth="3" strokeLinecap="round"/>
  </svg>
);

const rights = [
  { icon: DoorIcon, text: 'NO WARRANT,\nNO ENTRY' },
  { icon: SilenceIcon, text: 'RIGHT TO\nSILENCE' },
  { icon: HandIcon, text: 'NO SEARCH\nWITHOUT CONSENT' },
  { icon: PhoneIcon, text: 'RIGHT TO\nA LAWYER' },
];

export const RightsCard = forwardRef<HTMLDivElement, RightsCardProps>(
  ({ status, documentInfo, contacts }, ref) => {
    const showDocument = documentInfo.type && documentLabels[documentInfo.type];
    const statusBadge = getStatusBadge(status);

    return (
      <div
        ref={ref}
        style={{
          width: '540px',
          height: '960px',
          backgroundColor: '#F5F2E8',
          color: '#1A1A1A',
          fontFamily: "'Inter', system-ui, sans-serif",
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Top Bar - Black background with document info */}
        <div
          style={{
            backgroundColor: '#B8352E',
            padding: '20px 24px',
            color: 'white',
          }}
        >
          <div className="flex justify-between items-start">
            <div>
              <p style={{ fontSize: '10px', letterSpacing: '0.1em', opacity: 0.7, marginBottom: '4px' }}>
                DOCUMENT TYPE
              </p>
              <p style={{ fontSize: '16px', fontWeight: 600 }}>
                {showDocument ? documentLabels[documentInfo.type!] : 'Not specified'}
              </p>
              {documentInfo.number && (
                <>
                  <p style={{ fontSize: '10px', letterSpacing: '0.1em', opacity: 0.7, marginTop: '12px', marginBottom: '4px' }}>
                    A-NUMBER
                  </p>
                  <p style={{ fontSize: '16px', fontWeight: 600 }}>
                    {documentInfo.number}
                  </p>
                </>
              )}
            </div>
            {statusBadge && (
              <div
                style={{
                  backgroundColor: '#F5F2E8',
                  color: '#1A1A1A',
                  padding: '8px 16px',
                  borderRadius: '4px',
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                }}
              >
                {statusBadge}
              </div>
            )}
          </div>
        </div>

        {/* Main content area */}
        <div style={{ flex: 1, padding: '24px', display: 'flex', flexDirection: 'column' }}>
          {/* MY RIGHTS headline - Anton font, massive */}
          <h1
            style={{
              fontFamily: "'Anton', sans-serif",
              fontSize: '96px',
              lineHeight: '0.9',
              letterSpacing: '-2px',
              marginBottom: '24px',
              color: '#B8352E',
            }}
          >
            MY<br />RIGHTS
          </h1>

          {/* Rights strips */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
            {rights.map((right, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  height: '72px',
                  borderRadius: '12px',
                  overflow: 'hidden',
                }}
              >
                {/* Icon box - black */}
                <div
                  style={{
                    width: '72px',
                    height: '72px',
                    backgroundColor: '#1A1A1A',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <right.icon />
                </div>
                {/* Text box - cream with border */}
                <div
                  style={{
                    flex: 1,
                    backgroundColor: '#F5F2E8',
                    border: '3px solid #B8352E',
                    borderLeft: 'none',
                    borderRadius: '0 12px 12px 0',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '0 20px',
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Anton', sans-serif",
                      fontSize: '22px',
                      lineHeight: '1.1',
                      letterSpacing: '0.5px',
                      whiteSpace: 'pre-line',
                    }}
                  >
                    {right.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Calm bar - black */}
          <div
            style={{
              backgroundColor: '#B8352E',
              borderRadius: '12px',
              padding: '16px 24px',
              marginBottom: '16px',
            }}
          >
            <p
              style={{
                fontFamily: "'Anton', sans-serif",
                fontSize: '20px',
                color: 'white',
                textAlign: 'center',
                letterSpacing: '1px',
              }}
            >
              STAY CALM · DON'T RUN · DON'T LIE
            </p>
          </div>

          {/* Emergency contacts */}
          {contacts.length > 0 && (
            <div style={{ marginBottom: '12px' }}>
              <p
                style={{
                  fontSize: '10px',
                  letterSpacing: '0.15em',
                  color: '#666',
                  marginBottom: '8px',
                  fontWeight: 500,
                }}
              >
                EMERGENCY CONTACTS
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                {contacts.map((contact) => (
                  <div
                    key={contact.id}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      fontSize: '14px',
                      fontWeight: 500,
                    }}
                  >
                    <span>{contact.name}</span>
                    <span>{contact.phone}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Spacer */}
          <div style={{ flex: 1 }} />

          {/* Hotline bar - black, at bottom */}
          <div
            style={{
              backgroundColor: '#B8352E',
              borderRadius: '12px',
              padding: '16px 24px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '12px',
            }}
          >
            <div>
              <p
                style={{
                  fontSize: '10px',
                  letterSpacing: '0.15em',
                  color: 'rgba(255,255,255,0.7)',
                  marginBottom: '2px',
                }}
              >
                24/7 HOTLINE
              </p>
              <p style={{ fontSize: '12px', color: 'white', fontWeight: 500 }}>
                United We Dream
              </p>
            </div>
            <p
              style={{
                fontFamily: "'Anton', sans-serif",
                fontSize: '24px',
                color: 'white',
                letterSpacing: '1px',
              }}
            >
              1-844-363-1423
            </p>
          </div>

          {/* Disclaimer */}
          <p
            style={{
              fontSize: '9px',
              textAlign: 'center',
              color: '#999',
              letterSpacing: '0.02em',
            }}
          >
            This card asserts your constitutional rights. It is not legal advice.
          </p>
        </div>
      </div>
    );
  }
);

RightsCard.displayName = 'RightsCard';
