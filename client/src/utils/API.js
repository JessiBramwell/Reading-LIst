import axios from "axios";
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const API_KEY = "&" + process.env.REACT_APP_API_KEY

export default {
  
  search: function (query) {
    console.log(BASEURL + query + API_KEY)
    return axios.get(BASEURL + query + API_KEY)
  }
}