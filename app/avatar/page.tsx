'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from '@/components/Header'
import { Button } from "@/components/ui/button"
import { User, Video, Mic, Sparkles, Zap } from 'lucide-react'
import { InfoModal } from '@/components/InfoModal'
import { PageBackground } from '@/components/PageBackground'
import { motion } from 'framer-motion'
import { LearnMoreButton } from '@/components/LearnMoreButton'

const avatarProducts = [
  {
    title: "Basic Avatar",
    description: "Ένας απλός αλλά αποτελεσματικός εικονικός βοηθός",
    price: "69,99",
    icon: User,
    features: [
      "Ρεαλιστικό 3D Avatar",
      "Βασικές εκφράσεις προσώπου",
      "Προκαθορισμένες κινήσεις",
      "Συγχρονισμός χειλιών με ομιλία",
      "Ενσωμάτωση με chatbot"
    ],
    benefits: [
      "Προσωποποιημένη εξυπηρέτηση πελατών χωρίς το κόστος ανθρώπινου προσωπικού",
      "Βελτιωμένη εμπειρία χρήστη με οπτική αλληλεπίδραση",
      "24/7 διαθεσιμότητα χωρίς επιπλέον κόστος",
      "Συνεπής παρουσίαση της μάρκας σας",
      "Αυξημένη δέσμευση πελατών μέσω διαδραστικής επικοινωνίας"
    ]
  },
  {
    title: "Advanced Avatar",
    description: "Ένας προηγμένος εικονικός βοηθός με εξελιγμένες δυνατότητες",
    price: "99,99",
    icon: Video,
    features: [
      "Υψηλής ποιότητας 3D Avatar",
      "Προηγμένες εκφράσεις προσώπου",
      "Φυσικές κινήσεις σώματος",
      "Προσαρμοσμένη φωνή",
      "Ενσωμάτωση με AI για δυναμικές απαντήσεις"
    ],
    benefits: [
      "Πιο φυσική και ανθρώπινη αλληλεπίδραση για αυξημένη εμπιστοσύνη πελατών",
      "Δυνατότητα χειρισμού πολύπλοκων ερωτημάτων και καταστάσεων",
      "Προσαρμοστικότητα σε διαφορετικά σενάρια και περιβάλλοντα",
      "Βελτιωμένη απόδοση σε παρουσιάσεις και εκπαιδευτικό υλικό",
      "Αυξημένη διατήρηση πληροφοριών από τους χρήστες λόγω πολυαισθητηριακής εμπειρίας"
    ]
  },
  {
    title: "Interactive Presenter",
    description: "Ένας εξειδικευμένος avatar για παρουσιάσεις και εκπαίδευση",
    price: "129,99",
    icon: Mic,
    features: [
      "Προσαρμοσμένο 3D Avatar βάσει των προδιαγραφών σας",
      "Ενσωμάτωση με εργαλεία παρουσίασης",
      "Διαδραστικές επιδείξεις προϊόντων",
      "Ζωντανή αλληλεπίδραση με το κοινό",
      "Αναλύσεις εμπλοκής κοινού"
    ],
    benefits: [
      "Εντυπωσιακές και αξέχαστες παρουσιάσεις που ξεχωρίζουν από τον ανταγωνισμό",
      "Συνεπής ποιότητα παρουσίασης σε όλα τα κανάλια και τις περιστάσεις",
      "Δυνατότητα κλιμάκωσης εκπαιδευτικών προγραμμάτων χωρίς πρόσθετο κόστος",
      "Βελτιωμένη κατανόηση και διατήρηση πληροφοριών από το κοινό",
      "Λεπτομερή δεδομένα για τη βελτιστοποίηση μελλοντικών παρουσιάσεων"
    ]
  },
  {
    title: "Multilingual Avatar",
    description: "Ένας πολύγλωσσος εικονικός βοηθός για παγκόσμια επικοινωνία",
    price: "149,99",
    icon: Sparkles,
    features: [
      "Υποστήριξη πολλαπλών γλωσσών",
      "Αυτόματη μετάφραση και διερμηνεία",
      "Πολιτισμική προσαρμογή",
      "Τοπική προφορά και διάλεκτοι",
      "Παγκόσμια διαθεσιμότητα 24/7"
    ],
    benefits: [
      "Απρόσκοπτη επικοινωνία με πελάτες από όλο τον κόσμο",
      "Επέκταση σε νέες αγορές χωρίς γλωσσικά εμπόδια",
      "Μείωση κόστους για πολύγλωσσο προσωπικό υποστήριξης",
      "Βελτίωση της διεθνούς εικόνας της επιχείρησής σας",
      "Αυξημένη ικανοποίηση πελατών μέσω εξατομικευμένης επικοινωνίας"
    ]
  },
  {
    title: "AI-Powered Avatar Suite",
    description: "Μια ολοκληρωμένη σουίτα AI avatars για κάθε ανάγκη",
    price: "199,99",
    icon: Zap,
    features: [
      "Πολλαπλοί εξειδικευμένοι avatars",
      "Προηγμένη AI για φυσική συνομιλία",
      "Μηχανική μάθηση για συνεχή βελτίωση",
      "Ενσωμάτωση με όλα τα επιχειρησιακά συστήματα",
      "Προσαρμοσμένες αναλύσεις και αναφορές"
    ],
    benefits: [
      "Πλήρης κάλυψη όλων των αναγκών επικοινωνίας της επιχείρησης",
      "Συνεχής βελτίωση της απόδοσης μέσω μηχανικής μάθησης",
      "Μείωση του συνολικού κόστους λειτουργίας με αυτοματοποίηση",
      "Συλλογή και αξιοποίηση πολύτιμων δεδομένων πελατών",
      "Ανταγωνιστικό πλεονέκτημα μέσω καινοτόμων τεχνολογιών AI"
    ]
  }
]

export default function AvatarPage() {
  const [selectedProduct, setSelectedProduct] = useState<typeof avatarProducts[0] | null>(null)

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
          <h1 className="text-4xl font-bold text-white mb-6 mt-10 glow-text">AI Avatar Assistants</h1>
          <p className="text-xl text-blue-100 mb-12">Δώστε ζωή στην εξυπηρέτηση πελατών σας με τους προηγμένους AI Avatar Assistants μας</p>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {avatarProducts.map((product, index) => (
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

