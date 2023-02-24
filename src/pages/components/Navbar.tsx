import Image from "next/image";
import Link from "next/link";

import styles from '@/styles/Navbar.module.css'

import Pokeball from "public/images/pokeball.png";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <p>
          <Image src={Pokeball} width="30" height="30" alt="PokeNext" />
        </p>
        <h1>PokeNext</h1>
      </div>
      <ul className={styles.link_items}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}
