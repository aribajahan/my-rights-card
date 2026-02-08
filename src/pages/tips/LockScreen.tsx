import { InfoPageLayout } from '@/components/InfoPageLayout';
import { Link } from 'react-router-dom';

export default function LockScreen() {
  return (
    <InfoPageLayout title="Set Up Your Lock Screen">
      <p className="text-lg text-muted-foreground mb-8">
        Your phone might be taken or you might not be able to unlock it. A lock screen with your rights is always visible.
      </p>

      <section>
        <h2>Step 1: Create Your Card</h2>
        <p className="text-sm">
          <Link to="/prepare" className="underline hover:text-muted-foreground transition-colors">
            Create your card
          </Link> using this tool and download the image.
        </p>
      </section>

      <section>
        <h2>Step 2: Set as Lock Screen</h2>
        
        <h3 className="text-sm font-bold mt-4 mb-2">iPhone</h3>
        <ol className="list-decimal list-inside space-y-1 text-sm">
          <li>Open Settings</li>
          <li>Tap Wallpaper</li>
          <li>Tap Add New Wallpaper</li>
          <li>Choose Photo and select your card</li>
          <li>Adjust position so content is visible below the clock</li>
          <li>Tap Add</li>
        </ol>

        <h3 className="text-sm font-bold mt-4 mb-2">Android</h3>
        <ol className="list-decimal list-inside space-y-1 text-sm">
          <li>Open Settings</li>
          <li>Tap Wallpaper or Display</li>
          <li>Select Lock Screen</li>
          <li>Choose from Gallery and select your card</li>
          <li>Adjust position</li>
          <li>Save</li>
        </ol>
      </section>

      <section>
        <h2>Tips</h2>
        <ul className="list-none space-y-2 my-4">
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Position so the important text is visible below your clock
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Test by locking your phone
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Show family members how to read it
          </li>
        </ul>
      </section>
    </InfoPageLayout>
  );
}
