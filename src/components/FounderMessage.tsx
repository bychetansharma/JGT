import { Quote } from 'lucide-react';
import { Reveal } from './Reveal';

export function FounderMessage() {
  return (
    <section id="about" className="bg-navy-950 py-20 lg:py-28">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20">
          <Reveal>
            <div className="relative mx-auto max-w-sm overflow-hidden rounded-sm">
              <img
                src="https://images.pexels.com/photos/31851560/pexels-photo-31851560.jpeg?auto=compress&cs=tinysrgb&w=700&h=850&fit=crop"
                alt="Founder of Jhojhu Golden Transport"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="absolute inset-0 bg-navy-950/20" />
              <div className="absolute bottom-0 left-0 right-0 bg-navy-950/80 p-5 backdrop-blur-sm">
                <p className="font-heading text-base font-bold text-white">Amresh Kumar Sharma</p>
                <p className="text-sm text-gold-400">Founder &amp; Proprietor</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div>
              <Quote className="h-10 w-10 text-gold-500" />
              <blockquote className="mt-6 font-heading text-2xl font-bold leading-snug text-white text-balance sm:text-3xl">
                &ldquo;Transportation for infrastructure projects is not about moving loads — it is
                about keeping commitments to teams working against deadlines in difficult
                locations.&rdquo;
              </blockquote>
              <div className="mt-8 space-y-4 text-white/70">
                <p className="leading-relaxed">
                  When I started Jhojhu Golden Transport in 2018, the intent was straightforward:
                  build a transportation practice that procurement and project teams could rely on
                  without second-guessing. We chose an asset-light model deliberately — it lets us
                  focus on planning and coordination rather than fleet management, and it gives us
                  the flexibility to serve diverse project requirements.
                </p>
                <p className="leading-relaxed">
                  Our strength lies in the relationships we have built with transport partners across
                  the country, and in the discipline we bring to every coordination. Whether a site
                  is in a metropolitan industrial area or a remote location in Mizoram, the
                  responsibility we carry is the same: deliver as planned, communicate honestly, and
                  make the transport side of the project one less thing for the team to worry about.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
