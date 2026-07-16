import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CompanySnapshot } from './components/CompanySnapshot';
import { Industries } from './components/Industries';
import { Capabilities } from './components/Capabilities';
import { WhyUs } from './components/WhyUs';
import { Experience } from './components/Experience';
import { CaseStudies } from './components/CaseStudies';
import { OperationalReach } from './components/OperationalReach';
import { FounderMessage } from './components/FounderMessage';
import { CTABanner } from './components/CTABanner';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-body text-grey-800">
      <Navbar />
      <main>
        <Hero />
        <CompanySnapshot />
        <Industries />
        <Capabilities />
        <WhyUs />
        <Experience />
        <CaseStudies />
        <OperationalReach />
        <FounderMessage />
        <CTABanner />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
