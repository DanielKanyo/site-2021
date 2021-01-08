import React, { useRef } from 'react';
import { useFrame } from 'react-three-fiber';

import { THEMES } from '../../../Data/Constants';

export default function PointLights({ theme }) {
    const mesh = useRef();

    useFrame(() => {
        const v = 0.005;

        if (mesh.current) {
            mesh.current.rotation.y += Math.sin(v / 2) * Math.cos(v / 2) * 1.5;
            mesh.current.rotation.x -= Math.sin(v / 2) * Math.cos(v / 2) * 1.5;
            mesh.current.rotation.x = mesh.current.rotation.y += 0.001;
        }
    });

    const intensity = theme === THEMES.LIGHT ? 7.7 : 1.4;

    return (
        <mesh ref={mesh}>
            <pointLight position={[2, 2, 10]} intensity={.4} />
            <pointLight position={[-10, -10, 1]} intensity={intensity} color={'#15d4ed'} />
            <pointLight position={[10, 10, 1]} intensity={intensity} color={'#23cfa4'} />
        </mesh>
    )
}