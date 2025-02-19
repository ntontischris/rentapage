'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from '@/components/Header'
import { Button } from "@/components/ui/button"
import { Workflow, Brain, Zap, BarChartIcon as ChartBar, Cog, Sparkles } from 'lucide-react'
import { InfoModal } from '@/components/InfoModal'
import { PageBackground } from '@/components/PageBackground'
import { motion } from 'framer-motion'
import { LearnMoreButton } from '@/components/LearnMoreButton'

const aiWorkflowProducts = [
  {
    title: "Basic AI Workflow",
    description: "Εισαγωγή στην αυτοματοποίηση με AI",
    price: "149,99",
    icon: Workflow,
    features: [
      "Αυτοματοποίηση βασικών εργασιών",
      "Ενσωμάτωση με CRM και ERP",
      "Βασική ανάλυση δεδομένων",
      "Προκαθορισμένα μοντέλα AI",
      "Email και chat υποστήριξη"
    ],
    benefits: [
      "Εξοικονόμηση χρόνου μέσω αυτοματοποίησης επαναλαμβανόμενων εργασιών",
      "Βελτίωση της αποδοτικότητας με ενοποίηση συστημάτων",
      "Λήψη αποφάσεων βάσει δεδομένων",
      "Εύκολη εισαγωγή στην τεχνολογία AI για επιχειρήσεις",
      "Γρήγορη επίλυση προβλημάτων με άμεση υποστήριξη"
    ]
  },
  {
    title: "Advanced AI Workflow",
    description: "Προηγμένη αυτοματοποίηση και ανάλυση",
    price: "249,99",
    icon: Brain,
    features: [
      "Προσαρμοσμένα μοντέλα μηχανικής μάθησης",
      "Προγνωστική ανάλυση",
      "Αυτόματη βελτιστοποίηση διαδικασιών",
      "Ενσωμάτωση με IoT συσκευές",
      "24/7 προηγμένη υποστήριξη"
    ],
    benefits: [
      "Βελτίωση ακρίβειας προβλέψεων για καλύτερο σχεδιασμό","Βελτίωση ακρίβειας προβλέψεων για καλύτερο σχεδιασμό",
      "Αυτόματη αναγνώριση και επίλυση προβλημάτων πριν εμφανιστούν",
      "Συνεχής βελτίωση επιχειρησιακών διαδικασιών",
      "Αξιοποίηση δεδομένων από συνδεδεμένες συσκευές για καλύτερη λήψη αποφάσεων",
      "Άμεση επίλυση σύνθετων προβλημάτων με εξειδικευμένη υποστήριξη"
    ]
  },
  {
    title: "Enterprise AI Suite",
    description: "Ολοκληρωμένη λύση AI για μεγάλες επιχειρήσεις",
    price: "499,99",
    icon: Zap,
    features: [
      "Προσαρμοσμένη AI αρχιτεκτονική",
      "Ανάλυση Big Data σε πραγματικό χρόνο",
      "Αυτόνομη λήψη αποφάσεων",
      "Ενσωμάτωση blockchain για ασφάλεια",
      "Dedicated AI consultant"
    ],
    benefits: [
      "Πλήρης προσαρμογή AI λύσεων στις ανάγκες της επιχείρησης",
      "Άμεση αξιοποίηση μεγάλου όγκου δεδομένων για στρατηγικές αποφάσεις",
      "Μείωση ανθρώπινου λάθους σε κρίσιμες αποφάσεις",
      "Ενισχυμένη ασφάλεια και διαφάνεια σε όλες τις διαδικασίες",
      "Εξατομικευμένη καθοδήγηση για μέγιστη αξιοποίηση της AI τεχνολογίας"
    ]
  },
  {
    title: "AI-Powered Analytics",
    description: "Προηγμένη ανάλυση δεδομένων με AI",
    price: "199,99",
    icon: ChartBar,
    features: [
      "Αυτόματη ανακάλυψη insights",
      "Προγνωστική και περιγραφική ανάλυση",
      "Οπτικοποίηση δεδομένων σε πραγματικό χρόνο",
      "Ενσωμάτωση με πολλαπλές πηγές δεδομένων",
      "Προσαρμοσμένα dashboards"
    ],
    benefits: [
      "Ανακάλυψη κρυφών τάσεων και μοτίβων στα δεδομένα",
      "Βελτίωση προβλέψεων για καλύτερο στρατηγικό σχεδιασμό",
      "Ευκολότερη κατανόηση πολύπλοκων δεδομένων μέσω οπτικοποίησης",
      "Ενοποιημένη εικόνα όλων των επιχειρησιακών δεδομένων",
      "Εξατομικευμένη παρουσίαση δεδομένων για κάθε τμήμα της επιχείρησης"
    ]
  },
  {
    title: "AI Process Optimization",
    description: "Βελτιστοποίηση επιχειρησιακών διαδικασιών με AI",
    price: "299,99",
    icon: Cog,
    features: [
      "Αυτόματη αναγνώριση σημείων συμφόρησης",
      "Προσομοίωση και δοκιμή σεναρίων",
      "Συνεχής βελτιστοποίηση ροών εργασίας",
      "Παρακολούθηση KPIs σε πραγματικό χρόνο",
      "Προτάσεις βελτίωσης βασισμένες σε AI"
    ],
    benefits: [
      "Εντοπισμός και επίλυση προβλημάτων πριν επηρεάσουν την παραγωγικότητα",
      "Δοκιμή νέων στρατηγικών χωρίς ρίσκο",
      "Συνεχής βελτίωση της αποδοτικότητας των διαδικασιών",
      "Άμεση αντίδραση σε αλλαγές των επιχειρησιακών μετρικών",
      "Λήψη εξειδικευμένων συμβουλών για βελτίωση διαδικασιών"
    ]
  },
  {
    title: "AI Innovation Lab",
    description: "Πλατφόρμα για πειραματισμό και καινοτομία με AI",
    price: "399,99",
    icon: Sparkles,
    features: [
      "Περιβάλλον ανάπτυξης και δοκιμής AI μοντέλων",
      "Πρόσβαση σε προηγμένους αλγορίθμους",
      "Συνεργατική πλατφόρμα για data scientists",
      "Αυτόματη αναφορά αποτελεσμάτων πειραμάτων",
      "Ενσωμάτωση με cloud υπηρεσίες"
    ],
    benefits: [
      "Επιτάχυνση της διαδικασίας καινοτομίας στην επιχείρηση",
      "Πρόσβαση σε cutting-edge τεχνολογίες AI",
      "Βελτίωση της συνεργασίας μεταξύ των ομάδων data science",
      "Ευκολότερη αξιολόγηση και σύγκριση διαφορετικών AI μοντέλων",
      "Κλιμάκωση των AI λύσεων με ευελιξία"
    ]
  }
]

