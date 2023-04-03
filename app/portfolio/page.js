'use client'
import data from "/data/projects.json";
import styles from "./portfolio.module.css";
import GetWindowWidth from '../functions/GetWindowWidth'
export default function Portfolio() {
  const {width} = GetWindowWidth()
  
  const names = data.map((project) => {
    if(width < 768) {
      return <img src={project.mobileSrc} alt={project.name} className= {styles.projectImg} />;
    }

    else if(width > 768 && width < 1280) {
      return <img src={project.tabletSrc} alt={project.name} className={styles.projectImg} />;
    }
    else {
      return <img src={project.desktopSrc} alt={project.name} className={styles.projectImg} />;
    }
    
  });

  return (
    <>
      <header className="relative">
      <aside className={`absolute left-[38px] ${styles.aside}`}>
          <div className={`${styles.asideBar}`}></div>
          <h2 className={`${styles.asideText}`}>PORTFOLIO</h2>
        </aside>
      </header>

      <main className="max-w-[1110px]">
      <div className="flex flex-wrap justify-center gap-6 xl:gap-8">{names}</div>
      
    </main>
    </>
    
  );
}
