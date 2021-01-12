import React from 'react';

const Plane = ({ ...props }) => {
    return (
        <mesh {...props} receiveShadow>
            <planeBufferGeometry args={[500, 500, 1, 1]} />
            <shadowMaterial transparent opacity={.4} />
        </mesh>
    )
}

export default Plane;
