import { Zap, Sun, Cog, Building2, Factory } from 'lucide-react';
import { Reveal } from './Reveal';

const INDUSTRIES = [
  {
    icon: Zap,
    title: 'Power Transmission',
    description:
      'Coordinating transport of towers, conductors, transformers, and substation equipment to transmission project sites across varied terrain.',
    image:
      'https://images.pexels.com/photos/18535002/pexels-photo-18535002.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    alt: 'High-voltage power transmission towers',
  },
  {
    icon: Sun,
    title: 'Renewable Energy',
    description:
      'Mobilising transport for wind turbine components, solar module structures, and balance-of-plant materials to wind and solar project locations.',
    image:
      'https://images.pexels.com/photos/5569023/pexels-photo-5569023.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    alt: 'Wind turbines in a green landscape',
  },
  {
    icon: Cog,
    title: 'Heavy Engineering',
    description:
      'Transporting oversized fabricated structures, pressure vessels, boilers, and engineered equipment from manufacturing plants to project sites.',
    image:
      'https://images.pexels.com/photos/10546018/pexels-photo-10546018.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    alt: 'Industrial production plant with steel structures',
  },
  {
    icon: Building2,
    title: 'Infrastructure',
    description:
      'Supporting road, bridge, metro, and industrial corridor projects with coordinated transport of construction materials and heavy machinery.',
    image:
      'https://images.pexels.com/photos/3998410/pexels-photo-3998410.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    alt: 'Heavy construction equipment at an infrastructure site',
  },
  {
    icon: Factory,
    title: 'Industrial Manufacturing',
    description:
      'Managing inbound and outbound logistics for manufacturing facilities, including line shifts, plant relocations, and equipment deliveries.',
    image:
      'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    alt: 'Industrial warehouse and logistics facility',
  },
];

export function Industries() {
  return (
    <section id="industries" className="bg-grey-50 py-20 lg:py-28">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <p className="section-label">Industries We Support</p>
          <h2 className="heading-2 mt-4">Sector-specific transportation, planned by experience</h2>
          <p className="body-lg mt-6">
            Each industry presents distinct transport requirements — from dimensional constraints
            to site access challenges. We plan around those realities, not around generic
            templates.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((industry, i) => {
            const Icon = industry.icon;
            return (
              <Reveal
                as="article"
                key={industry.title}
                delay={i * 80}
                className={
                  i === 4 ? 'sm:col-span-2 lg:col-span-1' : ''
                }
              >
                <article className="group flex h-full flex-col overflow-hidden rounded-sm border border-navy-100 bg-white transition-all duration-300 hover:border-navy-200 hover:shadow-xl hover:shadow-navy-900/5">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={industry.image}
                      alt={industry.alt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-navy-950/20 transition-opacity duration-300 group-hover:bg-navy-950/10" />
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <span className="flex h-11 w-11 items-center justify-center rounded-sm bg-navy-50 text-navy-800 transition-colors duration-300 group-hover:bg-navy-800 group-hover:text-gold-500">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="heading-3 mt-5">{industry.title}</h3>
                    <p className="body-base mt-3 flex-1">{industry.description}</p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
