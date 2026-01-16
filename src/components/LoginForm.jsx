import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const LoginForm = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {login} = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async(event) => {
    console.log(`PASSING ${email} AND ${password} to login`);
    event.preventDefault();
    await login(email, password);
    navigate('/');
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <input type="email"
        placeholder='Enter email'
        onChange={event => setEmail(event.target.value)}
        value={email} />
      <input type="password"
        placeholder='Enter password'
        onChange={event => setPassword(event.target.value)}
        value={password} />
      <button type="submit">Login</button>
    </form>
    <p>Don't have an account? <Link to='/register'>Sign up here!</Link></p>
    </>
  )
}

export default LoginForm