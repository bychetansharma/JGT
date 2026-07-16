import { Reveal } from './Reveal';

const STATS = [
  { value: '2018', label: 'Established', sub: 'Delhi, India' },
  { value: '200+', label: 'Transport Partners', sub: 'Nationwide network' },
  { value: '100+', label: 'Branches', sub: 'Across India' },
  { value: '5', label: 'Industries', sub: 'Infrastructure focused' },
];

export function CompanySnapshot() {
  return (
    <section className="border-b border-navy-100 bg-white py-20 lg:py-28">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-center lg:gap-20">
          <Reveal>
            <p className="section-label">Company Snapshot</p>
            <h2 className="heading-2 mt-4">
              An asset-light model built on trusted relationships
            </h2>
            <p className="body-lg mt-6">
              Rather than operating an owned fleet, we coordinate transportation through a vetted
              network of 200+ transport partners. This structure gives us the flexibility to
              mobilise the right vehicles for each project — without the constraints of fixed
              assets.
            </p>
            <p className="body-base mt-4">
              Since 2018, we have supported power transmission, renewable energy, and heavy
              engineering projects across challenging geographies, including remote project
              locations in Mizoram and Telangana.
            </p>
          </Reveal>

          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-navy-100 bg-navy-100">
            {STATS.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 80} className="bg-white">
                <div className="flex h-full flex-col justify-center p-8 lg:p-10">
                  <p className="font-heading text-4xl font-extrabold text-navy-900 lg:text-5xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 font-heading text-sm font-bold uppercase tracking-wider text-gold-700">
                    {stat.label}
                  </p>
                  <p className="mt-1 text-sm text-grey-500">{stat.sub}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
