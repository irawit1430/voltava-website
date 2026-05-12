"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Bike, Truck, Battery, Sun, Factory, ArrowRight } from "lucide-react";
import styles from "./industries.module.css";

const industries = [
  { icon: <Bike size={32} color="#16A34A" />, title: "Electric Mobility", subtitle: "2W / 3W / Commercial EV", desc: "Powering the next generation of electric vehicles with smart BMS, telematics and charging electronics designed for Indian roads and extreme conditions. From e-rickshaws to electric buses.", products: ["72V 120A Smart BMS", "72V 200A Premium BMS", "Battery Telematics Unit"], stats: ["50+ BMS Models", "100K+ Units Deployed", "20+ OEM Partners"] },
  { icon: <Truck size={32} color="#16A34A" />, title: "Fleet Operations", subtitle: "Battery Analytics & Intelligence", desc: "Real-time fleet intelligence combining GPS tracking, battery diagnostics and predictive analytics. Reduce TCO by 30% with actionable insights on every vehicle in your fleet.", products: ["Battery Telematics Unit", "Cloud Dashboard", "Fleet APIs"], stats: ["Real-time Tracking", "30% TCO Reduction", "Predictive Alerts"] },
  { icon: <Battery size={32} color="#16A34A" />, title: "Energy Storage", subtitle: "ESS Systems", desc: "Complete BMS and EMS solutions for residential, commercial and industrial energy storage. Solar hybrid ready with grid compatibility and modular architecture for scalable deployments.", products: ["48V ESS Smart BMS", "EMS Controller"], stats: ["48V-800V Range", "10+ Year Life", "Grid Certified"] },
  { icon: <Sun size={32} color="#16A34A" />, title: "Renewable Energy", subtitle: "Solar Integration", desc: "Smart electronics for solar-battery hybrid systems enabling efficient energy harvesting, storage and distribution. Designed for India's solar potential and grid infrastructure.", products: ["48V ESS Smart BMS", "EMS Controller", "Smart Charger Module"], stats: ["MPPT Support", "Hybrid Ready", "Off-grid Capable"] },
  { icon: <Factory size={32} color="#16A34A" />, title: "Industrial Applications", subtitle: "Energy Electronics", desc: "High-reliability energy electronics for telecom towers, industrial UPS, data centers and mission-critical power backup systems requiring 99.9% uptime.", products: ["48V ESS Smart BMS", "EMS Controller", "Custom Solutions"], stats: ["99.9% Uptime", "-20°C to 70°C", "Industrial Grade"] },
];

export default function IndustriesPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroGlow} />
        <div className={styles.container}>
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className={styles.supertitle}><span className={styles.bar} />Industries</span>
            <h1 className={styles.heroTitle}>Powering Every <span className={styles.hl}>Electrified</span> Tomorrow</h1>
            <p className={styles.heroDesc}>From electric mobility to energy storage — our electronics platform serves the entire electrification ecosystem with reliable, intelligent solutions.</p>
          </motion.div>
        </div>
      </section>

      <section className={styles.listSection}>
        <div className={styles.container}>
          {industries.map((ind, i) => (
            <motion.div key={ind.title} className={styles.block} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.05 }}>
              <div className={styles.blockLeft}>
                <span className={styles.blockIcon}>{ind.icon}</span>
                <div>
                  <h2 className={styles.blockTitle}>{ind.title}</h2>
                  <p className={styles.blockSub}>{ind.subtitle}</p>
                </div>
              </div>
              <p className={styles.blockDesc}>{ind.desc}</p>
              <div className={styles.blockMeta}>
                <div className={styles.metaCol}>
                  <h4 className={styles.metaLabel}>Products</h4>
                  <div className={styles.tags}>{ind.products.map(p => <span key={p} className={styles.tag}>{p}</span>)}</div>
                </div>
                <div className={styles.metaCol}>
                  <h4 className={styles.metaLabel}>Key Metrics</h4>
                  <div className={styles.stats}>{ind.stats.map(s => <span key={s} className={styles.stat}><span className={styles.statDot}/>{s}</span>)}</div>
                </div>
              </div>
              <Link href="/contact" className={styles.blockCta}>Discuss Your Requirements <ArrowRight size={16} /></Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
