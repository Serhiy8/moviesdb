import { useLocation } from "react-router-dom"
import { FavoriteLayout } from "../components/favoriteLayout/FavoriteLayout"

export const Favorite = () => {
    const location = useLocation()
    return(
        <div className="container">
            <FavoriteLayout location={location}/>
        </div>
    )
}