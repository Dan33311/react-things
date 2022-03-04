import { useState, useEffect } from 'react'


function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <section className="mt-5 mb-2 pt-5 pb-4 bg-light rounded-2">
      <h4 className='mb-5'>03. Cada Render Tiene Sus Propios Effect</h4>
      <p>You clicked <span className="text-danger fs-5 mx-2">{count}</span> times</p>
      <button className='btn btn-primary mx-2' onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <p className='px-3 mt-5'>Recordemos que por cada cambio de un estado se realiza un render, entonces si utilizamos este estado en un efecto, este efecto se ejecuta,
      por cada vez que cambiemos el estado, (por cada render)</p>
      <p>* Tambien se ve el cambio en el titulo del documento</p>
    </section>
  );
}

export default Counter