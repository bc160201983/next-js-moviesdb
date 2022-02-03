import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { API_ENDPOINT } from "../../../context/context";
import Link from "next/link";

const index = ({ data }) => {
  const router = useRouter();
  const id = router.query.id;
  const [movie, setMovie] = useState({});
  const [error, setError] = useState({ show: false, msg: "" });
  if (data.Response === "False") {
    setError({ show: true, msg: data.Error });
  } else {
    useEffect(() => {
      setMovie(data);
    }, []);
  }

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
  const { Poster: poster, Title: title, Plot: plot, Year: year } = movie;
  return (
    <section className="single-movie">
      <img src={poster} alt={title} />
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

export default index;

export async function getServerSideProps({ params }) {
  const url = API_ENDPOINT + `&i=${params.id}`;
  const res = await fetch(url);
  const data = await res.json();

  return {
    props: { data }, // will be passed to the page component as props
  };
}
