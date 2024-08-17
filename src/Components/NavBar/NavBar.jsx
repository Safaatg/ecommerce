import { Link } from "react-router-dom";
import Logo from '../../assets/icons/logo.svg';
import Cart from '../../assets/icons/icon-cart.svg';
import Menu from '../../assets/icons/icon-menu.svg';
import Avatar from '../../assets/images/image-avatar.png';
import './NavBar.css';

function NavBar() {
    
    return (
        <div className="container">
            <div id="NavBar">
                <div id="Links">
                   <div id='LogoMenu'>
                   <input type="checkbox"  id="check" />
                    <label htmlFor="check" className='checkBtn'>
                        <img src={Menu} />
                    </label>
                    <li><Link to="/"><img src={Logo} alt="Logo" /></Link></li>
                    
                   </div>
                    <nav>
                        <ul>
                            <li className="active"><Link to="/Collections">Collections</Link></li>
                            <li><Link to="/Men">Men</Link></li>
                            <li><Link to="/Women">Women</Link></li>
                            <li><Link to="/About">About</Link> </li>
                            <li><Link to="/Contact">Contact</Link></li>
                        </ul>
                    </nav>
                </div>

                <div id='cartAvater'>
                    <img src={Cart} alt="Cart" />
                    <img className="avatar" src={Avatar} alt="Avatar" />
                </div>

                
            </div>
        </div>
    );
}

export default NavBar;