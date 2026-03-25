import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useEffect } from 'react';

export default function Stories() {
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

  const reviews = [
    { name: "Sarah M.", role: "Executive", text: "Finding MindHaven was a turning point. The level of care and professional environment is unmatched by any clinic I've visited before.", rating: 5, date: "March 2026" },
    { name: "James R.", role: "Entrepreneur", text: "The neuro-informed therapy was a game changer for my ADHD. I've never felt more in control of my life and career.", rating: 5, date: "February 2026" },
    { name: "Emily L.", role: "Creative Lead", text: "Truly life-changing. The integration of therapy and wellness techniques helped me regain my creative spark and inner peace.", rating: 5, date: "January 2026" },
    { name: "Michael B.", role: "Director", text: "A sanctuary in the truest sense. The staff is exceptional, and the privacy protocols give me total peace of mind.", rating: 5, date: "December 2025" },
    { name: "Sophia K.", role: "Physician", text: "As a doctor myself, I appreciate the clinical depth and evidence-based approach MindHaven brings to every session.", rating: 5, date: "November 2025" },
    { name: "David T.", role: "Professional Athlete", text: "Mental performance is as important as physical. MindHaven has become an essential part of my performance toolkit.", rating: 5, date: "October 2025" }
  ];

  return (
    <div className="premium-page">
      <Head>
        <title>Client Stories | MindHaven Wellness</title>
        <meta name="description" content="Read transformative stories from our clients at MindHaven Wellness." />
      </Head>

      <Navbar darkLinks={true} />

      <main>
        {/* --- SECTION 1: HERO (CENTERED INTRO) --- */}
        <section className="section-padding reveal active" style={{ 
          background: 'linear-gradient(180deg, #f0f4f4 0%, var(--bg-color) 100%)',
          paddingTop: '180px',
          paddingBottom: '80px'
        }}>
          <div className="container text-center">
            <h6 className="text-primary text-uppercase tracking-widest fw-bold mb-3" style={{ fontSize: '0.8rem' }}>Stories</h6>
            <h1 className="display-2 fw-bold mb-4 mx-auto" style={{ fontFamily: 'Work Sans', color: 'var(--secondary-color)', maxWidth: '900px', lineHeight: 1.1, letterSpacing: '-2px' }}>
              Voices of <span className="text-primary">Transformation</span> and Hope.
            </h1>
            <p className="fs-5 text-muted mb-0 mx-auto" style={{ maxWidth: '650px' }}>
              Real stories from individuals who found their sanctuary and path forward at MindHaven.
              Experience the journey of recovery through their words.
            </p>
          </div>
        </section>

        {/* --- REVIEWS GRID --- */}
        <section className="section-padding bg-light reveal">
          <div className="container">
            <div className="row g-4">
              {reviews.map((item, idx) => (
                <div key={idx} className="col-lg-4 col-md-6 reveal" style={{ transitionDelay: `${idx * 0.1}s` }}>
                  <div className="p-5 h-100 rounded-5 bg-white border border-transparent shadow-sm transition-all hover-story-card">
                    <div className="mb-4 text-warning">
                      {[...Array(item.rating)].map((_, i) => <i key={i} className="bi bi-star-fill me-1"></i>)}
                    </div>
                    <p className="text-muted mb-5 fs-6" style={{ fontStyle: 'italic', lineHeight: '1.8' }}>"{item.text}"</p>
                    <div className="d-flex align-items-center mt-auto border-top pt-4">
                      <div className="flex-grow-1">
                        <div className="d-flex justify-content-between align-items-center">
                          <h6 className="fw-bold mb-0 text-dark">{item.name}</h6>
                          <span className="extra-small text-muted">{item.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- CALL TO ACTION (HIGH IMPACT) --- */}
        <section className="reveal" style={{ background: 'var(--secondary-color)', borderRadius: '0', padding: '50px 0' }}>
          <div className="container text-center text-white">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <h2 className="display-3 fw-bold mb-4" style={{ fontFamily: 'Work Sans', letterSpacing: '-2px', color: 'white' }}>Start Your Own Story</h2>
                <p className="lead mb-5 opacity-75 mx-auto fs-4" style={{ maxWidth: '650px', lineHeight: 1.6 }}>
                  Your journey to sustainable wellness starts with a single, private conversation. 
                  Reach out to our specialist team for a confidential consultation.
                </p>
                <div className="d-flex flex-column flex-sm-row justify-content-center gap-4">
                  <a href="/pricing" className="btn btn-premium btn-premium-primary px-5 py-3 shadow-lg">
                    View Care Plans <i className="bi bi-arrow-right ms-2"></i>
                  </a>
                  <a href="mailto:contact@mindhaven.com" className="btn btn-premium btn-premium-outline px-5 py-3">
                    Contact Admissions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style jsx>{`
        .hover-story-card {
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
        }
        .hover-story-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 30px 60px rgba(27, 77, 75, 0.08) !important;
          border-color: rgba(125, 157, 156, 0.2) !important;
        }
      `}</style>
    </div>
  );
}
