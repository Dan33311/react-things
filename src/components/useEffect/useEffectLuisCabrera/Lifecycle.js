import { useState, useEffect } from 'react'


console.log('Pre-render');

const Lifecicle = () => {

  console.log('Logic render');

  const [counter1, setCounter1] = useState(0)
  const [counter2, setCounter2] = useState(0)

  useEffect(() => {
    // run each time when the state change
    console.log('useEffect without dependencies');

    return () => {
      console.log('cleanup useEffect without dependencies');
    }
  })

  useEffect(() => {
    // run only once when the state change for first time
    console.log('useEffect with [] like dependencies');

    return () => {
      console.log('cleanup useEffect []');
    }
  }, [])

  useEffect(() => {
    // run only when the state 'counter1' change
    console.log('useEffect [counter1]');

    return () => {
      console.log('cleanup useEffect counter1');
    }
  }, [counter1])

  useEffect(() => {
    // run only when the state 'counter2' change
    console.log('useEffect [counter2]');

    return () => {
      console.log('cleanup useEffect conter2');
    }
  }, [counter2])

  useEffect(() => {
    // run only when the states 'counter1' and 'counter2' change
    console.log('useEffect [counter1, counter2]');

    return () => {
      console.log('cleanup useEffect counter1, counter2');
    }
  }, [counter1, counter2])


  return (  
    <>
      {console.log('return render')}
      <section className="mt-5 mb-2 pt-5 pb-4 bg-light rounded-2">
        <h3 className="text-primary">Lifecycle</h3>
        <div className="d-flex justify-content-center align-items-center mt-4">
          <button className='btn btn-primary me-4' onClick={() => {setCounter1(counter1 + 1)}}>click me</button>
          <p className="mt-2">You has clicked the button one<span className="text-primary fs-5 mx-2">{counter1}</span>times</p>
        </div>
        <div className="d-flex justify-content-center align-items-center mt-4">
          <button className='btn btn-primary me-4' onClick={() => {setCounter2(counter2 + 1)}}>click me</button>
          <p className="mt-2">You has clicked the button two<span className="text-primary fs-5 mx-2">{counter2}</span>times</p>
        </div>
      </section>
    </>
  );
}

export default Lifecicle;