import React, { useEffect, useState } from "react";
import CFolderCSS from './CardFolderImage.module.css';
import { Outlet, Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../Firebase";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";

function CreateFolderPage() {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const [folderName, setFolderName] = useState("");
  const folderCollectionRef = collection(db, "folders");

  const createFolder = async () => {
    await addDoc(
        folderCollectionRef, 
        {
        name: folderName, 
        uid: user?.uid
        }
      )
  };

  useEffect(() => {
      if (loading) return;
      if (!user) return navigate("/");

  }, [user, loading])

  return (
    <div className= {CFolderCSS.body}>
    <div className= {CFolderCSS.create}>
      <h2 className= {CFolderCSS.h2}>Create a Folder</h2>
    </div>
      {/* <form className= {CFolderCSS.form}> */}
        <label className= {CFolderCSS.label}>Folder Name:</label>
        <input className= {CFolderCSS.input} 
            onChange={(event) => {
              setFolderName(event.target.value);
          }}
        />
        <div>
        <button className={CFolderCSS.button}><Link to="/Main">Home</Link></button>
        <button className= {CFolderCSS.button} onClick={createFolder}>Create</button>
        </div>
        
      {/* </form> */}
    </div>
  );
}
 
export default CreateFolderPage;