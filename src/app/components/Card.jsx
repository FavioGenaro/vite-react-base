

export const Card = ({ // recibimos cada una de las props del hero
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters

}) =>{ // debe recibir de parametro a publisher, sea DC o Marvel

    return(
        <div className="col">
            <div className="card">
                <div className="row no-gutters ps-2">
                    <div className="col-4 d-flex align-items-center justify-content-center">
                        <img src="../../assets/law.png" className="card-img" alt='imagen' />
                    </div>
                    <div className="col-8">
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
