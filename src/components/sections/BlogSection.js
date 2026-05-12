"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import styles from "./BlogSection.module.css";

const blogs = [
  {
    category: "Technology",
    title: "Understanding Active vs Passive Balancing in BMS",
    excerpt:
      "A deep dive into battery balancing technologies and their impact on performance and life.",
    date: "May 10, 2024",
    color: "#22C55E",
  },
  {
    category: "Industry",
    title: "Why Smart BMS is Critical for Indian EV Fleets",
    excerpt:
      "How intelligent battery management improves uptime, safety and total cost of ownership.",
    date: "Apr 28, 2024",
    color: "#3B82F6",
  },
  {
    category: "Company",
    title: "Voltava Expands Manufacturing Facility in NCR",
    excerpt:
      "New expansion to meet growing demand for smart energy electronics across India.",
    date: "Apr 15, 2024",
    color: "#F59E0B",
  },
];

export default function BlogSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className={styles.section} ref={ref} id="blog">
      <div className={styles.container}>
        <div className={styles.header}>
          <div>
            <span className={styles.supertitle}>
              <span className={styles.bar} />
              Latest Insights
            </span>
            <h2 className={styles.title}>Knowledge. Innovation. Impact.</h2>
          </div>
          <Link href="/blog" className={styles.viewAll}>
            View All Blogs
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        <div className={styles.grid} style={{ display: 'block' }}>
          <div style={{ textAlign: "center", padding: "80px 0", background: "var(--bg-card)", borderRadius: "var(--radius-lg)", border: "1px solid var(--border-subtle)" }}>
            <h3 style={{ fontSize: "1.8rem", fontFamily: "var(--font-display)", fontWeight: "700", color: "var(--text-primary)", marginBottom: "12px" }}>Coming Soon</h3>
            <p style={{ color: "var(--text-secondary)", maxWidth: "450px", margin: "0 auto", lineHeight: "1.6" }}>
              Our engineering team is preparing deep dives into smart BMS, fleet telematics, and energy storage electronics. Check back soon for updates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
