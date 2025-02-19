'use client'

import { motion } from 'framer-motion'
import { PageBackground } from '@/components/PageBackground'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, Users, Lightbulb, Target } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 to-purple-950 relative overflow-hidden">
      <PageBackground />
      <main className="pt-20 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-white mb-6 mt-10 glow-text text-center">Σχετικά με εμάς</h1>
          <p className="text-xl text-blue-100 mb-12 text-center">Ανακαλύψτε την ιστορία και το όραμα πίσω από το RentAPage</p>
          
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="bg-white/5 backdrop-blur-md border-blue-500/20 cyber-card">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white flex items-center">
                  <Users className="w-6 h-6 mr-2 text-blue-400" />
                  Ποιοι είμαστε
                </CardTitle>
              </CardHeader>
              <CardContent className="text-blue-100">
                <p>Το RentAPage είναι μια πρωτοποριακή εταιρεία που ειδικεύεται στην παροχή καινοτόμων λύσεων ιστοσελίδων και AI assistants. Με έδρα την Αθήνα, εξυπηρετούμε πελάτες σε όλη την Ελλάδα και διεθνώς από το 2020.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/5 backdrop-blur-md border-blue-500/20 cyber-card">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white flex items-center">
                  <Lightbulb className="w-6 h-6 mr-2 text-blue-400" />
                  Το όραμά μας
                </CardTitle>
              </CardHeader>
              <CardContent className="text-blue-100">
                <p>Οραματιζόμαστε έναν κόσμο όπου κάθε επιχείρηση, ανεξαρτήτως μεγέθους, έχει πρόσβαση σε προηγμένες τεχνολογίες web και AI. Στοχεύουμε στο να καταστήσουμε την ψηφιακή παρουσία προσιτή και αποτελεσματική για όλους.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/5 backdrop-blur-md border-blue-500/20 cyber-card">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white flex items-center">
                  <Target className="w-6 h-6 mr-2 text-blue-400" />
                  Η αποστολή μας
                </CardTitle>
              </CardHeader>
              <CardContent className="text-blue-100">
                <p>Η αποστολή μας είναι να παρέχουμε προσιτές, υψηλής ποιότητας λύσεις ιστοσελίδων και AI που βοηθούν τις επιχειρήσεις να αναπτυχθούν και να ευδοκιμήσουν στην ψηφιακή εποχή. Δεσμευόμαστε για συνεχή καινοτομία και άριστη εξυπηρέτηση πελατών.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/5 backdrop-blur-md border-blue-500/20 cyber-card">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white flex items-center">
                  <Zap className="w-6 h-6 mr-2 text-blue-400" />
                  Οι αξίες μας
                </CardTitle>
              </CardHeader>
              <CardContent className="text-blue-100">
                <ul className="list-disc list-inside space-y-2">
                  <li>Καινοτομία: Συνεχώς εξελισσόμαστε και βελτιωνόμαστε</li>
                  <li>Προσιτότητα: Κάνουμε την τεχνολογία προσβάσιμη σε όλους</li>
                  <li>Ποιότητα: Δεν συμβιβαζόμαστε στην ποιότητα των υπηρεσιών μας</li>
                  <li>Εξυπηρέτηση: Οι πελάτες μας είναι η προτεραιότητά μας</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </main>
    </div>
  )
}

