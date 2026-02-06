import { Link } from 'react-router-dom';
import { PrivacyNotice } from '@/components/PrivacyNotice';

export default function Index() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Main content */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-16">
        <div className="w-full max-w-md">
          {/* Headline with overlapping brush script accent */}
          <div className="mb-16">
            <p className="text-5xl uppercase -mb-6 relative z-0" style={{
              fontFamily: 'Caveat, cursive',
              color: '#8A8A8A'
            }}>
              know your rights
            </p>
            <h1 className="tracking-wide text-headline mb-6 relative z-10 text-8xl">
              Stay Ready
            </h1>
            <p className="text-foreground text-lg font-medium max-w-sm font-sans">
              Know what to say if ICE comes to your door, car, or workplace.
            </p>
          </div>

          {/* Action buttons - 2 styles only */}
          <div className="space-y-6">
            <Link to="/prepare" className="btn-primary">
              PREPARE MY CARD
            </Link>

            <div className="text-center">
              <Link to="/rights" className="btn-link">
                REVIEW MY RIGHTS
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Footer with hotline */}
      <footer className="px-6 pb-8 pt-16">
        {/* Hotline - simple footer style */}
        <a 
          href="tel:1-844-363-1423" 
          className="block text-center mb-8"
        >
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-1">
            Report ICE Activity
          </p>
          <p className="text-sm font-medium text-muted-foreground mb-1">
            United We Dream
          </p>
          <span className="text-foreground font-bold text-lg underline underline-offset-4">
            1-844-363-1423
          </span>
          <span className="text-xs font-semibold text-muted-foreground ml-2">24/7</span>
        </a>
        
        <p className="text-xs text-muted-foreground max-w-sm mx-auto leading-relaxed text-center">
          This tool provides general information about your constitutional rights. 
          It is not legal advice. For advice about your specific situation, consult 
          a qualified immigration attorney.
        </p>
        <div className="mt-3">
          <PrivacyNotice />
        </div>
      </footer>
    </div>
  );
}
