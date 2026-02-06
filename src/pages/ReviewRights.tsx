import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const sections = [
  { key: 'universal', label: 'Your Universal Rights', path: '/rights/universal' },
  { key: 'door', label: 'ICE at Your Door', path: '/rights/door' },
  { key: 'car', label: 'Stopped in Your Car', path: '/rights/car' },
  { key: 'street', label: 'Stopped on the Street', path: '/rights/street' },
  { key: 'workplace', label: 'ICE at Your Workplace', path: '/rights/workplace' },
  { key: 'warrants', label: 'Warrants: Know the Difference', path: '/rights/warrants' },
  { key: 'carry', label: 'What to Carry', path: '/rights/carry' },
  { key: 'hotlines', label: 'Hotlines & Resources', path: '/rights/hotlines' },
];

export default function ReviewRights() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="px-4 py-4">
        <Link
          to="/"
          className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          <ChevronLeft size={18} />
          Home
        </Link>
      </header>

      {/* Main content */}
      <main className="px-4 pb-8">
        <div className="max-w-md mx-auto">
          <h1 className="text-3xl tracking-wide text-headline mb-6">
            Review My Rights
          </h1>

          {/* Section list */}
          <div className="bg-card rounded-2xl shadow-card overflow-hidden divide-y divide-border">
            {sections.map((section) => (
              <Link
                key={section.key}
                to={section.path}
                className="flex items-center justify-between px-4 py-4 hover:bg-muted/30 transition-colors"
              >
                <span className="font-medium">{section.label}</span>
                <ChevronRight size={20} className="text-muted-foreground" />
              </Link>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="px-4 pb-6">
        <p className="text-xs text-muted-foreground text-center max-w-sm mx-auto">
          This tool provides general information about your constitutional rights. 
          It is not legal advice.
        </p>
      </footer>
    </div>
  );
}
