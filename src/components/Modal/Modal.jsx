import React from 'react';


const Modal = ({active, setActive, children}) => {

    return ( 
        <>
        <div className={active  ? 'modal-window active' : 'modal-window'} onClick={() => {setActive(false)}}>
            <div className={active ? 'modal-content active' : 'modal-content'} onClick={(e) => {return e.stopPropagation()}}>
                {children}
            </div>
        </div> 
        </>
    );
};

export default Modal;