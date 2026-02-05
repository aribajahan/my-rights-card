import { InfoPageLayout } from '@/components/InfoPageLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Phone } from 'lucide-react';

export default function Hotlines() {
  const { t } = useLanguage();

  const hotlines = [
    {
      name: 'United We Dream',
      phone: '1-844-363-1423',
      description: '24/7 hotline for immigrants and allies. Report raids, get support, and connect with local resources.',
    },
    {
      name: 'ACLU',
      phone: '212-549-2500',
      description: 'American Civil Liberties Union. Defends constitutional rights and civil liberties.',
    },
    {
      name: 'National Immigration Law Center',
      phone: '213-639-3900',
      description: 'Advocates for the rights of low-income immigrants.',
    },
    {
      name: 'RAICES Texas',
      phone: '210-787-3365',
      description: 'Provides free and low-cost legal services to immigrant families.',
    },
    {
      name: 'Immigrant Legal Resource Center',
      phone: '415-255-9499',
      description: 'Training and resources for immigrant communities and advocates.',
    },
  ];

  return (
    <InfoPageLayout title={t('hotlinesResources')}>
      <div className="p-4 bg-accent/30 border-l-4 border-accent rounded-sm mb-6">
        <p className="text-base font-medium text-foreground">
          Save these numbers. They can help in an emergency.
        </p>
      </div>

      <section>
        <h2 className="text-xl font-bold mb-4 font-display text-foreground">Emergency Hotlines</h2>
        <div className="space-y-3">
          {hotlines.map((hotline, index) => (
            <div 
              key={index}
              className="p-4 border-2 border-foreground/15 bg-card rounded-sm"
            >
              <h3 className="font-semibold text-lg mb-1 text-foreground">{hotline.name}</h3>
              <a 
                href={`tel:${hotline.phone.replace(/-/g, '')}`}
                className="flex items-center gap-2 text-secondary font-semibold mb-2 hover:underline"
              >
                <Phone size={18} />
                {hotline.phone}
              </a>
              <p className="text-muted-foreground text-sm">{hotline.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-bold mb-4 font-display text-foreground">Online Resources</h2>
        <ul className="list-none space-y-3">
          <li className="flex items-center gap-3 text-base">
            <span className="w-2 h-2 rounded-full bg-secondary flex-shrink-0"></span>
            <a 
              href="https://www.unitedwedream.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-secondary underline hover:no-underline"
            >
              unitedwedream.org
            </a>
            <span className="text-foreground">— United We Dream</span>
          </li>
          <li className="flex items-center gap-3 text-base">
            <span className="w-2 h-2 rounded-full bg-secondary flex-shrink-0"></span>
            <a 
              href="https://www.aclu.org/know-your-rights/immigrants-rights" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-secondary underline hover:no-underline"
            >
              aclu.org/know-your-rights
            </a>
            <span className="text-foreground">— ACLU Rights Guide</span>
          </li>
          <li className="flex items-center gap-3 text-base">
            <span className="w-2 h-2 rounded-full bg-secondary flex-shrink-0"></span>
            <a 
              href="https://www.nilc.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-secondary underline hover:no-underline"
            >
              nilc.org
            </a>
            <span className="text-foreground">— National Immigration Law Center</span>
          </li>
          <li className="flex items-center gap-3 text-base">
            <span className="w-2 h-2 rounded-full bg-secondary flex-shrink-0"></span>
            <a 
              href="https://www.ilrc.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-secondary underline hover:no-underline"
            >
              ilrc.org
            </a>
            <span className="text-foreground">— Immigrant Legal Resource Center</span>
          </li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-bold mb-4 font-display text-foreground">What to Do Right Now</h2>
        <ul className="list-none space-y-2 mb-4">
          <li className="flex items-start gap-3 text-base text-foreground">
            <span className="w-2 h-2 mt-2 rounded-full bg-secondary flex-shrink-0"></span>
            Save these numbers in your phone
          </li>
          <li className="flex items-start gap-3 text-base text-foreground">
            <span className="w-2 h-2 mt-2 rounded-full bg-secondary flex-shrink-0"></span>
            Share this page with family and friends
          </li>
          <li className="flex items-start gap-3 text-base text-foreground">
            <span className="w-2 h-2 mt-2 rounded-full bg-secondary flex-shrink-0"></span>
            Create your rights card and save it to your phone
          </li>
          <li className="flex items-start gap-3 text-base text-foreground">
            <span className="w-2 h-2 mt-2 rounded-full bg-secondary flex-shrink-0"></span>
            Make a family safety plan
          </li>
        </ul>
      </section>

      <div className="p-4 bg-accent/20 rounded-sm mt-8 border-l-4 border-accent">
        <p className="text-base font-medium text-center text-foreground">
          You are not alone. Help is available.
        </p>
      </div>
    </InfoPageLayout>
  );
}
