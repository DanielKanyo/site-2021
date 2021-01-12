import React, { useRef } from 'react';
import { useFrame, useThree } from 'react-three-fiber';

export default function PointLights({ mouse }) {
    const mesh = useRef();
    const { size, viewport } = useThree();

    useFrame(() => {
        if (mesh.current) {
            const aspect = size.width / viewport.width;
            
            mesh.current.rotation.y = mouse.current[0] / aspect / 8;
            mesh.current.rotation.x = mouse.current[1] / aspect / 8;
        }
    });

    return (
        <mesh ref={mesh}>
            <pointLight position={[2, 2, 10]} intensity={0.4} />
            <pointLight position={[0, 0, 3.2]} intensity={4.4} color={'#00ffcc'} />
            <pointLight position={[0, 0, -3]} intensity={2.4} color={'#525252'} />
        </mesh>
    )
}