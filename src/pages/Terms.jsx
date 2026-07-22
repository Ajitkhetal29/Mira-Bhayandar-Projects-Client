import { Link } from "react-router-dom";
import Seo from "../components/Seo";

const META = [
  { label: "Last Updated", value: "July 2026" },
  {
    label: "Applicability",
    value:
      "All users and visitors accessing www.mirabhayandarproperty.com",
  },
  {
    label: "Governing Law",
    value: "Laws of India — courts of Thane / Mumbai, Maharashtra",
  },
];

const LIABILITY_ITEMS = [
  "Any inaccuracy, omission, or delay in property listings, pricing, or floor plans.",
  "Decisions made or transactions executed based on information retrieved from this Website.",
  "Misrepresentation or breach of contract committed by third-party developers or builders.",
  "Technical glitches, server outages, malware, or unauthorized access to user data beyond reasonable control.",
];

const PROHIBITED_CONDUCT = [
  "Submit false, misleading, fraudulent, or impersonated contact information.",
  "Use automated scrapers, bots, web spiders, or data mining tools to extract property data.",
  "Attempt to disrupt or breach the Website's cybersecurity, server integrity, or underlying code.",
  "Use the Website for unlawful purposes or activities violating Indian laws or local municipal regulations.",
];

const sectionHeading =
  "mb-4 font-sans text-xl font-semibold text-navy md:text-2xl";
const bodyText =
  "font-sans text-base leading-[1.75] text-navy/80 md:text-[17px]";
const listClass = `${bodyText} list-disc space-y-2 pl-6`;

