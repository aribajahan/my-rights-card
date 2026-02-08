import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { PrivacyNotice } from '@/components/PrivacyNotice';
import { FocusFrameCard } from '@/components/FocusFrameCard';

const tips = [
  { key: 'lock-screen', label: 'Lock Screen Setup', path: '/tips/lock-screen' },
  { key: 'audio-shortcut', label: 'One-Tap Audio', path: '/tips/audio-shortcut' },
  { key: 'emergency-text', label: 'Emergency Text', path: '/tips/emergency-text' },
  { key: 'recording', label: 'One-Tap Recording', path: '/tips/recording' },
  { key: 'location-sharing', label: 'Location Sharing', path: '/tips/location-sharing' },
  { key: 'trackers', label: 'Tracker Tips', path: '/tips/trackers' },
  { key: 'kids', label: 'Tell Your Kids', path: '/tips/kids' },
];

export default function StayReadyTips() {
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
            <span className="block">Stay Ready</span>
            <span className="block">Tips</span>
          </h1>

          {/* Divider */}
          <div className="section-divider mb-8" />

          {/* Tips list as Focus Frame cards */}
          <nav className="space-y-3">
            {tips.map((tip) => (
              <FocusFrameCard
                key={tip.key}
                to={tip.path}
                headline={tip.label}
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
