'use client'

import { useEffect, useState, useRef } from 'react'
import { Bot, Mic, User, Zap, Sparkles } from 'lucide-react'
import Link from "next/link"
import dynamic from 'next/dynamic'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion, useScroll, useTransform } from "framer-motion"
import { Header } from '@/components/Header'

const StarryBackground = dynamic(() => import('@/components/StarryBackground'), { ssr: false })

export default function HomePage() {
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
      <main className="container mx-auto px-4 py-16 relative z-10">
        <motion.div 
          style={{ y }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-500 mb-6">
            Welcome to RentaPage
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Your all-in-one solution for creating beautiful, interactive web pages
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          <Card className="bg-black/50 border-purple-500/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-purple-500" />
                Fast Development
              </CardTitle>
              <CardDescription>Build pages quickly with our intuitive tools</CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-black/50 border-purple-500/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-purple-500" />
                Beautiful Design
              </CardTitle>
              <CardDescription>Create stunning, responsive layouts effortlessly</CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-black/50 border-purple-500/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bot className="w-5 h-5 text-purple-500" />
                AI-Powered
              </CardTitle>
              <CardDescription>Let AI help you create the perfect page</CardDescription>
            </CardHeader>
          </Card>
        </div>

        <div className="text-center mt-16">
          <Link href="/get-started">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
              Get Started
            </Button>
          </Link>
        </div>
      </main>
    </div>
  )
}
