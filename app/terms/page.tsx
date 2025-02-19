'use client'

import { motion } from 'framer-motion'
import { PageBackground } from '@/components/PageBackground'
import { Card, CardContent } from "@/components/ui/card"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 to-purple-950 relative overflow-hidden">
      <PageBackground />
      <main className="pt-20 px-4 md:px-6 lg:px-8 max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-white mb-6 mt-10 glow-text text-center">Όροι Χρήσης</h1>
          <Card className="bg-white/5 backdrop-blur-md border-blue-500/20 cyber-card">
            <CardContent className="p-6">
              <div className="space-y-4 text-blue-100">
                <p>Καλώς ήρθατε στο RentAPage. Παρακαλούμε διαβάστε προσεκτικά τους ακόλουθους όρους χρήσης:</p>
                
                <h2 className="text-2xl font-bold text-white mt-6 mb-2">1. Αποδοχή των Όρων</h2>
                <p>Χρησιμοποιώντας την ιστοσελίδα μας, συμφωνείτε να δεσμεύεστε από αυτούς τους όρους υπηρεσίας, όλους τους ισχύοντες νόμους και κανονισμούς, και συμφωνείτε ότι είστε υπεύθυνοι για τη συμμόρφωση με τυχόν ισχύοντες τοπικούς νόμους.</p>

                <h2 className="text-2xl font-bold text-white mt-6 mb-2">2. Χρήση Άδειας</h2>
                <p>Χορηγείται άδεια για προσωρινή λήψη ενός αντιγράφου των υλικών (πληροφορίες ή λογισμικό) στον ιστότοπο του RentAPage μόνο για προσωπική, μη εμπορική προσωρινή προβολή.</p>

                <h2 className="text-2xl font-bold text-white mt-6 mb-2">3. Αποποίηση Ευθυνών</h2>
                <p>Τα υλικά στον ιστότοπο του RentAPage παρέχονται "ως έχουν". Το RentAPage δεν παρέχει εγγυήσεις, ρητές ή σιωπηρές, και με το παρόν αποποιείται και αρνείται όλες τις άλλες εγγυήσεις.</p>

                <h2 className="text-2xl font-bold text-white mt-6 mb-2">4. Περιορισμοί</h2>
                <p>Σε καμία περίπτωση το RentAPage ή οι προμηθευτές του δεν θα ευθύνονται για οποιεσδήποτε ζημιές (συμπεριλαμβανομένων, χωρίς περιορισμό, ζημιών για απώλεια δεδομένων ή κέρδους, ή λόγω διακοπής επιχειρηματικής δραστηριότητας).</p>

                <h2 className="text-2xl font-bold text-white mt-6 mb-2">5. Ακρίβεια των Υλικών</h2>
                <p>Τα υλικά που εμφανίζονται στον ιστότοπο του RentAPage θα μπορούσαν να περιλαμβάνουν τεχνικά, τυπογραφικά ή φωτογραφικά σφάλματα. Το RentAPage δεν εγγυάται ότι οποιοδήποτε από τα υλικά στον ιστότοπό του είναι ακριβή, πλήρη ή τρέχοντα.</p>

                <h2 className="text-2xl font-bold text-white mt-6 mb-2">6. Τροποποιήσεις</h2>
                <p>Το RentAPage μπορεί να αναθεωρήσει αυτούς τους όρους υπηρεσίας για τον ιστότοπό του ανά πάσα στιγμή χωρίς προειδοποίηση. Χρησιμοποιώντας αυτόν τον ιστότοπο, συμφωνείτε να δεσμεύεστε από την τρέχουσα έκδοση αυτών των όρων υπηρεσίας.</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </main>
    </div>
  )
}

