import { useState } from "react"

const String = () => {
  const [ error, setError ] = useState('')

  const changeState = () => {
    setError(`error:  "error message"`)
  }
  // const cleanErrorMessage = () => {
  //   setError('')
  // }

  return (  
    <section className="mt-5 mb-2 pt-5 pb-4 bg-light rounded-2">
      <h3 className="text-primary">String</h3>
      <div className="d-flex justify-content-center align-items-center mt-4">
        <button className="btn btn-danger" onClick={() => changeState()}>Trigger an error</button>
        <p className="mx-4 mt-3"><span className="text-danger fs-5 mx-2">{error}</span></p>
        {/* <button className="btn btn-primary" onClick={() => cleanErrorMessage()}>Clear</button> */}
        <button className="btn btn-info" onClick={() => setError("")}>Clear</button>
      </div>
    </section>
  );
}

export default String;