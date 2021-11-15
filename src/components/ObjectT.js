import { useState } from "react"

const singleCar =  {
  model: "Ford Focus",
  detail: "style sedan",
  // motor: {
  //   valves: 8,
  //   rev: "1660rpm"
  // }
}

const ObjectT = () => {

  const [ car, setCar] = useState()

  // working with properties
  // const updateCar = (property, value) => {
  //   setCar({
  //     ...car,
  //     [property]: value
  //   })
  // }

  const showCar = () => {
    setCar(singleCar)
  }

  return (  
    <section className="mt-5 mb-2 pt-5 pb-4 bg-light rounded-2">
      <h3 className="text-primary">Object</h3>
      <div className="d-flex justify-content-center align-items-center mt-4">
        {/* using the properties */}
        {/* <button className="btn btn-primary me-3" onClick={() => updateCar("color", "platinum")}>Update Object</button> */}
        <button className="btn btn-primary my-2 me-3" onClick={() => showCar()}>Show the Object</button>
        {/* <div className="text-objectt"> */}
        <div className="text-start mx-5">
          <pre>{JSON.stringify(car, null, 2)}</pre>
        </div>
        <button className="btn btn-info my-2 ms-3" onClick={() => setCar()}>Clear</button>
      </div>
    </section>
  );
}

export default ObjectT;