import '../styles/navbar.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
    return (
        <div className="header">
            <nav className='header-nav'>
                    <Link className='header-logo' to="/">CLOTHES STORY</Link>
                <ul className='header-ul'>
                    <li className='header-li'><Link className='header-link' to="/">Home</Link></li>
                    <li className='header-li'><Link className='header-link' to="/product">Products</Link></li>
                    <li className='header-li'><Link className='header-link' to="/basket">
                        <FontAwesomeIcon icon={faCartShopping} bounce size="lg" style={{color: "#EEEEEE",}} />
                        </Link></li>
                </ul>
            </nav>      
      </div>
    )
}
export default Navbar;