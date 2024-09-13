


import UserProfile from './UserProfile/UserProfile';

function App() {

  const user = [
    {id:1, name: " erik", idade:"23", hobbie:"esquiar"}
  ]
  return (

<UserProfile user={user}/>

  )
}

export default App
