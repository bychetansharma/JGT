import { ArrowRight, Download } from 'lucide-react';
import { Reveal } from './Reveal';

export function CTABanner() {
  return (
    <section className="bg-navy-900 py-16 lg:py-20">
      <div className="container-x">
        <Reveal>
          <div className="flex flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-left">
            <div className="max-w-2xl">
              <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl">
                Planning transportation for an upcoming project?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/70">
                Share your requirements — we will respond with a coordinated transport plan and
                partner availability for your project location and timeline.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a href="#contact" className="btn-gold group whitespace-nowrap">
                Request a Quote
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="/Jhojhu_Golden_Transport_Capability_Profile.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-sm border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-white/50 hover:bg-white/5"
              >
                <Download className="h-4 w-4" />
                Company Profile
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
