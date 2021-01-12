import React, { useRef, useCallback } from 'react';
import { Canvas } from 'react-three-fiber';
import Button from '@material-ui/core/Button';

import Sphere from './Elements/Sphere';
import PointLights from './Elements/PointLights';
import Effects from './Effects/Effects';

import './Landing.css';

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

            <Canvas camera={{ position: [0, 0, 5.5] }} onMouseMove={onMouseMove}>
                <ambientLight intensity={1.7} />
                <PointLights mouse={mouse} />
                <Sphere mouse={mouse} index={index} />
                <Effects />
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
