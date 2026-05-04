import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';

export default function AnxietyPanic() {
  const [activeFaq, setActiveFaq] = useState(null);

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

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="premium-page">
      <Head>
        <title>Anxiety & Panic Care | MindPureWellness</title>
        <meta name="description" content="Specialized clinical care for anxiety and panic disorders in a private, boutique environment." />
      </Head>

      <Navbar darkLinks={true} />

      <main>
        {/* --- SECTION 1: HERO --- */}
        <section className="hero-padding-top service-page-hero reveal active" style={{ 
          background: 'linear-gradient(180deg, #f0f4f4 0%, var(--bg-color) 100%)',
          paddingBottom: 0
        }}>
          <div className="container text-center">
            <h6 className="text-primary text-uppercase tracking-widest fw-bold mb-3" style={{ fontSize: '0.8rem' }}>Specialized Care</h6>
            <h1 className="display-2 fw-bold mb-4 mx-auto" style={{ fontFamily: 'Work Sans', color: 'var(--secondary-color)', maxWidth: '900px' }}>
              Mastering the <span className="text-primary">Quiet</span> Within the Storm.
            </h1>
            <p className="fs-5 text-muted mb-5 mx-auto" style={{ maxWidth: '650px' }}>
              Specialized clinical protocols for anxiety and panic disorders, delivered within 
              the total privacy of our boutique sanctuary.
            </p>
            
            <div className="position-relative mt-5">
              <div className="service-hero-img-container shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=1920" 
                  alt="Calm Environment" 
                  className="w-100 h-100 object-fit-cover hero-zoom"
                />
              </div>
            </div>
          </div>
        </section>

        {/* --- SECTION 2: OUR APPROACH (TEXT + IMAGE) --- */}
        <section className="section-padding reveal">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-lg-6 order-2 order-lg-1 text-center text-lg-start">
                <h6 className="text-primary text-uppercase tracking-widest fw-bold mb-3" style={{ fontSize: '0.75rem' }}>The Method</h6>
                <h2 className="display-4 fw-bold mb-4" style={{ fontFamily: 'Work Sans', color: 'var(--secondary-color)' }}>Beyond Surface <span className="text-primary">Relief.</span></h2>
                <p className="text-muted fs-5 lh-lg mb-5">
                  We don't just treat symptoms; we address the biological and psychological 
                  roots of anxiety. Our neuro-informed approach combines clinical precision 
                  with personalized grounding techniques to restore your sustainable peace.
                </p>
                <div className="d-flex flex-column gap-4">
                    {[
                        { title: "Neuro-Mapping", desc: "Understanding your brain's unique stress response patterns.", icon: "bi-activity" },
                        { title: "Biometric Grounding", desc: "Real-time data-driven techniques to halt panic in its tracks.", icon: "bi-heart-pulse" }
                    ].map((item, i) => (
                        <div key={i} className="d-flex gap-4 p-4 rounded-5 bg-white shadow-sm border border-transparent transition-all hover-up text-start">
                            <div className="bg-primary-subtle rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: '60px', height: '60px' }}>
                                <i className={`bi ${item.icon} fs-4 text-primary`}></i>
                            </div>
                            <div>
                                <h5 className="fw-bold mb-1 text-secondary" style={{ fontSize: '22px' }}>{item.title}</h5>
                                <p className="text-muted small mb-0">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
              </div>
              <div className="col-lg-6 order-1 order-lg-2">
                <div className="position-relative">
                    <div className="rounded-5 overflow-hidden shadow-lg service-hero-img-container" style={{ height: '500px' }}>
                        <img src="https://images.unsplash.com/photo-1512438248247-f0f2a5a8b7f0?auto=format&fit=crop&q=80&w=1000" alt="Clinical Environment" className="w-100 h-100 object-fit-cover" />
                    </div>
                    <div className="position-absolute top-0 end-0 m-4 p-4 bg-white rounded-4 shadow-lg d-none d-md-block" style={{ transform: 'translate(20%, -20%)' }}>
                        <div className="text-center">
                            <div className="display-5 fw-bold text-primary mb-0">94%</div>
                            <div className="extra-small fw-bold text-uppercase tracking-widest text-muted">Recovery Rate</div>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- SECTION 3: TREATMENT MODULES (CARDS) --- */}
        <section className="section-padding reveal" style={{ background: '#fcfcfc' }}>
            <div className="container">
                <div className="text-center mb-5">
                    <h6 className="text-primary text-uppercase tracking-widest fw-bold mb-3" style={{ fontSize: '0.75rem' }}>Core Modules</h6>
                    <h2 className="display-5 fw-bold" style={{ fontFamily: 'Work Sans' }}>Specialized Anxiety Path</h2>
                </div>
                <div className="row g-4">
                    {[
                        { title: "Panic Intervention", icon: "bi-shield-exclamation", desc: "Intensive protocols designed to de-escalate acute panic attacks and build long-term resilience." },
                        { title: "Social Ease", icon: "bi-people", desc: "Targeted cognitive therapy to navigate social environments with confidence and authentic calm." },
                        { title: "Executive Stress", icon: "bi-briefcase", desc: "High-performance stress management for leaders operating in high-pressure environments." },
                        { title: "Restorative Sleep", icon: "bi-moon-stars", desc: "Addressing the anxiety-insomnia cycle through specialized clinical sleep hygiene." }
                    ].map((module, idx) => (
                        <div key={idx} className="col-lg-3 col-md-6 col-12">
                            <div className="p-4 p-lg-5 bg-white rounded-5 shadow-sm border border-transparent transition-all hover-up h-100 text-center">
                                <div className="text-primary fs-1 mb-4"><i className={`bi ${module.icon}`}></i></div>
                                <h5 className="fw-bold mb-3 text-secondary" style={{ fontSize: '22px' }}>{module.title}</h5>
                                <p className="text-muted small mb-0 lh-lg">{module.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* --- SECTION 4: QUICK CONTACT --- */}
        <section className="section-padding reveal">
            <div className="container">
                <div className="bg-dark rounded-5 p-5 p-lg-5 text-white position-relative overflow-hidden shadow-2xl">
                    <div className="row align-items-center position-relative z-1">
                        <div className="col-lg-7">
                            <h2 className="display-4 fw-bold mb-4" style={{ fontFamily: 'Work Sans', color: 'white' }}>Ready to find your calm?</h2>
                            <p className="lead mb-0 opacity-75">
                                Reach out to our admissions team for a private, same-day clinical consultation. 
                                Your confidentiality is guaranteed.
                            </p>
                        </div>
                        <div className="col-lg-5 text-lg-end mt-5 mt-lg-0">
                            <Link href="/contact" className="btn btn-premium btn-premium-primary px-5 py-3 shadow-lg">Begin New Intake</Link>
                        </div>
                    </div>
                    {/* Background Glow */}
                    <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: 'radial-gradient(circle at 80% 20%, rgba(125, 157, 156, 0.2) 0%, transparent 70%)' }}></div>
                </div>
            </div>
        </section>

        {/* --- SECTION 5: FAQ --- */}
        <section className="section-padding reveal" style={{ background: '#ffffff' }}>
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className="display-5 fw-bold" style={{ fontFamily: 'Work Sans' }}>Frequently Asked <span className="text-primary">Questions</span></h2>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="accordion-custom d-flex flex-column gap-3">
                            {[
                                { q: "How long does the anxiety program last?", a: "Most clients see significant improvement within 4-6 weeks, though we offer bespoke durations based on clinical needs." },
                                { q: "Will my treatment be kept private?", a: "Discretion is our hallmark. We use high-level encryption and separate clinical tracks for total privacy." },
                                { q: "Do you use medication?", a: "We prioritize neuro-informed therapy and biometric techniques, but our psychiatrists can integrate medication if clinically appropriate." },
                                { q: "Can I book a consultation today?", a: "Yes, our concierge team typically arranges private consultations within 4 business hours." }
                            ].map((faq, idx) => (
                                <div key={idx} className={`faq-item-v2 p-4 rounded-4 transition-all ${activeFaq === idx ? 'active shadow-md bg-light' : 'bg-white border'}`} onClick={() => toggleFaq(idx)} style={{ cursor: 'pointer' }}>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <h5 className="fw-bold mb-0 text-secondary" style={{ fontSize: '1.1rem' }}>{faq.q}</h5>
                                        <div className="text-primary fs-4"><i className={`bi bi-chevron-${activeFaq === idx ? 'up' : 'down'}`}></i></div>
                                    </div>
                                    <div className="faq-answer-v2 overflow-hidden transition-all" style={{ maxHeight: activeFaq === idx ? '150px' : '0', opacity: activeFaq === idx ? 1 : 0, marginTop: activeFaq === idx ? '15px' : '0' }}>
                                        <p className="text-muted mb-0">{faq.a}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </main>

      <Footer />

      <style jsx>{`
        .hero-zoom {
          animation: slowZoom 20s infinite alternate;
        }
        @keyframes slowZoom {
          from { transform: scale(1); }
          to { transform: scale(1.1); }
        }
        .hover-up {
          transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
        }
        .hover-up:hover {
          transform: translateY(-8px);
          border-color: var(--primary-color) !important;
          box-shadow: 0 20px 40px rgba(0,0,0,0.05) !important;
        }
        .faq-answer-v2 {
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
        }
        .shadow-2xl {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.12);
        }
      `}</style>
    </div>
  );
}
