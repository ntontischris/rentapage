'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from '@/components/Header'
import { Button } from "@/components/ui/button"
import { Globe, ShoppingCart, Briefcase, Camera, Newspaper, Palette, Server, Rocket, Shield, Sparkles } from 'lucide-react'
import { InfoModal } from '@/components/InfoModal'
import { PageBackground } from '@/components/PageBackground'
import { motion } from 'framer-motion'
import Link from 'next/link';
import { LearnMoreButton } from '@/components/LearnMoreButton'

const websiteProducts = [
  {
    title: "Basic Website",
    description: "Ιδανικό για μικρές επιχειρήσεις που ξεκινούν την online παρουσία τους",
    price: "24,99",
    icon: Globe,
    features: [
      "Responsive σχεδιασμός",
      "Έως 5 σελίδες",
      "Βασική SEO βελτιστοποίηση",
      "Φόρμα επικοινωνίας",
      "Συμβατότητα με όλους τους browsers"
    ],
    benefits: [
      "Οικονομική λύση για online παρουσία",
      "Γρήγορη εγκατάσταση και έναρξη λειτουργίας",
      "Εύκολη διαχείριση περιεχομένου",
      "Βελτίωση της αξιοπιστίας της επιχείρησης",
      "Αύξηση της προσβασιμότητας σε πελάτες"
    ]
  },
  {
    title: "E-commerce Starter",
    description: "Για επιχειρήσεις που θέλουν να ξεκινήσουν τις online πωλήσεις",
    price: "49,99",
    icon: ShoppingCart,
    features: [
      "Έως 50 προϊόντα",
      "Ασφαλείς πληρωμές",
      "Διαχείριση αποθέματος",
      "Αξιολογήσεις προϊόντων",
      "Βασικές αναφορές πωλήσεων"
    ],
    benefits: [
      "Άνοιγμα σε νέες αγορές μέσω online πωλήσεων",
      "Αυτοματοποίηση διαδικασιών παραγγελιών",
      "Βελτίωση εμπειρίας αγοράς για τους πελάτες",
      "Αύξηση της εμπιστοσύνης με ασφαλείς συναλλαγές",
      "Καλύτερη κατανόηση των τάσεων πωλήσεων"
    ]
  },
  {
    title: "Professional Business",
    description: "Για εταιρείες που χρειάζονται μια επαγγελματική online παρουσία",
    price: "74,99",
    icon: Briefcase,
    features: [
      "Έως 20 σελίδες",
      "Προσαρμοσμένο σχέδιο",
      "Ενσωμάτωση blog",
      "Προηγμένη SEO βελτιστοποίηση",
      "Πολύγλωσση υποστήριξη"
    ],
    benefits: [
      "Ενίσχυση της επαγγελματικής εικόνας της εταιρείας",
      "Βελτίωση της κατάταξης στις μηχανές αναζήτησης",
      "Αύξηση της δέσμευσης των πελατών μέσω του blog",
      "Διεύρυνση της αγοράς με πολύγλωσσο περιεχόμενο",
      "Ευελιξία στην παρουσίαση των υπηρεσιών"
    ]
  },
  {
    title: "Creative Portfolio",
    description: "Ιδανικό για καλλιτέχνες, φωτογράφους και δημιουργικούς επαγγελματίες",
    price: "89,99",
    icon: Camera,
    features: [
      "Γκαλερί έργων με προηγμένες λειτουργίες",
      "Προσαρμοσμένο θέμα",
      "Ενσωμάτωση κοινωνικών μέσων",
      "Σύστημα κρατήσεων",
      "Βίντεο και ήχος υψηλής ποιότητας"
    ],
    benefits: [
      "Ανάδειξη του δημιουργικού έργου με τον καλύτερο τρόπο",
      "Προσέλκυση νέων πελατών και συνεργασιών",
      "Εύκολη ενημέρωση του portfolio",
      "Αύξηση της διαδικτυακής παρουσίας μέσω κοινωνικών μέσων",
      "Διευκόλυνση των κρατήσεων και των συνεργασιών"
    ]
  },
  {
    title: "News & Media Portal",
    description: "Για ειδησεογραφικά sites και online περιοδικά",
    price: "109,99",
    icon: Newspaper,
    features: [
      "Σύστημα διαχείρισης περιεχομένου για πολλαπλούς συντάκτες",
      "Κατηγοριοποίηση και ετικέτες άρθρων",
      "Σύστημα σχολίων και αλληλεπίδρασης χρηστών",
      "Ενσωμάτωση διαφημίσεων",
      "Αναλύσεις κοινού και περιεχομένου"
    ],
    benefits: [
      "Εύκολη δημοσίευση και διαχείριση περιεχομένου",
      "Αύξηση της δέσμευσης των αναγνωστών",
      "Δημιουργία εσόδων μέσω διαφημίσεων",
      "Βελτίωση της στόχευσης περιεχομένου",
      "Ανάπτυξη μιας ενεργής online κοινότητας"
    ]
  },
  {
    title: "Custom Design & Development",
    description: "Για επιχειρήσεις που χρειάζονται μια μοναδική και εξατομικευμένη λύση",
    price: "149,99",
    icon: Palette,
    features: [
      "Πλήρως προσαρμοσμένος σχεδιασμός",
      "Ανάπτυξη προσαρμοσμένων λειτουργιών",
      "UX/UI σχεδιασμός",
      "Ενσωμάτωση με εταιρικά συστήματα",
      "Απεριόριστες αναθεωρήσεις"
    ],
    benefits: [
      "Δημιουργία μιας μοναδικής online ταυτότητας",
      "Προσαρμογή στις ακριβείς ανάγκες της επιχείρησης",
      "Βελτιστοποίηση της εμπειρίας χρήστη",
      "Αύξηση της αποδοτικότητας με ενσωμάτωση συστημάτων",
      "Ευελιξία για μελλοντικές προσθήκες και αλλαγές"
    ]
  },
  {
    title: "High-Performance Hosting",
    description: "Για ιστοσελίδες με υψηλή επισκεψιμότητα και απαιτήσεις απόδοσης",
    price: "169,99",
    icon: Server,
    features: [
      "Αποκλειστικοί servers",
      "Καθημερινά backups",
      "CDN για γρήγορη φόρτωση παγκοσμίως",
      "SSL πιστοποιητικό υψηλής ασφάλειας",
      "24/7 παρακολούθηση και υποστήριξη"
    ],
    benefits: [
      "Βελτιωμένη ταχύτητα φόρτωσης της ιστοσελίδας",
      "Αυξημένη αξιοπιστία και χρόνος λειτουργίας",
      "Καλύτερη εμπειρία χρήστη για επισκέπτες παγκοσμίως",
      "Ενισχυμένη ασφάλεια δεδομένων",
      "Μείωση του κινδύνου απώλειας δεδομένων"
    ]
  },
  {
    title: "E-commerce Enterprise",
    description: "Για μεγάλες επιχειρήσεις με εκτεταμένες ανάγκες ηλεκτρονικού εμπορίου",
    price: "189,99",
    icon: Rocket,
    features: [
      "Απεριόριστα προϊόντα",
      "Πολλαπλά κανάλια πωλήσεων",
      "Προηγμένη διαχείριση αποθεμάτων",
      "Εξατομικευμένες προσφορές και εκπτώσεις",
      "Ενσωμάτωση με ERP συστήματα"
    ],
    benefits: [
      "Κλιμάκωση των online πωλήσεων χωρίς περιορισμούς",
      "Βελτιστοποίηση της διαχείρισης αποθεμάτων",
      "Αύξηση των πωλήσεων μέσω εξατομικευμένου μάρκετινγκ",
      "Απλοποίηση των επιχειρηματικών διαδικασιών",
      "Βελτίωση της λήψης αποφάσεων με προηγμένες αναλύσεις"
    ]
  },
  {
    title: "Secure Enterprise Solution",
    description: "Για οργανισμούς με υψηλές απαιτήσεις ασφάλειας και συμμόρφωσης",
    price: "199,99",
    icon: Shield,
    features: [
      "Προηγμένη κρυπτογράφηση δεδομένων",
      "Συμμόρφωση με GDPR, HIPAA, PCI-DSS",
      "Τακτικοί έλεγχοι ασφαλείας",
      "Πολυεπίπεδη αυθεντικοποίηση",
      "Αυτοματοποιημένες ενημερώσεις ασφαλείας"
    ],
    benefits: [
      "Προστασία ευαίσθητων δεδομένων της επιχείρησης",
      "Συμμόρφωση με κανονιστικές απαιτήσεις",
      "Μείωση του κινδύνου παραβιάσεων ασφαλείας",
      "Αύξηση της εμπιστοσύνης των πελατών",
      "Ελαχιστοποίηση του κινδύνου νομικών συνεπειών"
    ]
  },
  {
    title: "AI-Powered Website",
    description: "Για επιχειρήσεις που θέλουν να αξιοποιήσουν την τεχνητή νοημοσύνη",
    price: "199,99",
    icon: Sparkles,
    features: [
      "AI-powered περιεχόμενο και προτάσεις",
      "Προσωποποιημένη εμπειρία χρήστη",
      "Chatbot με μηχανική μάθηση",
      "Προβλεπτική ανάλυση επισκεπτών",
      "Αυτοματοποιημένη βελτιστοποίηση SEO"
    ],
    benefits: [
      "Βελτίωση της εμπειρίας χρήστη μέσω εξατομίκευσης",
      "Αύξηση των μετατροπών με έξυπνες προτάσεις",
      "Βελτίωση της εξυπηρέτησης πελατών με 24/7 AI υποστήριξη",
      "Βελτιστοποίηση του περιεχομένου και της στρατηγικής SEO",
      "Λήψη προληπτικών αποφάσεων βάσει προβλέψεων AI"
    ]
  }
]

