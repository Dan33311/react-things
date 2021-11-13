import { useState } from "react"

const Conditional = () => {

  const [condition, setCondition] = useState(true)

  const changeState = () => {
    setCondition(!condition)
  }

  return (  
    <section className="mt-5 mb-2 pt-5 pb-4 bg-light rounded-2">
      <h3 className="text-primary">Conditional</h3>
      <div className="d-flex justify-content-center align-items-center mt-4">
        <p className="me-4 mt-2">Click to change the state...</p>
        <button className="btn btn-primary" onClick={() => changeState()}>Change</button>
        <p className="ms-4 mt-2">State value is<span className="text-danger fs-5 mx-2">{condition.toString()}</span></p>
      </div>
    </section>
  )
}

export default Conditional