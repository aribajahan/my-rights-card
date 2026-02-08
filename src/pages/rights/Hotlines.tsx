import { InfoPageLayout } from '@/components/InfoPageLayout';
import { downloadVCard } from '@/lib/vcard';

export default function Hotlines() {
  const handleSaveContact = () => {
    downloadVCard('United We Dream Hotline', '1-844-363-1423', 'United We Dream');
  };

  return (
    <InfoPageLayout title="Hotlines & Resources">
      <p className="text-lg text-muted-foreground mb-8">
        Save these numbers. In an emergency, you may not have time to search.
      </p>

      <section>
        <h2>Emergency Hotlines</h2>
        <div className="space-y-6 my-6">
          <div className="border-b border-border/50 pb-4">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">United We Dream</p>
            <a href="tel:1-844-363-1423" className="text-hotline font-bold text-xl hover:opacity-80 transition-opacity">
              1-844-363-1423
            </a>
            <p className="text-sm text-muted-foreground mt-1">24/7 — Report ICE activity, get rapid response</p>
            <button
              onClick={handleSaveContact}
              className="mt-2 text-sm font-medium underline underline-offset-4 hover:text-muted-foreground transition-colors"
            >
              Save to Contacts
            </button>
          </div>
          
          <div className="border-b border-border/50 pb-4">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">National Immigration Law Center</p>
            <a href="tel:1-213-639-3900" className="text-hotline font-bold text-xl hover:opacity-80 transition-opacity">
              1-213-639-3900
            </a>
            <p className="text-sm text-muted-foreground mt-1">Legal resources and information</p>
          </div>
          
          <div className="border-b border-border/50 pb-4">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">ACLU Immigrants' Rights</p>
            <a href="tel:1-212-549-2500" className="text-hotline font-bold text-xl hover:opacity-80 transition-opacity">
              1-212-549-2500
            </a>
            <p className="text-sm text-muted-foreground mt-1">Know your rights, report violations</p>
          </div>
        </div>
      </section>

      <section>
        <h2>If Someone Is Detained</h2>
        <ul className="list-none space-y-2 my-4">
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            <a href="https://locator.ice.gov" target="_blank" rel="noopener noreferrer" className="underline hover:text-muted-foreground transition-colors">
              ICE Detainee Locator
            </a> — Find where someone is being held
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            <a href="https://immigrantbailfund.org" target="_blank" rel="noopener noreferrer" className="underline hover:text-muted-foreground transition-colors">
              National Immigration Bond Fund
            </a>
          </li>
        </ul>
      </section>

      <section>
        <h2>Find a Lawyer</h2>
        <ul className="list-none space-y-2 my-4">
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            <a href="https://cliniclegal.org/directory" target="_blank" rel="noopener noreferrer" className="underline hover:text-muted-foreground transition-colors">
              CLINIC Legal Directory
            </a>
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            <a href="https://immigrationadvocates.org" target="_blank" rel="noopener noreferrer" className="underline hover:text-muted-foreground transition-colors">
              Immigration Advocates Network
            </a>
          </li>
        </ul>
      </section>

      <section>
        <h2>Legal Resources</h2>
        <ul className="list-none space-y-2 my-4">
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            <a href="https://www.immigrantdefenseproject.org" target="_blank" rel="noopener noreferrer" className="underline hover:text-muted-foreground transition-colors">
              Immigrant Defense Project
            </a>
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            <a href="https://www.ilrc.org" target="_blank" rel="noopener noreferrer" className="underline hover:text-muted-foreground transition-colors">
              Immigrant Legal Resource Center
            </a>
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            <a href="https://www.aclu.org/know-your-rights/immigrants-rights" target="_blank" rel="noopener noreferrer" className="underline hover:text-muted-foreground transition-colors">
              ACLU Know Your Rights
            </a>
          </li>
        </ul>
      </section>

      <section>
        <h2>Tips</h2>
        <ul className="list-none space-y-2 my-4">
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Save these numbers in your phone now
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Write them on paper and keep in your wallet
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Share with family and trusted friends
          </li>
        </ul>
      </section>

      <p className="text-center text-muted-foreground mt-12 pt-8 border-t border-border/50">
        Be prepared. Save these numbers now.
      </p>
    </InfoPageLayout>
  );
}
