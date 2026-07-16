import { Phone, Mail, MapPin } from 'lucide-react';

const FOOTER_NAV = [
  { label: 'Home', href: '#home' },
  { label: 'Industries', href: '#industries' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Experience', href: '#experience' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Operational Reach', href: '#reach' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const SERVICES = [
  'Project Transportation',
  'Heavy Equipment Transportation',
  'Trailer Mobilization',
  'Multi-State Coordination',
  'Industrial Logistics Support',
];

export function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      <div className="container-x py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-sm bg-navy-800 font-heading text-sm font-extrabold text-gold-500">
                JG
              </span>
              <span className="leading-tight">
                <span className="block font-heading text-[15px] font-bold">Jhojhu Golden</span>
                <span className="block text-[11px] font-medium uppercase tracking-[0.18em] text-white/50">
                  Transport
                </span>
              </span>
            </div>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/55">
              Asset-light project transportation specialists supporting infrastructure and
              industrial projects across India, Nepal, and Bhutan.
            </p>
            <p className="mt-4 text-xs text-white/40">Established 2018 · New Delhi, India</p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-gold-500">
              Navigation
            </h4>
            <ul className="mt-5 space-y-3">
              {FOOTER_NAV.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-gold-500">
              Services
            </h4>
            <ul className="mt-5 space-y-3">
              {SERVICES.map((service) => (
                <li key={service} className="text-sm text-white/60">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-gold-500">
              Get in Touch
            </h4>
            <ul className="mt-5 space-y-4">
              <li className="flex items-start gap-3 text-sm text-white/60">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
                JGT House 887, Pocket-6, Sector-2, Rohini, New Delhi, India- 110085
              </li>
              <li>
                <a
                  href="tel:+919891963109"
                  className="flex items-center gap-3 text-sm text-white/60 transition-colors hover:text-white"
                >
                  <Phone className="h-4 w-4 shrink-0 text-gold-500" />
                  +91 9891963109
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@jhojhugoldentransport.com"
                  className="flex items-center gap-3 text-sm text-white/60 transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4 shrink-0 text-gold-500" />
                  info@jhojhugoldentransport.com
                </a>
              </li>
            </ul>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center justify-center rounded-sm bg-gold-500 px-5 py-2.5 text-xs font-semibold text-navy-900 transition-colors hover:bg-gold-400"
            >
              Request a Quote
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Jhojhu Golden Transport. All rights reserved.
          </p>
          <p className="text-xs text-white/40">
            Sole Proprietorship · Project Transportation · India · Nepal · Bhutan
          </p>
        </div>
      </div>
    </footer>
  );
}
