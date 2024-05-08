import React from 'react'
import logo from './images/logo.jpg'
const Header = () => {
    return (
        <>
            <div className="header">
                <img src={logo} alt="logo" srcset="" width={70} height={50} />
                <h1>KeepIt</h1>
            </div>
        </>
    )
}

export default Header
