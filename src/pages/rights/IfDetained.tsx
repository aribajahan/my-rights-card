import { InfoPageLayout } from '@/components/InfoPageLayout';

export default function IfDetained() {
  return (
    <InfoPageLayout 
      title="If You're Detained" 
      subtitle="You still have rights in detention."
      backTo="/rights"
      backLabel="Rights"
      tips={[
        { label: 'Memorize a number', to: '/tips/memorize-number' },
        { label: 'Set up emergency contacts', to: '/tips/emergency-contacts' },
      ]}
    >
      {/* DO THIS FIRST */}
      <div className="warning-box mb-6">
        <p className="text-xs font-bold uppercase tracking-wider mb-2">Do This First</p>
        <ol className="list-decimal list-inside space-y-1 text-sm">
          <li>Say: "I want to speak with a lawyer."</li>
          <li>Don't sign anything.</li>
          <li>Call your emergency contact.</li>
        </ol>
      </div>

      {/* YOUR RIGHTS */}
      <section>
        <h2>Your Rights</h2>
        <ul className="list-none space-y-1 text-sm mb-3">
          <li>— Right to remain silent</li>
          <li>— Right to speak with a lawyer</li>
          <li>— Right to a hearing before a judge (most cases)</li>
          <li>— Right to contact your consulate (optional)</li>
        </ul>
        <div className="phrase-box">
          <span className="phrase-box-label">Say This</span>
          <p>"I want to speak with a lawyer before answering any questions."</p>
        </div>
        <div className="phrase-box">
          <span className="phrase-box-label">Say This</span>
          <p>"I do not want to sign anything without speaking to a lawyer."</p>
        </div>
      </section>

      {/* DON'T SIGN */}
      <section>
        <h2>Don't Sign</h2>
        <p className="mb-2">ICE may ask you to sign documents. Signing can give up your rights:</p>
        <ul className="list-none space-y-1 text-sm">
          <li>— Right to a hearing</li>
          <li>— Right to see a judge</li>
          <li>— Right to apply for relief</li>
        </ul>
        <p className="font-bold mt-2">Don't sign anything you don't understand.</p>
      </section>

      {/* YOUR PHONE CALL */}
      <section>
        <h2>Your Phone Call</h2>
        <p className="mb-2">You should get phone calls. Use them to:</p>
        <ul className="list-none space-y-1 text-sm mb-3">
          <li>— Contact family or a trusted person</li>
          <li>— Contact a lawyer</li>
          <li>— Call a legal hotline</li>
        </ul>
        <p className="font-bold">Memorize at least one number — you may not have your phone.</p>
      </section>

      {/* IF YOU FEAR RETURNING */}
      <section>
        <h2>If You Fear Returning</h2>
        <p className="mb-2">If you fear persecution or torture in your home country:</p>
        <div className="phrase-box">
          <span className="phrase-box-label">Say This</span>
          <p>"I am afraid to return to my country. I want to apply for asylum."</p>
        </div>
        <p className="text-sm mt-2">This triggers a "credible fear" interview. Get a lawyer as soon as possible.</p>
      </section>

      {/* HOTLINES FROM DETENTION */}
      <section>
        <h2>Hotlines From Detention</h2>
        <div className="bg-card p-4 my-3">
          <p className="font-bold">National Immigration Detention Hotline</p>
          <p className="text-sm">From inside: dial <span className="font-bold">9233#</span></p>
          <p className="text-sm">From outside: <a href="tel:2097573733" className="text-hotline font-bold">(209) 757-3733</a></p>
          <p className="text-xs text-muted-foreground mt-1">Help with abuse, finding resources, connecting with support.</p>
        </div>
      </section>
    </InfoPageLayout>
  );
}
