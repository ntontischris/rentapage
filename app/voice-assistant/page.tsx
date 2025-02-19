'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from '@/components/Header'
import { Button } from "@/components/ui/button"
import { Mic, Headphones, Globe, Zap, Music, Phone, Briefcase, Cloud, Lock, Sparkles } from 'lucide-react'
import { InfoModal } from '@/components/InfoModal'
import { PageBackground } from '@/components/PageBackground'
import { motion } from 'framer-motion'
import { LearnMoreButton } from '@/components/LearnMoreButton'

const voiceAssistantProducts = [
  {
    title: "Basic Voice Assistant",
    description: "Ένας απλός αλλά αποτελεσματικός φωνητικός βοηθός",
    price: "49,99",
    icon: Mic,
    features: [
      "Βασική αναγνώριση φωνής",
      "Απλές φωνητικές εντολές",
      "Ενσωμάτωση με βασικές εφαρμογές",
      "Φωνητική απάντηση",
      "Υποστήριξη ελληνικής γλώσσας"
    ],
    benefits: [
      "Εύκολη εισαγωγή στη χρήση φωνητικών βοηθών",
      "Βελτίωση της προσβασιμότητας για όλους τους χρήστες",
      "Αυτοματοποίηση απλών καθημερινών εργασιών",
      "Εξοικονόμηση χρόνου μέσω φωνητικών εντολών",
      "Προσιτή λύση για μικρές επιχειρήσεις και ιδιώτες"
    ]
  },
  {
    title: "Advanced Voice Assistant",
    description: "Ένας προηγμένος φωνητικός βοηθός με εξελιγμένες δυνατότητες",
    price: "79,99",
    icon: Headphones,
    features: [
      "Προηγμένη αναγνώριση φωνής με AI",
      "Κατανόηση φυσικής γλώσσας",
      "Προσαρμοζόμενη φωνή και προσωπικότητα",
      "Ενσωμάτωση με πολλαπλές εφαρμογές και υπηρεσίες",
      "Αναγνώριση ομιλητή"
    ],
    benefits: [
      "Πιο φυσική και ανθρώπινη αλληλεπίδραση",
      "Δυνατότητα χειρισμού πολύπλοκων ερωτημάτων και εργασιών",
      "Προσωποποιημένη εμπειρία χρήστη",
      "Αυξημένη ασφάλεια μέσω αναγνώρισης φωνής",
      "Βελτιωμένη παραγωγικότητα στο χώρο εργασίας"
    ]
  },
  {
    title: "Multilingual Voice Assistant",
    description: "Ένας πολύγλωσσος φωνητικός βοηθός για παγκόσμια επικοινωνία",
    price: "99,99",
    icon: Globe,
    features: [
      "Υποστήριξη πολλαπλών γλωσσών",
      "Αυτόματη μετάφραση σε πραγματικό χρόνο",
      "Προσαρμογή σε τοπικές διαλέκτους και προφορές",
      "Πολιτισμική προσαρμογή απαντήσεων",
      "Εκμάθηση νέων γλωσσών"
    ],
    benefits: [
      "Άρση γλωσσικών εμποδίων στην επικοινωνία",
      "Διευκόλυνση διεθνών επιχειρηματικών συναλλαγών",
      "Βελτίωση της εξυπηρέτησης πελατών σε παγκόσμιο επίπεδο",
      "Υποστήριξη για πολυπολιτισμικά περιβάλλοντα εργασίας",
      "Προώθηση της διαπολιτισμικής κατανόησης"
    ]
  },
  {
    title: "AI-Powered Voice Assistant",
    description: "Ένας έξυπνος φωνητικός βοηθός με προηγμένη τεχνητή νοημοσύνη",
    price: "129,99",
    icon: Zap,
    features: [
      "Βαθιά μάθηση για συνεχή βελτίωση",
      "Προβλεπτική ανάλυση για προληπτική βοήθεια",
      "Συναισθηματική νοημοσύνη",
      "Προσαρμοστική συμπεριφορά βάσει χρήστη",
      "Αυτόνομη λήψη αποφάσεων"
    ],
    benefits: [
      "Εξατομικευμένη εμπειρία που βελτιώνεται με το χρόνο",
      "Προληπτική υποστήριξη πριν ο χρήστης ζητήσει βοήθεια",
      "Βελτιωμένη κατανόηση και ανταπόκριση στις ανάγκες του χρήστη",
      "Αυτοματοποίηση πολύπλοκων εργασιών και ροών εργασίας",
      "Προηγμένες αναλύσεις για επιχειρηματική ευφυΐα"
    ]
  },
  {
    title: "Entertainment Voice Assistant",
    description: "Ένας εξειδικευμένος φωνητικός βοηθός για ψυχαγωγία και μέσα",
    price: "69,99",
    icon: Music,
    features: [
      "Έλεγχος smart TV και συσκευών αναπαραγωγής",
      "Προτάσεις περιεχομένου βάσει προτιμήσεων",
      "Φωνητική αναζήτηση σε πλατφόρμες streaming",
      "Δημιουργία και διαχείριση playlists",
      "Ενσωμάτωση με παιχνίδια και διαδραστικό περιεχόμενο"
    ],
    benefits: [
      "Βελτιωμένη εμπειρία οικιακής ψυχαγωγίας",
      "Εξοικονόμηση χρόνου στην αναζήτηση περιεχομένου",
      "Προσωποποιημένες προτάσεις για νέο περιεχόμενο",
      "Ευκολότερος έλεγχος πολλαπλών συσκευών",
      "Αυξημένη διαδραστικότητα με ψυχαγωγικό περιεχόμενο"
    ]
  },
  {
    title: "Customer Service Voice Assistant",
    description: "Ένας εξειδικευμένος φωνητικός βοηθός για εξυπηρέτηση πελατών",
    price: "109,99",
    icon: Phone,
    features: [
      "Αυτόματη διαχείριση κλήσεων",
      "Αναγνώριση συναισθημάτων πελάτη",
      "Ενσωμάτωση με CRM συστήματα",
      "Πολυκαναλική υποστήριξη (τηλέφωνο, chat, email)",
      "Αυτόματη κλιμάκωση σε ανθρώπινο πράκτορα όταν χρειάζεται"
    ],
    benefits: [
      "24/7 εξυπηρέτηση πελατών χωρίς επιπλέον κόστος",
      "Μείωση χρόνου αναμονής και αύξηση ικανοποίησης πελατών",
      "Συνεπής ποιότητα εξυπηρέτησης",
      "Αυτοματοποίηση επαναλαμβανόμενων εργασιών",
      "Βελτιωμένη ανάλυση δεδομένων εξυπηρέτησης πελατών"
    ]
  },
  {
    title: "Business Voice Assistant",
    description: "Ένας εξειδικευμένος φωνητικός βοηθός για επιχειρηματικές λειτουργίες",
    price: "149,99",
    icon: Briefcase,
    features: [
      "Διαχείριση ημερολογίου και ραντεβού",
      "Αυτοματοποίηση αναφορών και παρουσιάσεων",
      "Ενσωμάτωση με εργαλεία παραγωγικότητας",
      "Φωνητική καταγραφή σημειώσεων και πρακτικών",
      "Ανάλυση επιχειρηματικών δεδομένων με φωνητικές εντολές"
    ],
    benefits: [
      "Αύξηση παραγωγικότητας στελεχών και εργαζομένων",
      "Βελτίωση οργάνωσης και διαχείρισης χρόνου",
      "Ευκολότερη πρόσβαση σε επιχειρηματικά δεδομένα και αναλύσεις",
      "Μείωση διοικητικού φόρτου",
      "Βελτιωμένη λήψη αποφάσεων βάσει δεδομένων"
    ]
  },
  {
    title: "IoT Voice Assistant",
    description: "Ένας εξειδικευμένος φωνητικός βοηθός για έλεγχο smart home και IoT συσκευών",
    price: "89,99",
    icon: Cloud,
    features: [
      "Έλεγχος πολλαπλών smart home συσκευών",
      "Αυτοματοποίηση οικιακών εργασιών",
      "Παρακολούθηση ενεργειακής κατανάλωσης",
      "Ενσωμάτωση με συστήματα ασφαλείας",
      "Προσαρμοστικοί αλγόριθμοι για βελτιστοποίηση λειτουργίας"
    ],
    benefits: [
      "Αυξημένη άνεση και έλεγχος στο σπίτι ή το γραφείο",
      "Εξοικονόμηση ενέργειας και μείωση κόστους",
      "Βελτιωμένη ασφάλεια και παρακολούθηση",
      "Απλοποίηση της διαχείρισης πολλαπλών smart συσκευών",
      "Προσαρμογή του περιβάλλοντος στις προτιμήσεις του χρήστη"
    ]
  },
  {
    title: "Secure Voice Assistant",
    description: "Ένας εξειδικευμένος φωνητικός βοηθός με προηγμένα χαρακτηριστικά ασφαλείας",
    price: "159,99",
    icon: Lock,
    features: [
      "Κρυπτογράφηση φωνής από άκρο σε άκρο",
      "Βιομετρική αυθεντικοποίηση φωνής",
      "Ανίχνευση και πρόληψη απάτης",
      "Ασφαλής διαχείριση ευαίσθητων δεδομένων",
      "Συμμόρφωση με GDPR και άλλους κανονισμούς"
    ],
    benefits: [
      "Αυξημένη προστασία προσωπικών και επιχειρηματικών δεδομένων",
      "Μείωση κινδύνου παραβιάσεων ασφαλείας",
      "Ασφαλής χρήση φωνητικού βοηθού σε ρυθμιζόμενους τομείς",
      "Ενίσχυση εμπιστοσύνης πελατών στην ασφάλεια των δεδομένων",
      "Προστασία από φωνητικές απάτες και μη εξουσιοδοτημένη πρόσβαση"
    ]
  },
  {
    title: "Custom Voice Assistant",
    description: "Ένας πλήρως προσαρμόσιμος φωνητικός βοηθός για εξειδικευμένες ανάγκες",
    price: "199,99",
    icon: Sparkles,
    features: [
      "Πλήρως προσαρμόσιμη φωνή και προσωπικότητα",
      "Ενσωμάτωση με εξειδικευμένα συστήματα και εφαρμογές",
      "Προσαρμοσμένοι αλγόριθμοι μηχανικής μάθησης",
      "Εξατομικευμένες ροές εργασίας και εντολές",
      "Δυνατότητα επέκτασης με custom modules"
    ],
    benefits: [
      "Απόλυτη προσαρμογή στις μοναδικές ανάγκες κάθε επιχείρησης",
      "Ανταγωνιστικό πλεονέκτημα μέσω εξειδικευμένης τεχνολογίας",
      "Βελτιστοποίηση διαδικασιών με βάση τις ιδιαίτερες απαιτήσεις",
      "Δυνατότητα κλιμάκωσης και προσαρμογής καθώς η επιχείρηση εξελίσσεται",
      "Μέγιστη απόδοση επένδυσης μέσω στοχευμένης λειτουργικότητας"
    ]
  }
]

export default function VoiceAssistantPage() {
  const [selectedProduct, setSelectedProduct] = useState<typeof voiceAssistantProducts[0] | null>(null)

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
          <h1 className="text-4xl font-bold text-white mb-6 mt-10 glow-text">AI Voice Assistants</h1>
          <p className="text-xl text-blue-100 mb-12">Ανακαλύψτε τη δύναμη της φωνητικής τεχνολογίας με τους προηγμένους AI Voice Assistants μας</p>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {voiceAssistantProducts.map((product, index) => (
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

