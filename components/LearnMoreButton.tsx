import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Sparkles } from 'lucide-react'

interface LearnMoreButtonProps {
  onClick: () => void
}

export function LearnMoreButton({ onClick }: LearnMoreButtonProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Button
        onClick={onClick}
        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-glow transition-all duration-300 cyber-button group relative overflow-hidden"
      >
        <span className="relative z-10 flex items-center justify-center">
          <Sparkles className="w-4 h-4 mr-2 group-hover:animate-pulse" />
          Μάθετε περισσότερα
        </span>
        <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
        <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"></span>
      </Button>
    </motion.div>
  )
}