export default function AIWorkflowsPage() {
  const [selectedProduct, setSelectedProduct] = useState<typeof aiWorkflowProducts[0] | null>(null)

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
          <h1 className="text-4xl font-bold text-white mb-6 mt-10 glow-text">AI Workflows & Ολιστική Διοίκηση</h1>
          <p className="text-xl text-blue-100 mb-12">Ανακαλύψτε τη δύναμη της τεχνητής νοημοσύνης στη διοίκηση και βελτιστοποίηση των επιχειρησιακών διαδικασιών σας</p>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {aiWorkflowProducts.map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-white/5 backdrop-blur-md border-blue-500/20 hover:bg-white/10 transition-all duration-300 cyber-card">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-white flex items-center">
                      <product.icon className="w-6 h-6 mr-2 text-blue-400" />
                      {product.title}
                    </CardTitle>
                    <CardDescription className="text-blue-200">
                      {product.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white mb-4">Από <span className="text-2xl font-bold">€{product.price}</span>/μήνα</p>
                    <ul className="space-y-2 text-blue-100 mb-6">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <span className="mr-2 text-blue-400">✨</span> {feature}
                        </li>
                      ))}
                    </ul>
                    <LearnMoreButton onClick={() => setSelectedProduct(product)} />
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
      <InfoModal
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        title={selectedProduct?.title || ''}
        description={selectedProduct?.description || ''}
        benefits={selectedProduct?.benefits || []}
      />
    </div>
  )
}

