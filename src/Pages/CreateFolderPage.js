import react from "react";
import CFolderCSS from './CreateFolderPage.module.css';
import { Outlet, Link } from "react-router-dom";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import {auth} from "../Firebase";

function CreateFolderPage() {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
      if (loading) return;
      if (!user) return navigate("/");

  }, [user, loading])

  return (
    <div>
    <div className= {CFolderCSS.create}>
      <h2 className= {CFolderCSS.h2}>Create a Folder</h2>
    </div>
      <form className= {CFolderCSS.form}>
        <label className= {CFolderCSS.label}>Folder Name:</label>
        <input className= {CFolderCSS.input} 
    
        />


        <button className= {CFolderCSS.button}>Create</button>
        <div><button className= {CFolderCSS.button}><Link to="/Main">Home</Link></button></div>    
      </form>
    </div>
  );
}
 
export default CreateFolderPage;