"use client";

import { Cpu, Brain, Radio, Smartphone, Zap, Cloud } from "lucide-react";
import { motion } from "framer-motion";
import styles from "./technology.module.css";

const techStack = [
  { icon: <Cpu size={28} />, title: "Embedded Systems", tag: "Hardware", desc: "STM32 and TI-based microcontroller platforms with real-time operating systems for precise battery monitoring, control and safety management.", details: ["ARM Cortex-M4/M7", "FreeRTOS / Bare-metal", "Custom PCB Design", "EMC/EMI Compliant"] },
  { icon: <Brain size={28} />, title: "Battery Intelligence", tag: "AI/ML", desc: "Proprietary algorithms for SOC, SOH, and remaining useful life estimation using Kalman filtering, neural networks and physics-based models.", details: ["Extended Kalman Filter", "SOC ±2% Accuracy", "Degradation Prediction", "Thermal Modeling"] },
  { icon: <Radio size={28} />, title: "CAN Communication", tag: "Protocol", desc: "Industrial-grade CAN 2.0B implementation for vehicle integration, fleet-level data exchange, and charger-BMS communication.", details: ["CAN 2.0B / CAN FD", "J1939 / CANopen", "Custom DBC Files", "Multi-bus Support"] },
  { icon: <Smartphone size={28} />, title: "BLE Diagnostics", tag: "Wireless", desc: "Bluetooth Low Energy 5.0 for mobile app connectivity, real-time diagnostics, configuration and over-the-air firmware updates.", details: ["BLE 5.0", "iOS + Android SDK", "OTA Firmware Update", "Encrypted Pairing"] },
  { icon: <Zap size={28} />, title: "Power Electronics", tag: "Power", desc: "High-current MOSFET and IGBT topologies with advanced gate driving, thermal management and fault protection for reliable power conversion.", details: ["200A+ Continuous", "Active Pre-charge", "Multi-layer Protection", "Automotive Grade"] },
  { icon: <Cloud size={28} />, title: "Cloud Platform", tag: "Software", desc: "Scalable cloud infrastructure built on AWS/Azure for fleet analytics, remote monitoring, predictive maintenance and customer dashboards.", details: ["Real-time Telemetry", "REST API / MQTT", "Custom Dashboards", "Multi-tenant"] },
];

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

export default function TechnologyPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroGlow} />
        <div className={styles.container}>
          <motion.div {...fadeUp} transition={{ duration: 0.7 }}>
            <span className={styles.supertitle}><span className={styles.bar} />Technology</span>
            <h1 className={styles.heroTitle}>
              Engineering That Defines the <span className={styles.hl}>Edge</span>
            </h1>
            <p className={styles.heroDesc}>
              Our technology platform combines embedded intelligence, advanced communication protocols, cloud analytics and power electronics to deliver next-generation energy systems.
            </p>
          </motion.div>
        </div>
      </section>

      <section className={styles.techSection}>
        <div className={styles.container}>
          <div className={styles.techList}>
            {techStack.map((tech, i) => (
              <motion.div
                key={tech.title}
                className={styles.techBlock}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
              >
                <div className={styles.techLeft}>
                  <div className={styles.techHead}>
                    <span className={styles.techIcon}>{tech.icon}</span>
                    <span className={styles.techTag}>{tech.tag}</span>
                  </div>
                  <h2 className={styles.techTitle}>{tech.title}</h2>
                  <p className={styles.techDesc}>{tech.desc}</p>
                </div>
                <div className={styles.techRight}>
                  {tech.details.map((d) => (
                    <div key={d} className={styles.detailItem}>
                      <span className={styles.detailDot} />
                      {d}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
