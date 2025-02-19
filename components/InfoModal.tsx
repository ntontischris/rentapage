import { useState, useEffect } from 'react'
import { X, Sparkles } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface InfoModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  description: string
  benefits: string[]
}

export function InfoModal({ isOpen, onClose, title, description, benefits }: InfoModalProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="w-full max-w-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Card className="bg-white/5 backdrop-blur-md border-blue-500/20 cyber-card overflow-hidden">
              <CardHeader className="relative border-b border-blue-500/20">
                <CardTitle className="text-2xl font-bold text-white flex items-center">
                  <Sparkles className="w-6 h-6 mr-2 text-blue-400" />
                  {title}
                </CardTitle>
                <CardDescription className="text-blue-200">
                  {description}
                </CardDescription>
                <button 
                  onClick={onClose} 
                  className="absolute top-4 right-4 text-white hover:text-blue-300 transition-colors"
                >
                  <X size={24} />
                </button>
              </CardHeader>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Οφέλη σε σύγκριση με τις κλασικές μεθόδους:</h3>
                <ul className="space-y-3 text-blue-100">
                  {benefits.map((benefit, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start"
                    >
                      <span className="mr-2 text-blue-400 flex-shrink-0 mt-1">
                        <Sparkles className="w-4 h-4" />
                      </span>
                      {benefit}
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

