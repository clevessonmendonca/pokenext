import styles from "@/styles/Home.module.css";
import { GetStaticProps } from "next";

interface PokemonProps {
  id: number;
  name: string;
  url: string;
}

export const getStaticProps: GetStaticProps = async () => {
  const maxPokemons = 1251;
  const api = `https://pokeapi.co/api/v2/pokemon/`;

  const res = await fetch(`${api}?limit=${maxPokemons}`);

  const data = await res.json();

  data.results.forEach((item: PokemonProps, index: number) => {
    item.id = index + 1;
  });

  return {
    props: {
      pokemons: data.results
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
      </div>
      <ul>
        {pokemons.map((pokemon: PokemonProps) => (
          <li key={pokemon.id}>{pokemon.name}</li>
        ))}
      </ul>
    </>
  );
}
