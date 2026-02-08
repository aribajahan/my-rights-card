import { InfoPageLayout } from '@/components/InfoPageLayout';

export default function BystanderRights() {
  return (
    <InfoPageLayout title="Your Rights as a Bystander">
      <p className="text-lg text-muted-foreground mb-8">
        Know what you can and cannot do when witnessing an encounter.
      </p>

      <section>
        <h2>Your Rights</h2>
        <ul className="list-none space-y-2 my-4">
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            You have the right to observe and record in public spaces
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            You do not have to answer questions from officers
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            You cannot physically interfere with an arrest
          </li>
        </ul>
      </section>

      <section>
        <h2>What You Can Do</h2>
        <ul className="list-none space-y-2 my-4">
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Ask: "Is this person under arrest?"
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Tell the person: "You have the right to remain silent"
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Record from a safe distance
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Document badge numbers and vehicle information
          </li>
        </ul>
      </section>

      <section>
        <h2>Remember</h2>
        <p className="text-sm">
          Your role as a witness is to document and support—not to intervene physically. 
          Your documentation can be valuable evidence for legal proceedings.
        </p>
      </section>
    </InfoPageLayout>
  );
}
