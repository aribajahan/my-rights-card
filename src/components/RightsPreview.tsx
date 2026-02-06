export function RightsPreview() {
  const rights = [
    {
      title: 'Right to remain silent',
      description: 'You do not have to answer questions about where you were born or your immigration status.',
      quote: '"I am exercising my right to remain silent."',
    },
    {
      title: 'Right to refuse entry without warrant',
      description: 'You do not have to open your door without a warrant signed by a judge.',
      quote: '"I do not consent to your entry. Please slip the warrant under the door."',
    },
    {
      title: 'Right to refuse search',
      description: 'You can refuse to consent to a search of yourself, your belongings, your car, or your home.',
      quote: '"I do not consent to a search."',
    },
    {
      title: 'Right to a lawyer',
      description: 'If you are detained or arrested, you have the right to speak to a lawyer.',
      quote: '"I want to speak to a lawyer before answering any questions."',
    },
    {
      title: 'Right to refuse to sign',
      description: 'Do not sign anything you don\'t understand. Signing certain documents can waive your rights.',
      quote: '"I do not wish to sign anything without speaking to a lawyer."',
    },
  ];

  return (
    <div className="w-full max-w-sm mx-auto">
      <h2 className="text-2xl tracking-wide mb-2 text-center text-headline">
        Your Rights
      </h2>
      <p className="text-muted-foreground text-center text-sm mb-6">
        These rights belong to everyone in the United States.
      </p>

      <div className="space-y-4">
        {rights.map((right, index) => (
          <div
            key={index}
            className="p-3 bg-card shadow-card animate-slide-up"
            style={{ animationDelay: `${index * 75}ms` }}
          >
            <h3 className="text-lg tracking-wide text-headline mb-2">
              {right.title}
            </h3>
            <p className="text-sm text-muted-foreground mb-3">
              {right.description}
            </p>
            <p className="text-sm italic text-foreground bg-accent border-l-4 border-foreground p-3">
              {right.quote}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
