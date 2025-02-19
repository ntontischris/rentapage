import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

function Stars(props: any) {
  const ref = useRef<THREE.Points>(null!)
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(6000)
    const colors = new Float32Array(6000)
    for (let i = 0; i < 2000; i++) {
      const r = 100 * Math.sqrt(Math.random())
      const theta = 2 * Math.PI * Math.random()
      const phi = Math.acos(2 * Math.random() - 1)
      const x = r * Math.sin(phi) * Math.cos(theta)
      const y = r * Math.sin(phi) * Math.sin(theta)
      const z = r * Math.cos(phi)
      positions.set([x, y, z], i * 3)
      const color = new THREE.Color()
      color.setHSL(Math.random(), 0.7, 0.9)
      colors.set(color.toArray(), i * 3)
    }
    return [positions, colors]
  }, [])

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 20
    ref.current.rotation.y -= delta / 30
  })

  return (
    <Points ref={ref} positions={positions} colors={colors} {...props}>
      <PointMaterial
        transparent
        vertexColors
        size={0.5}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  )
}

export default function StarryBackground() {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Stars />
      </Canvas>
    </div>
  )
}

