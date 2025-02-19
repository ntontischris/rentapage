'use client'

import { motion } from 'framer-motion'
import { PageBackground } from '@/components/PageBackground'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Send, MessageSquare } from 'lucide-react'

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Add form submission logic here
  }

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
              Επικοινωνήστε μαζί μας
            </motion.h1>
            <motion.p 
              className="text-xl text-blue-100 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Είμαστε εδώ για να σας βοηθήσουμε
            </motion.p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card className="bg-white/5 backdrop-blur-md border-blue-500/20 cyber-card h-full">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-white">Στοιχεία Επικοινωνίας</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center text-blue-100">
                    <Phone className="w-5 h-5 mr-3 text-blue-400" />
                    <span>+30 210 1234567</span>
                  </div>
                  <div className="flex items-center text-blue-100">
                    <Mail className="w-5 h-5 mr-3 text-blue-400" />
                    <span>info@rentapage.gr</span>
                  </div>
                  <div className="flex items-center text-blue-100">
                    <MapPin className="w-5 h-5 mr-3 text-blue-400" />
                    <span>Λεωφόρος Κηφισίας 123, Αθήνα</span>
                  </div>
                  <div className="flex items-center text-blue-100">
                    <MessageSquare className="w-5 h-5 mr-3 text-blue-400" />
                    <span>Δευτέρα - Παρασκευή: 09:00 - 18:00</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Card className="bg-white/5 backdrop-blur-md border-blue-500/20 cyber-card">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-white">Φόρμα Επικοινωνίας</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-4">
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <label className="text-sm text-blue-100">Όνομα</label>
                          <Input 
                            type="text" 
                            required 
                            className="bg-white/10 border-blue-500/20 text-white placeholder:text-blue-200"
                            placeholder="Το όνομά σας"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm text-blue-100">Email</label>
                          <Input 
                            type="email" 
                            required 
                            className="bg-white/10 border-blue-500/20 text-white placeholder:text-blue-200"
                            placeholder="Το email σας"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm text-blue-100">Θέμα</label>
                        <Input 
                          type="text" 
                          required 
                          className="bg-white/10 border-blue-500/20 text-white placeholder:text-blue-200"
                          placeholder="Το θέμα του μηνύματός σας"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm text-blue-100">Μήνυμα</label>
                        <Textarea 
                          required 
                          className="bg-white/10 border-blue-500/20 text-white placeholder:text-blue-200 min-h-[150px]"
                          placeholder="Το μήνυμά σας"
                        />
                      </div>
                    </div>
                    <Button 
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-glow transition-all duration-300 cyber-button"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Αποστολή Μηνύματος
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </main>
    </div>
  )
}
