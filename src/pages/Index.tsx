import { Link } from 'react-router-dom';
import { FileText, BookOpen, Phone } from 'lucide-react';

export default function Index() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Main content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        <div className="w-full max-w-sm text-center">
          {/* Headline */}
          <h1 className="text-5xl tracking-wide text-headline mb-3">
            Know Your Rights
          </h1>
          <p className="text-foreground text-lg font-medium mb-10">
            Be prepared. Stay calm. Know your rights.
          </p>

          {/* Action cards */}
          <div className="space-y-4 mb-8">
            <Link
              to="/prepare"
              className="block bg-primary text-primary-foreground rounded-2xl p-5 shadow-button hover:opacity-90 transition-all duration-200"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                  <FileText size={24} />
                </div>
                <div className="text-left">
                  <h2 className="text-lg font-bold uppercase tracking-wider text-primary-foreground normal-case" style={{ fontFamily: 'DM Sans, sans-serif' }}>Prepare My Card</h2>
                  <p className="text-sm opacity-90">
                    Create a digital rights card to save on your phone
                  </p>
                </div>
              </div>
            </Link>

            <Link
              to="/review"
              className="block bg-card text-foreground rounded-2xl p-5 shadow-card hover:shadow-card-hover transition-all duration-200"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <BookOpen size={24} className="text-secondary" />
                </div>
                <div className="text-left">
                  <h2 className="text-lg font-bold uppercase tracking-wider text-headline" style={{ fontFamily: 'DM Sans, sans-serif', textTransform: 'none' }}>Review My Rights</h2>
                  <p className="text-sm text-muted-foreground">
                    Learn what to do in different situations
                  </p>
                </div>
              </div>
            </Link>
          </div>

          {/* Hotline box */}
          <div className="bg-card rounded-2xl p-4 shadow-card mb-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Phone size={20} className="text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    24/7 Hotline
                  </p>
                  <p className="text-sm font-medium">United We Dream</p>
                </div>
              </div>
              <a
                href="tel:1-844-363-1423"
                className="text-lg font-bold text-headline"
              >
                1-844-363-1423
              </a>
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
        <p className="text-xs text-muted-foreground/70 text-center mt-2">
          This tool does not collect or store any personal information.
        </p>
      </footer>
    </div>
  );
}
