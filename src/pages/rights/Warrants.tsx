import { InfoPageLayout } from '@/components/InfoPageLayout';
import { CheckCircle, AlertTriangle, XCircle } from 'lucide-react';

export default function Warrants() {
  return (
    <InfoPageLayout title="Warrants: Know the Difference">
      <div className="p-3 bg-accent border-l-4 border-foreground mb-6">
        <p className="text-sm font-semibold text-foreground">
          Not all warrants are the same. Understanding the difference can protect your rights.
        </p>
      </div>

      <section>
        <div className="flex items-start gap-3 mb-3">
          <CheckCircle className="w-6 h-6 text-foreground flex-shrink-0 mt-0.5" />
          <h2 className="m-0">Judicial Search Warrant</h2>
        </div>
        <p>
          A judicial warrant is signed by a judge and allows officers to enter your home.
        </p>
        <div className="p-3 bg-accent border-l-4 border-foreground mb-4">
          <p className="text-sm font-semibold text-foreground mb-3">A valid judicial warrant must have:</p>
          <ul className="list-none space-y-2">
            <li className="flex items-start gap-3 text-sm">
              <span className="w-1.5 h-1.5 mt-2 bg-foreground flex-shrink-0"></span>
              The correct address
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="w-1.5 h-1.5 mt-2 bg-foreground flex-shrink-0"></span>
              A judge's signature
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="w-1.5 h-1.5 mt-2 bg-foreground flex-shrink-0"></span>
              A recent date
            </li>
          </ul>
        </div>
      </section>

      <section>
        <div className="flex items-start gap-3 mb-3">
          <AlertTriangle className="w-6 h-6 text-foreground flex-shrink-0 mt-0.5" />
          <h2 className="m-0">Judicial Arrest Warrant</h2>
        </div>
        <p>
          A judicial arrest warrant is signed by a judge and allows officers to arrest a specific person. It does <strong>not</strong> allow them to enter a third party's home without permission.
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          <span className="font-semibold">Note:</span> If the warrant is for someone else in your home, you do not have to let them in.
        </p>
      </section>

      <section>
        <div className="flex items-start gap-3 mb-3">
          <XCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-0.5" />
          <h2 className="m-0">ICE Administrative Warrant</h2>
        </div>
        <p>
          An ICE administrative warrant is signed by an immigration officer, <strong>not a judge</strong>. This type of warrant does NOT give ICE the right to enter your home.
        </p>
        <div className="p-3 bg-accent border-l-4 border-foreground mb-4">
          <p className="text-sm font-semibold text-foreground mb-3">Common ICE forms (NOT judicial warrants):</p>
          <ul className="list-none space-y-2">
            <li className="flex items-start gap-3 text-sm">
              <span className="w-1.5 h-1.5 mt-2 bg-destructive flex-shrink-0"></span>
              Form I-200 (Warrant for Arrest of Alien)
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="w-1.5 h-1.5 mt-2 bg-destructive flex-shrink-0"></span>
              Form I-205 (Warrant of Removal/Deportation)
            </li>
          </ul>
        </div>
        <p className="text-sm font-semibold text-destructive">
          If they only have an ICE administrative warrant, you do not have to open your door.
        </p>
      </section>

      <section>
        <h2>How to Check a Warrant</h2>
        <ol className="list-none space-y-3 my-4">
          <li className="flex items-start gap-3 text-sm">
            <span className="w-6 h-6 bg-foreground text-background flex items-center justify-center flex-shrink-0 text-xs font-bold">1</span>
            <span>Ask officers to slip the warrant under the door.</span>
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-6 h-6 bg-foreground text-background flex items-center justify-center flex-shrink-0 text-xs font-bold">2</span>
            <span>Look for a judge's signature.</span>
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-6 h-6 bg-foreground text-background flex items-center justify-center flex-shrink-0 text-xs font-bold">3</span>
            <span>Check that the name and address are correct.</span>
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-6 h-6 bg-foreground text-background flex items-center justify-center flex-shrink-0 text-xs font-bold">4</span>
            <span>Look for the issuing court's name.</span>
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-6 h-6 bg-foreground text-background flex items-center justify-center flex-shrink-0 text-xs font-bold">5</span>
            <span>If it's not a judicial warrant, you can refuse entry.</span>
          </li>
        </ol>
      </section>

      <section>
        <div className="p-3 bg-accent border-l-4 border-foreground mb-4">
          <p className="text-sm font-semibold text-foreground mb-1">What to say:</p>
          <p className="text-sm text-muted-foreground italic">"Please slip the warrant under the door. I need to verify it is signed by a judge."</p>
        </div>
      </section>

      <div className="p-3 bg-accent border-l-4 border-foreground mt-8">
        <p className="text-sm font-semibold text-center text-foreground">
          Know the difference. It can protect your home.
        </p>
      </div>
    </InfoPageLayout>
  );
}
