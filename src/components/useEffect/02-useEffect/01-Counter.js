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
      <p>You clicked <span className="text-danger fs-5 mx-2">{count}</span> times</p>
      <button className='btn btn-primary mx-2' onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <button className='btn btn-primary mx-2' onClick={handleAlertClick}>
        Show alert
      </button>
      <ul className='list-group mt-3 align-items-start'>
        <li className='list-group-item'>Incremento el contador a 3</li>
        <li className='list-group-item'>Presiono “Show alert”</li>
        <li className='list-group-item'>Incremento el contador a 5 antes de que el temporizador se dispare</li>
      </ul>
    </section>
  );
}

export default Counter