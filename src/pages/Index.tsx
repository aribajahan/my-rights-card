import { Link } from 'react-router-dom';
import { PrivacyNotice } from '@/components/PrivacyNotice';
import { FocusFrameCard } from '@/components/FocusFrameCard';
import { downloadVCard } from '@/lib/vcard';
import { ChevronDown } from 'lucide-react';

export default function Index() {
  const handleSaveContact = () => {
    downloadVCard('United We Dream Hotline', '1-844-363-1423', 'United We Dream');
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Hero Section - Full viewport with stacked headline */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 relative">
        <div className="text-center">
          <h1 className="headline-stacked headline-hero">
            <span className="block">Stay</span>
            <span className="block">Ready</span>
          </h1>
        </div>
        
        {/* Subtle scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-pulse">
          <ChevronDown size={24} className="text-muted-foreground" />
        </div>
      </section>

      {/* Three Paths Section */}
      <section className="px-6 py-12">
        <div className="max-w-md mx-auto space-y-4">
          <FocusFrameCard
            to="/prepare"
            headline="Prepare My Card"
            subhead="Lock screen ready"
          />
          <FocusFrameCard
            to="/rights"
            headline="Review My Rights"
            subhead="Door / Car / Street / Work"
          />
          <FocusFrameCard
            to="/community"
            headline="Help Your Community"
            subhead="Witness / Support / Prepare"
          />
        </div>
      </section>

      {/* Tips Section - Secondary */}
      <section className="px-6 py-8 border-t border-foreground/10">
        <div className="max-w-md mx-auto">
          <h2 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">
            Stay Ready Tips
          </h2>
          <p className="text-sm text-muted-foreground mb-4">
            Memorize a number · Record your statement · Talk to your family · Know your exits
          </p>
          <Link 
            to="/tips" 
            className="text-sm font-semibold underline underline-offset-4 decoration-1 hover:decoration-2 transition-all"
          >
            All tips →
          </Link>
        </div>
      </section>

      {/* Hotline Footer */}
      <footer className="px-6 py-8 border-t border-foreground/10 mt-auto">
        <div className="max-w-md mx-auto text-center">
          <p className="text-sm text-muted-foreground mb-4">
            If you need help now:
          </p>
          
          <h3 className="text-xs font-bold uppercase tracking-widest mb-2">
            United We Dream Hotline
          </h3>
          
          <a 
            href="tel:1-844-363-1423" 
            className="text-hotline font-bold text-2xl block mb-2"
          >
            1-844-363-1423
          </a>
          
          <p className="text-xs text-muted-foreground mb-4">
            24/7 — Free — Confidential
          </p>
          
          <button
            onClick={handleSaveContact}
            className="text-sm font-semibold underline underline-offset-4 decoration-1 hover:decoration-2 transition-all mb-8"
          >
            Save to Contacts
          </button>

          <div className="pt-6 border-t border-foreground/10 space-y-2">
            <p className="text-xs text-muted-foreground">
              This is not legal advice.
            </p>
            <p className="text-xs text-muted-foreground">
              Built with love for our communities.
            </p>
            <PrivacyNotice />
          </div>
        </div>
      </footer>
    </div>
  );
}
