// import axios from "axios";
// import React from "react";
// const instance=axios.create({
//     baseURL:"https://api.themoviedb.org/3",
// });
// instance.get("/movie/top_rated");

// //api.themoviedb.org/3/movie/top_rated
// export default instance;
// import React from "react";
import axios from "axios";
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

const API_KEY = "YOUR_API_KEY"; // Replace with your actual API key

instance.get("/movie/top_rated", {
  params: {
    api_key: API_KEY,
  },
})
  .then(response => {
    // Handle the response
  })
  .catch(error => {
    // Handle the error
  });

export default instance;