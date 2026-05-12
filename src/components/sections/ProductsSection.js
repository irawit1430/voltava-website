"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { Zap, Radio, Plug, Battery, Sun } from "lucide-react";
import styles from "./ProductsSection.module.css";

const products = [
  {
    title: "Smart BMS",
    desc: "Advanced battery management systems with active balancing, CAN communication and cloud connectivity.",
    icon: <Zap size={24} />,
    href: "/products/72v-120a-smart-bms",
    specs: ["72V/120A", "Active Balance", "CAN + BLE"],
  },
  {
    title: "Battery Telematics Unit",
    desc: "Real-time tracking, remote diagnostics and data analytics for fleets and energy systems.",
    icon: <Radio size={24} />,
    href: "/products/battery-telematics-unit",
    specs: ["GPS + 4G", "Cloud Analytics", "Fleet Ready"],
  },
  {
    title: "Smart Charger Module",
    desc: "Enable intelligent communication between EV chargers and vehicles / BMS.",
    icon: <Plug size={24} />,
    href: "/products",
    specs: ["OCPP", "Smart Protocol", "BMS Link"],
  },
  {
    title: "DC Fast Charger",
    desc: "Reliable and efficient power modules and control electronics for DC fast charging solutions.",
    icon: <Battery size={24} />,
    href: "/products/dc-fast-chargers",
    specs: ["30-120kW", "CCS/CHAdeMO", "Smart Grid"],
  },
  {
    title: "Energy Storage System",
    desc: "BMS, EMS and power electronics for residential, commercial and industrial energy storage.",
    icon: <Sun size={24} />,
    href: "/products/48v-ess-smart-bms",
    specs: ["48V ESS", "Solar Ready", "Modular"],
  },
];

export default function ProductsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className={`${styles.section}`} ref={ref} id="products">
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <div>
            <span className={styles.supertitle}>
              <span className={styles.bar} />
              Our Products
            </span>
            <h2 className={styles.title}>
              Smart Energy Electronics for a Sustainable Future
            </h2>
          </div>
          <p className={styles.description}>
            From battery intelligence to power conversion and energy management —
            complete electronics solutions for modern electrification.
          </p>
        </div>

        {/* Product Grid */}
        <div className={styles.grid}>
          {products.map((product, i) => (
            <motion.div
              key={product.title}
              className={styles.card}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className={styles.cardIcon}>{product.icon}</div>
              <h3 className={styles.cardTitle}>{product.title}</h3>
              <p className={styles.cardDesc}>{product.desc}</p>
              <div className={styles.specs}>
                {product.specs.map((spec) => (
                  <span key={spec} className={styles.specTag}>
                    {spec}
                  </span>
                ))}
              </div>
              <Link href={product.href} className={styles.cardLink}>
                View Details
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className={styles.cta}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link href="/products" className={styles.btnPrimary}>
            View All Products
            <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
