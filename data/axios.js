import axios from "axios";

export default axios.create({
  // use your own url
  baseURL: "https://filmsonfreeview.herokuapp.com/api/films",
});