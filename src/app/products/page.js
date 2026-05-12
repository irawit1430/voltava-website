"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { Zap, Battery, Sun, Radio, Plug, Cpu } from "lucide-react";
import styles from "./products.module.css";

const categories = ["All", "BMS", "Chargers", "ESS", "Telematics"];

const products = [
  {
    slug: "72v-120a-smart-bms",
    title: "72V 120A Smart BMS",
    category: "BMS",
    purpose: "Fleet & E-Rickshaw",
    desc: "Advanced battery management system with active cell balancing, CAN communication, BLE diagnostics and cloud connectivity for 72V lithium-ion packs.",
    specs: ["72V", "120A", "Active Balance", "CAN + BLE", "Cloud Ready"],
    icon: <Zap size={32} color="#16A34A" />,
  },
  {
    slug: "72v-200a-premium-bms",
    title: "72V 200A Premium BMS",
    category: "BMS",
    purpose: "Commercial EV",
    desc: "High-current premium BMS designed for commercial electric vehicles with advanced SOC/SOH estimation, thermal management and safety systems.",
    specs: ["72V", "200A", "SOC/SOH", "Thermal Mgmt", "OEM Ready"],
    icon: <Battery size={32} color="#16A34A" />,
  },
  {
    slug: "48v-ess-smart-bms",
    title: "48V ESS Smart BMS",
    category: "ESS",
    purpose: "Solar ESS Systems",
    desc: "Energy storage BMS optimized for solar hybrid systems with MPPT integration support, grid compatibility and modular architecture.",
    specs: ["48V", "ESS", "Solar Ready", "Modular", "Grid Safe"],
    icon: <Sun size={32} color="#16A34A" />,
  },
  {
    slug: "battery-telematics-unit",
    title: "Battery Telematics Unit",
    category: "Telematics",
    purpose: "Fleet Analytics",
    desc: "Real-time GPS tracking, remote battery diagnostics and fleet-level analytics with 4G connectivity and cloud dashboard integration.",
    specs: ["GPS + 4G", "Cloud", "Real-time", "Fleet API", "OTA"],
    icon: <Radio size={32} color="#16A34A" />,
  },
  {
    slug: "dc-fast-chargers",
    title: "DC Fast Charger Electronics",
    category: "Chargers",
    purpose: "Charging Infrastructure",
    desc: "Power modules and control electronics for DC fast charging stations from 30kW to 120kW with OCPP support and smart grid integration.",
    specs: ["30-120kW", "CCS/CHAdeMO", "OCPP", "Smart Grid", "Modular"],
    icon: <Plug size={32} color="#16A34A" />,
  },
  {
    slug: "ems-controller",
    title: "EMS Controller",
    category: "ESS",
    purpose: "Energy Optimization",
    desc: "Intelligent energy management system controller for optimizing power flow, battery utilization and grid interaction in ESS installations.",
    specs: ["EMS", "Power Flow", "Grid Tie", "Analytics", "Modbus"],
    icon: <Cpu size={32} color="#16A34A" />,
  },
];

export default function ProductsPage() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div className={styles.page} ref={ref}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} />
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className={styles.supertitle}><span className={styles.bar} />Our Products</span>
            <h1 className={styles.heroTitle}>
              Smart Energy Electronics for a <span className={styles.highlight}>Sustainable Future</span>
            </h1>
            <p className={styles.heroDesc}>
              From battery intelligence to power conversion and energy management — complete
              electronics solutions designed for the Indian electrification ecosystem.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className={styles.productsSection}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {products.map((product, i) => (
              <motion.div
                key={product.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Link href={`/products/${product.slug}`} className={styles.card}>
                  <div className={styles.cardTop}>
                    <span className={styles.cardIcon}>{product.icon}</span>
                    <span className={styles.cardCategory}>{product.category}</span>
                  </div>
                  <h3 className={styles.cardTitle}>{product.title}</h3>
                  <p className={styles.cardPurpose}>{product.purpose}</p>
                  <p className={styles.cardDesc}>{product.desc}</p>
                  <div className={styles.specs}>
                    {product.specs.map((s) => (
                      <span key={s} className={styles.specTag}>{s}</span>
                    ))}
                  </div>
                  <span className={styles.cardLink}>
                    View Details
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
