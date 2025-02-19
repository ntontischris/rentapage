'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Bot, Mic, User, Zap, Globe, Workflow } from 'lucide-react'

const services = [
  {
    title: 'Ιστοσελίδα',
    description: 'Επαγγελματική παρουσία στο διαδίκτυο',
    price: '24,99',
    icon: Globe,
    href: '/website',
    features: ['Responsive σχεδιασμός', 'SEO βελτιστοποίηση', 'Ασφάλεια SSL']
  },
  {
    title: 'Chatbot',
    description: 'AI-powered εξυπηρέτηση πελατών',
    price: '29,99',
    icon: Bot,
    href: '/chatbot',
    features: ['24/7 διαθεσιμότητα', 'Προσαρμοσμένες απαντήσεις', 'Πολλαπλές γλώσσες']
  },
  {
    title: 'Voice Assistant',
    description: 'Φωνητικός έλεγχος για την εφαρμογή σας',
    price: '49,99',
    icon: Mic,
    href: '/voice-assistant',
    features: ['Φυσική επεξεργασία γλώσσας', 'Προσαρμοσμένες εντολές', 'Ενσωμάτωση με συσκευές']
  },
  {
    title: 'Avatar',
    description: 'Εικονικός AI βοηθός',
    price: '69,99',
    icon: User,
    href: '/avatar',
    features: ['Ρεαλιστικές εκφράσεις', '3D ανιμέισον', 'Προσαρμοσμένη εμφάνιση']
  },
  {
    title: 'Marketing',
    description: 'Αυτοματοποίηση marketing καμπανιών',
    price: '99,99',
    icon: Zap,
    href: '/marketing',
    features: ['Email καμπάνιες', 'Ανάλυση δεδομένων', 'Στόχευση κοινού']
  },
  {
    title: 'AI Workflows',
    description: 'Ολιστική διοίκηση με AI',
    price: '149,99',
    icon: Workflow,
    href: '/ai-workflows',
    features: ['Αυτοματοποίηση διαδικασιών', 'Προγνωστική ανάλυση', 'Βελτιστοποίηση πόρων']
  }
]

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  })
}

export function ServiceOverview() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service, index) => (
        <motion.div
          key={service.title}
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          custom={index}
        >
          <motion.div 
            className="cyber-card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div 
              className="cyber-card-title flex items-center glitch"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              data-text={service.title}
            >
              <service.icon className="w-6 h-6 mr-2" />
              {service.title}
            </motion.div>
            <motion.p 
              className="cyber-card-description"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {service.description}
            </motion.p>
            <motion.p 
              className="cyber-card-price"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Από <span className="text-3xl font-bold neon-pulse">€{service.price}</span>/μήνα
            </motion.p>
            <motion.ul 
              className="space-y-2 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {service.features.map((feature, index) => (
                <motion.li 
                  key={index} 
                  className="cyber-card-feature"
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  {feature}
                </motion.li>
              ))}
            </motion.ul>
            <Link href={service.href}>
              <motion.button 
                className="cyber-button w-full"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Μάθετε περισσότερα
              </motion.button>
            </Link>
            <div className="cyber-line"></div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  )
}

