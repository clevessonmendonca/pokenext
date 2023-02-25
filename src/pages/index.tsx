import styles from "@/styles/Home.module.css";
import { GetStaticProps } from "next";
import Image from "next/image";

import Pokeball from "public/images/pokeball.png";
import Card from "@/components/Card";

export interface PokemonProps {
  id: number;
  name: string;
  url: string;
}

export async function getStaticProps() {
  const maxPokemons = 252;
  const api = `https://pokeapi.co/api/v2/pokemon/`;

  const res = await fetch(`${api}?limit=${maxPokemons}`);

  const data = await res.json();

  data.results.forEach((item: PokemonProps, index: number) => {
    item.id = index + 1;
  });

  return {
    props: {
      pokemons: data.results,
    },
  };
}

export default function Home({ pokemons }: PokemonProps[]) {
  return (
    <>
      <div className={styles.title_container}>
        <h1 className={styles.title}>
          Poke<span>Next</span>
        </h1>
        <Image src={Pokeball} width={50} height={50} alt="PokeNext" />
      </div>
      <div className={styles.pokemon_container}>
        {pokemons.map((pokemon: PokemonProps) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </>
  );
}
