import React, { useRef, useCallback } from 'react';
import { Canvas } from 'react-three-fiber';
import Button from '@material-ui/core/Button';
import { softShadows } from '@react-three/drei'

import Sphere from './Elements/Sphere';
import Plane from './Elements/Plane';
import PointLights from './Elements/PointLights';
import Effects from './Effects/Effects';

import { SOFT_LIGHT_OPTIONS } from './../../Data/Constants';

import './Landing.css';

softShadows({ ...SOFT_LIGHT_OPTIONS });

const Landing = ({ index, setIndex }) => {
    const mouse = useRef([0, 0]);

    const onMouseMove = useCallback(({ clientX: x, clientY: y }) => {
        return (mouse.current = [x - window.innerWidth / 2, y - window.innerHeight / 2]);
    }, []);

    return (
        <div className='landing'>
            <div className='name'>
                <div className='first-name'>daniel</div>
                <div className='last-name'>kanyo</div>
            </div>

            <Canvas camera={{ position: [0, 0, 5.5] }} onMouseMove={onMouseMove} shadowMap>
                <ambientLight intensity={1.7} />
                <PointLights mouse={mouse} />
                <directionalLight position={[0, 2, 0]} castShadow />
                <Sphere mouse={mouse} index={index} />
                <Effects />
                <Plane rotation={[-0.5 * Math.PI, 0, 0]} position={[0, -2.7, 0]} />
            </Canvas>

            <div className='welcome-msg'>
                <div className='welcome-title'>Welcome Visitor!</div>
                <div className='welcome-text'>
                    I hope you enjoy your time here. If you have any questions please click on the button below.
                </div>
                <div className='welcome-btn'>
                    <Button variant='outlined' onClick={() => setIndex(5)}>Contact me</Button>
                </div>
            </div>
        </div>
    )
}

export default Landing;
