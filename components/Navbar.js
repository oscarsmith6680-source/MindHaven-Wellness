// MindPureWellness - Premium Navbar (Updated Visibility & Fonts)
import Link from 'next/link';
import Image from "next/image";
import { useState, useEffect, useLayoutEffect } from 'react';

const COMPACT_QUERY = '(max-width: 991.98px)';

const Navbar = ({ darkLinks = false }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCompactNav, setIsCompactNav] = useState(false);

  // Mobile / tablet: lock logo to dark variant; desktop: white over hero, dark when scrolled or darkLinks
  useLayoutEffect(() => {
    if (typeof window === 'undefined') return;
    const mq = window.matchMedia(COMPACT_QUERY);
    const update = () => setIsCompactNav(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // When the main mobile menu closes, close the Services dropdown so state stays in sync
  useEffect(() => {
    if (!isCompactNav) return;
    const collapseEl = document.getElementById('navbarNav');
    if (!collapseEl) return;

    const onMainMenuHidden = () => {
      const btn = document.getElementById('servicesDropdown');
      if (btn && btn.getAttribute('aria-expanded') === 'true') {
        btn.click();
      }
    };

    collapseEl.addEventListener('hidden.bs.collapse', onMainMenuHidden);
    return () => collapseEl.removeEventListener('hidden.bs.collapse', onMainMenuHidden);
  }, [isCompactNav]);

  const useDarkLogo = isCompactNav || isScrolled || darkLinks;
  // Toggler: light/white icon only on desktop, over hero, not scrolled, not darkLinks page
  const togglerUseLightIcon = !isCompactNav && !isScrolled && !darkLinks;

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top ${isScrolled || darkLinks ? 'scrolled shadow-sm' : ''}`}
    >
      <div className="container">
        {/* Logo: dark on mobile/tablet always; desktop follows hero / scroll */}
        <Link href="/" className="navbar-brand d-flex align-items-center">
          <Image
            src={useDarkLogo ? '/images/dark-logo.png' : '/images/white-logo.png'}
            alt="Logo"
            width={140}
            height={40}
          />
        </Link>

        <button
          className={`navbar-toggler border-0 shadow-none ${togglerUseLightIcon ? 'navbar-dark' : ''}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span
            className="navbar-toggler-icon"
            style={{
              filter: togglerUseLightIcon ? 'invert(1) grayscale(100%) brightness(200%)' : 'none',
            }}
          />
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <Link href="/" className="nav-link px-3">Home</Link>
            </li>
            <li className="nav-item">
              <Link href="/about" className="nav-link px-3">About</Link>
            </li>
            <li className="nav-item">
              <Link href="/pricing" className="nav-link px-3">Pricing Plan</Link>
            </li>
            
            {/* Services Mega Menu — button avoids href="#"; Bootstrap toggles .show on the menu (mobile + desktop) */}
            <li className="nav-item dropdown">
              <button
                type="button"
                className="nav-link dropdown-toggle px-3 services-dropdown-toggle border-0 bg-transparent"
                id="servicesDropdown"
                data-bs-toggle="dropdown"
                data-bs-display="static"
                data-bs-auto-close="true"
                aria-expanded="false"
                aria-haspopup="true"
              >
                Services
              </button>
              <div className="dropdown-menu mega-menu border-0" aria-labelledby="servicesDropdown">
                <div className="mega-menu-grid">
                  {[
                    { id: 'anxiety', title: 'Anxiety & Panic', icon: 'bi-wind', desc: 'Find peace and control over your thoughts.', href: '/anxiety' },
                    { id: 'depression', title: 'Depression Care', icon: 'bi-brightness-high', desc: 'Compassionate approach to overcoming darkness.', href: '/depression' },
                    { id: 'adhd', title: 'ADHD Support', icon: 'bi-puzzle', desc: 'Strategies for focus and organization.', href: '/adhd' },
                    { id: 'bipolar', title: 'Bipolar Disorder', icon: 'bi-reception-2', desc: 'Stabilizing moods and building balance.', href: '/bipolar' },
                    { id: 'insomnia', title: 'Insomnia Therapy', icon: 'bi-moon-stars', desc: 'Restorative sleep therapy for deep rest.', href: '/insomnia' },
                    { id: 'ocd', title: 'OCD Management', icon: 'bi-arrow-repeat', desc: 'Breaking the cycle of repetitive behaviors.', href: '/ocd' },
                    { id: 'ptsd', title: 'PTSD Recovery', icon: 'bi-shield-check', desc: 'Healing from trauma in a safe environment.', href: '/ptsd' },
                    { id: 'psychotic', title: 'Psychotic Disorders', icon: 'bi-hospital', desc: 'Clinical care for complex conditions.', href: '/psychotic' },
                    { id: 'addiction', title: 'Addiction Recovery', icon: 'bi-hand-index-thumb', desc: 'Pathways to recovery and freedom.', href: '/addiction' }
                  ].map((service) => (
                    <Link key={service.id} href={service.href || `/#${service.id}`} className="mega-menu-card">
                      <div className="mega-menu-icon">
                        <i className={`bi ${service.icon}`}></i>
                      </div>
                      <div className="mega-menu-info">
                        <h6>{service.title}</h6>
                        <p>{service.desc}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </li>

            <li className="nav-item">
              <Link href="/stories" className="nav-link px-3">Stories</Link>
            </li>
            <li className="nav-item ms-lg-4 mt-3 mt-lg-0">
              <Link href="/contact" className="btn btn-premium btn-premium-primary py-2 px-4 shadow-sm">
                Book Intake
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
