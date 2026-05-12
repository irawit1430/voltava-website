"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Cpu, Brain, Radio, Smartphone, Zap, Cloud } from "lucide-react";
import styles from "./TechnologySection.module.css";

const technologies = [
  {
    icon: <Cpu size={24} />,
    title: "Embedded Systems",
    desc: "STM32/TI-based control systems with real-time processing for battery management and power electronics.",
    tag: "Hardware",
  },
  {
    icon: <Brain size={24} />,
    title: "Battery Intelligence",
    desc: "Advanced SOC/SOH analytics with machine learning algorithms for accurate state estimation and prediction.",
    tag: "AI/ML",
  },
  {
    icon: <Radio size={24} />,
    title: "CAN Communication",
    desc: "Industrial-grade CAN bus integration for fleet, charger and vehicle-level data exchange and control.",
    tag: "Protocol",
  },
  {
    icon: <Smartphone size={24} />,
    title: "BLE Diagnostics",
    desc: "Bluetooth Low Energy based mobile monitoring for real-time diagnostics, configuration and OTA updates.",
    tag: "Wireless",
  },
  {
    icon: <Zap size={24} />,
    title: "Power Electronics",
    desc: "High-current architecture with advanced MOSFET/IGBT topologies for reliable power conversion and protection.",
    tag: "Power",
  },
  {
    icon: <Cloud size={24} />,
    title: "Cloud Platform",
    desc: "Scalable cloud infrastructure for fleet analytics, remote monitoring and predictive maintenance dashboards.",
    tag: "Software",
  },
];

export default function TechnologySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className={styles.section} ref={ref} id="technology">
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className={styles.supertitle}>
            <span className={styles.bar} />
            Technology Stack
          </span>
          <h2 className={styles.title}>
            Engineering That Defines the Edge
          </h2>
          <p className={styles.desc}>
            Our technology platform combines embedded intelligence, advanced
            communication protocols, and cloud analytics to deliver
            next-generation energy electronics.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {technologies.map((tech, i) => (
            <motion.div
              key={tech.title}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className={styles.cardTop}>
                <span className={styles.cardIcon}>{tech.icon}</span>
                <span className={styles.tag}>{tech.tag}</span>
              </div>
              <h3 className={styles.cardTitle}>{tech.title}</h3>
              <p className={styles.cardDesc}>{tech.desc}</p>
              <div className={styles.cardGlow} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
