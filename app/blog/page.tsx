'use client'

import { motion } from 'framer-motion'
import { PageBackground } from '@/components/PageBackground'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, User, ArrowRight, Brain, Zap, Cpu, Network, Lock, Lightbulb, BarChart } from 'lucide-react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"

const blogPosts = [
  {
    title: "Η επανάσταση της AI στις ελληνικές επιχειρήσεις",
    author: "Χρήστος Ντόντης - Founder & CEO της NAIC.gr",
    date: "15 Δεκεμβρίου 2023",
    excerpt: "Πώς η τεχνητή νοημοσύνη μεταμορφώνει το επιχειρηματικό τοπίο στην Ελλάδα και ποιες είναι οι ευκαιρίες για τις τοπικές επιχειρήσεις. Από την αυτοματοποίηση διαδικασιών μέχρι την εξατομίκευση της εμπειρίας του πελάτη, η AI προσφέρει απεριόριστες δυνατότητες. Ανακαλύψτε πώς ελληνικές εταιρείες όπως η Beat και η Workable χρησιμοποιούν την AI για να καινοτομούν και να αναπτύσσονται.",
    category: "AI Trends",
    icon: Brain
  },
  {
    title: "Προκλήσεις και ευκαιρίες του AI Consulting στην Ελλάδα",
    author: "Χρήστος Ντόντης - Founder & CEO της NAIC.gr",
    date: "2 Δεκεμβρίου 2023",
    excerpt: "Μια εις βάθος ανάλυση του τοπίου του AI Consulting στην Ελλάδα και πώς οι επιχειρήσεις μπορούν να επωφεληθούν από την τεχνητή νοημοσύνη. Εξερευνούμε τις προκλήσεις της υιοθέτησης AI, όπως η έλλειψη εξειδικευμένου προσωπικού και η ανάγκη για επενδύσεις, αλλά και τις τεράστιες ευκαιρίες για βελτίωση της αποδοτικότητας και της ανταγωνιστικότητας.",
    category: "Business",
    icon: Zap
  },
  {
    title: "Το μέλλον της εργασίας στην εποχή της AI",
    author: "Χρήστος Ντόντης - Founder & CEO της NAIC.gr",
    date: "20 Νοεμβρίου 2023",
    excerpt: "Πώς η τεχνητή νοημοσύνη αλλάζει το εργασιακό τοπίο και ποιες δεξιότητες θα είναι απαραίτητες στο μέλλον. Από την αυτοματοποίηση ρουτίνας εργασιών μέχρι τη δημιουργία νέων θέσεων εργασίας, η AI επαναπροσδιορίζει τον τρόπο που εργαζόμαστε. Μάθετε πώς να προετοιμαστείτε για την εποχή της AI και ποιες δεξιότητες θα είναι πολύτιμες στο μέλλον.",
    category: "Future of Work",
    icon: Cpu
  },
  {
    title: "AI Transformation: Η στρατηγική για τις ελληνικές επιχειρήσεις",
    author: "Χρήστος Ντόντης - Founder & CEO της NAIC.gr",
    date: "5 Νοεμβρίου 2023",
    excerpt: "Ένας πρακτικός οδηγός για το πώς οι ελληνικές επιχειρήσεις μπορούν να υιοθετήσουν και να αξιοποιήσουν την τεχνητή νοημοσύνη.",
    category: "Strategy",
    icon: Network
  },
  {
    title: "Machine Learning στην πράξη: Case Studies από την ελληνική αγορά",
    author: "Χρήστος Ντόντης - Founder & CEO της NAIC.gr",
    date: "28 Οκτωβρίου 2023",
    excerpt: "Πραγματικά παραδείγματα εφαρμογής machine learning σε ελληνικές επιχειρήσεις και τα αποτελέσματά τους.",
    category: "Case Studies",
    icon: BarChart
  },
  {
    title: "Η σημασία του AI Ethics στις σύγχρονες επιχειρήσεις",
    author: "Χρήστος Ντόντης - Founder & CEO της NAIC.gr",
    date: "15 Οκτωβρίου 2023",
    excerpt: "Γιατί η ηθική στην τεχνητή νοημοσύνη είναι κρίσιμη και πώς μπορούν οι επιχειρήσεις να την εφαρμόσουν.",
    category: "AI Ethics",
    icon: Lock
  },
  {
    title: "Data-Driven Decision Making: Ο ρόλος της AI",
    author: "Χρήστος Ντόντης - Founder & CEO της NAIC.gr",
    date: "1 Οκτωβρίου 2023",
    excerpt: "Πώς η τεχνητή νοημοσύνη μπορεί να βελτιώσει τη λήψη αποφάσεων βάσει δεδομένων στις επιχειρήσεις.",
    category: "Data Analytics",
    icon: BarChart
  },
  {
    title: "AI και Καινοτομία στην Ελληνική Startup Σκηνή",
    author: "Χρήστος Ντόντης - Founder & CEO της NAIC.gr",
    date: "15 Σεπτεμβρίου 2023",
    excerpt: "Πώς οι ελληνικές startups αξιοποιούν την τεχνητή νοημοσύνη για να καινοτομήσουν και να αναπτυχθούν.",
    category: "Innovation",
    icon: Lightbulb
  },
  {
    title: "Το μέλλον του AI Consulting στην Ελλάδα",
    author: "Χρήστος Ντόντης - Founder & CEO της NAIC.gr",
    date: "1 Σεπτεμβρίου 2023",
    excerpt: "Προβλέψεις και τάσεις για το μέλλον του AI Consulting στην ελληνική αγορά.",
    category: "Future Trends",
    icon: Brain
  },
  {
    title: "AI Integration: Από τη θεωρία στην πράξη",
    author: "Χρήστος Ντόντης - Founder & CEO της NAIC.gr",
    date: "15 Αυγούστου 2023",
    excerpt: "Πρακτικός οδηγός για την ενσωμάτωση της τεχνητής νοημοσύνης στις επιχειρησιακές διαδικασίες.",
    category: "Implementation",
    icon: Cpu
  }
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 to-purple-950 relative overflow-hidden">
      <PageBackground />
      <main className="pt-20 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6 mt-6 md:mt-10 glow-text text-center">AI Insights Blog</h1>
          <p className="text-lg md:text-xl text-blue-100 mb-8 md:mb-12 text-center max-w-2xl mx-auto">
            Εμπειρίες και γνώσεις από τον πρωτοπόρο του AI Consulting στην Ελλάδα
          </p>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="cyber-card relative overflow-hidden group hover:shadow-glow transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <CardHeader className="relative z-10 p-4 md:p-6 border-b border-blue-500/20">
                    <div className="flex items-center justify-between mb-2">
                      <div className="bg-blue-600/90 px-2 py-1 md:px-3 md:py-1 rounded-full text-xs font-semibold text-white backdrop-blur-sm shadow-glow-sm">
                        {post.category}
                      </div>
                      <post.icon className="w-6 h-6 md:w-8 md:h-8 text-blue-400 group-hover:text-blue-300 transition-colors duration-300 filter drop-shadow-glow" />
                    </div>
                    <CardTitle className="text-lg md:text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300 cyber-card-title glow-text-sm">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10 p-4 md:p-6 bg-black/20 backdrop-blur-sm flex-grow flex flex-col justify-between">
                    <div className="flex items-center text-blue-300 mb-2 text-xs md:text-sm space-x-2">
                      <div className="flex items-center">
                        <User className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                        <span className="truncate">{post.author}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <p className="text-blue-100 mb-4 line-clamp-5 text-sm md:text-base group-hover:text-blue-50 transition-colors duration-300 cyber-card-description">{post.excerpt}</p>
                    <Link href={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`}>
                      <Button className="w-full cyber-button neon-pulse group-hover:shadow-glow-lg transition-all duration-300">
                        <span className="mr-2">Διαβάστε περισσότερα</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </Link>
                  </CardContent>
                  <div className="cyber-line group-hover:opacity-100 transition-opacity duration-300"></div>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 md:mt-12 text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="cyber-button neon-pulse">
                <Brain className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                Περισσότερα άρθρα
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </main>
    </div>
  )
}

