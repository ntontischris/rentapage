'use client'
 
import { Bot, Zap, Sparkles, Code } from 'lucide-react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Header } from '@/components/Header'
import PageBackground from '@/components/PageBackground'
 
export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <PageBackground />
        <section className="relative py-20 md:py-32 text-center">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
                Create Stunning Web Pages, Effortlessly
              </h1>
              <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-8">
                RentaPage provides the tools you need to build beautiful and
                interactive websites with ease.
              </p>
              <div className="space-x-4">
                <Button asChild size="lg">
                  <Link href="/get-started">Get Started for Free</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
 
        <section className="py-20 md:py-32 bg-secondary">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">
                Features Built for Modern Web Development
              </h2>
              <p className="max-w-xl mx-auto text-muted-foreground">
                Everything you need to create, manage, and deploy your web
                projects.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <Zap className="w-8 h-8 mb-4 text-primary" />
                  <CardTitle>Fast Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Build pages quickly with our intuitive tools.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Sparkles className="w-8 h-8 mb-4 text-primary" />
                  <CardTitle>Beautiful Design</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Create stunning, responsive layouts effortlessly.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Bot className="w-8 h-8 mb-4 text-primary" />
                  <CardTitle>AI-Powered</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Let AI help you create the perfect page.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
 

