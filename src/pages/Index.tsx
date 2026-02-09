import { Link } from 'react-router-dom';
import { PrivacyNotice } from '@/components/PrivacyNotice';
import { FocusFrameCard } from '@/components/FocusFrameCard';
export default function Index() {
  return <div className="min-h-screen bg-background flex flex-col">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center px-6 pt-12 pb-8">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">
            Know Your Rights
          </p>
          <h1 className="headline-stacked headline-hero">
            <span className="block">Stay</span>
            <span className="block">Ready</span>
          </h1>
        </div>
      </section>

      {/* Three Paths Section */}
      <section className="px-6 py-[15px]">
        <div className="max-w-md mx-auto space-y-4">
          <FocusFrameCard to="/prepare" headline="Prepare My Card" subhead="Save to your lock screen" />
          <FocusFrameCard to="/rights" headline="Review My Rights" subhead="Door / Car / Street / Work" />
          <FocusFrameCard to="/community" headline="Help Your Community" subhead="Support / Witness / Prepare" />
        </div>
      </section>

      {/* Tips Section */}
      <section className="px-6 border-t border-foreground/10 py-[15px]">
        <div className="max-w-md mx-auto">
          <h2 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">
            Stay Ready Tips
          </h2>
          <p className="text-sm text-muted-foreground mb-4">Lock screen · Emergency contacts · Practice your rights · Audio setup</p>
          <Link to="/tips" className="text-sm font-semibold underline underline-offset-4 decoration-1 hover:decoration-2 transition-all">
            All tips →
          </Link>
        </div>
      </section>

      {/* Hotline Footer */}
      <footer className="px-6 border-t border-foreground/10 py-6">
        <div className="max-w-md mx-auto text-center">
          <p className="text-sm text-muted-foreground mb-3">If you need help now:</p>
          
          <p className="text-xs font-bold uppercase tracking-widest mb-1">
        </p>
          <a href="tel:1-844-363-1423" className="text-hotline font-bold text-xl block mb-1">
            1-844-363-1423
          </a>
          <p className="text-xs text-muted-foreground mb-4">United We Dream Hotline. 24/7 · Free · Confidential</p>
          
          <Link to="/hotlines" className="text-sm font-medium underline underline-offset-4 hover:text-muted-foreground transition-colors block mb-6">
            All hotlines & resources →
          </Link>

          <div className="border-t border-foreground/10 pt-4 space-y-0.5">
            <p className="text-xs text-muted-foreground">This is not legal advice.</p>
            <PrivacyNotice />
            <Link to="/about" className="text-xs text-muted-foreground underline hover:text-foreground transition-colors block pt-1">
              About
            </Link>
          </div>
        </div>
      </footer>
    </div>;
}