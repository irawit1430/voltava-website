"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Battery, Truck, Sun, Zap, Wrench, ArrowRight } from "lucide-react";
import styles from "./solutions.module.css";

const solutions = [
  {
    icon: <Battery size={32} color="#16A34A" />,
    title: "EV Battery Solutions",
    desc: "Complete BMS ecosystem for 2W, 3W and 4W electric vehicle manufacturers. From cell-level monitoring to vehicle-level integration — smart battery management designed for Indian EV production.",
    products: ["72V 120A Smart BMS", "72V 200A Premium BMS", "Battery Telematics Unit"],
    useCases: ["Electric Rickshaws", "Electric Scooters", "Light Commercial Vehicles", "Electric Buses"],
  },
  {
    icon: <Truck size={32} color="#16A34A" />,
    title: "Fleet Management",
    desc: "End-to-end fleet battery intelligence combining telematics hardware, cloud analytics and predictive maintenance to reduce total cost of ownership and maximize fleet uptime.",
    products: ["Battery Telematics Unit", "Cloud Dashboard", "Fleet APIs"],
    useCases: ["Last-mile Delivery", "Ride-sharing Fleets", "Public Transport", "Logistics Companies"],
  },
  {
    icon: <Sun size={32} color="#16A34A" />,
    title: "Energy Storage",
    desc: "Integrated BMS and EMS solutions for residential, commercial and industrial energy storage installations with solar hybrid support and grid compatibility.",
    products: ["48V ESS Smart BMS", "EMS Controller", "Cloud Monitoring"],
    useCases: ["Home Solar Storage", "Commercial ESS", "Telecom Towers", "Microgrids"],
  },
  {
    icon: <Zap size={32} color="#16A34A" />,
    title: "Charging Solutions",
    desc: "Smart charging electronics from communication modules to full DC fast charger power stacks. OCPP-compliant, grid-aware and designed for Indian infrastructure.",
    products: ["DC Fast Charger Electronics", "Smart Charger Module", "Payment Gateway"],
    useCases: ["Highway Stations", "Fleet Depots", "Malls & Offices", "Residential Charging"],
  },
  {
    icon: <Wrench size={32} color="#16A34A" />,
    title: "Custom Solutions",
    desc: "Tailored engineering for OEM partners who need custom BMS configurations, protocol integrations, form factors or white-label product development.",
    products: ["Custom BMS Design", "Protocol Integration", "White-label Products"],
    useCases: ["OEM Partnerships", "Custom Voltage Ranges", "Special Protocols", "Private Label"],
  },
];

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

export default function SolutionsPage() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} />
        <div className={styles.container}>
          <motion.div {...fadeUp} transition={{ duration: 0.7 }}>
            <span className={styles.supertitle}><span className={styles.bar} />Solutions</span>
            <h1 className={styles.heroTitle}>
              Engineered Solutions for Every <span className={styles.hl}>Electrification</span> Challenge
            </h1>
            <p className={styles.heroDesc}>
              From concept to deployment — complete energy electronics solutions tailored to your industry, scale and technical requirements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions List */}
      <section className={styles.solutionsSection}>
        <div className={styles.container}>
          {solutions.map((sol, i) => (
            <motion.div
              key={sol.title}
              className={styles.solutionBlock}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
            >
              <div className={styles.solLeft}>
                <span className={styles.solIcon}>{sol.icon}</span>
                <h2 className={styles.solTitle}>{sol.title}</h2>
                <p className={styles.solDesc}>{sol.desc}</p>
                <Link href="/contact" className={styles.solCta}>
                  Discuss This Solution <ArrowRight size={16} />
                </Link>
              </div>
              <div className={styles.solRight}>
                <div className={styles.solInfo}>
                  <h4 className={styles.infoLabel}>Related Products</h4>
                  <div className={styles.tags}>
                    {sol.products.map((p) => (
                      <span key={p} className={styles.tag}>{p}</span>
                    ))}
                  </div>
                </div>
                <div className={styles.solInfo}>
                  <h4 className={styles.infoLabel}>Use Cases</h4>
                  <div className={styles.tags}>
                    {sol.useCases.map((u) => (
                      <span key={u} className={styles.useTag}>{u}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
