import { InfoPageLayout } from '@/components/InfoPageLayout';

export default function RapidResponse() {
  return (
    <InfoPageLayout title="Rapid Response Networks">
      <p className="text-lg text-muted-foreground mb-8">
        Groups of volunteers who respond when ICE is reported in a community.
      </p>

      <section>
        <h2>What They Are</h2>
        <p className="text-sm">
          Rapid response networks are organized groups of community members who are trained 
          to respond quickly when ICE activity is reported. They provide witness support, 
          documentation, and connect families with resources.
        </p>
      </section>

      <section>
        <h2>What They Do</h2>
        <ul className="list-none space-y-2 my-4">
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Document encounters
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Provide witness support
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Connect families with resources
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Alert the community to ICE activity
          </li>
        </ul>
      </section>

      <section>
        <h2>How to Join</h2>
        <ul className="list-none space-y-2 my-4">
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Search for "[your city] rapid response network"
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Contact local immigrant rights organizations
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            United We Dream has resources for starting a network
          </li>
        </ul>
      </section>

      <section>
        <h2>Get Connected</h2>
        <div className="border-b border-border/50 pb-3 my-4">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">United We Dream</p>
          <a href="tel:1-844-363-1423" className="text-hotline font-bold text-lg">
            1-844-363-1423
          </a>
          <span className="text-xs text-muted-foreground ml-2">24/7</span>
        </div>
      </section>
    </InfoPageLayout>
  );
}
