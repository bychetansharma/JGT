import { ArrowRight, Download } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={src:assets:truck}
          alt="Heavy transport truck carrying cargo on a highway"
          className="h-full w-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-[100svh] items-end pb-20 pt-32">
        <div className="container-x w-full">
          <div className="max-w-3xl">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-gold-400 animate-fade-up">
              Project Transportation Specialists · Est. 2018
            </p>
            <h1
              className="font-heading text-4xl font-extrabold leading-[1.08] text-white text-balance sm:text-5xl lg:text-[3.75rem] animate-fade-up"
              style={{ animationDelay: '0.1s', opacity: 0 }}
            >
              Transportation Solutions for Infrastructure &amp; Industrial Projects
            </h1>
            <p
              className="mt-7 max-w-2xl text-lg leading-relaxed text-white/80 animate-fade-up"
              style={{ animationDelay: '0.2s', opacity: 0 }}
            >
              Supporting critical infrastructure projects through dependable transportation
              planning, trusted transport partnerships, and responsive coordination across India,
              Nepal, and Bhutan.
            </p>
            <div
              className="mt-10 flex flex-col gap-4 sm:flex-row animate-fade-up"
              style={{ animationDelay: '0.3s', opacity: 0 }}
            >
              <a href="#contact" className="btn-gold group">
                Request a Quote
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-sm border border-white/30 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/60 hover:bg-white/10"
              >
                <Download className="h-4 w-4" />
                Download Company Profile
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom accent bar */}
      <div className="absolute bottom-0 left-0 right-0 z-10 hidden border-t border-white/15 bg-navy-950/40 backdrop-blur-sm lg:block">
        <div className="container-x flex items-center divide-x divide-white/15">
          {[
            'India',
            'Nepal',
            'Bhutan',
            '200+ Transport Partners',
            'Asset-Light Network',
          ].map((item) => (
            <span
              key={item}
              className="flex-1 px-2 py-4 text-center text-xs font-medium uppercase tracking-[0.15em] text-white/70"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
