'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Zap, ChevronDown, ChevronRight, Github, Twitter, Linkedin, Mail } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { usePathname } from 'next/navigation'

const mainNavItems = [
  { name: 'Αρχική', href: '/' },
  { name: 'Υπηρεσίες', href: '#', subItems: [
    { name: 'Ιστοσελίδα', href: '/website' },
    { name: 'Chatbot', href: '/chatbot' },
    { name: 'Voice Assistant', href: '/voice-assistant' },
    { name: 'Avatar', href: '/avatar' },
    { name: 'Marketing', href: '/marketing' },
    { name: 'AI Workflows', href: '/ai-workflows' },
  ]},
  { name: 'Επικοινωνία', href: '/contact' },
  { name: 'FAQ', href: '/faq' },
]

const socialLinks = [
  { name: 'GitHub', icon: Github, href: 'https://github.com' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
  { name: 'Email', icon: Mail, href: 'mailto:info@rentapage.com' },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('scroll', handleMouseMove)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const handleDropdownToggle = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name)
  }

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-md shadow-glow' : 'bg-transparent'}`}>
      <div className="relative bg-black text-white py-4 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-purple-900/30"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent"></div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 relative z-10">
          <div className="flex justify-between items-center">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link href="/" className="flex items-center space-x-2 group">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Zap className="h-8 w-8 sm:h-10 sm:w-10 text-primary group-hover:text-secondary transition-colors duration-300" />
                </motion.div>
                <motion.span 
                  className="text-xl sm:text-2xl lg:text-3xl font-bold cyber-heading gradient-text"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  RentAPage
                </motion.span>
              </Link>
            </div>

            <nav className="hidden lg:flex space-x-4 xl:space-x-10">
              {mainNavItems.map((item) => (
                <div key={item.name} className="relative group">
                  {item.subItems ? (
                    <>
                      <button
                        className={`text-base font-medium text-white hover:text-primary transition-colors cyber-heading relative group flex items-center ${pathname.startsWith(item.href) ? 'text-primary' : ''}`}
                        onClick={() => handleDropdownToggle(item.name)}
                        aria-expanded={activeDropdown === item.name}
                      >
                        {item.name}
                        <ChevronDown className="ml-1 h-4 w-4 group-hover:rotate-180 transition-transform duration-300" />
                      </button>
                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-black/80 backdrop-blur-md ring-1 ring-black ring-opacity-5 cyber-card"
                          >
                            <div className="py-1" role="menu" aria-orientation="vertical">
                              {item.subItems.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  href={subItem.href}
                                  className={`block px-4 py-2 text-sm text-white hover:bg-primary/20 transition-colors ${pathname === subItem.href ? 'text-primary' : ''}`}
                                  role="menuitem"
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className={`text-base font-medium text-white hover:text-primary transition-colors cyber-heading relative group ${pathname === item.href ? 'text-primary' : ''}`}
                    >
                      {item.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            <div className="hidden lg:flex items-center justify-end lg:flex-1 space-x-2 xl:space-x-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-primary transition-colors duration-300"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <link.icon className="h-6 w-6" />
                  <span className="sr-only">{link.name}</span>
                </motion.a>
              ))}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/blog">
                  <Button className="cyber-button neon-pulse">
                    Blog
                  </Button>
                </Link>
              </motion.div>
            </div>

            <div className="lg:hidden">
              <Button
                variant="ghost"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white hover:text-primary transition-colors"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="h-6 w-6" aria-hidden="true" />
                )}
              </Button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-md"
            >
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-black/90 backdrop-blur-md divide-y-2 divide-gray-50">
                <div className="pt-5 pb-6 px-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <Link href="/" className="flex items-center space-x-2">
                        <Zap className="h-8 w-8 text-primary animate-pulse" />
                        <span className="text-2xl font-bold cyber-heading gradient-text">
                          RentAPage
                        </span>
                      </Link>
                    </div>
                    <div className="-mr-2">
                      <Button
                        variant="ghost"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-white hover:text-primary transition-colors"
                        aria-label="Close mobile menu"
                      >
                        <X className="h-6 w-6" aria-hidden="true" />
                      </Button>
                    </div>
                  </div>
                  <div className="mt-4">
                    <nav className="grid gap-y-4">
                      {mainNavItems.map((item) => (
                        <div key={item.name}>
                          {item.subItems ? (
                            <>
                              <button
                                className="text-sm sm:text-base font-medium text-white hover:text-primary transition-colors cyber-heading"
                                onClick={() => handleDropdownToggle(item.name)}
                              >
                                {item.name}
                              </button>
                              <AnimatePresence>
                                {activeDropdown === item.name && (
                                  <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="mt-2 ml-4 space-y-2"
                                  >
                                    {item.subItems.map((subItem) => (
                                      <Link
                                        key={subItem.name}
                                        href={subItem.href}
                                        className="block text-sm text-white hover:text-primary transition-colors"
                                        onClick={() => {
                                          setIsMobileMenuOpen(false);
                                          setActiveDropdown(null);
                                        }}
                                      >
                                        <ChevronRight className="inline-block mr-2 h-4 w-4" />
                                        {subItem.name}
                                      </Link>
                                    ))}
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </>
                          ) : (
                            <Link
                              href={item.href}
                              className="text-sm sm:text-base font-medium text-white hover:text-primary transition-colors cyber-heading"
                              onClick={() => {
                                setIsMobileMenuOpen(false);
                                setActiveDropdown(null);
                              }}
                            >
                              {item.name}
                            </Link>
                          )}
                        </div>
                      ))}
                    </nav>
                  </div>
                </div>
                <div className="py-6 px-5 space-y-6">
                  <div className="flex justify-center space-x-4">
                    {socialLinks.map((link) => (
                      <motion.a
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-primary transition-colors duration-300"
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <link.icon className="h-6 w-6" />
                        <span className="sr-only">{link.name}</span>
                      </motion.a>
                    ))}
                  </div>
                  <Link href="/blog">
                    <Button className="w-full cyber-button neon-pulse" onClick={() => setIsMobileMenuOpen(false)}>
                      Blog
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        {/* Animated elements */}
        <div 
          className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full filter blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
          }}
        ></div>
        <div 
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-pink-500/20 to-blue-500/20 rounded-full filter blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * -0.02}px, ${mousePosition.y * -0.02}px)`,
          }}
        ></div>
      </div>
    </header>
  )
}

