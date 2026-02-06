import { InfoPageLayout } from '@/components/InfoPageLayout';
import { Phone, Globe, AlertTriangle } from 'lucide-react';

export default function Hotlines() {
  return (
    <InfoPageLayout title="Hotlines & Resources">
      <section>
        <h2>Emergency Hotlines</h2>
        <div className="space-y-3 my-4">
          <div className="p-3 bg-card shadow-card">
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-foreground flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="font-semibold text-headline">United We Dream</p>
                <p className="text-sm text-muted-foreground mb-2">24/7 Hotline</p>
                <a href="tel:1-844-363-1423" className="text-lg font-bold text-hotline block">
                  1-844-363-1423
                </a>
                <p className="text-sm text-muted-foreground mt-1">
                  Text: 877877
                </p>
              </div>
            </div>
          </div>

          <div className="p-3 bg-card shadow-card">
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-foreground flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="font-semibold text-headline">Freedom for Immigrants</p>
                <p className="text-sm text-muted-foreground mb-2">Weekdays 8am-8pm PT</p>
                <a href="tel:1-209-757-3733" className="text-lg font-bold text-hotline block">
                  1-209-757-3733
                </a>
              </div>
            </div>
          </div>

          <div className="p-3 bg-card shadow-card">
            <div className="flex items-start gap-3">
              <Globe className="w-5 h-5 text-foreground flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="font-semibold text-headline">ICE Detainee Locator</p>
                <a href="tel:1-866-347-2423" className="text-lg font-bold text-hotline block">
                  1-866-347-2423
                </a>
                <a 
                  href="https://locator.ice.gov" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-foreground underline"
                >
                  locator.ice.gov
                </a>
              </div>
            </div>
          </div>

          <div className="p-3 bg-card shadow-card">
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-foreground flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="font-semibold text-headline">Immigration Court Case Status</p>
                <a href="tel:1-800-898-7180" className="text-lg font-bold text-hotline block">
                  1-800-898-7180
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2>Find a Lawyer</h2>
        <div className="p-3 bg-accent border-l-4 border-foreground mb-4">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-foreground flex-shrink-0 mt-0.5" />
            <p className="text-sm font-semibold text-foreground">
              <strong>Warning:</strong> Beware of "notarios" who claim to be lawyers but are not licensed to practice law. Only trust accredited representatives or licensed attorneys.
            </p>
          </div>
        </div>

        <div className="space-y-3 my-4">
          <div className="p-3 bg-card shadow-card">
            <p className="font-semibold text-headline">CLINIC Legal Directory</p>
            <p className="text-sm text-muted-foreground mb-2">Find a nonprofit immigration legal services provider</p>
            <a 
              href="https://cliniclegal.org/directory" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-foreground underline"
            >
              cliniclegal.org/directory
            </a>
          </div>

          <div className="p-3 bg-card shadow-card">
            <p className="font-semibold text-headline">Immigration Advocates Network</p>
            <p className="text-sm text-muted-foreground mb-2">Search for free or low-cost legal help</p>
            <a 
              href="https://immigrationadvocates.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-foreground underline"
            >
              immigrationadvocates.org
            </a>
          </div>

          <div className="p-3 bg-card shadow-card">
            <p className="font-semibold text-headline">iAmerica Legal Help</p>
            <a 
              href="https://www.iamerica.org/legal-help" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-foreground underline"
            >
              iamerica.org/legal-help
            </a>
          </div>
        </div>
      </section>

      <section>
        <h2>Know Your Rights Resources</h2>
        <div className="space-y-3 my-4">
          <div className="p-3 bg-card shadow-card">
            <p className="font-semibold text-headline">ILRC Red Cards</p>
            <p className="text-sm text-muted-foreground mb-2">Printable rights cards in multiple languages</p>
            <a 
              href="https://ilrc.org/red-cards" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-foreground underline"
            >
              ilrc.org/red-cards
            </a>
          </div>

          <div className="p-3 bg-card shadow-card">
            <p className="font-semibold text-headline">Immigrant Defense Project</p>
            <a 
              href="https://immigrantdefenseproject.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-foreground underline"
            >
              immigrantdefenseproject.org
            </a>
          </div>

          <div className="p-3 bg-card shadow-card">
            <p className="font-semibold text-headline">ACLU Know Your Rights</p>
            <a 
              href="https://aclu.org/know-your-rights/immigrants-rights" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-foreground underline"
            >
              aclu.org/know-your-rights/immigrants-rights
            </a>
          </div>
        </div>
      </section>

      <div className="p-3 bg-accent border-l-4 border-foreground mt-8">
        <p className="text-sm font-semibold text-center text-foreground">
          Save these numbers. Share them with family and friends.
        </p>
      </div>
    </InfoPageLayout>
  );
}
