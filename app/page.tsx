"use client"

import { useState, useEffect } from "react"
import ParticleBackground from "@/components/particle-background"
import TypingEffect from "@/components/typing-effect"
import LoadingScreen from "@/components/loading-screen"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Github, ArrowRight, Brain, Database, Code, Sparkles, Zap, Target, Cpu, Network, Bot } from "lucide-react"
import { motion } from "framer-motion"
import ScrollReveal from "@/components/scroll-reveal"

// Add custom CSS for gradient animation
const gradientStyle = `
  @keyframes gradient-x {
    0%, 100% {
      background-size: 200% 200%;
      background-position: left center;
    }
    50% {
      background-size: 200% 200%;
      background-position: right center;
    }
  }
  .animate-gradient-x {
    animation: gradient-x 4s ease infinite;
  }
`

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const skills = [
    { icon: Brain, label: "Neural Networks", color: "from-purple-500 to-pink-500" },
    { icon: Database, label: "Big Data", color: "from-blue-500 to-cyan-500" },
    { icon: Code, label: "ML Engineering", color: "from-green-500 to-emerald-500" },
    { icon: Cpu, label: "Deep Learning", color: "from-orange-500 to-red-500" },
    { icon: Network, label: "Cloud Computing", color: "from-indigo-500 to-purple-500" },
    { icon: Bot, label: "AI Consulting", color: "from-teal-500 to-blue-500" }
  ]

  const floatingElements = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    size: Math.random() * 60 + 20,
    delay: Math.random() * 2,
    duration: Math.random() * 3 + 4,
  }))

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: gradientStyle }} />
      {isLoading ? (
        <LoadingScreen finishLoading={() => setIsLoading(false)} />
      ) : (
        <div className="relative min-h-screen overflow-hidden">
          <ParticleBackground />
          
          {/* Floating geometric shapes */}
          {floatingElements.map((element) => (
            <motion.div
              key={element.id}
              className="absolute opacity-10 pointer-events-none"
              style={{
                width: element.size,
                height: element.size,
                background: `linear-gradient(45deg, rgba(139, 92, 246, 0.3), rgba(219, 39, 119, 0.3))`,
                borderRadius: Math.random() > 0.5 ? '50%' : '20%',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                rotate: [0, 180, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: element.duration,
                repeat: Infinity,
                delay: element.delay,
              }}
            />
          ))}

          {/* Mouse follower gradient */}
          <div
            className="fixed pointer-events-none z-0 opacity-20"
            style={{
              background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.15), transparent 40%)`,
              width: '100vw',
              height: '100vh',
              top: 0,
              left: 0,
            }}
          />

          {/* Hero Section */}
          <section className="container pt-20 pb-16 md:pt-32 md:pb-24 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                className="space-y-8"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                {/* Glowing badge */}
                <motion.div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 backdrop-blur-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Sparkles className="w-4 h-4 text-purple-400" />
                  <span className="text-sm font-medium text-purple-300">AI Engineer & Data Scientist</span>
                </motion.div>

                <div className="space-y-4">
                  <motion.h1 
                    className="text-5xl md:text-7xl font-bold leading-tight"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <span className="inline-block">Hi There!</span>{" "}
                    <motion.span 
                      className="inline-block text-6xl"
                      animate={{ 
                        rotateZ: [0, 20, -20, 0],
                        scale: [1, 1.2, 1]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity, 
                        repeatDelay: 3 
                      }}
                    >
                      👋
                    </motion.span>
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 animate-gradient-x">
                      I'm Nouhayla
                      <br />
                      MOUAKKAL
                    </span>
                  </motion.h1>

                  <motion.div 
                    className="text-xl md:text-3xl font-medium text-gray-300"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    <TypingEffect
                      texts={[
                        "Neural Network Architect", 
                        "AI Solutions Engineer", 
                        "Machine Learning Innovator",
                        "Big Data Specialist",
                        "Cloud Computing Expert"
                      ]}
                    />
                  </motion.div>
                </div>

                <motion.div 
                  className="flex flex-wrap gap-4 pt-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                >
                  <Button 
                    asChild 
                    size="lg" 
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <Link href="https://github.com/NouhaylaMouakkal">
                      <Github className="mr-2 h-5 w-5" />
                      Explore Code
                    </Link>
                  </Button>
                  <Button 
                    asChild 
                    variant="outline" 
                    size="lg"
                    className="border-purple-500/50 hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-pink-500/10 transform hover:scale-105 transition-all duration-300"
                  >
                    <Link href="/projects">
                      <Zap className="mr-2 h-5 w-5" />
                      View AI Projects
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </motion.div>

                {/* AI Skills Pills */}
                <motion.div 
                  className="flex flex-wrap gap-3 pt-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                >
                  {skills.slice(0, 3).map((skill, index) => (
                    <motion.div
                      key={skill.label}
                      className={`px-4 py-2 rounded-full bg-gradient-to-r ${skill.color} bg-opacity-20 border border-white/20 backdrop-blur-sm`}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.4 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="flex items-center gap-2 text-sm font-medium">
                        <skill.icon className="w-4 h-4" />
                        {skill.label}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Enhanced Avatar Section */}
              <motion.div 
                className="relative flex justify-center lg:justify-end"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                <div className="relative">
                  {/* Glowing background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl"
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                    }}
                  />
                  
                  {/* Main avatar */}
                  <motion.div
                    className="relative z-10"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <img
                      src="myavatar.png"
                      alt="Nouhayla Mouakkal - AI Engineer"
                      className="w-80 h-80 md:w-96 md:h-96 object-cover rounded-full border-4 border-gradient-to-r from-purple-400 to-pink-400 shadow-2xl"
                    />
                  </motion.div>

                  {/* Floating tech icons */}
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.label}
                      className="absolute bg-gray-900/80 backdrop-blur-sm p-3 rounded-xl shadow-lg border border-white/10"
                      style={{
                        top: `${20 + (index * 15)}%`,
                        right: index % 2 === 0 ? '-10%' : 'auto',
                        left: index % 2 !== 0 ? '-10%' : 'auto',
                      }}
                      animate={{
                        y: [0, -10, 0],
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{
                        duration: 3 + index * 0.5,
                        repeat: Infinity,
                        delay: index * 0.5,
                      }}
                      whileHover={{ scale: 1.1 }}
                    >
                      <skill.icon className={`w-6 h-6 bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`} />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div 
              className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
            >
              <Link href="#about" className="flex flex-col items-center group">
                <span className="text-sm font-medium mb-2 text-purple-300 group-hover:text-purple-200 transition-colors">
                  Discover More
                </span>
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="p-2 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-sm group-hover:bg-purple-500/20 transition-colors"
                >
                  <ArrowRight className="h-5 w-5 transform rotate-90 text-purple-400" />
                </motion.div>
              </Link>
            </motion.div>
  </section>

  {/* Enhanced About Section */}
  <section
    id="about"
    className="py-24 bg-gradient-to-b from-gray-900/50 to-gray-800/50 backdrop-blur-sm relative"
  >
    <div className="container relative z-10">
      <ScrollReveal>
        <motion.h2 
          className="text-4xl md:text-6xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            About Me
          </span>
        </motion.h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <ScrollReveal direction="right">
          <div className="relative">
            <div className="absolute -z-10 -top-6 -left-6 w-full h-full rounded-2xl bg-gradient-to-br from-purple-600/20 to-fuchsia-500/20 transform rotate-3" />
            <img
              src="/aboutme.png"
              alt="About Nouhayla"
              className="rounded-xl shadow-xl w-full object-cover z-10"
            />

            {/* Floating badges */}
            <motion.div
              className="absolute -top-8 -right-8 bg-card p-4 rounded-full shadow-lg flex items-center justify-center"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            >
              <Brain className="h-8 w-8 text-primary" />
            </motion.div>

            <motion.div
              className="absolute -bottom-8 -left-8 bg-card p-4 rounded-full shadow-lg flex items-center justify-center"
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                delay: 1,
              }}
            >
              <Database className="h-8 w-8 text-secondary" />
            </motion.div>

            <motion.div
              className="absolute top-1/2 -right-8 bg-card p-4 rounded-full shadow-lg        <motion.section 
          className="py-24 relative overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-sm" />
          <div className="container text-center relative z-10">
            <motion.h2 
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Let's Build the Future
              </span>
              <br />
              <span className="text-white">Together</span>
            </motion.h2>
            <motion.p 
              className="text-xl max-w-3xl mx-auto mb-10 text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Ready to revolutionize your business with cutting-edge AI solutions? 
              Let's collaborate and turn your vision into intelligent reality.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button 
                asChild 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transform hover:scale-110 transition-all duration-300 shadow-xl hover:shadow-2xl text-lg px-8 py-4"
              >
                <Link href="/contact">
                  <Target className="mr-2 h-6 w-6" />
                  Start Our Journey
                  <ArrowRight className="ml-2 h-6 w-6" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.section>
      </div>
    )}
    </>
  )
}