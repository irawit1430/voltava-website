"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { Check } from "lucide-react";
import styles from "./WhyVoltavaSection.module.css";

const bulletPoints = [
  "In-house R&D and product development",
  "Designed for extreme Indian conditions",
  "Advanced testing and validation",
  "Scalable manufacturing & quality control",
  "Cloud platform and mobile applications",
];

const stats = [
  { value: 50, suffix: "+", label: "Product Models Developed" },
  { value: 25, suffix: "+", label: "OEM & Fleet Partners" },
  { value: 100, suffix: "K+", label: "Units Deployed Across India" },
  { value: 10, suffix: "+", label: "Patents (Filed)" },
  { value: 10, suffix: "+", label: "Years of Team Experience" },
  { value: 1, suffix: "", label: "Mission – Smarter Energy Future" },
];

function AnimatedCounter({ target, suffix, inView }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span className={styles.statValue}>
      {count}
      {suffix}
    </span>
  );
}

export default function WhyVoltavaSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className={styles.section} ref={ref} id="why-voltava">
      <div className={styles.container}>
        {/* Left */}
        <motion.div
          className={styles.left}
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className={styles.supertitle}>
            <span className={styles.bar} />
            Why Voltava
          </span>
          <h2 className={styles.title}>
            Engineering Excellence. <br />
            <span className={styles.highlight}>Indian at Heart.</span>
          </h2>
          <p className={styles.desc}>
            Voltava combines deep electronics expertise with real-world
            understanding of Indian conditions to build products that are
            reliable, intelligent and future-ready.
          </p>

          <ul className={styles.bullets}>
            {bulletPoints.map((point, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
              >
                <span className={styles.check}><Check size={16} strokeWidth={3} /></span>
                {point}
              </motion.li>
            ))}
          </ul>

          <Link href="/about" className={styles.btnOutline}>
            Know More About Us
            <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </motion.div>

        {/* Right — Stats */}
        <motion.div
          className={styles.right}
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.statsGrid}>
            {stats.map((stat, i) => (
              <div key={i} className={styles.statCard}>
                <AnimatedCounter target={stat.value} suffix={stat.suffix} inView={inView} />
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
