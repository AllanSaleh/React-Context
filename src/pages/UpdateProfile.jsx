import React from 'react'
import UserForm from '../components/UserForm/UserForm'
import { useAuth } from '../contexts/AuthContext'

const UpdateProfile = () => {

  const {updateUser} = useAuth();

  return (
    <UserForm submitFunction={updateUser} isRegister={false}/>
  )
}

export default UpdateProfile