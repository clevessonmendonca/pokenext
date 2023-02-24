import Image from "next/image";
import Link from "next/link";

import Pokeball from "public/images/pokeball.png";

export default function Navbar() {
  return (
    <nav>
      <div>
        <p>
          <Image src={Pokeball} width="30" height="30" alt="PokeNext" />
        </p>
        <h1>PokeNext</h1>
      </div>
      <ul>
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
