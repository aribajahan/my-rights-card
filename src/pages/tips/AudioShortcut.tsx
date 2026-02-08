import { InfoPageLayout } from '@/components/InfoPageLayout';
import { Link } from 'react-router-dom';

export default function AudioShortcut() {
  return (
    <InfoPageLayout title="Set Up One-Tap Audio">
      <p className="text-lg text-muted-foreground mb-8">
        In a frightening moment, you might freeze. Set up a button that plays your rights statement out loud.
      </p>

      <section>
        <h2>Step 1: Download the Audio</h2>
        <p className="text-sm">
          First, <Link to="/prepare" className="underline hover:text-muted-foreground transition-colors">create your card</Link> and download the audio statement file.
        </p>
      </section>

      <section>
        <h2>iPhone Setup</h2>
        <ol className="list-decimal list-inside space-y-2 text-sm">
          <li>Save the audio file to the Files app (On My iPhone folder)</li>
          <li>Open the Shortcuts app</li>
          <li>Tap the + to create a new shortcut</li>
          <li>Add action: "Get File" → Select the audio file</li>
          <li>Add action: "Play Sound"</li>
          <li>Name it "My Rights"</li>
          <li>Tap the share icon and select "Add to Home Screen"</li>
        </ol>

        <div className="callout-minimal py-3 my-4">
          <p className="text-sm font-semibold">
            Tip: You can also add it to your Lock Screen as a widget for even faster access.
          </p>
        </div>
      </section>

      <section>
        <h2>Android Setup</h2>
        <ol className="list-decimal list-inside space-y-2 text-sm">
          <li>Download the audio file to your phone</li>
          <li>Install Tasker or MacroDroid from the Play Store</li>
          <li>Create a new automation that plays the audio file</li>
          <li>Add widget to Home Screen</li>
        </ol>
      </section>

      <section>
        <h2>Test It Now</h2>
        <ul className="list-none space-y-2 my-4">
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Make sure audio plays correctly
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Check that your volume is up
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Practice finding and tapping the shortcut quickly
          </li>
        </ul>
      </section>
    </InfoPageLayout>
  );
}
