import { InfoPageLayout } from '@/components/InfoPageLayout';

export default function StoppedCar() {
  return (
    <InfoPageLayout title="Stopped in Your Car">
      <div className="p-3 bg-accent border-l-4 border-foreground mb-6">
        <p className="text-sm font-semibold text-foreground">
          If you are stopped while driving, stay calm. You have rights.
        </p>
      </div>

      <section>
        <h2>What You Must Do</h2>
        <ul className="list-none space-y-2 my-4">
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1.5 h-1.5 mt-2 bg-foreground flex-shrink-0"></span>
            Pull over safely and turn off your engine
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1.5 h-1.5 mt-2 bg-foreground flex-shrink-0"></span>
            Keep your hands visible on the steering wheel
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1.5 h-1.5 mt-2 bg-foreground flex-shrink-0"></span>
            Show your driver's license, registration, and proof of insurance if asked
          </li>
        </ul>
      </section>

      <section>
        <h2>What You Do Not Have to Do</h2>
        <ul className="list-none space-y-2 my-4">
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1.5 h-1.5 mt-2 bg-muted-foreground flex-shrink-0"></span>
            Answer questions about where you were born or your immigration status
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1.5 h-1.5 mt-2 bg-muted-foreground flex-shrink-0"></span>
            Consent to a search of your car
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1.5 h-1.5 mt-2 bg-muted-foreground flex-shrink-0"></span>
            Sign any documents you do not understand
          </li>
        </ul>
      </section>

      <section>
        <h2>If They Ask to Search Your Car</h2>
        <p>
          You can say no. If they search anyway, do not physically resist—but clearly state that you do not consent.
        </p>
        <div className="p-3 bg-accent border-l-4 border-foreground mb-4">
          <p className="text-sm font-semibold text-foreground mb-1">What to say:</p>
          <p className="text-sm text-muted-foreground italic">"I do not consent to a search of my vehicle."</p>
        </div>
      </section>

      <section>
        <h2>If They Ask About Your Immigration Status</h2>
        <p>
          You do not have to answer questions about your immigration status or where you were born.
        </p>
        <div className="p-3 bg-accent border-l-4 border-foreground mb-4">
          <p className="text-sm font-semibold text-foreground mb-1">What to say:</p>
          <p className="text-sm text-muted-foreground italic">"I am exercising my right to remain silent."</p>
        </div>
      </section>

      <section>
        <h2>What to Keep in Your Car</h2>
        <ul className="list-none space-y-2 my-4">
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1.5 h-1.5 mt-2 bg-foreground flex-shrink-0"></span>
            Know Your Rights card
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1.5 h-1.5 mt-2 bg-foreground flex-shrink-0"></span>
            Emergency contact information
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1.5 h-1.5 mt-2 bg-foreground flex-shrink-0"></span>
            Immigration lawyer's number
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1.5 h-1.5 mt-2 bg-foreground flex-shrink-0"></span>
            Copy of important documents (not originals)
          </li>
        </ul>
      </section>

      <section>
        <h2>What NOT to Keep in Your Car</h2>
        <ul className="list-none space-y-2 my-4">
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1.5 h-1.5 mt-2 bg-destructive flex-shrink-0"></span>
            Documents from other countries (unless required)
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1.5 h-1.5 mt-2 bg-destructive flex-shrink-0"></span>
            Anything that could be seen as false documentation
          </li>
        </ul>
      </section>

      <section>
        <h2>Do Not:</h2>
        <ul className="list-none space-y-2 my-4">
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1.5 h-1.5 mt-2 bg-destructive flex-shrink-0"></span>
            Flee or drive away
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1.5 h-1.5 mt-2 bg-destructive flex-shrink-0"></span>
            Argue or resist physically
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1.5 h-1.5 mt-2 bg-destructive flex-shrink-0"></span>
            Lie about your identity
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1.5 h-1.5 mt-2 bg-destructive flex-shrink-0"></span>
            Present fake documents
          </li>
        </ul>
      </section>

      <div className="p-3 bg-accent border-l-4 border-foreground mt-8">
        <p className="text-sm font-semibold text-center text-foreground">
          Stay calm. Keep your hands visible. Know your rights.
        </p>
      </div>
    </InfoPageLayout>
  );
}
