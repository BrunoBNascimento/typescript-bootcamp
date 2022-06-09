import Movie from "../interfaces/Movie";
import removeMovieWithoutRatings from "./removeMovieWithoutRatings";

interface Average {
    average: number;
}

type MovieWithAverage = Movie & Average;

function calculateMoviesAverage(movies: Movie[]): MovieWithAverage[] {
    const sanitizedMovies = removeMovieWithoutRatings(movies);

    return sanitizedMovies.map(movie => {
        const initialValue = 0;
        const length = movie.ratings.length;
        const sumFn = (previous: number, current: number) => previous + current

        const average = movie.ratings.reduce(sumFn, initialValue) / length;
    
        return {
            ...movie,
            average,
        }
    });
}

export default calculateMoviesAverage;