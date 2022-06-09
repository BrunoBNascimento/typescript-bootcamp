import Movie from "../interfaces/Movie";

interface MoviesFromApiDTO {
    id: number;
    title: string;
    directed_by: string;
    duration: number;
}

function loadMovies(data: MoviesFromApiDTO[]): Omit<Movie, "ratings">[] {
    return data.map((movie) => ({
        id: movie.id,
        name: movie.title,
        directedBy: movie.directed_by,
        duration: movie.duration,
    }))
}

export default loadMovies