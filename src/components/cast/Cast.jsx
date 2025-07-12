import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import fetchMovies from "../operations/fetchMovies";
import { List, Thumb } from "./cast.styled";

const url = 'https://api.themoviedb.org/3/movie/';

export const Cast = () => {
    const {id} = useParams();
    const [actors, setActors] = useState(null);

useEffect(() => {
    const fetchActors = async() => {
        const dataActors = await fetchMovies(`${url}${id}/credits`);
        if(dataActors){
            setActors(dataActors.cast)
        }
    }
    if(id){
        fetchActors();
    }
},[id])

    return(<Thumb>
      {!actors ? (
        <div>Loading...</div>
      ) : (
        <List>
          {actors.slice(0, 7).map(el => {
            return (
              <li key={el.id}>
                {el.profile_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w200/${el.profile_path}`}
                    alt=""
                    width="150px"
                  />
                ) : (
                  <div>No photos of {el.name}</div>
                )}
                <p>{el.name} as {el.character}</p>
              </li>
            );
          })}
        </List>
      )}
    </Thumb>)
}
