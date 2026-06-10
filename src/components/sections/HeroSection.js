"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./HeroSection.module.css";
import { MapPin, Brain, Shield, Radio } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import heroBg from "@/assets/hero-bg.png";

const features = [
  { icon: <MapPin size={20} />, text: "India Designed & Manufactured" },
  { icon: <Brain size={20} />, text: "Advanced Battery Intelligence" },
  { icon: <Shield size={20} />, text: "Rugged & Reliable" },
  { icon: <Radio size={20} />, text: "Connected & Future Ready" },
];

export default function HeroSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className={styles.hero} ref={ref}>
      {/* Background Image */}
      <div className={styles.bgImageContainer}>
        <Image
          src={heroBg}
          alt="Voltava Background"
          fill
          priority
          style={{ objectFit: "cover", opacity: 0.15 }}
        />
      </div>
      <div className={styles.gridOverlay} />

      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >


          <h1 className={styles.headline}>
            Intelligence That Powers{" "}
            <span className={styles.highlight}>Electrification</span>
          </h1>

          <p className={styles.subheadline}>
            Smart energy electronics for EV, charging and ESS. We design and
            manufacture battery management systems, charging infrastructure, and
            energy storage electronics for India and beyond.
          </p>

          <div className={styles.actions}>
            <Link href="/products" className={styles.btnPrimary}>
              Explore Products
              <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link href="/contact" className={styles.btnOutline}>
              Talk to Our Team
              <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </motion.div>

        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.dashboardMock}>
            <div className={styles.dashHeader}>
              <span className={styles.dashDot} style={{ background: "#EF4444" }} />
              <span className={styles.dashDot} style={{ background: "#F59E0B" }} />
              <span className={styles.dashDot} style={{ background: "#22C55E" }} />
              <span className={styles.dashTitle}>Voltava Smart BMS Dashboard</span>
            </div>
            <div className={styles.dashBody}>
              <div className={styles.dashGrid}>
                <div className={styles.dashStat}>
                  <span className={styles.statLabel}>Pack Voltage</span>
                  <span className={styles.statValue}>72.6<small>V</small></span>
                </div>
                <div className={styles.dashStat}>
                  <span className={styles.statLabel}>SOC</span>
                  <span className={styles.statValue}>85<small>%</small></span>
                </div>
                <div className={styles.dashStat}>
                  <span className={styles.statLabel}>Temperature</span>
                  <span className={styles.statValue}>28<small>°C</small></span>
                </div>
                <div className={styles.dashStat}>
                  <span className={styles.statLabel}>Current</span>
                  <span className={styles.statValue}>-82<small>A</small></span>
                </div>
              </div>
              <div className={styles.cellGrid}>
                {[78, 69, 82, 63, 91, 74, 85, 66, 93, 72, 87, 60, 95, 71, 80, 68, 88, 76, 64, 90].map((h, i) => (
                  <div
                    key={i}
                    className={styles.cell}
                    style={{
                      height: `${h}%`,
                      animationDelay: `${Math.round(i * 0.1 * 10) / 10}s`,
                    }}
                  />
                ))}
              </div>
              <span className={styles.cellLabel}>Cell Voltages — Active Balancing</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Feature Strip */}
      <motion.div
        className={styles.featureStrip}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        <div className={styles.container}>
          <div className={styles.features}>
            {features.map((f, i) => (
              <div key={i} className={styles.featureItem}>
                <span className={styles.featureIcon}>{f.icon}</span>
                <span className={styles.featureText}>{f.text}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
