import styles from "./contact.module.css";

export default function () {
  return (
    <>
      <header
        className={`${styles.header} relative xl:w-[1110px] flex flex-col justify-center md:mx-[13%] mb-[76px]`}
      >
        <div className={`${styles.heroImage}`}></div>
        <div className={` ${styles.headerPageName}`}>
          <p>Contact</p>
        </div>

        <div
          className={`pt-[65px] md:pt-[88px] px-[8%] md:px-0 md:pl-[10%] md:ml-auto xl:pl-[182px] xl:pt-0  ${styles.infoContainer}`}
        >
          <div className={`md:mb-[73px] xl:mt-[160px] ${styles.hr}`}></div>
          <h1 className={`mb-[21px] md:mb-[38px]  ${styles.heading}`}>
            Tell us about your project
          </h1>
          <p className={` ${styles.text}`}>
            We’d love to hear more about your project. Please, leave a message
            below or give us a call. We have two offices, one in Texas and one
            in Tennessee. If you find yourself nearby, come say hello!
          </p>
        </div>
        <aside className={`absolute left-[38px] ${styles.aside}`}>
          <div className={`${styles.asideBar}`}></div>
          <h2 className={`${styles.asideText}`}>CONTACT</h2>
        </aside>
      </header>
      <h1>hello from the Contact page!</h1>
    </>
  );
}
