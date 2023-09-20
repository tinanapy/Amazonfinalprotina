import axios from 'axios';
const instance = axios.create({
  baseURL: "https://us-central1-n-ec99b.cloudfunctions.net/api", // yetestekakelew api the api (cloud function) gets from (firebase emulators:start) and must do it every 30 seconds
});
export default instance;
//https://us-central1-n-ec99b.cloudfunctions.net/api   ...my lst deployed backend api


//baseURL: "http://127.0.0.1:5001/n-ec99b/us-central1/api",  my first api key