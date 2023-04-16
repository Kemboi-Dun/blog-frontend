import axios from "axios";

export const getApi = axios.create({
    //development
    baseURL:"https://newsapi.org/v2/everything?q=apple&from=2023-04-15&to=2023-04-15&sortBy=popularity&apiKey=471786815d6b4ccf97a44a024c590336"
})