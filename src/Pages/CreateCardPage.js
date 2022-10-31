import react from "react";
import CCardCSS from './CreateCardPage.module.css';
import { Outlet, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import {db, auth} from "../Firebase";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";

function CreateCardPage() {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const [folders, setFolders] = useState([]);
  const folderCollectionRef = collection(db, "folders");
  const flashcardsCollectionRef = collection(db, "flashcards");
  const [frontText, setFrontText] = useState("");
  const [backText, setBackText] = useState("");
  const [folderName, setFolderName] = useState("");

  const getFolders = async () => {
    const q = query(folderCollectionRef, where("uid", "==", user?.uid))
    const data = await getDocs(q);
    setFolders(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
  };

  const createFlashcard = async () => {
    await addDoc(
        flashcardsCollectionRef, 
        {
        frontText: frontText, 
        backText: backText, 
        folderName: folderName, 
        uid: user?.uid
        }
      )
  };

  function logdata() {
    console.log(frontText); 
    console.log(backText);
    console.log(folderName);
  };

  useEffect(() => {
      if (loading) return;
      if (!user) return navigate("/");
      getFolders();

  }, [user, loading])

  return (
    <div>
    <div className= {CCardCSS.create}>
      <h2 className= {CCardCSS.h2}>Create a Card</h2>
    </div>
      {/* <form className= {CCardCSS.form}> */}
        <label className= {CCardCSS.label} >Card Front:</label>

        <input className= {CCardCSS.input} 
          placeholder="Front Text" 
          onChange={(event) => {
            setFrontText(event.target.value);
          }}
        />

        <label className= {CCardCSS.label}>Card Back:</label>
        <input className= {CCardCSS.input}
          placeholder="Back Text" 
          onChange={(event) => {
              setBackText(event.target.value);
          }}
        />

        <label className= {CCardCSS.label}>Choose Folder:</label>
        <select className= {CCardCSS.select}
            onChange={(event) => {
              setFolderName(event.target.value);
          }}
        >
          <option className= {CCardCSS.option}></option>
        {folders.map((folder, index) => {
          return (
            <option className= {CCardCSS.option} key={index}>{folder.name}</option>
          );
        })}
          
        </select>
        
        <div>
        <button className= {CCardCSS.button}><Link to="/Main">Home</Link></button>
        <button className= {CCardCSS.button} onClick={createFlashcard}>Create</button>
        </div>
        {/* </form>       */}

    </div>
  );
}
 
export default CreateCardPage;