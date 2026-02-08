import { InfoPageLayout } from '@/components/InfoPageLayout';

export default function Trackers() {
  return (
    <InfoPageLayout title="Tracker Tips (AirTags)">
      <p className="text-lg text-muted-foreground mb-8">
        Small trackers can help family find each other if someone is detained.
      </p>

      <section>
        <h2>How They Work</h2>
        <p className="text-sm">
          Small Bluetooth trackers like Apple AirTags or Tile can be hidden in clothing, 
          bags, or accessories. Family members with the corresponding app can see the 
          tracker's location.
        </p>
      </section>

      <section>
        <h2>Where to Hide Them</h2>
        <ul className="list-none space-y-2 my-4">
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Jacket lining or pocket
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Inside a shoe
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Sewn into a bag or backpack
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            In a belt or wallet
          </li>
        </ul>
      </section>

      <section>
        <h2>For Children</h2>
        <ul className="list-none space-y-2 my-4">
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Put in backpack
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Hidden in jacket pocket
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            In a shoe or lunchbox
          </li>
        </ul>
      </section>

      <section>
        <h2>Setup</h2>
        <ul className="list-none space-y-2 my-4">
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            <strong>Apple AirTag:</strong> Set up with Find My app on iPhone
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            <strong>Tile:</strong> Works with both iPhone and Android
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Battery lasts about a year
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Share access with trusted family members
          </li>
        </ul>
      </section>

      <section>
        <h2>Limitations</h2>
        <p className="text-sm text-muted-foreground">
          Trackers rely on Bluetooth and nearby devices to report location. 
          They may not work in very remote areas or inside detention facilities 
          without cell coverage. Consider them one tool among many.
        </p>
      </section>
    </InfoPageLayout>
  );
}
