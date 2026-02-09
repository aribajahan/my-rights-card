import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { NavListItem } from '@/components/NavListItem';
import { HamburgerMenu } from '@/components/HamburgerMenu';

export default function StayReadyTips() {
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
            <span className="block">Stay Ready</span>
            <span className="block">Tips</span>
          </h1>

          {/* ESSENTIALS */}
          <section className="mb-8">
            <h2 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
              Essentials (5 min)
            </h2>
            <nav className="nav-list">
              <NavListItem to="/tips/lock-screen" label="Lock Screen Setup" />
              <NavListItem to="/tips/emergency-contacts" label="Emergency Contacts" />
              <NavListItem to="/tips/memorize-number" label="Memorize a Number" />
              <NavListItem to="/tips/emergency-text" label="Emergency Text Shortcut" />
            </nav>
          </section>

          {/* PRACTICE */}
          <section className="mb-8">
            <div className="section-divider mb-4" />
            <h2 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
              Practice
            </h2>
            <nav className="nav-list">
              <NavListItem to="/rights/practice" label="Practice Your Rights" />
              <NavListItem to="/tips/audio" label="One-Tap Audio Setup" />
            </nav>
          </section>

          {/* ADVANCED */}
          <section>
            <div className="section-divider mb-4" />
            <h2 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
              Advanced
            </h2>
            <nav className="nav-list">
              <NavListItem to="/tips/location-sharing" label="Location Sharing" />
              <NavListItem to="/tips/privacy" label="Privacy Settings" />
            </nav>
          </section>
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
