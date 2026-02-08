import { InfoPageLayout } from '@/components/InfoPageLayout';

export default function MutualAid() {
  return (
    <InfoPageLayout title="Mutual Aid & Support">
      <p className="text-lg text-muted-foreground mb-8">
        Practical ways to support families affected by detention or deportation.
      </p>

      <section>
        <h2>Immediate Needs</h2>
        <p className="text-sm mb-3">
          If someone is detained, their family may need:
        </p>
        <ul className="list-none space-y-2 my-4">
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Childcare
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Groceries
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Help paying rent
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Transportation
          </li>
        </ul>
      </section>

      <section>
        <h2>Bond Funds</h2>
        <ul className="list-none space-y-2 my-4">
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            <a href="https://immigrantbailfund.org" target="_blank" rel="noopener noreferrer" className="underline hover:text-muted-foreground transition-colors">
              National Immigration Bond Fund
            </a>
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Search for local bond funds in your area
          </li>
        </ul>
      </section>

      <section>
        <h2>Ongoing Support</h2>
        <ul className="list-none space-y-2 my-4">
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Check in regularly
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Accompany people to court dates or check-ins
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Provide emotional support
          </li>
        </ul>
      </section>

      <section>
        <h2>Donate</h2>
        <ul className="list-none space-y-2 my-4">
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            <a href="https://unitedwedream.org" target="_blank" rel="noopener noreferrer" className="underline hover:text-muted-foreground transition-colors">
              United We Dream
            </a>
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            <a href="https://raicestexas.org" target="_blank" rel="noopener noreferrer" className="underline hover:text-muted-foreground transition-colors">
              RAICES
            </a>
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Local immigrant rights organizations
          </li>
        </ul>
      </section>
    </InfoPageLayout>
  );
}
