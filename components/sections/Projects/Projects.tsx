"use client";

import React from "react";
import styles from "./Projects.module.css";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Briefcase, 
  ExternalLink, 
  Github, 
  Star 
} from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { projectsData } from "@/app/data";

export default function Projects() {
  return (
    <section id="projects" className={styles.projectsSection}>
      <div className={styles.projectsContainer}>
        <ScrollReveal>
          <div className={styles.projectsWrapper}>
            <h2 className={styles.projectsHeader}>
              <Briefcase className={styles.headerIcon} />
              Featured Projects
            </h2>
            <div className={styles.projectsGrid}>
              {projectsData.map((project, index) => (
                <ScrollReveal key={project.title} delay={index * 150}>
                  <Card
                    className={`${styles.projectCard} glass-effect hover-lift ${
                      project.featured ? "lg:col-span-2" : ""
                    }`}
                  >
                    {project.featured && (
                      <div className={styles.featuredBadgeWrapper}>
                        <Badge className={`${styles.featuredBadge} bg-gradient-to-r from-yellow-400 to-orange-500 text-white`}>
                          <Star className={styles.starIcon} />
                          Featured
                        </Badge>
                      </div>
                    )}

                    <CardHeader className={styles.cardHeader}>
                      <div
                        className={`${styles.imageWrapper} bg-gradient-to-br ${project.gradient}`}
                      >
                        {project.image ? (
                          <img 
                            src={project.image} 
                            alt={project.title} 
                            className={styles.projectImg} 
                          />
                        ) : (
                          <project.icon className={styles.projectIconDefault} />
                        )}
                        <div className={styles.imageOverlay}></div>
                        <div className={`${styles.shimmerEffect} shimmer`}></div>
                      </div>
                      <CardTitle className={styles.projectTitle}>
                        {project.title}
                      </CardTitle>
                      <CardDescription className={styles.projectDescription}>
                        {project.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className={styles.cardContent}>
                      <div className={styles.tagsWrapper}>
                        {project.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="outline"
                            className={`${styles.tagBadge} glass-effect`}
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className={styles.actionsWrapper}>
                        <Button
                          variant="outline"
                          className={`${styles.actionButton} glass-effect bg-transparent group/btn`}
                          onClick={() =>
                            window.open(project.live || project.github, "_blank")
                          }
                        >
                          <ExternalLink className={styles.buttonIconLeft} />
                          View Live
                        </Button>
                        <Button
                          variant="outline"
                          className={`${styles.actionButton} glass-effect bg-transparent group/btn`}
                          onClick={() =>
                            window.open(project.github, "_blank")
                          }
                        >
                          <Github className={styles.buttonIconLeftGitHub} />
                          Code
                        </Button>
                      </div>
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
