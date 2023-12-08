import React, { useEffect, useState } from "react";
import "./Row.css";
import axios from "./axios";
import YouTube from 'react-youtube';
import movieTrailer from "movie-trailer";
const base_url="https://image.tmdb.org/t/p/original/";
function Row({title,fetchUrl,isLargeRow }){
    const[movies,setMovies]=useState([]);
    const[traileUrl,setTrailerUrl]=useState("");
    useEffect(()=>{
        async function fetchData(){
            const request=await axios.get(fetchUrl);
           // console.log(request);
            setMovies(request.data.results);
           // console.log(request.data.results);
            return request;
        }
        fetchData();
    },[fetchUrl]);
    const opts={
        height:"390",
        width:"100%",
        playerVars:{
            autoplay:1,
        },
    };
    const handleClick=(movie)=>{
        if (traileUrl) {
            setTrailerUrl("");   
        }else{
            movieTrailer(movie?.title||movie?.name||movie.original_name)
            .then((url)=>{
                const urlParams=new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get("v"));
            })
            .catch((error)=>console.log(error));
        }
    };
    //console.log(movies)
    return(
        <div className="row">
           <h1>{title}</h1>
           <div className="row_posters">
            {movies.map((movie)=>(
                    <img 
                    onClick={()=>handleClick(movie)}
                    className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                     src={`${base_url}${
                       isLargeRow? movie.poster_path:movie.backdrop_path}`}
                       alt={movie.name}
                    />
                ))}
           </div>
           <div style={{padding:"40px"}}>
             {traileUrl&&<YouTube videoId={traileUrl} opts={opts}/>}
           </div>
        </div>
    )
}
export default Row;