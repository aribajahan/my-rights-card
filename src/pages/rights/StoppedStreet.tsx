import { InfoPageLayout } from '@/components/InfoPageLayout';

export default function StoppedStreet() {
  return (
    <InfoPageLayout title="Stopped on the Street">
      <p className="text-lg text-muted-foreground mb-8">
        If an officer stops you in public, you have rights.
      </p>

      <section>
        <h2>You Have the Right to:</h2>
        <ul className="list-none space-y-2 my-4">
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Ask if you're free to leave. If yes, walk away calmly.
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Remain silent about your immigration status.
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Refuse a search of your belongings.
          </li>
        </ul>
      </section>

      <section>
        <h2>If You Are Asked About Your Status</h2>
        <div className="callout-minimal my-4">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">What to say</p>
          <p className="text-base italic">"I am exercising my right to remain silent."</p>
        </div>
      </section>

      <section>
        <h2>If You Are Detained</h2>
        <p>Ask for a lawyer and your right to make a phone call. Do not sign anything you do not understand.</p>
        <div className="callout-minimal my-4">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">What to say</p>
          <p className="text-base italic">"I want to speak to a lawyer."</p>
        </div>
      </section>

      <section>
        <h2>Do Not:</h2>
        <ul className="list-none space-y-2 my-4">
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Run away
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Physically resist
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Provide false documents
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Lie
          </li>
        </ul>
      </section>

      <p className="text-center text-muted-foreground mt-12 pt-8 border-t border-border/50">
        Stay calm. Assert your rights. Ask if you are free to go.
      </p>
    </InfoPageLayout>
  );
}