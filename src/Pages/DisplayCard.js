import React from "react";
import { useState, useEffect } from "react";
import { collection, doc, getDocs, query, where } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import {db, auth} from "../Firebase";

function DisplayCard() {
    const [flashcards, setFlashcards] = useState([]);
    const flashcardsCollectionRef = collection(db, "flashcards");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    const mystyle = {
        color: "white",
      };

    useEffect(() => {
        if (loading) return;
        if (!user) return navigate("/Login");
        const getFlashcards = async () => {
            const q = query(flashcardsCollectionRef, where("uid", "==", user?.uid))
            const data = await getDocs(q);
            setFlashcards(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
            //console.log(data);
        }

        getFlashcards()
    }, [user, loading])
    return (
      <div className="flashcard">
        {flashcards.map((flashcard)=> { 
            return (
                <div>
                    <p style={mystyle}>Front Text: {flashcard.frontText}</p>
                    <p style={mystyle}>Back Text: {flashcard.backText}</p>
                    <p style={mystyle}>Folder Name: {flashcard.folderName}</p>
                    <p style={mystyle}>User Id: {flashcard.userId}</p>
                    <p style={mystyle}>Doc Id: {flashcard.id}</p>
                    <br></br>
                </div>
            );
        })}

      </div>
    );
  }
  
  export default DisplayCard;