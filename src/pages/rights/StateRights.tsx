import { InfoPageLayout } from '@/components/InfoPageLayout';

export default function StateRights() {
  return (
    <InfoPageLayout title="Do Rights Change by State?">
      <p className="text-lg text-muted-foreground mb-8">
        Your constitutional rights are the same everywhere in the U.S. But some details vary.
      </p>

      <section>
        <h2>What's the Same Everywhere</h2>
        <ul className="list-none space-y-2 my-4">
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Right to remain silent
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Right to refuse entry without a judicial warrant
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Right to refuse searches
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Right to a lawyer
          </li>
        </ul>
      </section>

      <section>
        <h2>What Varies by State</h2>
        
        <h3 className="text-sm font-bold mt-4 mb-2">Stop-and-Identify Laws</h3>
        <p className="text-sm mb-4">
          In some states, you must give your name to police if stopped and asked. 
          However, you never have to give your name to ICE or answer questions about 
          your immigration status.
        </p>

        <h3 className="text-sm font-bold mt-4 mb-2">Sanctuary Policies</h3>
        <p className="text-sm mb-4">
          Some cities and counties limit local police cooperation with ICE. 
          This varies widely. Check your local policies.
        </p>

        <h3 className="text-sm font-bold mt-4 mb-2">Recording Laws</h3>
        <p className="text-sm mb-4">
          Most states allow you to record in public. A few states require all parties 
          to consent to being recorded. In public spaces during encounters with officers, 
          you generally have the right to record.
        </p>
      </section>

      <section>
        <h2>Bottom Line</h2>
        <div className="callout-minimal py-3 my-4">
          <p className="text-sm">
            Your core constitutional rights are the same everywhere. When in doubt: 
            remain silent, ask for a lawyer, and do not consent to searches.
          </p>
        </div>
      </section>

      <section>
        <h2>Learn More</h2>
        <ul className="list-none space-y-2 my-4">
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            <a href="https://www.aclu.org/know-your-rights" target="_blank" rel="noopener noreferrer" className="underline hover:text-muted-foreground transition-colors">
              ACLU Know Your Rights (national)
            </a>
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Search "[your state] immigrant rights" for local resources
          </li>
        </ul>
      </section>
    </InfoPageLayout>
  );
}
