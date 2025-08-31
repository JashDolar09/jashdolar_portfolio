"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  ExternalLink,
  Code,
  Database,
  Globe,
  GitBranch,
  Menu,
  X,
  Download,
  Star,
  Zap,
  Rocket,
} from "lucide-react";
import { AnimatedBackground } from "@/components/animated-background";
import { FloatingElements } from "@/components/floating-elements";
import { ScrollReveal } from "@/components/scroll-reveal";
import { TypingAnimation } from "@/components/typing-animation";
import { useState, useEffect } from "react";

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-x-hidden">
      <AnimatedBackground />
      <FloatingElements />

      {/* Navigation */}
      <nav className="fixed top-0 w-full glass-effect z-50 border-b border-white/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center overflow-hidden animate-pulse-slow glow-effect">
                <img
                  src="/logo.png"
                  alt="Logo"
                  className="w-full h-full object-cover"
                />
              </div>

              <h1 className="text-xl font-bold text-gray-900">Jash Dolar</h1>
            </div>

            <div className="hidden md:flex space-x-8">
              {["Home", "About", "Skills", "Projects", "Contact"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-700 hover:text-blue-600 transition-all duration-300 relative group"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                )
              )}
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden glass-effect border-t border-white/20">
            <div className="container mx-auto px-4 py-4 space-y-4">
              {["Home", "About", "Skills", "Projects", "Contact"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block text-gray-700 hover:text-blue-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                )
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-4 relative"
      >
        <div className="container mx-auto text-center relative z-10">
          <ScrollReveal>
            <div className="max-w-5xl mx-auto">
              <div className="mb-8">
                <div className="w-32 h-32 mx-auto mb-8 relative">
                  <div className="w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 rounded-full flex items-center justify-center text-white text-4xl font-bold animate-pulse-slow glow-effect">
                    JD
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 rounded-full animate-ping opacity-20"></div>
                </div>
              </div>

              <h1 className="text-6xl md:text-8xl font-bold mb-6 text-gradient animate-gradient">
                Jash Dolar
              </h1>

              <div className="text-2xl md:text-3xl text-gray-600 mb-8 font-light h-16">
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

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg hover-lift glow-effect group"
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
                  className="glass-effect border-2 border-blue-600/30 hover:bg-blue-600/10 px-8 py-4 text-lg hover-lift bg-transparent"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download CV
                </Button>
              </div>

              <div className="flex justify-center space-x-6">
                {[
                  {
                    icon: Github,
                    href: "https://github.com/JashDolar09",
                    label: "GitHub",
                  },
                  {
                    icon: Linkedin,
                    href: "https://www.linkedin.com/in/jash-Dolar-88a06b1a9/",
                    label: "LinkedIn",
                  },
                  {
                    icon: Mail,
                    href: "mailto:jashdolar@gmail.com",
                    label: "Email",
                  },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    className="w-12 h-12 glass-effect rounded-full flex items-center justify-center text-gray-600 hover:text-blue-600 hover-lift transition-all duration-300"
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 px-4 relative">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-12">
                About Me
              </h2>
              <Card className="glass-effect hover-lift border-0 shadow-2xl">
                <CardContent className="p-8 md:p-12">
                  <div className="flex items-center justify-center mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                      <Star className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
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

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 relative">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-16 text-center">
                Skills & Technologies
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    icon: Code,
                    title: "Frontend",
                    color: "from-blue-500 to-cyan-500",
                    skills: ["HTML5", "CSS3", "JavaScript", "React.js"],
                  },
                  {
                    icon: Globe,
                    title: "Backend",
                    color: "from-green-500 to-emerald-500",
                    skills: ["Node.js", "REST APIs"],
                  },
                  {
                    icon: Database,
                    title: "Database",
                    color: "from-purple-500 to-pink-500",
                    skills: ["MongoDB", "MySQL"],
                  },
                  {
                    icon: GitBranch,
                    title: "Tools",
                    color: "from-orange-500 to-red-500",
                    skills: ["Git", "GitHub", "Canva", "Word-Press"],
                  },
                ].map((category, index) => (
                  <ScrollReveal key={category.title} delay={index * 100}>
                    <Card className="glass-effect hover-lift border-0 shadow-xl group">
                      <CardHeader className="text-center pb-4">
                        <div
                          className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                        >
                          <category.icon className="w-8 h-8 text-white" />
                        </div>
                        <CardTitle className="text-xl text-gray-800">
                          {category.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2 justify-center">
                          {category.skills.map((skill) => (
                            <Badge
                              key={skill}
                              variant="secondary"
                              className="glass-effect hover:bg-blue-100 transition-colors duration-300"
                            >
                              {skill}
                            </Badge>
                          ))}
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

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 relative">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-16 text-center">
                Featured Projects
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "To-Do App",
                    description:
                      "A React-based to-do application designed for managing daily tasks, featuring a clean interface that helps users stay organized and productive.",
                    gradient: "from-green-400 to-blue-500",
                    icon: Code,
                    tags: ["JavaScript", "React", "Public"],
                    github: "https://to-do-listtracker.netlify.app/",
                    featured: true,
                  },
                  {
                    title: "Image Converter Site",
                    description:"PicShift is a free online tool to convert images between formats like PNG, JPG, and WebP.",
                    gradient: "from-blue-400 to-purple-500",
                    icon: Globe,
                    tags: ["HTML", "CSS","JavaScript", "Responsive"],
                    github: "https://picshift.netlify.app/",
                  },
                  {
                    title: "DSC Management Site",
                    description:
                      "The site is live, managing DSC history, client and user data, and admin roles. A payment method has been added for transactions with firms and companies.",
                    gradient: "from-orange-400 to-red-500",
                    icon: Database,
                    tags: ["JavaScript", "API", "Real-time"],
                    github: "https://www.findmydsc.in/",
                  },
                ].map((project, index) => (
                  <ScrollReveal key={project.title} delay={index * 150}>
                    <Card
                      className={`glass-effect hover-lift border-0 shadow-xl group relative overflow-hidden ${
                        project.featured ? "lg:col-span-2" : ""
                      }`}
                    >
                      {project.featured && (
                        <div className="absolute top-4 right-4 z-10">
                          <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
                            <Star className="w-3 h-3 mr-1" />
                            Featured
                          </Badge>
                        </div>
                      )}

                      <CardHeader className="pb-4">
                        <div
                          className={`w-full h-48 bg-gradient-to-br ${project.gradient} rounded-xl mb-4 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-500`}
                        >
                          <project.icon className="w-16 h-16 text-white z-10" />
                          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100"></div>
                        </div>
                        <CardTitle className="text-xl text-gray-800 group-hover:text-blue-600 transition-colors">
                          {project.title}
                        </CardTitle>
                        <CardDescription className="text-gray-600">
                          {project.description}
                        </CardDescription>
                      </CardHeader>

                      <CardContent>
                        <div className="flex gap-2 mb-6 flex-wrap">
                          {project.tags.map((tag) => (
                            <Badge
                              key={tag}
                              variant="outline"
                              className="glass-effect hover:bg-blue-50 transition-colors duration-300"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex gap-3">
                          <Button
                            variant="outline"
                            className="flex-1 glass-effect hover:bg-blue-50 group/btn bg-transparent"
                            onClick={() =>
                              window.open(project.github, "_blank")
                            }
                          >
                            <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:rotate-45 transition-transform duration-300" />
                            View Live
                          </Button>
                          <Button
                            variant="outline"
                            className="flex-1 glass-effect hover:bg-gray-50 group/btn bg-transparent"
                            onClick={() =>
                              window.open(project.github, "_blank")
                            }
                          >
                            <Github className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform duration-300" />
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

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 relative">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-16 text-center">
                Let's Connect
              </h2>
              <div className="grid lg:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <Card className="glass-effect hover-lift border-0 shadow-xl">
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                        <Zap className="w-6 h-6 mr-3 text-blue-600" />
                        Get In Touch
                      </h3>
                      <div className="space-y-6">
                        <div className="flex items-center space-x-4 group">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <Mail className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Email</p>
                            <p className="text-gray-800 font-medium">
                              jashdolar@gmail.com
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center space-x-4 group">
                          <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <Phone className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Phone</p>
                            <p className="text-gray-800 font-medium">
                              +91 99091 94914
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="glass-effect hover-lift border-0 shadow-xl">
                    <CardContent className="p-8">
                      <h4 className="text-xl font-semibold text-gray-900 mb-6">
                        Follow Me
                      </h4>
                      <div className="flex space-x-4">
                        {[
                          {
                            icon: Github,
                            href: "https://github.com/JashDolar09",
                            color: "from-gray-600 to-gray-800",
                          },
                          {
                            icon: Linkedin,
                            href: "https://www.linkedin.com/in/jash-Dolar-88a06b1a9/",
                            color: "from-blue-600 to-blue-800",
                          },
                          {
                            icon: Mail,
                            href: "mailto:jashdolar@gmail.com",
                            color: "from-red-500 to-pink-600",
                          },
                        ].map(({ icon: Icon, href, color }) => (
                          <a
                            key={href}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`w-12 h-12 bg-gradient-to-br ${color} rounded-full flex items-center justify-center text-white hover-lift glow-effect group`}
                          >
                            <Icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                          </a>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card className="glass-effect hover-lift border-0 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-2xl text-gray-900">
                      Send Message
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      Fill out the form below and I'll get back to you as soon
                      as possible.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName" className="text-gray-700">
                            First Name
                          </Label>
                          <Input
                            id="firstName"
                            placeholder="John"
                            className="glass-effect border-0 focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                        <div>
                          <Label htmlFor="lastName" className="text-gray-700">
                            Last Name
                          </Label>
                          <Input
                            id="lastName"
                            placeholder="Doe"
                            className="glass-effect border-0 focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-gray-700">
                          Email
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@example.com"
                          className="glass-effect border-0 focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <Label htmlFor="subject" className="text-gray-700">
                          Subject
                        </Label>
                        <Input
                          id="subject"
                          placeholder="Project Inquiry"
                          className="glass-effect border-0 focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <Label htmlFor="message" className="text-gray-700">
                          Message
                        </Label>
                        <Textarea
                          id="message"
                          placeholder="Tell me about your project..."
                          rows={4}
                          className="glass-effect border-0 focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 hover-lift glow-effect group">
                        <Rocket className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white py-12 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="mb-8">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">JD</span>
            </div>
            <h3 className="text-2xl font-bold mb-2">Jash Dolar</h3>
            <p className="text-gray-300">
              Web Developer | Code. Design. Build.
            </p>
          </div>

          <div className="border-t border-white/20 pt-8">
            <p className="text-gray-400">
              © 2024 Jash Dolar. All rights reserved. Made with ❤️ and lots of
              ☕
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
