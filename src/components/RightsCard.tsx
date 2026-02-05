import { forwardRef } from 'react';
import { ImmigrationStatus, EmergencyContact, DocumentInfo, statusLabels, documentLabels } from '@/types/card';
import { DoorClosed, CircleSlash, SearchX, Scale } from 'lucide-react';

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

export const RightsCard = forwardRef<HTMLDivElement, RightsCardProps>(
  ({ status, documentInfo, contacts }, ref) => {
    const showDocument = documentInfo.type && documentLabels[documentInfo.type];
    const statusBadge = getStatusBadge(status);

    const rights = [
      { icon: DoorClosed, text: 'NO WARRANT,\nNO ENTRY' },
      { icon: CircleSlash, text: 'RIGHT TO\nSILENCE' },
      { icon: SearchX, text: 'NO SEARCH\nWITHOUT CONSENT' },
      { icon: Scale, text: 'RIGHT TO\nA LAWYER' },
    ];

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
            backgroundColor: '#1A1A1A',
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
              color: '#1A1A1A',
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
                  <right.icon size={28} color="white" strokeWidth={2} />
                </div>
                {/* Text box - cream with border */}
                <div
                  style={{
                    flex: 1,
                    backgroundColor: '#F5F2E8',
                    border: '2px solid #1A1A1A',
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
              backgroundColor: '#1A1A1A',
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
              backgroundColor: '#1A1A1A',
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
