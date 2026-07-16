import { useState } from 'react';
import { MapPin, Truck, Route } from 'lucide-react';
import { Reveal } from './Reveal';

type Region = {
  id: string;
  name: string;
  cx: number;
  cy: number;
  r: number;
  desc: string;
};

const REGIONS: Region[] = [
  { id: 'north', name: 'Northern India', cx: 140, cy: 110, r: 14, desc: 'Delhi · Punjab · Haryana · UP — our base and primary coordination hub.' },
  { id: 'west', name: 'Western India', cx: 95, cy: 205, r: 14, desc: 'Gujarat · Maharashtra · Rajasthan — heavy engineering and port-linked cargo.' },
  { id: 'south', name: 'Southern India', cx: 155, cy: 320, r: 14, desc: 'Telangana · Andhra · Karnataka · Tamil Nadu — renewable and transmission projects.' },
  { id: 'east', name: 'Eastern India', cx: 235, cy: 200, r: 14, desc: 'West Bengal · Odisha · Jharkhand — steel, power, and industrial manufacturing.' },
  { id: 'northeast', name: 'North-East India', cx: 278, cy: 150, r: 12, desc: 'Mizoram · Assam — remote terrain transmission projects, including Aizawl.' },
  { id: 'central', name: 'Central India', cx: 180, cy: 210, r: 12, desc: 'Madhya Pradesh · Chhattisgarh — power and infrastructure corridors.' },
];

const COUNTRIES = [
  { name: 'India', note: 'Pan-India coordination' },
  { name: 'Nepal', note: 'Cross-border project transport' },
  { name: 'Bhutan', note: 'Cross-border project transport' },
];

const HIGHLIGHTS = [
  { icon: Truck, label: '200+ Trusted Transport Partners', value: 'Nationwide' },
  { icon: Route, label: 'Major Infrastructure Corridors', value: 'Pan-India' },
  { icon: MapPin, label: 'Operational Coverage', value: '3 Countries' },
];

export function OperationalReach() {
  const [active, setActive] = useState<string>('north');
  const activeRegion = REGIONS.find((r) => r.id === active)!;

  return (
    <section id="reach" className="bg-white py-20 lg:py-28">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <p className="section-label">Operational Reach</p>
          <h2 className="heading-2 mt-4">
            Pan-India capability, with cross-border coverage
          </h2>
          <p className="body-lg mt-6">
            Our partner network spans major industrial states across India, with extended coverage
            into Nepal and Bhutan. Select a region to see how coverage maps to project corridors.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-16">
          {/* Map */}
          <Reveal>
            <div className="rounded-sm border border-navy-100 bg-grey-50 p-6 lg:p-10">
              <svg
                viewBox="0 0 360 400"
                className="mx-auto h-auto w-full max-w-md"
                role="img"
                aria-label="Interactive map of operational coverage across India, Nepal, and Bhutan"
              >
                {/* Simplified landmass shape */}
                <path
                  d="M 70 80 Q 120 60 170 70 Q 230 65 280 90 Q 300 130 290 180 Q 295 230 270 280 Q 240 330 200 350 Q 160 365 130 345 Q 90 320 75 270 Q 60 210 65 150 Q 62 110 70 80 Z"
                  fill="#dce3ef"
                  stroke="#b9c7df"
                  strokeWidth="1.5"
                  className="transition-colors duration-500"
                />

                {/* Nepal strip */}
                <path
                  d="M 120 62 Q 170 50 230 60 L 225 72 Q 170 66 120 76 Z"
                  fill="#dce3ef"
                  stroke="#b9c7df"
                  strokeWidth="1.5"
                />
                {/* Bhutan strip */}
                <path
                  d="M 240 58 Q 265 52 285 60 L 282 70 Q 262 64 242 70 Z"
                  fill="#dce3ef"
                  stroke="#b9c7df"
                  strokeWidth="1.5"
                />

                <text x="170" y="56" textAnchor="middle" className="fill-grey-400 font-heading" fontSize="8" fontWeight="700">
                  NEPAL
                </text>
                <text x="262" y="54" textAnchor="middle" className="fill-grey-400 font-heading" fontSize="7" fontWeight="700">
                  BHUTAN
                </text>
                <text x="175" y="220" textAnchor="middle" className="fill-grey-300 font-heading" fontSize="11" fontWeight="800" letterSpacing="3">
                  INDIA
                </text>

                {/* Region markers */}
                {REGIONS.map((region) => (
                  <g
                    key={region.id}
                    className="cursor-pointer"
                    onClick={() => setActive(region.id)}
                    onMouseEnter={() => setActive(region.id)}
                    role="button"
                    aria-label={region.name}
                  >
                    {active === region.id && (
                      <circle
                        cx={region.cx}
                        cy={region.cy}
                        r={region.r + 6}
                        fill="#c8933820"
                        className="animate-fade-in"
                      />
                    )}
                    <circle
                      cx={region.cx}
                      cy={region.cy}
                      r={region.r}
                      fill={active === region.id ? '#0d1a33' : '#3d5d91'}
                      stroke="#c89338"
                      strokeWidth={active === region.id ? 2.5 : 1.5}
                      className="transition-all duration-300"
                    />
                    {active === region.id && (
                      <circle cx={region.cx} cy={region.cy} r={4} fill="#c89338" />
                    )}
                  </g>
                ))}
              </svg>

              {/* Region tabs */}
              <div className="mt-6 flex flex-wrap justify-center gap-2">
                {REGIONS.map((region) => (
                  <button
                    key={region.id}
                    onClick={() => setActive(region.id)}
                    className={`rounded-sm px-3 py-1.5 text-xs font-medium transition-colors ${
                      active === region.id
                        ? 'bg-navy-800 text-white'
                        : 'bg-white text-grey-500 hover:bg-navy-50 hover:text-navy-800'
                    }`}
                  >
                    {region.name}
                  </button>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Region detail + stats */}
          <div>
            <Reveal>
              <div className="rounded-sm border border-navy-100 bg-white p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gold-700">
                  Selected Region
                </p>
                <h3 className="heading-3 mt-3">{activeRegion.name}</h3>
                <p className="body-base mt-4">{activeRegion.desc}</p>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="mt-6 grid gap-px overflow-hidden rounded-sm border border-navy-100 bg-navy-100 sm:grid-cols-3">
                {HIGHLIGHTS.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="bg-white p-6 text-center">
                      <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-sm bg-navy-50 text-navy-800">
                        <Icon className="h-5 w-5" />
                      </span>
                      <p className="mt-3 font-heading text-sm font-bold text-navy-900">
                        {item.value}
                      </p>
                      <p className="mt-1 text-xs leading-snug text-grey-500">{item.label}</p>
                    </div>
                  );
                })}
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-6 flex flex-wrap gap-3">
                {COUNTRIES.map((country) => (
                  <div
                    key={country.name}
                    className="flex items-center gap-3 rounded-sm border border-navy-100 bg-grey-50 px-5 py-3"
                  >
                    <span className="h-2.5 w-2.5 rounded-full bg-gold-500" />
                    <div>
                      <p className="font-heading text-sm font-bold text-navy-900">
                        {country.name}
                      </p>
                      <p className="text-xs text-grey-500">{country.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
