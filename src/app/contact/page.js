"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, MessageCircle, CheckCircle, ArrowRight } from "lucide-react";
import styles from "./contact.module.css";

const contactInfo = [
  { icon: <MapPin size={24} color="#16A34A" />, label: "Address", value: "Delhi NCR, India 110070" },
  { icon: <Mail size={24} color="#16A34A" />, label: "Email", value: "gaurav@voltava.in", href: "mailto:gaurav@voltava.in" },
  { icon: <Phone size={24} color="#16A34A" />, label: "Phone", value: "+91 921766 7723", href: "tel:+919217667723" },
  { icon: <MessageCircle size={24} color="#16A34A" />, label: "WhatsApp", value: "Chat with us", href: "https://wa.me/919217667723" },
];

const interests = [
  "BMS Solutions",
  "EV Charging Electronics",
  "Energy Storage Systems",
  "Telematics & Fleet Intelligence",
  "OEM Partnership",
  "Custom Development",
  "General Inquiry",
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", company: "", phone: "", interest: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "96ff4282-6460-4833-8a56-3a1923398446",
          subject: `Voltava Website Contact: ${form.interest || "General Inquiry"}`,
          from_name: form.name,
          ...form,
        }),
      });
      
      const result = await response.json();
      
      if (result.success) {
        setSubmitted(true);
      } else {
        console.error("Form submission failed:", result);
        alert("There was an error sending your message. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was a network error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroGlow} />
        <div className={styles.container}>
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className={styles.supertitle}><span className={styles.bar} />Contact Us</span>
            <h1 className={styles.heroTitle}>Let&apos;s Start a <span className={styles.hl}>Conversation</span></h1>
            <p className={styles.heroDesc}>Whether you&apos;re an OEM looking for integration, a fleet operator exploring telematics, or an innovator with an energy challenge — we&apos;re here to help.</p>
          </motion.div>
        </div>
      </section>

      <section className={styles.formSection}>
        <div className={styles.container}>
          <div className={styles.layout}>
            {/* Form */}
            <motion.div className={styles.formCard} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              {submitted ? (
                <div className={styles.successMsg}>
                  <span className={styles.successIcon}><CheckCircle size={48} color="#16A34A" /></span>
                  <h2 className={styles.successTitle}>Message Sent!</h2>
                  <p className={styles.successDesc}>Thank you for reaching out. Our team will get back to you within 24 hours.</p>
                  <button className={styles.resetBtn} onClick={() => { setSubmitted(false); setForm({ name: "", email: "", company: "", phone: "", interest: "", message: "" }); }}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.form}>
                  <h2 className={styles.formTitle}>Send us a Message</h2>
                  <div className={styles.formRow}>
                    <div className={styles.field}>
                      <label className={styles.label}>Full Name *</label>
                      <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="Your name" className={styles.input} />
                    </div>
                    <div className={styles.field}>
                      <label className={styles.label}>Email *</label>
                      <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="you@company.com" className={styles.input} />
                    </div>
                  </div>
                  <div className={styles.formRow}>
                    <div className={styles.field}>
                      <label className={styles.label}>Company</label>
                      <input type="text" name="company" value={form.company} onChange={handleChange} placeholder="Your company name" className={styles.input} />
                    </div>
                    <div className={styles.field}>
                      <label className={styles.label}>Phone</label>
                      <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" className={styles.input} />
                    </div>
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label}>I&apos;m interested in</label>
                    <select name="interest" value={form.interest} onChange={handleChange} className={styles.select}>
                      <option value="">Select a topic</option>
                      {interests.map(i => <option key={i} value={i}>{i}</option>)}
                    </select>
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label}>Message *</label>
                    <textarea name="message" value={form.message} onChange={handleChange} required rows="5" placeholder="Tell us about your project or requirements..." className={styles.textarea} />
                  </div>
                  <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"} <ArrowRight size={16} />
                  </button>
                </form>
              )}
            </motion.div>

            {/* Info */}
            <div className={styles.infoCol}>
              {contactInfo.map((info) => (
                <motion.div key={info.label} className={styles.infoCard} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                  <span className={styles.infoIcon}>{info.icon}</span>
                  <div>
                    <h4 className={styles.infoLabel}>{info.label}</h4>
                    {info.href ? (
                      <a href={info.href} className={styles.infoLink}>{info.value}</a>
                    ) : (
                      <p className={styles.infoValue}>{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
