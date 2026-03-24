import React from "react";
import styles from "./About.module.css";
import { Card, CardContent } from "@/components/ui/card";
import { User, Star } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";

export default function About() {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.aboutContainer}>
        <ScrollReveal>
          <div className={styles.contentWrapper}>
            <h2 className={styles.aboutTitle}>
              <User className={styles.aboutTitleIcon} />
              About Me
            </h2>
            <Card className={`${styles.aboutCard} glass-effect hover-lift`}>
              <CardContent className={styles.cardContent}>
                <div className={styles.starIconWrapper}>
                  <div className={styles.starIconCircle}>
                    <Star className={styles.starIcon} />
                  </div>
                </div>
                <p className={styles.aboutText}>
                  I'm Jash Dolar, a passionate and motivated web developer
                  dedicated to building clean, responsive, and user-focused
                  websites. I enjoy learning new technologies and solving
                  real-world problems with code.
                </p>
              </CardContent>
            </Card>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
