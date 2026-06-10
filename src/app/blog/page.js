"use client";

import { motion } from "framer-motion";
import { FileText, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import styles from "./blog.module.css";

const articles = [
  { slug: "powering-indias-intelligent-energy-future", category: "Company Vision", title: "Powering India’s Intelligent Energy Future", excerpt: "Electric mobility, battery storage, renewable integration, and smart energy infrastructure are becoming the backbone of modern economies.", date: "Jan 15, 2026", readTime: "5 min", color: "#F59E0B", image: "/assets/intelligent-energy.png" },
];

export default function BlogPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroGlow} />
        <div className={styles.container}>
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className={styles.supertitle}><span className={styles.bar} />Blog & Insights</span>
            <h1 className={styles.heroTitle}>Knowledge. Innovation. <span className={styles.hl}>Impact.</span></h1>
            <p className={styles.heroDesc}>Technical articles, industry analysis and company updates from the Voltava engineering team.</p>
          </motion.div>
        </div>
      </section>

      <section className={styles.gridSection}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {articles.map((article, index) => {
              const CardWrapper = article.slug ? Link : "div";
              const wrapperProps = article.slug ? { href: `/blog/${article.slug}`, className: styles.card } : { className: styles.card, style: { cursor: "default" } };
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <CardWrapper {...wrapperProps}>
                    <div className={styles.cardImage} style={{ background: `linear-gradient(135deg, ${article.color}15, transparent)`, padding: article.image ? 0 : undefined }}>
                      {article.image ? (
                        <Image src={article.image} alt={article.title} width={400} height={180} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      ) : (
                        <FileText className={styles.cardEmoji} style={{ color: article.color }} />
                      )}
                    </div>
                    <div className={styles.cardBody}>
                      <span className={styles.category} style={{ color: article.color, borderColor: `${article.color}40` }}>
                        {article.category}
                      </span>
                      <h3 className={styles.cardTitle}>{article.title}</h3>
                      <p className={styles.cardExcerpt}>{article.excerpt}</p>
                      
                      <div className={styles.cardFoot}>
                        <span className={styles.meta}>{article.date} · {article.readTime}</span>
                        {article.slug && (
                          <span className={styles.readMore} style={{ color: article.color }}>Read <ArrowRight size={14} style={{ display: "inline", verticalAlign: "middle" }}/></span>
                        )}
                      </div>
                    </div>
                  </CardWrapper>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
