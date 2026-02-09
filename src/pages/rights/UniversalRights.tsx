import { InfoPageLayout } from '@/components/InfoPageLayout';

export default function UniversalRights() {
  return (
    <InfoPageLayout 
      title="Your Universal Rights"
      subtitle="Everyone in the United States has constitutional rights — regardless of immigration status."
      backTo="/rights"
      backLabel="Rights"
      tips={[
        { label: 'Practice saying your rights', to: '/rights/practice' },
        { label: 'Set up your lock screen', to: '/tips/lock-screen' },
      ]}
    >
      {/* DO THIS FIRST */}
      <div className="warning-box mb-6">
        <p className="text-xs font-bold uppercase tracking-wider mb-2">Do This First</p>
        <ol className="list-decimal list-inside space-y-1 text-sm">
          <li>Stay calm. Don't run.</li>
          <li>Say: "I'm using my right to remain silent."</li>
          <li>Don't consent to searches.</li>
        </ol>
      </div>

      {/* THE RIGHT TO REMAIN SILENT */}
      <section>
        <h2>The Right to Remain Silent</h2>
        <p>
          You don't have to answer questions about where you were born, your immigration status, or how you entered the country.
        </p>
        <div className="phrase-box">
          <span className="phrase-box-label">Say This</span>
          <p>"I am exercising my right to remain silent."</p>
        </div>
      </section>

      {/* THE RIGHT TO REFUSE A SEARCH */}
      <section>
        <h2>The Right to Refuse a Search</h2>
        <p>
          You can refuse consent to search your body, belongings, car, or home.
        </p>
        <div className="phrase-box">
          <span className="phrase-box-label">Say This</span>
          <p>"I do not consent to a search."</p>
        </div>
      </section>

      {/* THE RIGHT TO A LAWYER */}
      <section>
        <h2>The Right to a Lawyer</h2>
        <p>
          If you're arrested, you have the right to talk to a lawyer before answering questions. Don't sign anything without legal advice.
        </p>
        <div className="phrase-box">
          <span className="phrase-box-label">Say This</span>
          <p>"I want to speak with a lawyer."</p>
        </div>
      </section>

      {/* THE RIGHT TO LEAVE */}
      <section>
        <h2>The Right to Leave</h2>
        <p>
          If you're not under arrest, you may be free to go.
        </p>
        <div className="phrase-box">
          <span className="phrase-box-label">Say This</span>
          <p>"Am I free to go?"</p>
        </div>
      </section>

      {/* THE RIGHT TO RECORD */}
      <section>
        <h2>The Right to Record</h2>
        <p>
          You can record interactions with law enforcement in public, as long as you don't interfere.
        </p>
      </section>

      {/* REMEMBER */}
      <div className="warning-box my-6">
        <p className="text-xs font-bold uppercase tracking-wider mb-2">⚠ Remember</p>
        <ul className="list-none space-y-1 text-sm">
          <li>• Don't lie or show false documents.</li>
          <li>• Don't run or physically resist.</li>
          <li>• Don't show foreign documents (passport, consular ID, expired visa).</li>
          <li>• Anything you say can be used against you.</li>
        </ul>
      </div>

      {/* WHAT TO SHOW IF ASKED FOR ID */}
      <section>
        <h2>What to Show If Asked for ID</h2>
        <p className="font-bold mb-2">Show:</p>
        <ul className="list-none space-y-1 text-sm mb-3">
          <li>— U.S. driver's license</li>
          <li>— State ID</li>
          <li>— Municipal ID (IDNYC, etc.)</li>
        </ul>
        <p className="font-bold mb-2">Don't show:</p>
        <ul className="list-none space-y-1 text-sm">
          <li>— Passport from another country</li>
          <li>— Consular ID</li>
          <li>— Expired visa</li>
          <li>— Fake documents</li>
        </ul>
      </section>
    </InfoPageLayout>
  );
}
