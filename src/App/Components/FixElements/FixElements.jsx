import React from 'react';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import Navigation from './Navigation/Navigation';
import Social from './Social/Social';

import './FixElements.css';
import { NAVIGATION_ITEMS } from '../../Data/Constants';

const FixElements = ({ index, setIndex }) => {

    const isActive = (num, i) => {
        return num === i ? 'active' : null;
    };

    const prevBtnClicked = () => {
        if (index > 0) {
            setIndex(index - 1);
        }
    };

    const nextBtnClicked = () => {
        if (index < NAVIGATION_ITEMS.length - 1) {
            setIndex(index + 1);
        }
    };

    return (
        <div className='fix-elements'>
            <Navigation index={index} setIndex={setIndex} />
            <Social />

            <div className='small-bio'>
                <div>Fullstack Web Developer <br />
                    <span>from Hungary</span>
                </div>
            </div>

            <div className='page-number'>
                <div className='number'>
                    <div className='button' onClick={() => prevBtnClicked()} disabled={index === 0}>
                        <ChevronLeftIcon />
                    </div>
                    0{index + 1}
                    <span>/{NAVIGATION_ITEMS.length}</span>
                    <div className='button' onClick={() => nextBtnClicked()} disabled={index === NAVIGATION_ITEMS.length - 1}>
                        <ChevronRightIcon />
                    </div>
                </div>
            </div>

            <div className='navigation-indicators'>
                {
                    NAVIGATION_ITEMS.map((item, i) => {
                        return (
                            <div key={i} className='indicator-container' onClick={() => setIndex(i)}>
                                <div className={isActive(i, index)}></div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    )
}

export default FixElements;
