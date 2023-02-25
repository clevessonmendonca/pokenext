import { PokemonProps } from "@/pages";
import Image from "next/image";
import { GetStaticPaths, GetStaticProps } from "next/types";

import styles from "@/styles/Pokemon.module.css";

export const getStaticPaths: GetStaticPaths = async () => {
  const maxPokemons = 252;
  const api = `https://pokeapi.co/api/v2/pokemon/`;

  const res = await fetch(`${api}?limit=${maxPokemons}`);
  const data = await res.json();

  const paths = data.results.map((pokemon: PokemonProps, index: number) => {
    return {
      params: { pokemonId: (index + 1).toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.pokemonId;

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await res.json();

  return {
    props: {
      pokemon: data,
    },
  };
};

export default function Pokemon({ pokemon }: PokemonProps) {
  return (
    <div className={styles.pokemon_container}>
      <h1 className={styles.title}>{pokemon.name}</h1>
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
        width={200}
        height={200}
        alt={pokemon.name}
      />
      <div>
        <h3>Number:</h3>
        <p>#{pokemon.id}</p>
      </div>
      <div>
        <h3>Type:</h3>
        <div className={styles.types_container}>
          {pokemon.types.map((item: PokemonProps, index: number) => (
            <span key={index} className={`${styles.type} ${styles['type_' + item.type.name]}`}>{item.type.name}</span>
          ))}
        </div>
      </div>
      <div className={styles.data_container}>
        <div className={styles.data_height}>
          <h4>Height:</h4>
          <p>{pokemon.height} cm</p>
        </div>
        <div className={styles.data_weight}>
          <h4>Weight:</h4>
          <p>{pokemon.weight / 10} kg</p>
        </div>
      </div>
    </div>
  );
}
