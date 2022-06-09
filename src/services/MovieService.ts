import loadMovies from "../utils/loadMovies";
import BaseService from "./BaseService";

class MovieService extends BaseService {
    constructor() {
        super()
    }

    async listAll() {
        const result = await this.getInstance().get("/movies");
        const movies = result.data.data;

        return loadMovies(movies)
    }
}

export default MovieService;