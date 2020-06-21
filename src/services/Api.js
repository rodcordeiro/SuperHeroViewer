import Axios from 'axios';

const api = Axios.create({
    baseURL: process.env.REACT_APP_SUPERHERO_API,
});

export default api;
