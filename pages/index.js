import Head from "next/head";
import { Header } from "../components/Header";
import { Nav } from "../components/Nav";
import { Results } from "../components/Results";
import request from "../utils/request";

export default function Home({ results }) {
  return (
    <div>
      <Head>
        <title>Hulu</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Nav />

      <Results results={results} />
    </div>
  );
}

export async function getServerSideProps(contex) {
  const genre = contex.query.genre;

  const req = await fetch(
    `https://api.themoviedb.org/3${
      request[genre]?.url || request.fetchTrending.url
    }`
  ).then((res) => res.json());

  return {
    props: { results: req.results },
  };
}
