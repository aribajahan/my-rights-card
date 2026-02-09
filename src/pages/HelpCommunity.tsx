import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { NavListItem } from '@/components/NavListItem';
import { HamburgerMenu } from '@/components/HamburgerMenu';

const sections = [
  { key: 'make-card', label: 'Make a Card for Someone', path: '/community/make-card' },
  { key: 'setup-phone', label: 'Set Up Their Phone', path: '/community/setup-phone' },
  { key: 'witness', label: 'If You Witness an Encounter', path: '/community/witness' },
  { key: 'detained', label: 'If Someone Is Detained', path: '/community/detained' },
  { key: 'family', label: 'Prepare Your Family', path: '/community/family' },
  { key: 'share', label: 'Share Safely', path: '/community/share' },
  { key: 'support', label: 'Support & Mutual Aid', path: '/community/support' },
];

export default function HelpCommunity() {
  return (
    <div className="min-h-screen bg-background animate-page-enter">
      {/* Header */}
      <header className="px-6 py-6 flex items-center justify-between">
        <Link
          to="/"
          className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          <ChevronLeft size={18} />
          Home
        </Link>
        <HamburgerMenu />
      </header>

      {/* Main content */}
      <main className="px-6 pb-12">
        <div className="max-w-md mx-auto">
          {/* Stacked title */}
          <h1 className="headline-stacked headline-section mb-8">
            <span className="block">Help Your</span>
            <span className="block">Community</span>
          </h1>

          {/* Section list */}
          <nav className="nav-list">
            {sections.map((section) => (
              <NavListItem
                key={section.key}
                to={section.path}
                label={section.label}
              />
            ))}
          </nav>
        </div>
      </main>

      {/* Footer */}
      <footer className="px-6 pb-8 border-t border-foreground/10 pt-6">
        <div className="max-w-sm mx-auto text-center space-y-3">
          <Link 
            to="/hotlines" 
            className="text-sm font-medium underline underline-offset-4 hover:text-muted-foreground transition-colors"
          >
            Hotlines & Resources →
          </Link>
          <p className="text-xs text-muted-foreground">
            This is not legal advice.
          </p>
        </div>
      </footer>
    </div>
  );
}
