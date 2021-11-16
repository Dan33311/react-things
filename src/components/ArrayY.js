import { useState } from "react"

const carsArr = () => [
  { id: 1, brand: 'Tesla', model: 'model x' },
  { id: 3, brand: 'Ford', model: 'Endeavour' },
  { id: 2, brand: 'Renault', model: 'Duster' },
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
      <h3 className="text-primary">Array</h3>
      <button type="button" className="btn btn-success mt-3 me-3" onClick={() => AddCar({ brand: "new brand", model: "new model" })}>Add</button>
      <div className="d-flex justify-content-center mt-4">

        <div>
          {cars.map(car => (
            <div className="d-flex align-items-center" key={car.id} >
              <h6 className="mt-2 me-2 ">Car:</h6>
              <p className="mt-3 me-3 col-4 text-start">{car.brand}</p>
              <button className="btn btn-danger me-2" onClick={() => deleteCar(car.id)}>Remove</button>
              <button className="btn btn-info" onClick={() => EditCar({ id: car.id, brand: "edited brand", model: "edited model" })}>Edit</button>
            </div>
          ))}
        </div>

        {/* printing the cars array */}
        <div className="text-start mx-5">
          <pre>{JSON.stringify(cars, null, 2)}</pre>
        </div>
      </div>
    </section>
  );
}

export default ArrayY;