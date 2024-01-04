
import {useContext} from 'react'
import UserContext from '../Context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)
    
    if (!user) return <div>please Login</div>
    return <div>Welcome to the 2k24 {user.username}</div>
}

export default Profile