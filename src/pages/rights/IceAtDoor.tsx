import { InfoPageLayout } from '@/components/InfoPageLayout';

export default function IceAtDoor() {
  return (
    <InfoPageLayout 
      title="At Your Door" 
      subtitle="Your home has the strongest protections. ICE cannot enter without your consent or a valid judicial warrant."
      backTo="/rights"
      backLabel="Rights"
      tips={[
        { label: 'Practice saying your rights', to: '/rights/practice' },
        { label: 'Set up one-tap audio', to: '/tips/audio' },
      ]}
    >
      {/* DO THIS FIRST */}
      <div className="warning-box mb-6">
        <p className="text-xs font-bold uppercase tracking-wider mb-2">Do This First</p>
        <ol className="list-decimal list-inside space-y-1 text-sm">
          <li>Don't open the door.</li>
          <li>Ask: "Do you have a warrant signed by a judge?"</li>
          <li>Say: "I do not consent to your entry."</li>
        </ol>
      </div>

      {/* IF SOMEONE KNOCKS */}
      <section>
        <h2>If Someone Knocks</h2>
        <p>Keep the door closed. Speak through it.</p>
        <div className="phrase-box">
          <span className="phrase-box-label">Say This</span>
          <p>"Who are you?"</p>
        </div>
        <div className="phrase-box">
          <span className="phrase-box-label">Say This</span>
          <p>"Do you have a warrant signed by a judge?"</p>
        </div>
        <p className="text-sm text-muted-foreground mt-2">If they say they have a warrant:</p>
        <div className="phrase-box">
          <span className="phrase-box-label">Say This</span>
          <p>"Please slide it under the door."</p>
        </div>
      </section>

      {/* ICE WARRANTS VS JUDICIAL WARRANTS */}
      <section>
        <h2>ICE Warrants vs. Judicial Warrants</h2>
        <p className="font-bold">An ICE warrant is NOT a judicial warrant.</p>
        <p>
          ICE administrative warrants (Form I-200, I-205) do NOT allow officers to enter your home.
        </p>
        <p>
          Only a judicial warrant — signed by a judge — allows entry.
        </p>
      </section>

      {/* HOW TO CHECK A WARRANT */}
      <section>
        <h2>How to Check a Warrant</h2>
        <p className="font-bold mb-2">Valid judicial warrant has:</p>
        <ul className="list-none space-y-1 text-sm mb-3">
          <li>✓ Judge's signature at the bottom</li>
          <li>✓ Your correct name</li>
          <li>✓ Your correct address</li>
        </ul>
        <p className="font-bold mb-2">ICE warrant (NOT valid for entry) has:</p>
        <ul className="list-none space-y-1 text-sm">
          <li>✗ "Department of Homeland Security" header</li>
          <li>✗ Signed by a DHS official, not a judge</li>
        </ul>
      </section>

      {/* IF THEY DON'T HAVE A VALID WARRANT */}
      <section>
        <h2>If They Don't Have a Valid Warrant</h2>
        <div className="phrase-box">
          <span className="phrase-box-label">Say This</span>
          <p>"I do not consent to your entry."</p>
        </div>
        <p>You don't have to open the door. You don't have to answer questions.</p>
      </section>

      {/* IF ICE ENTERS WITHOUT PERMISSION */}
      <section>
        <h2>If ICE Enters Without Permission</h2>
        <div className="phrase-box">
          <span className="phrase-box-label">Say This</span>
          <p>"I do not consent to you being in my home."</p>
        </div>
        <div className="phrase-box">
          <span className="phrase-box-label">Say This</span>
          <p>"I do not consent to this search."</p>
        </div>
        <ul className="list-none space-y-1 text-sm mt-3">
          <li>— Tell them if children are present.</li>
          <li>— Don't physically resist.</li>
          <li>— Try to remember badge numbers and names.</li>
          <li>— Record if you can do it safely.</li>
        </ul>
      </section>

      {/* BE AWARE */}
      <div className="warning-box my-6">
        <p className="text-xs font-bold uppercase tracking-wider mb-2">⚠ Be Aware</p>
        <p className="text-sm mb-2">ICE officers may:</p>
        <ul className="list-none space-y-1 text-sm">
          <li>— Wear plain clothes or "POLICE" jackets</li>
          <li>— Claim to be local police</li>
          <li>— Say they just need to "talk"</li>
        </ul>
        <p className="text-sm mt-2 font-bold">Always ask: "Are you immigration?"</p>
      </div>
    </InfoPageLayout>
  );
}
