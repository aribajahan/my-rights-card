import { InfoPageLayout } from '@/components/InfoPageLayout';

export default function StoppedStreet() {
  return (
    <InfoPageLayout 
      title="On the Street" 
      subtitle="ICE can approach you in public, but you still have rights."
      backTo="/rights"
      backLabel="Rights"
      tips={[
        { label: 'Practice saying your rights', to: '/rights/practice' },
        { label: 'Set up location sharing', to: '/tips/location-sharing' },
      ]}
    >
      {/* DO THIS FIRST */}
      <div className="warning-box mb-6">
        <p className="text-xs font-bold uppercase tracking-wider mb-2">Do This First</p>
        <ol className="list-decimal list-inside space-y-1 text-sm">
          <li>Stay calm. Don't run.</li>
          <li>Ask: "Am I free to go?"</li>
          <li>If no, stay silent.</li>
        </ol>
      </div>

      {/* IF ICE APPROACHES YOU */}
      <section>
        <h2>If ICE Approaches You</h2>
        <div className="phrase-box">
          <span className="phrase-box-label">Say This</span>
          <p>"Am I free to go?"</p>
        </div>
        <p className="font-bold mt-3">If they say YES:</p>
        <p className="text-sm">Walk away calmly and silently.</p>
        <p className="font-bold mt-3">If they say NO:</p>
        <div className="phrase-box">
          <span className="phrase-box-label">Say This</span>
          <p>"I am exercising my right to remain silent."</p>
        </div>
        <div className="phrase-box">
          <span className="phrase-box-label">Say This</span>
          <p>"I want to speak with a lawyer."</p>
        </div>
      </section>

      {/* YOU DON'T HAVE TO ANSWER */}
      <section>
        <h2>You Don't Have to Answer</h2>
        <p className="mb-2">Questions you can refuse:</p>
        <ul className="list-none space-y-1 text-sm mb-3">
          <li>— Where were you born?</li>
          <li>— What's your immigration status?</li>
          <li>— Where do you live?</li>
          <li>— Where do you work?</li>
        </ul>
        <p className="text-sm text-muted-foreground mb-2">You can stay silent or say:</p>
        <div className="phrase-box">
          <span className="phrase-box-label">Say This</span>
          <p>"I choose not to answer questions."</p>
        </div>
      </section>

      {/* REFUSING A SEARCH */}
      <section>
        <h2>Refusing a Search</h2>
        <div className="phrase-box">
          <span className="phrase-box-label">Say This</span>
          <p>"I do not consent to a search."</p>
        </div>
        <p className="text-sm mt-2">Officers can pat down your outer clothes for weapons. But they can't search your pockets without consent or arrest.</p>
        <div className="phrase-box">
          <span className="phrase-box-label">Say This</span>
          <p>"I don't consent to you searching my pockets."</p>
        </div>
      </section>

      {/* DON'T */}
      <div className="warning-box my-6">
        <p className="text-xs font-bold uppercase tracking-wider mb-2">⚠ Don't</p>
        <ul className="list-none space-y-1 text-sm">
          <li>— Run (can be used as reason for arrest)</li>
          <li>— Lie or give false information</li>
          <li>— Show foreign documents</li>
          <li>— Physically resist</li>
        </ul>
      </div>
    </InfoPageLayout>
  );
}
