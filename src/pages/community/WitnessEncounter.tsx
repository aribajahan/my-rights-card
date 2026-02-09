import { InfoPageLayout } from '@/components/InfoPageLayout';

export default function WitnessEncounter() {
  return (
    <InfoPageLayout 
      title="If You Witness an Encounter" 
      subtitle="You can help by observing and documenting — without interfering."
      backTo="/community"
      backLabel="Community"
    >
      {/* DO */}
      <section>
        <h2>Do</h2>
        <ul className="list-none space-y-1 text-sm">
          <li>✓ Keep a safe distance</li>
          <li>✓ Record if safe</li>
          <li>✓ Take notes</li>
          <li>✓ Get witness contacts</li>
          <li>✓ Stay calm</li>
        </ul>
      </section>

      {/* DON'T */}
      <section>
        <h2>Don't</h2>
        <ul className="list-none space-y-1 text-sm">
          <li>✗ Physically interfere</li>
          <li>✗ Yell at officers</li>
          <li>✗ Put yourself in danger</li>
          <li>✗ Post video in real-time</li>
        </ul>
      </section>

      {/* DOCUMENT */}
      <section>
        <h2>Document</h2>
        <ul className="list-none space-y-1 text-sm">
          <li>— Date, time, exact location</li>
          <li>— Number of officers, what they wore</li>
          <li>— Badge numbers or names</li>
          <li>— What was said</li>
          <li>— Whether force was used</li>
          <li>— Children present?</li>
        </ul>
      </section>

      {/* REPORT */}
      <section>
        <h2>Report</h2>
        <div className="bg-card p-4 my-3">
          <p className="font-bold">United We Dream — MigraWatch</p>
          <a href="tel:1-844-363-1423" className="text-hotline font-bold">1-844-363-1423</a>
          <p className="text-xs text-muted-foreground">(call or text)</p>
        </div>
        <div className="bg-card p-4 my-3">
          <p className="font-bold">Immigrant Defense Project</p>
          <a href="tel:2127256422" className="font-medium">212-725-6422</a>
        </div>
      </section>
    </InfoPageLayout>
  );
}
