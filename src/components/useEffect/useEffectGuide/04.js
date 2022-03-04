import { useState, useEffect } from 'react'


function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      console.log(`You clicked ${count} times`);
    }, 3000)
  });
  
  return (
    <section className="mt-5 mb-2 pt-5 pb-4 bg-light rounded-2">
      <h4 className='mb-5'>04. Cada Render Tiene Su Propio… Todo</h4>
      <p>You clicked <span className="text-danger fs-5 mx-2">{count}</span> times</p>
      <button className='btn btn-primary mx-2' onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <p className='px-3 mt-5'>Funciona diferente a clases aunque en apariencia se vean igual, cada render loggea independientemente el efecto del "valor capturado"
      y cada cambio de estado ejecuta su propio Todo (console.log)</p>
    </section>
  );
}

export default Counter