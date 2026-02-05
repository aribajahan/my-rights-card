import { InfoPageLayout } from '@/components/InfoPageLayout';
import { useLanguage } from '@/contexts/LanguageContext';

export default function StoppedStreet() {
  const { t } = useLanguage();

  return (
    <InfoPageLayout title={t('stoppedStreet')}>
      <div className="p-4 bg-accent/30 rounded-2xl mb-6">
        <p className="text-sm font-medium text-headline">
          If you are approached by police or ICE in public, you have rights. Stay calm.
        </p>
      </div>

      <section>
        <h2>Can I Walk Away?</h2>
        <p>
          You can calmly ask if you are free to leave. If the officer says yes, you can walk away calmly. Do not run.
        </p>
        <div className="p-4 bg-card rounded-2xl shadow-card mb-4">
          <p className="text-sm font-medium text-headline mb-1">What to say:</p>
          <p className="text-sm text-muted-foreground italic">"Am I free to leave?"</p>
        </div>
      </section>

      <section>
        <h2>If You Are Not Free to Leave</h2>
        <p>If the officer says you are not free to leave, you are being detained. You still have rights:</p>
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
            You do not have to consent to a search
          </li>
        </ul>
      </section>

      <section>
        <h2>What to Say</h2>
        <div className="p-4 bg-card rounded-2xl shadow-card mb-4 space-y-3">
          <div>
            <p className="text-sm font-medium text-headline mb-1">To remain silent:</p>
            <p className="text-sm text-muted-foreground italic">"I am exercising my right to remain silent."</p>
          </div>
          <div>
            <p className="text-sm font-medium text-headline mb-1">If they ask to search you:</p>
            <p className="text-sm text-muted-foreground italic">"I do not consent to a search."</p>
          </div>
          <div>
            <p className="text-sm font-medium text-headline mb-1">If you are detained:</p>
            <p className="text-sm text-muted-foreground italic">"I want to speak to a lawyer."</p>
          </div>
        </div>
      </section>

      <section>
        <h2>Do Not</h2>
        <ul className="list-none space-y-2 my-4">
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1.5 h-1.5 mt-2 rounded-full bg-muted-foreground flex-shrink-0"></span>
            Run away
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1.5 h-1.5 mt-2 rounded-full bg-muted-foreground flex-shrink-0"></span>
            Physically resist, even if you believe the stop is unjust
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1.5 h-1.5 mt-2 rounded-full bg-muted-foreground flex-shrink-0"></span>
            Lie or give false documents
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1.5 h-1.5 mt-2 rounded-full bg-muted-foreground flex-shrink-0"></span>
            Sign anything you do not understand
          </li>
        </ul>
      </section>

      <div className="p-4 bg-accent/20 rounded-2xl mt-8">
        <p className="text-sm font-medium text-center text-headline">
          Stay calm. Assert your rights clearly and respectfully.
        </p>
      </div>
    </InfoPageLayout>
  );
}
