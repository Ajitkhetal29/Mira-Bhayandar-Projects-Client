import { Link } from "react-router-dom";
import { useScrollToSiteContact } from "../hooks/useScrollToSiteContact";

const DISCLAIMER =
  "Disclaimer: This website is for informational purposes only. All images are artistic impressions. Prices mentioned are subject to change. RERA registration details available for each project. Please verify all details independently before making purchase decisions.";

function IconFacebook({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" width="18" height="18" aria-hidden>
      <path
        fill="currentColor"
        d="M14 13.5h2.5l1-3H14v-1.5c0-.86.42-1.5 1.5-1.5H17V4.5h-2.5c-2.5 0-4 1.49-4 4v2h-2v3h2V22h3v-8.5z"
      />
    </svg>
  );
}

function IconInstagram({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" width="18" height="18" aria-hidden>
      <path
        fill="currentColor"
        d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"
      />
    </svg>
  );
}

function IconYouTube({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" width="18" height="18" aria-hidden>
      <path
        fill="currentColor"
        d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.95.3-2.79.44-5.53.44H9.7c-2.74 0-4.58-.14-5.53-.44-.9-.25-1.48-.83-1.73-1.73C2.16 15.8 2 14.19 2 12s.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73C5.12 4.14 6.96 4 9.7 4h4.6c2.74 0 4.58.14 5.53.44.9.25 1.48.83 1.73 1.73z"
      />
    </svg>
  );
}

function IconLinkedIn({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" width="18" height="18" aria-hidden>
      <path
        fill="currentColor"
        d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"
      />
    </svg>
  );
}

const SOCIALS = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61564796387780",
    Icon: IconFacebook,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/mira_bhayandar_projects",
    Icon: IconInstagram,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@mirabhayandarprojectshub",
    Icon: IconYouTube,
  },
  { label: "LinkedIn", href: "https://linkedin.com", Icon: IconLinkedIn },
];

const colHeading =
  "mb-6 font-sans text-sm font-bold uppercase tracking-[0.16em] text-gold sm:text-[15px] md:text-base";

const linkClass =
  "font-sans text-base leading-snug text-white/80 transition-colors hover:text-gold sm:text-[17px] sm:leading-relaxed";

/** Gold rule animates L → R on hover */
const footerNavLinkClass = `${linkClass} relative inline-block w-fit max-w-full bg-transparent pb-[3px] after:pointer-events-none after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-gold after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100 focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold/40`;

export function Footer() {
  const onContactClick = useScrollToSiteContact();

  return (
    <footer className="relative z-10 bg-[#050a18] text-white/80">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="grid grid-cols-1 gap-14 sm:gap-16 lg:grid-cols-12 lg:gap-x-16 lg:gap-y-0 xl:gap-x-24">
          {/* Brand — wider column */}
          <div className="max-w-md lg:col-span-8 lg:max-w-none">
            <Link to="/" className="inline-block">
              <img
                src="/logo.png"
                alt="MiraBhayandar"
                className="h-12 w-auto sm:h-[3.25rem]"
                draggable={false}
              />
            </Link>
            <p className="mt-3 font-sans text-base leading-[1.7] text-white/75 sm:text-lg sm:leading-[1.65] md:text-[1.125rem] md:leading-relaxed ">
              And That's Mira Bhayandar Property For You.
              <br />
              Designed for the new generation of homebuyers, where every project is curated, every
              detail matters, and every click brings you closer to your future home.
              <br />
              Browse projects the way you shop online:
              <br />
              <span className="font-bold text-gold">Compare</span>.{" "}
              <span className="font-bold text-gold">Shortlist</span>.{" "}
              <span className="font-bold text-gold">Explore</span>.{" "}
              <span className="font-bold text-gold">Connect</span>.
              
              <br />
              Because we've been the trusted bridge between families and their dream homes in
              Mira Bhayandar for a reason, and that trust is something we never take for granted.
            </p>
            <ul className="mt-9 flex flex-wrap gap-3.5" aria-label="Social media">
              {SOCIALS.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/28 bg-transparent text-white/55 transition-all duration-200 hover:border-gold hover:bg-gold/12 hover:text-gold"
                  >
                    <Icon className="h-5 w-5 transition-colors group-hover:text-gold" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links — narrow, clear gutter */}
          <div className="lg:col-span-4 lg:pl-2">
            <h3 className={colHeading}>Quick links</h3>
            <ul className="flex flex-col gap-5">
              <li>
                <Link to="/" className={footerNavLinkClass}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/projects" className={footerNavLinkClass}>
                  All Projects
                </Link>
              </li>
              <li>
                <Link to="/blogs" className={footerNavLinkClass}>
                  All Blogs
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onContactClick}
                  className={`${footerNavLinkClass} border-0 p-0 text-left`}
                >
                  Contact Us
                </button>
              </li>
              <li>
                <Link to="/privacy" className={footerNavLinkClass}>
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/[0.07]">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-6 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:px-10 lg:py-7">
          <p className="shrink-0 font-sans text-sm text-white/52 sm:text-[15px]">
            © {new Date().getFullYear()} MiraBhayandar. All rights reserved.
          </p>
          <p className="line-clamp-2 max-w-none font-sans text-[11px] leading-snug text-white/48 sm:text-xs sm:leading-snug lg:max-w-[58%] lg:text-right lg:text-[13px] lg:leading-snug">
            {DISCLAIMER}
          </p>
        </div>
      </div>
    </footer>
  );
}
