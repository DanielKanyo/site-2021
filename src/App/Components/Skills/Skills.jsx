import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import Button from '@material-ui/core/Button';
import ViewCompactIcon from '@material-ui/icons/ViewCompact';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import ViewColumnIcon from '@material-ui/icons/ViewColumn';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import { SKILLS, SKILL_CATEGORIES } from '../../Data/Constants';

import './Skills.css';

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(.5),
        height: 120,
        width: 120,
        color: 'white',
        opacity: 0.7
    },
    buttonActive: {
        margin: theme.spacing(.5),
        height: 120,
        width: 120,
        color: 'white',
        backgroundColor: '#189e83',
        opacity: 1,
        '&:hover': {
            backgroundColor: '#0bbd99'
        }
    }
}));

const styles = {
    slide: {
        padding: 15,
        height: 'calc(100% - 30px)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    sw: {
        width: '100%'
    }
};

const Skills = () => {
    const classes = useStyles();
    const [index, setIndex] = useState(1);

    const getSkillCategoryIcon = (category) => {
        switch (category) {
            case SKILL_CATEGORIES.BACKEND:
                return <ViewModuleIcon fontSize='large' />;
            case SKILL_CATEGORIES.FRONTEND:
                return <ViewCompactIcon fontSize='large' />;
            case SKILL_CATEGORIES.OTHER:
                return <ViewColumnIcon fontSize='large' />;
            default:
                console.warn(`Unsupported skill category: ${category}`);
                break;
        }
    };

    const indexChanged = i => {
        setIndex(i);
    };

    const prevBtnClicked = () => {
        if (index > 0) {
            setIndex(index - 1);
        }
    };

    const nextBtnClicked = () => {
        if (index < 2) {
            setIndex(index + 1);
        }
    };

    return (
        <div className='skills'>
            <div className='content'>
                <div className='buttons'>
                    {
                        SKILLS.map((skill, i) => {
                            return (
                                <Button
                                    key={i}
                                    variant={index === i ? 'contained' : 'text'}
                                    className={index === i ? classes.buttonActive : classes.button}
                                    onClick={() => indexChanged(i)}
                                >
                                    <div>
                                        {getSkillCategoryIcon(skill.category)}
                                        <div className='btn-text'>{skill.category}</div>
                                    </div>
                                </Button>
                            )
                        })
                    }
                </div>
                <div className='button-and-sw-container'>
                    <div className='button' onClick={() => prevBtnClicked()} disabled={index === 0}>
                        <ChevronLeftIcon />
                    </div>
                    <SwipeableViews index={index} onChangeIndex={indexChanged} style={Object.assign({}, styles.sw)}>
                        {
                            SKILLS.map((skill, i) => {
                                return (
                                    <div key={i} style={Object.assign({}, styles.slide)}>
                                        <div className='skill-items'>
                                            {
                                                skill.items.map((item, y) => {
                                                    return (
                                                        <div key={y} className='skill-item'>{item}</div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </SwipeableViews>
                    <div className='button' onClick={() => nextBtnClicked()} disabled={index === 2}>
                        <ChevronRightIcon />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;
