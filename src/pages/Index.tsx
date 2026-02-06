import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PrivacyNotice } from '@/components/PrivacyNotice';

export default function Index() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Main content */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-16">
        <div className="w-full max-w-md">
          {/* Headline with overlapping brush script accent */}
          <div className="mb-16">
            <p 
              className="text-5xl uppercase -mb-6 relative z-0"
              style={{ fontFamily: 'Caveat, cursive', color: '#8A8A8A' }}
            >
              know your rights
            </p>
            <h1 className="text-7xl tracking-wide text-headline mb-6 relative z-10">
              Stay Ready
            </h1>
            <p className="text-foreground text-lg font-medium max-w-sm">
              Know what to say if ICE comes to your door, car, or workplace.
            </p>
          </div>

          {/* Action buttons - minimal corner bracket style */}
          <div className="space-y-6 mb-16">
            <Link
              to="/prepare"
              className="btn-bracket w-full text-center group"
            >
              <span className="flex items-center justify-center gap-3">
                PREPARE MY CARD
                <ArrowRight size={18} className="opacity-50 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link
              to="/rights"
              className="btn-text w-full text-center group flex items-center justify-center gap-2"
            >
              REVIEW MY RIGHTS
              <ArrowRight size={16} className="opacity-40 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Hotline - minimal treatment */}
          <div className="border-t border-border/50 pt-8">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3">
              Report ICE Activity
            </p>
            <div className="flex items-baseline gap-3">
              <span className="text-sm font-medium text-muted-foreground">United We Dream</span>
              <a
                href="tel:1-844-363-1423"
                className="text-hotline font-bold text-lg hover:opacity-80 transition-opacity"
              >
                1-844-363-1423
              </a>
              <span className="text-xs font-semibold text-muted-foreground">24/7</span>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="px-6 pb-8">
        <p className="text-xs text-muted-foreground max-w-sm mx-auto leading-relaxed">
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