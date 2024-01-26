import React, { Suspense, useState, useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { Canvas } from '@react-three/fiber';
import { useGLTF, useTexture } from '@react-three/drei';
import * as THREE from 'three';

import { Model } from './assets/IslandModel.jsx';

const ThreeDIslandButtons = () => {

    const [isHovered, setisHovered] = useState(false)
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [scale, setScale] = useState(1);
    const [rotation, setRotation] = useState([0, 0, Math.PI]);

    const computeX = ([x, y]) => {
        let localX = x - window.innerWidth / 2
        let localY = y - window.innerHeight / 2

        let returnY = localX / window.innerWidth * Math.PI * 0.08
        let returnX = localY / window.innerHeight * Math.PI * 0.06


        return [returnX, returnY, Math.PI]
    }

    useEffect(() => {
        const onMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY })
            setRotation(computeX([e.clientX, e.clientY]))
        }

        window.addEventListener('mousemove', onMouseMove)

        return () => {
            window.removeEventListener('mousemove', onMouseMove)
        }
    }, [])


    // [ Lowest: Pi*0.04, Pi*-.004,    most right 0 + Math.PI * 0.04 most left negative]

    return (
        <Canvas className='w-full h-full'
            gl={{ antialias: true, toneMapping: THREE.NoToneMapping }}
            style={{ pointerEvents: 'auto' }}
            linear>

            <Suspense fallback={null}>
                <ambientLight intensity={0.6} />
                <directionalLight color={'#FFFFFF'} intensity={0.9} position={[0, 10, 5]} />
                <Model rotation={rotation} />
            </Suspense>
        </Canvas>
    )
}

export default ThreeDIslandButtons