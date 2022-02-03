import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useGlobalContext } from "../context/context";
const url =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

const Movies = () => {
  const { movies, isLoading } = useGlobalContext();
  if (isLoading) {
    return <div className="loading"></div>;
  }
  return (
    <section className="movies">
      {movies.map((movie) => {
        const { imdbID: id, Poster: poster, Title: title, Year: year } = movie;
        return (
          <Link href={`movie/${id}`} key={id}>
            <a className="movie">
              <article>
                <Image src={poster === "N/A" ? url : poster} alt={title} />
                <div className="movie-info">
                  <h4 className="title">{title}</h4>
                  <p>{year}</p>
                </div>
              </article>
            </a>
          </Link>
        );
      })}
    </section>
  );
};

export default Movies;
