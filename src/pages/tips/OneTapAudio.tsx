import { InfoPageLayout } from '@/components/InfoPageLayout';

export default function OneTapAudio() {
  return (
    <InfoPageLayout 
      title="One-Tap Audio Setup" 
      subtitle="In a frightening moment, you might freeze. Set up a button that plays your rights statement automatically."
      backTo="/tips"
      backLabel="Tips"
    >
      <section>
        <h2>What This Does</h2>
        <p>
          Creates a shortcut on your phone that plays an audio recording of your rights statement when tapped.
        </p>
      </section>

      <section>
        <h2>iPhone Setup</h2>
        <ol className="list-decimal list-inside space-y-1 text-sm">
          <li>Download the audio file to your phone</li>
          <li>Open the Shortcuts app</li>
          <li>Create a new shortcut</li>
          <li>Add action: "Play Sound"</li>
          <li>Select your rights audio file</li>
          <li>Name it "My Rights"</li>
          <li>Add to home screen</li>
        </ol>
      </section>

      <section>
        <h2>Android Setup</h2>
        <ol className="list-decimal list-inside space-y-1 text-sm">
          <li>Download the audio file to your phone</li>
          <li>Install a widget app (like KWGT or Shortcut Maker)</li>
          <li>Create a widget that plays the audio file</li>
          <li>Place the widget on your home screen</li>
        </ol>
      </section>

      <div className="warning-box my-6">
        <p className="text-xs font-bold uppercase tracking-wider mb-2">Tip</p>
        <p className="text-sm">
          Test the shortcut before you need it. Make sure the volume is loud enough to be heard.
        </p>
      </div>
    </InfoPageLayout>
  );
}
