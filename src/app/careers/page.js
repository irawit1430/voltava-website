"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Rocket, BookOpen, Coins, Activity, Home, Target, ArrowRight } from "lucide-react";
import styles from "./careers.module.css";

const openings = [
  { title: "Embedded Systems Engineer", team: "Hardware R&D", location: "Delhi NCR", type: "Full-time", desc: "Design and develop firmware for BMS and telematics products using STM32 and TI MCUs. Experience with CAN, SPI, I2C and RTOS required.", skills: ["STM32", "C/C++", "CAN Bus", "FreeRTOS", "PCB Design"] },
  { title: "Power Electronics Engineer", team: "Power Systems", location: "Delhi NCR", type: "Full-time", desc: "Design power conversion circuits for DC fast chargers and BMS systems. Experience with MOSFET/IGBT gate drivers and thermal analysis.", skills: ["Power MOSFETs", "Gate Drivers", "Thermal Design", "SPICE", "EMC"] },
  { title: "Full Stack Developer", team: "Cloud Platform", location: "Remote", type: "Full-time", desc: "Build scalable cloud dashboards and APIs for fleet management and remote monitoring. React, Node.js, and IoT experience preferred.", skills: ["React", "Node.js", "MongoDB", "MQTT", "AWS"] },
  { title: "Product Manager", team: "Product", location: "Delhi NCR", type: "Full-time", desc: "Drive product strategy and roadmap for BMS and telematics product lines. Work closely with engineering, sales and OEM partners.", skills: ["Product Strategy", "EV Industry", "Roadmapping", "Stakeholder Mgmt", "Analytics"] },
  { title: "Field Application Engineer", team: "Sales Engineering", location: "Delhi NCR / Field", type: "Full-time", desc: "Provide technical support to OEM partners during BMS integration, testing and deployment. Travel to customer sites required.", skills: ["BMS Integration", "CAN Config", "Technical Support", "Customer Facing", "Testing"] },
];

const perks = [
  { icon: <Rocket size={32} color="#16A34A" />, title: "Cutting-edge Tech", desc: "Work on real-world energy products deployed across India." },
  { icon: <BookOpen size={32} color="#16A34A" />, title: "Learning Culture", desc: "Access to courses, conferences and mentorship programs." },
  { icon: <Coins size={32} color="#16A34A" />, title: "Competitive Pay", desc: "Industry-competitive salary with ESOP and performance bonuses." },
  { icon: <Activity size={32} color="#16A34A" />, title: "Health Coverage", desc: "Comprehensive health insurance for you and your family." },
  { icon: <Home size={32} color="#16A34A" />, title: "Flexible Work", desc: "Hybrid work environment with flexible schedules." },
  { icon: <Target size={32} color="#16A34A" />, title: "Real Impact", desc: "Your work directly powers India's electrification journey." },
];

export default function CareersPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroGlow} />
        <div className={styles.container}>
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className={styles.supertitle}><span className={styles.bar} />Careers</span>
            <h1 className={styles.heroTitle}>Build the Future of <span className={styles.hl}>Electrification</span></h1>
            <p className={styles.heroDesc}>Join a team of passionate engineers and innovators working to make smart energy electronics accessible and reliable for every Indian application.</p>
          </motion.div>
        </div>
      </section>

      {/* Perks */}
      <section className={styles.perksSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Why Join Voltava</h2>
          <div className={styles.perksGrid}>
            {perks.map((p, i) => (
              <motion.div key={p.title} className={styles.perkCard} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
                <span className={styles.perkIcon}>{p.icon}</span>
                <h3 className={styles.perkName}>{p.title}</h3>
                <p className={styles.perkDesc}>{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Openings */}
      <section className={`${styles.openSection} ${styles.bgAlt}`}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Open Positions</h2>
          <div className={styles.jobList}>
            {openings.map((job, i) => (
              <motion.div key={job.title} className={styles.jobCard} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
                <div className={styles.jobHead}>
                  <div>
                    <h3 className={styles.jobTitle}>{job.title}</h3>
                    <p className={styles.jobMeta}>{job.team} · {job.location} · {job.type}</p>
                  </div>
                  <Link href="/contact" className={styles.applyBtn}>Apply <ArrowRight size={16} /></Link>
                </div>
                <p className={styles.jobDesc}>{job.desc}</p>
                <div className={styles.skillTags}>
                  {job.skills.map(s => <span key={s} className={styles.skillTag}>{s}</span>)}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
