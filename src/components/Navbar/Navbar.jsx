import { useNavigate, NavLink } from "react-router-dom"
import { useTheme } from "../../contexts/ThemeContext"
import { useAuth } from "../../contexts/AuthContext"
import ThemeSwitch from "../ThemeSwitch"
import "./Navbar.css"

const Navbar = () => {

  const {isDarkMode, toggleTheme} = useTheme();
  const {isAuthenticated, logout} = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login')
  }

  return (
    <header className={isDarkMode ? 'mainDark' : 'mainLight'}>
      <h1 onClick={() => navigate('/')}>My Cool App</h1>
      <nav>
        <NavLink className={isDarkMode ? 'navLinkDark' : 'navLinkLight'} to="/">HOME</NavLink>
        {isAuthenticated ? 
        <>
          <NavLink className={isDarkMode ? 'navLinkDark' : 'navLinkLight'} to="/profile">PROFILE</NavLink>
          <p onClick={handleLogout}>LOGOUT</p>
        </> : <>
        <NavLink className={isDarkMode ? 'navLinkDark' : 'navLinkLight'} to="/login">LOGIN</NavLink>
        <NavLink className={isDarkMode ? 'navLinkDark' : 'navLinkLight'} to="/register">REGISTER</NavLink>
        </>
        }
        <ThemeSwitch onClick={toggleTheme} />
      </nav>
    </header>
  )
}

export default Navbar