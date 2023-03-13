import Image from "next/image";
import styles from "./page.module.css";
import data from "../data/projects.json";


export default function Home() {
  const names = data.map((person) => {
    return (
      <img src={person.src} alt={person.name} />
    )
  });

  return (
    <main className={`${styles.main}`}>
      <p>{names}</p>
      <h1>testing from the main page</h1>
    </main>
  );
}
