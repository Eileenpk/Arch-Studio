import Image from "next/image";
import styles from "./page.module.css";
import Carousel from "./components/Carousel";
export default function Home() {
  return (
    <>
      <header className={`max-w-[1110px]`}>
        <Carousel/>
      </header>
      <main className={`flex flex-col max-w-[1110px] ${styles.main}`}>
        <h1 className="text-3xl font-bold underline">
          testing from the main page
        </h1>
      </main>
    </>
  );
}
