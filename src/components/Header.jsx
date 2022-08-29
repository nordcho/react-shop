import React, {useState} from 'react';
import Modal from './Modal';
import Credentials from './Credentials';

const Header = ({AppRef, isAuth, setAuth}) => {

    const [theme, setTheme] = useState(() => {
        return 'light'
    })

    const changeTheme = () => {
        AppRef.current.className === 'light' ? setTheme('dark') : setTheme('light')
        AppRef.current.className = theme
    }

    const [modalActive, setModalActive] = useState(() => {
        return 'false'
    })

    const logIn = () => {
        if (Credentials.user === login && Credentials.password === password)  {
            setAuth(true);
            Credentials.authToken = 'qwerty';
            let expires = Date.now() + 100000000
            document.cookie = 'react-shop=qwerty; ' + expires
        }
        else {
            setError('Неверный логин или пароль');
            setTimeout(() => {
                setError('')
            }, 2000)
        }
    }

    const [login, setLogin] = useState(() => {
        return ''
    })

    const [password, setPassword] = useState(() => {
        return ''
    })

    const [errorLogin, setError] = useState(() => {
        return ''
    }) 

    console.log(Credentials)

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
            <div className='navigation-login'>
            {isAuth === false ? <span
                onClick={() => {setModalActive('true')}}
            >Войти</span> : <span
                onClick={() => {setModalActive('true')}}
            >Привет, {login}</span> }
            </div>
        </div>
        <Modal active={modalActive} setActive={setModalActive}>
            <div className='modal-login-wrapper'>
                {isAuth === false ? <>
                <h2>Вход</h2>
                <span style={{'color': 'red'}}>{errorLogin}</span>
                <b>Логин</b>
                <input type="text" placeholder="Введите Логин" name="email"
                    onChange={(e) => {setLogin(e.target.value)}}
                />
                <b>Пароль</b>
                <input type="password" placeholder="Введите Пароль" name="password" 
                    onChange={(e) => {setPassword(e.target.value)}}
                />
                <button className="modal-login-button"
                    onClick={logIn}
                >Войти</button> </> 
                : <>
                <div>Вы успешно вошли</div> 
                <button className="modal-login-button"
                    onClick={() => {setModalActive('false')}}
                >Закрыть окно</button>
                <button className="modal-login-button"
                    onClick={() => {setAuth(false)}}
                >Выйти</button>
                </>
                }
            </div>
        </Modal>
    </header>
    );
};

export default Header;



