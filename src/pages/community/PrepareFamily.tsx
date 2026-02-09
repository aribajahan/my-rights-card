import { InfoPageLayout } from '@/components/InfoPageLayout';
import { Link } from 'react-router-dom';

export default function PrepareFamily() {
  return (
    <InfoPageLayout 
      title="Prepare Your Family" 
      subtitle="Having a plan reduces panic."
      backTo="/community"
      backLabel="Community"
    >
      {/* MAKE CARDS FOR EVERYONE */}
      <section>
        <h2>Make Cards for Everyone</h2>
        <ul className="list-none space-y-1 text-sm">
          <li>— Parents and grandparents</li>
          <li>— Older children (if appropriate)</li>
          <li>— Other household members</li>
        </ul>
        <Link 
          to="/prepare"
          className="inline-block mt-3 text-sm font-medium underline underline-offset-4 hover:text-muted-foreground transition-colors"
        >
          Create a card →
        </Link>
      </section>

      {/* CREATE A FAMILY PLAN */}
      <section>
        <h2>Create a Family Plan</h2>
        <ul className="list-none space-y-2 text-sm">
          <li>— Who will care for children?</li>
          <li>— Where are important documents?</li>
          <li>— Who has power of attorney?</li>
          <li>— Who is the emergency contact?</li>
          <li>— What's the plan for pets?</li>
        </ul>
      </section>

      {/* TALK TO YOUR KIDS */}
      <section>
        <h2>Talk to Your Kids</h2>
        <ul className="list-none space-y-1 text-sm">
          <li>— "Don't open the door for strangers."</li>
          <li>— "Memorize this number: ___________"</li>
          <li>— "You have done nothing wrong."</li>
          <li>— "We have a plan. You'll be taken care of."</li>
        </ul>
      </section>

      {/* KEEP DOCUMENTS SAFE */}
      <section>
        <h2>Keep Documents Safe</h2>
        <p className="text-sm mb-2">Store originals in a safe place:</p>
        <ul className="list-none space-y-1 text-sm mb-3">
          <li>— Birth certificates</li>
          <li>— Passports</li>
          <li>— Immigration documents</li>
          <li>— Medical records</li>
        </ul>
        <p className="text-sm font-bold">Give copies to a trusted person.</p>
      </section>
    </InfoPageLayout>
  );
}
