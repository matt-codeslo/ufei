import axios from "axios";

export default axios.create({
    baseURL: process.env.NODE_ENV === 'local' ? process.env.REACT_APP_LOCALHOST_API : process.env.REACT_APP_PRODUCTION_API
});