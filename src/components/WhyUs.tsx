import {
  Handshake,
  Gauge,
  ClipboardList,
  MapPin,
  PhoneCall,
  ShieldCheck,
  MessageSquareText,
  Trophy,
} from 'lucide-react';
import { Reveal } from './Reveal';

const STRENGTHS = [
  {
    icon: Handshake,
    title: 'Trusted Transporter Relationships',
    text: 'Our 200+ partner network is built on sustained relationships — not spot bookings. That reliability flows through to every project we coordinate.',
  },
  {
    icon: Gauge,
    title: 'Quick Vehicle Mobilisation',
    text: 'Because we are not limited to an owned fleet, we can match the right vehicle to each requirement and mobilise quickly across geographies.',
  },
  {
    icon: ClipboardList,
    title: 'Project-Focused Coordination',
    text: 'Transport is planned around project timelines and site constraints — not treated as a series of disconnected bookings.',
  },
  {
    icon: MapPin,
    title: 'Experience in Remote Locations',
    text: 'From Aizawl to Amarchinta, we have coordinated transport to project sites with limited access and challenging terrain.',
  },
  {
    icon: PhoneCall,
    title: 'Single Point of Communication',
    text: 'Procurement and project teams work with one coordination contact — eliminating the overhead of managing multiple vendors.',
  },
  {
    icon: ShieldCheck,
    title: 'Reliable Execution',
    text: 'Vehicles, partners, and routes are selected with execution in mind. We plan for what can go wrong before it does.',
  },
  {
    icon: MessageSquareText,
    title: 'Transparent Communication',
    text: 'Status updates, constraints, and changes are communicated as they arise — not after they have become problems.',
  },
  {
    icon: Trophy,
    title: 'Infrastructure-Focused Practice',
    text: 'Our experience is concentrated in power, renewables, and heavy engineering — sectors where transport planning cannot be improvised.',
  },
];

export function WhyUs() {
  return (
    <section className="bg-navy-900 py-20 lg:py-28">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <p className="section-label text-gold-400">Why Organizations Work With Us</p>
          <h2 className="heading-2 mt-4 text-white">
            Factual strengths, not marketing claims
          </h2>
          <p className="body-lg mt-6 text-white/70">
            Procurement and project teams need a transport partner they can depend on. These are
            the practical reasons organisations have worked with us since 2018.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {STRENGTHS.map((strength, i) => {
            const Icon = strength.icon;
            return (
              <Reveal key={strength.title} delay={i * 70}>
                <div className="flex flex-col">
                  <span className="flex h-12 w-12 items-center justify-center rounded-sm bg-navy-800 text-gold-500 ring-1 ring-inset ring-gold-500/20">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-heading text-base font-bold text-white">
                    {strength.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">{strength.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
