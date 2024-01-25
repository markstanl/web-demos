import React, { Suspense, useState, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from './Loader.jsx';
import Island from '../Models/island.jsx';
import Sky from '../Models/Sky.jsx';
import Plane from '../Models/Plane.jsx';
import HomeInfo from './HomeInfo.jsx';

import { soundOn, soundOff } from '../assets/icons';

import audio from '../assets/audio.mp3';

export default function Home() {

    const audioRef = useRef(new Audio(audio));
    audioRef.current.volume = 0.3;
    audioRef.current.loop = true;
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play();
        }

        return () => {
            audioRef.current.pause();
        }
    });

    const [isRotating, setIsRotating] = useState(false);

    const adjustIslandForScreenSize = () => {
        let screenScale = null;
        let screenPosition = [0, -6.5, -43];
        let rotation = [0.1, 4.7, 0];

        if (window.innerWidth < 768) {
            screenScale = [0.9, 0.9, 0.9];
        } else {
            screenScale = [1, 1, 1];
        }

        return [screenScale, screenPosition, rotation];
    }

    const adjustPlaneForScreenSize = () => {
        let screenScale, screenPosition;

        if (window.innerWidth < 768) {
            screenScale = [1.5, 1.5, 1.5];
            screenPosition = [0, -1.5, 0];
        } else {
            screenScale = [3, 3, 3];
            screenPosition = [0, 0, -4];
        }

        return [screenScale, screenPosition];
    }

    const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();
    const [planeScale, planePosition] = adjustPlaneForScreenSize();
    const [currentStage, setCurrentStage] = useState(1);

    return (
        <section className='w-full h-screen relative flex'>
            <div className='absolute top-28 left-0 right-0 z-10 flex
            items-center justify-center'>
                {currentStage && <HomeInfo currentStage={currentStage} />}
            </div>
            <Canvas className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
                camera={{ near: 0.1, far: 1000 }}
            >
                <Suspense fallback={<Loader />}>
                    <directionalLight position={[1, 1, 1]} intensity={0.5} />
                    <ambientLight intensity={0.5} />
                    <hemisphereLight skyColor='#b1e1ff' groundColor='#000000'
                        intensity={.4} />

                    <Sky />
                    <Island
                        position={islandPosition}
                        scale={islandScale}
                        rotation={islandRotation}
                        isRotating={isRotating}
                        setIsRotating={setIsRotating}
                        setCurrentStage={setCurrentStage}
                    />
                    <Plane
                        isRotating={isRotating}
                        scale={planeScale}
                        position={planePosition}
                        rotation={[0, 20, 0]}
                    />
                </Suspense>
            </Canvas>

            <div className='absolute bottom-2 left-2'>
                <img
                    src={isPlaying ? soundOn : soundOff}
                    alt='sound'
                    className='w-10 h-10 cursor-pointer object-contain'
                    onClick={() => setIsPlaying(!isPlaying)}
                />
            </div>
        </section>);
}

