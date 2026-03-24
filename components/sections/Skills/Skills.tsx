import React from "react";
import styles from "./Skills.module.css";
import { Card, CardContent } from "@/components/ui/card";
import { Cpu } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { skillsData } from "@/app/data";

export default function Skills() {
  return (
    <section id="skills" className={styles.skillsSection}>
      <div className={styles.skillsContainer}>
        <ScrollReveal>
          <div className={styles.contentWrapper}>
            <h2 className={styles.skillsTitle}>
              <Cpu className={styles.skillsTitleIcon} />
              Skills & Technologies
            </h2>
            <div className={styles.skillsGrid}>
              {skillsData.map((skill, index) => (
                <ScrollReveal key={skill.name} delay={index * 50}>
                  <Card className={`${styles.skillCard} glass-effect hover-lift`}>
                    <CardContent className={styles.skillCardContent}>
                      <div className={styles.skillImageWrapper}>
                        <img
                          src={skill.image}
                          alt={skill.name}
                          className={styles.skillImage}
                        />
                      </div>
                      <span className={styles.skillName}>
                        {skill.name}
                      </span>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
