import { InfoPageLayout } from '@/components/InfoPageLayout';

export default function StoppedCar() {
  return (
    <InfoPageLayout title="Stopped in Your Car">
      <p className="text-lg text-muted-foreground mb-8">
        You still have rights during a traffic stop or checkpoint.
      </p>

      <section>
        <h2>At a Traffic Stop</h2>
        <p>
          Pull over safely. Keep your hands visible. You may be required to show your driver's license and registration. You are not required to answer questions about your immigration status.
        </p>
        <div className="callout-minimal my-4">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">What to say</p>
          <p className="text-base italic">"I am exercising my right to remain silent."</p>
        </div>
      </section>

      <section>
        <h2>At a Checkpoint</h2>
        <p>
          Immigration checkpoints are legal within 100 miles of the border. You may be asked about your citizenship. You can remain silent, but this may result in further detention for questioning. If you choose to answer, keep your response brief.
        </p>
      </section>

      <section>
        <h2>Refusing a Search</h2>
        <p>
          You have the right to refuse a search of your vehicle. Officers may search anyway if they have probable cause, but you should still state clearly:
        </p>
        <div className="callout-minimal my-4">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">What to say</p>
          <p className="text-base italic">"I do not consent to a search."</p>
        </div>
      </section>

      <section>
        <h2>Do Not:</h2>
        <ul className="list-none space-y-2 my-4">
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Flee or drive away
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Lie about your identity
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Physically resist
          </li>
        </ul>
      </section>

      <p className="text-center text-muted-foreground mt-12 pt-8 border-t border-border/50">
        Stay calm. Hands visible. Assert your rights.
      </p>
    </InfoPageLayout>
  );
}