import { InfoPageLayout } from '@/components/InfoPageLayout';

export default function Warrants() {
  return (
    <InfoPageLayout title="Warrants: Know the Difference">
      <p className="text-lg text-muted-foreground mb-8">
        Not all warrants are the same. Only a judicial warrant signed by a judge allows officers to enter your home.
      </p>

      <section>
        <h2>Judicial Warrant</h2>
        <ul className="list-none space-y-2 my-4">
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Signed by a judge
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Lists your name and address
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Allows officers to enter
          </li>
        </ul>
      </section>

      <section>
        <h2>ICE Administrative Warrant (Form I-200 or I-205)</h2>
        <ul className="list-none space-y-2 my-4">
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Signed by an immigration officer, not a judge
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Does not allow officers to enter your home
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            You do not have to open the door
          </li>
        </ul>
      </section>

      <section>
        <h2>What to Do</h2>
        <p>Ask to see the warrant. If they claim to have one, ask them to slide it under the door. Check for:</p>
        <ul className="list-none space-y-2 my-4">
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            A judge's signature (not just an immigration officer's)
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Your correct name and address
          </li>
        </ul>
        <div className="callout-minimal my-4">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">What to say</p>
          <p className="text-base italic">"Please slide the warrant under the door so I can review it."</p>
        </div>
      </section>

      <p className="text-center text-muted-foreground mt-12 pt-8 border-t border-border/50">
        Know the difference. A valid warrant has a judge's signature.
      </p>
    </InfoPageLayout>
  );
}