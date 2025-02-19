'use client'

import { useState } from 'react'
import { Header } from '@/components/Header'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Zap, TrendingUp, BarChart, Users, Megaphone, Globe } from 'lucide-react'
import { InfoModal } from '@/components/InfoModal'
import { PageBackground } from '@/components/PageBackground'
import { motion } from 'framer-motion'
import { LearnMoreButton } from '@/components/LearnMoreButton'

const products = [
  {
    title: "Social Media Booster",
    description: "Ενισχύστε την παρουσία σας στα social media",
    price: "49,99",
    icon: Users,
    features: [
      "Αυτοματοποιημένες αναρτήσεις",
      "Ανάλυση engagement",
      "Διαχείριση πολλαπλών πλατφορμών",
      "Προγραμματισμός περιεχομένου",
      "Παρακολούθηση hashtags"
    ],
    benefits: [
      "Εξοικονόμηση χρόνου μέσω αυτοματοποίησης αναρτήσεων",
      "Βελτιωμένη στόχευση κοινού με βάση αναλυτικά στοιχεία",
      "Συνεπής παρουσία σε όλες τις πλατφόρμες κοινωνικών μέσων",
      "Αύξηση του engagement μέσω βελτιστοποιημένου χρονοδιαγράμματος δημοσιεύσεων",
      "Καλύτερη κατανόηση των τάσεων της αγοράς μέσω παρακολούθησης hashtags"
    ]
  },
  {
    title: "Email Marketing Pro",
    description: "Προηγμένες καμπάνιες email marketing",
    price: "59,99",
    icon: Megaphone,
    features: [
      "Δημιουργία εξατομικευμένων templates",
      "A/B testing",
      "Αυτοματοποιημένα funnels",
      "Τμηματοποίηση κοινού",
      "Αναλυτικά reports"
    ],
    benefits: [
      "Υψηλότερα ποσοστά ανοίγματος και κλικ με εξατομικευμένο περιεχόμενο",
      "Βελτιστοποίηση καμπανιών μέσω δεδομένων από A/B testing",
      "Αυτοματοποιημένη νουθεσία πελατών για αυξημένες μετατροπές",
      "Στοχευμένα μηνύματα βάσει συμπεριφοράς και προτιμήσεων",
      "Λεπτομερής ανάλυση απόδοσης για συνεχή βελτίωση στρατηγικής"
    ]
  },
  {
    title: "SEO Optimizer",
    description: "Βελτιστοποίηση για τις μηχανές αναζήτησης",
    price: "69,99",
    icon: TrendingUp,
    features: [
      "Ανάλυση λέξεων-κλειδιών",
      "On-page SEO βελτιστοποίηση",
      "Παρακολούθηση κατάταξης",
      "Ανάλυση ανταγωνισμού",
      "Προτάσεις για βελτίωση περιεχομένου"
    ],
    benefits: [
      "Στοχευμένη προσέγγιση στη δημιουργία περιεχομένου με βάση την ανάλυση λέξεων-κλειδιών",
      "Βελτιωμένη ορατότητα στις μηχανές αναζήτησης μέσω τεχνικών on-page βελτιστοποίησης",
      "Άμεση αντίδραση σε αλλαγές κατάταξης για διατήρηση υψηλών θέσεων",
      "Ανταγωνιστικό πλεονέκτημα μέσω κατανόησης στρατηγικών SEO του ανταγωνισμού",
      "Συνεχής βελτίωση περιεχομένου βάσει δεδομένων και προτάσεων AI"
    ]
  },
  {
    title: "Analytics Master",
    description: "Προηγμένη ανάλυση δεδομένων και insights",
    price: "79,99",
    icon: BarChart,
    features: [
      "Ολοκληρωμένο dashboard",
      "Παρακολούθηση KPIs",
      "Ανάλυση συμπεριφοράς χρηστών",
      "Conversion funnel visualization",
      "Προσαρμοσμένες αναφορές"
    ],
    benefits: [
      "Ολιστική εικόνα της απόδοσης μέσω ενός κεντρικού dashboard",
      "Άμεση αναγνώριση περιοχών που χρειάζονται βελτίωση μέσω παρακολούθησης KPIs",
      "Βαθύτερη κατανόηση των αναγκών των πελατών μέσω ανάλυσης συμπεριφοράς",
      "Εντοπισμός και διόρθωση σημείων τριβής στη διαδικασία μετατροπής",
      "Εξατομικευμένη ανάλυση για κάθε τμήμα της επιχείρησης με προσαρμοσμένες αναφορές"
    ]
  },
  {
    title: "Global Scaling Suite",
    description: "Εργαλεία για παγκόσμια επέκταση",
    price: "99,99",
    icon: Globe,
    features: [
      "Μετάφραση και τοπικοποίηση",
      "Διεθνής SEO",
      "Ανάλυση αγορών",
      "Διαχείριση πολλαπλών νομισμάτων",
      "Συμμόρφωση με διεθνείς κανονισμούς"
    ],
    benefits: [
      "Αποτελεσματική προσέγγιση νέων αγορών με πολιτισμικά κατάλληλο περιεχόμενο",
      "Βελτιωμένη παγκόσμια ορατότητα μέσω στρατηγικών διεθνούς SEO",
      "Στοχευμένη επέκταση βάσει δεδομένων ανάλυσης αγορών",
      "Απλοποιημένες διεθνείς συναλλαγές με υποστήριξη πολλαπλών νομισμάτων",
      "Μείωση νομικών κινδύνων μέσω αυτοματοποιημένης συμμόρφωσης με τοπικούς κανονισμούς"
    ]
  }
]

export default function MarketingPage() {
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null)

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
          <h1 className="text-4xl font-bold text-white mb-6 mt-10 glow-text">Marketing & Scaling Solutions</h1>
          
          {/* Marketing Automation Overview */}
          <Card className="bg-white/10 backdrop-blur-md border-blue-500/20 mb-12 cyber-card">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center">
                <Zap className="w-6 h-6 mr-2 text-blue-400" />
                Marketing Automation
              </CardTitle>
              <CardDescription className="text-blue-200">
                Αυτοματοποιήστε και βελτιστοποιήστε τις marketing καμπάνιες σας
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-white mb-4">Βασική τιμή: <span className="text-3xl font-bold">€99,99</span>/μήνα</p>
              <ul className="space-y-2 text-blue-100">
                <li className="flex items-center">
                  <span className="mr-2 text-blue-400">✨</span> Αυτοματοποιημένες email campaigns
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-blue-400">✨</span> Προγραμματισμός και δημοσίευση social media posts
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-blue-400">✨</span> Προηγμένα analytics και reporting
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-blue-400">✨</span> Lead scoring και segmentation
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-blue-400">✨</span> Ενσωμάτωση με CRM συστήματα
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Additional Products */}
          <h2 className="text-3xl font-bold text-white mb-6 glow-text">Επιπρόσθετα Προϊόντα</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product, index) => (
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

