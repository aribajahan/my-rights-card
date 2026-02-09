import { InfoPageLayout } from '@/components/InfoPageLayout';

export default function SomeoneDetained() {
  return (
    <InfoPageLayout 
      title="If Someone Is Detained" 
      subtitle="Take a breath. Here's what to do."
      backTo="/community"
      backLabel="Community"
    >
      {/* STEP 1: FIND THEM */}
      <section>
        <h2>Step 1: Find Them</h2>
        <div className="bg-card p-4 my-3">
          <p className="font-bold">ICE Online Detainee Locator</p>
          <a href="https://locator.ice.gov" target="_blank" rel="noopener noreferrer" className="underline hover:text-muted-foreground transition-colors">
            locator.ice.gov
          </a>
        </div>
        <p className="text-sm text-muted-foreground">
          You'll need their full legal name, country of birth, and date of birth.
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          It may take 24-72 hours to appear.
        </p>
      </section>

      {/* STEP 2: FIND THEIR COURT DATE */}
      <section>
        <h2>Step 2: Find Their Court Date</h2>
        <div className="bg-card p-4 my-3">
          <p className="font-bold">Immigration Court Hotline</p>
          <a href="tel:1-800-898-7180" className="font-bold text-lg">1-800-898-7180</a>
        </div>
        <p className="text-sm text-muted-foreground">
          You'll need their A-number if you have it.
        </p>
      </section>

      {/* STEP 3: GET LEGAL HELP */}
      <section>
        <h2>Step 3: Get Legal Help</h2>
        <div className="space-y-2 text-sm">
          <div>
            <p className="font-bold">Immigration Legal Services Directory</p>
            <a href="https://immigrationadvocates.org/nonprofit/legaldirectory" target="_blank" rel="noopener noreferrer" className="underline hover:text-muted-foreground transition-colors">
              immigrationadvocates.org
            </a>
          </div>
          <div>
            <p className="font-bold">Immigration Law Help</p>
            <a href="https://immigrationlawhelp.org" target="_blank" rel="noopener noreferrer" className="underline hover:text-muted-foreground transition-colors">
              immigrationlawhelp.org
            </a>
          </div>
        </div>
      </section>

      {/* STEP 4: UNDERSTAND BOND */}
      <section>
        <h2>Step 4: Understand Bond</h2>
        <p className="text-sm mb-3">Some people can be released on bond.</p>
        <div className="bg-card p-4 my-3">
          <p className="font-bold">NIJC Bond Quick-Start Guide</p>
          <a href="https://immigrantjustice.org" target="_blank" rel="noopener noreferrer" className="underline hover:text-muted-foreground transition-colors">
            immigrantjustice.org
          </a>
        </div>
        <p className="font-bold mt-3 mb-1">Bond funds:</p>
        <ul className="list-none space-y-1 text-sm">
          <li>— National Bail Fund Network</li>
          <li>— Envision Freedom Fund</li>
        </ul>
      </section>

      {/* FROM INSIDE DETENTION */}
      <section>
        <h2>From Inside Detention</h2>
        <div className="bg-card p-4 my-3">
          <p className="font-bold">National Immigration Detention Hotline</p>
          <p className="text-sm">Inside: dial <span className="font-bold">9233#</span></p>
          <p className="text-sm">Outside: <a href="tel:2097573733" className="text-hotline font-bold">(209) 757-3733</a></p>
        </div>
      </section>
    </InfoPageLayout>
  );
}
