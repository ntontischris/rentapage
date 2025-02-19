'use client'

import { motion } from 'framer-motion'
import { PageBackground } from '@/components/PageBackground'
import { Card, CardContent } from "@/components/ui/card"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 to-purple-950 relative overflow-hidden">
      <PageBackground />
      <main className="pt-20 px-4 md:px-6 lg:px-8 max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-white mb-6 mt-10 glow-text text-center">Πολιτική Απορρήτου</h1>
          <Card className="bg-white/5 backdrop-blur-md border-blue-500/20 cyber-card">
            <CardContent className="p-6">
              <div className="space-y-4 text-blue-100">
                <p>Η προστασία των προσωπικών σας δεδομένων είναι σημαντική για εμάς. Αυτή η Πολιτική Απορρήτου εξηγεί πώς συλλέγουμε, χρησιμοποιούμε και προστατεύουμε τις πληροφορίες σας:</p>
                
                <h2 className="text-2xl font-bold text-white mt-6 mb-2">1. Συλλογή Πληροφοριών</h2>
                <p>Συλλέγουμε πληροφορίες που μας παρέχετε άμεσα, όπως όταν δημιουργείτε έναν λογαριασμό, υποβάλλετε μια φόρμα επικοινωνίας ή αλληλεπιδράτε με τις υπηρεσίες μας. Επίσης, συλλέγουμε αυτόματα ορισμένες πληροφορίες όταν χρησιμοποιείτε τον ιστότοπό μας.</p>

                <h2 className="text-2xl font-bold text-white mt-6 mb-2">2. Χρήση Πληροφοριών</h2>
                <p>Χρησιμοποιούμε τις πληροφορίες που συλλέγουμε για να παρέχουμε, διατηρούμε και βελτιώνουμε τις υπηρεσίες μας, να επικοινωνούμε μαζί σας και να προστατεύουμε τους χρήστες μας και τις υπηρεσίες μας.</p>

                <h2 className="text-2xl font-bold text-white mt-6 mb-2">3. Κοινοποίηση Πληροφοριών</h2>
                <p>Δεν πωλούμε τις προσωπικές σας πληροφορίες σε τρίτους. Μπορεί να μοιραστούμε πληροφορίες με τρίτους μόνο με τη συγκατάθεσή σας ή όπως απαιτείται από το νόμο.</p>

                <h2 className="text-2xl font-bold text-white mt-6 mb-2">4. Ασφάλεια Δεδομένων</h2>
                <p>Λαμβάνουμε εύλογα μέτρα για να προστατεύσουμε τις πληροφορίες σας από απώλεια, κλοπή, κατάχρηση και μη εξουσιοδοτημένη πρόσβαση, αποκάλυψη, τροποποίηση και καταστροφή.</p>

                <h2 className="text-2xl font-bold text-white mt-6 mb-2">5. Cookies</h2>
                <p>Χρησιμοποιούμε cookies και παρόμοιες τεχνολογίες για να συλλέξουμε και να αποθηκεύσουμε πληροφορίες όταν επισκέπτεστε τον ιστότοπό μας. Μπορείτε να ρυθμίσετε το πρόγραμμα περιήγησής σας να απορρίπτει όλα τα cookies ή να σας ειδοποιεί όταν αποστέλλεται ένα cookie.</p>

                <h2 className="text-2xl font-bold text-white mt-6 mb-2">6. Αλλαγές στην Πολιτική Απορρήτου</h2>
                <p>Μπορεί να ενημερώνουμε την Πολιτική Απορρήτου μας από καιρό σε καιρό. Θα σας ειδοποιούμε για τυχόν αλλαγές δημοσιεύοντας τη νέα Πολιτική Απορρήτου σε αυτή τη σελίδα.</p>

                <h2 className="text-2xl font-bold text-white mt-6 mb-2">7. Επικοινωνία</h2>
                <p>Εάν έχετε ερωτήσεις σχετικά με αυτήν την Πολιτική Απορρήτου, παρακαλούμε επικοινωνήστε μαζί μας στο privacy@rentapage.com.</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </main>
    </div>
  )
}

