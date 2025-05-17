"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, GraduationCap, Award, FlaskRoundIcon as Flask, Brain, Mic } from "lucide-react"

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const experiences = [
    {
      title: "Research Intern",
      organization: "Active Inference Institute",
      period: "September 2024 - Present",
      description:
        "Working on cutting-edge research projects applying active inference principles. First project involved autonomous navigation systems. Currently working on using active inference to model neurodegenerative diseases--more details coming soon.",
      skills: ["Active Inference", "Autonomous Systems", "Neuroscience", "Medical Modeling"],
      icon: Brain,
    },
    {
      title: "Quiz Bowl",
      organization: "History, Fine Arts, and Science",
      period: "2022 - Present",
      description:
        "Participated in the 2024 Middle School National Championship Tournament. Explored interdisciplinary fields and developed quick critical thinking skills across various subjects on both the regional and national level.",
      skills: ["Critical Thinking", "Interdisciplinary Knowledge", "Team Collaboration", "Quick Recall"],
      icon: Award,
    },
    {
      title: "Science Olympiad",
      organization: "Forensics, Chemistry, and Optics",
      period: "2020 - Present",
      description:
        "Competed in the Stanford Invitational Science Olympiad. Explored chemistry and other scientific disciplines through hands-on experiments and theoretical problem-solving. Developed laboratory skills and scientific reasoning.",
      skills: ["Chemistry", "Laboratory Skills", "Scientific Reasoning", "Team Collaboration"],
      icon: Flask,
    },
    {
      title: "Speech and Debate",
      organization: "LD Debate and Extemporaneous Speaking",
      period: "2024 - Present",
      description:
        "Reached elimination rounds at the Ryan Mills Tournament. Developed critical thinking, research, and public speaking skills through competitive debate.",
      skills: ["Public Speaking", "Critical Thinking", "Argumentation", "Research"],
      icon: Mic,
    },
  ]

  const education = [
    {
      degree: "High School",
      institution: "Bellarmine College Preparatory",
      period: "Class of 2028",
      description: "Focusing on STEM subjects with particular interest in computer science, mathematics, and biology.",
    },
  ]

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="font-bold text-[#2dd4bf] font-alpina italic">Experience</span>
          </h2>

          <div className="space-y-16">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <Briefcase className="h-6 w-6 gradient-text" />
                <h3 className="text-2xl font-semibold">Experiences</h3>
              </div>

              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ y: 50, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  >
                    <Card className="gradient-border overflow-hidden bg-card">
                      <div className='border border-[#2dd4bf] rounded-xl p-1 h-full w-full'>
                        <CardHeader>
                          <div className="flex justify-between items-start">
                            <div className="flex items-center gap-3">
                              <div className="bg-gradient-to-r from-gradient-start to-gradient-end p-3 rounded-full">
                                {exp.icon && <exp.icon className="h-5 w-5 text-background" />}
                              </div>
                              <div>
                                <CardTitle>{exp.title}</CardTitle>
                                <CardDescription>{exp.organization}</CardDescription>
                              </div>
                            </div>
                            <Badge variant="outline" className="text-white bg-transparent px-3 py-1 rounded-full text-xs font-semibold border border-[#2dd4bf] font-mono uppercase">
                              {exp.period}
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-foreground/80 mb-4">{exp.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {exp.skills.map((skill) => (
                              <Badge key={skill} variant="secondary" className="text-xs border border-[#2dd4bf] text-[#2dd4bf] bg-transparent px-3 py-1 rounded-full font-mono uppercase">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-8">
                <GraduationCap className="h-6 w-6 gradient-text" />
                <h3 className="text-2xl font-semibold font-alpina italic">Education</h3>
              </div>

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ y: 50, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  >
                    <Card className="gradient-border bg-card">
                      <div className='border border-[#2dd4bf] rounded-xl p-1 h-full w-full'>
                        <CardHeader>
                          <div className="flex justify-between items-start">
                            <div className="flex items-center gap-3">
                              <div className="bg-gradient-to-r from-gradient-start to-gradient-end p-3 rounded-full">
                                <GraduationCap className="h-5 w-5 text-background" />
                              </div>
                              <div>
                                <CardTitle className="font-alpina">{edu.degree}</CardTitle>
                                <CardDescription>{edu.institution}</CardDescription>
                              </div>
                            </div>
                            <Badge variant="outline" className="text-white bg-transparent px-3 py-1 rounded-full text-xs font-semibold border border-[#2dd4bf] font-mono">
                              {edu.period}
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-foreground/80">{edu.description}</p>
                        </CardContent>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
