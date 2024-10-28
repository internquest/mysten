import Image from "next/image";
import Hero from "./components/Hero";
import PlaatformsProtocols from "./components/PlaatformsProtocols";
import Products from "./components/Products";
import Latest from "./components/Latest";

export default function Home() {
  return (
    <>
      <Hero />
      <PlaatformsProtocols />
      <Products />
      <Latest />
    </>
  );
}
