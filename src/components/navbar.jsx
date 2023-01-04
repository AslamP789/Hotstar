import '../styles/navbar.css'
import { Link } from 'react-router-dom';
const Navbar = () => {
    return ( 
        <div className="navbar">

            <div className="logo">
                 {/* <img height={50} width={145} src="https://www.freepnglogos.com/uploads/hotstar-logo-png/hotstar-logo-0.jpg" alt="" /> */}
                {/* <h1>LOGO</h1> */}
                <img src="images/logo.svg" alt="" />
            </div>
            <div className="nav_links">
                <ul>
                    <li> <Link to="/">Home </Link> </li>
                    <li> <Link to="/movies">Favourites</Link> </li>
                    <li> <Link to="/addFvrt">Add To Favourites</Link> </li>
                    <li> <Link to="">Logout</Link> </li>
                    
                </ul>
            </div>

        </div>
     );
}
 
export default Navbar;