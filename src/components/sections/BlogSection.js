"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, FileText } from "lucide-react";
import styles from "./BlogSection.module.css";

const blogs = [
  {
    slug: "powering-indias-intelligent-energy-future",
    category: "Company Vision",
    title: "Powering India’s Intelligent Energy Future",
    excerpt:
      "Electric mobility, battery storage, renewable integration, and smart energy infrastructure are becoming the backbone of modern economies.",
    date: "Jan 15, 2026",
    readTime: "5 min",
    color: "#F59E0B",
    image: "/assets/intelligent-energy.png",
  },
];

export default function BlogSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className={styles.section} ref={ref} id="blog">
      <div className={styles.container}>
        <div className={styles.header}>
          <div>
            <span className={styles.supertitle}>
              <span className={styles.bar} />
              Latest Insights
            </span>
            <h2 className={styles.title}>Knowledge. Innovation. Impact.</h2>
          </div>
          <Link href="/blog" className={styles.viewAll}>
            View All Blogs
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        <div className={styles.grid}>
          {blogs.map((blog, idx) => {
            const CardWrapper = blog.slug ? Link : "div";
            const wrapperProps = blog.slug ? { href: `/blog/${blog.slug}`, className: styles.card } : { className: styles.card, style: { cursor: "default" } };
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * idx }}
              >
                <CardWrapper {...wrapperProps}>
                  <div className={styles.cardImage} style={{ background: `linear-gradient(135deg, ${blog.color}15, transparent)`, padding: blog.image ? 0 : undefined }}>
                    {blog.image ? (
                      <Image src={blog.image} alt={blog.title} width={400} height={180} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    ) : (
                      <FileText className={styles.cardEmoji} style={{ color: blog.color }} />
                    )}
                  </div>
                  <div className={styles.cardBody}>
                    <span
                      className={styles.category}
                      style={{
                        color: blog.color,
                        borderColor: `${blog.color}40`,
                      }}
                    >
                      {blog.category}
                    </span>
                    <h3 className={styles.cardTitle}>{blog.title}</h3>
                    <p className={styles.cardExcerpt}>{blog.excerpt}</p>
                    <div className={styles.cardFooter}>
                      <span className={styles.meta}>{blog.date} · {blog.readTime || "5 min"}</span>
                      {blog.slug && (
                        <span className={styles.readMore} style={{ color: blog.color }}>
                          Read <ArrowRight size={14} style={{ display: "inline", verticalAlign: "middle" }}/>
                        </span>
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
  );
}
