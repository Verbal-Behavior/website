import React, { useState } from 'react';
import { SliderData } from './SliderData.js';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import FolderCSS from './Folder.module.css';
import { Link } from "react-router-dom";

const Folder = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const setFolderName = value => {
    window.folderName = value;
}
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className= {FolderCSS.slider}>
      <FaArrowAltCircleLeft className= {FolderCSS.left_arrow} onClick={prevSlide} />
      <FaArrowAltCircleRight className= {FolderCSS.right_arrow} onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          > 
            {index === current && (
              <Link to="/Cards">
                <button onClick={() => setFolderName(slide.name)}>{slide.name}</button>
              </Link>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default Folder;
