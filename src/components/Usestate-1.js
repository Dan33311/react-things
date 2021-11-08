import { useState } from "react";


const Counter = () => {

  const [count, setCount] = useState(0)
  const [clicked, setClicked] = useState(0)

  const increment = () => {
    setCount( count + 1 )
  }

  const decrement = () => {
    setCount( count - 1 )
  }

  const clickedButton = () => {
    setClicked( clicked + 1 )
  }

  return ( 
    <>
      <section className="mt-5 mb-2 pt-5 pb-4 bg-light border">
        <h3 className="text-primary">Using the State Hook</h3>
        <div className="d-flex justify-content-center align-items-center mt-4">
          <button className="btn btn-secondary me-2" style={{width: '100px'}} onClick={decrement}>-</button>
          <span className="fs-5 mx-5">{count}</span>
          <button className='btn btn-primary ms-2' style={{width: '100px'}} onClick={increment}>+</button>
        </div>
      </section>
      <section className="mt-5 mb-2 pt-5 pb-4 bg-light border">
        <h3 className="text-primary">Using the State Hook 2</h3>
        <div className="d-flex justify-content-center align-items-center mt-4">
          <p className="mt-2">You has clicked the button<span className="text-danger fs-5 mx-2">{clicked}</span>times</p>
          <button className='btn btn-danger ms-4' onClick={clickedButton}>click me</button>
        </div>
      </section>
    </>
  );
}

export default Counter;