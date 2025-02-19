'use client'

import { Header } from '@/components/Header'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import Link from 'next/link'
import { PageBackground } from '@/components/PageBackground'

export default function GetStartedPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 to-purple-950 relative overflow-hidden">
      <PageBackground />
      <Header />
      <main className="pt-20 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-white mb-6 mt-10 glow-text text-center">Ξεκινήστε με το RentAPage</h1>
          <p className="text-xl text-blue-100 mb-12 text-center">Επιλέξτε την υπηρεσία που σας ενδιαφέρει για να ξεκινήσετε</p>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {['Ιστοσελίδα', 'Chatbot', 'Voice Assistant', 'Avatar', 'Marketing'].map((service, index) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-white/5 backdrop-blur-md border-blue-500/20 hover:bg-white/10 transition-all duration-300 cyber-card">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-white">{service}</CardTitle>
                    <CardDescription className="text-blue-200">
                      Ξεκινήστε με την υπηρεσία {service.toLowerCase()}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link href={`/${service.toLowerCase().replace(' ', '-')}`}>
                      <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-glow transition-all duration-300 cyber-button">
                        Επιλογή
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/contact">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 hover:from-blue-700 hover:via-purple-700 hover:to-blue-700 text-white text-lg px-8 py-6 rounded-full shadow-glow transition-all duration-300 cyber-button">
                Χρειάζεστε βοήθεια; Επικοινωνήστε μαζί μας
              </Button>
            </Link>
          </div>
        </motion.div>
      </main>
    </div>
  )
}

