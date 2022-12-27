import axios from 'axios';

const baseURL = process.env.REACT_APP_BASE_API_URL;


export const MakeAPICall = async (url, method, data) => {
    try {
        const token = localStorage.getItem('accessToken') || null;
        console.log(baseURL)
        const headers = await getHeaders(token);
        console.log(`${baseURL}${url}`)
        console.log(method, url, baseURL, headers, data)

        const response = await axios({
            method: method,
            url,
            baseURL,
            data,
            headers
        });
        console.log("response api call:", response)
        return response;
    }
    catch (err) {
        console.log("catch error", JSON.stringify(err));
    }
}


const getHeaders = async (token) => {
    let headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    };

    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }
    return headers;

}