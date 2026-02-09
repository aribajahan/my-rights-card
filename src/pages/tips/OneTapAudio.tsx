import { InfoPageLayout } from '@/components/InfoPageLayout';
import { Download } from 'lucide-react';

export default function OneTapAudio() {
  const handleDownload = (filename: string, displayName: string) => {
    const link = document.createElement('a');
    link.href = `/audio/${filename}`;
    link.download = displayName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <InfoPageLayout 
      title="One-Tap Audio Setup" 
      subtitle="In a frightening moment, you might freeze. Set up a button that plays your rights statement automatically."
      backTo="/tips"
      backLabel="Tips"
    >
      {/* Download section */}
      <section className="mb-6">
        <div className="section-divider mb-6" />
        <h2>Download the Audio</h2>
        <p className="text-sm text-muted-foreground mb-4">Choose a voice:</p>
        
        <div className="space-y-3">
          <button
            onClick={() => handleDownload('rights_statement_female.mp3', 'Rights Statement (Female Voice).mp3')}
            className="w-full flex items-center justify-between p-4 text-base font-bold uppercase tracking-wider bg-primary text-primary-foreground transition-all duration-200 hover:opacity-90"
          >
            Female Voice
            <Download size={20} />
          </button>
          
          <button
            onClick={() => handleDownload('rights_statement_male.mp3', 'Rights Statement (Male Voice).mp3')}
            className="w-full flex items-center justify-between p-4 text-base font-bold uppercase tracking-wider bg-primary text-primary-foreground transition-all duration-200 hover:opacity-90"
          >
            Male Voice
            <Download size={20} />
          </button>
        </div>
        <div className="section-divider mt-6" />
      </section>

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
