import { Card } from "./Card"
import { CardVertical } from "./CardVertical"


export const CardList = () =>{ // debe recibir de parametro a publisher, sea DC o Marvel

    return(
        // una columna en movil, 3 columnas en mediano
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
            {
                // // hacemos un map para recorre el arreglo y mostrar todos los heroes
                // heroes.map(hero => (
                //     <HeroCard
                //         key={hero.id}
                //         {...hero} /* toma cada una de las properties del hero y las exparse, es decir, las pasa al componente */
                //     />
                // ))
            }
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <CardVertical/>
                <CardVertical/>
                <CardVertical/>
                <CardVertical/>
                <CardVertical/>
        </div>
    )
}