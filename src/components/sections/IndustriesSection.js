"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Bike, Truck, Battery, Sun, Factory } from "lucide-react";
import styles from "./IndustriesSection.module.css";

const industries = [
  {
    id: "ev",
    icon: <Bike size={24} />,
    label: "Electric 2W / 3W / 4W",
    title: "Electric Mobility",
    desc: "Powering the next generation of electric vehicles with smart BMS, telematics and charging electronics designed for Indian roads and conditions.",
    stats: ["50+ BMS Models", "100K+ Units Deployed", "OEM Partnerships"],
  },
  {
    id: "fleet",
    icon: <Truck size={24} />,
    label: "Commercial Vehicles",
    title: "Fleet Operations",
    desc: "Battery analytics, real-time diagnostics and fleet intelligence systems that reduce TCO and maximize uptime for commercial EV fleets.",
    stats: ["Real-time Analytics", "Predictive Maintenance", "Cloud Dashboard"],
  },
  {
    id: "ess",
    icon: <Battery size={24} />,
    label: "Energy Storage Systems",
    title: "Energy Storage",
    desc: "Complete BMS and EMS solutions for residential, commercial and industrial energy storage installations with solar integration.",
    stats: ["48V-800V Range", "Grid Compatible", "Modular Design"],
  },
  {
    id: "solar",
    icon: <Sun size={24} />,
    label: "Solar & Renewable",
    title: "Renewable Energy",
    desc: "Smart electronics for solar-battery hybrid systems, enabling efficient energy harvesting, storage and distribution across the grid.",
    stats: ["MPPT Integration", "Hybrid Inverters", "Off-grid Ready"],
  },
  {
    id: "industrial",
    icon: <Factory size={24} />,
    label: "Industrial & Telecom",
    title: "Industrial Applications",
    desc: "High-reliability energy electronics for telecom towers, industrial UPS, and mission-critical power backup systems.",
    stats: ["99.9% Uptime", "Wide Temp Range", "-20°C to 70°C"],
  },
];

export default function IndustriesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState(0);

  return (
    <section className={styles.section} ref={ref} id="industries">
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className={styles.supertitle}>
            <span className={styles.bar} />
            Industries We Serve
          </span>
          <h2 className={styles.title}>
            Powering Every Electrified Tomorrow
          </h2>
        </motion.div>

        {/* Tabs */}
        <motion.div
          className={styles.tabs}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {industries.map((ind, i) => (
            <button
              key={ind.id}
              className={`${styles.tab} ${active === i ? styles.active : ""}`}
              onClick={() => setActive(i)}
            >
              <span className={styles.tabIcon}>{ind.icon}</span>
              <span className={styles.tabLabel}>{ind.label}</span>
            </button>
          ))}
        </motion.div>

        {/* Content Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={industries[active].id}
            className={styles.panel}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            <div className={styles.panelContent}>
              <h3 className={styles.panelTitle}>{industries[active].title}</h3>
              <p className={styles.panelDesc}>{industries[active].desc}</p>
              <div className={styles.panelStats}>
                {industries[active].stats.map((stat) => (
                  <div key={stat} className={styles.panelStat}>
                    <span className={styles.statDot} />
                    {stat}
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.panelVisual}>
              <div className={styles.iconLarge}>{industries[active].icon}</div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
