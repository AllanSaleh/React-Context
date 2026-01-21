import UserForm from "../components/UserForm/UserForm"
import { useAuth } from "../contexts/AuthContext"

const Register = () => {
  const { registerUser } = useAuth();

  return (
    <UserForm submitFunction={registerUser} isRegister={true} />
  )
}

export default Register