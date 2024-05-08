import React from 'react'

const Footer = () => {

    const year = new Date().getFullYear();

    return (
        <>
            <footer>
                <p>Copywrite © {year} by Codewitharsh</p>
            </footer>
        </>
    )
}

export default Footer;
