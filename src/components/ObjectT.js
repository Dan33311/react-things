import { useState } from "react"

const cars =  {
  model: "Ford Focus",
  detail: "style sedan",
  motor: {
    valves: 8,
    rev: "1660rpm"
  }
}

const ObjectT = () => {

  const [ car, setCar] = useState()

  // const updateInfoCar = (property, value) => {
  //   setCar({
  //     ...car,
  //     [property]: value
  //   })
  // }

  const showCar = () => {
    setCar(cars)
  }

  return (  
    <section className="mt-5 mb-2 pt-5 pb-4 bg-light rounded-2">
      <h3 className="text-primary">Object</h3>
      <div className="d-flex justify-content-center align-items-center mt-4">
        {/* <button className="btn btn-primary me-3" onClick={() => showCar("color", "platinum")}>Update Object</button> */}
        <button className="btn btn-primary me-3" onClick={() => showCar()}>Show an Object</button>
        <pre className="text-left align-items-start">{JSON.stringify(car, null, 1)}</pre>
        <button className="btn btn-info ms-3" onClick={() => setCar()}>Clear</button>
      </div>
    </section>
  );
}

export default ObjectT;