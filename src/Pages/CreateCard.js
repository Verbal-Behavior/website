import React, { useEffect, useState } from "react";
import { collection, doc, getDocs, addDoc } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { db, auth } from "../Firebase";

function CreateCard() {

    const flashcardsCollectionRef = collection(db, "flashcards");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    const [frontText, setFrontText] = useState("");
    const [backText, setBackText] = useState("");
    const [folderName, setFolderName] = useState("");
    
    const createFlashcard = async () => {
        await addDoc(
            flashcardsCollectionRef, 
            {
            frontText: frontText, 
            backText: backText, 
            folderName: folderName, 
            userId: user?.uid
            } 
        )
    };

    useEffect(() => {
        if (loading) return;
        if (!user) return navigate("/Login");

    }, [user, loading])

    return (
      <div className="create">
      
        <input 
            placeholder="Front Text" 
            onChange={(event) => {
                setFrontText(event.target.value);
            }}
        />
        <input 
            placeholder="Back Text" 
            onChange={(event) => {
                setBackText(event.target.value);
            }}
        />
        <input 
            placeholder="Folder Name" 
            onChange={(event) => {
                setFolderName(event.target.value);
            }}
        />
        <button onClick={createFlashcard}>Create Flashcard</button>
        <button2>Color</button2>
      </div>
    );
  }
  
  export default CreateCard;