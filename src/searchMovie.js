import React, {useState} from 'react'
import MovieCard from './movieCard'

export default function SearchMovie(){

    const [query, setQuery]=useState('');
    const [movies, setMovies]=useState([]);

    const searchMoives = async (e) => {
        
        e.preventDefault();

        const url=`https://api.themoviedb.org/3/search/movie?api_key=02398413c48ab8ad988a86f5c5c85d28&language=en-US&query=${query}&page=1&include_adult=false`;


        try{
            const res = await fetch(url);
            const data = await res.json();
            setMovies(data.results);
            
        }catch(err){
            console.log(err);
        }

      }
    return(
        <>
            <form className="form" onSubmit={searchMoives}>
                <label className="label" htmlFor="query">Movie Name</label>
                <input className="input" type="text" name="query" placeholder="i.e. Interstellar"
                value={query} onChange={(e)=>{setQuery(e.target.value)}}
                ></input>
                
                <button className="button" type="submit">Search</button>
                
            </form>

            <div className="card-list">
                {movies.filter(movie => movie.poster_path).map(movie => (
                    <MovieCard movie={movie} key={movie.id}/>
                ))}
            </div>
        </>
    )
}