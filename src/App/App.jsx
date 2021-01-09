import React, { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';

import Landing from './Components/Landing/Landing';
import About from './Components/About/About';
import FixElements from './Components/FixElements/FixElements';
import { THEMES } from './Data/Constants';
import { getClassName } from './Shared/helperFunctions';

import './App.css';

const App = () => {
    const [theme, setTheme] = useState(THEMES.DARK);
    const [index, setIndex] = useState(0);

    const indexChanged = i => {
        setIndex(i);
    };

    return (
        <div className={getClassName('app', theme)}>
            <div className='rect'></div>
            <FixElements
                theme={theme}
                setTheme={setTheme}
                index={index}
                setIndex={setIndex}
            />

            <SwipeableViews enableMouseEvents index={index} onChangeIndex={indexChanged}>
                <Landing theme={theme} />
                <About theme={theme} />
            </SwipeableViews>
        </div>
    );
}

export default App;
