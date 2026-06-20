import Seo from "../components/Seo";

const META = [
  { label: "Effective Date", value: "June 11, 2026" },
  {
    label: "Applicability",
    value:
      "All users, visitors, and property seekers accessing www.mirabhayandarproperty.com",
  },
  {
    label: "Governing Law",
    value:
      "Information Technology Act, 2000 (India) & applicable Digital Personal Data Protection laws",
  },
];

const DATA_SHARING_ROWS = [
  {
    recipient: "Third-Party Real Estate Vendors",
    purpose:
      "Enables specialized agents, property developers, and field brokers to pitch relevant residential or commercial units.",
    vector: "Voice Calls, SMS, WhatsApp, and Emails.",
  },
  {
    recipient: "Analytics Providers",
    purpose:
      "Aggregated, non-personally identifiable behavioral metrics (e.g., via Google Analytics) to improve web infrastructure.",
    vector: "Digital Dashboard Telemetry.",
  },
  {
    recipient: "Law Enforcement / Legal Bodies",
    purpose:
      "Mandatory disclosures enforced under the Information Technology Act, 2000, or judicial warrants.",
    vector: "Formal Legal Transcripts.",
  },
];

const sectionHeading =
  "mb-4 font-sans text-xl font-semibold text-navy md:text-2xl";
const bodyText =
  "font-sans text-base leading-[1.75] text-navy/80 md:text-[17px]";
const listClass = `${bodyText} list-disc space-y-2 pl-6`;

