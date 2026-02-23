import type { Metadata } from "next";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Privacy Policy | CheckFirst",
  description:
    "CheckFirst Privacy Policy — how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <Section>
      <div className="mx-auto max-w-3xl">
        <h1 className="font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-4 font-body text-sm text-slate-500">
          Last updated: February 23, 2026
        </p>

        <div className="mt-12 space-y-10 font-body text-base leading-relaxed text-slate-600">
          <div>
            <h2 className="font-display text-xl font-bold text-slate-900">
              1. Introduction
            </h2>
            <p className="mt-3">
              CheckFirst (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or
              &ldquo;our&rdquo;) operates the checkfirst.io website and
              platform. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you visit our website
              or use our services.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-slate-900">
              2. Information We Collect
            </h2>
            <p className="mt-3">
              We may collect the following types of information:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>
                <strong>Account information:</strong> name, email address,
                company name, and job title when you register or request a demo.
              </li>
              <li>
                <strong>Usage data:</strong> pages visited, features used, time
                spent on the platform, and interaction patterns.
              </li>
              <li>
                <strong>Device and log data:</strong> IP address, browser type,
                operating system, and referring URLs.
              </li>
              <li>
                <strong>Cookies and similar technologies:</strong> we use
                cookies and similar tracking technologies to improve your
                experience. See Section 7 below.
              </li>
              <li>
                <strong>Vendor assessment data:</strong> information you provide
                about third-party vendors as part of using our assessment
                services.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-slate-900">
              3. How We Use Your Information
            </h2>
            <p className="mt-3">We use collected information to:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Provide, maintain, and improve our services.</li>
              <li>Process your requests and respond to inquiries.</li>
              <li>
                Send administrative communications, such as service updates and
                security alerts.
              </li>
              <li>
                Analyse usage trends to improve the platform experience.
              </li>
              <li>Comply with legal obligations and enforce our terms.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-slate-900">
              4. How We Share Your Information
            </h2>
            <p className="mt-3">
              We do not sell your personal information. We may share information
              with:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>
                <strong>Service providers:</strong> trusted third parties who
                assist us in operating our platform (hosting, analytics,
                email delivery).
              </li>
              <li>
                <strong>Legal requirements:</strong> when required by law,
                regulation, or legal process.
              </li>
              <li>
                <strong>Business transfers:</strong> in connection with a
                merger, acquisition, or sale of assets.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-slate-900">
              5. Data Security
            </h2>
            <p className="mt-3">
              We implement appropriate technical and organisational measures to
              protect your personal information against unauthorised access,
              alteration, disclosure, or destruction. However, no method of
              transmission over the Internet is 100% secure, and we cannot
              guarantee absolute security.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-slate-900">
              6. Data Retention
            </h2>
            <p className="mt-3">
              We retain your personal information for as long as your account is
              active or as needed to provide you services. We will retain and
              use your information as necessary to comply with legal
              obligations, resolve disputes, and enforce our agreements.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-slate-900">
              7. Cookies
            </h2>
            <p className="mt-3">
              We use cookies and similar tracking technologies to track activity
              on our website and hold certain information. You can instruct
              your browser to refuse all cookies or to indicate when a cookie
              is being sent. If you do not accept cookies, you may not be able
              to use some parts of our service.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-slate-900">
              8. Your Rights
            </h2>
            <p className="mt-3">
              Depending on your location, you may have the following rights
              regarding your personal data:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>
                <strong>Access:</strong> request a copy of the personal data we
                hold about you.
              </li>
              <li>
                <strong>Rectification:</strong> request correction of inaccurate
                or incomplete data.
              </li>
              <li>
                <strong>Erasure:</strong> request deletion of your personal
                data, subject to legal obligations.
              </li>
              <li>
                <strong>Portability:</strong> request a machine-readable copy of
                your data.
              </li>
              <li>
                <strong>Objection:</strong> object to certain processing of
                your data.
              </li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, contact us at{" "}
              <a
                href="mailto:support@checkfirst.io"
                className="text-brand-700 underline hover:text-brand-800"
              >
                support@checkfirst.io
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-slate-900">
              9. Third-Party Links
            </h2>
            <p className="mt-3">
              Our website may contain links to third-party websites. We are not
              responsible for the privacy practices or content of those sites.
              We encourage you to review the privacy policy of every site you
              visit.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-slate-900">
              10. Children&apos;s Privacy
            </h2>
            <p className="mt-3">
              Our services are not directed to individuals under the age of 16.
              We do not knowingly collect personal information from children. If
              we become aware that we have collected data from a child without
              parental consent, we will take steps to delete that information.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-slate-900">
              11. Changes to This Policy
            </h2>
            <p className="mt-3">
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by posting the new policy on this page
              and updating the &ldquo;Last updated&rdquo; date. Your continued
              use of the service after any changes constitutes acceptance of the
              updated policy.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-slate-900">
              12. Contact Us
            </h2>
            <p className="mt-3">
              If you have any questions about this Privacy Policy, please
              contact us at{" "}
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
