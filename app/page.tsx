'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Loader2, Send, Image, MessageSquare, Mic, Phone, Sun, Moon, Menu } from "lucide-react"

export default function AdvancedAILandingPage() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [theme, setTheme] = useState('system')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setTheme(savedTheme)
    }
  }, [])

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = () => {
      if (theme === 'system') {
        document.documentElement.classList.toggle('dark', mediaQuery.matches)
      }
    }

    handleChange()
    mediaQuery.addEventListener('change', handleChange)

    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [theme])

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else if (theme === 'light') {
      document.documentElement.classList.remove('dark')
    } else {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
      document.documentElement.classList.toggle('dark', mediaQuery.matches)
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prevTheme => {
      if (prevTheme === 'system') return 'light'
        if (prevTheme === 'light') return 'dark'
          return 'system'
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsLoading(false)
    setIsSubmitted(true)
  }

  const features = [
    { icon: <Image  className="w-6 h-6" />, name: "Image Generation", description: "State-of-the-art model for unparalleled image creation" },
      { icon: <MessageSquare className="w-6 h-6" />, name: "Advanced Chatbot", description: "Cutting-edge conversational AI for natural interactions" },
      { icon: <Mic className="w-6 h-6" />, name: "Audio Generation", description: "High-fidelity audio synthesis for various applications" },
      { icon: <Phone className="w-6 h-6" />, name: "AI Calls", description: "Intelligent voice interactions powered by advanced AI" },
  ]

    return (
      <div className="min-h-screen bg-gradient-to-b from-[#f0f0f5] to-[#e5e5ea] dark:from-[#1a1a1f] dark:to-[#15151a] text-[#1d1d1f] dark:text-[#f5f5f7] flex flex-col justify-start items-center overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent dark:from-[#2d2d2f] dark:to-transparent opacity-50" />
      <div className="absolute inset-0" aria-hidden="true">
      {[...Array(50)].map((_, i) => (
        <div
        key={i}
        className="absolute bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-10 dark:opacity-20 blur-xl"
        style={{
          top: `${Math.random() * 200 - 50}%`,
          left: `${Math.random() * 200 - 50}%`,
          width: `${Math.random() * 400 + 100}px`,
          height: `${Math.random() * 400 + 100}px`,
          transform: `scale(${Math.random() * 0.5 + 0.5})`,
          animation: `float ${Math.random() * 10 + 10}s linear infinite`,
        }}
        //style={{
        //  top: `${Math.random() * 100}vh`,
        //  left: `${Math.random() * 100}vw`,
        //  width: `${Math.random() * 100 + 50}px`,
        //  height: `${Math.random() * 100 + 50}px`,
        //  animation: `float ${Math.random() * 10 + 5}s linear infinite`,
        //}}
        />
      ))}
      </div>
      </div>

      <header className="w-full flex justify-between items-center p-4 md:p-6 bg-white/80 dark:bg-[#2d2d2f]/80 backdrop-blur-sm z-50 fixed top-0 left-0 right-0">
      <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
      sentientOne
      </h2>
      <div className="flex items-center space-x-2">
      <Button
      onClick={toggleTheme}
      className="bg-transparent hover:bg-gray-100 dark:hover:bg-gray-700 text-[#1d1d1f] dark:text-[#f5f5f7] rounded-full p-2 transition-all duration-300"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : theme === 'dark' ? 'system' : 'light'} mode`}
      >
      {theme === 'light' ? <Moon className="w-5 h-5" /> : theme === 'dark' ? <Sun className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
      </Button>
      <Button
      onClick={() => setIsMenuOpen(!isMenuOpen)}
      className="md:hidden bg-transparent hover:bg-gray-100 dark:hover:bg-gray-700 text-[#1d1d1f] dark:text-[#f5f5f7] rounded-full p-2 transition-all duration-300"
      aria-label="Toggle menu"
      >
      <Menu className="w-5 h-5" />
      </Button>
      </div>
      </header>

      <AnimatePresence>
      {isMenuOpen && (
        <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="fixed top-16 left-0 right-0 bg-white/95 dark:bg-[#2d2d2f]/95 backdrop-blur-sm z-40 p-4 shadow-lg"
        >
        <nav className="flex flex-col space-y-2">
        <a href="#features" className="text-lg font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">Features</a>
        <a href="#about" className="text-lg font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">About</a>
        <a href="#contact" className="text-lg font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">Contact</a>
        </nav>
        </motion.div>
      )}
      </AnimatePresence>

      <main className="flex-grow w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
      <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center relative z-10"
      >
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 leading-tight">
      sentientOne Suite
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl mb-8 text-[#4a4a4f] dark:text-[#a1a1a6] max-w-2xl mx-auto leading-relaxed">
      Unleash the power of next-generation AI technology to transform your digital experience
      </p>

      <motion.form
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      onSubmit={handleSubmit}
      className="w-full max-w-md mx-auto mb-12"
      >
      <AnimatePresence mode="wait">
      {!isSubmitted ? (
        <motion.div
        key="form"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        >
        <div className="flex flex-col space-y-4">
        <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="bg-white/80 dark:bg-[#2d2d2f]/80 border-[#d2d2d7] dark:border-[#4d4d4f] text-[#1d1d1f] dark:text-[#f5f5f7] placeholder-[#86868b] dark:placeholder-[#a1a1a6] rounded-full px-6 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
        />
        <Button 
        type="submit" 
        disabled={isLoading}
        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 dark:from-blue-500 dark:to-purple-500 dark:hover:from-blue-600 dark:hover:to-purple-600 transition-all duration-300 rounded-full px-6 py-3 shadow-lg hover:shadow-xl"
        >
        {isLoading ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : <Send className="mr-2 h-5 w-5" />}
        {isLoading ? 'Joining...' : 'Join Waitlist'}
        </Button>
        </div>
        <p className="mt-4 text-sm text-[#86868b] dark:text-[#a1a1a6]">Be among the first to experience the future of AI technology.</p>
        </motion.div>
      ) : (
      <motion.div
      key="success"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 leading-tight"
      //className="text-xl  font-semibold text-lg bg-white/80 dark:bg-[#2d2d2f]/80 p-4 rounded-2xl shadow-lg backdrop-blur-sm from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
      >
      <p>Thank you for joining our exclusive waitlist. We'll be in touch soon.</p>
        </motion.div>
      )}
      </AnimatePresence>
      </motion.form>
      </motion.div>

      <div id="features" className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-12">
      {features.map((feature, index) => (
        <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        className="flex items-start space-x-4 bg-white/80 dark:bg-[#2d2d2f]/80 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm"
        >
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-3 flex-shrink-0">
        {React.cloneElement(feature.icon, { className: "w-6 h-6 text-white" })}
        </div>
        <div className="text-left">
        <h3 className="text-lg font-semibold mb-2 text-[#1d1d1f] dark:text-[#f5f5f7]">{feature.name}</h3>
        <p className="text-sm text-[#4a4a4f] dark:text-[#a1a1a6]">{feature.description}</p>
        </div>
        </motion.div>
      ))}
      </div>
      </main>

      <footer className="w-full bg-white/80 dark:bg-[#2d2d2f]/80 backdrop-blur-sm py-6 px-4">
      <div className="max-w-4xl mx-auto text-center">
      <p className="text-sm text-[#86868b] dark:text-[#a1a1a6]">
      © {new Date().getFullYear()} sentientOne Suite. All rights reserved.
        </p>
      </div>
      </footer>
      </div>
    )
}