export default function Terms() {
  return (
    <>
      <Seo
        title="Terms and Conditions"
        description="Terms and Conditions for www.mirabhayandarproperty.com — rules governing use of our Mira Bhayandar real estate discovery and lead generation platform."
        canonical="/terms"
      />

      <div className="min-h-full bg-[#fdfbf7] text-navy">
        <section
          className="bg-navy-gradient noise-overlay relative border-b border-white/10"
          aria-labelledby="terms-page-heading"
        >
          <div className="relative z-[2] mx-auto max-w-7xl px-4 pb-12 pt-[calc(5.5rem+env(safe-area-inset-top,0px))] text-center sm:px-6 sm:pb-14 sm:pt-28 md:pb-16 md:pt-32 lg:px-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">
              Legal
            </p>
            <h1
              id="terms-page-heading"
              className="mb-4 text-4xl font-normal tracking-tight text-gradient-gold md:text-5xl lg:text-6xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Terms and Conditions
            </h1>
            <p className="mx-auto max-w-2xl text-sm leading-relaxed text-white/55 md:text-base">
              www.mirabhayandarproperty.com — Real Estate Discovery Platform
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
              Welcome to MiraBhayandarProperty.com (&quot;Website&quot;, &quot;Platform&quot;,
              &quot;We&quot;, &quot;Us&quot;, or &quot;Our&quot;). By accessing, browsing, or using
              this Website, you (&quot;User&quot;, &quot;Visitor&quot;, &quot;You&quot;) agree to be
              bound by the following Terms and Conditions, along with our{" "}
              <Link
                to="/privacy"
                className="text-gold-ink underline decoration-gold/40 underline-offset-2 transition-colors hover:text-gold"
              >
                Privacy Policy
              </Link>
              . If you do not agree with any part of these terms, please refrain from using our
              Website.
            </p>
          </div>

          <section className="mt-12" aria-labelledby="terms-s1">
            <h2 id="terms-s1" className={sectionHeading}>
              1. Scope of Services &amp; Website Nature
            </h2>
            <ul className={listClass}>
              <li>
                <strong>Informational &amp; Aggregation Platform:</strong> MiraBhayandarProperty.com
                operates as an online real estate discovery and lead generation platform connecting
                property seekers with real estate developers, channel partners, and property
                consultants in the Mira-Bhayandar region (Maharashtra, India).
              </li>
              <li>
                <strong>Not a Developer or Direct Seller:</strong> Unless explicitly stated
                otherwise, We are not real estate developers, owners, or direct builders of the
                projects listed on the Website. We act strictly as an advisory and marketing channel
                partner.
              </li>
              <li>
                <strong>No Financial or Legal Advice:</strong> Content, price estimates, floor plans,
                financial calculations, or advisory opinions displayed on the Website are for general
                informational purposes only and do not constitute binding financial, legal, or
                investment advice.
              </li>
            </ul>
          </section>

          <section className="mt-12" aria-labelledby="terms-s2">
            <h2 id="terms-s2" className={sectionHeading}>
              2. Accuracy of Listings &amp; RERA Disclaimers
            </h2>
            <ul className={listClass}>
              <li>
                <strong>RERA Compliance:</strong> Real estate projects featured on our Website are
                subject to the Real Estate (Regulation and Development) Act, 2016 (RERA) and
                MahaRERA guidelines. RERA registration numbers displayed are provided directly by
                respective developers or pulled from official public records.
              </li>
              <li>
                <strong>Third-Party Data &amp; Dynamic Updates:</strong> Project details—including
                but not limited to prices, layout plans, amenities, carpet areas, completion
                timelines, and availability—are sourced from third-party developers and are subject
                to change without prior notice.
              </li>
              <li>
                <strong>Independent Verification:</strong> Users are strictly advised to
                independently verify all project details, MahaRERA registration certificates, legal
                titles, government sanctions, and approvals directly with the developer or official
                MahaRERA portal (
                <a
                  href="https://maharera.mahaonline.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold-ink underline decoration-gold/40 underline-offset-2 transition-colors hover:text-gold"
                >
                  maharera.mahaonline.gov.in
                </a>
                ) before making any financial commitment or executing purchase agreements.
              </li>
              <li>
                <strong>Artistic Impressions:</strong> Visual representations, floor plans, stock
                photographs, 3D renders, aerial shots, and virtual tours are artistic impressions and
                meant solely for illustrative purposes. Actual developments may differ in appearance
                and specifications.
              </li>
            </ul>
          </section>

          <section className="mt-12" aria-labelledby="terms-s3">
            <h2 id="terms-s3" className={sectionHeading}>
              3. User Inquiries, Forms &amp; Communication Consent
            </h2>
            <ul className={`${listClass} mb-6`}>
              <li>
                <strong>Submission of Details:</strong> When you submit an inquiry through our
                contact forms, direct calls, WhatsApp links, or call-to-action buttons on the
                Website, you warrant that the contact details provided (Name, Phone Number, Email)
                are accurate and belong to you.
              </li>
              <li>
                <strong>Communication Consent:</strong> By submitting an inquiry form, you
                explicitly consent to receive calls, SMS, WhatsApp messages, and email
                communications regarding property listings, site visit scheduling, price quotes, and
                promotional updates from us or our authorized real estate developer partners.
              </li>
              <li>
                <strong>TRAI / Do Not Disturb (DND) Waiver:</strong> You acknowledge and agree that
                such communication will not be considered a violation of the National Do Not Disturb
                (DND) Registry under TRAI guidelines, as it is initiated pursuant to your explicit
                inquiry request.
              </li>
            </ul>
            <div className="rounded-xl border border-gold/30 bg-gold/5 p-5 md:p-6">
              <p className={`${bodyText} font-semibold text-navy`}>
                Notice Regarding Outreach Consent
              </p>
              <p className={`${bodyText} mt-3`}>
                Inquiry submissions authorize us and our developer partners to contact you about
                matching inventory. You may withdraw marketing consent later, but verification and
                transactional follow-ups tied to your request may still apply as permitted by law.
              </p>
            </div>
          </section>

          <section className="mt-12" aria-labelledby="terms-s4">
            <h2 id="terms-s4" className={sectionHeading}>
              4. Intellectual Property Rights
            </h2>
            <ul className={listClass}>
              <li>
                <strong>Website Ownership:</strong> All original text, UI/UX designs, branding,
                domain names, custom graphics, curated articles, and layout compilations on
                MiraBhayandarProperty.com are the exclusive property of the Website owner and are
                protected under Indian copyright and intellectual property laws.
              </li>
              <li>
                <strong>Third-Party Trademarks:</strong> Builder logos, brand names, project titles,
                and trademarks displayed on this Website belong to their respective
                developers/owners and are used solely for identification and marketing purposes.
              </li>
              <li>
                <strong>Prohibited Use:</strong> You may not copy, scrape, reproduce, distribute,
                modify, frame, or commercially exploit any content from this Website without prior
                written authorization from us.
              </li>
            </ul>
          </section>

          <section className="mt-12" aria-labelledby="terms-s5">
            <h2 id="terms-s5" className={sectionHeading}>
              5. Limitation of Liability
            </h2>
            <p className={`${bodyText} mb-4`}>
              To the maximum extent permitted by applicable law under the Information Technology
              Act, 2000, and Indian Contract Act, 1872:
            </p>
            <ul className={listClass}>
              <li>
                <strong>&quot;As-Is&quot; Basis:</strong> The Website and its contents are provided
                on an &quot;as is&quot; and &quot;as available&quot; basis without warranties of any
                kind, whether express, implied, or statutory.
              </li>
              <li>
                <strong>No Liability for Financial Loss:</strong> MiraBhayandarProperty.com, its
                directors, employees, or associates shall not be liable for any direct, indirect,
                incidental, consequential, or punitive damages arising out of:
                <ul className={`${listClass} mt-3 list-[circle]`}>
                  {LIABILITY_ITEMS.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </li>
            </ul>
          </section>

          <section className="mt-12" aria-labelledby="terms-s6">
            <h2 id="terms-s6" className={sectionHeading}>
              6. Third-Party External Links
            </h2>
            <p className={bodyText}>
              Our Website may contain hyperlinks to external third-party websites, developer
              portals, map services, or social media platforms. These links are provided purely for
              convenience. We do not exercise control over, endorse, or assume responsibility for
              the content, security policies, or practices of any third-party websites.
            </p>
          </section>

          <section className="mt-12" aria-labelledby="terms-s7">
            <h2 id="terms-s7" className={sectionHeading}>
              7. Prohibited Website Conduct
            </h2>
            <p className={`${bodyText} mb-4`}>
              When utilizing MiraBhayandarProperty.com, you agree not to:
            </p>
            <ul className={listClass}>
              {PROHIBITED_CONDUCT.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="mt-12" aria-labelledby="terms-s8">
            <h2 id="terms-s8" className={sectionHeading}>
              8. Indemnification
            </h2>
            <p className={bodyText}>
              You agree to indemnify, defend, and hold harmless MiraBhayandarProperty.com, its
              proprietors, affiliates, officers, employees, and agents from and against any claims,
              losses, damages, liabilities, costs, or legal expenses (including reasonable attorney
              fees) arising from your breach of these Terms and Conditions or misuse of the
              Platform.
            </p>
          </section>

          <section className="mt-12" aria-labelledby="terms-s9">
            <h2 id="terms-s9" className={sectionHeading}>
              9. Modifications to Terms
            </h2>
            <p className={bodyText}>
              We reserve the right to revise, update, or modify these Terms and Conditions at any
              time without prior individual notice. Any modifications become effective immediately
              upon being posted on this page. Your continued use of the Website after updates
              signifies your acceptance of the revised terms.
            </p>
          </section>

          <section className="mt-12" aria-labelledby="terms-s10">
            <h2 id="terms-s10" className={sectionHeading}>
              10. Governing Law &amp; Dispute Resolution
            </h2>
            <ul className={listClass}>
              <li>
                <strong>Jurisdiction:</strong> These Terms shall be governed by, construed, and
                enforced in accordance with the laws of the Republic of India.
              </li>
              <li>
                <strong>Courts of Jurisdiction:</strong> Any disputes, claims, or legal proceedings
                arising out of or related to the use of this Website shall fall under the exclusive
                jurisdiction of the competent courts located in Thane / Mumbai, Maharashtra.
              </li>
            </ul>
          </section>

          <section
            className="mt-12 rounded-2xl border border-navy/10 bg-white p-6 shadow-sm md:p-8"
            aria-labelledby="terms-s11"
          >
            <h2 id="terms-s11" className={sectionHeading}>
              11. Contact &amp; Grievance Address
            </h2>
            <p className={`${bodyText} mb-5`}>
              If you have any questions, clarifications, or grievances regarding these Terms and
              Conditions or property listings on our site, please reach out to us:
            </p>
            <p className={bodyText}>
              <strong>Website:</strong>{" "}
              <a
                href="https://www.mirabhayandarproperty.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold-ink underline decoration-gold/40 underline-offset-2 transition-colors hover:text-gold"
              >
                https://www.mirabhayandarproperty.com/
              </a>
            </p>
            <p className={`${bodyText} mt-2`}>
              <strong>Region:</strong> Mira-Bhayandar, Maharashtra, India
            </p>
            <p className={`${bodyText} mt-2`}>
              <strong>Contact Number:</strong>{" "}
              <a
                href="tel:+919372769619"
                className="text-gold-ink underline decoration-gold/40 underline-offset-2 transition-colors hover:text-gold"
              >
                +91 9372769619
              </a>
            </p>
          </section>
        </article>
      </div>
    </>
  );
}
