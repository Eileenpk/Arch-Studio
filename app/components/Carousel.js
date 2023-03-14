"use client";
import styles from "../styles/carousel.module.css";
import { useState } from "react";
import data from "/data/carousel.json";

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = data.map((project, index) => {
    if (currentIndex === index) {
      return (
        <div>
          <img src={project.src} />
          <h1>{project.name}</h1>
          <p>{project.info}</p>
        </div>
      );
    }
  });

  return ( 
  <div className={`${styles.carouselContainer}`}>
    {projects}
  </div>
  );
}
