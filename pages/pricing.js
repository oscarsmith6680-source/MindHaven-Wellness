import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useEffect } from 'react';

export default function Pricing() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="premium-page">
      <Head>
        <title>Pricing Plans | MindHaven Wellness</title>
        <meta name="description" content="Transparent investment plans for your mental well-being." />
      </Head>

      <Navbar darkLinks={true} />

      <main style={{ background: '#f8faf9' }}>
        {/* --- PRICING HERO (UPGRADED) --- */}
        <section className="hero-padding-top reveal active" style={{ paddingBottom: '80px', background: 'var(--bg-color)' }}>
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-lg-8">
                <h6 className="text-uppercase tracking-widest text-primary mb-3" style={{ fontSize: '0.8rem', fontWeight: 700 }}>Investment in You</h6>
                <h1 className="display-3 fw-bold mb-4" style={{ fontFamily: 'Work Sans' }}>Transparent <span className="text-primary">Care Plans.</span></h1>
                <p className="lead text-muted mx-auto mb-0" style={{ maxWidth: '600px' }}>
                  We believe in clarity. Choose the level of support that aligns with your 
                  current goals and clinical needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* --- PRICING GRID --- */}
        <section className="section-padding reveal" style={{ background: '#f8faf9' }}>
          <div className="container">
            <div className="row g-4 justify-content-center">
              {[
                { 
                  name: "Standard", 
                  price: "199", 
                  desc: "Ideal for focused individual growth and specialized therapy.", 
                  features: ["50-minute clinical session", "Dedicated specialist matching", "Personalized care strategy", "Secure messaging portal", "Electronic billing support"] 
                },
                { 
                  name: "Sanctuary", 
                  price: "649", 
                  desc: "A deeper commitment to healing, providing consistent and immersive care.", 
                  features: ["4 Private sessions per month", "Full neuropsychological checkup", "Priority scheduling rights", "Personal care concierge", "Holistic wellness resources"],
                  featured: true
                },
                { 
                  name: "Concierge", 
                  price: "1499", 
                  desc: "The pinnacle of private psychiatric care with 24/7 dedicated elite support.", 
                  features: ["Unlimited clinical consultations", "In-home visits available", "Executive neuro-mapping", "24/7 immediate response", "Family clinical integration"] 
                }
              ].map((plan, idx) => (
                <div key={idx} className="col-lg-4 col-md-6 reveal" style={{ transitionDelay: `${idx * 0.1}s` }}>
                  <div className={`pricing-card h-100 ${plan.featured ? 'featured bg-white' : 'bg-white'}`} 
                       style={{ 
                         borderRadius: '45px', 
                         padding: '60px 45px', 
                         border: plan.featured ? '2px solid var(--primary-color)' : '1px solid rgba(0,0,0,0.05)', 
                         position: 'relative',
                         boxShadow: plan.featured ? '0 30px 60px rgba(27, 77, 75, 0.1)' : '0 10px 30px rgba(0,0,0,0.02)'
                       }}>
                    {plan.featured && (
                        <div className="position-absolute top-0 start-50 translate-middle">
                            <span className="badge bg-primary rounded-pill px-4 py-2 shadow-sm" style={{ fontSize: '0.75rem', letterSpacing: '1px' }}>RECOMMENDED</span>
                        </div>
                    )}
                    <h3 className="fw-bold mb-3" style={{ fontFamily: 'Work Sans', fontSize: '25px' }}>{plan.name}</h3>
                    <p className="text-muted small mb-5 lh-base" style={{ minHeight: '50px' }}>{plan.desc}</p>
                    
                    <div className="d-flex align-items-baseline mb-5">
                      <span className="display-4 fw-bold text-secondary" style={{ fontFamily: 'Work Sans' }}>${plan.price}</span>
                      <span className="text-muted ms-2">/session</span>
                    </div>
                    
                    <div className="mb-5">
                        <h6 className="text-uppercase tracking-widest fw-bold mb-4" style={{ fontSize: '0.65rem', color: 'var(--primary-color)' }}>Included in plan</h6>
                        <ul className="list-unstyled">
                        {plan.features.map((feat, i) => (
                            <li key={i} className="mb-3 d-flex align-items-center small text-muted">
                            <i className="bi bi-check2 text-primary me-3 fw-bold"></i>
                            {feat}
                            </li>
                        ))}
                        </ul>
                    </div>
                    
                    <Link href="/contact" className={`btn-premium w-100 py-3 text-decoration-none ${plan.featured ? 'btn-premium-primary' : 'btn-premium-dark'}`}>
                      Begin Intake
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- CALL TO ACTION (HIGH IMPACT) --- */}
        <section className="reveal" style={{ background: 'var(--secondary-color)', borderRadius: '0', padding: '100px 0' }}>
          <div className="container text-center text-white">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <h2 className="display-3 fw-bold mb-4" style={{ fontFamily: 'Work Sans', letterSpacing: '-2px', color: 'white' }}>Ready to Begin?</h2>
                <p className="lead mb-5 opacity-75 mx-auto fs-4" style={{ maxWidth: '650px', lineHeight: 1.6 }}>
                  Your transformation starts with a single conversation. Reach out to our 
                  specialist team today for a private and confidential consultation.
                </p>
                <div className="d-flex flex-column flex-sm-row justify-content-center gap-4">
                  <Link href="/contact" className="btn btn-premium btn-premium-primary px-5 py-3 shadow-lg">
                    Book Your Intake <i className="bi bi-arrow-right ms-2"></i>
                  </Link>
                  <Link href="/contact" className="btn btn-premium btn-premium-outline px-5 py-3">
                    Contact Admissions
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
