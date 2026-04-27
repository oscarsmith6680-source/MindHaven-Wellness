import Link from 'next/link';
import PolicyPageShell from '../components/PolicyPageShell';

export default function RefundPolicy() {
  return (
    <PolicyPageShell
      pageTitle="Refund Policy"
      kicker="Legal"
      metaDescription="MindHaven Wellness refund and cancellation terms for care plans and sessions."
    >
      <p>
        This Refund Policy explains how fees, credits, and refunds may be handled for services
        offered by MindHaven Wellness. It applies in addition to any written agreement or
        intake paperwork specific to your care plan.
      </p>

      <h2>Session-based services</h2>
      <p>
        Many of our services are provided on a per-session or per-program basis. Unless your
        written agreement with MindHaven states otherwise, session fees are generally earned
        at the time the session is provided or as scheduled under your plan.
      </p>

      <h2>Cancellations and rescheduling</h2>
      <p>
        If you need to cancel or reschedule, please follow the notice window described in your
        confirmation, intake materials, or concierge communication. Late cancellations or
        missed appointments may be subject to a fee, as set out in your service agreement, to
        protect clinician time and reserved capacity.
      </p>
      <ul>
        <li>Timely reschedules may avoid cancellation charges where we can offer another slot.</li>
        <li>Repeated no-shows may affect future booking priority, consistent with your agreement.</li>
      </ul>

      <h2>Program and package fees</h2>
      <p>
        For bundled programs, retainers, or multi-session packages, refund eligibility—if
        any—depends on the terms of the specific program you selected. Some programs are
        non-refundable after a stated commitment period; others may allow a partial credit or
        refund in limited circumstances, as described in your agreement.
      </p>

      <h2>Refunds (when applicable)</h2>
      <p>Where a refund is approved under your agreement or this policy:</p>
      <ul>
        <li>Refunds, if any, are typically issued to the original payment method, unless we agree otherwise in writing.</li>
        <li>Processing may take a reasonable number of business days after approval, depending on your financial institution.</li>
        <li>Administrative or third-party processing fees, if any, may be disclosed in your service agreement.</li>
      </ul>

      <h2>Exceptional situations</h2>
      <p>
        In rare cases (e.g. documented medical inability to continue care, or error on our
        part), we may review requests outside standard terms. Such reviews are handled on a
        case-by-case basis and are not a guarantee of a refund.
      </p>

      <h2>How to request a review</h2>
      <p>
        To ask about a cancellation, credit, or refund, contact your care coordinator or reach
        us through our <Link href="/contact">Contact</Link> page or at{' '}
        <a href="mailto:admissions@mindhaven.com">admissions@mindhaven.com</a>. Include your name,
        the service or program in question, and a brief description of the request.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        We may update this Refund Policy to reflect changes in our practices or applicable
        requirements. The effective date at the top of this page will be updated when
        material changes are posted. Continued use of our services after changes constitutes
        your acknowledgment of the updated policy, subject to your signed agreements.
      </p>
    </PolicyPageShell>
  );
}
