import { InfoPageLayout } from '@/components/InfoPageLayout';

export default function Warrants() {
  return (
    <InfoPageLayout 
      title="Warrants" 
      subtitle="Not all warrants are the same. Knowing the difference protects you."
      backTo="/rights"
      backLabel="Rights"
      tips={[
        { label: 'Set up your lock screen', to: '/tips/lock-screen' },
        { label: 'Practice saying your rights', to: '/rights/practice' },
      ]}
    >
      {/* JUDICIAL WARRANT - VALID */}
      <section>
        <h2>Judicial Warrant — Valid</h2>
        <p className="mb-2">A judicial warrant is signed by a judge and allows officers to enter your home.</p>
        <p className="font-bold mb-2">Look for:</p>
        <ul className="list-none space-y-1 text-sm mb-3">
          <li>✓ Judge's signature at the bottom</li>
          <li>✓ Your correct name</li>
          <li>✓ Your correct address</li>
          <li>✓ Issued by a court</li>
        </ul>
        <p className="text-sm">If ICE has a valid judicial warrant, they can legally enter.</p>
      </section>

      {/* ICE WARRANT - NOT VALID */}
      <section>
        <h2>ICE Warrant — Not Valid for Entry</h2>
        <p className="mb-2">ICE warrants (Form I-200, I-205) are signed by immigration officials, not judges. They do NOT give ICE the right to enter your home.</p>
        <p className="font-bold mb-2">Look for:</p>
        <ul className="list-none space-y-1 text-sm mb-3">
          <li>✗ "Department of Homeland Security" header</li>
          <li>✗ Signed by a DHS official (not a judge)</li>
        </ul>
        <p className="font-bold">You don't have to let them in with this.</p>
      </section>

      {/* HOW TO CHECK */}
      <section>
        <h2>How to Check</h2>
        <p className="mb-2">If someone claims to have a warrant:</p>
        <div className="phrase-box">
          <span className="phrase-box-label">Say This</span>
          <p>"Please slide it under the door."</p>
        </div>
        <p className="text-sm text-muted-foreground mt-2">Don't open the door to look at it.</p>
        <p className="font-bold mt-3 mb-2">Check:</p>
        <ol className="list-decimal list-inside space-y-1 text-sm mb-3">
          <li>Is there a judge's signature?</li>
          <li>Is your name correct?</li>
          <li>Is your address correct?</li>
        </ol>
        <p className="text-sm text-muted-foreground mb-2">If it's not a judicial warrant:</p>
        <div className="phrase-box">
          <span className="phrase-box-label">Say This</span>
          <p>"This is not a valid judicial warrant. I do not consent to your entry."</p>
        </div>
      </section>
    </InfoPageLayout>
  );
}
