'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Zap, Github, Twitter, Linkedin, Mail, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

const footerLinks = [
  { title: 'Υπηρεσίες', links: [
    { name: 'Ιστοσελίδα', href: '/website' },
    { name: 'Chatbot', href: '/chatbot' },
    { name: 'Voice Assistant', href: '/voice-assistant' },
    { name: 'Avatar', href: '/avatar' },
    { name: 'Marketing', href: '/marketing' },
    { name: 'AI Workflows', href: '/ai-workflows' },
  ]},
  { title: 'Εταιρεία', links: [
    { name: 'Σχετικά με εμάς', href: '/about' },
    { name: 'Επικοινωνία', href: '/contact' },
    { name: 'Καριέρα', href: '/careers' },
    { name: 'Blog', href: '/blog' },
  ]},
  { title: 'Νομικά', links: [
    { name: 'Όροι Χρήσης', href: '/terms' },
    { name: 'Πολιτική Απορρήτου', href: '/privacy' },
    { name: 'Cookies', href: '/cookies' },
  ]},
]

const socialLinks = [
  { name: 'GitHub', icon: Github, href: 'https://github.com' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
  { name: 'Email', icon: Mail, href: 'mailto:info@rentapage.com' },
]

export function Footer() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <footer className="relative bg-black text-white py-16 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-purple-900/30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and social links */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-2 group">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Zap className="h-10 w-10 text-primary group-hover:text-secondary transition-colors duration-300" />
              </motion.div>
              <motion.span 
                className="text-3xl font-bold cyber-heading gradient-text"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                RentAPage
              </motion.span>
            </Link>
            <p className="text-sm text-blue-300 max-w-xs">
              Ενοικίαση ιστοσελίδων και AI assistants από €24,99/μήνα. Το μέλλον του web design είναι εδώ.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-primary transition-colors duration-300"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <link.icon className="h-6 w-6" />
                  <span className="sr-only">{link.name}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Footer links */}
          {footerLinks.map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className="text-lg font-semibold cyber-heading text-primary">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-blue-300 hover:text-primary transition-colors duration-300 flex items-center group">
                      <ChevronRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" />
                      <span className="relative">
                        {link.name}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter signup */}
        <div className="mt-12 pt-8 border-t border-blue-800">
          <h3 className="text-2xl font-bold cyber-heading gradient-text mb-4">Μείνετε Συνδεδεμένοι</h3>
          <p className="text-blue-300 mb-4">Εγγραφείτε στο newsletter μας για να λαμβάνετε τα τελευταία νέα και προσφορές.</p>
          <form className="flex space-x-2">
            <input
              type="email"
              placeholder="Το email σας"
              className="flex-grow px-4 py-2 bg-blue-900/50 border border-blue-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-white placeholder-blue-400"
            />
            <Button className="cyber-button neon-pulse">
              Εγγραφή
            </Button>
          </form>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-blue-800 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-blue-400">&copy; {new Date().getFullYear()} RentAPage. Με επιφύλαξη παντός δικαιώματος.</p>
          <div className="mt-4 sm:mt-0">
            <Link href="/contact" className="text-sm text-blue-400 hover:text-primary transition-colors duration-300">
              Επικοινωνήστε μαζί μας
            </Link>
          </div>
        </div>
      </div>

      {/* Animated elements */}
      <div 
        className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full filter blur-3xl"
        style={{
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
        }}
      ></div>
      <div 
        className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-pink-500/20 to-blue-500/20 rounded-full filter blur-3xl"
        style={{
          transform: `translate(${mousePosition.x * -0.02}px, ${mousePosition.y * -0.02}px)`,
        }}
      ></div>
    </footer>
  )
}

