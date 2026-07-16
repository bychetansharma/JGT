import { Truck, PackageCheck, Anchor, Network } from 'lucide-react';
import { Reveal } from './Reveal';

const CAPABILITIES = [
  {
    icon: Truck,
    title: 'General Freight',
    description:
      'Coordinated movement of standard cargo across India, Nepal, and Bhutan through our partner network — with route planning, vehicle selection, and tracking handled at our end.',
    points: ['Full-truck and part-load coordination', 'Cross-state route planning', 'Partner vetting and compliance'],
  },
  {
    icon: PackageCheck,
    title: 'Project Transportation',
    description:
      'End-to-end transport planning for infrastructure and industrial projects — from mobilisation scheduling to site delivery, aligned with project timelines and site conditions.',
    points: ['Project-specific transport planning', 'Time-bound delivery coordination', 'Multi-consignment scheduling'],
  },
  {
    icon: Anchor,
    title: 'Heavy Haul',
    description:
      'Transport of oversized and heavy equipment — including transformers, wind turbine sections, fabricated structures, and machinery requiring specialised trailers and permits.',
    points: ['Oversize and overweight cargo', 'Specialised trailer mobilisation', 'Route and permit coordination'],
  },
  {
    icon: Network,
    title: 'Operational Coordination',
    description:
      'A single point of communication across transport partners, site teams, and project managers — so procurement teams are not chasing multiple vendors during execution.',
    points: ['Single-window project communication', 'Partner and site coordination', 'Status reporting and updates'],
  },
];

export function Capabilities() {
  return (
    <section id="capabilities" className="bg-white py-20 lg:py-28">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <p className="section-label">Transportation Capabilities</p>
          <h2 className="heading-2 mt-4">
            Four operational categories, one coordination point
          </h2>
          <p className="body-lg mt-6">
            Our work spans the full range of project transport needs — from standard freight to
            heavy haul. What stays constant is the planning discipline and the single point of
            communication behind every movement.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-navy-100 bg-navy-100 md:grid-cols-2">
          {CAPABILITIES.map((cap, i) => {
            const Icon = cap.icon;
            return (
              <Reveal key={cap.title} delay={i * 80} className="bg-white">
                <div className="flex h-full flex-col p-8 lg:p-10">
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-navy-800 text-gold-500">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="heading-3">{cap.title}</h3>
                  </div>
                  <p className="body-base mt-5">{cap.description}</p>
                  <ul className="mt-6 space-y-3 border-t border-navy-100 pt-6">
                    {cap.points.map((point) => (
                      <li key={point} className="flex items-start gap-3 text-sm text-grey-600">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
