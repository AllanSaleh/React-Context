import { useTheme } from "../../contexts/ThemeContext"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../contexts/AuthContext"
import "./Home.css"

const Home = () => {
  const {isDarkMode} = useTheme();
  const {user} = useAuth();
  const navigate = useNavigate();

  return (
    <div className={isDarkMode ? 'dark-mode' : ''}>
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Your App</h1>
          <p className="hero-subtitle">Experience seamless authentication and profile management</p>
          <div className="hero-cta">
            {user ? (
              <>
                <button className="btn-primary" onClick={() => navigate('/profile')}>View Profile</button>
                <button className="btn-secondary" onClick={() => navigate('/profile/update')}>Update Profile</button>
              </>
            ) : (
              <>
                <button className="btn-primary" onClick={() => navigate('/login')}>Sign In</button>
                <button className="btn-secondary" onClick={() => navigate('/register')}>Sign Up</button>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="features">
        <h2>Key Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">👤</div>
            <h3>User Authentication</h3>
            <p>Secure login and registration system with context-based state management</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎨</div>
            <h3>Theme Switching</h3>
            <p>Seamless dark mode and light mode switching for optimal viewing</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📝</div>
            <h3>Profile Management</h3>
            <p>Create, update, and manage your user profile with ease</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Modern UI</h3>
            <p>Beautiful, responsive design that works on all devices</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Ready to Get Started?</h2>
        <p>Join us today and experience the future of user management</p>
        {!user && (
          <button className="btn-large" onClick={() => navigate('/register')}>Create Account Now</button>
        )}
      </section>
    </div>
  )
}

export default Home