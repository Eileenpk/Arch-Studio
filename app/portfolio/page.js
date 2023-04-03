'use client'
import data from "/data/projects.json";
import styles from "./portfolio.module.css";
import GetWindowWidth from '../functions/GetWindowWidth'
export default function Portfolio() {
  const {width} = GetWindowWidth()
  const names = data.map((project) => {
    return <img src={project.mobileSrc} alt={project.name} className={styles.projectImg} />;
  });

  return (
    <main>
      <div className="flex flex-wrap justify-center">{names}</div>
      <aside className={`absolute left-[38px] ${styles.aside}`}>
          <div className={`${styles.asideBar}`}></div>
          <h2 className={`${styles.asideText}`}>CONTACT</h2>
        </aside>
    </main>
  );
}
