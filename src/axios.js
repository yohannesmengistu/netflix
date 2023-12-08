import axios from "axios";
import React from "react";
const instance=axios.create({
    baseURL:"https://api.themoviedb.org/3",
});
instance.get("/movie/top_rated");

//api.themoviedb.org/3/movie/top_rated
export default instance;

