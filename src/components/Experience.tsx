import { Reveal } from './Reveal';

const LOGOS = [
  'PowerGrid',
  'NTPC',
  'Adani Green',
  'Tata Power',
  'L&T Construction',
  'Siemens Energy',
  'Hitachi Energy',
  'GE Grid',
  'Sterling & Wilson',
  'KEC International',
  'Kalpataru',
  'Renew Power',
];

export function Experience() {
  return (
    <section id="experience" className="border-b border-navy-100 bg-white py-20 lg:py-28">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <p className="section-label">Representative Experience</p>
          <h2 className="heading-2 mt-4">Sectors and projects we have supported</h2>
          <p className="body-lg mt-6">
            The names below represent the sectors and types of projects where our transport
            coordination has been engaged. They are illustrative of the work we do — not a claim of
            formal partnerships or endorsements.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-navy-100 bg-navy-100 sm:grid-cols-3 lg:grid-cols-4">
          {LOGOS.map((name, i) => (
            <Reveal key={name} delay={i * 50} className="bg-white">
              <div className="flex h-28 items-center justify-center px-6">
                <span className="font-heading text-base font-bold uppercase tracking-wider text-grey-400 transition-colors duration-300 hover:text-navy-800">
                  {name}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 flex items-start gap-3 rounded-sm bg-grey-50 p-6">
          <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-gold-500" />
          <p className="text-sm leading-relaxed text-grey-500">
            These references reflect the project categories and industrial sectors we routinely
            support. Individual engagement details are shared with prospective clients during formal
            discussions.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
