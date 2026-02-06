import { InfoPageLayout } from '@/components/InfoPageLayout';

export default function UniversalRights() {
  return (
    <InfoPageLayout title="Your Universal Rights">
      <div className="p-3 bg-accent border-l-4 border-foreground mb-6">
        <p className="text-sm font-semibold text-foreground">
          Everyone in the United States has constitutional rights—regardless of immigration status.
        </p>
      </div>

      <section>
        <h2>The Right to Remain Silent</h2>
        <p>
          You do not have to answer questions about where you were born, whether you are a U.S. citizen, or how you entered the country.
        </p>
        <div className="p-3 bg-accent border-l-4 border-foreground mb-4">
          <p className="text-sm font-semibold text-foreground mb-1">What to say:</p>
          <p className="text-sm text-muted-foreground italic">"I am exercising my right to remain silent."</p>
        </div>
      </section>

      <section>
        <h2>The Right to Refuse Entry Without a Warrant</h2>
        <p>
          You do not have to open your door without a warrant signed by a judge. ICE administrative warrants do not give officers the right to enter your home.
        </p>
        <div className="p-3 bg-accent border-l-4 border-foreground mb-4">
          <p className="text-sm font-semibold text-foreground mb-1">What to say:</p>
          <p className="text-sm text-muted-foreground italic">"I do not consent to your entry. Please slide the warrant under the door."</p>
        </div>
      </section>

      <section>
        <h2>The Right to Refuse a Search</h2>
        <p>
          You can refuse to consent to a search of yourself, your belongings, your car, or your home. If officers have a valid warrant, they may search anyway—but you should clearly state that you do not consent.
        </p>
        <div className="p-3 bg-accent border-l-4 border-foreground mb-4">
          <p className="text-sm font-semibold text-foreground mb-1">What to say:</p>
          <p className="text-sm text-muted-foreground italic">"I do not consent to a search."</p>
        </div>
      </section>

      <section>
        <h2>The Right to a Lawyer</h2>
        <p>
          If you are detained or arrested, you have the right to speak to a lawyer. You have the right to make a phone call. Immigration officers cannot listen to calls with your lawyer.
        </p>
        <div className="p-3 bg-accent border-l-4 border-foreground mb-4">
          <p className="text-sm font-semibold text-foreground mb-1">What to say:</p>
          <p className="text-sm text-muted-foreground italic">"I want to speak to a lawyer before answering any questions."</p>
        </div>
      </section>

      <section>
        <h2>Do Not Sign Anything You Don't Understand</h2>
        <p>
          Signing certain documents (like a voluntary departure form) can waive your rights. Do not sign anything unless your lawyer tells you to.
        </p>
        <div className="p-3 bg-accent border-l-4 border-foreground mb-4">
          <p className="text-sm font-semibold text-foreground mb-1">What to say:</p>
          <p className="text-sm text-muted-foreground italic">"I do not wish to sign anything without speaking to a lawyer."</p>
        </div>
      </section>

      <section>
        <h2>Do Not Lie or Present False Documents</h2>
        <p>
          Lying to an officer or providing false documents is a crime and can hurt your case. If you don't want to answer, exercise your right to remain silent.
        </p>
      </section>

      <section>
        <h2>Stay Calm. Do Not Run.</h2>
        <p>
          Running or resisting can result in arrest or injury. Stay calm and assert your rights clearly.
        </p>
      </section>

      <div className="p-3 bg-accent border-l-4 border-foreground mt-8">
        <p className="text-sm font-semibold text-center text-foreground">
          These rights belong to everyone. Use them calmly and clearly.
        </p>
      </div>
    </InfoPageLayout>
  );
}
