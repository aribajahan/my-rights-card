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

// Bold linocut/woodcut style icons - white on red, thick strokes, solid fills (scaled 1.4x)
const DoorIcon = () => (
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Bold door shape */}
    <rect x="11" y="6" width="25" height="45" rx="3" fill="white"/>
    {/* Door panel detail */}
    <rect x="17" y="11" width="14" height="17" rx="1" stroke="#B91C1C" strokeWidth="3"/>
    <rect x="17" y="34" width="14" height="11" rx="1" stroke="#B91C1C" strokeWidth="3"/>
    {/* Door handle */}
    <circle cx="28" cy="28" r="3" fill="#B91C1C"/>
    {/* Bold X blocking */}
    <path d="M36 11L53 28M53 11L36 28" stroke="white" strokeWidth="5" strokeLinecap="round"/>
  </svg>
);

const SilenceIcon = () => (
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Bold lips shape */}
    <ellipse cx="28" cy="28" rx="22" ry="14" fill="white"/>
    {/* Mouth line sealed */}
    <path d="M11 28H45" stroke="#B91C1C" strokeWidth="5" strokeLinecap="round"/>
    {/* Bold strike-through */}
    <path d="M8 45L48 11" stroke="white" strokeWidth="5" strokeLinecap="round"/>
  </svg>
);

const HandIcon = () => (
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Bold open palm - stop gesture */}
    <path d="M28 6V20" stroke="white" strokeWidth="7" strokeLinecap="round"/>
    <path d="M17 11V22" stroke="white" strokeWidth="7" strokeLinecap="round"/>
    <path d="M39 11V22" stroke="white" strokeWidth="7" strokeLinecap="round"/>
    <path d="M8 20V28" stroke="white" strokeWidth="7" strokeLinecap="round"/>
    <path d="M48 20V28" stroke="white" strokeWidth="7" strokeLinecap="round"/>
    {/* Palm base */}
    <path d="M8 28C8 28 8 50 28 50C48 50 48 28 48 28" stroke="white" strokeWidth="7" strokeLinecap="round"/>
  </svg>
);

const PhoneIcon = () => (
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Bold phone handset */}
    <path d="M11 11C11 11 8 11 8 17V22C8 25 11 25 11 25" stroke="white" strokeWidth="7" strokeLinecap="round"/>
    <path d="M11 25L17 31L22 25" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M22 25C22 25 25 25 25 31V36C25 39 22 39 22 39" stroke="white" strokeWidth="7" strokeLinecap="round"/>
    {/* Cord/connection */}
    <path d="M11 17C17 17 17 34 22 34" stroke="white" strokeWidth="4" strokeLinecap="round"/>
    {/* Signal waves */}
    <path d="M34 14C36 14 39 17 39 22" stroke="white" strokeWidth="4" strokeLinecap="round"/>
    <path d="M36 8C42 8 48 14 48 25" stroke="white" strokeWidth="4" strokeLinecap="round"/>
  </svg>
);

const NoSignIcon = () => (
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Document shape */}
    <rect x="14" y="8" width="28" height="36" rx="3" fill="white"/>
    {/* Document lines */}
    <path d="M20 18H36" stroke="#B91C1C" strokeWidth="3" strokeLinecap="round"/>
    <path d="M20 26H32" stroke="#B91C1C" strokeWidth="3" strokeLinecap="round"/>
    <path d="M20 34H28" stroke="#B91C1C" strokeWidth="3" strokeLinecap="round"/>
    {/* Bold diagonal slash */}
    <path d="M8 48L48 8" stroke="white" strokeWidth="6" strokeLinecap="round"/>
  </svg>
);

const rights = [
  { icon: DoorIcon, text: 'NO WARRANT,\nNO ENTRY' },
  { icon: SilenceIcon, text: 'RIGHT TO\nSILENCE' },
  { icon: HandIcon, text: 'NO SEARCH\nWITHOUT CONSENT' },
  { icon: PhoneIcon, text: 'RIGHT TO\nA LAWYER' },
  { icon: NoSignIcon, text: 'RIGHT TO\nREFUSE TO SIGN' },
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
                  borderRadius: '0',
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
                  borderRadius: '0',
                  overflow: 'hidden',
                }}
              >
                {/* Icon box - white on red background */}
                <div
                  style={{
                    width: '88px',
                    height: '88px',
                    backgroundColor: '#B91C1C',
                    borderRadius: '0',
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
                    border: '4px solid #1A1A1A',
                    borderLeft: 'none',
                    borderRadius: '0',
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
              backgroundColor: '#1A1A1A',
              borderRadius: '0',
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
              backgroundColor: '#1A1A1A',
              borderRadius: '0',
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
