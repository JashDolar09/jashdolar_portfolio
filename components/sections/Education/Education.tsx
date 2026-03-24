"use client";

import React from "react";
import styles from "./Education.module.css";
import { GraduationCap } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { EducationReveal } from "@/components/education-reveal";
import { educationData } from "@/app/data";

export default function Education() {
  return (
    <section id="education" className={styles.eduSection}>
      <div className={styles.eduContainer}>
        <ScrollReveal>
          <h2 className={styles.eduHeader}>
            <GraduationCap className={styles.eduIcon} />
            My Education
          </h2>
          <div className={styles.eduList}>
            {educationData.map((edu, index) => (
              <EducationReveal key={edu.name} delay={index * 150}>
                <div className={styles.eduCard}>
                  <div className={styles.eduImageBox}>
                    {edu.hoverImage ? (
                      <>
                        <img 
                          src={edu.image} 
                          alt={edu.name} 
                          className={`${styles.eduImgPrimary} ${styles.hasHover}`} 
                        />
                        <img 
                          src={edu.hoverImage} 
                          alt={edu.name} 
                          className={styles.eduImgSecondary} 
                        />
                      </>
                    ) : (
                      <>
                        <div className={styles.eduOverlay} />
                        <img 
                          src={edu.image} 
                          alt={edu.name} 
                          className={styles.eduImgPrimary} 
                        />
                      </>
                    )}
                  </div>
                  <div className={styles.eduContent}>
                    <div className={styles.eduBadge}>{edu.year}</div>
                    <h3 className={styles.eduTitle}>{edu.name}</h3>
                    <p className={styles.eduDegree}>{edu.degree}</p>
                  </div>
                  <div className={styles.eduGlow} />
                </div>
              </EducationReveal>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
