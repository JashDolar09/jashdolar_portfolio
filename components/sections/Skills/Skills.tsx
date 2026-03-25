import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Cpu } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { skillsData } from "@/app/data";

function SkillCard({ skill, index }: { skill: any, index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <ScrollReveal key={skill.name} delay={index * 50}>
      <Card 
        className="group border-0 shadow-lg transition-all duration-300 glass-effect hover-lift outline-none focus:bg-blue-50/50 active:bg-blue-50/50 hover:bg-blue-50/50"
        style={{ background: 'rgba(255, 255, 255, 0.45)', backdropFilter: 'blur(16px)' }}
        tabIndex={0}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={() => setIsHovered(true)}
        onTouchEnd={() => setIsHovered(false)}
      >
        <CardContent className="p-6 flex flex-col items-center justify-center min-h-[160px]">
          <div className="w-16 h-16 relative mb-4">
            <img
              src={skill.image}
              alt={skill.name}
              className={`w-full h-full object-contain transition-all duration-800 transform drop-shadow-sm ${isHovered ? 'filter-none opacity-100 scale-110' : 'filter grayscale opacity-70 scale-100'}`}
            />
          </div>
          <span className={`font-semibold transition-colors duration-300 text-center ${isHovered ? 'text-blue-600' : 'text-gray-700'}`}>
            {skill.name}
          </span>
        </CardContent>
      </Card>
    </ScrollReveal>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 relative">
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-16 flex justify-center items-center text-center">
              <Cpu className="w-10 h-10 md:w-12 md:h-12 mr-3 text-purple-600" />
              Skills & Technologies
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {skillsData.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
