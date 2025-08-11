import { useFrame } from 'react-three-fiber'
import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useEffect} from "react"

export default function Model(props) {
  // Fetch model and a separate texture
  const { nodes, animations } = useGLTF("./bearmofloat")
  // Extract animation actions
  const { ref, actions, names } = useAnimations(animations)
  // Hover and animation-index states

    console.log("nodes's attribute:" + nodes);

  return (
    <group ref={ref} {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <primitive object={nodes.mixamorigHips} />
        <skinnedMesh
          castShadow
          receiveShadow
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}>
        </skinnedMesh>
      </group>
    </group>
  )
}