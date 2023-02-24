import styles from "@/styles/About.module.css";
import Image from "next/image";

import Charizard from "public/images/charizard.png";

export default function About() {
  return (
    <div className={styles.about}>
      <h1>About PokeNext</h1>
      <p>PokeNext is an App built on Next.js to query Pokémons.</p>

      <Image src={Charizard} width={300} height={300} alt="Charizard" />
    </div>
  );
}
