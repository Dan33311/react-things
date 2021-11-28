import { useEffect, useState } from "react"
import getUser from "../../helpers/getUser"

const initialUser = {
  name: "Dan",
  email: "email@email.com"
}


const FetchCard = () => {

  const [user, setUser] = useState(initialUser)

  const updateUser = () => {
    getUser()
      .then((newUser) => {   // user from getUser()
        setUser(newUser)
      })
  }

  useEffect(() => {
    updateUser()
  }, [])

  return ( 
    <section className="mt-5 mb-2 pt-5 pb-4 bg-light rounded-2">
      <h3 className="text-primary">{user.name}</h3>
      <h3 className="text-primary">{user.email}</h3>
    </section>
  )
}

export default FetchCard;