import axios, { AxiosRequestConfig } from "axios";

export interface FetchRespone<T> {
    count:number;
    results:T[];
}

const axiosInstance =  axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key: '850650e0345b4a6787e8192284aca662'
    }
});

class APIClient<T> {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    getAll = (config: AxiosRequestConfig) => {
        return axiosInstance
            .get<FetchRespone<T>>(this.endpoint,config)
            .then(res=> res.data);
    }
}

export default APIClient;