import { useState, type FormEvent } from 'react';
import { MapPin, Phone, Mail, Download, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { Reveal } from './Reveal';

const SERVICES = [
  'Project Transportation',
  'Heavy Equipment Transportation',
  'Trailer Mobilization',
  'Multi-State Transportation Coordination',
  'Industrial Logistics Support',
  'General Enquiry',
];

const CONTACT_INFO = [
  {
    icon: MapPin,
    label: 'Head Office',
    value: 'JGT House 887, Pocket-6, Sector-2, Rohini, New Delhi, India- 110085',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 9891963109',
    href: 'tel:+919891963109',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@jhojhugoldentransport.com',
    href: 'mailto:info@jhojhugoldentransport.com',
  },
];

type Status = 'idle' | 'submitting' | 'success' | 'error';

export function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: String(formData.get('name') || '').trim(),
      company: String(formData.get('company') || '').trim() || null,
      email: String(formData.get('email') || '').trim(),
      phone: String(formData.get('phone') || '').trim() || null,
      service: String(formData.get('service') || '').trim() || null,
      message: String(formData.get('message') || '').trim(),
    };

    if (!payload.name || !payload.email || !payload.message) {
      setStatus('error');
      setErrorMsg('Please fill in your name, email, and message.');
      return;
    }

    try {
      const { error } = await supabase.from('enquiries').insert(payload);
      if (error) throw error;
      setStatus('success');
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      setStatus('error');
      setErrorMsg(
        err instanceof Error
          ? `Could not submit: ${err.message}`
          : 'Something went wrong. Please try again or email us directly.'
      );
    }
  };

  return (
    <section id="contact" className="bg-grey-50 py-20 lg:py-28">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <p className="section-label">Contact</p>
          <h2 className="heading-2 mt-4">Start a conversation about your project</h2>
          <p className="body-lg mt-6">
            Share your transport requirements and project location. We will respond with partner
            availability and a coordinated plan — typically within one working day.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
          {/* Form */}
          <Reveal>
            <form
              onSubmit={handleSubmit}
              className="rounded-sm border border-navy-100 bg-white p-8 lg:p-10"
              noValidate
            >
              {status === 'success' ? (
                <div className="flex flex-col items-center py-12 text-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-green-50 text-green-600">
                    <CheckCircle2 className="h-8 w-8" />
                  </span>
                  <h3 className="heading-3 mt-6">Enquiry submitted</h3>
                  <p className="body-base mt-3 max-w-sm">
                    Thank you. We have received your enquiry and will respond within one working
                    day.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="mt-8 text-sm font-semibold text-navy-800 hover:text-gold-700"
                  >
                    Submit another enquiry
                  </button>
                </div>
              ) : (
                <>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <Field label="Full Name" required>
                      <input
                        type="text"
                        name="name"
                        autoComplete="name"
                        className="form-input"
                        required
                      />
                    </Field>
                    <Field label="Company" >
                      <input
                        type="text"
                        name="company"
                        autoComplete="organization"
                        className="form-input"
                      />
                    </Field>
                    <Field label="Email" required>
                      <input
                        type="email"
                        name="email"
                        autoComplete="email"
                        className="form-input"
                        required
                      />
                    </Field>
                    <Field label="Phone">
                      <input
                        type="tel"
                        name="phone"
                        autoComplete="tel"
                        className="form-input"
                      />
                    </Field>
                  </div>

                  <div className="mt-6">
                    <Field label="Service Required">
                      <select name="service" className="form-input">
                        <option value="">Select a service</option>
                        {SERVICES.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </Field>
                  </div>

                  <div className="mt-6">
                    <Field label="Project / Requirement Details" required>
                      <textarea
                        name="message"
                        rows={5}
                        className="form-input resize-none"
                        placeholder="Briefly describe your project location, cargo type, and timeline."
                        required
                      />
                    </Field>
                  </div>

                  {status === 'error' && (
                    <div className="mt-6 flex items-start gap-3 rounded-sm border border-red-200 bg-red-50 p-4">
                      <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />
                      <p className="text-sm text-red-700">{errorMsg}</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="btn-primary mt-8 w-full disabled:opacity-60"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Submitting…
                      </>
                    ) : (
                      'Submit Enquiry'
                    )}
                  </button>
                </>
              )}
            </form>
          </Reveal>

          {/* Contact info + map + download */}
          <Reveal delay={120}>
            <div className="flex flex-col gap-6">
              <div className="rounded-sm border border-navy-100 bg-white p-8">
                <h3 className="heading-3">Reach us directly</h3>
                <ul className="mt-6 space-y-5">
                  {CONTACT_INFO.map((item) => {
                    const Icon = item.icon;
                    const content = (
                      <div className="flex items-start gap-4">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-navy-50 text-navy-800">
                          <Icon className="h-5 w-5" />
                        </span>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wider text-grey-400">
                            {item.label}
                          </p>
                          <p className="mt-1 text-sm font-medium text-navy-900">{item.value}</p>
                        </div>
                      </div>
                    );
                    return (
                      <li key={item.label}>
                        {item.href ? (
                          <a href={item.href} className="block transition-opacity hover:opacity-80">
                            {content}
                          </a>
                        ) : (
                          content
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="overflow-hidden rounded-sm border border-navy-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448196.5258803423!2d76.76357692715698!3d28.64368473218014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1784199602579!5m2!1sen!2sin"
                  width="100%"
                  height="320"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Jhojhu Golden Transport Location"
                />
              </div>

              <a
                href="/Jhojhu_Golden_Transport_Capability_Profile.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-sm border border-navy-200 bg-white px-6 py-4 text-sm font-semibold text-navy-800 transition-all duration-300 hover:border-navy-800 hover:bg-navy-50"
              >
                <Download className="h-4 w-4" />
                Download Company Profile (PDF)
              </a>
            </div>
          </Reveal>
        </div>
      </div>

      <style>{`
        .form-input {
          width: 100%;
          border-radius: 2px;
          border: 1px solid #dce3ef;
          background-color: #ffffff;
          padding: 0.7rem 0.9rem;
          font-size: 0.875rem;
          color: #2a2a31;
          transition: border-color 0.2s, box-shadow 0.2s;
          font-family: inherit;
        }
        .form-input:focus {
          outline: none;
          border-color: #2c4674;
          box-shadow: 0 0 0 3px rgba(45, 70, 116, 0.12);
        }
        .form-input::placeholder {
          color: #b8b8bf;
        }
      `}</style>
    </section>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-grey-600">
        {label}
        {required && <span className="text-gold-600"> *</span>}
      </span>
      {children}
    </label>
  );
}
