import CardsCSS from './CardFolderImage.module.css'
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import  {db, auth, storageRef } from "../Firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

function Cards() {
	const [flashcards, setFlashcards] = useState([]);
	const [user, loading, error] = useAuthState(auth);
	const flashcardsCollectionRef = collection(db, "flashcards");
	const navigate = useNavigate();
	const name = window.folderName;

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
	    <body>
		{flashcards.map((flashcard)=> { 
			return (
				<div className= {CardsCSS.card}>
				  <div className= {CardsCSS.card__inner}>
					<div className= {CardsCSS.card__face__front}>
					  <img src={flashcard.imageURL} height="200px" width="200px"></img>
					  <h2 className= {CardsCSS.h2}>{flashcard.frontText}</h2>
					</div>
					<div className= {CardsCSS.card__face__back}>
					  <h2 className= {CardsCSS.h2}>{flashcard.backText}</h2>
					</div>
				  </div>
				</div>
			);
		})}
		<script src="main.js"></script>
		</body>
    );
  }
  
  export default Cards;