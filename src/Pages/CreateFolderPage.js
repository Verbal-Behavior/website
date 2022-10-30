import react from "react";
import CFolderCSS from './CreateFolderPage.module.css';
import { Outlet, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import {auth, db} from "../Firebase";
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
    <div>
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
        <button className= {CFolderCSS.button} onClick={createFolder}>Create</button>
        <div><button className={CFolderCSS.button}><Link to="/Main">Home</Link></button></div>    
      {/* </form> */}
    </div>
  );
}
 
export default CreateFolderPage;