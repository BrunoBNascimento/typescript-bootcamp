import calculateMoviesAverage from "./calculateMoviesAverage";
import Movie from "../interfaces/Movie";

function orderByAverageRate(movies: Movie[]) {
    const moviesWithAverage = calculateMoviesAverage(movies);
    
    const moviesOrdered = moviesWithAverage.sort((a, b) => {
        if(a.average > b.average) {
            return 1
        }

        if(a.average < b.average) {
            return -1
        }

        return 0;
    })

    return moviesOrdered;
}

export default orderByAverageRate;