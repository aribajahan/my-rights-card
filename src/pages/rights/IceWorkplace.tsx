import { InfoPageLayout } from '@/components/InfoPageLayout';
import { useLanguage } from '@/contexts/LanguageContext';

export default function IceWorkplace() {
  const { t } = useLanguage();

  return (
    <InfoPageLayout title={t('iceWorkplace')}>
      <div className="p-4 bg-accent/30 rounded-2xl mb-6">
        <p className="text-sm font-medium text-headline">
          ICE may conduct workplace raids. You have rights at work, too.
        </p>
      </div>

      <section>
        <h2>If ICE Comes to Your Workplace</h2>
        <p>Stay calm. Do not run. You have rights even at work.</p>
        <ul className="list-none space-y-2 my-4">
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1.5 h-1.5 mt-2 rounded-full bg-muted-foreground flex-shrink-0"></span>
            You have the right to remain silent
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1.5 h-1.5 mt-2 rounded-full bg-muted-foreground flex-shrink-0"></span>
            You do not have to answer questions about your immigration status
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1.5 h-1.5 mt-2 rounded-full bg-muted-foreground flex-shrink-0"></span>
            You have the right to speak with a lawyer
          </li>
        </ul>
      </section>

      <section>
        <h2>Public vs. Private Areas</h2>
        <p>
          ICE can enter public areas of a business (like a lobby or store floor) without permission. But they need consent or a judicial warrant to enter private areas like employee break rooms or back offices.
        </p>
      </section>

      <section>
        <h2>If ICE Asks to Speak with You</h2>
        <div className="p-4 bg-card rounded-2xl shadow-card mb-4 space-y-2">
          <p className="text-sm text-muted-foreground italic">"I am exercising my right to remain silent."</p>
          <p className="text-sm text-muted-foreground italic">"I want to speak to a lawyer before answering any questions."</p>
        </div>
      </section>

      <section>
        <h2>Know Your Employer's Responsibilities</h2>
        <p>
          Your employer cannot force you to speak with ICE. They also cannot fire you or retaliate against you for exercising your rights.
        </p>
        <p>
          Some states and cities have laws that require employers to notify workers before an ICE inspection. Check your local laws.
        </p>
      </section>

      <section>
        <h2>Prepare in Advance</h2>
        <ul className="list-none space-y-2 my-4">
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1.5 h-1.5 mt-2 rounded-full bg-muted-foreground flex-shrink-0"></span>
            Know your emergency contacts
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1.5 h-1.5 mt-2 rounded-full bg-muted-foreground flex-shrink-0"></span>
            Have a lawyer's number saved
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1.5 h-1.5 mt-2 rounded-full bg-muted-foreground flex-shrink-0"></span>
            Create a family safety plan
          </li>
        </ul>
      </section>

      <div className="p-4 bg-accent/20 rounded-2xl mt-8">
        <p className="text-sm font-medium text-center text-headline">
          Your workplace does not take away your constitutional rights.
        </p>
      </div>
    </InfoPageLayout>
  );
}
