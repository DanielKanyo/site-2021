import React, { useRef } from 'react';
import { useFrame, useThree } from 'react-three-fiber';
import lerp from 'lerp';

export default function Sphere(props) {
    const mesh = useRef();
    const { size, viewport } = useThree();
    const { mouse } = props;
    const aspect = size.width / viewport.width;

    useFrame(() => {
        if (mesh.current) {
            mesh.current.position.x = lerp(mesh.current.position.x, mouse.current[0] / aspect / 8, 0.1);
            mesh.current.position.y = lerp(mesh.current.position.y, -mouse.current[1] / aspect / 8, 0.1);
        }
    });

    return (
        <mesh ref={mesh}>
            <sphereGeometry args={[2, 48, 48]} />
            <meshStandardMaterial color={'#4f4f4f'} />
        </mesh>
    )
}