import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key: '850650e0345b4a6787e8192284aca662'
    }
})