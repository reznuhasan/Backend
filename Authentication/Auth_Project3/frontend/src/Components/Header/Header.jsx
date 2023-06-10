import { NavLink } from "react-router-dom";
import './Header.css'
const classNameFunc=({isActive})=>(isActive)?"active_link":"";
const Header=()=>{
    return(
        <div className="nav">
            <NavLink to="/"
            className={classNameFunc}
            end>Home</NavLink>
            <NavLink to="/register"
            className={classNameFunc}
            >Register</NavLink>
            <NavLink to="/login"
            className={classNameFunc}
            >Login</NavLink>
        </div>
    )
}

export default Header;