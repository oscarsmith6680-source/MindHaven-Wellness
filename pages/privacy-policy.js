import Link from 'next/link';
import PolicyPageShell from '../components/PolicyPageShell';

export default function PrivacyPolicy() {
  return (
    <PolicyPageShell
      pageTitle="Privacy Policy"
      kicker="Legal"
      metaDescription="Learn how MindPureWellness collects, uses, and protects your information."
    >
      <p>
        MindPureWellness (&ldquo;MindPureWellness,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
        &ldquo;our&rdquo;) is committed to protecting your privacy. This policy describes how we
        handle information when you use our website, contact us, or engage with our services.
      </p>

      <h2>Information we collect</h2>
      <p>We may collect the following types of information, depending on how you interact with us:</p>
      <ul>
        <li>
          <strong>Information you provide:</strong> name, email address, phone number, and any
          message or intake details you submit through our contact or inquiry forms.
        </li>
        <li>
          <strong>Technical data:</strong> such as IP address, browser type, device type, and
          general usage data, collected through standard server logs and optional analytics
          tools, where enabled.
        </li>
        <li>
          <strong>Cookies and similar technologies:</strong> as described in the Cookies section
          below, if applicable.
        </li>
      </ul>

      <h2>How we use your information</h2>
      <p>We use this information to:</p>
      <ul>
        <li>Respond to your inquiries and coordinate intake or clinical appointments.</li>
        <li>Operate, maintain, and improve our website and services.</li>
        <li>Comply with legal obligations and protect the security of our users and our systems.</li>
      </ul>
      <p>We do not sell your personal information.</p>

      <h2>Email and communications</h2>
      <p>
        If you contact us through our site, your message may be transmitted by email to our team.
        Please avoid including highly sensitive health information in web forms if you are
        uncomfortable doing so; you may also reach us by phone to discuss how to share information
        securely.
      </p>

      <h2>Data retention</h2>
      <p>
        We retain information only as long as needed for the purposes described in this
        policy, for legitimate business needs, or as required by law. Retention periods may vary
        based on the type of information and the context in which it was collected.
      </p>

      <h2>Security</h2>
      <p>
        We take reasonable technical and organizational measures to protect your information
        against unauthorized access, loss, or misuse. No method of transmission over the
        internet is 100% secure, and we cannot guarantee absolute security.
      </p>

      <h2>Third-party services</h2>
      <p>
        Our website may use hosting, analytics, or other service providers that process data on
        our behalf under appropriate agreements. Those providers are permitted to use the
        information only to perform services for us, subject to their own privacy terms.
      </p>

      <h2>Your rights</h2>
      <p>
        Depending on where you live, you may have the right to access, correct, or delete
        certain personal information, or to object to or restrict some processing. To exercise
        these rights, contact us using the information on our{' '}
        <Link href="/contact">Contact</Link> page. We will respond in line with applicable law.
      </p>

      <h2>Children&apos;s privacy</h2>
      <p>
        Our services are not directed to individuals under 13, and we do not knowingly
        collect personal information from children. If you believe we have received such
        information, please contact us so we can delete it.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        We may update this Privacy Policy from time to time. The &ldquo;Effective&rdquo; date at
        the top of this page will be revised when material changes are made. We encourage you
        to review this page periodically.
      </p>

      <h2>Contact us</h2>
      <p>
        If you have questions about this policy or our privacy practices, contact us at{' '}
        <a href="mailto:admissions@mindpurewellness.com"> admissions@mindpurewellness.com</a> or through our{' '}
        <Link href="/contact">Contact</Link> page.
      </p>
    </PolicyPageShell>
  );
}
