import React, { useRef } from 'react';
import { useFrame, useThree } from 'react-three-fiber';

import { THEMES } from '../../../Data/Constants';

export default function PointLights({ theme, mouse }) {
    const mesh = useRef();
    const { size, viewport } = useThree();
    const aspect = size.width / viewport.width;

    useFrame(() => {
        if (mesh.current) {
            mesh.current.rotation.y = mouse.current[0] / aspect / 8;
            mesh.current.rotation.x = mouse.current[1] / aspect / 8;
        }
    });

    const intensity = theme === THEMES.LIGHT ? 7.7 : 2.4;

    return (
        <mesh ref={mesh}>
            <pointLight position={[2, 2, 10]} intensity={.4} />
            <pointLight position={[0, 0, 3]} intensity={intensity} color={'#00ffcc'} />
            <pointLight position={[0, 0, -3]} intensity={intensity} color={'#525252'} />
        </mesh>
    )
}