"use client";
import styles from "../styles/carousel.module.css";
import { useState } from "react";
import data from "/data/carousel.json";
import Transition from "../functions/Transition";
export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const [isActive, setIsActive] = useState(false);
  function handleClick() {
    Transition(setIsActive, 500)
  } 

  const projects = data.map((project, index) => {
    if (currentIndex === index) {
      return (
        <div
          key={project.info}
          className={``}
        >
          <img src={project.src} />
          <h1>{project.name}</h1>
          <p>{project.info}</p>
        </div>
      );
    }
  });

  return (
    <div className={`${styles.carouselContainer}`}>
      <div className={` ${isActive ? styles.active : styles.projectContainer}`}>{projects}</div>

      <div className={`${styles.buttonsContainer}`} onClick={handleClick}>
        {data.map((project, index) => (
          <button
            key={project.name}
            className={`${styles.button} ${
              currentIndex === index ? styles.selected : ""
            }`}
            onClick={() => setCurrentIndex(index)}
          >
            {`0${index + 1}`}
          </button>
        ))}
      </div>
    </div>
  );
}
