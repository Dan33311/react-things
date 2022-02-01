import useUser from "./hooks/useUser"


const User = () => {
  // const user = useUser()
  const { name, suscribe } = useUser()
  // console.log(user);

  return (
    <> 
      <h1 style={{color: 'red'}}>User Info</h1>
      {/* <p style={{color: 'red'}}>{user}</p> */}
      <p style={{color: 'white'}}>Name: {name}</p>
      <p style={{color: 'white'}}>suscribe: {suscribe === true ? 'Yes' : 'No'}</p>
    </>
  );
}

export default User;