import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import "./Movie.css";

function Movie(props){
    return (
        <Link to ={{
                pathname: `/movie/${props.id}`,
                state : {...props}

        }} className = "movie__link">
        <div className = "movie">
            <img src = {props.poster} alt = {props.title} title = {props.title}/>
            <div className = "movie__data">
                <h3 className = "movie__title">{props.title}</h3>
                <h5 className = "movie__year">{props.year}</h5>
                <ul className = "movie__genres">{
                props.genres.map( (genre,index) => (<li key={index} className="genres_genre">{genre}</li>))
                }</ul>
                
                <p className = "movie__summary">{props.summary.slice(0,140)}...</p>
            </div>
        </div>
       </Link>
    );
}

Movie.propTypes = {
    id : PropTypes.number.isRequired,
    year : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired
} 

export default Movie;