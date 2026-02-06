import { InfoPageLayout } from '@/components/InfoPageLayout';

export default function IceAtDoor() {
  return (
    <InfoPageLayout title="ICE at Your Door">
      <p className="text-lg text-muted-foreground mb-8">
        You have rights in your home. Do not open the door unless they have a valid judicial warrant.
      </p>

      <section>
        <h2>Do Not Open the Door</h2>
        <p>You are not required to open your door. Keep it closed and speak through the door or a window.</p>
        <div className="callout-minimal my-4">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">What to say</p>
          <p className="text-base italic">"I do not consent to your entry. Please slide any warrant under the door."</p>
        </div>
      </section>

      <section>
        <h2>Ask to See a Warrant</h2>
        <p>
          If they claim to have a warrant, ask them to slide it under the door. A valid warrant must be signed by a judge and list your address. ICE administrative warrants (Form I-200 or I-205) do not allow officers to enter.
        </p>
      </section>

      <section>
        <h2>If They Force Entry</h2>
        <p>Do not resist physically. State clearly:</p>
        <div className="callout-minimal my-4">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">What to say</p>
          <p className="text-base italic">"I do not consent to this entry or search."</p>
        </div>
      </section>

      <section>
        <h2>Stay Silent</h2>
        <p>You have the right to remain silent. Do not answer questions about your immigration status, where you were born, or how you entered the country.</p>
        <div className="callout-minimal my-4">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">What to say</p>
          <p className="text-base italic">"I am exercising my right to remain silent."</p>
        </div>
      </section>

      <section>
        <h2>Do Not:</h2>
        <ul className="list-none space-y-2 my-4">
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Run or hide
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Lie
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Show false documents
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Physically resist
          </li>
        </ul>
      </section>

      <p className="text-center text-muted-foreground mt-12 pt-8 border-t border-border/50">
        Stay calm. Do not open the door. Assert your rights.
      </p>
    </InfoPageLayout>
  );
}