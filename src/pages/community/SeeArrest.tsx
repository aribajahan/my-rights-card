import { InfoPageLayout } from '@/components/InfoPageLayout';

export default function SeeArrest() {
  return (
    <InfoPageLayout title="What to Do If You See an Arrest">
      <p className="text-lg text-muted-foreground mb-8">
        If you witness someone being detained, here's how you can help.
      </p>

      <section>
        <h2>During the Arrest</h2>
        <ul className="list-none space-y-2 my-4">
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Record from a safe distance
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Get the detained person's name if you can
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Ask if there is someone you can call for them
          </li>
        </ul>
      </section>

      <section>
        <h2>After the Arrest</h2>
        <ul className="list-none space-y-2 my-4">
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Help the family contact a lawyer
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Use ICE Detainee Locator: <a href="https://locator.ice.gov" target="_blank" rel="noopener noreferrer" className="underline hover:text-muted-foreground transition-colors">locator.ice.gov</a>
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Connect them with local immigrant rights organizations
          </li>
        </ul>
      </section>

      <section>
        <h2>Important Numbers</h2>
        <div className="space-y-3 my-4">
          <div className="border-b border-border/50 pb-3">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">United We Dream</p>
            <a href="tel:1-844-363-1423" className="text-hotline font-bold text-lg">
              1-844-363-1423
            </a>
            <span className="text-xs text-muted-foreground ml-2">24/7</span>
          </div>
        </div>
      </section>
    </InfoPageLayout>
  );
}
