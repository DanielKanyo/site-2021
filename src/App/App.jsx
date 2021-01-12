import React, { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { bindKeyboard } from 'react-swipeable-views-utils';

import Landing from './Components/Landing/Landing';
import About from './Components/About/About';
import FixElements from './Components/FixElements/FixElements';
import Skills from './Components/Skills/Skills';

import './App.css';

const BindKeyboardSwipeableViews = bindKeyboard(SwipeableViews);

const App = () => {
    const [index, setIndex] = useState(0);

    const indexChanged = i => {
        setIndex(i);
    };

    return (
        <div className='app'>
            <div className='rect'></div>
            <FixElements index={index} setIndex={setIndex} />

            <BindKeyboardSwipeableViews
                enableMouseEvents
                index={index}
                onChangeIndex={indexChanged}
            >
                <Landing index={index} setIndex={setIndex} />
                <About />
                <Skills />
                <div></div>
                <div></div>
                <div></div>
            </BindKeyboardSwipeableViews>
        </div>
    );
}

export default App;
