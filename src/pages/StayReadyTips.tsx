import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { PrivacyNotice } from '@/components/PrivacyNotice';

const tips = [
  { key: 'lock-screen', label: 'Set Up Your Lock Screen', path: '/tips/lock-screen' },
  { key: 'audio-shortcut', label: 'Set Up One-Tap Audio', path: '/tips/audio-shortcut' },
  { key: 'emergency-text', label: 'Emergency Text Shortcuts', path: '/tips/emergency-text' },
  { key: 'recording', label: 'One-Tap Recording', path: '/tips/recording' },
  { key: 'location-sharing', label: 'Location Sharing Setup', path: '/tips/location-sharing' },
  { key: 'trackers', label: 'Tracker Tips (AirTags)', path: '/tips/trackers' },
  { key: 'kids', label: 'What to Tell Your Kids', path: '/tips/kids' },
];

export default function StayReadyTips() {
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
            Stay Ready Tips
          </h1>
          <p className="text-muted-foreground mb-10">
            Practical ways to prepare yourself and your family. These small steps can make a big difference.
          </p>

          {/* Tips list */}
          <nav>
            {tips.map((tip) => (
              <Link
                key={tip.key}
                to={tip.path}
                className="menu-item"
              >
                <span>{tip.label}</span>
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
