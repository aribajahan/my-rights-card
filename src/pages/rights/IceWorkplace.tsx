import { InfoPageLayout } from '@/components/InfoPageLayout';

export default function IceWorkplace() {
  return (
    <InfoPageLayout title="ICE at Your Workplace">
      <div className="p-3 bg-accent border-l-4 border-foreground mb-6">
        <p className="text-sm font-semibold text-foreground">
          If ICE comes to your workplace, stay calm. Do not run.
        </p>
      </div>

      <section>
        <h2>What to Do</h2>
        <ol className="list-none space-y-3 my-4">
          <li className="flex items-start gap-3 text-sm">
            <span className="w-6 h-6 bg-foreground text-background flex items-center justify-center flex-shrink-0 text-xs font-bold">1</span>
            <span>Stay calm. Do not run or hide.</span>
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-6 h-6 bg-foreground text-background flex items-center justify-center flex-shrink-0 text-xs font-bold">2</span>
            <span>Ask if you are free to leave. If yes, leave calmly.</span>
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-6 h-6 bg-foreground text-background flex items-center justify-center flex-shrink-0 text-xs font-bold">3</span>
            <span>If not, exercise your right to remain silent.</span>
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-6 h-6 bg-foreground text-background flex items-center justify-center flex-shrink-0 text-xs font-bold">4</span>
            <span>Do not sign any documents without a lawyer.</span>
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-6 h-6 bg-foreground text-background flex items-center justify-center flex-shrink-0 text-xs font-bold">5</span>
            <span>Try to remember badge numbers, names, and what was said.</span>
          </li>
        </ol>
      </section>

      <section>
        <h2>What NOT to Do</h2>
        <ul className="list-none space-y-2 my-4">
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1.5 h-1.5 mt-2 bg-destructive flex-shrink-0"></span>
            Do not run or hide
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1.5 h-1.5 mt-2 bg-destructive flex-shrink-0"></span>
            Do not lie or give false documents
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1.5 h-1.5 mt-2 bg-destructive flex-shrink-0"></span>
            Do not resist physically
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1.5 h-1.5 mt-2 bg-destructive flex-shrink-0"></span>
            Do not sign anything you don't understand
          </li>
        </ul>
      </section>

      <section>
        <h2>Know Your Workplace Rights</h2>
        <ul className="list-none space-y-2 my-4">
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1.5 h-1.5 mt-2 bg-foreground flex-shrink-0"></span>
            ICE cannot enter private areas (like back offices or break rooms) without a judicial warrant or your employer's consent.
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1.5 h-1.5 mt-2 bg-foreground flex-shrink-0"></span>
            Your employer cannot retaliate against you for exercising your rights.
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1.5 h-1.5 mt-2 bg-foreground flex-shrink-0"></span>
            You can ask for a lawyer before answering questions.
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1.5 h-1.5 mt-2 bg-foreground flex-shrink-0"></span>
            You can refuse to sign voluntary departure forms.
          </li>
        </ul>
      </section>

      <div className="p-3 bg-accent border-l-4 border-foreground mt-8">
        <p className="text-sm font-semibold text-center text-foreground">
          Stay calm. Exercise your rights. Know who to call.
        </p>
      </div>
    </InfoPageLayout>
  );
}
