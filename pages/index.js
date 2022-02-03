import Head from "next/head";
import Image from "next/image";
import SearchForm from "../components/SearchForm";
import Movies from "../components/Movies";
import { useGlobalContext } from "../context/context";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <main>
      <SearchForm />
      <Movies />
    </main>
  );
}
