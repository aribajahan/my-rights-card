import { InfoPageLayout } from '@/components/InfoPageLayout';

export default function GoodWitness() {
  return (
    <InfoPageLayout title="How to Be a Good Witness">
      <p className="text-lg text-muted-foreground mb-6">
        If you see an ICE encounter, you can help by documenting what happens.
      </p>

      <section>
        <h2>If You See an ICE Encounter</h2>
        <ul className="list-none space-y-1.5 my-3">
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Stay calm
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Keep a safe distance
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Record if you can do so safely
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Do not physically interfere
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Note: date, time, location, number of officers, badge numbers, vehicle plates
          </li>
        </ul>
      </section>

      <section>
        <h2>What to Say</h2>
        <div className="callout-minimal py-2 my-3">
          <p className="italic text-sm">
            "I am a witness. I am recording this for documentation purposes."
          </p>
        </div>
      </section>

      <section>
        <h2>After the Encounter</h2>
        <ul className="list-none space-y-1.5 my-3">
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Offer your contact info to those affected
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Send documentation to a lawyer or hotline
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Report to United We Dream: <a href="tel:1-844-363-1423" className="text-hotline font-bold">1-844-363-1423</a>
          </li>
        </ul>
      </section>
    </InfoPageLayout>
  );
}
