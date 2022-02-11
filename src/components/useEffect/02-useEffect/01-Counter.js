import { useState } from 'react'


// TODO: styles and show in the app
const Counter = () => {

  const [count, setCount] = useState(0)

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  )
}

export default Counter;


// ------------------  CODE EXPLANATION  ------------------------
// Durante el primer renderizado
function Counter() {
  const count = 0; // Retornado por useState()
  // ...
  <p>You clicked {count} times</p>
  // ...
}

// Después de un click, nuestra función es llamada de nuevo
function Counter() {
  const count = 1; // Retornado por useState()
  // ...
  <p>You clicked {count} times</p>
  // ...
}

// Después de otro click, nuestra función se llama de nuevo
function Counter() {
  const count = 2; // Retornado por useState()
  // ...
  <p>You clicked {count} times</p>
  // ...
}