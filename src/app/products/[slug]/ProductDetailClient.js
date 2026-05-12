"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Shield } from "lucide-react";
import { iconMap } from "@/data/products";
import styles from "./productDetail.module.css";

export default function ProductDetailClient({ product }) {
  const IconComponent = iconMap[product.iconName];

  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} />
        <div className={styles.container}>
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <Link href="/products" className={styles.backLink}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M13 8H3M7 4L3 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              All Products
            </Link>
            <div className={styles.heroContent}>
              <span className={styles.heroIcon}>{IconComponent && <IconComponent size={24} />}</span>
              <div>
                <h1 className={styles.heroTitle}>{product.title}</h1>
                <p className={styles.heroTagline}>{product.tagline}</p>
              </div>
            </div>
            <p className={styles.heroOverview}>{product.overview}</p>
            <div className={styles.heroCtas}>
              <Link href="/contact" className={styles.btnPrimary}>
                Get a Quote <ArrowRight size={16} />
              </Link>
              <Link href="/contact" className={styles.btnOutline}>
                Talk to Expert <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Key Features</h2>
          <div className={styles.featuresGrid}>
            {product.features.map((f, i) => (
              <motion.div
                key={f.title}
                className={styles.featureCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <h3 className={styles.featureName}>{f.title}</h3>
                <p className={styles.featureDesc}>{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className={`${styles.section} ${styles.specSection}`}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Technical Specifications</h2>
          <div className={styles.specTable}>
            {product.specs.map((s) => (
              <div key={s.label} className={styles.specRow}>
                <span className={styles.specLabel}>{s.label}</span>
                <span className={styles.specValue}>{s.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Applications</h2>
          <div className={styles.appGrid}>
            {product.applications.map((a) => (
              <div key={a} className={styles.appTag}>{a}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety */}
      <section className={`${styles.section} ${styles.specSection}`}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Safety Systems</h2>
          <div className={styles.safetyGrid}>
            {product.safety.map((s) => (
              <div key={s} className={styles.safetyItem}>
                <span className={styles.safetyCheck}><Shield size={20} color="#16A34A" /></span>
                {s}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaBanner}>
            <h2 className={styles.ctaTitle}>Interested in the {product.title}?</h2>
            <p className={styles.ctaDesc}>Get in touch with our team for pricing, samples and technical consultation.</p>
            <div className={styles.heroCtas}>
              <Link href="/contact" className={styles.btnWhite}>Get a Quote <ArrowRight size={16} /></Link>
              <Link href="/products" className={styles.btnGhost}>View Other Products <ArrowRight size={16} /></Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
