import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useThree, useFrame } from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import planeScene from '../assets/3D/plane.glb';

const Plane = ({ isRotating, scale, position, ...props }) => {
    const { scene } = useThree();
    const [animationAction, setAnimationAction] = useState(null);
    const modelRef = useRef();

    useEffect(() => {
        const loader = new GLTFLoader();
        loader.load(planeScene, (gltf) => {
            const model = gltf.scene;
            modelRef.current = model;

            model.scale.set(...scale);
            model.position.set(...position);
            model.rotation.set(0, 20, 0);

            const mixer = new THREE.AnimationMixer(model);
            const action = mixer.clipAction(gltf.animations[0]);
            setAnimationAction(action);

            scene.add(model);
        });
    }, [scene]);

    useEffect(() => {
        if (modelRef.current) {
            modelRef.current.scale.set(...scale);
            modelRef.current.position.set(...position);
        }
    }, [scale, position]);

    useFrame((state, delta) => {
        if (animationAction) {
            if (isRotating) {
                animationAction.play();
            } else {
                animationAction.stop();
            }
            animationAction.getMixer().update(delta);
        }
    });

    return null;
};

Plane.propTypes = {
    isRotating: PropTypes.bool.isRequired,
    planeScale: PropTypes.arrayOf(PropTypes.number).isRequired,
    planePosition: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default Plane;