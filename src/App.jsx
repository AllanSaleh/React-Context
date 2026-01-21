import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile/Profile";
import Navbar from "./components/Navbar/Navbar";
import Register from "./pages/Register";
import UpdateProfile from "./pages/UpdateProfile";
import { useTheme } from "./contexts/ThemeContext";

function App() {

  const {isDarkMode} = useTheme();

  return (
    <div style={{height: '100vh',backgroundColor:isDarkMode ? "#1f2c38ff" : "#cbcfd0ff"}}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile/update" element={<UpdateProfile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
