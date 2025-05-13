"use client"

import type React from "react"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Mail, MessageSquare, Linkedin, Github, Send } from "lucide-react"
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
    } else if (formState.errors) {
      toast({
        title: "Error sending message",
        description: "Please check your form inputs and try again.",
        variant: "destructive",
      });
    }
    
    setIsSubmitting(false);
  }

  const contactItems = [
    {
      icon: Mail,
      title: "Email",
      value: "rohitshenoy2010@gmail.com",
      link: "mailto:rohitshenoy2010@gmail.com",
    },
    {
      icon: MessageSquare,
      title: "Discord",
      value: "jojicoding",
      link: "#", // Discord doesn't have a direct profile link format
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "Rohit Shenoy",
      link: "https://www.linkedin.com/in/rohit-shenoy-75a8ab223/",
    },
    {
      icon: Github,
      title: "GitHub",
      value: "jojicoding",
      link: "https://github.com/jojicoding",
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
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Get in <span className="gradient-text">Touch</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="gradient-border bg-card">
                <CardHeader>
                  <CardTitle className="gradient-text">Contact Information</CardTitle>
                  <CardDescription>Feel free to reach out through any of these channels.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactItems.map((item, index) => (
                    <a
                      key={index}
                      href={item.link}
                      target={item.link.startsWith("mailto") ? "_self" : "_blank"}
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 group hover:bg-gradient-start/5 p-2 rounded-lg transition-colors"
                    >
                      <div className="bg-gradient-to-r from-gradient-start to-gradient-end p-3 rounded-full">
                        <item.icon className="h-6 w-6 text-background" />
                      </div>
                      <div>
                        <h3 className="text-sm font-medium">{item.title}</h3>
                        <p className="text-foreground/80 group-hover:text-gradient-start transition-colors">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card className="gradient-border bg-card">
                <CardHeader>
                  <CardTitle className="gradient-text">Send a Message</CardTitle>
                  <CardDescription>I'll get back to you as soon as possible.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Name
                        </label>
                        <Input id="name" name="name" required className="gradient-border bg-secondary" />
                        <ValidationError prefix="Name" field="name" errors={formState.errors} />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email
                        </label>
                        <Input id="email" name="email" type="email" required className="gradient-border bg-secondary" />
                        <ValidationError prefix="Email" field="email" errors={formState.errors} />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Subject
                      </label>
                      <Input id="subject" name="subject" required className="gradient-border bg-secondary" />
                      <ValidationError prefix="Subject" field="subject" errors={formState.errors} />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
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
                      className="w-full bg-gradient-to-r from-gradient-start to-gradient-end hover:opacity-90 transition-opacity"
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
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
