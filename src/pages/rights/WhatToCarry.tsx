import { InfoPageLayout } from '@/components/InfoPageLayout';
import { useLanguage } from '@/contexts/LanguageContext';

export default function WhatToCarry() {
  const { t } = useLanguage();

  return (
    <InfoPageLayout title={t('whatToCarry')}>
      <div className="p-4 bg-accent/30 border-l-4 border-accent rounded-sm mb-6">
        <p className="text-base font-medium text-foreground">
          What you carry with you matters. Here's how to stay prepared.
        </p>
      </div>

      <section>
        <h2 className="text-xl font-bold mb-4 font-display text-foreground">What to Carry</h2>
        <ul className="list-none space-y-2 mb-4">
          <li className="flex items-start gap-3 text-base text-foreground">
            <span className="w-2 h-2 mt-2 rounded-full bg-secondary flex-shrink-0"></span>
            Your Know Your Rights card (from this app)
          </li>
          <li className="flex items-start gap-3 text-base text-foreground">
            <span className="w-2 h-2 mt-2 rounded-full bg-secondary flex-shrink-0"></span>
            Emergency contact information
          </li>
          <li className="flex items-start gap-3 text-base text-foreground">
            <span className="w-2 h-2 mt-2 rounded-full bg-secondary flex-shrink-0"></span>
            Your lawyer's phone number (if you have one)
          </li>
          <li className="flex items-start gap-3 text-base text-foreground">
            <span className="w-2 h-2 mt-2 rounded-full bg-secondary flex-shrink-0"></span>
            A valid photo ID (state ID, driver's license, or passport)
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-4 font-display text-foreground">If You Have Immigration Documents</h2>
        <p className="text-base leading-relaxed mb-4 text-foreground">
          If you have valid immigration documents (green card, work permit, visa), you should carry them with you. This can help avoid complications during an encounter.
        </p>
        <p className="text-base leading-relaxed text-foreground">
          Keep copies of important documents in a safe place at home. Give copies to a trusted friend or family member.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-4 font-display text-foreground">What NOT to Carry</h2>
        <ul className="list-none space-y-2 mb-4">
          <li className="flex items-start gap-3 text-base text-foreground">
            <span className="w-2 h-2 mt-2 rounded-full bg-foreground flex-shrink-0"></span>
            Fake documents or false IDs—these can lead to criminal charges
          </li>
          <li className="flex items-start gap-3 text-base text-foreground">
            <span className="w-2 h-2 mt-2 rounded-full bg-foreground flex-shrink-0"></span>
            Documents from another country that could suggest you are not a U.S. citizen (unless you need them)
          </li>
          <li className="flex items-start gap-3 text-base text-foreground">
            <span className="w-2 h-2 mt-2 rounded-full bg-foreground flex-shrink-0"></span>
            Anything that could be used against you in immigration proceedings
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-4 font-display text-foreground">Keep Your Phone Secure</h2>
        <p className="text-base leading-relaxed mb-4 text-foreground">
          Use a strong passcode (not Face ID or fingerprint alone). Officers may be able to compel you to unlock with biometrics, but they cannot force you to give a passcode.
        </p>
        <p className="text-base leading-relaxed text-foreground">
          Know your rights about phone searches. In most cases, officers need a warrant to search your phone.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-4 font-display text-foreground">Create a Family Safety Plan</h2>
        <ul className="list-none space-y-2 mb-4">
          <li className="flex items-start gap-3 text-base text-foreground">
            <span className="w-2 h-2 mt-2 rounded-full bg-secondary flex-shrink-0"></span>
            Designate a trusted person who can care for your children
          </li>
          <li className="flex items-start gap-3 text-base text-foreground">
            <span className="w-2 h-2 mt-2 rounded-full bg-secondary flex-shrink-0"></span>
            Keep important documents (birth certificates, school records) in a safe place
          </li>
          <li className="flex items-start gap-3 text-base text-foreground">
            <span className="w-2 h-2 mt-2 rounded-full bg-secondary flex-shrink-0"></span>
            Make sure your family knows who to call in an emergency
          </li>
        </ul>
      </section>

      <div className="p-4 bg-accent/20 rounded-sm mt-8 border-l-4 border-accent">
        <p className="text-base font-medium text-center text-foreground">
          Being prepared helps you stay calm and in control.
        </p>
      </div>
    </InfoPageLayout>
  );
}
