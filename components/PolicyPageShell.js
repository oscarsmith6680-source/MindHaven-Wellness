import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';
import { useEffect } from 'react';

/**
 * Shared shell for policy / legal pages — matches typical inner pages (e.g. Stories): gradient hero, white content band.
 */
export default function PolicyPageShell({ pageTitle, metaDescription, kicker, children }) {
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
        <title>{pageTitle} | MindPureWellness</title>
        <meta name="description" content={metaDescription} />
      </Head>

      <Navbar darkLinks={true} />

      <main>
        <section
          className="section-padding reveal active"
          style={{
            background: 'linear-gradient(180deg, #f0f4f4 0%, var(--bg-color) 100%)',
            paddingTop: '180px',
            paddingBottom: '64px',
          }}
        >
          <div className="container text-center">
            <h6 className="text-primary text-uppercase tracking-widest fw-bold mb-3" style={{ fontSize: '0.8rem' }}>
              {kicker}
            </h6>
            <h1
              className="display-2 fw-bold mb-3 mx-auto"
              style={{
                fontFamily: 'Work Sans',
                color: 'var(--secondary-color)',
                maxWidth: '900px',
                lineHeight: 1.1,
                letterSpacing: '-1px',
              }}
            >
              {pageTitle}
            </h1>
            <p className="text-muted small mb-0">Effective: April 15, 2026</p>
          </div>
        </section>

        <section className="section-padding" style={{ background: '#ffffff' }}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10 col-xl-8 policy-content text-start">{children}</div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
