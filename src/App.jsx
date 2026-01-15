import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar/Navbar";
import { useTheme } from "./contexts/ThemeContext";

function App() {

  const {isDarkMode} = useTheme();

  return (
    <div style={{height: '100vh',backgroundColor:isDarkMode ? "#1f2c38ff" : "#ecf0f1"}}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
