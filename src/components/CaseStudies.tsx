import { MapPin, ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';

const PROJECTS = [
  {
    location: 'Aizawl, Mizoram',
    tag: 'Power Transmission',
    title: 'Remote Transmission Project in Mizoram',
    image:
      'https://images.pexels.com/photos/18535002/pexels-photo-18535002.jpeg?auto=compress&cs=tinysrgb&w=900&h=700&fit=crop',
    alt: 'Power transmission towers in a forested, mountainous region',
    challenge:
      'A transmission line project in Aizawl required transporting tower sections and construction materials to sites accessible only by narrow hill roads with sharp gradients and limited clearance.',
    approach:
      'We coordinated with transport partners experienced in hill terrain, selected vehicles suited to the route constraints, and sequenced deliveries to match the pace of site readiness — avoiding material bunching at inaccessible points.',
    outcome:
      'Tower sections and materials reached site locations in coordinated batches, aligned with the construction sequence. The transport plan absorbed route constraints without delaying the erection schedule.',
  },
  {
    location: 'Amarchinta, Telangana',
    tag: 'Heavy Haul',
    title: 'Large Trailer Mobilisation in Telangana',
    image:
      'https://images.pexels.com/photos/5961982/pexels-photo-5961982.jpeg?auto=compress&cs=tinysrgb&w=900&h=700&fit=crop',
    alt: 'Cargo truck transporting heavy machinery on a road',
    challenge:
      'A project in Amarchinta required mobilising a large number of trailers within a short window to support a time-bound heavy equipment movement.',
    approach:
      'We activated multiple partners across the network simultaneously, structured mobilisation in phased lots, and maintained a single coordination channel so the site team had real-time visibility of arrivals.',
    outcome:
      'Trailers were mobilised across phased lots within the required window. Centralised coordination kept the site team informed at every stage and prevented loading bottlenecks.',
  },
];

export function CaseStudies() {
  return (
    <section id="case-studies" className="bg-grey-50 py-20 lg:py-28">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <p className="section-label">Featured Project Stories</p>
          <h2 className="heading-2 mt-4">How transport planning responds to real conditions</h2>
          <p className="body-lg mt-6">
            Two representative projects — one in remote hill terrain, one requiring rapid fleet
            mobilisation — showing how coordination and planning address the realities of project
            logistics.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <Reveal as="article" key={project.title} delay={i * 120}>
              <article className="flex h-full flex-col overflow-hidden rounded-sm border border-navy-100 bg-white">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.alt}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-navy-950/25" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="inline-flex items-center gap-1.5 rounded-sm bg-gold-500 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-navy-900">
                      {project.tag}
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-8">
                  <div className="flex items-center gap-2 text-sm text-grey-500">
                    <MapPin className="h-4 w-4 text-gold-600" />
                    {project.location}
                  </div>
                  <h3 className="heading-3 mt-3">{project.title}</h3>

                  <dl className="mt-6 space-y-5">
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-[0.15em] text-gold-700">
                        Challenge
                      </dt>
                      <dd className="mt-2 text-sm leading-relaxed text-grey-600">
                        {project.challenge}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-[0.15em] text-gold-700">
                        Approach
                      </dt>
                      <dd className="mt-2 text-sm leading-relaxed text-grey-600">
                        {project.approach}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-[0.15em] text-gold-700">
                        Outcome
                      </dt>
                      <dd className="mt-2 text-sm leading-relaxed text-grey-600">
                        {project.outcome}
                      </dd>
                    </div>
                  </dl>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-navy-800 transition-colors hover:text-gold-700"
          >
            Discuss your project requirements
            <ArrowRight className="h-4 w-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
