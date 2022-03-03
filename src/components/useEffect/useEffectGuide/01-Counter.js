import { useState } from 'react'


const Counter1 = () => {

  const [count, setCount] = useState(0)

  return (
    <section className="mt-5 mb-2 pt-5 pb-4 bg-light rounded-2">
      <p>You clicked <span className="text-danger fs-5 mx-2">{count}</span> times</p>
      <button className='btn btn-primary mx-2' onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </section>
  )
}

export default Counter1;


// ------------------  CODE EXPLANATION  ------------------------
// Durante el primer renderizado
// function Counter() {
//   const count = 0; // Retornado por useState()
//   // ...
//   <p>You clicked {count} times</p>
//   // ...
// }

// // Después de un click, nuestra función es llamada de nuevo
// function Counter() {
//   const count = 1; // Retornado por useState()
//   // ...
//   <p>You clicked {count} times</p>
//   // ...
// }

// // Después de otro click, nuestra función se llama de nuevo
// function Counter() {
//   const count = 2; // Retornado por useState()
//   // ...
//   <p>You clicked {count} times</p>
//   // ...
// }