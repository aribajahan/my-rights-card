import { InfoPageLayout } from '@/components/InfoPageLayout';

export default function EmergencyText() {
  return (
    <InfoPageLayout title="Emergency Text Shortcuts">
      <p className="text-lg text-muted-foreground mb-8">
        In a stressful moment, send your location to trusted contacts with one tap.
      </p>

      <section>
        <h2>iPhone Setup</h2>
        <ol className="list-decimal list-inside space-y-2 text-sm">
          <li>Open the Shortcuts app</li>
          <li>Tap + to create a new shortcut</li>
          <li>Add action: "Get Current Location"</li>
          <li>Add action: "Send Message"</li>
          <li>Set recipients (your trusted contacts)</li>
          <li>Set message: "I need help. My location:"</li>
          <li>The location will be automatically appended</li>
          <li>Name it "Emergency Alert"</li>
          <li>Add to Home Screen</li>
        </ol>
      </section>

      <section>
        <h2>Android Setup</h2>
        <ul className="list-none space-y-2 my-4">
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Use Google Messages emergency sharing feature
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Or use Tasker to create an automated text with location
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Samsung phones have built-in SOS features in Settings → Safety and Emergency
          </li>
        </ul>
      </section>

      <section>
        <h2>What to Include</h2>
        <div className="callout-minimal py-3 my-4">
          <p className="italic text-sm">
            "I need help. This is an emergency. My current location: [auto-inserted]"
          </p>
        </div>
        <ul className="list-none space-y-2 my-4">
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Choose 2-3 trusted contacts who can respond quickly
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Tell them in advance that you've set this up
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Test it to make sure it works
          </li>
        </ul>
      </section>
    </InfoPageLayout>
  );
}
