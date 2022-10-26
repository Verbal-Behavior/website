import react from "react";
import CCardCSS from './CreateCardPage.module.css';

function CreateCardPage() {

  return (
    <div>
    <div className= {CCardCSS.create}>
      <h2 className= {CCardCSS.h2}>Create a Card</h2>
    </div>
      <form className= {CCardCSS.form}>
        <label className= {CCardCSS.label} >Card Front:</label>
        <input className= {CCardCSS.input} 
    
        />

        <label className= {CCardCSS.label}>Card Back:</label>
        <input className= {CCardCSS.input}
    
        />

        <label className= {CCardCSS.label}>Choose Folder:</label>
        <select className= {CCardCSS.select}
          
        >
          <option className= {CCardCSS.option}>Test Folder 1</option>
          <option className= {CCardCSS.option}>Test Folder 2</option>
        </select>
        <button className= {CCardCSS.button}>Create</button>
      </form>
    </div>
  );
}
 
export default CreateCardPage;