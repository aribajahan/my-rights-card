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

// Bold graphic icons with human figures and brick red accents
const DoorIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Door frame */}
    <rect x="6" y="4" width="14" height="24" rx="1" stroke="#1A1A1A" strokeWidth="2.5"/>
    <circle cx="17" cy="16" r="1.2" fill="#1A1A1A"/>
    {/* Person silhouette behind door */}
    <circle cx="24" cy="10" r="3" stroke="#1A1A1A" strokeWidth="2"/>
    <path d="M24 13V20" stroke="#1A1A1A" strokeWidth="2.5" strokeLinecap="round"/>
    {/* Stop hand - brick red accent */}
    <path d="M26 15L28 13M26 15L28 17M26 15H30" stroke="#B8352E" strokeWidth="2.5" strokeLinecap="round"/>
    <circle cx="27" cy="15" r="3" fill="#B8352E"/>
  </svg>
);

const SilenceIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Head profile */}
    <ellipse cx="14" cy="14" rx="8" ry="10" stroke="#1A1A1A" strokeWidth="2.5"/>
    {/* Eye */}
    <circle cx="11" cy="12" r="1.5" fill="#1A1A1A"/>
    {/* Mouth line */}
    <path d="M9 18H15" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round"/>
    {/* Finger over lips - brick red accent */}
    <rect x="18" y="10" width="4" height="14" rx="2" fill="#B8352E"/>
    <path d="M20 8V24" stroke="#B8352E" strokeWidth="4" strokeLinecap="round"/>
  </svg>
);

const HandIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Reaching hand (left) */}
    <path d="M4 16H10" stroke="#1A1A1A" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M6 13L10 16L6 19" stroke="#1A1A1A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    {/* Blocking palm (right) - brick red accent */}
    <path d="M20 8V12" stroke="#B8352E" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M24 10V14" stroke="#B8352E" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M28 10V14" stroke="#B8352E" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M16 12V18" stroke="#B8352E" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M14 16C14 16 14 24 22 24C30 24 30 16 30 16V14C30 14 30 10 26 10" stroke="#B8352E" strokeWidth="2.5" strokeLinecap="round"/>
    {/* X block indicator */}
    <path d="M12 12L16 16M16 12L12 16" stroke="#1A1A1A" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
);

const PhoneIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Person silhouette */}
    <circle cx="10" cy="8" r="4" stroke="#1A1A1A" strokeWidth="2.5"/>
    <path d="M10 12V22" stroke="#1A1A1A" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M6 26L10 22L14 26" stroke="#1A1A1A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    {/* Phone at ear */}
    <rect x="12" y="6" width="3" height="8" rx="1" stroke="#1A1A1A" strokeWidth="2"/>
    {/* Speech bubble - brick red accent (lawyer) */}
    <path d="M20 6H28C29 6 30 7 30 8V14C30 15 29 16 28 16H24L22 19V16H20C19 16 18 15 18 14V8C18 7 19 6 20 6Z" fill="#B8352E"/>
    <path d="M21 10H27M21 13H25" stroke="#F5F2E8" strokeWidth="1.5" strokeLinecap="round"/>
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
          {/* MY RIGHTS headline - Anton font */}
          <h1
            style={{
              fontFamily: "'Anton', sans-serif",
              fontSize: '72px',
              lineHeight: '1',
              letterSpacing: '-1px',
              marginBottom: '16px',
              color: '#B8352E',
            }}
          >
            MY RIGHTS
          </h1>

          {/* Rights strips */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
            {rights.map((right, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  height: '88px',
                  borderRadius: '12px',
                  overflow: 'hidden',
                }}
              >
                {/* Icon box - cream with black border */}
                <div
                  style={{
                    width: '88px',
                    height: '88px',
                    backgroundColor: '#F5F2E8',
                    border: '3px solid #1A1A1A',
                    borderRadius: '12px 0 0 12px',
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
                      fontSize: '26px',
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
