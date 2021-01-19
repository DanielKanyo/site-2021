import React from 'react';

const Plane = ({ ...props }) => {
    return (
        <mesh {...props}>
            <planeBufferGeometry args={[10, 20, 1, 1]} />
            <meshStandardMaterial color={'black'} opacity={.2} />
        </mesh>
    )
}

export default Plane;
