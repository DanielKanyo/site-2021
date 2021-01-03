import React, { useRef, useState, useCallback } from 'react';
import { Canvas } from 'react-three-fiber';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import { THEMES } from '../../Data/Constants';
import Navigation from './Elements/Navigation/Navigation';
import Social from './Elements/Social/Social';
import Sphere from './Elements/Sphere';
import PointLights from './Elements/PointLights';
import Theme from './Elements/Theme/Theme';
import Effects from './Effects/Effects';

import './Header.css';

const Header = ({ theme, setTheme }) => {
    const [down, setMouseDown] = useState(false);

    const mouse = useRef([0, 0]);

    const onMouseMove = useCallback(({ clientX: x, clientY: y }) => {
        return (mouse.current = [x - window.innerWidth / 2, y - window.innerHeight / 2]);
    }, []);

    return (
        <div className={`header ${theme === THEMES.LIGHT ? THEMES.LIGHT : THEMES.DARK}`}>
            <Navigation theme={theme} />
            <div className='name'>
                <div className='first-name'>daniel</div>
                <div className='last-name'>kanyo</div>
            </div>
            <Social theme={theme} />
            <div className='small-bio'>
                <div>Fullstack Web Developer <br />
                    <span>from Hungary</span>
                </div>
            </div>
            <Canvas
                camera={{ position: [0, 0, 5] }}
                onMouseMove={onMouseMove}
                onMouseUp={() => setMouseDown(false)}
                onMouseDown={() => setMouseDown(true)}
            >
                <ambientLight intensity={theme === THEMES.LIGHT ? 5.7 : 1.7} />
                <PointLights theme={theme} />
                <Sphere mouse={mouse} down={down} />
                <Effects down={down} />
            </Canvas>
            <div className='scroll-indicator-container'>
                <ArrowDownwardIcon className='scroll-indicator-icon' />
            </div>
            <Theme theme={theme} setTheme={setTheme} />
            <div className='navigator'>
                <div className='arrow arrow-back'>
                    <ArrowBackIcon />
                </div>
                <div className='arrow arrow-back'>
                    <ArrowForwardIcon />
                </div>
            </div>
        </div>
    )
}

export default Header;
