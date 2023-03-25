import classes from './Navbar.module.css'
import logo from '../res/images/logo.png'

import { Link } from 'react-router-dom';

function Navbar(){
    return (
        <div className={classes.Navbar}>
            <div className={classes.logoContainer}>
                <h1 className={classes.logoText}>Creativity House</h1> 
                <img className={classes.logoImg} src={logo} alt="noImage"/> 
            </div>
            <div className={classes.pagesContainer}>
                <Link to="/"><h2 className={classes.pageLink}>Home</h2></Link>
                <Link to="/PrivateEvents"> <h2 className={classes.pageLink}>Private events</h2></Link>
                <Link to="/InfoClasses"> <h2 className={classes.pageLink}>Classes</h2></Link>
                <Link to="/About"> <h2 className={classes.pageLink}>About</h2></Link>
            </div>
        </div>
    )
}

export default Navbar;