"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skills = [
    "Active Inference",
    "Neuroscience",
    "Chemistry",
    "Biology",
    "Mathematics",
    "Critical Thinking",
    "Research",
    "Problem Solving",
    "Interdisciplinary Learning",
    "Scientific Reasoning",
    "Team Collaboration",
  ]

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="font-bold text-[#2dd4bf] font-alpina italic">About</span> <span className="font-bold text-neutral-200 font-alpina italic">Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative w-full aspect-[3/4] max-w-sm mx-auto overflow-hidden rounded-xl gradient-border">
                <Image
                  src="/images/rohit-profile.png"
                  alt="Rohit Shenoy"
                  fill
                  className="object-cover object-center"
                  style={{ objectPosition: "center 30%" }} // This moves the focus point up to show more of the body
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-gradient-start/20 to-transparent" />
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold gradient-text font-alpina italic">Who am I?</h3>
              <p className="text-foreground/80">
                I'm a student at Bellarmine College Preparatory, Class of 2028, passionate about exploring the
                intersections of science, technology, and interdisciplinary learning. My interests span from
                neuroscience and active inference to chemistry and competitive academic pursuits.
              </p>
              <p className="text-foreground/80">
                Through my internship at the Active Inference Institute and participation in activities like Quiz Bowl
                and Speech and Debate, I've developed a unique perspective on problem-solving and scientific inquiry. I'm
                particularly interested in how computational models can help us understand complex systems like the
                human brain. I'm also interested in UI/UX design and building products that are both functional and
                aesthetically pleasing.
              </p>

              <div>
                <h4 className="text-xl font-medium mb-3 gradient-text font-alpina italic relative inline-block">
                  My Skills
                  <span className="absolute left-0 right-0 bottom-0 h-1 bg-[#2dd4bf]/30 rounded-full"></span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-sm border border-[#2dd4bf] text-white bg-transparent px-3 py-1 rounded-full font-mono uppercase">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
