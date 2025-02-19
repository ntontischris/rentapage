'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from '@/components/Header'
import { Button } from "@/components/ui/button"
import { Bot, MessageSquare, Globe, Zap, ShieldCheck, Users, BarChart, Briefcase, Headphones, Sparkles } from 'lucide-react'
import { InfoModal } from '@/components/InfoModal'
import { PageBackground } from '@/components/PageBackground'
import { motion } from 'framer-motion'
import { LearnMoreButton } from '@/components/LearnMoreButton'

const chatbotProducts = [
  {
    title: "Basic Chatbot",
    description: "Ένας απλός αλλά αποτελεσματικός chatbot για βασική εξυπηρέτηση",
    price: "29,99",
    icon: Bot,
    features: [
      "Απαντήσεις σε συχνές ερωτήσεις",
      "Βασική καθοδήγηση χρηστών",
      "Ενσωμάτωση σε ιστοσελίδες",
      "Προκαθορισμένα σενάρια συνομιλίας",
      "Αναφορές βασικής χρήσης"
    ],
    benefits: [
      "Μείωση φόρτου εργασίας για το προσωπικό εξυπηρέτησης",
      "24/7 διαθεσιμότητα για βασικές ερωτήσεις",
      "Βελτίωση εμπειρίας χρήστη με άμεσες απαντήσεις",
      "Εύκολη εγκατάσταση και διαχείριση",
      "Οικονομική λύση για μικρές επιχειρήσεις"
    ]
  },
  {
    title: "AI-Powered Chatbot",
    description: "Ένας προηγμένος chatbot με τεχνητή νοημοσύνη για εξατομικευμένη εξυπηρέτηση",
    price: "79,99",
    icon: Zap,
    features: [
      "Μηχανική μάθηση για συνεχή βελτίωση",
      "Κατανόηση φυσικής γλώσσας",
      "Προσαρμοστικές απαντήσεις",
      "Αναγνώριση συναισθημάτων",
      "Ενσωμάτωση με CRM συστήματα"
    ],
    benefits: [
      "Εξατομικευμένη εμπειρία για κάθε χρήστη",
      "Βελτίωση της ακρίβειας των απαντήσεων με την πάροδο του χρόνου",
      "Χειρισμός πολύπλοκων ερωτημάτων και σεναρίων",
      "Αύξηση της ικανοποίησης πελατών",
      "Συλλογή πολύτιμων δεδομένων για ανάλυση συμπεριφοράς πελατών"
    ]
  },
  {
    title: "Multilingual Chatbot",
    description: "Ένας πολύγλωσσος chatbot για παγκόσμια εξυπηρέτηση πελατών",
    price: "89,99",
    icon: Globe,
    features: [
      "Υποστήριξη πολλαπλών γλωσσών",
      "Αυτόματη ανίχνευση γλώσσας",
      "Μετάφραση σε πραγματικό χρόνο",
      "Πολιτισμική προσαρμογή",
      "Διεθνείς βάσεις γνώσεων"
    ],
    benefits: [
      "Εξυπηρέτηση πελατών σε παγκόσμιο επίπεδο",
      "Μείωση γλωσσικών εμποδίων στην επικοινωνία",
      "Βελτίωση της διεθνούς παρουσίας της επιχείρησης",
      "Αύξηση της προσβασιμότητας για διεθνείς πελάτες",
      "Ενίσχυση της εικόνας της εταιρείας ως παγκόσμιου παίκτη"
    ]
  },
  {
    title: "Secure Enterprise Chatbot",
    description: "Ένας ασφαλής chatbot για επιχειρήσεις με υψηλές απαιτήσεις ασφαλείας",
    price: "129,99",
    icon: ShieldCheck,
    features: [
      "Κρυπτογράφηση από άκρο σε άκρο",
      "Συμμόρφωση με GDPR και άλλους κανονισμούς",
      "Έλεγχος ταυτότητας χρηστών",
      "Ασφαλής διαχείριση δεδομένων",
      "Καταγραφή και έλεγχος όλων των συνομιλιών"
    ],
    benefits: [
      "Προστασία ευαίσθητων επιχειρηματικών δεδομένων",
      "Συμμόρφωση με κανονιστικές απαιτήσεις",
      "Αύξηση εμπιστοσύνης πελατών στην ασφάλεια των συνομιλιών",
      "Μείωση κινδύνων παραβίασης δεδομένων",
      "Ασφαλής χρήση σε ρυθμιζόμενους τομείς όπως υγεία και χρηματοοικονομικά"
    ]
  },
  {
    title: "Social Media Chatbot",
    description: "Ένας εξειδικευμένος chatbot για διαχείριση κοινωνικών μέσων",
    price: "69,99",
    icon: Users,
    features: [
      "Ενσωμάτωση με πολλαπλές πλατφόρμες κοινωνικών μέσων",
      "Αυτόματες απαντήσεις σε σχόλια και μηνύματα",
      "Διαχείριση κρίσεων και παραπόνων",
      "Προώθηση περιεχομένου και καμπανιών",
      "Ανάλυση συναισθημάτων κοινού"
    ],
    benefits: [
      "Βελτίωση του χρόνου απόκρισης στα κοινωνικά μέσα",
      "Συνεπής επικοινωνία της μάρκας σε όλες τις πλατφόρμες",
      "Αύξηση της δέσμευσης του κοινού",
      "Έγκαιρη αντιμετώπιση αρνητικών σχολίων και κρίσεων",
      "Βελτιστοποίηση στρατηγικής κοινωνικών μέσων μέσω αναλύσεων"
    ]
  },
  {
    title: "Analytics Chatbot",
    description: "Ένας chatbot εξειδικευμένος στην ανάλυση δεδομένων και αναφορές",
    price: "99,99",
    icon: BarChart,
    features: [
      "Δημιουργία προσαρμοσμένων αναφορών",
      "Οπτικοποίηση δεδομένων σε πραγματικό χρόνο",
      "Προβλέψεις και τάσεις",
      "Ενσωμάτωση με πολλαπλές πηγές δεδομένων",
      "Ειδοποιήσεις για σημαντικές μετρήσεις"
    ],
    benefits: [
      "Εύκολη πρόσβαση σε επιχειρηματικά δεδομένα μέσω συνομιλίας",
      "Βελτίωση της λήψης αποφάσεων με βάση τα δεδομένα",
      "Εξοικονόμηση χρόνου στη δημιουργία αναφορών",
      "Αύξηση της διαφάνειας και της προσβασιμότητας των δεδομένων",
      "Έγκαιρη αναγνώριση τάσεων και ευκαιριών"
    ]
  },
  {
    title: "Sales & Marketing Chatbot",
    description: "Ένας chatbot σχεδιασμένος για την υποστήριξη πωλήσεων και μάρκετινγκ",
    price: "109,99",
    icon: Briefcase,
    features: [
      "Αυτόματη πιστοποίηση και βαθμολόγηση leads",
      "Προσωποποιημένες προτάσεις προϊόντων",
      "Διαχείριση καμπανιών email marketing",
      "Παρακολούθηση του customer journey",
      "Ενσωμάτωση με CRM και εργαλεία μάρκετινγκ"
    ],
    benefits: [
      "Αύξηση των ποσοστών μετατροπής",
      "Βελτίωση της εμπειρίας του πελάτη κατά τη διαδικασία πώλησης",
      "Αυτοματοποίηση επαναλαμβανόμενων εργασιών μάρκετινγκ",
      "Καλύτερη κατανόηση της συμπεριφοράς των πελατών",
      "Βελτιστοποίηση των στρατηγικών πωλήσεων και μάρκετινγκ"
    ]
  },
  {
    title: "Customer Support Chatbot",
    description: "Ένας εξειδικευμένος chatbot για προηγμένη εξυπηρέτηση πελατών",
    price: "119,99",
    icon: Headphones,
    features: [
      "Αυτόματη επίλυση συχνών προβλημάτων",
      "Κλιμάκωση σε ανθρώπινους πράκτορες όταν χρειάζεται",
      "Διαχείριση επιστροφών και αιτημάτων εξυπηρέτησης",
      "Προληπτική υποστήριξη βάσει δεδομένων χρήσης",
      "Πολυκαναλική υποστήριξη (chat, email, SMS)"
    ],
    benefits: [
      "Μείωση του χρόνου αναμονής για τους πελάτες",
      "Βελτίωση της ποιότητας εξυπηρέτησης με 24/7 διαθεσιμότητα",
      "Μείωση του φόρτου εργασίας για το ανθρώπινο προσωπικό",
      "Αύξηση της ικανοποίησης και διατήρησης πελατών",
      "Συλλογή πολύτιμων δεδομένων για τη βελτίωση προϊόντων και υπηρεσιών"
    ]
  },
  {
    title: "Voice-Enabled Chatbot",
    description: "Ένας προηγμένος chatbot με δυνατότητες φωνητικής αλληλεπίδρασης",
    price: "139,99",
    icon: MessageSquare,
    features: [
      "Αναγνώριση φωνής και μετατροπή ομιλίας σε κείμενο",
      "Φυσική συνθετική φωνή για απαντήσεις",
      "Υποστήριξη πολλαπλών γλωσσών και διαλέκτων",
      "Ενσωμάτωση με έξυπνους ηχείες και συσκευές",
      "Προσαρμοστικός έλεγχος θορύβου"
    ],
    benefits: [
      "Προσφορά εναλλακτικής μεθόδου αλληλεπίδρασης για τους χρήστες",
      "Βελτίωση της προσβασιμότητας για άτομα με ειδικές ανάγκες",
      "Αύξηση της ευκολίας χρήσηςΑύξηση της ευκολίας χρήσης σε περιβάλλοντα hands-free",
      "Ενίσχυση της εμπειρίας χρήστη με πιο φυσική και ανθρώπινη αλληλεπίδραση"
    ]
  },
  {
    title: "Custom AI Chatbot",
    description: "Ένας πλήρως προσαρμόσιμος AI chatbot για εξειδικευμένες επιχειρηματικές ανάγκες",
    price: "199,99",
    icon: Sparkles,
    features: [
      "Πλήρως προσαρμόσιμη AI με εκπαίδευση στα δεδομένα της επιχείρησης",
      "Ενσωμάτωση με οποιοδήποτε εσωτερικό σύστημα ή API",
      "Προηγμένες δυνατότητες αυτοματισμού και ροών εργασίας",
      "Προσαρμοσμένο UI/UX σχεδιασμό",
      "Συνεχής βελτίωση και εκπαίδευση του μοντέλου"
    ],
    benefits: [
      "Απόλυτη προσαρμογή στις μοναδικές ανάγκες και διαδικασίες της επιχείρησης",
      "Βελτίωση της αποδοτικότητας με αυτοματοποίηση πολύπλοκων εργασιών",
      "Δημιουργία ανταγωνιστικού πλεονεκτήματος μέσω εξατομικευμένης τεχνολογίας AI",
      "Μεγιστοποίηση της απόδοσης επένδυσης με λύση προσαρμοσμένη στους στόχους της επιχείρησης",
      "Δυνατότητα συνεχούς εξέλιξης και προσαρμογής στις μεταβαλλόμενες ανάγκες της αγοράς"
    ]
  }
]

export default function ChatbotPage() {
  const [selectedProduct, setSelectedProduct] = useState<typeof chatbotProducts[0] | null>(null)

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
          <h1 className="text-4xl font-bold text-white mb-6 mt-10 glow-text">AI Chatbots</h1>
          <p className="text-xl text-blue-100 mb-12">Ανακαλύψτε τη δύναμη της αυτοματοποιημένης επικοινωνίας με τους προηγμένους AI Chatbots μας</p>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {chatbotProducts.map((product, index) => (
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

