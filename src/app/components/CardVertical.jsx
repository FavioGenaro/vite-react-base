import './styles.css'

export const CardVertical = ({ // recibimos cada una de las props del hero
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters

}) =>{ // debe recibir de parametro a publisher, sea DC o Marvel

    return(
        <div className="">
            <div className="card">
                <div className="row">
                    <div className="d-flex justify-content-center">
                        <img src="../../assets/React-icon.png" className="img-vertical card-img" alt='100px' />
                    </div>
                    <div className="">
                        <div className="card-body">
                            <h5 className="card-title">hola </h5>
                            <p className="card-text">mundo</p>
                            {/* {
                                (alter_ego !== characters) && (charactesByHero)
                            } */}
                            {/* <CharactesByHero characters={characters} alter_ego={alter_ego} /> */}
                            <p className="card-text">
                                <small className="text-muted">Heroe</small>
                            </p>

                        </div>
                    </div>
                </div>

            </div>
            
        </div>
    )
}
