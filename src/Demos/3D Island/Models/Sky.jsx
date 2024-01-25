import React from 'react'
import { useGLTF } from '@react-three/drei'

const Sky = () => {
    return (
        <mesh>
            <sphereBufferGeometry args={[1000, 60, 40]} />
            <meshBasicMaterial color='#b1e1ff' side={2} />
        </mesh>
    )
}

export default Sky