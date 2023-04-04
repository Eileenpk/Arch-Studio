"use client";
import data from "/data/projects.json";
import styles from "./portfolio.module.css";
import GetWindowWidth from "../functions/GetWindowWidth";
export default function Portfolio() {
  const { width } = GetWindowWidth();
  
  const getProjectImage = (project) => {
    if (width < 768) {
      return project.mobileSrc;
    } else if (width >= 768 && width < 1280) {
      return project.tabletSrc;
    } else {
      return project.desktopSrc;
    }
  };
  
  const project = data.map((project) => {
      return (
        <div
          className={`${styles.projectContainer} w-[83%] max-w-[573px] xl:w-[350px] xl:h-[560px] h-[240px]`}
          style={{
            backgroundImage: `url(${getProjectImage(project)})`,
          }}
        >
          <div className={`${styles.projectInfoContainer} mt-[153px] md:mt-[137px] xl:mt-[457px] ml-6 md:ml-10`}>
            <h2 className={styles.projectTitle}>{project.name}</h2>
            <p className={styles.projectDate}>{project.date}</p>
          </div>
        </div>
      );
  });

  return (
    <>
      <header className={`${styles.aside}`}>
        <div className={`${styles.asideBar}`}></div>
        <h1 className={`${styles.asideText}`}>PORTFOLIO</h1>
      </header>

      <main className="max-w-[1110px]">
        <div className="flex flex-wrap justify-center gap-6 xl:gap-[30px] mb-[72px]">{project}</div>
      </main>
    </>
  );
}
