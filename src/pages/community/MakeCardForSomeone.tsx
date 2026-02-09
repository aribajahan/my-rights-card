import { InfoPageLayout } from '@/components/InfoPageLayout';
import { Link } from 'react-router-dom';

export default function MakeCardForSomeone() {
  return (
    <InfoPageLayout 
      title="Make a Card for Someone" 
      subtitle="Help a family member, friend, or neighbor prepare their own card."
      backTo="/community"
      backLabel="Community"
    >
      {/* BEFORE YOU START */}
      <section>
        <h2>Before You Start</h2>
        <ul className="list-none space-y-1 text-sm">
          <li>— Go at their pace.</li>
          <li>— Let them make their own choices.</li>
          <li>— Respect their privacy.</li>
        </ul>
      </section>

      {/* WHAT YOU'LL NEED */}
      <section>
        <h2>What You'll Need</h2>
        <ul className="list-none space-y-1 text-sm">
          <li>— Their phone</li>
          <li>— 5-10 minutes</li>
          <li>— A quiet, private space</li>
        </ul>
      </section>

      {/* STEPS */}
      <section>
        <h2>Steps</h2>
        <ol className="list-decimal list-inside space-y-1 text-sm">
          <li>Open Stay Ready on their phone</li>
          <li>Tap "Prepare My Card"</li>
          <li>Help them select their status</li>
          <li>Select document type</li>
          <li>Enter their document number</li>
          <li>Save the card to their photos</li>
          <li>Set it as their lock screen</li>
        </ol>
      </section>

      <div className="my-6">
        <Link 
          to="/prepare"
          className="block w-full p-4 text-center text-base font-bold uppercase tracking-wider bg-primary text-primary-foreground transition-all duration-200 hover:opacity-90"
        >
          Create a Card →
        </Link>
      </div>
    </InfoPageLayout>
  );
}
