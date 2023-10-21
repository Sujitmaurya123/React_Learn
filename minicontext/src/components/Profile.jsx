import React,{useContext} from 'react'
import UserContext from '../context/UserContext.js'

const Profile = () => {
const {user}=useContext(UserContext)

  if(!user)return <div>please login</div>
  return <div>
    <div> Welcome {user.username} </div>
    <div>Password {user.password}</div>
    </div>
}

export default Profile