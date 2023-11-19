import '../styles/home.css'
import Navbar from '../components/navbar.jsx'
import { Link } from 'react-router-dom';


const Home = () =>  {

    return (
       
        <div className="home">
            <Navbar/>
            <div className="home-welcome-image">
                <h2 className='home-welcome-text-h2'>HELLO!</h2>
                <h3 className='home-welcome-text-h3'>Start To Shopping.</h3>
                <Link to="/product" className='home-welcome-button'>SHOP NOW</Link>
            </div>
        </div>
    )
}

export default Home;