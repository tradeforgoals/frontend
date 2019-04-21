import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    // NOTE: Only to be used with the json-server mock server
    'Access-Control-Allow-Origin': '*'
  }
});

export default instance;
