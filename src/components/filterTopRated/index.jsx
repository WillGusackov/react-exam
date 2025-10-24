import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";

const AddTopRated = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleTopRatedChange = (e) => {
    e.preventDefault();
    context.addToFavorites(movie);
  };

  return (
    <IconButton aria-label="add to favorites" onClick={handleTopRatedChange}>
      <FavoriteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddTopRated;
