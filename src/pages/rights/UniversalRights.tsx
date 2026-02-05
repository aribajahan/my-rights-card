import { InfoPageLayout } from '@/components/InfoPageLayout';
import { useLanguage } from '@/contexts/LanguageContext';

export default function UniversalRights() {
  const { t } = useLanguage();

  return (
    <InfoPageLayout title={t('universalRights')}>
      <div className="p-4 bg-accent/30 rounded-2xl mb-6">
        <p className="text-sm font-medium text-headline">
          Everyone in the United States has constitutional rights—regardless of immigration status.
        </p>
      </div>

      <section>
        <h2>The Right to Remain Silent</h2>
        <p>
          You do not have to answer questions about where you were born, whether you are a U.S. citizen, or how you entered the country.
        </p>
        <div className="p-4 bg-card rounded-2xl shadow-card mb-4">
          <p className="text-sm font-medium text-headline mb-1">What to say:</p>
          <p className="text-sm text-muted-foreground italic">"I am exercising my right to remain silent."</p>
        </div>
      </section>

      <section>
        <h2>The Right to Refuse Entry Without a Warrant</h2>
        <p>
          You do not have to open your door without a warrant signed by a judge. ICE administrative warrants do not give officers the right to enter your home.
        </p>
        <div className="p-4 bg-card rounded-2xl shadow-card mb-4">
          <p className="text-sm font-medium text-headline mb-1">What to say:</p>
          <p className="text-sm text-muted-foreground italic">"I do not consent to your entry. Please slide the warrant under the door."</p>
        </div>
      </section>

      <section>
        <h2>The Right to Refuse a Search</h2>
        <p>
          You can refuse to consent to a search of yourself, your belongings, your car, or your home. If officers have a valid warrant, they may search anyway—but you should clearly state that you do not consent.
        </p>
        <div className="p-4 bg-card rounded-2xl shadow-card mb-4">
          <p className="text-sm font-medium text-headline mb-1">What to say:</p>
          <p className="text-sm text-muted-foreground italic">"I do not consent to a search."</p>
        </div>
      </section>

      <section>
        <h2>The Right to a Lawyer</h2>
        <p>
          If you are detained or arrested, you have the right to speak to a lawyer. You have the right to make a phone call. Immigration officers cannot listen to calls with your lawyer.
        </p>
        <div className="p-4 bg-card rounded-2xl shadow-card mb-4">
          <p className="text-sm font-medium text-headline mb-1">What to say:</p>
          <p className="text-sm text-muted-foreground italic">"I want to speak to a lawyer before answering any questions."</p>
        </div>
      </section>

      <div className="p-4 bg-accent/20 rounded-2xl mt-8">
        <p className="text-sm font-medium text-center text-headline">
          These rights belong to everyone. Use them calmly and clearly.
        </p>
      </div>
    </InfoPageLayout>
  );
}
