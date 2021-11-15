import { useState } from "react"

const carsArr = () => [
  { id: 1, brand: 'Tesla', model: 'model x' },
  { id: 2, brand: 'Renault', model: 'Duster' },
  { id: 3, brand: 'Ford', model: 'Endeavour' },
]

const ArrayY = () => {
  const [ cars, setCars ] = useState(carsArr)

  const deleteCar = (id) => {
    const newCar = cars.filter(car => car.id !== id )
    setCars(newCar)
  }

  const AddCar = (newCar) => {
    newCar.id = Date.now()
    const newCarArr = [ newCar, ...cars ]
    setCars(newCarArr)
  }

  const EditCar = (editCar) => {
    const editedCarsArr = cars.map(car => (
      car.id === editCar.id ? editCar : car
    ))
    setCars(editedCarsArr)
  }

  return (  
    <section className="mt-5 mb-2 pt-5 pb-4 bg-light rounded-2">
      <h3 className="text-primary">Arrayy</h3>
      <div className="d-flex justify-content-center align-items-center mt-4">
        <button className="btn btn-success" onClick={() => AddCar({ brand: "new brand", model: "new model" })}>Add</button>

        <div>
          {cars.map(car => (
            <div className="d-flex align-items-center" key={car.id} >
              <h5 className="mt-2 me-2 ">Car:</h5>
              <p className="mt-3 me-4">{car.brand}</p>
              <button className="btn btn-danger" onClick={() => deleteCar(car.id)}>Remove</button>
              <button className="btn btn-info" onClick={() => EditCar({ id: car.id, brand: "edited brand", model: "edit model" })}>Edit</button>
            </div>
          ))}
        </div>
        {/* <button className="btn btn-danger" onClick={() => changeState()}>Trigger an error</button> */}
        {/* <p className="mx-4 mt-3"><span className="text-danger fs-5 mx-2">{error}</span></p> */}
        {/* <button className="btn btn-info" onClick={() => setError("")}>Clear</button> */}
      </div>
    </section>
  );
}

export default ArrayY;