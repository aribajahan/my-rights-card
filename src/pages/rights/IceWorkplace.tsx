import { InfoPageLayout } from '@/components/InfoPageLayout';

export default function IceWorkplace() {
  return (
    <InfoPageLayout 
      title="At Work" 
      subtitle="Your workplace has some protections, but they depend on where you are."
      backTo="/rights"
      backLabel="Rights"
      tips={[
        { label: 'Set up emergency text shortcut', to: '/tips/emergency-text' },
        { label: 'Set up emergency contacts', to: '/tips/emergency-contacts' },
      ]}
    >
      {/* DO THIS FIRST */}
      <div className="warning-box mb-6">
        <p className="text-xs font-bold uppercase tracking-wider mb-2">Do This First</p>
        <ol className="list-decimal list-inside space-y-1 text-sm">
          <li>Stay calm. Alert a coworker if safe.</li>
          <li>Private areas need a warrant.</li>
          <li>Remain silent.</li>
        </ol>
      </div>

      {/* KNOW THE DIFFERENCE */}
      <section>
        <h2>Know the Difference</h2>
        <p className="font-bold mb-2">Private areas (employee-only spaces, back rooms, offices):</p>
        <p className="text-sm mb-3">ICE needs a judicial warrant or employer consent to enter.</p>
        <p className="font-bold mb-2">Public areas (lobbies, retail floors):</p>
        <p className="text-sm">ICE can be present without a warrant.</p>
      </section>

      {/* IF ICE ARRIVES */}
      <section>
        <h2>If ICE Arrives</h2>
        <ul className="list-none space-y-1 text-sm mb-3">
          <li>— Stay calm. Don't run.</li>
          <li>— If possible, alert a supervisor.</li>
          <li>— If you can, move to a private area.</li>
          <li>— You have the right to remain silent.</li>
        </ul>
        <div className="phrase-box">
          <span className="phrase-box-label">Say This</span>
          <p>"I am exercising my right to remain silent."</p>
        </div>
        <div className="phrase-box">
          <span className="phrase-box-label">Say This</span>
          <p>"I want to speak with a lawyer."</p>
        </div>
      </section>

      {/* FOR EMPLOYERS */}
      <section>
        <h2>For Employers</h2>
        <p className="font-bold mb-2">You can:</p>
        <ul className="list-none space-y-1 text-sm mb-3">
          <li>— Ask to see a warrant before allowing access to private areas</li>
          <li>— Refuse entry without a judicial warrant</li>
          <li>— Allow employees to remain silent</li>
        </ul>
        <p className="font-bold mb-2">You should not:</p>
        <ul className="list-none space-y-1 text-sm">
          <li>— Share employee records without a subpoena</li>
          <li>— Give ICE access to private areas without a warrant</li>
        </ul>
      </section>

      {/* BE AWARE */}
      <div className="warning-box my-6">
        <p className="text-xs font-bold uppercase tracking-wider mb-2">⚠ Be Aware</p>
        <ul className="list-none space-y-1 text-sm">
          <li>— ICE has conducted workplace raids.</li>
          <li>— You have rights even during a raid.</li>
          <li>— Record if you can do it safely.</li>
          <li>— Don't answer questions about status.</li>
        </ul>
      </div>
    </InfoPageLayout>
  );
}
