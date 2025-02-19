'use client'

import { motion } from 'framer-motion'
import { PageBackground } from '@/components/PageBackground'
import { Card, CardContent } from "@/components/ui/card"

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 to-purple-950 relative overflow-hidden">
      <PageBackground />
      <main className="pt-20 px-4 md:px-6 lg:px-8 max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-white mb-6 mt-10 glow-text text-center">Πολιτική Cookies</h1>
          <Card className="bg-white/5 backdrop-blur-md border-blue-500/20 cyber-card">
            <CardContent className="p-6">
              <div className="space-y-4 text-blue-100">
                <p>Αυτή η Πολιτική Cookies εξηγεί πώς το RentAPage χρησιμοποιεί cookies και παρόμοιες τεχνολογίες για να σας αναγνωρίζει όταν επισκέπτεστε τον ιστότοπό μας.</p>
                
                <h2 className="text-2xl font-bold text-white mt-6 mb-2">1. Τι είναι τα Cookies;</h2>
                <p>Τα cookies είναι μικρά αρχεία κειμένου που τοποθετούνται στη συσκευή σας όταν επισκέπτεστε έναν ιστότοπο. Χρησιμοποιούνται ευρέως για να κάνουν τους ιστότοπους να λειτουργούν ή να λειτουργούν πιο αποτελεσματικά, καθώς και για να παρέχουν πληροφορίες στους ιδιοκτήτες του ιστότοπου.</p>

                <h2 className="text-2xl font-bold text-white mt-6 mb-2">2. Πώς χρησιμοποιούμε τα Cookies;</h2>
                <p>Χρησιμοποιούμε cookies για διάφορους λόγους, συμπεριλαμβανομένων:</p>
                <ul className="list-disc list-inside">
                  <li>Για να θυμόμαστε τις προτιμήσεις σας</li>
                  <li>Για να βελτιώσουμε την εμπειρία περιήγησής σας</li>
                  <li>Για ανάλυση της κίνησης στον ιστότοπό μας</li>
                  <li>Για σκοπούς ασφαλείας</li>
                </ul>

                <h2 className="text-2xl font-bold text-white mt-6 mb-2">3. Τύποι Cookies που χρησιμοποιούμε</h2>
                <p>Χρησιμοποιούμε τόσο cookies περιόδου σύνδεσης όσο και μόνιμα cookies:</p>
                <ul className="list-disc list-inside">
                  <li>Τα cookies περιόδου σύνδεσης διαγράφονται όταν κλείνετε το πρόγραμμα περιήγησής σας.</li>
                  <li>Τα μόνιμα cookies παραμένουν στη συσκευή σας μέχρι να λήξουν ή να τα διαγράψετε.</li>
                </ul>

                <h2 className="text-2xl font-bold text-white mt-6 mb-2">4. Έλεγχος των Cookies</h2>
                <p>Μπορείτε να ελέγξετε και/ή να διαγράψετε τα cookies όπως επιθυμείτε. Μπορείτε να διαγράψετε όλα τα cookies που βρίσκονται ήδη στη συσκευή σας και μπορείτε να ρυθμίσετε τα περισσότερα προγράμματα περιήγησης ώστε να αποτρέπουν την τοποθέτησή τους.</p>

                <h2 className="text-2xl font-bold text-white mt-6 mb-2">5. Αλλαγές στην Πολιτική Cookies</h2>
                <p>Μπορεί να ενημερώνουμε την Πολιτική Cookies μας από καιρό σε καιρό. Σας ενθαρρύνουμε να ελέγχετε αυτή τη σελίδα περιοδικά για τυχόν αλλαγές.</p>

                <h2 className="text-2xl font-bold text-white mt-6 mb-2">6. Επικοινωνία</h2>
                <p>Εάν έχετε ερωτήσεις σχετικά με την Πολιτική Cookies μας, παρακαλούμε επικοινωνήστε μαζί μας στο cookies@rentapage.com.</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </main>
    </div>
  )
}

