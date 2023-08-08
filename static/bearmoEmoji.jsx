import { useFrame } from 'react-three-fiber'
import React, { useRef } from 'react'
import { useGLTF} from '@react-three/drei'





function BearMO () {
    const { animations}  = useGLTF('/bearmoemoji.glb');
    console.log('Animation Names:', animations.map((animation) => animation.name));
    
    return <group />;
}