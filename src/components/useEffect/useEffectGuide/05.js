import { useState, useEffect, useRef } from 'react'

function Example() {
  const [count, setCount] = useState(0);
  const latestCount = useRef(count);

  useEffect(() => {
    // Set the mutable latest value
    latestCount.current = count;
    setTimeout(() => {
      // Read the mutable latest value
      console.log(`You clicked ${latestCount.current} times`);
    }, 3000);
  });

  return (
    <section className="mt-5 mb-2 pt-5 pb-4 bg-light rounded-2">

      <p>You clicked <span className="text-danger fs-5 mx-2">{count}</span> times</p>
      <button className='btn btn-primary mx-2' onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </section>
  );
}

export default Example
