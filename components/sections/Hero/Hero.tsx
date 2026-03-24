import React from "react";
import styles from "./Hero.module.css";
import { Button } from "@/components/ui/button";
import { Rocket, Download } from "lucide-react";
import { TypingAnimation } from "@/components/typing-animation";
import { ScrollReveal } from "@/components/scroll-reveal";
import { socialLinks } from "@/app/data";

export default function Hero() {
  return (
    <section id="home" className={styles.heroSection}>
      <div className={styles.heroContainer}>
        <ScrollReveal>
          <div className={styles.contentWrapper}>
            <div className="mb-8">
              <div className={styles.logoContainer}>
                <div className={`${styles.logoInner} animate-pulse-slow glow-effect`}>
                  JD
                </div>
                <div className={styles.logoGlow}></div>
              </div>
            </div>

            <h1 className={styles.heroTitle}>
              Jash Dolar
            </h1>

            <div className={styles.heroSubtitle}>
              <TypingAnimation
                texts={[
                  "Web Developer",
                  "Frontend Specialist",
                  "React Expert",
                  "Code. Design. Build.",
                ]}
                className="text-gradient"
              />
            </div>

            <div className={styles.buttonGroup}>
              <Button
                size="lg"
                className={`${styles.primaryBtn} hover-lift glow-effect`}
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <Rocket className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Contact Me
              </Button>

              <Button
                variant="outline"
                size="lg"
                className={`${styles.secondaryBtn} hover-lift glass-effect`}
              >
                <Download className="w-5 h-5 mr-2" />
                Download CV
              </Button>
            </div>

            <div className={styles.socialWrapper}>
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className={`${styles.socialIcon} hover-lift`}
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>

      <div className={styles.scrollIndicatorContainer}>
        <div className={styles.scrollIndicatorOutline}>
          <div className={styles.scrollIndicatorDot}></div>
        </div>
      </div>
    </section>
  );
}
