import { InfoPageLayout } from '@/components/InfoPageLayout';

export default function RecordingReporting() {
  return (
    <InfoPageLayout 
      title="Recording & Reporting" 
      subtitle="You have a First Amendment right to record law enforcement in public."
      backTo="/rights"
      backLabel="Rights"
      tips={[
        { label: 'Review privacy settings', to: '/tips/privacy' },
        { label: 'Set up location sharing', to: '/tips/location-sharing' },
      ]}
    >
      {/* RECORDING YOUR OWN ENCOUNTER */}
      <section>
        <h2>Recording Your Own Encounter</h2>
        <ul className="list-none space-y-1 text-sm">
          <li>— Stay calm. Keep phone visible.</li>
          <li>— State that you're recording.</li>
          <li>— Don't physically interfere.</li>
        </ul>
      </section>

      {/* WITNESSING AN ENCOUNTER */}
      <section>
        <h2>Witnessing an Encounter</h2>
        <ul className="list-none space-y-1 text-sm mb-3">
          <li>— Keep a safe distance.</li>
          <li>— Record if you can do it safely.</li>
          <li>— Don't interfere.</li>
        </ul>
        <p className="font-bold mt-3 mb-2">Write down:</p>
        <ul className="list-none space-y-1 text-sm">
          <li>— Date, time, location</li>
          <li>— Badge numbers or names</li>
          <li>— What officers said</li>
          <li>— Whether they used force or threats</li>
          <li>— Witness contact info</li>
        </ul>
      </section>

      {/* WHERE TO REPORT */}
      <section>
        <h2>Where to Report</h2>
        <div className="bg-card p-4 my-3">
          <p className="font-bold">Immigrant Defense Project</p>
          <p className="text-sm"><a href="tel:2127256422" className="font-medium">212-725-6422</a></p>
          <p className="text-xs text-muted-foreground">Report encounters, get legal referrals</p>
        </div>
        <div className="bg-card p-4 my-3">
          <p className="font-bold">United We Dream — MigraWatch</p>
          <p className="text-sm"><a href="tel:1-844-363-1423" className="text-hotline font-bold">1-844-363-1423</a> (call or text)</p>
          <p className="text-xs text-muted-foreground">Report ICE activity, rapid response</p>
        </div>
      </section>

      {/* KEEP YOUR RECORDING SAFE */}
      <section>
        <h2>Keep Your Recording Safe</h2>
        <ul className="list-none space-y-1 text-sm">
          <li>— Back up to cloud storage immediately</li>
          <li>— Officers may try to delete recordings (this is illegal)</li>
          <li>— You don't have to show them your recording</li>
        </ul>
      </section>
    </InfoPageLayout>
  );
}
