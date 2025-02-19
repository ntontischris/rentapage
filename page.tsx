'use client'

import { useEffect, useState, useRef } from 'react'
import { Bot, Mic, User, Zap, Sparkles } from 'lucide-react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion, useScroll, useTransform } from "framer-motion"
import StarryBackground from '@/components/StarryBackground'
import { Header } from '@/components/Header'

export default function Page() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (containerRef.current) {
        const { left, top, width, height } = containerRef.current.getBoundingClientRect()
        const x = (event.clientX - left) / width
        const y = (event.clientY - top) / height
        setMousePosition({ x, y })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-b from-slate-950 to-purple-950 relative overflow-hidden">
      <Header />
      <StarryBackground />

      {/* Aurora Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div 
          className="aurora-bg-1" 
          style={{ 
            transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
            filter: `blur(${50 + mousePosition.x * 20}px)`
          }} 
        />
        <div 
          className="aurora-bg-2" 
          style={{ 
            transform: `translate(${-mousePosition.x * 30}px, ${-mousePosition.y * 30}px)`,
            filter: `blur(${60 + mousePosition.y * 30}px)`
          }} 
        />
        <div 
          className="aurora-bg-3" 
          style={{ 
            transform: `translate(${mousePosition.y * 40}px, ${mousePosition.x * 40}px)`,
            filter: `blur(${70 + (mousePosition.x + mousePosition.y) * 20}px)`
          }} 
        />
      </div>

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center px-4 py-12 sm:py-24 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-10"
        >
          <motion.h1 
            className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-tight text-white glow-text heading-responsive"
            animate={{ 
              scale: [1, 1.02, 1],
              textShadow: [
                "0 0 10px rgba(255,255,255,0.5), 0 0 20px rgba(255,255,255,0.3), 0 0 30px rgba(255,255,255,0.2)",
                "0 0 15px rgba(255,255,255,0.6), 0 0 25px rgba(255,255,255,0.4), 0 0 35px rgba(255,255,255,0.3)",
                "0 0 10px rgba(255,255,255,0.5), 0 0 20px rgba(255,255,255,0.3), 0 0 30px rgba(255,255,255,0.2)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            RentAPage
          </motion.h1>
          <motion.p 
            className="mt-4 sm:mt-6 text-lg sm:text-xl md:text-2xl text-purple-100 text-responsive"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Ενοικίαση ιστοσελίδων και AI assistants από €24,99/μήνα
          </motion.p>
          <motion.div 
            className="mt-6 sm:mt-10"
            whileHover={{ scale: 1.05 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 hover:from-purple-700 hover:via-pink-700 hover:to-purple-700 text-white text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 rounded-full shadow-glow transition-all duration-300"
            >
              <Sparkles className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Ξεκινήστε Τώρα
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Pricing Section */}
      <motion.div 
        style={{ y }}
        className="py-24 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative"
      >
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {/* Website Plan */}
          <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
            <Card className="relative overflow-hidden bg-white/5 backdrop-blur-md border-purple-500/20 hover:bg-white/10 transition-all duration-300 card-glow">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-transparent animate-gradient"></div>
              <CardHeader className="relative">
                <CardTitle className="text-2xl font-bold text-white">Ιστοσελίδα</CardTitle>
                <CardDescription className="text-purple-200">
                  Βασικό πακέτο ιστοσελίδας
                </CardDescription>
                <div className="mt-4 text-4xl font-bold text-white glow-text">€24,99<span className="text-lg">/μήνα</span></div>
              </CardHeader>
              <CardContent className="relative">
                <ul className="space-y-3 text-purple-100">
                  <li className="flex items-center">
                    <span className="mr-2 text-purple-400">✨</span> Προσαρμοσμένη σχεδίαση
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-purple-400">✨</span> Φιλοξενία included
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-purple-400">✨</span> SSL πιστοποιητικό
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Chatbot Plan */}
          <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
            <Card className="relative overflow-hidden bg-white/5 backdrop-blur-md border-purple-500/20 hover:bg-white/10 transition-all duration-300 card-glow">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-transparent animate-gradient"></div>
              <CardHeader className="relative">
                <CardTitle className="text-2xl font-bold text-white">
                  <div className="flex items-center gap-2">
                    <Bot className="w-6 h-6 text-purple-400" />
                    Chatbot
                  </div>
                </CardTitle>
                <CardDescription className="text-purple-200">
                  AI Chatbot Assistant
                </CardDescription>
                <div className="mt-4 text-4xl font-bold text-white glow-text">€29,99<span className="text-lg">/μήνα</span></div>
              </CardHeader>
              <CardContent className="relative">
                <ul className="space-y-3 text-purple-100">
                  <li className="flex items-center">
                    <span className="mr-2 text-purple-400">✨</span> 24/7 εξυπηρέτηση
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-purple-400">✨</span> Προσαρμοσμένες απαντήσεις
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-purple-400">✨</span> Πολλαπλές γλώσσες
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Voice Assistant Plan */}
          <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
            <Card className="relative overflow-hidden bg-white/5 backdrop-blur-md border-purple-500/20 hover:bg-white/10 transition-all duration-300 card-glow">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-transparent animate-gradient"></div>
              <CardHeader className="relative">
                <CardTitle className="text-2xl font-bold text-white">
                  <div className="flex items-center gap-2">
                    <Mic className="w-6 h-6 text-purple-400" />
                    Voice Assistant
                  </div>
                </CardTitle>
                <CardDescription className="text-purple-200">
                  AI Voice Assistant
                </CardDescription>
                <div className="mt-4 text-4xl font-bold text-white glow-text">€49,99<span className="text-lg">/μήνα</span></div>
              </CardHeader>
              <CardContent className="relative">
                <ul className="space-y-3 text-purple-100">
                  <li className="flex items-center">
                    <span className="mr-2 text-purple-400">✨</span> Φωνητικές εντολές
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-purple-400">✨</span> Φυσική ομιλία
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-purple-400">✨</span> Προσαρμοσμένη φωνή
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Avatar Assistant Plan */}
          <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
            <Card className="relative overflow-hidden bg-white/5 backdrop-blur-md border-purple-500/20 hover:bg-white/10 transition-all duration-300 card-glow">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-transparent animate-gradient"></div>
              <CardHeader className="relative">
                <CardTitle className="text-2xl font-bold text-white">
                  <div className="flex items-center gap-2">
                    <User className="w-6 h-6 text-purple-400" />
                    Avatar Assistant
                  </div>
                </CardTitle>
                <CardDescription className="text-purple-200">
                  AI Avatar Assistant
                </CardDescription>
                <div className="mt-4 text-4xl font-bold text-white glow-text">€69,99<span className="text-lg">/μήνα</span></div>
              </CardHeader>
              <CardContent className="relative">
                <ul className="space-y-3 text-purple-100">
                  <li className="flex items-center">
                    <span className="mr-2 text-purple-400">✨</span> 3D Avatar
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-purple-400">✨</span> Animations
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-purple-400">✨</span> Προσαρμοσμένη εμφάνιση
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Marketing Automation */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16"
        >
          <Card className="relative overflow-hidden bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-md border-purple-500/20 hover:bg-gradient-to-r hover:from-purple-600/30 hover:to-pink-600/30 transition-all duration-300 card-glow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-transparent animate-gradient"></div>
            <CardHeader className="relative">
              <CardTitle className="text-2xl font-bold text-white">
                <div className="flex items-center gap-2">
                  <Zap className="w-6 h-6 text-purple-400" />
                  Marketing Automation
                </div>
              </CardTitle>
              <CardDescription className="text-purple-200">
                Πλήρης αυτοματοποίηση marketing
              </CardDescription>
              <div className="mt-4 text-4xl font-bold text-white glow-text">€99,99<span className="text-lg">/μήνα</span></div>
            </CardHeader>
            <CardContent className="relative">
              <div className="grid md:grid-cols-3 gap-6 text-purple-100">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="mr-2 text-purple-400">✨</span> Email Campaigns
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-purple-400">✨</span> Social Media Posts
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="mr-2 text-purple-400">✨</span> Analytics
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-purple-400">✨</span> Lead Scoring
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="mr-2 text-purple-400">✨</span> CRM Integration
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-purple-400">✨</span> Automated Reports
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  )
}
