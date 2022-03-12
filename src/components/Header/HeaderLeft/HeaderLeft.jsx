import './HeaderLeft.css'
import logo from './logo.png'

export const HeaderLeft = () => {
    return (
       <div className="header-left-container">
            <div className="logo-container">
                <a href="/"><img src={logo} alt="Logo" className="logo" /></a>
            </div>   
        </div> 
    )
}