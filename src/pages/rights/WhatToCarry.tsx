import { InfoPageLayout } from '@/components/InfoPageLayout';

export default function WhatToCarry() {
  return (
    <InfoPageLayout title="What to Carry">
      <div className="p-3 bg-accent border-l-4 border-foreground mb-6">
        <p className="text-sm font-semibold text-foreground">
          Having the right documents—and knowing what not to carry—can help protect you.
        </p>
      </div>

      <section>
        <h2>Everyone Should Carry</h2>
        <ul className="list-none space-y-2 my-4">
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1.5 h-1.5 mt-2 bg-foreground flex-shrink-0"></span>
            A "Know Your Rights" card
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1.5 h-1.5 mt-2 bg-foreground flex-shrink-0"></span>
            Emergency contact information (on paper)
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1.5 h-1.5 mt-2 bg-foreground flex-shrink-0"></span>
            An immigration lawyer's phone number
          </li>
        </ul>
      </section>

      <section>
        <h2>If You Have Lawful Immigration Status</h2>
        <p>
          If you are a green card holder, you are required by law to carry your card. If you have another form of legal status (DACA, TPS, visa, etc.), consider carrying a copy of your documents.
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          <span className="font-semibold">Note:</span> Some people prefer to carry copies rather than originals to avoid losing irreplaceable documents.
        </p>
      </section>

      <section>
        <h2>Do NOT Carry</h2>
        <ul className="list-none space-y-2 my-4">
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1.5 h-1.5 mt-2 bg-destructive flex-shrink-0"></span>
            Fake documents or papers with false information
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1.5 h-1.5 mt-2 bg-destructive flex-shrink-0"></span>
            Foreign passports (unless required for work or travel)
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1.5 h-1.5 mt-2 bg-destructive flex-shrink-0"></span>
            Documents from other countries that could raise questions
          </li>
        </ul>
        <p className="text-sm text-muted-foreground mt-2">
          Carrying false documents is a crime and can hurt your case.
        </p>
      </section>

      <div className="p-3 bg-accent border-l-4 border-foreground mt-8">
        <p className="text-sm font-semibold text-center text-foreground">
          Be prepared. Know what to carry—and what not to.
        </p>
      </div>
    </InfoPageLayout>
  );
}
