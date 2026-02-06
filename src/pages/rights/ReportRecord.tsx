import { InfoPageLayout } from '@/components/InfoPageLayout';

export default function ReportRecord() {
  return (
    <InfoPageLayout title="Report and Record">
      <p className="text-lg text-muted-foreground mb-8">
        Documenting an encounter can protect you and help others. Here's what to do.
      </p>

      <section>
        <h2>During an Encounter</h2>
        <ul className="list-none space-y-2 my-4">
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            You have the right to record officers in public
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Stay calm and keep your distance
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Do not interfere with officers
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            If possible, have someone else record while you speak
          </li>
        </ul>
      </section>

      <section>
        <h2>What to Document</h2>
        <ul className="list-none space-y-2 my-4">
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Date, time, and location
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Badge numbers and agency (ICE, CBP, police)
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Vehicle descriptions and license plates
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            What was said and done
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Witness names and contact information
          </li>
        </ul>
      </section>

      <section>
        <h2>After an Encounter</h2>
        <ul className="list-none space-y-2 my-4">
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Write down everything you remember as soon as possible
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Back up any recordings to the cloud
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Contact a lawyer if you or someone was detained
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Report the encounter to a rapid response hotline
          </li>
        </ul>
      </section>

      <section>
        <h2>Where to Report</h2>
        <div className="space-y-4 my-4">
          <div className="border-b border-border/50 pb-3">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">United We Dream</p>
            <a href="tel:1-844-363-1423" className="text-hotline font-bold text-lg hover:opacity-80 transition-opacity">
              1-844-363-1423
            </a>
          </div>
          <div>
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">ACLU</p>
            <a href="tel:1-212-549-2500" className="text-hotline font-bold text-lg hover:opacity-80 transition-opacity">
              1-212-549-2500
            </a>
          </div>
        </div>
      </section>

      <p className="text-center text-muted-foreground mt-12 pt-8 border-t border-border/50">
        Document everything. Your record could help.
      </p>
    </InfoPageLayout>
  );
}