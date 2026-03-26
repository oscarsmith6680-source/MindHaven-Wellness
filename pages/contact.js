import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    pathway: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

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

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const validateField = (name, value) => {
    let error = '';
    if (!value || value.trim() === '') {
      error = 'This field is required';
    } else if (name === 'email' && !validateEmail(value)) {
      error = 'Please enter a valid email';
    }
    setErrors(prev => ({ ...prev, [name]: error }));
    return error === '';
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Real-time validation
    validateField(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Final validation check for all fields
    const newErrors = {};
    let isValid = true;

    Object.keys(formData).forEach(key => {
      const value = formData[key];
      let error = '';
      if (!value || value.trim() === '') {
        error = 'This field is required';
        isValid = false;
      } else if (key === 'email' && !validateEmail(value)) {
        error = 'Please enter a valid email';
        isValid = false;
      }
      newErrors[key] = error;
    });

    setErrors(newErrors);

    if (isValid) {
      // Proceed with submit logic
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="premium-page">
      <Head>
        <title>Contact Us | MindHaven Wellness - Private Consultations</title>
        <meta name="description" content="Reach out to MindHaven Wellness for private consultations and elite mental health care." />
      </Head>

      <Navbar darkLinks={true} />

      <main style={{ background: '#FDFCFB' }}>
        {/* --- SECTION 1: ELEGANT HERO --- */}
        <section className="hero-padding-top reveal active" style={{ paddingBottom: '40px' }}>
          <div className="container text-center">
            {submitted ? (
              <div className="py-5">
                <div className="bg-primary-subtle d-inline-flex align-items-center justify-content-center rounded-circle mb-4" style={{ width: '100px', height: '100px' }}>
                  <i className="bi bi-check-lg display-4 text-primary"></i>
                </div>
                <h1 className="display-3 fw-bold mb-4" style={{ fontFamily: 'Work Sans', color: 'var(--secondary-color)' }}>
                  Inquiry <span className="text-primary italic-font">Received</span>.
                </h1>
                <p className="fs-5 text-muted mx-auto lh-base" style={{ maxWidth: '600px' }}>
                  Thank you for reaching out. Our clinical director will review your details and contact you privately within 4 business hours.
                </p>
                <button onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', phone: '', pathway: '', message: '' });
                  setErrors({});
                }} className="btn btn-premium btn-premium-outline mt-5 px-5">Back to Form</button>
              </div>
            ) : (
              <>
                <h6 className="text-primary text-uppercase tracking-widest fw-bold mb-3" style={{ fontSize: '0.7rem' }}>Privacy & Excellence</h6>
                <h1 className="display-3 fw-bold mb-4" style={{ fontFamily: 'Work Sans', color: 'var(--secondary-color)' }}>
                  A Space for <span className="text-primary italic-font">Listening</span>.
                </h1>
                <p className="fs-5 text-muted mx-auto lh-base" style={{ maxWidth: '650px' }}>
                  Connect with our elite clinical team in total confidentiality. 
                  Every inquiry is handled with the utmost discretion.
                </p>
              </>
            )}
          </div>
        </section>

        {!submitted && (
          <>
            {/* --- SECTION 2: BENTO CONTACT GRID --- */}
            <section className="reveal pt-4">
              <div className="container">
                <div className="row g-4">
                  <div className="col-lg-4">
                    <div className="contact-card p-5 h-100 rounded-5 transition-all shadow-hover border border-light bg-white d-flex flex-column position-relative overflow-hidden">
                      <div className="card-bg-glow"></div>
                      <div className="contact-icon-wrapper mb-4 position-relative z-1">
                        <i className="bi bi-geo-alt fs-2 text-primary"></i>
                      </div>
                      <h5 className="fw-bold mb-3 position-relative z-1" style={{ color: 'var(--secondary-color)', fontSize: '20px' }}>Clinical Sanctuary</h5>
                      <p className="text-muted small lh-lg mb-0 position-relative z-1">
                        Elite Hills, Clinical Drive,<br />
                        New York, NY 10022<br />
                        <span className="text-primary fw-bold extra-small tracking-widest mt-3 d-inline-block cursor-pointer hover-link">VIEW ON MAP <i className="bi bi-arrow-up-right ms-1"></i></span>
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="contact-card p-5 h-100 rounded-5 transition-all shadow-hover border border-light bg-white d-flex flex-column position-relative overflow-hidden">
                      <div className="card-bg-glow"></div>
                      <div className="contact-icon-wrapper mb-4 position-relative z-1">
                        <i className="bi bi-shield-lock fs-2 text-primary"></i>
                      </div>
                      <h5 className="fw-bold mb-3 position-relative z-1" style={{ color: 'var(--secondary-color)', fontSize: '20px' }}>Confidential Admissions</h5>
                      <p className="text-muted small lh-lg mb-0 position-relative z-1">
                        admissions@mindhaven.com<br />
                        +1 (800) 555-ELITE<br />
                        <span className="text-primary fw-bold extra-small tracking-widest mt-3 d-inline-block">24/7 PRIORITY LINE <i className="bi bi-dot ms-1 text-success"></i></span>
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="contact-card p-5 h-100 rounded-5 transition-all shadow-hover border-none d-flex flex-column position-relative overflow-hidden" style={{ background: 'var(--secondary-color) !important' }}>
                      <div className="contact-icon-wrapper mb-4 bg-white bg-opacity-10 position-relative z-1">
                        <i className="bi bi-chat-quote fs-2 text-white"></i>
                      </div>
                      <h5 className="fw-bold mb-3 text-white position-relative z-1" style={{ fontSize: '20px' }}>Initial Consultation</h5>
                      <p className="text-white opacity-75 small lh-lg mb-0 position-relative z-1">
                        Arranging your first intake session is a seamless process. Our concierge team responds to all inquiries within 4 business hours.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* --- SECTION 3: THE FORM SECTION --- */}
            <section className="section-padding reveal">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-11">
                    <div className="form-container-premium position-relative p-4 p-lg-5 bg-white rounded-5 shadow-form border border-light overflow-hidden">
                      
                      {/* Subtle Background Pattern */}
                      <div className="position-absolute top-0 end-0 w-50 h-100 d-none d-lg-block opacity-5" 
                           style={{ 
                             background: 'radial-gradient(circle at 100% 0%, var(--primary-color) 0%, transparent 70%)',
                             pointerEvents: 'none'
                           }}></div>

                      <div className="row g-5 align-items-center">
                        <div className="col-lg-5">
                          <div className="pe-lg-4">
                            <h2 className="fw-bold mb-4" style={{ fontFamily: 'Work Sans', color: 'var(--secondary-color)', fontSize: '28px' }}>
                              Ready to find <span className="text-primary italic-font">your</span> peace?
                            </h2>
                            <p className="text-muted mb-5 lh-lg">
                              Please complete this secure intake form. Our clinical director reviews each request to ensure you are matched with the most appropriate specialist.
                            </p>
                            
                            <div className="d-flex flex-column gap-4">
                              {[
                                { icon: "bi-check2-circle", text: "End-to-end encrypted messaging" },
                                { icon: "bi-check2-circle", text: "Discreet clinical protocols" },
                                { icon: "bi-check2-circle", text: "Elite specialist matching" }
                              ].map((item, i) => (
                                <div key={i} className="d-flex align-items-center gap-3">
                                  <i className={`bi ${item.icon} text-primary fs-5`}></i>
                                  <span className="small fw-medium text-secondary">{item.text}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-7">
                          <div className="p-4 p-lg-5 rounded-5 bg-light border border-transparent">
                            <form className="row g-4" onSubmit={handleSubmit} noValidate>
                              <div className="col-md-6">
                                <label className="form-label extra-small fw-bold text-uppercase tracking-widest text-muted ms-2">Full Name</label>
                                <input 
                                  type="text" 
                                  name="name"
                                  className={`form-control elegant-input ${errors.name ? 'is-invalid' : ''}`} 
                                  placeholder="John Doe" 
                                  value={formData.name}
                                  onChange={handleChange}
                                />
                                {errors.name && <div className="invalid-feedback ms-2">{errors.name}</div>}
                              </div>
                              <div className="col-md-6">
                                <label className="form-label extra-small fw-bold text-uppercase tracking-widest text-muted ms-2">Email Address</label>
                                <input 
                                  type="email" 
                                  name="email"
                                  className={`form-control elegant-input ${errors.email ? 'is-invalid' : ''}`} 
                                  placeholder="john@example.com" 
                                  value={formData.email}
                                  onChange={handleChange}
                                />
                                {errors.email && <div className="invalid-feedback ms-2">{errors.email}</div>}
                              </div>
                              <div className="col-md-6">
                                <label className="form-label extra-small fw-bold text-uppercase tracking-widest text-muted ms-2">Phone Number</label>
                                <input 
                                  type="tel" 
                                  name="phone"
                                  className={`form-control elegant-input ${errors.phone ? 'is-invalid' : ''}`} 
                                  placeholder="+1 (555) 000-0000" 
                                  value={formData.phone}
                                  onChange={handleChange}
                                />
                                {errors.phone && <div className="invalid-feedback ms-2">{errors.phone}</div>}
                              </div>
                              <div className="col-md-6">
                                <label className="form-label extra-small fw-bold text-uppercase tracking-widest text-muted ms-2">Care Pathway</label>
                                <select 
                                  name="pathway"
                                  className={`form-select elegant-input ${errors.pathway ? 'is-invalid' : ''}`} 
                                  value={formData.pathway}
                                  onChange={handleChange}
                                >
                                  <option value="">Select Pathway...</option>
                                  <option value="anxiety">Anxiety Recovery</option>
                                  <option value="depression">Depression Support</option>
                                  <option value="adhd">Executive ADHD</option>
                                  <option value="other">Other Service</option>
                                </select>
                                {errors.pathway && <div className="invalid-feedback ms-2">{errors.pathway}</div>}
                              </div>
                              <div className="col-12">
                                <label className="form-label extra-small fw-bold text-uppercase tracking-widest text-muted ms-2">How can we help?</label>
                                <textarea 
                                  name="message"
                                  className={`form-control elegant-input ${errors.message ? 'is-invalid' : ''}`} 
                                  rows="4" 
                                  placeholder="Briefly describe your needs..." 
                                  value={formData.message}
                                  onChange={handleChange}
                                ></textarea>
                                {errors.message && <div className="invalid-feedback ms-2">{errors.message}</div>}
                              </div>
                              <div className="col-12 pt-3">
                                <button type="submit" className="btn btn-premium btn-premium-primary w-100 py-3 shadow-lg">Submit Secure Request</button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}
      </main>

      <Footer />

      <style jsx>{`
        .italic-font {
          font-style: italic;
          font-family: 'Raleway', sans-serif;
          font-weight: 400;
        }
        .contact-icon-wrapper {
          width: 70px;
          height: 70px;
          background: #f8f9fa;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
        }
        .contact-card:hover .contact-icon-wrapper {
          background: var(--primary-color);
          transform: rotate(10deg) scale(1.1);
        }
        .contact-card:hover .contact-icon-wrapper i {
          color: white !important;
        }
        .card-bg-glow {
          position: absolute;
          top: 0;
          right: 0;
          width: 200px;
          height: 200px;
          background: radial-gradient(circle at 100% 0%, var(--primary-color), transparent 70%);
          opacity: 0;
          transition: all 0.6s ease;
          pointer-events: none;
        }
        .contact-card:hover .card-bg-glow {
          opacity: 0.08;
          transform: scale(1.2);
        }
        .hover-link {
          transition: all 0.3s ease;
        }
        .hover-link:hover {
          letter-spacing: 0.15em !important;
          color: var(--secondary-color) !important;
        }
        .shadow-hover {
          transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
        }
        .shadow-hover:hover {
          transform: translateY(-15px);
          box-shadow: 0 40px 80px rgba(27, 77, 75, 0.1) !important;
          border-color: var(--primary-color) !important;
        }
        .border-none {
          border: none !important;
        }
        .shadow-form {
          box-shadow: 0 50px 100px -20px rgba(0, 0, 0, 0.08);
        }
        .elegant-input {
          background-color: white !important;
          border: 1px solid rgba(0,0,0,0.05) !important;
          padding: 1.1rem 1.5rem !important;
          border-radius: 15px !important;
          font-size: 0.95rem !important;
          transition: all 0.3s ease;
          box-shadow: none !important;
        }
        .elegant-input:focus {
          border-color: var(--primary-color) !important;
          box-shadow: 0 10px 30px rgba(125, 157, 156, 0.05) !important;
        }
        .elegant-input.is-invalid {
          border-color: #dc3545 !important;
          background-image: none !important;
        }
        .invalid-feedback {
          color: #dc3545;
          font-size: 0.75rem;
          margin-top: 0.25rem;
          font-weight: 600;
        }
        .cursor-pointer {
          cursor: pointer;
        }
        @media (max-width: 768px) {
          .contact-card {
            padding: 2.5rem !important;
          }
        }
      `}</style>
    </div>
  );
}
