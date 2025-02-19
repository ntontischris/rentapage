'use client'

import { useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'

const CyberpunkBackground3D = dynamic(() => import('@/components/CyberpunkBackground3D'), { ssr: false })

export function PageBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (containerRef.current) {
        const { left, top, width, height } = containerRef.current.getBoundingClientRect()
        const x = (event.clientX - left) / width
        const y = (event.clientY - top) / height
        
        const aurora1 = containerRef.current.querySelector('.aurora-bg-1') as HTMLElement
        const aurora2 = containerRef.current.querySelector('.aurora-bg-2') as HTMLElement
        const aurora3 = containerRef.current.querySelector('.aurora-bg-3') as HTMLElement

        if (aurora1 && aurora2 && aurora3) {
          aurora1.style.transform = `translate(${x * 20}px, ${y * 20}px)`
          aurora1.style.filter = `blur(${50 + x * 20}px)`
          
          aurora2.style.transform = `translate(${-x * 30}px, ${-y * 30}px)`
          aurora2.style.filter = `blur(${60 + y * 30}px)`
          
          aurora3.style.transform = `translate(${y * 40}px, ${x * 40}px)`
          aurora3.style.filter = `blur(${70 + (x + y) * 20}px)`
        }
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div ref={containerRef} className="fixed inset-0 z-0">
      <CyberpunkBackground3D />
      <div className="aurora-bg-1" />
      <div className="aurora-bg-2" />
      <div className="aurora-bg-3" />
    </div>
  )
}

