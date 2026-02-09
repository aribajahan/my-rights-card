import { InfoPageLayout } from '@/components/InfoPageLayout';

export default function AtCheckpoint() {
  return (
    <InfoPageLayout 
      title="At a Checkpoint" 
      subtitle="Border Patrol operates checkpoints within 100 miles of any U.S. border. You must stop, but you have rights."
      backTo="/rights"
      backLabel="Rights"
      tips={[
        { label: 'Set up one-tap audio', to: '/tips/audio' },
        { label: 'Set up your lock screen', to: '/tips/lock-screen' },
      ]}
    >
      {/* DO THIS FIRST */}
      <div className="warning-box mb-6">
        <p className="text-xs font-bold uppercase tracking-wider mb-2">Do This First</p>
        <ol className="list-decimal list-inside space-y-1 text-sm">
          <li>Stop when directed.</li>
          <li>Driver: Show license if asked.</li>
          <li>You don't have to answer citizenship questions.</li>
        </ol>
      </div>

      {/* WHAT YOU MUST DO */}
      <section>
        <h2>What You Must Do</h2>
        <ul className="list-none space-y-1 text-sm mb-3">
          <li>— Stop at the checkpoint</li>
          <li>— Driver: Show license if asked</li>
        </ul>
      </section>

      {/* WHAT YOU DON'T HAVE TO DO */}
      <section>
        <h2>What You Don't Have to Do</h2>
        <ul className="list-none space-y-1 text-sm mb-3">
          <li>— Answer questions about citizenship</li>
          <li>— Consent to a vehicle search</li>
          <li>— Show documents beyond driver's license</li>
        </ul>
        <div className="phrase-box">
          <span className="phrase-box-label">Say This</span>
          <p>"I choose not to answer questions about my citizenship."</p>
        </div>
        <div className="phrase-box">
          <span className="phrase-box-label">Say This</span>
          <p>"I do not consent to a search."</p>
        </div>
      </section>

      {/* IF THEY DETAIN YOU */}
      <section>
        <h2>If They Detain You</h2>
        <div className="phrase-box">
          <span className="phrase-box-label">Say This</span>
          <p>"Am I free to go?"</p>
        </div>
        <div className="phrase-box">
          <span className="phrase-box-label">Say This</span>
          <p>"I am exercising my right to remain silent."</p>
        </div>
      </section>

      {/* BE AWARE */}
      <div className="warning-box my-6">
        <p className="text-xs font-bold uppercase tracking-wider mb-2">⚠ Be Aware</p>
        <ul className="list-none space-y-1 text-sm">
          <li>— Checkpoints are legal within 100 miles of any border (including coastlines).</li>
          <li>— Border Patrol may use dogs.</li>
          <li>— You can record.</li>
          <li>— Refusing to answer may mean longer detention, but your rights still matter.</li>
        </ul>
      </div>
    </InfoPageLayout>
  );
}
