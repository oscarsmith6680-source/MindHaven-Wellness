// MindPureWellness - Premium Home Page Redesign (Updated)
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  const [activeFaq, setActiveFaq] = useState(0);

  useEffect(() => {
    // Reveal Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05 }
    );

    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      id: 'anxiety',
      title: 'Anxiety & Panic',
      image: 'https://images.unsplash.com/photo-1493676304819-0d7a8d026dcf?auto=format&fit=crop&q=80&w=1200',
      class: 'bento-1'
    },
    {
      id: 'depression',
      title: 'Depression Care',
      image: 'https://images.unsplash.com/photo-1520333789090-1afc82db536a?auto=format&fit=crop&q=80&w=1200',
      class: 'bento-2'
    },
    {
      id: 'adhd',
      title: 'ADHD Support',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200',
      class: 'bento-3'
    },
    {
      id: 'bipolar',
      title: 'Bipolar Disorder',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1200',
      class: 'bento-4'
    },
    {
      id: 'insomnia',
      title: 'Insomnia Therapy',
      image: 'https://images.unsplash.com/photo-1541480601022-2308c0f02487?auto=format&fit=crop&q=80&w=1200',
      class: 'bento-5'
    },
    {
      id: 'ocd',
      title: 'OCD Management',
      image: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&q=80&w=1200',
      class: 'bento-6'
    },
    {
      id: 'ptsd',
      title: 'PTSD Recovery',
      image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&q=80&w=1200',
      class: 'bento-7'
    },
    {
      id: 'psychotic',
      title: 'Psychotic Disorders',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1200',
      class: 'bento-8'
    },
    {
      id: 'addiction',
      title: 'Addiction Recovery',
      image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=1200',
      class: 'bento-9'
    }
  ];

  return (
    <div className="premium-page">
      <Head>
        <title>MindPureWellness | Elite Mental Health Support</title>
        <meta name="description" content="Professional, high-end mental wellness and therapy center." />
      </Head>

      <Navbar />

      <main>
        {/* HERO SECTION WITH VIDEO */}
        <section className="hero-wrapper">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            className="hero-video"
          >
            <source 
              src="https://videos.pexels.com/video-files/31807864/13551824_1920_1080_60fps.mp4" 
              type="video/mp4" 
            />
          </video>
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <h1 className="reveal active">Quiet your mind. <br /> Find your haven.</h1>
            <p className="lead mb-5 reveal active" style={{ transitionDelay: '0.2s', fontWeight: 500, fontSize: '1.2rem' }}>
              Bespoke mental health care tailored to your unique journey. 
              Our expert clinicians provide the sanctuary you need to heal and thrive.
            </p>
            <div className="d-flex justify-content-center gap-3 reveal active" style={{ transitionDelay: '0.4s' }}>
              <Link href="/contact" className="btn btn-premium btn-premium-primary px-5">Start Your Journey</Link>
              <a href="#services" className="btn btn-premium btn-premium-outline px-5">Explore Care</a>
            </div>
          </div>
        </section>

        {/* SERVICES SECTION - PREMIUM BENTO GRID */}
        <section id="services" className="section-padding position-relative overflow-hidden">
          <div className="container">
            <div className="row justify-content-center mb-5 reveal">
              <div className="col-lg-8 text-center">
                <h6 className="text-uppercase tracking-widest text-primary mb-3" style={{ fontSize: '0.75rem', fontWeight: 700 }}>Elite Care Services</h6>
                <h2 className="display-5 mb-0 fw-bold">A Holistic Approach <br />to Mental Resilience</h2>
              </div>
            </div>

            <div className="bento-grid">
              {services.map((service, index) => (
                <Link 
                  key={service.id} 
                  href={`/${service.id}`}
                  className="bento-item reveal text-decoration-none"
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <img src={service.image} alt={service.title} />
                  <div className="bento-content">
                    <h3 className="bento-title mb-1">{service.title}</h3>
                    <p className="small mb-0">Learn More <i className="bi bi-arrow-right ms-1"></i></p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <style jsx>{`
            .bento-grid {
              display: grid !important;
              grid-template-columns: repeat(3, 1fr) !important;
              grid-auto-rows: 350px !important;
              gap: 24px !important;
            }
            .bento-title {
              color: white !important;
            }
            @media (max-width: 1200px) {
              .bento-grid {
                grid-template-columns: repeat(2, 1fr) !important;
              }
            }
            @media (max-width: 768px) {
              .bento-grid {
                grid-template-columns: 1fr !important;
                grid-auto-rows: 300px !important;
                gap: 20px !important;
              }
            }
          `}</style>
        </section>

        {/* --- NEW SECTION 1: OUR PROCESS --- */}
        <section id="process" className="section-padding" style={{ background: '#fcf9f6' }}>
          <div className="container">
            <div className="row justify-content-center mb-5 reveal">
              <div className="col-lg-8 text-center">
                <h6 className="text-uppercase tracking-widest text-primary mb-3" style={{ fontSize: '0.75rem', fontWeight: 700 }}>Our Method</h6>
                <h2 className="display-5 mb-4 fw-bold">How Your Journey Begins</h2>
                <p className="text-muted">A streamlined, professional approach to your mental well-being.</p>
              </div>
            </div>
            <div className="row g-5">
              {[
                { step: "01", icon: "bi-telephone-inbound", title: "Discovery Call", desc: "A brief conversation to understand your goals and match you with the right specialist." },
                { step: "02", icon: "bi-clipboard2-check", title: "Holistic Evaluation", desc: "A deep-dive clinical assessment focused on your mental, emotional, and neuro-health." },
                { step: "03", icon: "bi-heart-pulse", title: "Tailored Care", desc: "Implementing your personalized treatment plan with ongoing expert support." }
              ].map((item, idx) => (
                <div key={idx} className="col-lg-4 reveal" style={{ transitionDelay: `${idx * 0.2}s` }}>
                  <div className="p-5 h-100 rounded-5 bg-white shadow-sm border-0 position-relative overflow-hidden group">
                    <div className="position-absolute top-0 end-0 p-4 opacity-10">
                        <span className="display-1 fw-bold">{item.step}</span>
                    </div>
                    <div className="mb-4 bg-light rounded-4 d-inline-flex align-items-center justify-content-center" style={{ width: '70px', height: '70px' }}>
                        <i className={`bi ${item.icon} fs-2 text-primary`}></i>
                    </div>
                    <h4 className="fw-bold mb-3" style={{ fontSize: '25px' }}>{item.title}</h4>
                    <p className="text-muted mb-0">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="section-padding">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-lg-6 reveal">
                <div className="position-relative">
                  <img 
                    src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&q=80&w=1920" 
                    alt="Sanctuary" 
                    className="img-fluid rounded-4 shadow-sm"
                  />
                  <div 
                    className="position-absolute d-none d-lg-block" 
                    style={{ bottom: '-30px', right: '-30px', background: '#D9CAB3', width: '200px', height: '200px', zIndex: -1, borderRadius: '40px' }}
                  ></div>
                </div>
              </div>
              <div className="col-lg-6 ps-lg-5 reveal">
                <h6 className="text-uppercase tracking-widest text-primary mb-3" style={{ fontSize: '0.75rem', fontWeight: 700 }}>The Haven</h6>
                <h2 className="display-6 mb-4 fw-bold">Reimagining Mental Health</h2>
                <p className="lead text-muted mb-4">
                  MindPureWellness is a premier sanctuary designed for those 
                  who value depth, privacy, and clinical excellence.
                </p>
                <p className="text-muted mb-5">
                  Our therapeutic approach combines state-of-the-art neuroscience with 
                  mindful practices. We provide a space where you are heard, understood, 
                  and empowered to reach your fullest potential.
                </p>
                <div className="row g-4 mb-5">
                  <div className="col-sm-6">
                    <h5 className="fw-bold mb-2" style={{ fontSize: '25px' }}>Neuro-Informed</h5>
                    <p className="small text-muted mb-0">Evidence-based clinical treatments.</p>
                  </div>
                  <div className="col-sm-6">
                    <h5 className="fw-bold mb-2" style={{ fontSize: '25px' }}>Elite Privacy</h5>
                    <p className="small text-muted mb-0">Unmatched confidentiality protocols.</p>
                  </div>
                </div>
                <Link href="/about" className="btn btn-premium btn-premium-dark">Discover Our Method</Link>
              </div>
            </div>
          </div>
        </section>

        {/* --- VOICES OF TRANSFORMATION (MODERNIZED) --- */}
        <section id="testimonials" className="section-padding reveal" style={{ background: 'var(--secondary-color)', borderRadius: '0 0 80px 80px' }}>
          <div className="container py-5">
            <div className="row align-items-end mb-5">
              <div className="col-lg-7">
                <h6 className="text-white text-uppercase tracking-widest opacity-50 mb-3" style={{ fontSize: '0.75rem', fontWeight: 700 }}>Real Stories</h6>
                <h2 className="display-4 text-white fw-bold" style={{ fontSize: '26px' }}>Voices of Transformation</h2>
              </div>
              <div className="col-lg-5 text-lg-end mt-4 mt-lg-0">
                <Link href="/stories" className="btn-premium btn-premium-outline text-decoration-none">Read All Stories</Link>
              </div>
            </div>
            
            <div className="row g-4">
              {[
                { name: "S. Bennett", text: "Finding MindPureWellness was a turning point. The level of care and professional environment is unmatched by any clinic I've visited before.", rating: 5 },
                { name: "M. Lawson", text: "The approach here isn't just clinical—it's human. I finally felt understood and had a clear path forward for my mental well-being.", rating: 5 },
                { name: "D. Ross", text: "Truly life-changing. The integration of therapy and wellness techniques helped me regain control of my life and career.", rating: 5 }
              ].map((t, idx) => (
                <div key={idx} className="col-lg-4">
                  <div className="testimonial-card p-5 h-100 border-0 shadow-sm" style={{ transitionDelay: `${idx * 0.2}s`, borderRadius: '30px' }}>
                    <div className="mb-4 text-warning">
                      {[...Array(t.rating)].map((_, i) => <i key={i} className="bi bi-star-fill me-1"></i>)}
                    </div>
                    <p className="fs-5 mb-5 lh-base" style={{ color: 'var(--text-main)', fontStyle: 'italic', fontWeight: 500 }}>"{t.text}"</p>
                    <div className="d-flex align-items-center mt-auto">
                      <div className="flex-grow-1">
                        <h6 className="mb-0 fw-bold" style={{ color: 'var(--secondary-color)', fontSize: '18px' }}>{t.name}</h6>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- PRICING SECTION --- */}
        <section id="pricing" className="section-padding bg-light reveal">
          <div className="container">
            <div className="row justify-content-center mb-5">
              <div className="col-lg-8 text-center">
                <h6 className="text-uppercase tracking-widest text-primary mb-3" style={{ fontSize: '0.75rem', fontWeight: 700 }}>Investment</h6>
                <h2 className="display-5 mb-4 fw-bold" style={{ fontSize: '35px' }}>Transparent Care Plans</h2>
                <p className="text-muted">High-standard mental health care tailored to your needs.</p>
              </div>
            </div>
            
            <div className="row g-4 justify-content-center">
              {[
                { 
                  name: "Standard", 
                  price: "199", 
                  desc: "Individual specialized therapy session.", 
                  features: ["50-minute clinical session", "Dedicated specialist", "Personalized treatment plan", "Direct text support", "Electronic superbill"] 
                },
                { 
                  name: "Sanctuary", 
                  price: "649", 
                  desc: "Monthly care for deep healing and rest.", 
                  features: ["Weekly private sessions", "Full neuro-health checkup", "Priority booking rights", "Dedicated care concierge", "Holistic wellness support"],
                  featured: true
                },
                { 
                  name: "Concierge", 
                  price: "1499", 
                  desc: "Ultimate 24/7 dedicated elite support.", 
                  features: ["Unlimited clinical support", "In-home visits available", "Executive neuro-mapping", "24/7 priority response", "Complete family program"] 
                }
              ].map((plan, idx) => (
                <div key={idx} className="col-lg-4 col-md-6 reveal" style={{ transitionDelay: `${idx * 0.1}s` }}>
                  <div className={`pricing-card ${plan.featured ? 'featured' : ''}`}>
                    {plan.featured && <div className="pricing-badge">Most Preferred</div>}
                    <h4 className="fw-bold mb-3" style={{ fontSize: '25px' }}>{plan.name}</h4>
                    <p className="text-muted small mb-4">{plan.desc}</p>
                    <div className="price-value mb-5">
                      <span className="price-currency">$</span>{plan.price}<span className="price-period">/session</span>
                    </div>
                    
                    <ul className="list-unstyled mb-5">
                      {plan.features.map((feat, i) => (
                        <li key={i} className="mb-3 d-flex align-items-center small">
                          <i className="bi bi-check-circle-fill text-primary me-2"></i>
                          {feat}
                        </li>
                      ))}
                    </ul>
                    
                    <Link href="/pricing" className={`btn-premium w-100 py-3 text-decoration-none ${plan.featured ? 'btn-premium-primary' : 'btn-premium-dark'}`}>
                      Select Plan
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- FAQ SECTION (MODERN BOUTIQUE DESIGN) --- */}
        <section id="faq" className="section-padding reveal" style={{ background: 'var(--bg-color)' }}>
          <div className="container">
            <div className="row justify-content-center mb-5">
              <div className="col-lg-8 text-center">
                <h6 className="text-uppercase tracking-widest text-primary mb-3" style={{ fontSize: '0.75rem', fontWeight: 700 }}>Expert Insights</h6>
                <h2 className="display-5 mb-4 fw-bold">Common Inquiries</h2>
                <div className="mx-auto" style={{ width: '40px', height: '3px', background: '#7D9D9C' }}></div>
              </div>
            </div>
            
            <div className="faq-modern-grid reveal">
              {[
                { q: "What defines 'Elite Clinical Care'?", a: "It is the convergence of advanced neuroscience, bespoke treatment planning, and absolute privacy. Every patient receives a multi-disciplinary team approach to ensure holistic well-being.", icon: "bi-shield-lock" },
                { q: "Is total confidentiality guaranteed?", a: "Beyond standard compliance, we maintain high-profile privacy protocols. Our location and digital systems are designed to protect the identities of all our sanctuary guests.", icon: "bi-eye-slash" },
                { q: "Do you offer concierge mental health?", a: "Yes. Our premium members enjoy 24/7 direct access to their care team, home visits if required, and prioritized scheduling for any urgent needs.", icon: "bi-headset" },
                { q: "What is your approach to medication?", a: "We believe in conservative, evidence-based pharmacology integrated with therapy. Our goal is always to find the minimum effective dose while maximizing natural recovery.", icon: "bi-capsule" }
              ].map((item, idx) => (
                <div 
                  key={idx} 
                  className={`faq-modern-card reveal ${activeFaq === idx ? 'active' : ''}`}
                  style={{ transitionDelay: `${idx * 0.1}s` }}
                  onClick={() => setActiveFaq(activeFaq === idx ? -1 : idx)}
                >
                  <div className="faq-modern-icon">
                    <i className={`bi ${item.icon}`}></i>
                  </div>
                  <h5 className="fw-bold">{item.q}</h5>
                  <div className="faq-modern-answer">
                    {item.a}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CALL TO ACTION */}
        <section id="book-now" className="section-padding bg-dark text-white text-center" style={{ background: 'var(--secondary-color) !important' }}>
          <div className="container">
            <div className="reveal">
              <h2 className="display-3 fw-bold mb-4" style={{ fontFamily: 'Work Sans', letterSpacing: '-2px', color: 'white' }}>Begin Your Evolution</h2>
              <p className="lead mb-5 opacity-75 mx-auto fs-4" style={{ maxWidth: '650px', lineHeight: 1.6 }}>
                Limited spaces available for personalized care. 
                Contact our intake team today for a private and confidential consultation.
              </p>
              <Link href="/contact" className="btn btn-premium btn-premium-primary px-5 py-3 shadow-lg">Consult with a Specialist</Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
