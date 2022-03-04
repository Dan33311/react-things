import { useState } from 'react'


function Counter() {
  const [count, setCount] = useState(0);

  function handleAlertClick() {
    setTimeout(() => {
      alert('You clicked on: ' + count);
    }, 3000);
  }

  return (
    <section className="mt-5 mb-2 pt-5 pb-4 bg-light rounded-2">
      <h4 className='mb-5'>02. Cada Render Tiene Sus Propios Manejadores De Eventos.</h4>
      <p>You clicked <span className="text-danger fs-5 mx-2">{count}</span> times</p>
      <button className='btn btn-primary mx-2' onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <button className='btn btn-primary mx-2' onClick={handleAlertClick}>
        Show alert
      </button>
      
      {/* step by step order */}
      <p className='mt-5'>Sigue estos pasos:</p>
      <ul className='ul-1'>
        <li>Incremento el contador a 3</li>
        <li>Presiono “Show alert”</li>
        <li>Incremento el contador a 5 antes de que el temporizador se dispare</li>
      </ul>
      <p className='px-3 mt-5'>En los manejadores de eventos en este ejemplo, el `alert`, recuerda el estado (count) que le pasamos, al momento exacto que ejecutamos el `alert`, asi sigamos cambiando el estado (count)</p>
    </section>
  );
}

export default Counter