"use client"

import type React from "react"

import { forwardRef, useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone } from "lucide-react"
import { sendEmail } from "@/app/actions/email"

export const ContactSection = forwardRef<HTMLElement>((_, ref) => {
  const [formState, setFormState] = useState({
    name:"",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      // Add name field for compatibility with the sendEmail function
      await sendEmail({ ...formState })
      setIsSubmitted(true)
      setFormState({ name:"",email: "", message: "" })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    } catch (err) {
      setError("Failed to send message. Please try again later."+ err)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section ref={ref} id="contact" className="relative min-h-screen w-full py-20 px-4 md:px-10">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-gray-400 uppercase tracking-wider mb-2">GET IN TOUCH</p>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
            Contact Me
          </h2>
        </div>

        <div className="bg-black border border-white/20 rounded-2xl p-8 md:p-12">
          {/* Direct contact options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            <a
              href="mailto:krutagya.kaneria.cg@gmail.com"
              className="flex items-center justify-center gap-3 py-4 px-6 bg-black border border-white/20 rounded-xl hover:bg-gray-900 transition-colors"
            >
              <Mail className="h-5 w-5 text-pink-500" />
              <span className="text-white">krutagya.kaneria.cg@gmail.com</span>
            </a>
            <a
              href="https://wa.me/9818377959"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 py-4 px-6 bg-black border border-white/20 rounded-xl hover:bg-gray-900 transition-colors"
            >
              <Phone className="h-5 w-5 text-pink-500" />
              <span className="text-white">WhatsApp</span>
            </a>
          </div>

          <div className="text-center mb-8">
            <p className="text-gray-400">Or send a message</p>
          </div>

          {/* Contact form */}
          <form onSubmit={handleSubmit} className="space-y-6">
          <div>
              <input
                type="text"
                name="name"
                value={formState.name}
                onChange={handleChange}
                placeholder="Your Name"
                
                required
                className="w-full px-6 py-4 bg-black border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 transition-colors"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full px-6 py-4 bg-black border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 transition-colors"
              />
            </div>

            <div>
              <textarea
                name="message"
                value={formState.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                rows={6}
                className="w-full px-6 py-4 bg-black border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 transition-colors"
              />
            </div>

            {error && <div className="text-red-500 text-center">{error}</div>}

            <div>
              <motion.button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 rounded-xl font-medium transition-colors ${
                  isSubmitted ? "bg-green-600 text-white" : "bg-gradient-to-r from-pink-500 to-red-500 text-white"
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Sending...</span>
                  </div>
                ) : isSubmitted ? (
                  "Message Sent!"
                ) : (
                  "Send Message"
                )}
              </motion.button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
})

ContactSection.displayName = "ContactSection"
