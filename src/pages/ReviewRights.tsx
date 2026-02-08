import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { PrivacyNotice } from '@/components/PrivacyNotice';
import { FocusFrameCard } from '@/components/FocusFrameCard';

const sections = [
  { key: 'universal', label: 'Universal Rights', path: '/rights/universal' },
  { key: 'door', label: 'At Your Door', path: '/rights/door' },
  { key: 'car', label: 'In Your Car', path: '/rights/car' },
  { key: 'street', label: 'On the Street', path: '/rights/street' },
  { key: 'workplace', label: 'At Work', path: '/rights/workplace' },
  { key: 'warrants', label: 'Warrants', path: '/rights/warrants' },
  { key: 'carry', label: 'What to Carry', path: '/rights/carry' },
  { key: 'report', label: 'Report & Record', path: '/rights/report' },
  { key: 'state', label: 'State Rights', path: '/rights/state' },
  { key: 'hotlines', label: 'Hotlines', path: '/rights/hotlines' },
];

export default function ReviewRights() {
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
            <span className="block">Review</span>
            <span className="block">My Rights</span>
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
