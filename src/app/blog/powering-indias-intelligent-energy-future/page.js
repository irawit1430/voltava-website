"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import styles from "./post.module.css";

export default function BlogPost() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
        >
          <Link href="/blog" className={styles.backLink}>
            <ArrowLeft size={18} /> Back to Blog
          </Link>
          
          <header className={styles.header}>
            <span className={styles.category}>Company Vision</span>
            <h1 className={styles.title}>Powering India’s Intelligent Energy Future</h1>
            <div className={styles.meta}>
              <span>Jan 15, 2026</span>
              <span>•</span>
              <span>5 min read</span>
            </div>
          </header>

          <Image 
            src="/assets/intelligent-energy.png" 
            alt="Powering India’s Intelligent Energy Future" 
            width={800} 
            height={400} 
            className={styles.heroImage}
            priority
          />

          <article className={styles.content}>
            <p><strong>Welcome to Voltava Energy System</strong></p>
            <p>
              India is entering one of the biggest energy transitions in history. Electric mobility, battery storage, renewable integration, and smart energy infrastructure are no longer future concepts — they are becoming the backbone of modern economies. At Voltava Energy System, we are building technology that enables this transformation.
            </p>
            <p>
              Our vision is simple: <strong>to create intelligent, scalable, and reliable energy systems designed for India and built for the world.</strong>
            </p>
            <p>
              From smart Battery Management Systems (BMS) to EV charging infrastructure, energy storage systems, and connected energy intelligence platforms, Voltava is focused on building the next generation of energy technology.
            </p>

            <hr />

            <h2>Why the Energy Industry Needs Intelligence</h2>
            <p>
              The future of energy is not only electric — it is connected, data-driven, and intelligent.
            </p>
            <p>
              Traditional battery systems and charging infrastructure often operate without real-time analytics, predictive safety systems, or fleet-level visibility. This creates challenges such as:
            </p>
            <ul>
              <li>Battery failures and thermal risks</li>
              <li>Poor lifecycle management</li>
              <li>Inefficient charging utilization</li>
              <li>Lack of remote diagnostics</li>
              <li>Downtime in commercial fleets</li>
              <li>Weak energy optimization</li>
            </ul>
            <p>
              Voltava is developing solutions that transform energy assets into smart connected systems capable of monitoring, learning, optimizing, and communicating in real time.
            </p>

            <hr />

            <h2>What Voltava Is Building</h2>
            <p><strong>Smart Battery Management Systems (BMS)</strong></p>
            <p>
              The Battery Management System is the brain of every lithium battery. Voltava is developing advanced smart BMS platforms designed for:
            </p>
            <ul>
              <li>Electric 2-wheelers</li>
              <li>Electric 3-wheelers</li>
              <li>Energy Storage Systems (ESS)</li>
              <li>Solar battery systems</li>
              <li>Commercial EV fleets</li>
              <li>Industrial battery applications</li>
            </ul>
            <p><strong>Key Features</strong></p>
            <ul>
              <li>Real-time battery monitoring</li>
              <li>Cell balancing technology</li>
              <li>CAN & BLE communication</li>
              <li>Thermal protection systems</li>
              <li>Predictive fault diagnostics</li>
              <li>Cloud connectivity</li>
              <li>Fleet analytics integration</li>
              <li>Remote monitoring dashboard</li>
            </ul>
            <p>
              Our goal is to deliver safer, smarter, and longer-lasting battery ecosystems for India’s rapidly growing EV market.
            </p>

            <hr />

            <h2>Intelligent Energy Storage Systems (ESS)</h2>
            <p>
              As renewable energy adoption grows, efficient energy storage becomes critical.
            </p>
            <p>
              Voltava is building modular Energy Storage Systems that can support:
            </p>
            <ul>
              <li>Residential backup systems</li>
              <li>Commercial energy optimization</li>
              <li>Solar integration</li>
              <li>Industrial power management</li>
              <li>EV charging support infrastructure</li>
            </ul>
            <p>
              These systems are designed to provide:
            </p>
            <ul>
              <li>Peak load management</li>
              <li>Energy cost optimization</li>
              <li>Renewable energy balancing</li>
              <li>Backup reliability</li>
              <li>Smart grid compatibility</li>
            </ul>

            <hr />

            <h2>EV Charging Infrastructure</h2>
            <p>
              India requires a massive expansion of EV charging infrastructure over the next decade.
            </p>
            <p>
              Voltava is working on scalable charging solutions ranging from:
            </p>
            <ul>
              <li>AC charging systems</li>
              <li>DC fast chargers</li>
              <li>Fleet charging infrastructure</li>
              <li>Smart charging software</li>
              <li>Charging network integration</li>
            </ul>
            <p>
              Our focus is not just hardware — it is building an intelligent charging ecosystem capable of:
            </p>
            <ul>
              <li>Live monitoring</li>
              <li>Remote diagnostics</li>
              <li>Usage analytics</li>
              <li>Unified payment systems</li>
              <li>Network aggregation</li>
              <li>Energy optimization</li>
            </ul>

            <hr />

            <h2>Building an Energy Intelligence Platform</h2>
            <p>
              The next revolution in energy will be software-driven.
            </p>
            <p>
              Voltava’s long-term vision includes building an integrated energy intelligence platform capable of connecting:
            </p>
            <ul>
              <li>Batteries</li>
              <li>Chargers</li>
              <li>Energy storage systems</li>
              <li>EV fleets</li>
              <li>Renewable systems</li>
              <li>Smart energy devices</li>
            </ul>
            <p>
              This ecosystem will enable:
            </p>
            <ul>
              <li>Real-time analytics</li>
              <li>Predictive maintenance</li>
              <li>AI-driven optimization</li>
              <li>Remote energy management</li>
              <li>Fleet-level monitoring</li>
              <li>Energy usage forecasting</li>
            </ul>
            <p>
              The objective is to help businesses and users make energy systems more efficient, reliable, and cost-effective.
            </p>

            <hr />

            <h2>Designed for India’s Energy Reality</h2>
            <p>
              India’s energy environment presents unique challenges:
            </p>
            <ul>
              <li>High temperature conditions</li>
              <li>Grid instability in certain regions</li>
              <li>Diverse vehicle applications</li>
              <li>Cost-sensitive markets</li>
              <li>Rapid EV adoption growth</li>
            </ul>
            <p>
              Voltava products are being designed with these realities in mind.
            </p>
            <p>
              We believe India does not just need imported solutions. India needs energy technology engineered specifically for Indian conditions.
            </p>

            <hr />

            <h2>Supporting India’s EV & Clean Energy Mission</h2>
            <p>
              India is rapidly moving toward electrification and renewable energy expansion.
            </p>
            <p>
              Government initiatives, infrastructure development, battery manufacturing growth, and increasing EV adoption are creating unprecedented opportunities in:
            </p>
            <ul>
              <li>Battery technology</li>
              <li>Smart electronics</li>
              <li>Energy storage</li>
              <li>Charging infrastructure</li>
              <li>Energy analytics</li>
            </ul>
            <p>
              Voltava aims to contribute to this transition by building indigenous energy technology capabilities and reducing dependence on imported smart energy systems.
            </p>

            <hr />

            <h2>Innovation Through Technology</h2>
            <p>
              At Voltava, innovation is driven by engineering, research, and practical deployment needs.
            </p>
            <p>
              We are actively exploring technologies including:
            </p>
            <ul>
              <li>Smart CAN communication systems</li>
              <li>BLE-enabled battery intelligence</li>
              <li>IoT energy monitoring</li>
              <li>Fleet energy analytics</li>
              <li>High-voltage BMS architecture</li>
              <li>Modular ESS platforms</li>
              <li>Cloud-connected charging systems</li>
            </ul>
            <p>
              The future of energy belongs to intelligent systems — and Voltava intends to be part of building that future.
            </p>

            <hr />

            <h2>Our Mission & Vision</h2>
            <p><strong>Our Mission:</strong> To build intelligent, scalable, and reliable energy technologies that accelerate the transition toward a smarter and cleaner energy ecosystem.</p>
            <p><strong>Our Vision:</strong> To become a leading Indian energy technology company powering the future of electric mobility and intelligent energy infrastructure.</p>

            <hr />

            <h2>The Road Ahead</h2>
            <p>
              The global energy transition has only just begun.
            </p>
            <p>
              Over the coming years, the demand for smart batteries, EV charging systems, energy storage, connected energy infrastructure, and intelligent energy software will increase exponentially.
            </p>
            <p>
              Voltava Energy System is committed to developing technologies that help power this transformation. We are not just building products. We are building the foundation for a smarter energy future.
            </p>

            <hr />

            <h2>Connect With Voltava</h2>
            <p>
              Whether you are an EV manufacturer, battery company, fleet operator, renewable energy business, infrastructure partner, or technology collaborator, we welcome opportunities to collaborate and innovate together.
            </p>
          </article>
        </motion.div>
      </div>
    </div>
  );
}
