import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { HamburgerMenu } from '@/components/HamburgerMenu';

export default function Hotlines() {
  return (
    <div className="min-h-screen bg-background animate-page-enter">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm">
        <div className="container flex items-center justify-between p-4">
          <Link
            to="/"
            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ChevronLeft size={18} />
            Home
          </Link>
          <HamburgerMenu />
        </div>
      </header>

      {/* Content */}
      <main className="container py-6 px-4 pb-24">
        <article className="max-w-lg mx-auto">
          <h1 className="headline-stacked headline-page mb-4">
            <span className="block">Hotlines &</span>
            <span className="block">Resources</span>
          </h1>

          <p className="text-muted-foreground mb-6">
            Save these now. In an emergency, you may not have time to search.
          </p>

          <div className="section-divider mb-6" />

          {/* NEED HELP RIGHT NOW */}
          <section className="mb-8">
            <h2 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
              Need Help Right Now
            </h2>
            
            <div className="bg-card p-4 mb-4">
              <p className="font-bold">United We Dream — MigraWatch</p>
              <a href="tel:1-844-363-1423" className="text-hotline font-bold text-xl block my-1">
                1-844-363-1423
              </a>
              <p className="text-xs text-muted-foreground">(call or text)</p>
              <p className="text-sm mt-1">Report ICE activity, rapid response</p>
            </div>

            <div className="bg-card p-4">
              <p className="font-bold">National Immigration Detention Hotline</p>
              <p className="text-sm">Inside detention: dial <span className="font-bold">9233#</span></p>
              <a href="tel:2097573733" className="text-hotline font-bold text-lg block my-1">
                (209) 757-3733
              </a>
              <p className="text-sm">Report abuse, find resources</p>
            </div>

            <p className="text-xs text-muted-foreground mt-3 italic">
              Tip: Save these under a neutral contact name.
            </p>
          </section>

          {/* IF SOMEONE IS DETAINED */}
          <section className="mb-8">
            <h2 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
              If Someone Is Detained
            </h2>
            
            <div className="space-y-3 text-sm">
              <div>
                <p className="font-bold">Find where they're being held</p>
                <a href="https://locator.ice.gov" target="_blank" rel="noopener noreferrer" className="underline hover:text-muted-foreground transition-colors">
                  locator.ice.gov
                </a>
              </div>
              <div>
                <p className="font-bold">Find their court date</p>
                <a href="tel:1-800-898-7180" className="font-medium">1-800-898-7180</a>
              </div>
              <div>
                <p className="font-bold">Step-by-step guide</p>
                <a href="https://nilc.org" target="_blank" rel="noopener noreferrer" className="underline hover:text-muted-foreground transition-colors">
                  nilc.org — "How to find a loved one"
                </a>
              </div>
            </div>
          </section>

          {/* FIND LEGAL HELP */}
          <section className="mb-8">
            <h2 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
              Find Legal Help
            </h2>
            
            <div className="space-y-3 text-sm">
              <div>
                <p className="font-bold">Immigration Legal Services Directory</p>
                <a href="https://immigrationadvocates.org" target="_blank" rel="noopener noreferrer" className="underline hover:text-muted-foreground transition-colors">
                  immigrationadvocates.org
                </a>
              </div>
              <div>
                <p className="font-bold">Immigration Law Help</p>
                <a href="https://immigrationlawhelp.org" target="_blank" rel="noopener noreferrer" className="underline hover:text-muted-foreground transition-colors">
                  immigrationlawhelp.org
                </a>
              </div>
              <div>
                <p className="font-bold">Immi</p>
                <a href="https://immi.org" target="_blank" rel="noopener noreferrer" className="underline hover:text-muted-foreground transition-colors">
                  immi.org
                </a>
              </div>
              <div>
                <p className="font-bold">AILA Lawyer Search</p>
                <a href="https://ailalawyer.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-muted-foreground transition-colors">
                  ailalawyer.com
                </a>
              </div>
            </div>
          </section>

          {/* BOND FUNDS */}
          <section className="mb-8">
            <h2 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
              Bond Funds
            </h2>
            
            <div className="space-y-3 text-sm">
              <div>
                <p className="font-bold">National Bail Fund Network</p>
                <a href="https://communityjusticeexchange.org" target="_blank" rel="noopener noreferrer" className="underline hover:text-muted-foreground transition-colors">
                  communityjusticeexchange.org
                </a>
              </div>
              <div>
                <p className="font-bold">Envision Freedom Fund</p>
                <a href="https://envisionfreedom.org" target="_blank" rel="noopener noreferrer" className="underline hover:text-muted-foreground transition-colors">
                  envisionfreedom.org
                </a>
              </div>
            </div>
          </section>

          {/* PRINTABLE RIGHTS CARDS */}
          <section className="mb-8">
            <h2 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
              Printable Rights Cards
            </h2>
            
            <ul className="list-none space-y-1 text-sm">
              <li>— <a href="https://www.aclu.org/know-your-rights/page/2" target="_blank" rel="noopener noreferrer" className="underline hover:text-muted-foreground transition-colors">ACLU Know Your Rights</a></li>
              <li>— <a href="https://www.ilrc.org/redcards" target="_blank" rel="noopener noreferrer" className="underline hover:text-muted-foreground transition-colors">ILRC Red Cards</a></li>
              <li>— <a href="https://www.nilc.org/resources/everyone-has-certain-basic-rights/" target="_blank" rel="noopener noreferrer" className="underline hover:text-muted-foreground transition-colors">NILC Know Your Rights</a></li>
            </ul>
          </section>

          {/* AVOID SCAMS */}
          <div className="warning-box my-6">
            <p className="text-xs font-bold uppercase tracking-wider mb-2">⚠ Avoid Scams</p>
            <p className="text-sm mb-2">
              Only get legal help from a lawyer or DOJ-accredited representative.
            </p>
            <p className="text-sm mb-2">
              Never trust a "notario" — in the U.S., a notario is NOT a lawyer.
            </p>
            <p className="text-sm">
              FTC guide: <a href="https://consumer.ftc.gov" target="_blank" rel="noopener noreferrer" className="underline">consumer.ftc.gov</a>
            </p>
          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className="px-4 pb-6 border-t border-foreground/10 pt-6">
        <div className="max-w-sm mx-auto text-center">
          <p className="text-xs text-muted-foreground">
            This is not legal advice. For advice about your specific situation, consult an immigration attorney.
          </p>
        </div>
      </footer>
    </div>
  );
}
