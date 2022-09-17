import React, {useState} from 'react';
import Modal from '../Modal/Modal';
import Credentials from '../Credentials';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { useMemo } from 'react';
import { CartContext } from '../../App';
import { useContext } from 'react';

const Header = ({AppRef, isAuth, setAuth, login, setLogin, cart}) => {

    const [cartNumber, setCartNumber] = useState(0)

    let cartProducts = useContext(CartContext)
    
    useEffect(() => {
        let itterable = cartProducts.cart
        let result = 0
        for(let i in itterable) {
            if(itterable[i] > 0) {
                result = result + 1
            }
            else {
                result = result - 1
            }
        }
        setCartNumber(result)
    }, [cart])

    const [theme, setTheme] = useState(() => {
        return 'light'
    })

    const changeTheme = () => {
        AppRef.current.className === 'light' ? setTheme('dark') : setTheme('light')
        AppRef.current.className = theme
    }

    const [modalActive, setModalActive] = useState(() => {
        return false
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

    const logOut = () => {
        if (document.cookie.split('; ').find(cookie => cookie.startsWith('react-shop')))  {
            document.cookie = 'react-shop=qwerty; ' + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
            setAuth(false);
        }
        else {
            setAuth(false);
        }
    }

    const [password, setPassword] = useState(() => {
        return ''
    })

    const [errorLogin, setError] = useState(() => {
        return ''
    })

    const modalRoot = document.querySelector('#modalRoot');

    // const el = useMemo(() => {
    //     return document.createElement('div');
    // }, [])

    // useEffect(() => {
    //     const modalRoot = document.querySelector('#modalRoot');
    //     if(modalActive) {
    //         modalRoot.appendChild(el);
    //     }

    //     else {
    //         try {
    //             modalRoot.removeChild(el)
    //         }

    //         catch(e) {
    //             console.log(e)
    //         }
    //     }
    // }, [modalActive])

    return (
        <header className='header'>
        <div className='shop-name'>
            <span>
                React Shop {cartNumber}
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
            {}
            </div>
            <div className='navigation-login'>
            {isAuth === false ? <span
                onClick={() => {setModalActive(true)}}
            >Войти</span> : <span
                onClick={() => {setModalActive(true)}}
            >Привет, {login}</span> }
            </div>
        </div>
        {createPortal(
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
                    onClick={() => {setModalActive(false)}}
                >Закрыть окно</button>
                <button className="modal-login-button"
                    onClick={() => {logOut(); }}
                >Выйти</button>
                </>
                }
            </div>
        </Modal>, modalRoot
        )}
        {/* <Modal active={modalActive} setActive={setModalActive}>
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
        </Modal> */}
    </header>
    );
};

export default Header;



