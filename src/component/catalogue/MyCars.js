import Car from "./Car";
import CarInput from "./CarInput";
import {useState} from 'react';

const MyCars = ({titre}) => {
    const [cars, setcars] = useState([
        {"marque": "Ford", "couleur" : "bleu"},
        {"marque" : "Renault", "couleur" : "noir"},
        {"marque" : "Toyota", "couleur" : "vert"}
    ]);
    const addCar = (car) => {
        setcars(...cars, car);
    }
    return (

        <>
            <h1>{titre}</h1>
            {
                cars.map(
                    (el, index) => (<Car key={index} marque={el.marque} couleur={el.couleur}/>)
                )
            }
            <CarInput addCar={addCar}/>
        </>
    )
}
export default MyCars;