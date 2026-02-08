import { forwardRef } from 'react';
import { ImmigrationStatus, EmergencyContact, DocumentInfo, documentLabels } from '@/types/card';

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
    case 'preferNot': return '';
    default: return '';
  }
};

const rights = [
  'NO WARRANT, NO ENTRY',
  'RIGHT TO SILENCE',
  'NO SEARCH WITHOUT CONSENT',
  'DO NOT SIGN',
  'RIGHT TO A LAWYER',
];

const statementText = `I am exercising my constitutional rights. I do not wish to speak with you, answer your questions, or sign or hand you any documents based on my 5th Amendment rights. I do not consent to your entry or to any search based on my 4th Amendment rights.`;

export const RightsCard = forwardRef<HTMLDivElement, RightsCardProps>(
  ({ status, documentInfo, contacts }, ref) => {
    const showDocument = documentInfo.type && documentLabels[documentInfo.type];
    const statusBadge = getStatusBadge(status);

    return (
      <div
        ref={ref}
        style={{
          width: '1080px',
          height: '2400px',
          display: 'flex',
          flexDirection: 'column',
          fontFamily: "'Inter', system-ui, sans-serif",
        }}
      >
        {/* Top 45% - Cream area for clock/notifications */}
        <div
          style={{
            height: '1080px',
            backgroundColor: '#F5F2E8',
            flexShrink: 0,
          }}
        />

        {/* Bottom 55% - Black content area */}
        <div
          style={{
            height: '1320px',
            backgroundColor: '#1A1A1A',
            padding: '48px',
            display: 'flex',
            flexDirection: 'column',
            color: '#F5F2E8',
          }}
        >
          {/* Status Bar */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              marginBottom: '32px',
            }}
          >
            <div>
              {showDocument && (
                <>
                  <p style={{ fontSize: '24px', letterSpacing: '0.1em', opacity: 0.7, marginBottom: '4px' }}>
                    DOCUMENT TYPE
                  </p>
                  <p style={{ fontSize: '36px', fontWeight: 600 }}>
                    {documentLabels[documentInfo.type!]}
                  </p>
                  {documentInfo.number && (
                    <p style={{ fontSize: '28px', opacity: 0.7, marginTop: '4px' }}>
                      {documentInfo.number}
                    </p>
                  )}
                </>
              )}
            </div>
            {statusBadge && (
              <div
                style={{
                  backgroundColor: '#F5F2E8',
                  color: '#1A1A1A',
                  padding: '16px 28px',
                  fontSize: '26px',
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                }}
              >
                {statusBadge}
              </div>
            )}
          </div>

          {/* MY RIGHTS Headline */}
          <h1
            style={{
              fontFamily: "'Anton', sans-serif",
              fontSize: '96px',
              lineHeight: '1',
              letterSpacing: '-1px',
              marginBottom: '40px',
              color: '#F5F2E8',
            }}
          >
            MY RIGHTS
          </h1>

          {/* Rights List - Text only */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px' }}>
            {rights.map((right, i) => (
              <p
                key={i}
                style={{
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontSize: '48px',
                  fontWeight: 500,
                  lineHeight: '1.2',
                  letterSpacing: '1px',
                  color: '#F5F2E8',
                }}
              >
                {right}
              </p>
            ))}
          </div>

          {/* Calm Bar - Cream background */}
          <div
            style={{
              backgroundColor: '#F5F2E8',
              padding: '28px 36px',
              marginBottom: '32px',
            }}
          >
            <p
              style={{
                fontFamily: "'Anton', sans-serif",
                fontSize: '36px',
                color: '#1A1A1A',
                textAlign: 'center',
                letterSpacing: '2px',
              }}
            >
              STAY CALM · DON'T RUN · DON'T LIE
            </p>
          </div>

          {/* Statement Box - Cream background */}
          <div
            style={{
              backgroundColor: '#F5F2E8',
              padding: '40px',
              marginBottom: '32px',
            }}
          >
            <p
              style={{
                fontSize: '30px',
                lineHeight: '1.5',
                color: '#1A1A1A',
                fontWeight: 500,
              }}
            >
              {statementText}
            </p>
          </div>

          {/* Emergency Contacts */}
          {contacts.length > 0 && (
            <div style={{ marginBottom: '24px' }}>
              <p
                style={{
                  fontSize: '24px',
                  letterSpacing: '0.15em',
                  color: 'rgba(245, 242, 232, 0.7)',
                  marginBottom: '12px',
                  fontWeight: 500,
                }}
              >
                EMERGENCY CONTACTS
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {contacts.map((contact) => (
                  <div
                    key={contact.id}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      fontSize: '32px',
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

          {/* Disclaimer */}
          <p
            style={{
              fontSize: '20px',
              textAlign: 'center',
              color: 'rgba(245, 242, 232, 0.5)',
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
