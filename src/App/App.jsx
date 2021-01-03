import React, { useState } from 'react';

import Header from './Components/Header/Header';
import { THEMES } from './Data/Constants';

const App = () => {
    const [theme, setTheme] = useState(THEMES.DARK);

    return (
        <div className='app'>
            <Header theme={theme} setTheme={setTheme} />
        </div>
    );
}

export default App;
