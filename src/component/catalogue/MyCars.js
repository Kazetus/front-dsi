import Car from "./Car";

const MyCars = ({titre}) => {
    return (
        <>
        <h1>titre</h1>
        <Car marque="Ford" couleur="bleu"/>
        <Car marque="Renault" couleur="noir"/>
        <Car marque="Toyota" couleur="vert"/>
        </>
    )
}
export default MyCars;