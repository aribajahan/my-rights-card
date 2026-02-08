import { InfoPageLayout } from '@/components/InfoPageLayout';

export default function Recording() {
  return (
    <InfoPageLayout title="One-Tap Recording">
      <p className="text-lg text-muted-foreground mb-8">
        You have the right to record in public. Having a shortcut makes it fast.
      </p>

      <section>
        <h2>iPhone Options</h2>
        
        <h3 className="text-sm font-bold mt-4 mb-2">Screen Recording</h3>
        <ol className="list-decimal list-inside space-y-1 text-sm">
          <li>Open Settings → Control Center</li>
          <li>Add "Screen Recording" to included controls</li>
          <li>Swipe down from top-right to access Control Center</li>
          <li>Tap the record button</li>
        </ol>

        <h3 className="text-sm font-bold mt-4 mb-2">Back Tap (Even Faster)</h3>
        <ol className="list-decimal list-inside space-y-1 text-sm">
          <li>Open Settings → Accessibility → Touch</li>
          <li>Scroll down and tap "Back Tap"</li>
          <li>Choose Double Tap or Triple Tap</li>
          <li>Select "Open Camera" or create a Shortcut</li>
        </ol>
      </section>

      <section>
        <h2>Android Options</h2>
        <ul className="list-none space-y-2 my-4">
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Add Camera widget directly to your lock screen
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Use quick settings tile for screen recording
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Double-tap power button to open camera (on some phones)
          </li>
        </ul>
      </section>

      <section>
        <h2>Important Reminders</h2>
        <ul className="list-none space-y-2 my-4">
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Stay at a safe distance when recording
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Do not interfere with officers
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            You have the right to record in public spaces
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Save recordings to cloud storage automatically if possible
          </li>
        </ul>
      </section>
    </InfoPageLayout>
  );
}
