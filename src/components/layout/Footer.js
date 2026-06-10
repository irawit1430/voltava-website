import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import styles from "./Footer.module.css";
import logo from "@/assets/voltava-logo.png";

const footerLinks = {
  Products: [
    { label: "Smart BMS", href: "/products/72v-120a-smart-bms" },
    { label: "Telematics Unit", href: "/products/battery-telematics-unit" },
    { label: "DC Fast Charger", href: "/products/dc-fast-chargers" },
    { label: "ESS Electronics", href: "/products/48v-ess-smart-bms" },
    { label: "EMS Controller", href: "/products/ems-controller" },
    { label: "View All Products", href: "/products" },
  ],
  Solutions: [
    { label: "EV Battery Solutions", href: "/solutions" },
    { label: "Fleet Management", href: "/solutions" },
    { label: "Energy Storage", href: "/solutions" },
    { label: "Charging Solutions", href: "/solutions" },
    { label: "Custom Solutions", href: "/solutions" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "News & Media", href: "/blog" },
    { label: "Contact Us", href: "/contact" },
  ],
  Resources: [
    { label: "Blog", href: "/blog" },
    { label: "Case Studies", href: "/blog" },
    { label: "Support", href: "/contact" },
  ],
};

const socialLinks = [
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23 9.71a8.5 8.5 0 00-.91-4.13 2.92 2.92 0 00-1.72-1A78.36 78.36 0 0012 4.27a78.45 78.45 0 00-8.34.3 2.87 2.87 0 00-1.46.74c-.9.83-1 2.25-1.1 3.45a48.29 48.29 0 000 6.48 9.55 9.55 0 00.3 2 3.14 3.14 0 00.71 1.36 2.86 2.86 0 001.49.78 45.18 45.18 0 006.5.33c3.5.05 6.57 0 10.2-.46a2.86 2.86 0 001.49-.78 2.93 2.93 0 00.7-1.33 8.38 8.38 0 00.56-3.88 8 8 0 000-.67zM9.74 14.85V8.66l5.92 3.11c-1.66.92-3.85 1.96-5.92 3.08z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Top */}
        <div className={styles.top}>
          {/* Brand Column */}
          <div className={styles.brand}>
            <Image src={logo} alt="Voltava Energy Systems" width={150} height={42} />
            <p className={styles.brandDesc}>
              Designing and manufacturing intelligent energy electronics for
              electrification, energy storage and renewable future.
            </p>
            <div className={styles.socials}>
              {socialLinks.map((s) => (
                <a key={s.label} href={s.href} className={styles.socialIcon} aria-label={s.label} target="_blank" rel="noopener noreferrer">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className={styles.linkCol}>
              <h4 className={styles.colTitle}>{title}</h4>
              <ul>
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className={styles.footerLink}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Column */}
          <div className={styles.linkCol}>
            <h4 className={styles.colTitle}>Contact Us</h4>
            <ul className={styles.contactList}>
              <li>
                <span className={styles.contactIcon}><Phone size={16} /></span>
                <a href="tel:+919217667723">+91 921766 7723</a>
              </li>
              <li>
                <span className={styles.contactIcon}><Mail size={16} /></span>
                <a href="mailto:gaurav@voltava.in">gaurav@voltava.in</a>
              </li>
              <li>
                <span className={styles.contactIcon}><MapPin size={16} /></span>
                <span>Delhi NCR, India 110070</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className={styles.divider} />

        {/* Bottom */}
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Voltava Energy Systems Pvt. Ltd. All Rights Reserved.
          </p>
          <div className={styles.legal}>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
