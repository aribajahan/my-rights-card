import { InfoPageLayout } from '@/components/InfoPageLayout';

export default function IceAtDoor() {
  return (
    <InfoPageLayout title="ICE at Your Door">
      <div className="p-3 bg-accent border-l-4 border-foreground mb-6">
        <p className="text-sm font-semibold text-foreground">
          If someone knocks on your door and says they are from ICE, you do not have to open it.
        </p>
      </div>

      <section>
        <h2>Step 1: Stay Calm</h2>
        <p>
          Do not open the door. You can speak through the door or through a window. Stay calm and speak clearly.
        </p>
      </section>

      <section>
        <h2>Step 2: Ask for Identification</h2>
        <p>
          Ask the officers to identify themselves. Ask them to show their badges and state the purpose of their visit.
        </p>
        <div className="p-3 bg-accent border-l-4 border-foreground mb-4">
          <p className="text-sm font-semibold text-foreground mb-1">What to say:</p>
          <p className="text-sm text-muted-foreground italic">"Who are you? What agency are you from? Why are you here?"</p>
        </div>
      </section>

      <section>
        <h2>Step 3: Ask for a Warrant</h2>
        <p>
          Ask if they have a warrant. A valid judicial warrant must be signed by a judge. Ask them to slip it under the door or hold it up to a window so you can read it.
        </p>
        <div className="p-3 bg-accent border-l-4 border-foreground mb-4">
          <p className="text-sm font-semibold text-foreground mb-1">What to say:</p>
          <p className="text-sm text-muted-foreground italic">"Do you have a warrant signed by a judge? Please slip it under the door."</p>
        </div>
      </section>

      <section>
        <h2>Step 4: Check the Warrant</h2>
        <p>Look at the warrant carefully. A real judicial warrant will:</p>
        <ul className="list-none space-y-2 my-4">
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1.5 h-1.5 mt-2 bg-foreground flex-shrink-0"></span>
            Be signed by a judge (not an immigration officer)
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1.5 h-1.5 mt-2 bg-foreground flex-shrink-0"></span>
            Have the correct address
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1.5 h-1.5 mt-2 bg-foreground flex-shrink-0"></span>
            Have the correct name (if it names someone specific)
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1.5 h-1.5 mt-2 bg-foreground flex-shrink-0"></span>
            Be issued by a court (not DHS or ICE)
          </li>
        </ul>
        <p>
          ICE administrative warrants (Form I-200 or I-205) do <strong>not</strong> give officers the right to enter your home.
        </p>
      </section>

      <section>
        <h2>Step 5: If They Don't Have a Valid Warrant</h2>
        <p>You can tell them you are exercising your right not to open the door.</p>
        <div className="p-3 bg-accent border-l-4 border-foreground mb-4">
          <p className="text-sm font-semibold text-foreground mb-1">What to say:</p>
          <p className="text-sm text-muted-foreground italic">"I do not consent to your entry. I am exercising my constitutional rights."</p>
        </div>
      </section>

      <section>
        <h2>Step 6: Document Everything</h2>
        <p>Write down as much as you can:</p>
        <ul className="list-none space-y-2 my-4">
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1.5 h-1.5 mt-2 bg-muted-foreground flex-shrink-0"></span>
            Badge numbers
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1.5 h-1.5 mt-2 bg-muted-foreground flex-shrink-0"></span>
            Agency names
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1.5 h-1.5 mt-2 bg-muted-foreground flex-shrink-0"></span>
            What was said
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1.5 h-1.5 mt-2 bg-muted-foreground flex-shrink-0"></span>
            Time and date
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1.5 h-1.5 mt-2 bg-muted-foreground flex-shrink-0"></span>
            Whether they entered without consent
          </li>
        </ul>
      </section>

      <section>
        <h2>Do Not:</h2>
        <ul className="list-none space-y-2 my-4">
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1.5 h-1.5 mt-2 bg-destructive flex-shrink-0"></span>
            Open the door
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1.5 h-1.5 mt-2 bg-destructive flex-shrink-0"></span>
            Run or hide
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1.5 h-1.5 mt-2 bg-destructive flex-shrink-0"></span>
            Lie or give false documents
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1.5 h-1.5 mt-2 bg-destructive flex-shrink-0"></span>
            Sign anything you don't understand
          </li>
        </ul>
      </section>

      <section>
        <h2>Prepare Your Household</h2>
        <p>Talk to everyone in your home about what to do if ICE comes:</p>
        <ul className="list-none space-y-2 my-4">
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1.5 h-1.5 mt-2 bg-muted-foreground flex-shrink-0"></span>
            Practice staying silent
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1.5 h-1.5 mt-2 bg-muted-foreground flex-shrink-0"></span>
            Post the Know Your Rights card near the door
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1.5 h-1.5 mt-2 bg-muted-foreground flex-shrink-0"></span>
            Know who to call (lawyer, family member)
          </li>
        </ul>
      </section>

      <div className="p-3 bg-accent border-l-4 border-foreground mt-8">
        <p className="text-sm font-semibold text-center text-foreground">
          Remember: You have rights even if you are not a citizen. Stay calm and exercise them.
        </p>
      </div>
    </InfoPageLayout>
  );
}
