import { InfoPageLayout } from '@/components/InfoPageLayout';

export default function MemorizeNumber() {
  return (
    <InfoPageLayout 
      title="Memorize a Number" 
      subtitle="If you're detained, you may not have your phone. Memorize at least one number."
      backTo="/tips"
      backLabel="Tips"
    >
      <section>
        <h2>Why This Matters</h2>
        <p>
          If you're detained, your phone may be taken. You'll get phone calls, but you need to know who to call.
        </p>
      </section>

      <section>
        <h2>Who to Memorize</h2>
        <ul className="list-none space-y-1 text-sm">
          <li>— A trusted family member</li>
          <li>— An immigration lawyer</li>
          <li>— A friend who can help coordinate</li>
        </ul>
      </section>

      <section>
        <h2>How to Memorize</h2>
        <ul className="list-none space-y-1 text-sm">
          <li>— Write it down and practice daily</li>
          <li>— Say it out loud 10 times</li>
          <li>— Make it a song or pattern</li>
          <li>— Practice dialing it without looking</li>
        </ul>
      </section>

      <div className="warning-box my-6">
        <p className="text-xs font-bold uppercase tracking-wider mb-2">Important Hotlines</p>
        <p className="text-sm mb-2">
          <span className="font-bold">United We Dream:</span> 1-844-363-1423
        </p>
        <p className="text-sm">
          <span className="font-bold">Detention Hotline (inside):</span> 9233#
        </p>
      </div>
    </InfoPageLayout>
  );
}
