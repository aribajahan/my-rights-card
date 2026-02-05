import { InfoPageLayout } from '@/components/InfoPageLayout';
import { useLanguage } from '@/contexts/LanguageContext';

export default function IceWorkplace() {
  const { t } = useLanguage();

  return (
    <InfoPageLayout title={t('iceWorkplace')}>
      <div className="p-4 bg-accent/30 border-l-4 border-accent rounded-sm mb-6">
        <p className="text-base font-medium text-foreground">
          ICE may conduct workplace raids. You have rights at work, too.
        </p>
      </div>

      <section>
        <h2 className="text-xl font-bold mb-4 font-display text-foreground">If ICE Comes to Your Workplace</h2>
        <p className="text-base leading-relaxed mb-4 text-foreground">
          Stay calm. Do not run. You have rights even at work.
        </p>
        <ul className="list-none space-y-2 mb-4">
          <li className="flex items-start gap-3 text-base text-foreground">
            <span className="w-2 h-2 mt-2 rounded-full bg-foreground flex-shrink-0"></span>
            You have the right to remain silent
          </li>
          <li className="flex items-start gap-3 text-base text-foreground">
            <span className="w-2 h-2 mt-2 rounded-full bg-foreground flex-shrink-0"></span>
            You do not have to answer questions about your immigration status
          </li>
          <li className="flex items-start gap-3 text-base text-foreground">
            <span className="w-2 h-2 mt-2 rounded-full bg-foreground flex-shrink-0"></span>
            You have the right to speak with a lawyer
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-4 font-display text-foreground">Public vs. Private Areas</h2>
        <p className="text-base leading-relaxed mb-4 text-foreground">
          ICE can enter public areas of a business (like a lobby or store floor) without permission. But they need consent or a judicial warrant to enter private areas like employee break rooms or back offices.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-4 font-display text-foreground">If ICE Asks to Speak with You</h2>
        <div className="p-4 bg-card border-2 border-foreground/15 rounded-sm mb-4 space-y-2">
          <p className="italic text-muted-foreground">"I am exercising my right to remain silent."</p>
          <p className="italic text-muted-foreground">"I want to speak to a lawyer before answering any questions."</p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-4 font-display text-foreground">Know Your Employer's Responsibilities</h2>
        <p className="text-base leading-relaxed mb-4 text-foreground">
          Your employer cannot force you to speak with ICE. They also cannot fire you or retaliate against you for exercising your rights.
        </p>
        <p className="text-base leading-relaxed text-foreground">
          Some states and cities have laws that require employers to notify workers before an ICE inspection. Check your local laws.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-4 font-display text-foreground">Prepare in Advance</h2>
        <ul className="list-none space-y-2 mb-4">
          <li className="flex items-start gap-3 text-base text-foreground">
            <span className="w-2 h-2 mt-2 rounded-full bg-foreground flex-shrink-0"></span>
            Know your emergency contacts
          </li>
          <li className="flex items-start gap-3 text-base text-foreground">
            <span className="w-2 h-2 mt-2 rounded-full bg-foreground flex-shrink-0"></span>
            Have a lawyer's number saved
          </li>
          <li className="flex items-start gap-3 text-base text-foreground">
            <span className="w-2 h-2 mt-2 rounded-full bg-foreground flex-shrink-0"></span>
            Create a family safety plan
          </li>
        </ul>
      </section>

      <div className="p-4 bg-accent/20 rounded-sm mt-8 border-l-4 border-accent">
        <p className="text-base font-medium text-center text-foreground">
          Your workplace does not take away your constitutional rights.
        </p>
      </div>
    </InfoPageLayout>
  );
}
