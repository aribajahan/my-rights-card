import { InfoPageLayout } from '@/components/InfoPageLayout';

export default function StoppedStreet() {
  return (
    <InfoPageLayout title="Stopped on the Street">
      <div className="p-3 bg-accent border-l-4 border-foreground mb-6">
        <p className="text-sm font-semibold text-foreground">
          If an officer stops you in public, you have rights.
        </p>
      </div>

      <section>
        <h2>You Have the Right to:</h2>
        <ul className="list-none space-y-2 my-4">
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1.5 h-1.5 mt-2 bg-foreground flex-shrink-0"></span>
            Ask if you're free to leave. If yes, walk away calmly.
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1.5 h-1.5 mt-2 bg-foreground flex-shrink-0"></span>
            Remain silent about your immigration status.
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1.5 h-1.5 mt-2 bg-foreground flex-shrink-0"></span>
            Refuse a search of your belongings.
          </li>
        </ul>
      </section>

      <section>
        <h2>If You Are Asked About Your Status</h2>
        <div className="p-3 bg-accent border-l-4 border-foreground mb-4">
          <p className="text-sm font-semibold text-foreground mb-1">What to say:</p>
          <p className="text-sm text-muted-foreground italic">"I am exercising my right to remain silent."</p>
        </div>
      </section>

      <section>
        <h2>If You Are Detained</h2>
        <p>Ask for a lawyer and your right to make a phone call. Do not sign anything you do not understand.</p>
        <div className="p-3 bg-accent border-l-4 border-foreground mb-4">
          <p className="text-sm font-semibold text-foreground mb-1">What to say:</p>
          <p className="text-sm text-muted-foreground italic">"I want to speak to a lawyer."</p>
        </div>
      </section>

      <section>
        <h2>Do Not:</h2>
        <ul className="list-none space-y-2 my-4">
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1.5 h-1.5 mt-2 bg-destructive flex-shrink-0"></span>
            Run away
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1.5 h-1.5 mt-2 bg-destructive flex-shrink-0"></span>
            Physically resist
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1.5 h-1.5 mt-2 bg-destructive flex-shrink-0"></span>
            Provide false documents
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1.5 h-1.5 mt-2 bg-destructive flex-shrink-0"></span>
            Lie
          </li>
        </ul>
      </section>

      <div className="p-3 bg-accent border-l-4 border-foreground mt-8">
        <p className="text-sm font-semibold text-center text-foreground">
          Stay calm. Assert your rights. Ask if you are free to go.
        </p>
      </div>
    </InfoPageLayout>
  );
}
