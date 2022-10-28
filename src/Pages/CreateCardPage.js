import react from "react";
import CCardCSS from './CreateCardPage.module.css';
import { Outlet, Link } from "react-router-dom";

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
        <div><button className= {CCardCSS.button}><Link to="/Main">Home</Link></button></div>      
      </form>
    </div>
  );
}
 
export default CreateCardPage;