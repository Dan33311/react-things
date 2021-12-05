const getUser = async () => {

  // getting a random number between 1 to 10 in order to get a (random) user from the API
  const userId = Math.floor(Math.random()*10)+1
  // console.log(userId);

  const url = "https://jsonplaceholder.typicode.com/users/"+userId
  const res = await fetch(url)
  const user = await res.json()


  return (  
    user
  );
}

export default getUser;