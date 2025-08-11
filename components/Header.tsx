'use client'
 
import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Zap } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { usePathname } from 'next/navigation'
 
const mainNavItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Contact', href: '/contact' },
  { name: 'FAQ', href: '/faq' },
]
 
export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
 
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Zap className="h-6 w-6" />
            <span className="hidden font-bold sm:inline-block">
              RentaPage
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {mainNavItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`transition-colors hover:text-foreground/80 ${
                  pathname === item.href ? 'text-foreground' : 'text-foreground/60'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            {/* Search can be added here */}
          </div>
          <nav className="hidden md:flex items-center">
            <Button asChild>
              <Link href="/get-started">Get Started</Link>
            </Button>
          </nav>
        </div>
        <div className="md:hidden">
          <Button
            variant="ghost"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </div>
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-x-0 top-14 z-50 grid gap-6 bg-background p-6 md:hidden"
            >
              <nav className="grid gap-4">
                {mainNavItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`-m-3 p-3 flex items-center rounded-md text-lg font-medium transition-colors ${
                      pathname === item.href ? 'text-foreground' : 'text-foreground/60'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
