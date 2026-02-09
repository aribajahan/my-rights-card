import { InfoPageLayout } from '@/components/InfoPageLayout';

export default function PrivacySettings() {
  return (
    <InfoPageLayout 
      title="Privacy Settings" 
      subtitle="Protect your information and reduce your digital footprint."
      backTo="/tips"
      backLabel="Tips"
    >
      <section>
        <h2>Lock Your Phone</h2>
        <ul className="list-none space-y-1 text-sm">
          <li>— Use a 6-digit passcode or longer</li>
          <li>— Disable Face ID/fingerprint before encounters</li>
          <li>— Set auto-lock to 30 seconds</li>
        </ul>
      </section>

      <section>
        <h2>Secure Your Apps</h2>
        <ul className="list-none space-y-1 text-sm">
          <li>— Use encrypted messaging (Signal, WhatsApp)</li>
          <li>— Enable disappearing messages</li>
          <li>— Log out of immigration-related accounts</li>
          <li>— Clear browser history regularly</li>
        </ul>
      </section>

      <section>
        <h2>Social Media</h2>
        <ul className="list-none space-y-1 text-sm">
          <li>— Make profiles private</li>
          <li>— Don't post location in real-time</li>
          <li>— Review tagged photos</li>
          <li>— Be careful what you share publicly</li>
        </ul>
      </section>

      <section>
        <h2>If You're Stopped</h2>
        <p className="text-sm">
          You can refuse to unlock your phone. You don't have to provide passwords or unlock patterns.
        </p>
        <div className="phrase-box mt-3">
          <span className="phrase-box-label">Say This</span>
          <p>"I do not consent to a search of my phone."</p>
        </div>
      </section>

      <div className="warning-box my-6">
        <p className="text-xs font-bold uppercase tracking-wider mb-2">Important</p>
        <p className="text-sm">
          At the border, rules are different. CBP may have more authority to search devices. Consult a lawyer if you're concerned.
        </p>
      </div>
    </InfoPageLayout>
  );
}
