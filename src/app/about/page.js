"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { FlaskConical, Globe, Link as LinkIcon, Shield, ArrowRight } from "lucide-react";
import styles from "./about.module.css";

const values = [
  { icon: <FlaskConical size={32} color="#16A34A" />, title: "Engineering First", desc: "We are an engineering company at core. Every product starts with deep technical understanding and rigorous R&D." },
  { icon: <Globe size={32} color="#16A34A" />, title: "Built for India", desc: "Designed for extreme Indian conditions — heat, dust, voltage fluctuations and rough roads. Tested relentlessly." },
  { icon: <LinkIcon size={32} color="#16A34A" />, title: "Connected Future", desc: "Every product is cloud-ready, IoT-enabled and designed for the connected, data-driven energy ecosystem." },
  { icon: <Shield size={32} color="#16A34A" />, title: "Reliability First", desc: "Multi-layer safety systems, automotive-grade components and rigorous testing ensure 99.9% field reliability." },
];

export default function AboutPage() {

  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} />
        <div className={styles.container}>
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className={styles.supertitle}><span className={styles.bar} />About Us</span>
            <h1 className={styles.heroTitle}>Engineering Today. <span className={styles.hl}>Energizing Tomorrow.</span></h1>
            <p className={styles.heroDesc}>
              Innovating intelligent energy solutions for electric mobility, energy storage and a cleaner future. Voltava Energy Systems is an Indian energy electronics company focused on smart, reliable, and sustainable electrification.
            </p>
          </motion.div>
        </div>
      </section>



      {/* Values */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Our Core Values</h2>
          <div className={styles.valuesGrid}>
            {values.map((v, i) => (
              <motion.div key={v.title} className={styles.valueCard} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <span className={styles.valueIcon}>{v.icon}</span>
                <h3 className={styles.valueName}>{v.title}</h3>
                <p className={styles.valueDesc}>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className={`${styles.section} ${styles.bgAlt}`}>
        <div className={styles.container}>
          <div className={styles.founderBlock}>
            <div className={styles.founderAvatar}>GY</div>
            <div className={styles.founderInfo}>
              <h2 className={styles.founderName}>Gaurav Yashaswee</h2>
              <p className={styles.founderRole}>Founder & CEO</p>
              <p className={styles.founderBio}>
                Driving Voltava&apos;s mission of powering a sustainable tomorrow through smart, reliable, and sustainable energy electronics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaBanner}>
            <h2 className={styles.ctaTitle}>Want to Join Our Mission?</h2>
            <p className={styles.ctaDesc}>We&apos;re always looking for talented engineers and passionate people to build the future of electrification.</p>
            <div className={styles.ctaActions}>
              <Link href="/careers" className={styles.btnWhite}>View Careers <ArrowRight size={16} /></Link>
              <Link href="/contact" className={styles.btnGhost}>Contact Us <ArrowRight size={16} /></Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
