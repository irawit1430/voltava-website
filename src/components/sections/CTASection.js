"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import styles from "./CTASection.module.css";

export default function CTASection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className={styles.section} ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.banner}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className={styles.bgPattern} />
          <div className={styles.content}>
            <div className={styles.text}>
              <h2 className={styles.title}>
                Let&apos;s Build a Smarter Energy Future Together
              </h2>
              <p className={styles.desc}>
                Partner with Voltava for reliable, intelligent and future-ready
                energy solutions. From concept to production — we engineer it all.
              </p>
            </div>
            <Link href="/contact" className={styles.btn}>
              Get in Touch
              <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
