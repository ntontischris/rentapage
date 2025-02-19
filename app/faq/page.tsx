'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PageBackground } from '@/components/PageBackground'
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: "Τι είναι το RentAPage;",
    answer: "Το RentAPage είναι μια υπηρεσία που προσφέρει ενοικίαση ιστοσελίδων και AI assistants σε προσιτές τιμές, ξεκινώντας από €24,99/μήνα. Παρέχουμε ολοκληρωμένες λύσεις για online παρουσία και αυτοματοποίηση επιχειρήσεων."
  },
  {
    question: "Ποιες υπηρεσίες προσφέρετε;",
    answer: "Προσφέρουμε ένα ευρύ φάσμα υπηρεσιών, συμπεριλαμβανομένων: Ιστοσελίδων, Chatbots, Voice Assistants, AI Avatars, Marketing Automation και AI Workflows. Κάθε υπηρεσία είναι σχεδιασμένη για να καλύψει διαφορετικές ανάγκες επιχειρήσεων."
  },
  {
    question: "Πώς λειτουργεί η διαδικασία ενοικίασης;",
    answer: "Η διαδικασία είναι απλή: επιλέγετε το πακέτο που ταιριάζει στις ανάγκες σας, προσαρμόζουμε τη λύση στις απαιτήσεις σας, και στη συνέχεια πληρώνετε ένα μηνιαίο ποσό για τη χρήση της υπηρεσίας. Αυτό περιλαμβάνει όλες τις ενημερώσεις, τη συντήρηση και την υποστήριξη."
  },
  {
    question: "Μπορώ να αναβαθμίσω ή να υποβαθμίσω το πακέτο μου;",
    answer: "Ναι, προσφέρουμε ευελιξία στα πακέτα μας. Μπορείτε να αναβαθμίσετε ή να υποβαθμίσετε το πακέτο σας ανά πάσα στιγμή, ανάλογα με τις μεταβαλλόμενες ανάγκες της επιχείρησής σας."
  },
  {
    question: "Παρέχετε τεχνική υποστήριξη;",
    answer: "Ναι, παρέχουμε πλήρη τεχνική υποστήριξη για όλες τις υπηρεσίες μας. Η ομάδα υποστήριξής μας είναι διαθέσιμη για να βοηθήσει με οποιαδήποτε ερώτηση ή πρόβλημα μπορεί να αντιμετωπίσετε."
  },
  {
    question: "Πόσο ασφαλείς είναι οι υπηρεσίες σας;",
    answer: "Η ασφάλεια είναι κορυφαία προτεραιότητά μας. Χρησιμοποιούμε προηγμένες τεχνολογίες κρυπτογράφησης και ακολουθούμε τις βέλτιστες πρακτικές ασφαλείας για να προστατεύσουμε τα δεδομένα σας και την online παρουσία σας."
  },
  {
    question: "Μπορώ να δοκιμάσω τις υπηρεσίες σας πριν δεσμευτώ;",
    answer: "Ναι, προσφέρουμε μια δωρεάν δοκιμαστική περίοδο για τις περισσότερες υπηρεσίες μας. Αυτό σας επιτρέπει να εξερευνήσετε τις δυνατότητες και να βεβαιωθείτε ότι ταιριάζουν στις ανάγκες σας πριν κάνετε μια μακροπρόθεσμη δέσμευση."
  }
]

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 to-purple-950 relative overflow-hidden">
      <PageBackground />
      <main className="pt-20 px-4 md:px-6 lg:px-8 max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-white mb-6 mt-10 glow-text text-center">Συχνές Ερωτήσεις</h1>
          <p className="text-xl text-blue-100 mb-12 text-center">Βρείτε απαντήσεις στις πιο συχνές ερωτήσεις σχετικά με τις υπηρεσίες μας</p>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-md border-blue-500/20 hover:bg-white/10 transition-all duration-300 cyber-card overflow-hidden">
                <CardContent className="p-0">
                  <button
                    className="w-full text-left p-4 flex justify-between items-center focus:outline-none"
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  >
                    <span className="text-lg font-semibold text-white">{faq.question}</span>
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-blue-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-blue-400" />
                    )}
                  </button>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="p-4 pt-0 text-blue-100 border-t border-blue-500/20">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  )
}

