import { InfoPageLayout } from '@/components/InfoPageLayout';

export default function ShareSafely() {
  return (
    <InfoPageLayout 
      title="Share Safely" 
      subtitle="Spread information without putting people at risk."
      backTo="/community"
      backLabel="Community"
    >
      {/* DO */}
      <section>
        <h2>Do</h2>
        <ul className="list-none space-y-1 text-sm">
          <li>✓ Share this tool with people who need it</li>
          <li>✓ Share via private messages</li>
          <li>✓ Share printable resources</li>
          <li>✓ Talk to neighbors and coworkers</li>
        </ul>
      </section>

      {/* DON'T */}
      <section>
        <h2>Don't</h2>
        <ul className="list-none space-y-1 text-sm">
          <li>✗ Post someone's location publicly</li>
          <li>✗ Share footage in real-time</li>
          <li>✗ Tag people or share their status publicly</li>
          <li>✗ Use public social media for coordination</li>
        </ul>
      </section>

      {/* SHARE THIS TOOL */}
      <section>
        <h2>Share This Tool</h2>
        <p className="font-bold text-lg">stayready.org</p>
      </section>

      {/* PRINTABLE RESOURCES */}
      <section>
        <h2>Printable Resources</h2>
        <ul className="list-none space-y-1 text-sm">
          <li>— <a href="https://www.aclu.org/know-your-rights/page/2" target="_blank" rel="noopener noreferrer" className="underline hover:text-muted-foreground transition-colors">ACLU Know Your Rights</a></li>
          <li>— <a href="https://www.ilrc.org/redcards" target="_blank" rel="noopener noreferrer" className="underline hover:text-muted-foreground transition-colors">ILRC Red Cards</a></li>
          <li>— <a href="https://www.nilc.org/resources/everyone-has-certain-basic-rights/" target="_blank" rel="noopener noreferrer" className="underline hover:text-muted-foreground transition-colors">NILC Know Your Rights</a></li>
        </ul>
      </section>
    </InfoPageLayout>
  );
}
