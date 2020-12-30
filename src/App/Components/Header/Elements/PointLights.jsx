import React, { useRef } from 'react';
import { useFrame } from 'react-three-fiber';

export default function Circle() {
    const mesh = useRef();

    useFrame(() => {
        const v = 0.005;

        if (mesh.current) {
            mesh.current.rotation.y += Math.sin(v / 2) * Math.cos(v / 2) * 1.5;
            mesh.current.rotation.x -= Math.sin(v / 2) * Math.cos(v / 2) * 1.5;
            mesh.current.rotation.x = mesh.current.rotation.y += 0.001;
        }
    });

    return (
        <mesh ref={mesh}>
            <pointLight position={[2, 2, 10]} intensity={.4} />
            <pointLight position={[-10, -10, 1]} intensity={1.6} color={'#15d4ed'} />
            <pointLight position={[10, 10, 1]} intensity={1.6} color={'#ff00c3'} />
        </mesh>
    )
}