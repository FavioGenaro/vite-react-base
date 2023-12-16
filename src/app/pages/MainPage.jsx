import { CardList } from "../components/CardList"

export const MainPage = () =>{

    return(
        <div className="container mt-5">
            <h1>Página principal</h1>
            <hr />

            <button 
                className="btn btn-primary"
                // onClick={ onLogin }
            >
                Login
            </button>
            
            <CardList/>
            
        </div>
    )
}