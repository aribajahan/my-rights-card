import { Link } from 'react-router-dom';

export interface TipLink {
  label: string;
  to: string;
}

interface RightsPageFooterProps {
  tips: TipLink[];
}

export function RightsPageFooter({ tips }: RightsPageFooterProps) {
  return (
    <footer className="px-4 pb-6 border-t border-foreground/10 pt-6">
      <div className="max-w-lg mx-auto">
        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
          Stay Ready
        </p>

        <nav className="space-y-0">
          {tips.map((tip) => (
            <Link
              key={tip.to}
              to={tip.to}
              className="flex items-center justify-between py-3 text-sm text-foreground/70 hover:text-foreground transition-colors"
            >
              <span>{tip.label}</span>
              <span>→</span>
            </Link>
          ))}
        </nav>

        <div className="border-t border-foreground/10 mt-4 pt-4 text-center space-y-2">
          <a href="tel:1-844-363-1423" className="text-hotline font-bold text-lg block">
            1-844-363-1423
          </a>
          <p className="text-xs text-muted-foreground">United We Dream — 24/7</p>
          <p className="text-xs text-muted-foreground">This is not legal advice.</p>
        </div>
      </div>
    </footer>
  );
}
