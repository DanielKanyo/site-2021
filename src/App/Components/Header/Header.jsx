import React, { useRef, useState, useCallback } from 'react';
import { Canvas } from 'react-three-fiber';

import Navigation from '../Navigation/Navigation';
import Social from '../Social/Social';
import Sphere from './Elements/Sphere';
import PointLights from './Elements/PointLights';
import Effects from './Effects/Effects';

import './Header.css';

const Header = () => {
    const [down, set] = useState(false);

    const mouse = useRef([0, 0]);

    const onMouseMove = useCallback(({ clientX: x, clientY: y }) => {
        return (mouse.current = [x - window.innerWidth / 2, y - window.innerHeight / 2]);
    }, []);

    return (
        <div className='header'>
            <Navigation />
            <div className='name'>
                <div className='first-name'>daniel</div>
                <div className='last-name'>kanyo</div>
            </div>
            <Social />
            <Canvas
                camera={{ position: [0, 0, 5] }}
                onMouseMove={onMouseMove}
                onMouseUp={() => set(false)}
                onMouseDown={() => set(true)}
            >
                <ambientLight intensity={1.7}/>
                <PointLights mouse={mouse} />
                <Sphere mouse={mouse} down={down} />
                <Effects down={down} />
            </Canvas>
        </div>
    )
}

export default Header;
