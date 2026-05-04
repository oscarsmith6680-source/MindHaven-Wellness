import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';

export default function About() {
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
        <title>About Us | MindPureWellness - Premium Mental Health Care</title>
        <meta name="description" content="Discover MindPureWellness: A premium sanctuary for mental health excellence and holistic recovery." />
      </Head>

      <Navbar darkLinks={true} />

      <main>
        {/* --- SECTION 1: HERO (CENTERED INTRO + IMAGE) --- */}
        <section className="hero-padding-top reveal active" style={{ 
          background: 'linear-gradient(180deg, #f0f4f4 0%, var(--bg-color) 100%)'
        }}>
          <div className="container text-center">
            <h6 className="text-primary text-uppercase tracking-widest fw-bold mb-3" style={{ fontSize: '0.8rem' }}>About Us</h6>
            <h1 className="display-2 fw-bold mb-4 mx-auto" style={{ fontFamily: 'Work Sans', color: 'var(--secondary-color)', maxWidth: '900px' }}>
              Where <span className="text-primary">Neuroscience</span> Meets Compassionate Care.
            </h1>
            <p className="fs-5 text-muted mb-5 mx-auto" style={{ maxWidth: '650px' }}>
              We provide a boutique clinical environment where your mental well-being is our 
              absolute priority. Experience recovery in total privacy and luxury.
            </p>
            
            <div className="position-relative mt-5">
              <div className="service-hero-img-container shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1920" 
                  alt="MindPureWellness Sanctuary" 
                  className="w-100 h-100 object-fit-cover hero-zoom"
                />
              </div>
            </div>
          </div>
        </section>

        {/* --- SECTION 2: ABOUT / INTRO (SPLIT) --- */}
        <section className="section-padding reveal" style={{ background: '#ffffff' }}>
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-lg-6 slide-left">
                <div className="position-relative pe-lg-4">
                  <div className="rounded-5 overflow-hidden shadow-lg position-relative z-2 service-hero-img-container" style={{ height: '500px' }}>
                    <img 
                      src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1000" 
                      alt="Expert Clinical Care" 
                      className="w-100 h-100 object-fit-cover"
                    />
                  </div>
                  {/* Decorative Elements */}
                  <div className="position-absolute top-0 start-0 bg-primary opacity-10 rounded-circle d-none d-lg-block" style={{ width: '150px', height: '150px', transform: 'translate(-30%, -30%)' }}></div>
                  <div className="position-absolute bottom-0 end-0 bg-accent opacity-20 rounded-4 d-none d-lg-block" style={{ width: '120px', height: '120px', transform: 'translate(20%, 20%) rotate(15deg)' }}></div>
                </div>
              </div>
              <div className="col-lg-6 slide-right">
                <h6 className="text-primary text-uppercase tracking-widest fw-bold mb-3" style={{ fontSize: '0.75rem' }}>Our Philosophy</h6>
                <h2 className="display-4 fw-bold mb-4" style={{ fontFamily: 'Work Sans', color: 'var(--secondary-color)' }}>
                  Your Path to <span className="text-primary">Sustainable</span> Peace.
                </h2>
                <p className="text-muted fs-5 lh-lg mb-5">
                  MindPureWellness isn't just a clinic; it's a sanctuary for high-performing individuals 
                  seeking absolute discretion and clinical excellence. We tailor every program to 
                  your unique biological and psychological landscape.
                </p>
                <div className="row g-4 mb-5">
                    <div className="col-sm-6 col-12">
                        <div className="d-flex align-items-center gap-3">
                            <div className="text-primary fs-3"><i className="bi bi-shield-check"></i></div>
                            <span className="fw-bold text-secondary">Total Privacy</span>
                        </div>
                    </div>
                    <div className="col-sm-6 col-12">
                        <div className="d-flex align-items-center gap-3">
                            <div className="text-primary fs-3"><i className="bi bi-activity"></i></div>
                            <span className="fw-bold text-secondary">Advanced Neuro-Care</span>
                        </div>
                    </div>
                    <div className="col-sm-6 col-12">
                        <div className="d-flex align-items-center gap-3">
                            <div className="text-primary fs-3"><i className="bi bi-heart-pulse"></i></div>
                            <span className="fw-bold text-secondary">Holistic Approach</span>
                        </div>
                    </div>
                    <div className="col-sm-6 col-12">
                        <div className="d-flex align-items-center gap-3">
                            <div className="text-primary fs-3"><i className="bi bi-award"></i></div>
                            <span className="fw-bold text-secondary">Elite Specialists</span>
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-wrap gap-3">
                    <Link href="/pricing" className="btn btn-premium btn-premium-primary px-5 py-3 shadow-lg">Our Programs</Link>
                    <Link href="/contact" className="btn btn-premium btn-premium-outline px-5 py-3" style={{ color: 'var(--secondary-color) !important', borderColor: 'var(--secondary-color) !important' }}>Admissions</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- SECTION 4: SERVICES CTA (DIAGONAL / SPLIT) — overflow visible so image badge is not clipped */}
        <section className="reveal about-clinical-split position-relative" style={{ padding: '120px 0' }}>
            <div
                className="position-absolute top-0 start-0 w-100 h-100 z-0"
                style={{ background: 'var(--secondary-color)', clipPath: 'polygon(0 0, 100% 5%, 100% 100%, 0 95%)' }}
                aria-hidden="true"
            />
            <div className="container position-relative z-1 py-5" style={{ overflow: 'visible' }}>
                <div className="row align-items-center g-5">
                    <div className="col-lg-6 text-center text-lg-start">
                        <h2 className="display-4 fw-bold mb-4 text-white" style={{ fontFamily: 'Work Sans', textShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>Clinical Excellence for the Modern Achiever</h2>
                        <p className="fs-5 text-white opacity-75 mb-5">
                            Our elite medical team provides the most advanced psychological
                            care available, in an environment that honors your privacy.
                        </p>
                        <Link href="/pricing" className="btn btn-premium btn-premium-primary px-5 py-3">Explore Elite Services</Link>
                    </div>
                    <div className="col-lg-6 text-center text-lg-end">
                        {/* Parent: positioning context + visible overflow; image child clips corners only */}
                        <div
                            className="position-relative d-inline-block w-100 about-clinical-image-wrap mx-auto"
                            style={{ maxWidth: '450px' }}
                        >
                            <div className="rounded-5 overflow-hidden shadow-2xl border border-white border-4 w-100 position-relative z-1" style={{ aspectRatio: '4/3' }}>
                                <img
                                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800"
                                    alt="Clinic Interior"
                                    className="w-100 h-100 d-block"
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                            {/* z-index above image; insets keep box inside frame (no negative translate) */}
                            <div
                                className="position-absolute about-certified-sanctuary"
                                style={{
                                    zIndex: 2,
                                    left: '0.5rem',
                                    right: 'auto',
                                    bottom: '0.5rem',
                                    top: 'auto',
                                    maxWidth: 'calc(100% - 1rem)',
                                }}
                            >
                                <div className="bg-white p-2 p-sm-3 rounded-3 shadow-lg text-start">
                                    <div className="text-primary fs-3 mb-1">
                                        <i className="bi bi-patch-check" aria-hidden="true" />
                                    </div>
                                    <div className="fw-bold text-secondary small text-uppercase" style={{ letterSpacing: '0.08em' }}>Certified Sanctuary</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* --- SECTION 6: TEAM SECTION --- */}
        <section className="section-padding reveal" style={{ background: '#fcfcfc' }}>
            <div className="container">
                <div className="text-center mb-5">
                    <h6 className="text-primary text-uppercase tracking-widest fw-bold mb-3" style={{ fontSize: '0.75rem' }}>Our Leadership</h6>
                    <h2 className="display-5 fw-bold" style={{ fontFamily: 'Work Sans' }}>The Clinical Team</h2>
                </div>
                <div className="row g-4">
                    {[
                        { name: "Dr. Adrian Thorne", role: "Chief Psychiatrist", img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=600" },
                        { name: "Sarah Jenkins", role: "Clinical Lead", img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=600" },
                        { name: "Dr. Marcus Vance", role: "Neuropsychologist", img: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=600" }
                    ].map((member, idx) => (
                        <div key={idx} className="col-lg-4 col-md-6 col-12">
                            <div className="team-card-v2 p-4 bg-white rounded-5 shadow-sm transition-all text-center hover-up h-100">
                                <div className="rounded-5 overflow-hidden mb-4 position-relative z-1" style={{ height: '350px' }}>
                                    <img src={member.img} alt={member.name} className="w-100 h-100 object-fit-cover transition-all" />
                                </div>
                                <h4 className="fw-bold mb-1" style={{ fontFamily: 'Work Sans', fontSize: '22px' }}>{member.name}</h4>
                                <p className="text-primary small fw-bold text-uppercase tracking-widest mb-0">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* --- SECTION 7: FAQ SECTION --- */}
        <section className="section-padding reveal">
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className="display-5 fw-bold" style={{ fontFamily: 'Work Sans' }}>Frequently Asked <span className="text-primary">Questions</span></h2>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="accordion-custom d-flex flex-column gap-3">
                            {[
                                { q: "Is my treatment entirely private?", a: "Yes, MindPureWellness is designed for total discretion. We use secure systems and provide separate entrances for elite clinical sessions." },
                                { q: "What approach do you take for anxiety?", a: "We use a neuro-informed approach, combining traditional CBT with biometric data and advanced grounding techniques to provide rapid and sustainable relief." },
                                { q: "Do you offer remote sessions?", a: "While we prioritize in-person sanctuary sessions, we offer secure concierge tele-health for our established elite clients." },
                                { q: "How do I begin the intake process?", a: "Simply fill out our confidential intake form or call our private concierge. We will respond within 4 business hours to arrange a consultation." }
                            ].map((faq, idx) => (
                                <div key={idx} className={`faq-item-v2 p-4 rounded-4 transition-all ${activeFaq === idx ? 'active shadow-md bg-light' : 'bg-white border'}`} onClick={() => toggleFaq(idx)} style={{ cursor: 'pointer' }}>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <h5 className="fw-bold mb-0" style={{ fontSize: '1.1rem' }}>{faq.q}</h5>
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

        {/* --- SECTION 8: FINAL CTA BANNER --- */}
        <section className="reveal" style={{ background: 'var(--secondary-color)', borderRadius: '0' }}>
            <div className="container py-0">
                <div className="row align-items-center g-0">
                    <div className="col-lg-7 py-5 pe-lg-5 text-white">
                        <h2 className="display-3 fw-bold mb-4 text-white" style={{ fontFamily: 'Work Sans' }}>Begin Your Journey to <span className="text-primary">Sustainable</span> Peace.</h2>
                        <p className="lead opacity-75 mb-5 text-white">
                            Take the first step toward clinical excellence and private recovery. 
                            Our team is ready to welcome you to the sanctuary.
                        </p>
                        <Link href="/pricing" className="btn btn-premium btn-premium-primary px-5 py-3 shadow-lg">Our Care Plans</Link>
                    </div>
                    <div className="col-lg-5 d-none d-lg-block">
                        <div style={{ height: '600px' }}>
                            <img src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800" alt="Clinical Specialist" className="w-100 h-100 object-fit-cover" style={{ objectPosition: 'top' }} />
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
        .hover-lift:hover {
          transform: translateY(-12px);
          box-shadow: 0 30px 60px rgba(0,0,0,0.08) !important;
        }
        .slide-left {
          animation: slideLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .slide-right {
          animation: slideRight 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes slideLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideRight {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .faq-answer-v2 {
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .team-card-v2:hover img {
          transform: scale(1.05);
        }
        .hover-up {
          transition: all 0.3s ease;
        }
        .hover-up:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.05) !important;
          border-color: var(--primary-color) !important;
        }
        .doctor-card-premium {
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .doctor-card-premium:hover {
          box-shadow: 0 40px 80px rgba(27, 77, 75, 0.15) !important;
        }
        .line-height-1 {
          line-height: 1;
        }
      `}</style>
    </div>
  );
}