export default function WebsitePage() {
  const [selectedProduct, setSelectedProduct] = useState<typeof websiteProducts[0] | null>(null)

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
          <h1 className="text-4xl font-bold text-white mb-6 mt-10 glow-text">Ιστοσελίδες</h1>
          <p className="text-xl text-blue-100 mb-12">Ανακαλύψτε την ιδανική λύση για την online παρουσία σας με τα προηγμένα πακέτα ιστοσελίδων μας</p>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {websiteProducts.map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-white/5 backdrop-blur-md border-blue-500/20 hover:bg-white/10 transition-all duration-300 cyber-card">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-white flex items-center cyber-card-title">
                      <product.icon className="w-6 h-6 mr-2 text-blue-400" />
                      {product.title}
                    </CardTitle>
                    <CardDescription className="text-blue-200 cyber-card-description">
                      {product.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white mb-4 cyber-card-price">Από <span className="text-2xl font-bold">€{product.price}</span>/μήνα</p>
                    <ul className="space-y-2 text-blue-100 mb-6">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center cyber-card-feature">
                          <span className="mr-2 text-blue-400">✨</span> {feature}
                        </li>
                      ))}
                    </ul>
                    <Button 
                      onClick={() => setSelectedProduct(product)} 
                      className="w-full cyber-button"
                    >
                      Μάθετε περισσότερα
                    </Button>
                    <div className="cyber-line"></div>
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

