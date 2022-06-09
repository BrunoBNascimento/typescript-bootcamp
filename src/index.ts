import User from "./interfaces/User";
import MovieService from "./services/MovieService";

const user: User = {
    name: "Bruno Benicio",
    age: 17,
    myList: []
}

new MovieService().listAll().then((result) => {
    console.log(result);
})
