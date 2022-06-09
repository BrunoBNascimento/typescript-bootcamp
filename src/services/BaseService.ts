import axios, { AxiosInstance } from "axios";

class BaseService {
    private axiosInstance: AxiosInstance;
    private baseApiURL = "https://mcuapi.herokuapp.com/api/v1";

    constructor() {
        this.axiosInstance = axios.create({
            baseURL: this.baseApiURL
        });
    }

    getInstance() {
        return this.axiosInstance;
    }
}

export default BaseService;
