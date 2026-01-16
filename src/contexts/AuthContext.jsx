import {createContext, useContext, useEffect, useState} from 'react';

//Step 1
//Create the context
const AuthContext = createContext();

//Step 2
//Create useAuth hook to consume this context
export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
}

//Step 3
export const AuthProvider = ({children}) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  //Grab already logged in user
  useEffect(()=>{
    const savedToken = localStorage.getItem('token');
    const savedUser = localStorage.getItem('user');

    setToken(savedToken);
    setUser(JSON.parse(savedUser)) //parsing JSON object from LS
  },[]);

  // Login function
  const login = async (email, password) => { //sending api request to login with email and password

    console.log('Send login request');

    const response = await fetch("https://my-cool-library-7qrj.onrender.com/users/login",{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    });
    
    console.log("Response");
    const loginData = await response.json();
    console.log('Token data:', loginData);

    setToken(loginData.token);
    setUser(loginData.user);
    localStorage.setItem("token", loginData.token);
    localStorage.setItem("user", JSON.stringify(loginData.user)); //transforming the user into json readable string
  }

  const logout = () => {
    setToken(''); //clearing saved tokens
    setUser(null)
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  const value = {
    token,
    user,
    login,
    logout,
    isAuthenticated: token ? true : false
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}