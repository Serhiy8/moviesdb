import { useLocation } from "react-router-dom"
import { MoviesTrendy } from "../components/moviesTrendy/MoviesTrendy"

export const Home = () => {
    const location = useLocation()

    return (
        <div className="container" style={{marginTop: '65px'}}>
            <MoviesTrendy location={location}/>
        </div>
    )
}