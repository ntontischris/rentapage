'use client'

import { motion } from 'framer-motion'
import { PageBackground } from '@/components/PageBackground'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Zap, Star, Crown } from 'lucide-react'
import Link from 'next/link'

const plans = [
  {
    name: "Starter",
    price: "24.99",
    description: "Ιδανικό για μικρές επιχειρήσεις",
    icon: Zap,
    features: [
      "Βασική ιστοσελίδα",
      "Απλό chatbot",
      "Email υποστήριξη",
      "SSL πιστοποιητικό",
      "Μηνιαίες ενημερώσεις"
    ],
    color: "from-blue-600 to-blue-400"
  },
  {
    name: "Professional",
    price: "49.99",
    description: "Για επιχειρήσεις σε ανάπτυξη",
    icon: Star,
    popular: true,
    features: [
      "Προηγμένη ιστοσελίδα",
      "AI Chatbot",
      "24/7 υποστήριξη",
      "SSL πιστοποιητικό",
      "Εβδομαδιαίες ενημερώσεις",
      "Custom domain",
      "SEO βελτιστοποίηση"
    ],
    color: "from-purple-600 to-pink-400"
  },
  {
    name: "Enterprise",
    price: "99.99",
    description: "Για μεγάλες επιχειρήσεις",
    icon: Crown,
    features: [
      "Premium ιστοσελίδα",
      "AI Chatbot & Voice Assistant",
      "24/7 προτεραιότητα υποστήριξης",
      "SSL πιστοποιητικό",
      "Καθημερινές ενημερώσεις",
      "Multiple domains",
      "Advanced SEO",
      "Custom AI training",
      "Analytics dashboard"
    ],
    color: "from-yellow-500 to-orange-400"
  }
]

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 to-purple-950 relative overflow-hidden">
      <PageBackground />
      <main className="pt-20 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="text-center">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 glow-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Επιλέξτε το κατάλληλο πακέτο
            </motion.h1>
            <motion.p 
              className="text-xl text-blue-100 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Προσιτές λύσεις για κάθε επιχείρηση
            </motion.p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {plans.map((plan, index) => {
              const Icon = plan.icon
              return (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                >
                  <Card className={`relative h-full bg-white/5 backdrop-blur-md border-blue-500/20 hover:bg-white/10 transition-all duration-300 cyber-card ${plan.popular ? 'ring-2 ring-purple-500' : ''}`}>
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                          Δημοφιλές
                        </span>
                      </div>
                    )}
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-2xl font-bold text-white">{plan.name}</CardTitle>
                        <Icon className={`w-6 h-6 bg-gradient-to-r ${plan.color} rounded-lg p-1`} />
                      </div>
                      <CardDescription className="text-blue-200">
                        {plan.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="flex items-baseline text-white">
                        <span className="text-3xl font-bold">€</span>
                        <span className="text-5xl font-bold">{plan.price}</span>
                        <span className="ml-2 text-blue-200">/μήνα</span>
                      </div>
                      <ul className="space-y-3">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-center text-blue-100">
                            <Check className="w-5 h-5 mr-2 text-green-400" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Link href="/get-started">
                        <Button 
                          className={`w-full bg-gradient-to-r ${plan.color} hover:brightness-110 text-white shadow-glow transition-all duration-300 cyber-button text-lg py-6`}
                        >
                          Επιλογή Πακέτου
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>

          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <h2 className="text-2xl text-white mb-4">Χρειάζεστε κάτι διαφορετικό;</h2>
            <p className="text-blue-100 mb-8">Επικοινωνήστε μαζί μας για ένα προσαρμοσμένο πακέτο στις ανάγκες σας</p>
            <Link href="/contact">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 hover:from-blue-700 hover:via-purple-700 hover:to-blue-700 text-white px-8 py-6 rounded-full shadow-glow transition-all duration-300 cyber-button"
              >
                Επικοινωνήστε μαζί μας
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </main>
    </div>
  )
}
