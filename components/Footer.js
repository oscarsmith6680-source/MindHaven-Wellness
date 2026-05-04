// MindPureWellness - Premium Redesigned Footer Component
import Link from 'next/link';
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'Anxiety & Panic', href: '/anxiety' },
    { name: 'Depression Care', href: '/depression' },
    { name: 'ADHD Support', href: '/adhd' },
    { name: 'Bipolar Disorder', href: '/bipolar' },
  ];

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Our Haven', href: '/about' },
    { name: 'Pricing Plans', href: '/pricing' },
    { name: 'Client Stories', href: '/stories' },
    { name: 'Book Intake', href: '/contact' },
  ];

  const policies = [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Refund Policy', href: '/refund-policy' },
    { name: 'Terms & Conditions', href: '/terms-conditions' },
  ];

  return (
    <footer className="footer-premium pt-5 pb-3" style={{ background: '#f8faf9', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
      <div className="container pt-5">
        <div className="row g-5 mb-5">
          {/* Brand & Description */}
          <div className="col-lg-4 col-md-12">
            <div className="footer-brand mb-4">
            <Link href="/">
            <Image
            src="/images/dark-logo.png"
            alt="MindPureWellness Logo"
            width={140}
            height={40}
            />
            </Link>
            </div>
            <p className="text-muted mb-0 pe-lg-5" style={{ lineHeight: '1.8', fontSize: '0.95rem' }}>
              A premier clinical sanctuary designed for those who value depth, 
              absolute privacy, and excellence in mental health care. We provide 
              bespoke pathways to sustainable peace and cognitive freedom.
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="col-lg-2 col-md-4 col-6">
            <h6 className="text-uppercase tracking-widest fw-bold mb-4" style={{ fontSize: '0.7rem', color: 'var(--primary-color)' }}>Navigation</h6>
            <ul className="list-unstyled d-flex flex-column gap-3">
              {navigation.map((item, idx) => (
                <li key={idx}>
                  <Link href={item.href} className="footer-link text-decoration-none text-muted small">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Clinical Services */}
          <div className="col-lg-3 col-md-4 col-6">
            <h6 className="text-uppercase tracking-widest fw-bold mb-4" style={{ fontSize: '0.7rem', color: 'var(--primary-color)' }}>Clinical Services</h6>
            <ul className="list-unstyled d-flex flex-column gap-3">
              {services.map((service, idx) => (
                <li key={idx}>
                  <Link href={service.href} className="footer-link text-decoration-none text-muted small">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="col-lg-3 col-md-4">
            <h6 className="text-uppercase tracking-widest fw-bold mb-4" style={{ fontSize: '0.7rem', color: 'var(--primary-color)' }}>Contact Details</h6>
            <div className="d-flex flex-column gap-4">
              <div className="d-flex align-items-start gap-3">
                <div className="text-primary mt-1"><i className="bi bi-geo-alt"></i></div>
                <div className="text-muted small lh-base">
                  Elite Hills, Clinical Drive,<br />New York, NY 10022
                </div>
              </div>
              <div className="d-flex align-items-center gap-3">
                <div className="text-primary"><i className="bi bi-envelope"></i></div>
                <Link href="mailto:admissions@mindpurewellness.com" className="text-muted small text-decoration-none footer-link">
                  admissions@mindpurewellness.com
                </Link>
              </div>
              <div className="d-flex align-items-center gap-3">
                <div className="text-primary"><i className="bi bi-telephone"></i></div>
                <Link href="tel:+18005553548" className="text-muted small text-decoration-none footer-link">
                  +1 (800) 555-ELITE
                </Link>
              </div>
              <div className="mt-2">
                <Link href="/contact" className="btn btn-premium btn-premium-primary btn-sm px-4">
                  Arrange Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Legal & policies — same link styling as main footer links */}
        <div className="row mt-1 mb-0">
          <div className="col-12">
            <ul className="list-unstyled d-flex flex-wrap justify-content-center justify-content-lg-start gap-3 gap-lg-4 align-items-center mb-0">
              {policies.map((item) => (
                <li key={item.href} className="m-0">
                  <Link href={item.href} className="footer-link text-decoration-none text-muted small">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-4 pt-md-5 mt-4 border-top d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
          <div className="text-muted extra-small" style={{ fontSize: '0.75rem' }}>
            &copy; {currentYear} MindPureWellness. All rights reserved. Professional clinical sanctuary.
          </div>
          <div className="text-muted extra-small" style={{ fontSize: '0.75rem' }}>
            Developed by <a href="https://logix9.io/" target="_blank" rel="noopener noreferrer" className="text-primary fw-bold text-decoration-none hover-underline">Logix9</a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer-link {
          transition: all 0.3s ease;
          position: relative;
          display: inline-block;
        }
        .footer-link:hover {
          color: var(--primary-color) !important;
          transform: translateX(5px);
        }
        .hover-underline:hover {
          text-decoration: underline !important;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
