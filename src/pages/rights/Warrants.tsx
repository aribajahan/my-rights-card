import { InfoPageLayout } from '@/components/InfoPageLayout';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Warrants() {
  const { t } = useLanguage();

  return (
    <InfoPageLayout title={t('warrantsDifference')}>
      <div className="p-4 bg-accent/30 border-l-4 border-accent rounded-sm mb-6">
        <p className="text-base font-medium text-foreground">
          Not all warrants are the same. Understanding the difference can protect your rights.
        </p>
      </div>

      <section>
        <h2 className="text-xl font-bold mb-4 font-display text-foreground">Judicial Warrant</h2>
        <p className="text-base leading-relaxed mb-4 text-foreground">
          A judicial warrant is signed by a judge. This is the only type of warrant that allows officers to enter your home without your permission.
        </p>
        <div className="p-4 bg-card border-2 border-foreground/15 rounded-sm mb-4">
          <p className="font-semibold text-foreground mb-3">A valid judicial warrant:</p>
          <ul className="list-none space-y-2">
            <li className="flex items-start gap-3 text-base text-foreground">
              <span className="w-2 h-2 mt-2 rounded-full bg-secondary flex-shrink-0"></span>
              Is signed by a judge
            </li>
            <li className="flex items-start gap-3 text-base text-foreground">
              <span className="w-2 h-2 mt-2 rounded-full bg-secondary flex-shrink-0"></span>
              Has your correct name
            </li>
            <li className="flex items-start gap-3 text-base text-foreground">
              <span className="w-2 h-2 mt-2 rounded-full bg-secondary flex-shrink-0"></span>
              Has your correct address
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-4 font-display text-foreground">ICE Administrative Warrant</h2>
        <p className="text-base leading-relaxed mb-4 text-foreground">
          An ICE administrative warrant is signed by an immigration officer, <strong>not a judge</strong>. This type of warrant does NOT give ICE the right to enter your home.
        </p>
        <div className="p-4 bg-card border-2 border-foreground/15 rounded-sm mb-4">
          <p className="font-semibold text-foreground mb-3">ICE administrative warrants include:</p>
          <ul className="list-none space-y-2">
            <li className="flex items-start gap-3 text-base text-foreground">
              <span className="w-2 h-2 mt-2 rounded-full bg-muted-foreground flex-shrink-0"></span>
              Form I-200 (Warrant for Arrest of Alien)
            </li>
            <li className="flex items-start gap-3 text-base text-foreground">
              <span className="w-2 h-2 mt-2 rounded-full bg-muted-foreground flex-shrink-0"></span>
              Form I-205 (Warrant of Removal/Deportation)
            </li>
          </ul>
        </div>
        <p className="text-base leading-relaxed text-foreground">
          If ICE shows you one of these forms, you can refuse to open your door.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-4 font-display text-foreground">How to Tell the Difference</h2>
        <p className="text-base leading-relaxed mb-4 text-foreground">
          Ask to see the warrant. Ask them to slip it under the door or hold it up to a window.
        </p>
        <p className="text-base leading-relaxed mb-4 text-foreground">
          Look for a judge's signature. If the signature is from an immigration officer or DHS official, it is an administrative warrant—not a judicial warrant.
        </p>
        <div className="p-4 bg-card border-2 border-foreground/15 rounded-sm mb-4">
          <p className="font-semibold text-foreground mb-1">What to say:</p>
          <p className="italic text-muted-foreground">"Please slip the warrant under the door so I can read it."</p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-4 font-display text-foreground">If It's Not a Judicial Warrant</h2>
        <p className="text-base leading-relaxed mb-4 text-foreground">
          You can say:
        </p>
        <div className="p-4 bg-card border-2 border-foreground/15 rounded-sm mb-4">
          <p className="italic text-muted-foreground">"This is not a judicial warrant signed by a judge. I do not consent to your entry."</p>
        </div>
      </section>

      <div className="p-4 bg-accent/20 rounded-sm mt-8 border-l-4 border-accent">
        <p className="text-base font-medium text-center text-foreground">
          Know the difference. It can protect your home.
        </p>
      </div>
    </InfoPageLayout>
  );
}
