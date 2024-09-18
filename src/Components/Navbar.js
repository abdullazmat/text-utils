import React, { useState } from 'react';

export default function Navbar(props) {

    const [myStyle, setMyStyle] = useState(props.mode);
    
    const [btnText , setbtnText] = useState('Enable Dark Mode')

    const [btnColor , setbtnColor] = useState('dark')
   

    const navColorChange = () => {
        props.toggle
        if (myStyle === 'light'){

            setMyStyle('dark')
            setbtnText('Enable Light Mode')
            setbtnColor('primary')
        }
        else
        {
            setMyStyle('light')
            setbtnText('Enable Dark Mode')
            setbtnColor('dark')
        }

    }

    return (
        <nav className={`navbar navbar-expand-lg navbar-${myStyle} bg-${myStyle} ps-5`}>
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About Us</a>
                    </li>
                </ul>
                <form className="form-inline ms-auto pe-5">
                    <button className={`btn btn-${btnColor} my-2 my-sm-0`}  onClick={() => { navColorChange(); props.toggle(); }} 
 type="button">{btnText}</button>
                </form>
            </div>
        </nav>
    );
}
