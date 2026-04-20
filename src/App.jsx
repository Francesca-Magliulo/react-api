import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from "react"
import axios from "axios"

const endpoint = "https://lanciweb.github.io/demo/api/actors/"
const actressesEndpoint = "https://lanciweb.github.io/demo/api/actresses/"

function App() {

  const [actors, setActors] = useState([])
  const [actresses, setActresses] = useState([])
  useEffect(() => {
    axios.get(endpoint)
      .then((response) => {
        console.log(response.data)
        setActors(response.data)
      })

    axios.get(actressesEndpoint)
      .then((response) => {
        console.log(response.data)
        setActresses(response.data)
      })
  }, [])

  const cast = [...actors, ...actresses]
  return (
    <div className="container py-4">
      <h1 className="text-center mb-4">Cast List</h1>

      <div className="row g-4">
        {cast.map((actor) => (
          <div className="col-12 col-md-6 col-lg-4" key={actor.id + actor.name}>
            <div className="card h-100 shadow-sm">
              <img
                src={actor.image}
                alt={actor.name}
                className="card-img-top"
              />

              <div className="card-body d-flex flex-column">
                <h4 className="card-title">{actor.name}</h4>

                <p className="mb-1">
                  <strong>Nationality:</strong> {actor.nationality}
                </p>

                <p className="mb-1">
                  <strong>Birth year:</strong> {actor.birth_year}
                </p>

                <p className="small text-muted">
                  {actor.biography}
                </p>

                <p className="mb-1">
                  <strong>Awards:</strong> {actor.awards.join(", ")}
                </p>

                <p className="mt-auto">
                  <strong>Known for:</strong> {actor.known_for.join(", ")}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

}

export default App
