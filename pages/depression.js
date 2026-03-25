import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';

export default function DepressionCare() {
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
        <title>Depression Care | MindHaven Wellness - Boutique Clinical Sanctuary</title>
        <meta name="description" content="Compassionate, evidence-based clinical care for depression in a private and luxurious environment." />
      </Head>

      <Navbar darkLinks={true} />

      <main>
        {/* --- SECTION 1: HERO --- */}
        <section className="hero-padding-top reveal active" style={{ 
          background: 'linear-gradient(180deg, #f0f4f4 0%, var(--bg-color) 100%)',
          paddingBottom: '100px'
        }}>
          <div className="container text-center">
            <h6 className="text-primary text-uppercase tracking-widest fw-bold mb-3" style={{ fontSize: '0.8rem' }}>Specialized Depression Care</h6>
            <h1 className="display-2 fw-bold mb-4 mx-auto" style={{ fontFamily: 'Work Sans', color: 'var(--secondary-color)', maxWidth: '900px' }}>
              Rekindling the <span className="text-primary">Light</span> within.
            </h1>
            <p className="fs-5 text-muted mb-5 mx-auto" style={{ maxWidth: '650px' }}>
              Our bespoke depression protocols integrate clinical excellence with restorative 
              luxury, providing a dignified path back to vitality and purpose.
            </p>
            
            <div className="position-relative mt-5">
              <div className="service-hero-img-container shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1494178270175-e96de2971df9?auto=format&fit=crop&q=80&w=1920" 
                  alt="Hopeful Horizon" 
                  className="w-100 h-100 object-fit-cover hero-zoom"
                />
              </div>
            </div>
          </div>
        </section>

        {/* --- SECTION 2: THE MINDHAVEN WAY (SPLIT) --- */}
        <section className="section-padding reveal">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-lg-6">
                <h6 className="text-primary text-uppercase tracking-widest fw-bold mb-3" style={{ fontSize: '0.75rem' }}>Our Approach</h6>
                <h2 className="display-4 fw-bold mb-4" style={{ fontFamily: 'Work Sans', color: 'var(--secondary-color)' }}>Clinical Precision. <br/> <span className="text-primary">Human</span> Warmth.</h2>
                <p className="text-muted fs-5 lh-lg mb-5">
                  Depression is a complex biological and psychological experience. We move 
                  beyond standard therapies, utilizing neuro-mapping and personalized 
                  restorative plans designed for the unique challenges of high-performing lives.
                </p>
                <div className="d-flex flex-column gap-4">
                    {[
                        { title: "Neuro-Restorative Protocols", desc: "Scientific techniques to rebalance brain chemistry and cognitive patterns.", icon: "bi-reception-4" },
                        { title: "Bespoke Lifestyle Design", desc: "Integrating nutrition, sleep, and movement into your clinical journey.", icon: "bi-cup-hot" }
                    ].map((item, i) => (
                        <div key={i} className="d-flex gap-4 p-4 rounded-5 bg-white shadow-sm border border-transparent transition-all hover-up">
                            <div className="bg-primary-subtle rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: '60px', height: '60px' }}>
                                <i className={`bi ${item.icon} fs-4 text-primary`}></i>
                            </div>
                            <div>
                                <h5 className="fw-bold mb-1 text-secondary">{item.title}</h5>
                                <p className="text-muted small mb-0">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
              </div>
              <div className="col-lg-6">
                <div className="position-relative">
                    <div className="rounded-5 overflow-hidden shadow-lg" style={{ height: '600px' }}>
                        <img src="https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&q=80&w=1000" alt="Clinical Session" className="w-100 h-100 object-fit-cover" />
                    </div>
                    <div className="position-absolute bottom-0 start-0 m-4 p-4 bg-white rounded-4 shadow-lg d-none d-md-block" style={{ transform: 'translate(-20%, 20%)' }}>
                        <div className="text-center">
                            <div className="display-5 fw-bold text-primary mb-0">96%</div>
                            <div className="extra-small fw-bold text-uppercase tracking-widest text-muted">Vitality Score</div>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- SECTION 3: TREATMENT MODULES --- */}
        <section className="section-padding reveal" style={{ background: '#fcfcfc' }}>
            <div className="container">
                <div className="text-center mb-5">
                    <h6 className="text-primary text-uppercase tracking-widest fw-bold mb-3" style={{ fontSize: '0.75rem' }}>Specialized Modules</h6>
                    <h2 className="display-5 fw-bold" style={{ fontFamily: 'Work Sans' }}>The Path to Vitality</h2>
                </div>
                <div className="row g-4">
                    {[
                        { title: "Cognitive Reboot", icon: "bi-lightning-charge", desc: "Evidence-based therapy focused on breaking negative loops and restoring mental clarity." },
                        { title: "Emotional Resilience", icon: "bi-shield-shaded", desc: "Building the internal architecture to navigate life's pressures with sustainable strength." },
                        { title: "Social Reconnection", icon: "bi-people-fill", desc: "Overcoming isolation through guided clinical strategies for authentic interaction." },
                        { title: "Purpose Alignment", icon: "bi-compass", desc: "Rekindling motivation and long-term goal setting for a life filled with meaning." }
                    ].map((module, idx) => (
                        <div key={idx} className="col-lg-3 col-md-6">
                            <div className="p-5 bg-white rounded-5 shadow-sm border border-transparent transition-all hover-up h-100 text-center">
                                <div className="text-primary fs-1 mb-4"><i className={`bi ${module.icon}`}></i></div>
                                <h5 className="fw-bold mb-3 text-secondary">{module.title}</h5>
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
                            <h2 className="display-4 fw-bold mb-4" style={{ fontFamily: 'Work Sans', color: 'white' }}>Take the first step today.</h2>
                            <p className="lead mb-0 opacity-75">
                                Confidential, compassionate care is just a single conversation away. 
                                Reach out to our intake team for an immediate response.
                            </p>
                        </div>
                        <div className="col-lg-5 text-lg-end mt-5 mt-lg-0">
                            <a href="/contact" className="btn btn-premium btn-premium-primary px-5 py-3 shadow-lg">Begin New Intake</a>
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
                                { q: "How do I know if this program is right for me?", a: "Our clinicians perform a detailed neuropsychological intake to determine if our boutique environment aligns with your clinical needs." },
                                { q: "What is 'Neuro-Restorative' therapy?", a: "It's an integrated approach using the latest brain-science insights to help restructure thoughts and biological stress responses." },
                                { q: "Is total privacy guaranteed?", a: "Discretion is our absolute priority. We provide secure concierge access and strict confidentiality protocols for all clients." },
                                { q: "Can I bring my family into the process?", a: "Yes, we offer family clinical integration as part of our higher-tier care plans to support a holistic recovery environment." }
                            ].map((faq, idx) => (
                                <div key={idx} className={`faq-item-v2 p-4 rounded-4 transition-all ${activeFaq === idx ? 'active shadow-md bg-light' : 'bg-white border'}`} onClick={() => toggleFaq(idx)} style={{ cursor: 'pointer' }}>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <h5 className="fw-bold mb-0 text-secondary" style={{ fontSize: '1.1rem' }}>{faq.q}</h5>
                                        <div className="text-primary fs-4"><i className={`bi bi-chevron-${activeFaq === idx ? 'up' : 'down'}`}></i></div>
                                    </div>
                                    <div className="faq-answer-v2 overflow-hidden transition-all" style={{ maxHeight: activeFaq === idx ? '200px' : '0', opacity: activeFaq === idx ? 1 : 0, marginTop: activeFaq === idx ? '15px' : '0' }}>
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
