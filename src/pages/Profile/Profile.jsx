import { useAuth } from "../../contexts/AuthContext"
import { useNavigate } from "react-router-dom";
import "./Profile.css"
import { useTheme } from "../../contexts/ThemeContext";

const Profile = () => {
  const navigate = useNavigate();
  const {user, deleteUser} = useAuth();
  const {isDarkMode} = useTheme();

  const handleDelete = () => {
    deleteUser();
    navigate('/');
  }

  return (
    <div className={isDarkMode ? 'dark-mode' : ''}>
      <div className="profile-container">
        <div className="profile-header">
          <h1>Profile</h1>
          <p className="profile-name">{user?.first_name || 'N/A'} {user?.last_name || 'N/A'}</p>
        </div>

        <div className="profile-card">
          <div className="profile-info">
            <div className="info-item">
              <label>First Name</label>
              <p>{user?.first_name || 'N/A'}</p>
            </div>
            <div className="info-item">
              <label>Last Name</label>
              <p>{user?.last_name || 'N/A'}</p>
            </div>
            <div className="info-item">
              <label>Email</label>
              <p>{user?.email || 'N/A'}</p>
            </div>
            <div className="info-item">
              <label>Date of Birth</label>
              <p>{user?.DOB || 'N/A'}</p>
            </div>
            <div className="info-item">
              <label>Address</label>
              <p>{user?.address || 'N/A'}</p>
            </div>
            <div className="info-item">
              <label>User ID</label>
              <p>{user?.id || 'N/A'}</p>
            </div>
          </div>

          <div className="profile-actions">
            <button className="btn-update" onClick={() => navigate('/profile/update')}>Update Profile</button>
            <button className="btn-delete" onClick={handleDelete}>Delete Account</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile