import { InfoPageLayout } from '@/components/InfoPageLayout';

export default function StoppedCar() {
  return (
    <InfoPageLayout 
      title="In Your Car" 
      subtitle="Your rights in a car are similar to public spaces. Assert them even if officers ignore you — it can help your case later."
      backTo="/rights"
      backLabel="Rights"
      tips={[
        { label: 'Set up one-tap audio', to: '/tips/audio' },
        { label: 'Set up emergency text shortcut', to: '/tips/emergency-text' },
      ]}
    >
      {/* DO THIS FIRST */}
      <div className="warning-box mb-6">
        <p className="text-xs font-bold uppercase tracking-wider mb-2">Do This First</p>
        <ol className="list-decimal list-inside space-y-1 text-sm">
          <li>Pull over safely. Engine off. Hands on wheel.</li>
          <li>Driver shows license, registration, insurance.</li>
          <li>Don't answer questions about immigration.</li>
        </ol>
      </div>

      {/* IF YOU'RE THE DRIVER */}
      <section>
        <h2>If You're the Driver</h2>
        <p className="font-bold mb-2">You must show:</p>
        <ul className="list-none space-y-1 text-sm mb-3">
          <li>— Driver's license</li>
          <li>— Registration</li>
          <li>— Proof of insurance</li>
        </ul>
        <p className="font-bold mb-2">You don't have to answer questions about:</p>
        <ul className="list-none space-y-1 text-sm mb-3">
          <li>— Where you were born</li>
          <li>— Your immigration status</li>
          <li>— Where you're going</li>
        </ul>
        <div className="phrase-box">
          <span className="phrase-box-label">Say This</span>
          <p>"I want to use my right not to answer questions."</p>
        </div>
      </section>

      {/* IF YOU'RE A PASSENGER */}
      <section>
        <h2>If You're a Passenger</h2>
        <p className="mb-2">You don't have to:</p>
        <ul className="list-none space-y-1 text-sm mb-3">
          <li>— Show ID</li>
          <li>— Give your name, address, or birthplace</li>
          <li>— Answer any questions</li>
        </ul>
        <div className="phrase-box">
          <span className="phrase-box-label">Say This</span>
          <p>"I don't consent to give you ID or answer your questions."</p>
        </div>
        <div className="phrase-box">
          <span className="phrase-box-label">Say This</span>
          <p>"Am I free to go?"</p>
        </div>
      </section>

      {/* REFUSING A SEARCH */}
      <section>
        <h2>Refusing a Search</h2>
        <p>You can refuse a search of your car, including trunk and glove compartment.</p>
        <div className="phrase-box">
          <span className="phrase-box-label">Say This</span>
          <p>"I do not consent to a search of my car."</p>
        </div>
        <p className="text-sm text-muted-foreground mt-2">If they search anyway, keep saying it. It's on the record.</p>
      </section>

      {/* IF THEY ASK YOU TO GET OUT */}
      <section>
        <h2>If They Ask You to Get Out</h2>
        <p>Officers can order you out for "officer safety."</p>
        <p className="text-sm text-muted-foreground mt-2">Before getting out, you can ask:</p>
        <div className="phrase-box">
          <span className="phrase-box-label">Say This</span>
          <p>"Why am I being stopped?"</p>
        </div>
        <div className="phrase-box">
          <span className="phrase-box-label">Say This</span>
          <p>"Are you immigration?"</p>
        </div>
      </section>

      {/* FINGERPRINTING */}
      <section>
        <h2>Fingerprinting</h2>
        <p>You can refuse unless you're under arrest.</p>
        <div className="phrase-box">
          <span className="phrase-box-label">Say This</span>
          <p>"I don't consent to being fingerprinted."</p>
        </div>
      </section>

      {/* BE AWARE */}
      <div className="warning-box my-6">
        <p className="text-xs font-bold uppercase tracking-wider mb-2">⚠ Be Aware</p>
        <ul className="list-none space-y-1 text-sm">
          <li>— ICE may name someone in the car or show paperwork. They may be targeting one person or profiling.</li>
          <li>— Ask: "Am I free to go?"</li>
          <li>— Don't lie or show false documents.</li>
          <li>— Don't answer questions about birthplace — ICE can use this against you.</li>
        </ul>
      </div>
    </InfoPageLayout>
  );
}
