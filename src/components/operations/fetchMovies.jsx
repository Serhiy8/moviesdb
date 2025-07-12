import axios from "axios";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
axios.defaults.baseURL = import.meta.env.VITE_TMDB_URL;

const fetchMovies = async (URL, searchQuery = {}) => {
    try {
        const response = await axios.get(URL,{
            params: {
                api_key: API_KEY,
                ...searchQuery
            }
        });
        if (response.status === 200) {
            return response.data;
        } else {
            throw new Error("Invalid response from the API");
        }
    } catch (error) {
        console.error("Error:", error.message);
    }
    
}

export default fetchMovies;