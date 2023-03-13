import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={`flex flex-col ${styles.main}`}>
      <h1 className="text-3xl font-bold underline">
        testing from the main page
      </h1>
    </main>
  );
}
