"use client";

import { motion } from "framer-motion";
import { FileText, ArrowRight } from "lucide-react";
import styles from "./blog.module.css";

const articles = [
  { category: "Technology", title: "Understanding Active vs Passive Balancing in BMS", excerpt: "A deep dive into battery balancing technologies and their impact on performance, cycle life and total cost of ownership in commercial applications.", date: "May 10, 2024", readTime: "8 min", color: "#22C55E" },
  { category: "Industry", title: "Why Smart BMS is Critical for Indian EV Fleets", excerpt: "How intelligent battery management improves uptime, safety and total cost of ownership for fleet operators across India.", date: "Apr 28, 2024", readTime: "6 min", color: "#3B82F6" },
  { category: "Company", title: "Voltava Expands Manufacturing Facility in NCR", excerpt: "New 20,000 sq ft expansion to meet growing demand for smart energy electronics across India and Southeast Asia.", date: "Apr 15, 2024", readTime: "4 min", color: "#F59E0B" },
  { category: "Technology", title: "SOC Estimation: Kalman Filter vs Neural Networks", excerpt: "Comparing state-of-charge estimation approaches and their real-world accuracy in Indian driving conditions.", date: "Mar 20, 2024", readTime: "10 min", color: "#22C55E" },
  { category: "Industry", title: "The Future of DC Fast Charging in India", excerpt: "An analysis of charging infrastructure growth, OCPP standards and the role of smart charging electronics.", date: "Mar 5, 2024", readTime: "7 min", color: "#3B82F6" },
  { category: "Technology", title: "CAN Bus Communication in Modern BMS Design", excerpt: "How CAN 2.0B and CAN FD enable reliable vehicle integration and fleet-level data exchange in battery management.", date: "Feb 18, 2024", readTime: "9 min", color: "#22C55E" },
];

export default function BlogPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroGlow} />
        <div className={styles.container}>
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className={styles.supertitle}><span className={styles.bar} />Blog & Insights</span>
            <h1 className={styles.heroTitle}>Knowledge. Innovation. <span className={styles.hl}>Impact.</span></h1>
            <p className={styles.heroDesc}>Technical articles, industry analysis and company updates from the Voltava engineering team.</p>
          </motion.div>
        </div>
      </section>

      <section className={styles.gridSection}>
        <div className={styles.container}>
          <div style={{ textAlign: "center", padding: "100px 0", background: "var(--bg-card)", borderRadius: "var(--radius-lg)", border: "1px solid var(--border-subtle)" }}>
            <h2 style={{ fontSize: "2rem", fontFamily: "var(--font-display)", fontWeight: "700", color: "var(--text-primary)", marginBottom: "16px" }}>Coming Soon</h2>
            <p style={{ color: "var(--text-secondary)", maxWidth: "500px", margin: "0 auto", lineHeight: "1.6" }}>
              We are working on exciting insights and articles about battery management systems and the future of energy electronics. Stay tuned!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
