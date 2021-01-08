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

    return (
        <div className={getClassName('app', theme)}>
            <div className='rect'></div>

            <SwipeableViews enableMouseEvents>
                <Landing theme={theme} />
                <About theme={theme} />
            </SwipeableViews>

            <FixElements theme={theme} setTheme={setTheme} />
        </div>
    );
}

export default App;
