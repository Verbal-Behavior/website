import react from "react";
import CFolderCSS from './CreateFolderPage.module.css';

function CreateFolderPage() {

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
      </form>
    </div>
  );
}
 
export default CreateFolderPage;