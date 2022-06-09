import Movie from "../interfaces/Movie";
import User from "../interfaces/User";

function filterMoviesByIndicativeRating(movies: Movie[], user: User): Movie[] {
    return movies.filter((movie) => {
        return movie.indicativeRating <= user.age
    })
}

export default filterMoviesByIndicativeRating;