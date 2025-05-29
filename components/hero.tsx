"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { motion } from "framer-motion"

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Pure black background */}
      <div className="absolute inset-0 bg-black z-0" />

      {/* Subtle gray grid pattern with faded lines */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(120,120,120,0.10) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(120,120,120,0.10) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Minimal background elements */}
      <div className="absolute inset-0 z-0">
        {/* Abstract shapes */}
        <motion.div
          className="absolute -top-20 -left-20 w-96 h-96 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(45,212,191,0.10) 0%, transparent 80%)" }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.15, 0.2, 0.15],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />

        <motion.div
          className="absolute -bottom-40 -right-20 w-[30rem] h-[30rem] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(45,212,191,0.08) 0%, transparent 80%)" }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />

        {/* Subtle animated gradient shapes */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 400 + 100}px`,
              height: `${Math.random() * 400 + 100}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              background: "radial-gradient(circle, rgba(45,212,191,0.06) 0%, transparent 80%)",
              opacity: 0.08,
            }}
            animate={{
              y: [0, Math.random() * 50 - 25],
              x: [0, Math.random() * 50 - 25],
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl mb-6 text-neutral-100">
            <span className="block font-normal text-neutral-300">Hi, I'm</span>
            <span className="italic font-alpina text-[#2dd4bf] relative">
              Rohit Shenoy
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-2xl text-neutral-300 max-w-2xl mx-auto mb-10"
          >
            A student exploring the intersections of science, artificial intelligence, and interdisciplinary learning.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-6 mb-14"
          >
            <Button
              asChild
              size="lg"
              className="border border-[#2dd4bf] text-[#2dd4bf] hover:bg-[#2dd4bf]/10 bg-transparent transition-colors px-8 py-3 rounded-md shadow-none"
            >
              <a href="#contact">Get in Touch</a>
            </Button>
            <Button variant="outline" size="lg" asChild className="border border-[#2dd4bf] text-[#2dd4bf] hover:bg-[#2dd4bf]/10 bg-transparent px-8 py-3 rounded-md shadow-none">
              <a href="#projects">View My Work</a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex justify-center space-x-6"
          >
            <Button 
              variant="outline" 
              size="icon" 
              asChild 
              className="text-white hover:text-white active:bg-[#2dd4bf]/20 focus:bg-[#2dd4bf]/20 border border-[#2dd4bf] bg-transparent transition-colors rounded-md"
            >
              <a href="https://github.com/jojigames" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-6 w-6" />
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              asChild 
              className="text-white hover:text-white active:bg-[#2dd4bf]/20 focus:bg-[#2dd4bf]/20 border border-[#2dd4bf] bg-transparent transition-colors rounded-md"
            >
              <a
                href="https://www.linkedin.com/in/rohit-shenoy-75a8ab223/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              asChild 
              className="text-white hover:text-white active:bg-[#2dd4bf]/20 focus:bg-[#2dd4bf]/20 border border-[#2dd4bf] bg-transparent transition-colors rounded-md"
            >
              <a href="mailto:rohitshenoy2010@gmail.com" aria-label="Email">
                <Mail className="h-6 w-6" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-0 right-0 mx-auto flex justify-center animate-bounce"
      >
        <a href="#about" aria-label="Scroll down" className="text-[#2dd4bf] hover:text-white transition-colors">
          <ArrowDown className="h-6 w-6" />
        </a>
      </motion.div>
    </section>
  )
}
