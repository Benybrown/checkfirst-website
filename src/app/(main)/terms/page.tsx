import type { Metadata } from "next";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Terms of Service | CheckFirst",
  description:
    "CheckFirst Terms of Service — the agreement governing your use of our platform and services.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <Section>
      <div className="mx-auto max-w-3xl">
        <h1 className="font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
          Terms of Service
        </h1>
        <p className="mt-4 font-body text-sm text-slate-500">
          Last updated: February 23, 2026
        </p>

        <div className="mt-12 space-y-10 font-body text-base leading-relaxed text-slate-600">
          <div>
            <h2 className="font-display text-xl font-bold text-slate-900">
              1. Acceptance of Terms
            </h2>
            <p className="mt-3">
              By accessing or using the CheckFirst platform and services
              (collectively, the &ldquo;Service&rdquo;), you agree to be bound
              by these Terms of Service (&ldquo;Terms&rdquo;). If you do not
              agree to these Terms, do not use the Service.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-slate-900">
              2. Description of Service
            </h2>
            <p className="mt-3">
              CheckFirst provides an AI-powered third-party risk management
              platform that enables organisations to assess vendor security
              posture, manage questionnaires, conduct external security scans,
              and generate compliance reports. The Service includes all
              features, tools, and content made available through
              checkfirst.io.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-slate-900">
              3. Account Registration
            </h2>
            <p className="mt-3">
              To use certain features of the Service, you must create an
              account. You agree to:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Provide accurate, current, and complete information.</li>
              <li>
                Maintain the security and confidentiality of your login
                credentials.
              </li>
              <li>
                Accept responsibility for all activities that occur under your
                account.
              </li>
              <li>
                Notify us immediately of any unauthorised use of your account.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-slate-900">
              4. Acceptable Use
            </h2>
            <p className="mt-3">You agree not to:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>
                Use the Service for any unlawful purpose or in violation of any
                applicable laws or regulations.
              </li>
              <li>
                Attempt to gain unauthorised access to any part of the Service,
                other accounts, or connected systems.
              </li>
              <li>
                Interfere with or disrupt the integrity or performance of the
                Service.
              </li>
              <li>
                Reverse-engineer, decompile, or disassemble any part of the
                Service.
              </li>
              <li>
                Use the Service to transmit malicious code, viruses, or harmful
                content.
              </li>
              <li>
                Resell, sublicense, or redistribute the Service without our
                prior written consent.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-slate-900">
              5. Your Data
            </h2>
            <p className="mt-3">
              You retain all rights to the data you submit to the Service
              (&ldquo;Your Data&rdquo;). By using the Service, you grant
              CheckFirst a limited licence to use, process, and store Your
              Data solely for the purpose of providing and improving the
              Service. We will not access, use, or share Your Data except as
              described in these Terms and our Privacy Policy.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-slate-900">
              6. Intellectual Property
            </h2>
            <p className="mt-3">
              The Service, including its design, features, content, and
              underlying technology, is owned by CheckFirst and protected by
              intellectual property laws. These Terms do not grant you any
              right, title, or interest in the Service except for the limited
              right to use it in accordance with these Terms.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-slate-900">
              7. Subscription and Payment
            </h2>
            <p className="mt-3">
              Certain features of the Service require a paid subscription. By
              subscribing, you agree to pay all applicable fees as described on
              our pricing page. All fees are non-refundable unless otherwise
              stated. We reserve the right to change our pricing with
              reasonable notice.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-slate-900">
              8. Service Availability
            </h2>
            <p className="mt-3">
              We strive to maintain high availability of the Service but do not
              guarantee uninterrupted or error-free operation. We may
              temporarily suspend the Service for maintenance, updates, or
              other reasons. We will make reasonable efforts to provide advance
              notice of planned downtime.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-slate-900">
              9. Disclaimer of Warranties
            </h2>
            <p className="mt-3">
              The Service is provided &ldquo;as is&rdquo; and &ldquo;as
              available&rdquo; without warranties of any kind, whether express
              or implied, including but not limited to implied warranties of
              merchantability, fitness for a particular purpose, and
              non-infringement. CheckFirst does not warrant that the Service
              will meet your specific requirements or that results obtained
              from the Service will be accurate or reliable.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-slate-900">
              10. Limitation of Liability
            </h2>
            <p className="mt-3">
              To the maximum extent permitted by law, CheckFirst shall not be
              liable for any indirect, incidental, special, consequential, or
              punitive damages, including loss of profits, data, or business
              opportunities, arising out of or in connection with your use of
              the Service. Our total liability shall not exceed the amount you
              paid to CheckFirst in the twelve (12) months preceding the
              claim.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-slate-900">
              11. Indemnification
            </h2>
            <p className="mt-3">
              You agree to indemnify and hold harmless CheckFirst, its
              officers, directors, employees, and agents from any claims,
              damages, losses, or expenses (including reasonable legal fees)
              arising from your use of the Service or violation of these Terms.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-slate-900">
              12. Termination
            </h2>
            <p className="mt-3">
              Either party may terminate these Terms at any time. We may
              suspend or terminate your access to the Service immediately if
              you breach these Terms. Upon termination, your right to use the
              Service ceases immediately. We will make Your Data available for
              export for a reasonable period following termination.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-slate-900">
              13. Changes to These Terms
            </h2>
            <p className="mt-3">
              We reserve the right to modify these Terms at any time. We will
              notify you of material changes by posting the updated Terms on
              this page and updating the &ldquo;Last updated&rdquo; date. Your
              continued use of the Service after any changes constitutes
              acceptance of the new Terms.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-slate-900">
              14. Governing Law
            </h2>
            <p className="mt-3">
              These Terms shall be governed by and construed in accordance with
              applicable law, without regard to conflict of law principles.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-slate-900">
              15. Contact Us
            </h2>
            <p className="mt-3">
              If you have any questions about these Terms, please contact us
              at{" "}
              <a
                href="mailto:support@checkfirst.io"
                className="text-brand-700 underline hover:text-brand-800"
              >
                support@checkfirst.io
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
