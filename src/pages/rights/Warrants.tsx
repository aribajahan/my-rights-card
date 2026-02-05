import { InfoPageLayout } from '@/components/InfoPageLayout';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Warrants() {
  const { t } = useLanguage();

  return (
    <InfoPageLayout title={t('warrantsDifference')}>
      <div className="p-4 bg-accent/30 rounded-2xl mb-6">
        <p className="text-sm font-medium text-headline">
          Not all warrants are the same. Understanding the difference can protect your rights.
        </p>
      </div>

      <section>
        <h2>Judicial Warrant</h2>
        <p>
          A judicial warrant is signed by a judge. This is the only type of warrant that allows officers to enter your home without your permission.
        </p>
        <div className="p-4 bg-card rounded-2xl shadow-card mb-4">
          <p className="text-sm font-medium text-headline mb-3">A valid judicial warrant:</p>
          <ul className="list-none space-y-2">
            <li className="flex items-start gap-3 text-sm">
              <span className="w-1.5 h-1.5 mt-2 rounded-full bg-primary flex-shrink-0"></span>
              Is signed by a judge
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="w-1.5 h-1.5 mt-2 rounded-full bg-primary flex-shrink-0"></span>
              Has your correct name
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="w-1.5 h-1.5 mt-2 rounded-full bg-primary flex-shrink-0"></span>
              Has your correct address
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h2>ICE Administrative Warrant</h2>
        <p>
          An ICE administrative warrant is signed by an immigration officer, <strong>not a judge</strong>. This type of warrant does NOT give ICE the right to enter your home.
        </p>
        <div className="p-4 bg-card rounded-2xl shadow-card mb-4">
          <p className="text-sm font-medium text-headline mb-3">ICE administrative warrants include:</p>
          <ul className="list-none space-y-2">
            <li className="flex items-start gap-3 text-sm">
              <span className="w-1.5 h-1.5 mt-2 rounded-full bg-muted-foreground flex-shrink-0"></span>
              Form I-200 (Warrant for Arrest of Alien)
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="w-1.5 h-1.5 mt-2 rounded-full bg-muted-foreground flex-shrink-0"></span>
              Form I-205 (Warrant of Removal/Deportation)
            </li>
          </ul>
        </div>
        <p>If ICE shows you one of these forms, you can refuse to open your door.</p>
      </section>

      <section>
        <h2>How to Tell the Difference</h2>
        <p>
          Ask to see the warrant. Ask them to slip it under the door or hold it up to a window.
        </p>
        <p>
          Look for a judge's signature. If the signature is from an immigration officer or DHS official, it is an administrative warrant—not a judicial warrant.
        </p>
        <div className="p-4 bg-card rounded-2xl shadow-card mb-4">
          <p className="text-sm font-medium text-headline mb-1">What to say:</p>
          <p className="text-sm text-muted-foreground italic">"Please slip the warrant under the door so I can read it."</p>
        </div>
      </section>

      <section>
        <h2>If It's Not a Judicial Warrant</h2>
        <div className="p-4 bg-card rounded-2xl shadow-card mb-4">
          <p className="text-sm text-muted-foreground italic">"This is not a judicial warrant signed by a judge. I do not consent to your entry."</p>
        </div>
      </section>

      <div className="p-4 bg-accent/20 rounded-2xl mt-8">
        <p className="text-sm font-medium text-center text-headline">
          Know the difference. It can protect your home.
        </p>
      </div>
    </InfoPageLayout>
  );
}
