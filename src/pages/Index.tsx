import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { PrivacyNotice } from '@/components/PrivacyNotice';

export default function Index() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Main content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        <div className="w-full max-w-md text-center">
          {/* Headline with overlapping brush script accent */}
          <div className="mb-14 relative">
            <p 
              className="text-5xl uppercase -mb-6 relative z-0"
              style={{ fontFamily: 'Caveat, cursive', color: '#8A8A8A' }}
            >
              know your rights
            </p>
            <h1 className="text-7xl tracking-wide text-headline mb-4 relative z-10">
              Stay Ready
            </h1>
            <p className="text-foreground text-xl font-medium">
              Know what to say if ICE comes to your door, car, or workplace.
            </p>
          </div>

          {/* Action cards - simplified */}
          <div className="space-y-4 mb-8">
            <Link
              to="/prepare"
              className="block bg-primary text-primary-foreground p-4 shadow-button hover:opacity-90 transition-all duration-200"
            >
              <div className="flex items-center justify-between">
                <div className="text-left">
                  <h2 className="text-lg font-bold text-primary-foreground" style={{ fontFamily: 'DM Sans, sans-serif' }}>PREPARE MY CARD</h2>
                  <p className="text-sm opacity-90">
                    Save a rights card to your phone
                  </p>
                </div>
                <ChevronRight size={24} className="opacity-70 flex-shrink-0" />
              </div>
            </Link>

            <Link
              to="/rights"
              className="block bg-card text-foreground p-4 shadow-card hover:shadow-card-hover transition-all duration-200"
            >
              <div className="flex items-center justify-between">
                <div className="text-left">
                  <h2 className="text-lg font-bold text-headline" style={{ fontFamily: 'DM Sans, sans-serif' }}>REVIEW MY RIGHTS</h2>
                  <p className="text-sm text-muted-foreground">
                    Learn what to do in different situations
                  </p>
                </div>
                <ChevronRight size={24} className="text-muted-foreground flex-shrink-0" />
              </div>
            </Link>
          </div>

          {/* Hotline box - reframed */}
          <div className="bg-card p-3 shadow-card mb-8">
            <p className="text-xs font-bold text-headline uppercase tracking-wider mb-2">
              Report ICE Activity
            </p>
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium">
                United We Dream |{' '}
                <a
                  href="tel:1-844-363-1423"
                  className="text-hotline font-bold"
                >
                  1-844-363-1423
                </a>
              </p>
              <span className="bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded-full">
                24/7
              </span>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="px-4 pb-6">
        <p className="text-xs text-muted-foreground text-center max-w-sm mx-auto">
          This tool provides general information about your constitutional rights. 
          It is not legal advice. For advice about your specific situation, consult 
          a qualified immigration attorney.
        </p>
        <div className="mt-2">
          <PrivacyNotice />
        </div>
      </footer>
    </div>
  );
}
