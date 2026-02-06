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

// Bold linocut/woodcut style icons - white on red, thick strokes, solid fills
const DoorIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Bold door shape */}
    <rect x="8" y="4" width="18" height="32" rx="2" fill="white"/>
    {/* Door panel detail */}
    <rect x="12" y="8" width="10" height="12" rx="1" stroke="#B91C1C" strokeWidth="2"/>
    <rect x="12" y="24" width="10" height="8" rx="1" stroke="#B91C1C" strokeWidth="2"/>
    {/* Door handle */}
    <circle cx="20" cy="20" r="2" fill="#B91C1C"/>
    {/* Bold X blocking */}
    <path d="M26 8L38 20M38 8L26 20" stroke="white" strokeWidth="4" strokeLinecap="round"/>
  </svg>
);

const SilenceIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Bold lips shape */}
    <ellipse cx="20" cy="20" rx="16" ry="10" fill="white"/>
    {/* Mouth line sealed */}
    <path d="M8 20H32" stroke="#B91C1C" strokeWidth="4" strokeLinecap="round"/>
    {/* Bold strike-through */}
    <path d="M6 32L34 8" stroke="white" strokeWidth="4" strokeLinecap="round"/>
  </svg>
);

const HandIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Bold open palm - stop gesture */}
    <path d="M20 4V14" stroke="white" strokeWidth="5" strokeLinecap="round"/>
    <path d="M12 8V16" stroke="white" strokeWidth="5" strokeLinecap="round"/>
    <path d="M28 8V16" stroke="white" strokeWidth="5" strokeLinecap="round"/>
    <path d="M6 14V20" stroke="white" strokeWidth="5" strokeLinecap="round"/>
    <path d="M34 14V20" stroke="white" strokeWidth="5" strokeLinecap="round"/>
    {/* Palm base */}
    <path d="M6 20C6 20 6 36 20 36C34 36 34 20 34 20" stroke="white" strokeWidth="5" strokeLinecap="round"/>
  </svg>
);

const PhoneIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Bold phone handset */}
    <path d="M8 8C8 8 6 8 6 12V16C6 18 8 18 8 18" stroke="white" strokeWidth="5" strokeLinecap="round"/>
    <path d="M8 18L12 22L16 18" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 18C16 18 18 18 18 22V26C18 28 16 28 16 28" stroke="white" strokeWidth="5" strokeLinecap="round"/>
    {/* Cord/connection */}
    <path d="M8 12C12 12 12 24 16 24" stroke="white" strokeWidth="3" strokeLinecap="round"/>
    {/* Signal waves */}
    <path d="M24 10C26 10 28 12 28 16" stroke="white" strokeWidth="3" strokeLinecap="round"/>
    <path d="M26 6C30 6 34 10 34 18" stroke="white" strokeWidth="3" strokeLinecap="round"/>
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
                {/* Icon box - white on red background */}
                <div
                  style={{
                    width: '88px',
                    height: '88px',
                    backgroundColor: '#B91C1C',
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
