// import { Link } from "react-router-dom"; // Can use where we wants to just redirect or navigate to any page without active class needed
import { NavLink } from "react-router-dom"; // This helps in setting active class for the links
import classes from './NavHeader.module.css'

const NavHeader = () => {
    return <header className={classes.header}>
        <nav>
            <ul>
                <li>
                    <NavLink to="/welcome" activeClassName={classes.active} >Welcome</NavLink>
                </li>
                <li>
                    <NavLink to="/products" activeClassName={classes.active} >Products</NavLink>
                </li>
            </ul>
        </nav>
    </header>
}
export default NavHeader;