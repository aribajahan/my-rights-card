import { InfoPageLayout } from '@/components/InfoPageLayout';

export default function ReportRecord() {
  return (
    <InfoPageLayout title="Report and Record">
      <div className="p-3 bg-accent border-l-4 border-foreground mb-6">
        <p className="text-sm font-semibold text-foreground">
          Documenting an encounter can help protect your rights and support your case.
        </p>
      </div>

      <section>
        <h2>Why Document?</h2>
        <p>
          Recording what happens during an encounter with immigration officers can be valuable evidence. It can help lawyers, advocates, and courts understand what happened.
        </p>
      </section>

      <section>
        <h2>What to Record</h2>
        <ul className="list-none space-y-2 my-4">
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1.5 h-1.5 mt-2 bg-foreground flex-shrink-0"></span>
            Badge numbers and names of officers
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1.5 h-1.5 mt-2 bg-foreground flex-shrink-0"></span>
            Agency name (ICE, CBP, local police)
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1.5 h-1.5 mt-2 bg-foreground flex-shrink-0"></span>
            Date, time, and location
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1.5 h-1.5 mt-2 bg-foreground flex-shrink-0"></span>
            What was said by both sides
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1.5 h-1.5 mt-2 bg-foreground flex-shrink-0"></span>
            Whether they entered without consent
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1.5 h-1.5 mt-2 bg-foreground flex-shrink-0"></span>
            Names and contact info of witnesses
          </li>
        </ul>
      </section>

      <section>
        <h2>Your Right to Record</h2>
        <p>
          In most public places, you have the right to record police and immigration officers. However, do not interfere with their actions—keep a safe distance and stay calm.
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          <span className="font-semibold">Note:</span> Some states have specific rules about recording. Generally, recording in public is allowed.
        </p>
      </section>

      <section>
        <h2>How to Report ICE Activity</h2>
        <ul className="list-none space-y-2 my-4">
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1.5 h-1.5 mt-2 bg-foreground flex-shrink-0"></span>
            Call the United We Dream hotline: <span className="font-bold text-hotline">1-844-363-1423</span>
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1.5 h-1.5 mt-2 bg-foreground flex-shrink-0"></span>
            Text "READY" to 877877
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1.5 h-1.5 mt-2 bg-foreground flex-shrink-0"></span>
            Contact a local immigrant rights organization
          </li>
        </ul>
      </section>

      <section>
        <h2>After an Encounter</h2>
        <p>
          Write down everything you remember as soon as possible. Details fade quickly. Include:
        </p>
        <ul className="list-none space-y-2 my-4">
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1.5 h-1.5 mt-2 bg-foreground flex-shrink-0"></span>
            Exactly what was said
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1.5 h-1.5 mt-2 bg-foreground flex-shrink-0"></span>
            Physical descriptions of officers
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1.5 h-1.5 mt-2 bg-foreground flex-shrink-0"></span>
            Vehicle descriptions and license plates
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1.5 h-1.5 mt-2 bg-foreground flex-shrink-0"></span>
            Any documents they showed or gave you
          </li>
        </ul>
      </section>

      <div className="p-3 bg-accent border-l-4 border-foreground mt-8">
        <p className="text-sm font-semibold text-center text-foreground">
          Your documentation can help protect others. Report and record.
        </p>
      </div>
    </InfoPageLayout>
  );
}
