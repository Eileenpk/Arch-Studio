"use client";
import styles from "./about.module.css";
import GetWindowWidth from "../functions/GetWindowWidth";
export default function () {
  const { width } = GetWindowWidth();
  return (
    <>
      <header className={`${styles.header} relative max-w-[1110px] flex justify-center md:mx-[13%]`}>
        <div className={` ${styles.heroContainer}`}>
          <div className={`${styles.heroImage}`} ></div>
          <div className={`${styles.headerWhiteBox}`}></div>
          <div className={`${styles.headerAboutTextContainer}`}><p className={`${styles.headerAboutText}`}>About</p> <div className={`${styles.headerHr}`}></div></div>
          <h1 className={`px-[8%] md:px-0 mb-[21px] ${styles.heading}`}>
            Your team of professionals
          </h1>
          <p className={`px-[8%] mb-[76px] md:px-0 md:mb-0 ${styles.text}`}>
            Our small team of world-class professionals will work with you every
            step of the way. Strong relationships are at the core of everything
            we do. This extends to the relationship our projects have with their
            surroundings.
          </p>
        </div>

        <aside className={`absolute left-[38px] ${styles.aside}`}>
          <div className={`${styles.asideBar}`}></div>
          <h2 className={`${styles.asideText}`}>ABOUT US</h2>
        </aside>
      </header>
      <main>
        <h2>hello from about page!</h2>
      </main>
    </>
  );
}
