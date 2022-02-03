import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
const SingleMovie = ({ data }) => {
  console.log;
  const [movie, setMovie] = useState({});
  const [error, setError] = useState({ show: false, msg: "" });
  //   if (data.Response === "False") {
  //     setError({ show: true, msg: data.Error });
  //   } else {
  //     useEffect(() => {
  //       setMovie(data);
  //     }, []);
  //   }

  if (error.show) {
    return (
      <div className="page-error">
        <h1>{error.msg}</h1>
        <Link href={"/"}>
          <a className="btn">back to Movies</a>
        </Link>
      </div>
    );
  }
  const { Poster: poster, Title: title, Plot: plot, Year: year } = data;
  return (
    <section className="single-movie">
      <Image src={poster} alt={title} width={270} height={400} />
      <div className="single-movie-info">
        <h2>{title}</h2>
        <p>{plot}</p>
        <h2>{year}</h2>
        <Link href={"/"}>
          <a className="btn">back to Movies</a>
        </Link>
      </div>
    </section>
  );
};

export default SingleMovie;
