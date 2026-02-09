import { InfoPageLayout } from '@/components/InfoPageLayout';

export default function About() {
  return (
    <InfoPageLayout 
      title="About" 
      subtitle="Stay Ready"
      backTo="/"
      backLabel="Home"
    >
      <section>
        <p className="text-sm mb-2">
          This tool was built by a team of immigrant women in the United States.
        </p>
        <p className="text-sm">
          We made this for our families, our neighbors, and our communities.
        </p>
      </section>

      <section>
        <p className="text-sm mb-2">
          Stay Ready is a community tool, not a government website.
        </p>
        <p className="text-sm">
          We are not affiliated with ICE, the Department of Homeland Security, or any government agency.
        </p>
      </section>

      <section>
        <h2>Sources</h2>
        <p className="text-sm mb-2">
          The information here comes from trusted legal aid organizations:
        </p>
        <ul className="list-none space-y-1 text-sm">
          <li>— Immigrant Legal Resource Center (ILRC)</li>
          <li>— Immigrant Defense Project (IDP)</li>
          <li>— American Civil Liberties Union (ACLU)</li>
          <li>— National Immigration Law Center (NILC)</li>
        </ul>
      </section>

      <section>
        <p className="text-sm">
          This is not legal advice. For advice about your situation, talk to an immigration attorney.
        </p>
      </section>

      <section>
        <h2>Questions or Feedback?</h2>
        <a 
          href="mailto:stayready@gmail.com" 
          className="text-sm underline hover:text-muted-foreground transition-colors"
        >
          stayready@gmail.com
        </a>
      </section>
    </InfoPageLayout>
  );
}
