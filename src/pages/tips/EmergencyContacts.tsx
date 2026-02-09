import { InfoPageLayout } from '@/components/InfoPageLayout';

export default function EmergencyContacts() {
  return (
    <InfoPageLayout 
      title="Emergency Contacts" 
      subtitle="Set up emergency contacts so they're accessible even when your phone is locked."
      backTo="/tips"
      backLabel="Tips"
    >
      <section>
        <h2>iPhone</h2>
        <ol className="list-decimal list-inside space-y-1 text-sm">
          <li>Open the Health app</li>
          <li>Tap your profile picture</li>
          <li>Tap Medical ID</li>
          <li>Add emergency contacts</li>
          <li>Enable "Show When Locked"</li>
        </ol>
      </section>

      <section>
        <h2>Android</h2>
        <ol className="list-decimal list-inside space-y-1 text-sm">
          <li>Open Settings</li>
          <li>Go to Safety & Emergency</li>
          <li>Tap Emergency Contacts</li>
          <li>Add your trusted contacts</li>
        </ol>
      </section>

      <section>
        <h2>Who to Add</h2>
        <ul className="list-none space-y-1 text-sm">
          <li>— A trusted family member</li>
          <li>— An immigration lawyer (if you have one)</li>
          <li>— A trusted friend or neighbor</li>
        </ul>
      </section>

      <div className="warning-box my-6">
        <p className="text-xs font-bold uppercase tracking-wider mb-2">Tip</p>
        <p className="text-sm">
          Make sure your emergency contacts know they're listed and what to do if they get a call.
        </p>
      </div>
    </InfoPageLayout>
  );
}
