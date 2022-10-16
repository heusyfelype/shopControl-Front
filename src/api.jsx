import axios from 'axios';

let url = process.env.REACT_APP_API_URL;
if (process.env.REACT_APP_MODE === "DEV") {
    url = process.env.REACT_APP_API_URL_DEV
}

const api = axios.create({
    baseURL: url
});

export default api;