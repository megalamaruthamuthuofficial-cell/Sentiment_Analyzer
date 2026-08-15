import axios from "axios";

const API = axios.create({
    baseURL: "http://127.0.0.1:5000/api",
    headers: {
        "Content-Type": "application/json"
    }
});


export const analyzeProduct = async (url) => {

    const response = await API.post(
        "/product/analyze",
        {
            url: url
        }
    );

    return response.data;
};


export default API;