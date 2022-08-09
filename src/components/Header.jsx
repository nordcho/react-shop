import React, { useState, createContext} from 'react';

const Header = () => {

    const [theme, setTheme] = useState(() => {
        return 'light'
    })

    const changeTheme = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }

    const themeContext = createContext(theme)

    return (
        <header className='header'>
        <div className='shop-name'>
            <span>
                React Shop
            </span>
        </div>
        <div className='navigation'>
            <div className='night-mode-switcher-container'>
                <label className='night-mode-switcher-label'>
                    <span className='night-mode-switcher-text'>Ночная тема</span>
                </label>
                <input className='night-mode-switcher-input' id='night-mode-switcher' type="checkbox" onChange={changeTheme}/>
            </div>
            <div className='navigation-favorites'>
                <span>Избранное</span>
            </div>
            <div className='navigation-cart'>
            <span>Корзина</span>
            </div>
        </div>
    </header>
    );
};

export default Header;