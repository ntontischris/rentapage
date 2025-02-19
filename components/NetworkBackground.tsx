'use client'

import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  pulsePhase: number
}

export function NetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY
      }
    }
    window.addEventListener('mousemove', handleMouseMove)

    // Initialize particles
    const particles: Particle[] = []
    const particleCount = 150
    const connectionDistance = 200
    const mouseRadius = 200
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 1,
        vy: (Math.random() - 0.5) * 1,
        size: Math.random() * 2 + 1,
        pulsePhase: Math.random() * Math.PI * 2
      })
    }

    // Create circuit patterns
    const circuits: { x: number; y: number; size: number }[] = []
    for (let i = 0; i < 10; i++) {
      circuits.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 50 + 30
      })
    }

    // Animation function
    let animationFrame = 0
    const animate = () => {
      if (!ctx || !canvas) return
      animationFrame++

      // Clear canvas with gradient background
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
      gradient.addColorStop(0, '#000B2E')
      gradient.addColorStop(1, '#0A1A44')
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw circuits
      circuits.forEach(circuit => {
        ctx.strokeStyle = 'rgba(0, 150, 255, 0.1)'
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.rect(circuit.x, circuit.y, circuit.size, circuit.size)
        ctx.stroke()

        // Add some circuit details
        ctx.beginPath()
        ctx.moveTo(circuit.x, circuit.y + circuit.size / 2)
        ctx.lineTo(circuit.x + circuit.size, circuit.y + circuit.size / 2)
        ctx.stroke()

        ctx.beginPath()
        ctx.arc(circuit.x + circuit.size / 2, circuit.y + circuit.size / 2, 3, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(0, 150, 255, 0.3)'
        ctx.fill()
      })

      // Update and draw particles
      particles.forEach((particle, i) => {
        // Update position with mouse influence
        const dx = mouseRef.current.x - particle.x
        const dy = mouseRef.current.y - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < mouseRadius) {
          const force = (mouseRadius - distance) / mouseRadius
          particle.vx += (dx / distance) * force * 0.2
          particle.vy += (dy / distance) * force * 0.2
        }

        particle.x += particle.vx
        particle.y += particle.vy

        // Add some turbulence
        particle.vx += (Math.random() - 0.5) * 0.1
        particle.vy += (Math.random() - 0.5) * 0.1

        // Dampen velocity
        particle.vx *= 0.99
        particle.vy *= 0.99

        // Bounce off walls
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        // Update pulse phase
        particle.pulsePhase += 0.05

        // Draw particle with pulsing effect
        const pulseSize = particle.size * (1 + 0.2 * Math.sin(particle.pulsePhase))
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, pulseSize, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${0.5 + 0.2 * Math.sin(particle.pulsePhase)})`
        ctx.fill()

        // Draw glowing effect
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, pulseSize * 3
        )
        gradient.addColorStop(0, 'rgba(0, 150, 255, 0.2)')
        gradient.addColorStop(1, 'rgba(0, 150, 255, 0)')
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, pulseSize * 3, 0, Math.PI * 2)
        ctx.fill()

        // Draw connections
        particles.slice(i + 1).forEach(other => {
          const dx = other.x - particle.x
          const dy = other.y - particle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < connectionDistance) {
            const opacity = (1 - distance / connectionDistance)
            const gradient = ctx.createLinearGradient(
              particle.x, particle.y,
              other.x, other.y
            )
            
            // Create dynamic color based on position and time
            const hue1 = (particle.x + particle.y + animationFrame) % 360
            const hue2 = (other.x + other.y + animationFrame) % 360
            
            gradient.addColorStop(0, `hsla(${hue1}, 70%, 50%, ${opacity * 0.3})`)
            gradient.addColorStop(1, `hsla(${hue2}, 70%, 50%, ${opacity * 0.3})`)

            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(other.x, other.y)
            ctx.strokeStyle = gradient
            ctx.lineWidth = opacity * 2
            ctx.stroke()

            // Draw energy pulse along the connection
            const pulsePos = (animationFrame % 100) / 100
            const pulseX = particle.x + dx * pulsePos
            const pulseY = particle.y + dy * pulsePos
            
            ctx.beginPath()
            ctx.arc(pulseX, pulseY, 2, 0, Math.PI * 2)
            ctx.fillStyle = 'rgba(0, 255, 255, 0.8)'
            ctx.fill()
          }
        })
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0"
    />
  )
}

