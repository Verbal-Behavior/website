import CardsCSS from './CardFolderImage.module.css'
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, Link } from "react-router-dom";
import  {db, auth, storageRef } from "../Firebase";
import { arrayRemove, collection, getDocs, query, where } from "firebase/firestore";
import { color } from '@uiw/react-color';

//color imports
import Block from '@uiw/react-color-block';

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function Cards() {
	const [open, setOpen] = useState(false);
	const [openNo, setOpenNo] = useState(false);
  	const closeModal = () => setOpen(false);
	const closeModalNo = () => setOpenNo(false);
	const [flashcards, setFlashcards] = useState([]);
	const [user, loading, error] = useAuthState(auth);
	const flashcardsCollectionRef = collection(db, "flashcards");
	const navigate = useNavigate();
	const name = window.folderName;
	const [current, setCurrent] = useState(0);

	const nextSlide = () => {
		setCurrent(current === flashcards.length - 1 ? 0 : current + 1);
	  };

	const getFlashcards = async () => {
		const q = query(flashcardsCollectionRef, where("uid", "==", user?.uid), where("folderName", "==", name))
		const data = await getDocs(q);
		setFlashcards(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
	}

	getFlashcards();

	useEffect(() => {
		if (loading) return;
		if (!user) return navigate("/");
  
	}, [user, loading])

    return (
		<body className ={CardsCSS.body}>
		{flashcards.map((flashcard,index)=> { 
			return (
					<div
					className={index === current ? 'slide active' : 'slide'}
					key={index}
				  >
				  {index === current && (
				<div className= {CardsCSS.card}>
				  <div className= {CardsCSS.card__inner}>
					<div style={{background: flashcard.bgcolor}} className= {CardsCSS.card__face__front}>	
					  <img className = {CardsCSS.img} src={flashcard.imageURL}></img>
					  <p style={{color: flashcard.txtcolor}} className= {CardsCSS.p}>{flashcard.frontText}</p>
					</div>
					<div style={{background: flashcard.bgcolor}} className= {CardsCSS.card__face__back}>
					<p style={{color: flashcard.txtcolor}} className= {CardsCSS.p}>{flashcard.backText}</p>
					</div>
				  </div>
				</div>
			)};
			</div>
			);
		})}
		<script src="main.js"></script>

		{/* popups for right and wrong*/}
		<div className = {CardsCSS.button__container}>
			<div>
			<button className= {CardsCSS.button} onClick={() => {
         		 setOpen(o => !o);
          		nextSlide();
          	}}>YES</button>	
			<Popup open={open} closeOnDocumentClick onClose={closeModal}>
          		<div className="modal">
            		<button className= {CardsCSS.button} onClick={closeModal}>Close</button>
              		Good Job!
          		</div>
        	</Popup>
			<button className= {CardsCSS.button} onClick={() => {
         		 setOpenNo(o => !o);
          		 nextSlide();
          	}}>NO</button>	
			<Popup open={openNo} closeOnDocumentClick onClose={closeModalNo}>
          		<div className="modal">
            		<button className= {CardsCSS.button} onClick={closeModalNo}>Close</button>
              		Youll get it next time!
          		</div>
        	</Popup>
					<button className= {CardsCSS.button}><Link to="/Main">Home</Link></button>
				</div>
				</div>
				</body>
    );
  }
  
  export default Cards;