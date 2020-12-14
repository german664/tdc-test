import React, { useEffect, useState } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom';

const Loader = () => {
    return (
        <div className="d-flex justify-content-center mt-5">
            < span className="loader mt-5" />
        </div >
    )
}

const CallAPI = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const { page } = useParams()
    const history = useHistory()

    useEffect(() => {
        const getCharacters = async () => {
            setLoading(true)
            try {
                const response = await fetch(`https://swapi.dev/api/people/?page=${page ? page : 1}`);
                const { results } = await response.json();
                if (response.ok) {
                    setData(results)
                    setLoading(false)
                } else {
                    alert('No hay mas páginas');
                    history.push('/api')
                }
            }
            catch (error) {
                console.log(error)
                setLoading(false)
                setError(true)
            }
        }

        getCharacters()
    }, [page, history])

    return (
        loading ? <Loader /> : error ? "Error de conexión, recargar la página por favor" :

            <div className="container">
                <Link to={'/'}> <span className="btn btn-secondary my-4">Ir al inicio</span></Link>
                <div className="row row-cols-md-4 justify-content-center">
                    {data.map((character, index) => {
                        const characterUrl = character.url.split("/");
                        const number = characterUrl[characterUrl.length - 2];
                        return (
                            <div className="col mb-4 card-deck" key={index}>
                                <div className="card">
                                    <img
                                        src={`https://starwars-visualguide.com/assets/img/characters/${number}.jpg`}
                                        className="card-img-top img-fluid"
                                        alt={character.name}
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">{character.name}</h5>
                                        <p className="card-text">
                                            <strong>Hair Color: </strong>{character.hair_color}
                                        </p>
                                        <p> <strong>Eyes Color:</strong> {character.eye_color}</p>
                                        <p onClick={() => console.log(characterUrl)}> <strong>Year of Birth: </strong>{character.birth_year}</p>

                                    </div>
                                </div>
                            </div>
                        );
                    })
                    }
                </div>
                <div className="d-flex justify-content-end">
                    <Link to={`/api/${page ? +page + 1 : 2}`}><span className="btn btn-secondary mr-5">Siguiente página</span></Link>
                </div>
            </div>
    )
}
export default CallAPI
