import { InfoPageLayout } from '@/components/InfoPageLayout';
import { useLanguage } from '@/contexts/LanguageContext';

export default function StoppedCar() {
  const { t } = useLanguage();

  return (
    <InfoPageLayout title={t('stoppedCar')}>
      <div className="p-4 bg-accent/30 border-l-4 border-accent rounded-sm mb-6">
        <p className="text-base font-medium text-foreground">
          If you are stopped while driving, stay calm. You have rights.
        </p>
      </div>

      <section>
        <h2 className="text-xl font-bold mb-4 font-display text-foreground">What You Must Do</h2>
        <ul className="list-none space-y-2 mb-4">
          <li className="flex items-start gap-3 text-base text-foreground">
            <span className="w-2 h-2 mt-2 rounded-full bg-foreground flex-shrink-0"></span>
            Pull over safely and turn off your engine
          </li>
          <li className="flex items-start gap-3 text-base text-foreground">
            <span className="w-2 h-2 mt-2 rounded-full bg-foreground flex-shrink-0"></span>
            Keep your hands visible on the steering wheel
          </li>
          <li className="flex items-start gap-3 text-base text-foreground">
            <span className="w-2 h-2 mt-2 rounded-full bg-foreground flex-shrink-0"></span>
            Show your driver's license, registration, and proof of insurance if asked
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-4 font-display text-foreground">What You Do Not Have to Do</h2>
        <ul className="list-none space-y-2 mb-4">
          <li className="flex items-start gap-3 text-base text-foreground">
            <span className="w-2 h-2 mt-2 rounded-full bg-foreground flex-shrink-0"></span>
            Answer questions about where you were born or your immigration status
          </li>
          <li className="flex items-start gap-3 text-base text-foreground">
            <span className="w-2 h-2 mt-2 rounded-full bg-foreground flex-shrink-0"></span>
            Consent to a search of your car
          </li>
          <li className="flex items-start gap-3 text-base text-foreground">
            <span className="w-2 h-2 mt-2 rounded-full bg-foreground flex-shrink-0"></span>
            Sign any documents you do not understand
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-4 font-display text-foreground">If They Ask to Search Your Car</h2>
        <p className="text-base leading-relaxed mb-4 text-foreground">
          You can say no. If they search anyway, do not physically resist—but clearly state that you do not consent.
        </p>
        <div className="p-4 bg-card border-2 border-foreground/15 rounded-sm mb-4">
          <p className="font-semibold text-foreground mb-1">What to say:</p>
          <p className="italic text-muted-foreground">"I do not consent to a search of my vehicle."</p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-4 font-display text-foreground">If They Ask About Your Status</h2>
        <p className="text-base leading-relaxed mb-4 text-foreground">
          You do not have to answer questions about your immigration status or where you were born.
        </p>
        <div className="p-4 bg-card border-2 border-foreground/15 rounded-sm mb-4">
          <p className="font-semibold text-foreground mb-1">What to say:</p>
          <p className="italic text-muted-foreground">"I am exercising my right to remain silent."</p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-4 font-display text-foreground">If You Are a Passenger</h2>
        <p className="text-base leading-relaxed mb-4 text-foreground">
          As a passenger, you also have the right to remain silent. You may be required to show ID in some states, but you do not have to answer questions about your immigration status.
        </p>
      </section>

      <div className="p-4 bg-accent/20 rounded-sm mt-8 border-l-4 border-accent">
        <p className="text-base font-medium text-center text-foreground">
          Stay calm. Keep your hands visible. Know your rights.
        </p>
      </div>
    </InfoPageLayout>
  );
}
