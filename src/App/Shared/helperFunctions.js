import { THEMES } from '../Data/Constants';

export const getClassName = (base, theme) => {
    return `${base} ${theme === THEMES.LIGHT ? THEMES.LIGHT : THEMES.DARK}`;
}
