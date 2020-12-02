import React from 'react'

export default function MoviesList(props) {
    console.log(props.movies);
    const movies = props.movies.map(movie => {

        return (
            <div key={movie.id}>
                <h2>{movie.title}</h2>
                <p>{movie.director}</p>
                {movie.rate > 9.1 && <p>{movie.rate}</p>}
                {movie.hasOscars ? <p>Oscar winning movie ⭐️</p> : <p>No Oscar</p>}
            </div>
        )
    })
    return (
        <div>{movies}</div>
    )
}
