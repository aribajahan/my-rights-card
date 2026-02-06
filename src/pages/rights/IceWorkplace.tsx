import { InfoPageLayout } from '@/components/InfoPageLayout';

export default function IceWorkplace() {
  return (
    <InfoPageLayout title="ICE at Your Workplace">
      <p className="text-lg text-muted-foreground mb-8">
        You have rights at work. ICE cannot enter non-public areas without consent or a valid warrant.
      </p>

      <section>
        <h2>Know Your Workplace Rights</h2>
        <ul className="list-none space-y-2 my-4">
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            ICE cannot enter private workspaces (like back rooms or offices) without a warrant or employer consent.
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            You have the right to remain silent and do not have to answer questions about your immigration status.
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            You can ask if you are free to leave.
          </li>
        </ul>
      </section>

      <section>
        <h2>If ICE Arrives</h2>
        <ul className="list-none space-y-2 my-4">
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Stay calm.
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Do not run.
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            If possible, alert a supervisor or coworker.
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            If you can, record the encounter.
          </li>
        </ul>
      </section>

      <section>
        <h2>What Employers Should Know</h2>
        <ul className="list-none space-y-2 my-4">
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Employers can ask to see a warrant before allowing entry to private areas.
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Employers should not share private employee records without a valid subpoena.
          </li>
        </ul>
      </section>

      <p className="text-center text-muted-foreground mt-12 pt-8 border-t border-border/50">
        Know your rights. Stay calm. Ask for a warrant.
      </p>
    </InfoPageLayout>
  );
}