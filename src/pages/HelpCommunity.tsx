import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { PrivacyNotice } from '@/components/PrivacyNotice';

const sections = [
  { key: 'witness', label: 'How to Be a Good Witness', path: '/community/witness' },
  { key: 'bystander', label: 'Your Rights as a Bystander', path: '/community/bystander' },
  { key: 'arrest', label: 'What to Do If You See an Arrest', path: '/community/arrest' },
  { key: 'family', label: 'Prepare Your Family', path: '/community/family' },
  { key: 'rapid-response', label: 'Rapid Response Networks', path: '/community/rapid-response' },
  { key: 'mutual-aid', label: 'Mutual Aid & Support', path: '/community/mutual-aid' },
];

export default function HelpCommunity() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="px-6 py-6">
        <Link
          to="/"
          className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          <ChevronLeft size={18} />
          Home
        </Link>
      </header>

      {/* Main content */}
      <main className="px-6 pb-12">
        <div className="max-w-md mx-auto">
          <h1 className="text-3xl tracking-wide text-headline mb-4">
            Help Your Community
          </h1>
          <p className="text-muted-foreground mb-10">
            You don't have to be directly affected to help. Here's how to support your neighbors.
          </p>

          {/* Section list */}
          <nav>
            {sections.map((section) => (
              <Link
                key={section.key}
                to={section.path}
                className="menu-item"
              >
                <span>{section.label}</span>
                <ChevronRight size={18} className="text-muted-foreground" />
              </Link>
            ))}
          </nav>
        </div>
      </main>

      {/* Footer */}
      <footer className="px-6 pb-8 space-y-3">
        <p className="text-xs text-muted-foreground text-center max-w-sm mx-auto">
          This tool provides general information about your constitutional rights. 
          It is not legal advice.
        </p>
        <PrivacyNotice />
      </footer>
    </div>
  );
}
