import { InfoPageLayout } from '@/components/InfoPageLayout';

export default function Kids() {
  return (
    <InfoPageLayout title="What to Tell Your Kids">
      <p className="text-lg text-muted-foreground mb-8">
        Children need to understand enough to stay safe, without being scared.
      </p>

      <section>
        <h2>Young Children</h2>
        <p className="text-sm mb-3">Keep it simple and reassuring:</p>
        <ul className="list-none space-y-2 my-4">
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            "We don't open the door for strangers"
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            "Aunt [Name] will take care of you"
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            "You have not done anything wrong"
          </li>
        </ul>
      </section>

      <section>
        <h2>Older Children</h2>
        <ul className="list-none space-y-2 my-4">
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Teach them not to open the door
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Give them a card with emergency numbers
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Explain who to call if something happens
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Practice the plan together
          </li>
        </ul>
      </section>

      <section>
        <h2>Teenagers</h2>
        <ul className="list-none space-y-2 my-4">
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Explain their rights clearly
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Teach them how to record safely
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Make sure they know the family plan
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Help them set up their own phone shortcuts
          </li>
        </ul>
      </section>

      <section>
        <h2>Every Child Should Know</h2>
        <div className="space-y-3 my-4">
          <div className="callout-minimal py-3">
            <p className="font-bold text-sm">1. Do not open the door for strangers</p>
          </div>
          <div className="callout-minimal py-3">
            <p className="font-bold text-sm">2. A trusted adult's phone number (memorized)</p>
          </div>
          <div className="callout-minimal py-3">
            <p className="font-bold text-sm">3. They have done nothing wrong</p>
          </div>
          <div className="callout-minimal py-3">
            <p className="font-bold text-sm">4. The family has a plan</p>
          </div>
        </div>
      </section>

      <section>
        <h2>How to Talk About It</h2>
        <ul className="list-none space-y-2 my-4">
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Stay calm yourself—children pick up on anxiety
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Frame it as "being prepared," like fire drills
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Reassure them that the family is strong
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Answer their questions honestly at their level
          </li>
        </ul>
      </section>
    </InfoPageLayout>
  );
}
