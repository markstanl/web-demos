import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { AnimationMixer } from 'three';


import birdScene from '../assets/3D/bird.glb'

const Bird = () => {
    const birdRef = useRef();
    const { scene, animations, nodes } = useGLTF(birdScene);
    const mixerRef = useRef();

    useEffect(() => {
        if (nodes) {
            birdRef.current = nodes.bird; // Assign the loaded model to birdRef.current
        }
    }, [nodes]);

    const { actions } = useAnimations(animations, birdRef);

    useEffect(() => {
        if (scene && animations) {
            mixerRef.current = new AnimationMixer(scene);
            const action = mixerRef.current.clipAction(animations[0]);
            action.play();
        }
    }, [scene, animations]);

    useFrame((_, delta) => {
        if (birdRef.current) {
            birdRef.current.rotation.x += 0.15 * delta;
        }
    });
    return (
        <mesh position={[-4, 2, 1]} scale={[0.003, 0.003, 0.003]}>
            <primitive object={scene} />
        </mesh>
    )
}

export default Bird