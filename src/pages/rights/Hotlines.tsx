import { InfoPageLayout } from '@/components/InfoPageLayout';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Hotlines() {
  const { t } = useLanguage();

  const hotlines = [
    {
      name: 'United We Dream',
      phone: '1-844-363-1423',
      description: '24/7 hotline for immigrants and allies.',
    },
    {
      name: 'ACLU',
      phone: '212-549-2500',
      description: 'American Civil Liberties Union.',
    },
    {
      name: 'National Immigration Law Center',
      phone: '213-639-3900',
      description: 'Advocates for low-income immigrants.',
    },
    {
      name: 'RAICES Texas',
      phone: '210-787-3365',
      description: 'Free and low-cost legal services.',
    },
    {
      name: 'Immigrant Legal Resource Center',
      phone: '415-255-9499',
      description: 'Resources for immigrant communities.',
    },
  ];

  return (
    <InfoPageLayout title={t('hotlinesResources')}>
      <div className="p-4 bg-accent/30 rounded-2xl mb-6">
        <p className="text-sm font-medium text-headline">
          Save these numbers. They can help in an emergency.
        </p>
      </div>

      <section>
        <h2>Emergency Hotlines</h2>
        <div className="space-y-3 mt-4">
          {hotlines.map((hotline, index) => (
            <div 
              key={index}
              className="p-4 bg-card rounded-2xl shadow-card"
            >
              <h3 className="font-medium text-headline mb-1">{hotline.name}</h3>
              <a 
                href={`tel:${hotline.phone.replace(/-/g, '')}`}
                className="text-primary font-medium text-sm hover:opacity-80 transition-opacity"
              >
                {hotline.phone}
              </a>
              <p className="text-xs text-muted-foreground mt-1">{hotline.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2>Online Resources</h2>
        <ul className="list-none space-y-2 mt-4">
          <li className="text-sm">
            <a 
              href="https://www.unitedwedream.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:opacity-80 transition-opacity"
            >
              unitedwedream.org
            </a>
            <span className="text-muted-foreground"> — United We Dream</span>
          </li>
          <li className="text-sm">
            <a 
              href="https://www.aclu.org/know-your-rights/immigrants-rights" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:opacity-80 transition-opacity"
            >
              aclu.org/know-your-rights
            </a>
            <span className="text-muted-foreground"> — ACLU Rights Guide</span>
          </li>
          <li className="text-sm">
            <a 
              href="https://www.nilc.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:opacity-80 transition-opacity"
            >
              nilc.org
            </a>
            <span className="text-muted-foreground"> — National Immigration Law Center</span>
          </li>
          <li className="text-sm">
            <a 
              href="https://www.ilrc.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:opacity-80 transition-opacity"
            >
              ilrc.org
            </a>
            <span className="text-muted-foreground"> — Immigrant Legal Resource Center</span>
          </li>
        </ul>
      </section>

      <section className="mt-8">
        <h2>What to Do Right Now</h2>
        <ul className="list-none space-y-2 my-4">
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1.5 h-1.5 mt-2 rounded-full bg-primary flex-shrink-0"></span>
            Save these numbers in your phone
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1.5 h-1.5 mt-2 rounded-full bg-primary flex-shrink-0"></span>
            Share this page with family and friends
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1.5 h-1.5 mt-2 rounded-full bg-primary flex-shrink-0"></span>
            Create your rights card and save it to your phone
          </li>
          <li className="flex items-start gap-3 text-sm">
            <span className="w-1.5 h-1.5 mt-2 rounded-full bg-primary flex-shrink-0"></span>
            Make a family safety plan
          </li>
        </ul>
      </section>

      <div className="p-4 bg-accent/20 rounded-2xl mt-8">
        <p className="text-sm font-medium text-center text-headline">
          You are not alone. Help is available.
        </p>
      </div>
    </InfoPageLayout>
  );
}
