import Head from "next/head";
import Image from "next/image";

import { Hero, Chicken, Beef, Seafood } from "../components/index";

export default function Home() {
  return (
    <>
      <h1>Howdy partner</h1>
      <Hero />
      <Chicken />
      <Beef />
      <Seafood />
    </>
  );
}
