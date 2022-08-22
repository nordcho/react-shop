import React, {useState} from 'react';

const Header = ({AppRef}) => {

    const [theme, setTheme] = useState(() => {
        return 'light'
    })

    const changeTheme = () => {
        AppRef.current.className === 'light' ? setTheme('dark') : setTheme('light')
        AppRef.current.className = theme
    }

    console.log(AppRef)
    console.log();
    const tree = (arr) => {
        arr.sort((a, b) => {return b.price - a.price} ) 
        console.log(22)
      }

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
                <input className='night-mode-switcher-input' id='night-mode-switcher' type="checkbox" onChange={changeTheme} onInput={changeTheme}/>
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