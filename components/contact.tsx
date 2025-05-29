"use client"

import type React from "react"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Mail, MessageSquare, Linkedin, Github, Send, Twitter } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { useForm, ValidationError } from '@formspree/react'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  // Replace "YOUR_FORM_ID" with your actual Formspree form ID
  const [formState, handleFormspreeSubmit] = useForm("mldbdbvy");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Use Formspree's submit handler
    await handleFormspreeSubmit(e);
    
    // Only show success if the form was actually submitted
    if (formState.succeeded) {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      e.currentTarget.reset();
      // Clear all fields manually in case reset doesn't work
      Array.from(e.currentTarget.elements).forEach((el) => {
        if (el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement) {
          el.value = "";
        }
      });
    } else if (formState.errors) {
      toast({
        title: "Error sending message",
        description: "Please check your form inputs and try again.",
        variant: "destructive",
      });
    }
    
    setIsSubmitting(false);
  }

  const socialLinks = [
    {
      icon: Github,
      title: "GitHub",
      link: "https://github.com/jojicoding",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/rohit-shenoy-75a8ab223/",
    },
    {
      icon: Mail,
      title: "Email",
      link: "mailto:rohitshenoy2010@gmail.com",
    },
    {
      icon: Twitter,
      title: "Twitter",
      link: "https://twitter.com/X",
    },
  ]

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="font-bold text-[#2dd4bf] font-alpina italic">Contact</span>
          </h2>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full"
          >
            <Card className="gradient-border bg-card">
              <div className='border border-[#2dd4bf] rounded-xl p-1 h-full w-full'>
                <CardHeader>
                  <CardTitle className="font-alpina italic text-center">Send a Message</CardTitle>
                  <CardDescription className="text-center">I'll get back to you as soon as possible.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium font-mono uppercase">
                          Name
                        </label>
                        <Input id="name" name="name" required className="gradient-border bg-secondary" />
                        <ValidationError prefix="Name" field="name" errors={formState.errors} />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium font-mono uppercase">
                          Email
                        </label>
                        <Input id="email" name="email" type="email" required className="gradient-border bg-secondary" />
                        <ValidationError prefix="Email" field="email" errors={formState.errors} />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium font-mono uppercase">
                        Subject
                      </label>
                      <Input id="subject" name="subject" required className="gradient-border bg-secondary" />
                      <ValidationError prefix="Subject" field="subject" errors={formState.errors} />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium font-mono uppercase">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        className="gradient-border bg-secondary"
                      />
                      <ValidationError prefix="Message" field="message" errors={formState.errors} />
                    </div>
                    <Button
                      type="submit"
                      className="w-full text-[#2dd4bf] bg-transparent hover:bg-[#2dd4bf]/10 transition-colors px-6 py-3 rounded-md border border-[#2dd4bf] shadow-none"
                      disabled={isSubmitting || formState.submitting}
                    >
                      {isSubmitting || formState.submitting ? (
                        <span className="flex items-center gap-2">
                          <span className="animate-spin h-4 w-4 border-2 border-current border-t-transparent rounded-full" />
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send className="h-4 w-4" />
                          Send Message
                        </span>
                      )}
                    </Button>
                  </form>

                  <div className="mt-8 flex justify-center space-x-6">
                    {socialLinks.map((item, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="icon"
                        asChild
                        className="text-white hover:text-white active:bg-[#2dd4bf]/20 focus:bg-[#2dd4bf]/20 border border-[#2dd4bf] bg-transparent transition-colors rounded-md"
                      >
                        <a
                          href={item.link}
                          target={item.link.startsWith("mailto") ? "_self" : "_blank"}
                          rel="noopener noreferrer"
                          aria-label={item.title}
                        >
                          <item.icon className="h-6 w-6" />
                        </a>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