export default function Privacy() {
  return (
    <>
      <Seo
        title="Privacy Policy"
        description="Privacy Policy for www.mirabhayandarproperty.com — how we collect, use, store, and share your personal data on our Mira Bhayandar real estate listing platform."
        canonical="/privacy"
      />

      <div className="min-h-full bg-[#fdfbf7] text-navy">
        <section
          className="bg-navy-gradient noise-overlay relative border-b border-white/10"
          aria-labelledby="privacy-page-heading"
        >
          <div className="relative z-[2] mx-auto max-w-7xl px-4 pb-12 pt-[calc(5.5rem+env(safe-area-inset-top,0px))] text-center sm:px-6 sm:pb-14 sm:pt-28 md:pb-16 md:pt-32 lg:px-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">
              Legal
            </p>
            <h1
              id="privacy-page-heading"
              className="mb-4 text-4xl font-normal tracking-tight text-gradient-gold md:text-5xl lg:text-6xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Privacy Policy
            </h1>
            <p className="mx-auto max-w-2xl text-sm leading-relaxed text-white/55 md:text-base">
              www.mirabhayandarproperty.com — Real Estate Listing Platform
            </p>
          </div>
        </section>

        <article className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
          <dl className="mb-10 grid gap-4 rounded-2xl border border-navy/10 bg-white p-5 shadow-sm sm:grid-cols-3 sm:gap-5 sm:p-6">
            {META.map(({ label, value }) => (
              <div key={label}>
                <dt className="mb-1 text-xs font-semibold uppercase tracking-[0.14em] text-gold-ink">
                  {label}
                </dt>
                <dd className="text-sm leading-relaxed text-navy/80">{value}</dd>
              </div>
            ))}
          </dl>

          <div className={`${bodyText} space-y-5`}>
            <p>
              Welcome to www.mirabhayandarproperty.com (&quot;Website&quot;, &quot;we&quot;,
              &quot;our&quot;, or &quot;us&quot;). We operate as a basic property listing platform
              dedicated to connecting property seekers, owners, landlords, and agents within the
              Mira Bhayander Metropolitan Region and surrounding areas. We respect your privacy and
              are committed to protecting the personal data you share with us.
            </p>
            <p>
              This Privacy Policy outlines how we collect, use, process, store, and share your
              information when you visit our website, use our inquiry forms, or interact with our
              digital property listing ecosystem. By accessing or using the Website, you explicitly
              consent to the data practices described in this policy.
            </p>
          </div>

          <section className="mt-12" aria-labelledby="privacy-s1">
            <h2 id="privacy-s1" className={sectionHeading}>
              1. Information We Collect
            </h2>
            <p className={`${bodyText} mb-5`}>
              We collect information that you voluntarily provide to us, as well as digital
              footprints gathered automatedly through your interaction with our infrastructure.
            </p>

            <h3 className="mb-3 font-sans text-lg font-semibold text-navy">
              A. Voluntary User-Provided Data
            </h3>
            <p className={`${bodyText} mb-4`}>
              When you fill out contact forms, request information regarding a specific property
              listing, or submit a callback request, we collect:
            </p>
            <ul className={`${listClass} mb-8`}>
              <li>
                <strong>Full Name:</strong> To address you accurately and maintain identity logs.
              </li>
              <li>
                <strong>Contact Number (Mobile/Telephone):</strong> To facilitate direct telephonic
                communication, text messages, or instant messaging alerts (e.g., WhatsApp) regarding
                your real estate requirements.
              </li>
              <li>
                <strong>Custom Message Text Box Data:</strong> Any additional specific inquiries,
                parameters, specifications, or personal details you voluntarily provide in
                free-text form inputs.
              </li>
            </ul>

            <h3 className="mb-3 font-sans text-lg font-semibold text-navy">
              B. Automated Analytics and Tracking Data
            </h3>
            <p className={`${bodyText} mb-4`}>
              To optimize our website delivery, ensure server security, and analyze demographic
              behavior, we collect automated diagnostic logs, including but not limited to:
            </p>
            <ul className={listClass}>
              <li>
                Internet Protocol (IP) addresses, browser type, and operating system variants.
              </li>
              <li>
                Referral URLs, exit pages, clickstream data, timestamps, and active browsing
                duration.
              </li>
              <li>
                Device telemetry, geolocation data (city-level or region-level based on ISP), and
                navigational paths within the listing platform.
              </li>
            </ul>
          </section>

          <section className="mt-12" aria-labelledby="privacy-s2">
            <h2 id="privacy-s2" className={sectionHeading}>
              2. How We Use Your Data
            </h2>
            <p className={`${bodyText} mb-4`}>
              We process the gathered datasets strictly for real-estate operation-related workflows,
              including:
            </p>
            <ul className={`${listClass} mb-6`}>
              <li>
                Displaying tailored property listings, commercial inventories, and residential
                project availability.
              </li>
              <li>Answering explicit information requests made via contact forms.</li>
              <li>
                Diagnosing server latency, auditing software compatibility, and tracking overall
                traffic velocity.
              </li>
              <li>
                Enforcing our structural Terms of Service and identifying fraudulent, malicious, or
                scraping behaviors.
              </li>
            </ul>
            <div className="rounded-xl border border-gold/30 bg-gold/5 p-5 md:p-6">
              <p className={`${bodyText} font-semibold text-navy`}>
                Crucial Notice Regarding Third-Party Commercial Outreach:
              </p>
              <p className={`${bodyText} mt-3`}>
                Because www.mirabhayandarproperty.com functions as an introductory real-estate
                portal, the personal metrics you supply (Name, Number, and Specific Messages) will
                be shared with verified third-party vendors, real estate developers, brokers,
                financial lending agencies, and allied service providers. This sharing enables them
                to reach out directly to you via voice calls, SMS, electronic mails, or instant
                messages with tailored property pitches, quotes, and market inventories matching
                your stated parameters.
              </p>
            </div>
          </section>

          <section className="mt-12" aria-labelledby="privacy-s3">
            <h2 id="privacy-s3" className={sectionHeading}>
              3. Data Sharing and Third-Party Disclosures
            </h2>
            <p className={`${bodyText} mb-6`}>
              We do not sell your personal information to generalized broad-market data brokers.
              However, your data is shared under the following structured operational protocols:
            </p>

            <div className="overflow-x-auto rounded-xl border border-navy/10 bg-white shadow-sm">
              <table className="min-w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-navy/10 bg-navy/[0.03]">
                    <th className="px-4 py-3 font-semibold text-navy sm:px-5">
                      Recipient Category
                    </th>
                    <th className="px-4 py-3 font-semibold text-navy sm:px-5">
                      Purpose of Disclosure
                    </th>
                    <th className="px-4 py-3 font-semibold text-navy sm:px-5">
                      Communication Vector
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {DATA_SHARING_ROWS.map((row) => (
                    <tr key={row.recipient} className="border-b border-navy/8 last:border-0">
                      <td className="px-4 py-4 align-top font-medium text-navy sm:px-5">
                        {row.recipient}
                      </td>
                      <td className="px-4 py-4 align-top text-navy/80 sm:px-5">{row.purpose}</td>
                      <td className="px-4 py-4 align-top text-navy/80 sm:px-5">{row.vector}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mt-12" aria-labelledby="privacy-s4">
            <h2 id="privacy-s4" className={sectionHeading}>
              4. Cookies and Analytical Trackers
            </h2>
            <p className={`${bodyText} mb-4`}>
              Our website utilizes standard HTTP cookies, tracking pixels, and local storage
              mechanisms to persist session parameters and cache assets efficiently. Cookies help
              minimize load times and log returning user configurations.
            </p>
            <p className={bodyText}>
              You retain complete agency over cookies through your localized web browser
              configurations; however, disabling cookies may impair specific interactive querying
              features on our listing architecture.
            </p>
          </section>

          <section className="mt-12" aria-labelledby="privacy-s5">
            <h2 id="privacy-s5" className={sectionHeading}>
              5. Data Retention Protocols
            </h2>
            <p className={bodyText}>
              We retain your user-provided metadata and contact details for as long as necessary to
              fulfill the real-estate matchmaking lifecycle for which it was originally collected,
              or to maintain operational business historical records, resolve disputes, and achieve
              compliance with statutory preservation laws. Non-personally identifiable analytical
              logs are kept on an automated, rolling truncation cycle.
            </p>
          </section>

          <section className="mt-12" aria-labelledby="privacy-s6">
            <h2 id="privacy-s6" className={sectionHeading}>
              6. User Sovereignty and Data Rights
            </h2>
            <p className={`${bodyText} mb-4`}>
              Depending on your legal residence, you are entitled to specific regulatory protections
              regarding your personal data. You possess the following fundamental rights:
            </p>
            <ul className={listClass}>
              <li>
                <strong>Right to Rectification:</strong> Request corrections to erroneous or
                mistyped contact numbers or naming fields.
              </li>
              <li>
                <strong>Right to Erasure / De-listing:</strong> Request the deletion of your personal
                records from our active lead routing servers. Note that once data is securely
                transferred to independent third-party vendors, erasure requests must be addressed
                directly to those specific entities.
              </li>
              <li>
                <strong>Right to Opt-Out:</strong> Withdraw consent for prospective outreach
                marketing cycles at any point.
              </li>
            </ul>
          </section>

          <section className="mt-12" aria-labelledby="privacy-s7">
            <h2 id="privacy-s7" className={sectionHeading}>
              7. Information Security Infrastructures
            </h2>
            <p className={bodyText}>
              We implement standard procedural and digital security controls (including Hypertext
              Transfer Protocol Secure [HTTPS] transmission encryption) to shield your records
              against unauthorized access, destruction, or alterations. However, please be advised
              that no network routing or electronic storage setup can guarantee absolute, infallible
              protection.
            </p>
          </section>

          <section className="mt-12" aria-labelledby="privacy-s8">
            <h2 id="privacy-s8" className={sectionHeading}>
              8. Updates to This Privacy Policy
            </h2>
            <p className={bodyText}>
              We reserve the right to amend, alter, or update this policy draft dynamically to
              reflect revisions in operational models, regional real-estate regulations, or updated
              legislative mandates. Any changes will be publicized immediately on this URL with an
              updated &quot;Effective Date&quot; stamp.
            </p>
          </section>

          <section
            className="mt-12 rounded-2xl border border-navy/10 bg-white p-6 shadow-sm md:p-8"
            aria-labelledby="privacy-s9"
          >
            <h2 id="privacy-s9" className={sectionHeading}>
              9. Contact and Grievance Redressal
            </h2>
            <p className={`${bodyText} mb-5`}>
              If you have questions, feedback, or grievance claims concerning data handling, cookie
              storage, or third-party transfer procedures on www.mirabhayandarproperty.com, please
              reach out to our administration at:
            </p>
            <p className={bodyText}>
              <strong>Contact Number:</strong>{" "}
              <a
                href="tel:+919372769619"
                className="text-gold-ink underline decoration-gold/40 underline-offset-2 transition-colors hover:text-gold"
              >
                +91 9372769619
              </a>
            </p>
            <p className={`${bodyText} mt-2`}>
              <strong>Attention:</strong> Privacy &amp; Grievance Desk
            </p>
          </section>
        </article>
      </div>
    </>
  );
}
