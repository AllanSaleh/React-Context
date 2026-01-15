import { Link, NavLink } from "react-router-dom"
import { useTheme } from "../../contexts/ThemeContext"
import "./Navbar.css"

const Navbar = () => {

  const {isDarkMode, toggleTheme} = useTheme();

  return (
    <header className={isDarkMode ? 'mainDark' : 'mainLight'}>
      <h1>My Cool App</h1>
      <nav>
        <NavLink className={isDarkMode ? 'navLinkDark' : 'navLinkLight'} to="/">HOME</NavLink>
        <NavLink className={isDarkMode ? 'navLinkDark' : 'navLinkLight'} to="/login">LOGIN</NavLink>
        <NavLink className={isDarkMode ? 'navLinkDark' : 'navLinkLight'} to="/profile">PROFILE</NavLink>
        <Link className={isDarkMode ? 'navLinkDark' : 'navLinkLight'} onClick={toggleTheme} >{isDarkMode ? "Light Mode" : "Dark Mode"}</Link>
      </nav>
    </header>
  )
}

export default Navbar