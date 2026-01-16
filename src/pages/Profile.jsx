import { useAuth } from "../contexts/AuthContext"
// InClass Practice
// Display logged in user in this page
// Get user info from the Auth Context

const Profile = () => {

  const {user} = useAuth();

  return (
    <div>
      <h1>Profile Page</h1>
      <h2>{user?.first_name || 'N/A'}</h2>
      <hr />
      <div>
        <p>Last Name: {user?.lastName  || 'N/A'}</p>
        <p>Email: {user?.email  || 'N/A'}</p>
        <p>DOB: {user?.DOB  || 'N/A'}</p>
        <p>Address: {user?.address  || 'N/A'}</p>
        <p>Id: {user?.id  || 'N/A'}</p>
      </div>
    </div>
  )
}

export default Profile