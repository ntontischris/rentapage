'use client'

import { motion } from 'framer-motion'
import { PageBackground } from '@/components/PageBackground'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, Code, Headphones, Megaphone } from 'lucide-react'
import { Button } from "@/components/ui/button"

const jobOpenings = [
  {
    title: "Full Stack Developer",
    department: "Engineering",
    icon: Code,
    description: "Αναζητούμε έναν έμπειρο Full Stack Developer για να ενισχύσει την ομάδα ανάπτυξης μας."
  },
  {
    title: "AI Specialist",
    department: "R&D",
    icon: Briefcase,
    description: "Ψάχνουμε για έναν ειδικό στην Τεχνητή Νοημοσύνη για να οδηγήσει τις καινοτομίες μας στον τομέα των AI assistants."
  },
  {
    title: "Customer Support Representative",
    department: "Support",
    icon: Headphones,
    description: "Αναζητούμε ένα άτομο με εξαιρετικές επικοινωνιακές δεξιότητες για την υποστήριξη των πελατών μας."
  },
  {
    title: "Marketing Specialist",
    department: "Marketing",
    icon: Megaphone,
    description: "Ψάχνουμε για έναν δημιουργικό Marketing Specialist για να ενισχύσει την παρουσία μας στην αγορά."
  }
]

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 to-purple-950 relative overflow-hidden">
      <PageBackground />
      <main className="pt-20 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-white mb-6 mt-10 glow-text text-center">Καριέρα στο RentAPage</h1>
          <p className="text-xl text-blue-100 mb-12 text-center">Ανακαλύψτε τις ευκαιρίες καριέρας και γίνετε μέρος της ομάδας μας</p>
          
          <div className="grid gap-6 md:grid-cols-2">
            {jobOpenings.map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-white/5 backdrop-blur-md border-blue-500/20 hover:bg-white/10 transition-all duration-300 cyber-card">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-white flex items-center">
                      <job.icon className="w-6 h-6 mr-2 text-blue-400" />
                      {job.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-blue-200 mb-2">Τμήμα: {job.department}</p>
                    <p className="text-blue-100 mb-4">{job.description}</p>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-glow transition-all duration-300 cyber-button">
                      Δείτε περισσότερα
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-12 text-center"
          >
            <h2 className="text-2xl font-bold text-white mb-4 glow-text">Δεν βρήκατε την κατάλληλη θέση;</h2>
            <p className="text-blue-100 mb-6">Στείλτε μας το βιογραφικό σας και θα επικοινωνήσουμε μαζί σας για μελλοντικές ευκαιρίες.</p>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-glow transition-all duration-300 cyber-button">
              Αποστολή Βιογραφικού
            </Button>
          </motion.div>
        </motion.div>
      </main>
    </div>
  )
}

