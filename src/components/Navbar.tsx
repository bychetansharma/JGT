import { useEffect, useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Industries', href: '#industries' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Experience', href: '#experience' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Reach', href: '#reach' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 shadow-sm shadow-navy-900/5 backdrop-blur-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-x flex h-20 items-center justify-between">
        <a
          href="#home"
          onClick={close}
          className="flex items-center gap-3"
          aria-label="Jhojhu Golden Transport — home"
        >
          <span
            className={`flex h-10 w-10 items-center justify-center rounded-sm font-heading text-sm font-extrabold transition-colors duration-300 ${
              scrolled ? 'bg-navy-800 text-gold-500' : 'bg-white/15 text-gold-400 backdrop-blur-sm'
            }`}
          >
            JG
          </span>
          <span className="leading-tight">
            <span
              className={`block font-heading text-[15px] font-bold tracking-tight transition-colors duration-300 ${
                scrolled ? 'text-navy-900' : 'text-white'
              }`}
            >
              Jhojhu Golden
            </span>
            <span
              className={`block text-[11px] font-medium uppercase tracking-[0.18em] transition-colors duration-300 ${
                scrolled ? 'text-grey-500' : 'text-white/70'
              }`}
            >
              Transport
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`rounded-sm px-3.5 py-2 text-[13px] font-medium transition-colors duration-200 ${
                  scrolled
                    ? 'text-grey-600 hover:bg-navy-50 hover:text-navy-900'
                    : 'text-white/85 hover:bg-white/10 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:+919891963109"
            className={`flex items-center gap-2 text-[13px] font-medium transition-colors duration-300 ${
              scrolled ? 'text-navy-800' : 'text-white/90'
            }`}
          >
            <Phone className="h-4 w-4" />
            +91 9891963109
          </a>
          <a href="#contact" className="btn-primary">
            Request a Quote
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className={`flex h-10 w-10 items-center justify-center rounded-sm transition-colors lg:hidden ${
            scrolled ? 'text-navy-900 hover:bg-navy-50' : 'text-white hover:bg-white/10'
          }`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden ${
          open ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        <div
          className={`absolute inset-x-0 top-20 origin-top bg-white shadow-xl transition-all duration-300 ${
            open ? 'scale-y-100 opacity-100' : 'scale-y-95 opacity-0'
          }`}
        >
          <ul className="container-x flex flex-col gap-1 py-6">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={close}
                  className="block rounded-sm px-4 py-3 text-sm font-medium text-grey-700 transition-colors hover:bg-navy-50 hover:text-navy-900"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-3 flex flex-col gap-3 px-1">
              <a
                href="tel:+919891963109"
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-navy-800"
              >
                <Phone className="h-4 w-4" />
                +91 9891963109
              </a>
              <a href="#contact" onClick={close} className="btn-primary w-full">
                Request a Quote
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
