import { InfoPageLayout } from '@/components/InfoPageLayout';
import { Link } from 'react-router-dom';
import { NavListItem } from '@/components/NavListItem';

export default function SetUpTheirPhone() {
  return (
    <InfoPageLayout 
      title="Set Up Their Phone" 
      subtitle="A rights card is step one. These extra steps take 5 minutes."
      backTo="/community"
      backLabel="Community"
    >
      {/* ESSENTIALS */}
      <section>
        <h2>Essentials</h2>
        <ul className="list-none space-y-3 text-sm my-4">
          <li className="flex items-start gap-2">
            <span className="text-muted-foreground">☐</span>
            <div>
              <span className="font-bold">Lock screen card</span>
              <p className="text-muted-foreground">Set the rights card as wallpaper</p>
            </div>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-muted-foreground">☐</span>
            <div>
              <span className="font-bold">Emergency contacts</span>
              <p className="text-muted-foreground">Add to phone's emergency info</p>
            </div>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-muted-foreground">☐</span>
            <div>
              <span className="font-bold">Memorize one number</span>
              <p className="text-muted-foreground">Help them memorize a trusted contact</p>
            </div>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-muted-foreground">☐</span>
            <div>
              <span className="font-bold">Emergency text shortcut</span>
              <p className="text-muted-foreground">One-tap text with location</p>
            </div>
          </li>
        </ul>
      </section>

      <div className="section-divider my-4" />

      <nav className="nav-list">
        <NavListItem to="/tips/lock-screen" label="Lock screen setup" />
        <NavListItem to="/tips/emergency-contacts" label="Emergency contacts" />
        <NavListItem to="/tips/emergency-text" label="Emergency text" />
      </nav>
    </InfoPageLayout>
  );
}
