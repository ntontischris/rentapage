'use client'
 
import React, { useRef, useEffect } from 'react'
import { THREE } from '@/utils/three'
 
const CyberpunkBackground3D: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null)
 
  useEffect(() => {
    if (!mountRef.current) return
 
    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
 
    renderer.setSize(window.innerWidth, window.innerHeight)
    mountRef.current.appendChild(renderer.domElement)
 
    // Create grid
    const gridHelper = new THREE.GridHelper(200, 50, 0x2a2a2a, 0x2a2a2a)
    gridHelper.material.opacity = 0.2
    gridHelper.material.transparent = true
    scene.add(gridHelper)
 
    // Create particles
    const particlesGeometry = new THREE.BufferGeometry()
    const particlesCount = 5000
    const posArray = new Float32Array(particlesCount * 3)
 
    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 100
    }
 
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3))
 
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: 0x5a5a5a,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending
    })
 
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particlesMesh)
 
    // Position camera
    camera.position.y = 10
    camera.position.z = 40
    camera.rotation.x = -0.2
 
    // Animation
    const clock = new THREE.Clock()
    const animate = () => {
      requestAnimationFrame(animate)
 
      const elapsedTime = clock.getElapsedTime()
 
      particlesMesh.rotation.y = elapsedTime * 0.05
      gridHelper.position.z = (elapsedTime * 2) % 4 - 2
 
      renderer.render(scene, camera)
    }
 
    animate()
 
    // Handle resize
    const handleResize = () => {
      if (!mountRef.current) return
      camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight)
    }
 
    window.addEventListener('resize', handleResize)
 
    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize)
      mountRef.current?.removeChild(renderer.domElement)
      scene.remove(gridHelper)
      scene.remove(particlesMesh)
      particlesGeometry.dispose()
      particlesMaterial.dispose()
      renderer.dispose()
    }
  }, [])
 
  return <div ref={mountRef} className="fixed inset-0 -z-10" />
}
 
export default CyberpunkBackground3D
