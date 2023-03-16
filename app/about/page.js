"use client";
import styles from "./about.module.css";
import GetWindowWidth from "../functions/GetWindowWidth";
import SimpleHeader from "../components/simple-header";
import headerImage from "@/public/assets/about/mobile/image-hero.jpg";
import headImage2 from "../../public/assets/home/tablet/image-hero-paramour.jpg";
export default function () {
  const { width } = GetWindowWidth();
  return (
    <>
      <header
        className={`${styles.header} relative xl:w-[1110px] flex flex-col justify-center md:mx-[13%] mb-[76px]`}
      >
        <div className={`${styles.heroImage}`}></div>
        <div className={` ${styles.headerPageName}`}>
          <p>About</p>
        </div>

        <div
          className={`pt-[65px] md:pt-[88px] px-[8%] md:px-0 md:pl-[10%] md:ml-auto xl:pl-[182px] xl:pt-0  ${styles.infoContainer}`}
        >
          <div className={`md:mb-[73px] xl:mt-[160px] ${styles.hr}`}></div>
          <h1 className={`mb-[21px] md:mb-[38px]  ${styles.heading}`}>
            Your team of professionals
          </h1>
          <p className={` ${styles.text}`}>
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
