// https://www.youtube.com/watch?v=mnKHJDkpZos
// React context allows us to share data (state) across our components more easily.
// context have provider and consumer

import UserContext from './UserContext'
import User from './User'


const AppContext = () => {
  const userData = {
    name: 'Dan',
    suscribe: false
  }
  
  return (
    <>
      <h1 style={{color: 'white'}}>Context</h1>
      {/* <UserContext.Provider value='Reed'> */}
      <UserContext.Provider value={userData}>
        <User/>
      </UserContext.Provider>
    </>
  )
}


export default AppContext
