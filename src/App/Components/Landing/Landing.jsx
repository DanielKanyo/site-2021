import React, { useRef, useCallback } from 'react';
import { Canvas } from 'react-three-fiber';

import { THEMES } from '../../Data/Constants';
import Sphere from './Elements/Sphere';
import PointLights from './Elements/PointLights';
import Effects from './Effects/Effects';

import './Landing.css';

const Landing = ({ theme }) => {
    const mouse = useRef([0, 0]);

    const onMouseMove = useCallback(({ clientX: x, clientY: y }) => {
        return (mouse.current = [x - window.innerWidth / 2, y - window.innerHeight / 2]);
    }, []);

    return (
        <div className={`landing ${theme === THEMES.LIGHT ? THEMES.LIGHT : THEMES.DARK}`}>
            <div className='name'>
                <div className='first-name'>daniel</div>
                <div className='last-name'>kanyo</div>
            </div>
            <Canvas
                camera={{ position: [0, 0, 5] }}
                onMouseMove={onMouseMove}
            >
                <ambientLight intensity={theme === THEMES.LIGHT ? 5.7 : 1.7} />
                <PointLights theme={theme} />
                <Sphere mouse={mouse} />
                <Effects />
            </Canvas>
        </div>
    )
}

export default Landing;
