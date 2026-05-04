import Link from 'next/link';
import PolicyPageShell from '../components/PolicyPageShell';

export default function TermsConditions() {
  return (
    <PolicyPageShell
      pageTitle="Terms & Conditions"
      kicker="Legal"
      metaDescription="Terms of use for the MindPureWellness website and related services."
    >
      <p>
        These Terms &amp; Conditions (&ldquo;Terms&rdquo;) govern your use of the MindPureWellness
        Wellness website and related online communications. By accessing or using our
        site, you agree to these Terms. If you do not agree, please do not use the site.
      </p>
      <p>
        Clinical and fee-specific terms for your care may be set out in separate intake
        or service agreements, which control where they differ from these Terms for those
        services.
      </p>

      <h2>Use of the website</h2>
      <p>You agree to use this website only for lawful purposes and in a way that does not:</p>
      <ul>
        <li>Interfere with the operation, security, or performance of the site or our systems.</li>
        <li>Attempt to gain unauthorized access to data, accounts, or networks.</li>
        <li>Transmit malware, harvest data without permission, or harass other users or staff.</li>
      </ul>

      <h2>Not medical advice</h2>
      <p>
        Content on this site is for general information. It is not a substitute for
        professional medical advice, diagnosis, or treatment. Always seek the advice of a
        qualified clinician with any questions about your health. In an emergency, contact
        your local emergency services immediately.
      </p>

      <h2>Intellectual property</h2>
      <p>
        All text, graphics, logos, images, and other materials on this site are owned by
        MindPureWellness or our licensors and are protected by copyright and other laws.
        You may not copy, modify, or distribute this content for commercial use without our
        prior written permission, except for limited personal, non-commercial viewing.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the fullest extent permitted by law, MindPureWellness and its team members
        shall not be liable for any indirect, incidental, special, consequential, or
        punitive damages arising from your use of the website or any linked third-party
        sites. Our total liability for any claim related to the site is limited to the
        amount you paid us (if any) for the specific service giving rise to the claim in
        the twelve months before the claim, or one hundred U.S. dollars, whichever is greater,
        where such a cap is permitted by law.
      </p>

      <h2>Disclaimer of warranties</h2>
      <p>
        The site is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis.
        We do not warrant that the site will be uninterrupted or error-free, or that defects
        will be corrected, except as required by applicable law.
      </p>

      <h2>Links to other sites</h2>
      <p>
        Our website may include links to third-party websites. We are not responsible for
        their content, privacy practices, or availability. Your use of third-party sites is
        at your own risk and subject to their terms.
      </p>

      <h2>Privacy</h2>
      <p>
        Our collection and use of personal information is described in our{' '}
        <Link href="/privacy-policy">Privacy Policy</Link>, which is incorporated by reference.
      </p>

      <h2>Governing law</h2>
      <p>
        These Terms are governed by the laws applicable in the State of New York, United
        States, without regard to conflict-of-law rules, subject to any mandatory protections
        in your place of residence where required.
      </p>

      <h2>Changes</h2>
      <p>
        We may update these Terms from time to time. The effective date at the top of this
        page will be updated when we post material changes. Your continued use of the site
        after such changes constitutes acceptance of the updated Terms, where permitted by
        law.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these Terms? Contact us via our <Link href="/contact">Contact</Link>{' '}
        page or at <a href="mailto:admissions@MindPureWellness.com">MindPureWellness</a>.
      </p>
    </PolicyPageShell>
  );
}
