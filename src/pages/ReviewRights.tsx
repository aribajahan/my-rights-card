import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { NavListItem } from '@/components/NavListItem';
import { FocusFrameCard } from '@/components/FocusFrameCard';
import { HamburgerMenu } from '@/components/HamburgerMenu';

const sections = [
  { key: 'universal', label: 'Universal Rights', path: '/rights/universal' },
  { key: 'door', label: 'At Your Door', path: '/rights/door' },
  { key: 'car', label: 'In Your Car', path: '/rights/car' },
  { key: 'street', label: 'On the Street', path: '/rights/street' },
  { key: 'workplace', label: 'At Work', path: '/rights/workplace' },
  { key: 'checkpoint', label: 'At a Checkpoint', path: '/rights/checkpoint' },
  { key: 'detained', label: "If You're Detained", path: '/rights/detained' },
  { key: 'warrants', label: 'Warrants', path: '/rights/warrants' },
  { key: 'recording', label: 'Recording & Reporting', path: '/rights/recording' },
];

export default function ReviewRights() {
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
            <span className="block">Review</span>
            <span className="block">My Rights</span>
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
          
          {/* Practice section */}
          <h2 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mt-8 mb-4">
            Practice
          </h2>
          <FocusFrameCard
            to="/rights/practice"
            headline="Practice Saying Your Rights Out Loud"
            subhead="Get comfortable saying these words"
          />
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
