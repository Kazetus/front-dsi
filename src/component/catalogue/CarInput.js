import { useState } from "react";

const CarInput = ({addCar}) => {
    const [marque, setMarque] = useState("");
    const [couleur, setCouleur] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        const newCar = {marque, couleur};
        addCar=(newCar);
        setMarque("");
        setCouleur("");
    }
    return (
        <form onSubmit={handleSubmit} style={{display:"flex", flexDirection:"column", width:"400px",gap:"10px"}}>
            <input type="text" name="marque" placeholder="marque"/>
            <input type="text" name="couleur" placeholder="couleur"/>
            <input type="submit" value="Ajouter le véhicule" />
        </form>
    )
}
export default CarInput;