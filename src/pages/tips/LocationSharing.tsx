import { InfoPageLayout } from '@/components/InfoPageLayout';

export default function LocationSharing() {
  return (
    <InfoPageLayout title="Location Sharing Setup">
      <p className="text-lg text-muted-foreground mb-8">
        If you are detained, your family can see where you were last seen.
      </p>

      <section>
        <h2>Why This Matters</h2>
        <p className="text-sm">
          If you are detained, your phone may be taken or turned off. 
          Continuous location sharing means your family can see your last known location, 
          which can help them find you or know where you were taken.
        </p>
      </section>

      <section>
        <h2>iPhone: Find My</h2>
        <ol className="list-decimal list-inside space-y-1 text-sm">
          <li>Open the Find My app</li>
          <li>Tap "People" at the bottom</li>
          <li>Tap "+ Share My Location"</li>
          <li>Select trusted contacts</li>
          <li>Choose "Share Indefinitely"</li>
        </ol>
      </section>

      <section>
        <h2>Android: Google Maps</h2>
        <ol className="list-decimal list-inside space-y-1 text-sm">
          <li>Open Google Maps</li>
          <li>Tap your profile picture</li>
          <li>Tap "Location sharing"</li>
          <li>Tap "Share location"</li>
          <li>Select "Until you turn this off"</li>
          <li>Choose contacts to share with</li>
        </ol>
      </section>

      <section>
        <h2>WhatsApp Live Location</h2>
        <ol className="list-decimal list-inside space-y-1 text-sm">
          <li>Open a chat with a trusted contact</li>
          <li>Tap the + or attachment icon</li>
          <li>Select "Location"</li>
          <li>Choose "Share live location"</li>
          <li>Select 8 hours (maximum)</li>
        </ol>
        <p className="text-sm text-muted-foreground mt-2">
          Note: WhatsApp live location expires, so this is better for short-term sharing.
        </p>
      </section>

      <section>
        <h2>Important</h2>
        <ul className="list-none space-y-2 my-4">
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Share with 2+ trusted people
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Keep location sharing on always, not just during emergencies
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Make sure your contacts know how to check your location
          </li>
        </ul>
      </section>
    </InfoPageLayout>
  );
}
