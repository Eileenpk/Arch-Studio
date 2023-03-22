"use client";
import Image from "next/image";
import headImage from "../public/assets/home/tablet/image-hero-paramour.jpg";
import styles from "./page.module.css";
import Carousel from "./components/Carousel";
import GetWindowWidth from "./functions/GetWindowWidth";

export default function Home() {
  const { width } = GetWindowWidth();
  return (
    <>
      <header className={` relative max-w-[1110px] flex justify-center`}>
        {width > 1280 && <Carousel />}
        {width < 1280 && (
          <div className={` ${styles.heroContainer}`}>
            <Image src={headImage} alt='Paramour building' />
            <h2 className={`${styles.heading}`}>Project Paramour</h2>
            <p className={`${styles.text}`}>
              Project made for an art museum near Southwest London. Project
              Paramour is a statement of bold, modern architecture.
            </p>

            <a
              href="/portfolio"
              className={`flex items-center justify-center gap-9 ${styles.heroBtn}`}
            >
              See Our Portfolio{" "}
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="20">
                <g
                  fill="none"
                  fillRule="evenodd"
                  stroke="#ffffff"
                  strokeWidth="2"
                >
                  <path d="M15 1l9 9-9 9M0 10h24" />
                </g>
              </svg>
            </a>
          </div>
        )}

        {width > 768 && (
          <aside className={`absolute left-[38px] ${styles.aside}`}>
            <div className={`${styles.asideBar}`}></div>
            <h2 className={`${styles.asideText}`}>HOME</h2>
          </aside>
        )}
      </header>
      <main className={`flex flex-col max-w-[1110px] ${styles.main}`}>
        <h1 className="text-3xl font-bold underline">
          testing from the main page
        </h1>
      </main>
    </>
  );
}
