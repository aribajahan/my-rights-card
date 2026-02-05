import { InfoPageLayout } from '@/components/InfoPageLayout';
import { useLanguage } from '@/contexts/LanguageContext';

export default function IceAtDoor() {
  const { t } = useLanguage();

  return (
    <InfoPageLayout title={t('iceAtDoor')}>
      <div className="p-4 bg-accent/30 border-l-4 border-accent rounded-sm mb-6">
        <p className="text-base font-medium text-foreground">
          If someone knocks on your door and says they are from ICE, you do not have to open it.
        </p>
      </div>

      <section>
        <h2 className="text-xl font-bold mb-4 font-display text-foreground">Step 1: Stay Calm</h2>
        <p className="text-base leading-relaxed mb-4 text-foreground">
          Do not open the door. You can speak through the door or through a window. Stay calm and speak clearly.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-4 font-display text-foreground">Step 2: Ask for Identification</h2>
        <p className="text-base leading-relaxed mb-4 text-foreground">
          Ask the officers to identify themselves. Ask them to show their badges and state the purpose of their visit.
        </p>
        <div className="p-4 bg-card border-2 border-foreground/15 rounded-sm mb-4">
          <p className="font-semibold text-foreground mb-1">What to say:</p>
          <p className="italic text-muted-foreground">"Who are you? What agency are you from? Why are you here?"</p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-4 font-display text-foreground">Step 3: Ask for a Warrant</h2>
        <p className="text-base leading-relaxed mb-4 text-foreground">
          Ask if they have a warrant. A valid judicial warrant must be signed by a judge. Ask them to slip it under the door or hold it up to a window so you can read it.
        </p>
        <div className="p-4 bg-card border-2 border-foreground/15 rounded-sm mb-4">
          <p className="font-semibold text-foreground mb-1">What to say:</p>
          <p className="italic text-muted-foreground">"Do you have a warrant signed by a judge? Please slip it under the door."</p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-4 font-display text-foreground">Step 4: Check the Warrant</h2>
        <p className="text-base leading-relaxed mb-4 text-foreground">
          Look at the warrant carefully. A real judicial warrant will:
        </p>
        <ul className="list-none space-y-2 mb-4">
          <li className="flex items-start gap-3 text-base text-foreground">
            <span className="w-2 h-2 mt-2 rounded-full bg-foreground flex-shrink-0"></span>
            Be signed by a judge (not an immigration officer)
          </li>
          <li className="flex items-start gap-3 text-base text-foreground">
            <span className="w-2 h-2 mt-2 rounded-full bg-foreground flex-shrink-0"></span>
            Have the correct address
          </li>
          <li className="flex items-start gap-3 text-base text-foreground">
            <span className="w-2 h-2 mt-2 rounded-full bg-foreground flex-shrink-0"></span>
            Have the correct name (if it names someone specific)
          </li>
        </ul>
        <p className="text-base leading-relaxed text-foreground">
          ICE administrative warrants (Form I-200 or I-205) do <strong>not</strong> give officers the right to enter your home.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-4 font-display text-foreground">Step 5: If There Is No Valid Warrant</h2>
        <p className="text-base leading-relaxed mb-4 text-foreground">
          You can tell them you are exercising your right not to open the door.
        </p>
        <div className="p-4 bg-card border-2 border-foreground/15 rounded-sm mb-4">
          <p className="font-semibold text-foreground mb-1">What to say:</p>
          <p className="italic text-muted-foreground">"I do not consent to your entry. I am exercising my constitutional rights."</p>
        </div>
      </section>

      <div className="p-4 bg-accent/20 rounded-sm mt-8 border-l-4 border-accent">
        <p className="text-base font-medium text-center text-foreground">
          Remember: You have rights even if you are not a citizen. Stay calm and exercise them.
        </p>
      </div>
    </InfoPageLayout>
  );
}
