import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../contexts/ThemeContext";
import "./UserForm.css"

const UserForm = ({ submitFunction, isRegister }) => {
  const navigate = useNavigate()
  const {isDarkMode} = useTheme();

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    DOB: '',
    email: '',
    address: '',
    password: '',
    role: ''
  });

  const handleChange = event => {
    const {name, value} = event.target;
    setFormData(prevData => ({...prevData, [name]:value}));
  }

  const handleSubmit = event => {
    event.preventDefault();
    submitFunction(formData);
    isRegister ? navigate('/login') : navigate("/profile");
  }

  return (
    <div className={isDarkMode ? 'dark-mode' : ''}>
    <h1>{isRegister ? "Sign Up" : "Update Profile"}</h1>
    <form onSubmit={handleSubmit}>
      <input type="text"
        name="first_name"
        placeholder="first_name"
        onChange={handleChange}
        value={formData.first_name} />

      <input type="text"
        name="last_name"
        placeholder="last_name"
        onChange={handleChange}
        value={formData.last_name} />

      <input type="text"
        name="email"
        placeholder="email"
        onChange={handleChange}
        value={formData.email} />

      <input type="text"
        name="DOB"
        placeholder="DOB"
        onChange={handleChange}
        value={formData.DOB} />

      <input type="text"
        name="password"
        placeholder="password"
        onChange={handleChange}
        value={formData.password} />

      <input type="text"
        name="address"
        placeholder="address"
        onChange={handleChange}
        value={formData.address} />

      <input type="text"
        name="role"
        placeholder="role"
        onChange={handleChange}
        value={formData.role} />

        <button type="submit">Submit</button>
    </form>
    </div>
  )
}

export default UserForm;