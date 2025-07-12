import axios from "axios";

const API_KEY = "41a9bd102e179fa30264e53fd1d70534";
axios.defaults.baseURL = "https://api.themoviedb.org";

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