import { InfoPageLayout } from '@/components/InfoPageLayout';

export default function IceAtDoor() {
  return (
    <InfoPageLayout 
      title="At Your Door" 
      subtitle="When ICE or police knock on your home."
      backTo="/rights"
      backLabel="Rights"
    >
      {/* Section: Your Rights */}
      <div className="section-header mb-4">
        <h2>Your Rights</h2>
      </div>

      <p>
        You are not required to open your door. Keep it closed and speak through the door or a window.
      </p>

      <p>
        You do NOT have to open your door unless they show a judicial warrant signed by a judge with your name and address on it.
      </p>

      {/* Section: What to Say */}
      <div className="section-header my-4">
        <h2>What to Say</h2>
      </div>

      <div className="phrase-box">
        <span className="phrase-box-label">Say this</span>
        <p>"I do not consent to your entry. Please slide any warrant under the door."</p>
      </div>

      <div className="phrase-box">
        <span className="phrase-box-label">Say this</span>
        <p>"I am exercising my right to remain silent."</p>
      </div>

      {/* Section: If They Force Entry */}
      <div className="section-header my-4">
        <h2>If They Force Entry</h2>
      </div>

      <p>Do not resist physically. State clearly:</p>

      <div className="phrase-box">
        <span className="phrase-box-label">Say this</span>
        <p>"I do not consent to this entry or search."</p>
      </div>

      {/* Section: Warnings */}
      <div className="section-header my-4">
        <h2>Important</h2>
      </div>

      <div className="warning-box">
        <p className="text-sm">
          ICE officers may claim to be local police. Always ask: "Are you immigration?"
        </p>
      </div>

      <div className="warning-box">
        <p className="text-sm">
          An ICE administrative warrant (Form I-200 or I-205) does NOT give them the right to enter your home.
        </p>
      </div>

      {/* Section: Do Not */}
      <div className="section-header my-4">
        <h2>Do Not</h2>
      </div>

      <ul className="list-none space-y-2">
        <li className="flex items-start gap-3 text-base">
          <span className="w-1.5 h-1.5 mt-2 bg-foreground flex-shrink-0"></span>
          Run or hide
        </li>
        <li className="flex items-start gap-3 text-base">
          <span className="w-1.5 h-1.5 mt-2 bg-foreground flex-shrink-0"></span>
          Lie or give false information
        </li>
        <li className="flex items-start gap-3 text-base">
          <span className="w-1.5 h-1.5 mt-2 bg-foreground flex-shrink-0"></span>
          Show false documents
        </li>
        <li className="flex items-start gap-3 text-base">
          <span className="w-1.5 h-1.5 mt-2 bg-foreground flex-shrink-0"></span>
          Physically resist
        </li>
      </ul>

      <p className="text-center text-muted-foreground mt-8 pt-6 border-t border-foreground/10 font-bold">
        Stay calm. Do not open the door. Assert your rights.
      </p>
    </InfoPageLayout>
  );
}
