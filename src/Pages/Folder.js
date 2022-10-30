import React, { useState } from 'react';
//import { SliderData } from './SliderData.js';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import FolderCSS from './Folder.module.css';
import { Link } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db, auth } from "../Firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function Folder() {
  const [user] = useAuthState(auth);
  const [folders, setFolders] = useState([]);
  const folderCollectionRef = collection(db, "folders");
  const [current, setCurrent] = useState(0);

  const setFolderName = value => {
    window.folderName = value;
}
  const nextSlide = () => {
    setCurrent(current === folders.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? folders.length - 1 : current - 1);
  };

  const getFolders = async () => {
      const q = query(folderCollectionRef, where("uid", "==", user?.uid))
      const data = await getDocs(q);
      setFolders(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
  }

  getFolders();

  return (
    <section className= {FolderCSS.slider}>
      <FaArrowAltCircleLeft className= {FolderCSS.left_arrow} onClick={prevSlide} />
      <FaArrowAltCircleRight className= {FolderCSS.right_arrow} onClick={nextSlide} />
      {folders.map((folder, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          > 
            {index === current && (
              <Link to="/Cards">
                <button onClick={() => setFolderName(folder.name)}>{folder.name}</button>
              </Link>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default Folder;
