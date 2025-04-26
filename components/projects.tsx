"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeProject, setActiveProject] = useState(0)

  const projects = [
    {
      title: "An Active Inference Approach to Autonomous Navigation",
      description:
        "A project at the Active Inference Institute that compared the effectiveness of active inference compared to a Deep-Q network. Won 2nd at regional science fair.",
      image: "/images/autonomous-navigation.jpeg",
      tags: ["Active Inference", "Autonomous Systems", "Research", "Science Fair"],
      githubUrl: "https://github.com/jojigames/Active-Inference-AutoNav-2025",
      hasCode: true,
    },
    {
      title: "Bayesian Modeling of the Acetylcholine System Under Alzheimer's Disease",
      description:
        "Ongoing project modeling the acetylcholine system in the brains of those affected with Alzheimer's disease using RxInfer.",
      image: "/images/alzheimers-model.webp",
      tags: ["Neuroscience", "Bayesian Modeling", "RxInfer", "Alzheimer's Research"],
      githubUrl: "https://github.com/jojigames/Active-Inference-Healthcare-2026",
      hasCode: true,
      unfinished: true,
    },
    {
      title: "Chatbot Study Tool for Quiz Bowl",
      description:
        "Upcoming project that leverages an LLM to analyze strengths and weaknesses of quiz bowl players and curates study material for them.",
      image: "/images/quiz-bowl.jpeg",
      tags: ["LLM", "Quiz Bowl", "Education", "AI"],
      comingSoon: true,
    },
  ]

  const nextProject = () => {
    setActiveProject((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setActiveProject((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            My <span className="gradient-text">Projects</span>
          </h2>

          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeProject * 100}%)` }}
              >
                {projects.map((project, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <Card className="overflow-hidden gradient-border bg-card">
                      <div className="relative h-[300px] md:h-[400px] overflow-hidden">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-500 hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 800px"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                        {project.unfinished && (
                          <div className="absolute top-4 right-4">
                            <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-500">In Progress</Badge>
                          </div>
                        )}
                        {project.comingSoon && (
                          <div className="absolute top-4 right-4">
                            <Badge className="bg-blue-500/20 text-blue-300 border-blue-500">Coming Soon</Badge>
                          </div>
                        )}
                      </div>
                      <CardHeader>
                        <CardTitle className="gradient-text">{project.title}</CardTitle>
                        <CardDescription className="text-foreground/70">{project.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="gradient-border">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                      {project.hasCode && (
                        <CardFooter className="flex justify-start">
                          <Button variant="outline" size="sm" asChild className="gradient-border">
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                              <Github className="mr-2 h-4 w-4" />
                              Code
                            </a>
                          </Button>
                        </CardFooter>
                      )}
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center mt-8 gap-4">
              <Button
                variant="outline"
                size="icon"
                onClick={prevProject}
                aria-label="Previous project"
                className="gradient-border"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              <div className="flex gap-2">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveProject(index)}
                    className={cn(
                      "w-3 h-3 rounded-full transition-colors",
                      index === activeProject
                        ? "bg-gradient-to-r from-gradient-start to-gradient-end"
                        : "bg-muted-foreground/30",
                    )}
                    aria-label={`Go to project ${index + 1}`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextProject}
                aria-label="Next project"
                className="gradient-border"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
