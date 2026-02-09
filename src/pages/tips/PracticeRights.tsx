import { InfoPageLayout } from '@/components/InfoPageLayout';

export default function PracticeRights() {
  return (
    <InfoPageLayout 
      title="Practice Your Rights" 
      subtitle="Words you've only read are hard to say when you're scared. Practice out loud."
      backTo="/tips"
      backLabel="Tips"
    >
      <section>
        <h2>Key Phrases to Practice</h2>
        <div className="space-y-3">
          <div className="phrase-box">
            <span className="phrase-box-label">Practice This</span>
            <p>"I am exercising my right to remain silent."</p>
          </div>
          <div className="phrase-box">
            <span className="phrase-box-label">Practice This</span>
            <p>"I do not consent to a search."</p>
          </div>
          <div className="phrase-box">
            <span className="phrase-box-label">Practice This</span>
            <p>"I do not consent to your entry."</p>
          </div>
          <div className="phrase-box">
            <span className="phrase-box-label">Practice This</span>
            <p>"I want to speak with a lawyer."</p>
          </div>
          <div className="phrase-box">
            <span className="phrase-box-label">Practice This</span>
            <p>"Am I free to go?"</p>
          </div>
        </div>
      </section>

      <section>
        <h2>How to Practice</h2>
        <ul className="list-none space-y-1 text-sm">
          <li>— Say each phrase out loud 5 times</li>
          <li>— Practice with a family member or friend</li>
          <li>— Role-play different scenarios</li>
          <li>— Practice staying calm while speaking</li>
        </ul>
      </section>

      <div className="warning-box my-6">
        <p className="text-xs font-bold uppercase tracking-wider mb-2">Tip</p>
        <p className="text-sm">
          Practicing helps you stay calm under pressure. The more familiar these words are, the easier they'll be to say.
        </p>
      </div>
    </InfoPageLayout>
  );
}
