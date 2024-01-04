
import './App.css'
import Login from './Component/Login'
import Profile from './Component/Profile'
import UserContextProvider from './Context/UserContestProvider'
function App() {

  return (
   <UserContextProvider>
    <h1>this is our app component</h1>
    <Login />
    <Profile />
   </UserContextProvider>
  )
}

export default App