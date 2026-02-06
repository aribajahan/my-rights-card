import { InfoPageLayout } from '@/components/InfoPageLayout';

export default function WhatToCarry() {
  return (
    <InfoPageLayout title="What to Carry">
      <p className="text-lg text-muted-foreground mb-8">
        Having the right documents—and knowing what not to carry—can help protect you.
      </p>

      <section>
        <h2>Everyone Should Carry</h2>
        <ul className="list-none space-y-2 my-4">
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            A "Know Your Rights" card
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Emergency contact information (on paper)
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            An immigration lawyer's phone number
          </li>
        </ul>
      </section>

      <section>
        <h2>If You Have Lawful Immigration Status</h2>
        <p>
          If you are a green card holder, you are required by law to carry your card. If you have another form of legal status (DACA, TPS, visa, etc.), consider carrying a copy of your documents.
        </p>
        <p className="text-sm text-muted-foreground mt-3">
          Note: Some people prefer to carry copies rather than originals to avoid losing irreplaceable documents.
        </p>
      </section>

      <section>
        <h2>Do NOT Carry</h2>
        <ul className="list-none space-y-2 my-4">
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-destructive flex-shrink-0 rounded-full"></span>
            Fake documents or papers with false information
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-destructive flex-shrink-0 rounded-full"></span>
            Foreign passports (unless required for work or travel)
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-destructive flex-shrink-0 rounded-full"></span>
            Documents from other countries that could raise questions
          </li>
        </ul>
        <p className="text-sm text-muted-foreground mt-3">
          Carrying false documents is a crime and can hurt your case.
        </p>
      </section>

      <p className="text-center text-muted-foreground mt-12 pt-8 border-t border-border/50">
        Be prepared. Know what to carry—and what not to.
      </p>
    </InfoPageLayout>
  );
}