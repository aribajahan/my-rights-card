import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { PrivacyNotice } from '@/components/PrivacyNotice';
import { FocusFrameCard } from '@/components/FocusFrameCard';

const sections = [
  { key: 'witness', label: 'Be a Good Witness', path: '/community/witness' },
  { key: 'bystander', label: 'Bystander Rights', path: '/community/bystander' },
  { key: 'arrest', label: 'If You See an Arrest', path: '/community/arrest' },
  { key: 'family', label: 'Prepare Your Family', path: '/community/family' },
  { key: 'rapid-response', label: 'Rapid Response', path: '/community/rapid-response' },
  { key: 'mutual-aid', label: 'Mutual Aid', path: '/community/mutual-aid' },
];

export default function HelpCommunity() {
  return (
    <div className="min-h-screen bg-background animate-page-enter">
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
          {/* Stacked title */}
          <h1 className="headline-stacked headline-section mb-6">
            <span className="block">Help Your</span>
            <span className="block">Community</span>
          </h1>

          {/* Divider */}
          <div className="section-divider mb-8" />

          {/* Section list as Focus Frame cards */}
          <nav className="space-y-3">
            {sections.map((section) => (
              <FocusFrameCard
                key={section.key}
                to={section.path}
                headline={section.label}
              />
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
