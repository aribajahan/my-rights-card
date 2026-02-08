import { InfoPageLayout } from '@/components/InfoPageLayout';
import { Link } from 'react-router-dom';

export default function PrepareFamily() {
  return (
    <InfoPageLayout title="Prepare Your Family">
      <p className="text-lg text-muted-foreground mb-8">
        Help your family members be prepared with cards, plans, and knowledge.
      </p>

      <section>
        <h2>Make Cards for Others</h2>
        <ul className="list-none space-y-2 my-4">
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            <Link to="/prepare" className="underline hover:text-muted-foreground transition-colors">
              Create cards
            </Link> for parents, grandparents, or elders
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Help family members set up lock screens
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Make sure everyone has emergency contacts memorized
          </li>
        </ul>
      </section>

      <section>
        <h2>Create a Family Plan</h2>
        <ul className="list-none space-y-2 my-4">
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Who will care for children?
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Where are important documents stored?
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Who has power of attorney?
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Who is the emergency contact?
          </li>
        </ul>
      </section>

      <section>
        <h2>Teach Children</h2>
        <ul className="list-none space-y-2 my-4">
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Do not open the door for strangers
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            Memorize one trusted adult's phone number
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 mt-2 bg-foreground flex-shrink-0 rounded-full"></span>
            "You have done nothing wrong"
          </li>
        </ul>
        <p className="text-sm text-muted-foreground mt-4">
          For more detailed guidance, see <Link to="/tips/kids" className="underline hover:text-foreground transition-colors">What to Tell Your Kids</Link>.
        </p>
      </section>
    </InfoPageLayout>
  );
}
