import react from "react";
import CCardCSS from './CreateCardPage.module.css';
import { Outlet, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import {db, auth} from "../Firebase";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";

//popup imports
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

//color imports
import Block from '@uiw/react-color-block';

//font imports
import FontPicker from "font-picker-react";


function CreateCardPage() {
  const [hex, setHex] = useState("#fff");
  const [hex2, setHex2] = useState("#fff");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const [folders, setFolders] = useState([]);
  const folderCollectionRef = collection(db, "folders");
  const flashcardsCollectionRef = collection(db, "flashcards");
  const [frontText, setFrontText] = useState("");
  const [backText, setBackText] = useState("");
  const [folderName, setFolderName] = useState("");

  //Const for Fonts
  const [activeFontFamily, setFont] = useState("Open Sans");

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
        
        {/*Home Button Button*/}
        <div>
        <button className= {CCardCSS.button}><Link to="/Main">Home</Link></button>

        {/*Create Button and PopUp*/}
  <Popup
    trigger={<button className= {CCardCSS.button} onClick={createFlashcard}>Create</button>}
    modal
    nested
  >
{close => (
      <div className="modal">
        <div className="header"> You Just Created A Card </div>
        <div className="content">

        <div>
        <div className="actions">
          <button
            className="button"
            onClick={() => {
              console.log('Exit');
              close();
            }}
          >
            Exit
          </button>
      </div>
       </div>
        </div>
         </div>
    )}
  </Popup>
        
        {/*color*/}
        <div style={{ background: hex, marginTop: 30, padding: 10 }}>
        {hex}
        </div>

        {/*Text Color*/}
        <div style={{ background: hex2, marginTop: 30, padding: 10 }}>
        {hex2}
        </div>

        {/*Test Text for Font*/}
        <div className= {CCardCSS.Textfont}>
        <p className="apply-font">This is you test sentence, how does it look?</p>
        </div>


  <Popup
    trigger={<button className={CCardCSS.button}> Color </button>}
    modal
    nested
  >
{close => (
      <div className="modal">
        <div className="header"> Choose Color </div>
        <div className="content">
        <div>
    <>
      <Block
        color={hex}
        onChange={(color) => setHex(color.hex)}
      />
    </>
        </div>
        </div>
        <div className="actions">

          <button
            className="button"
            onClick={() => {
              console.log('Exit');
              close();
            }}
          >
            Exit
          </button>
        </div>
      </div>
    )}
  </Popup>


  {/*Text Color Pick*/}
  <Popup
    trigger={<button className={CCardCSS.button}> Text Color </button>}
    modal
    nested
  >
{close => (
      <div className="modal">
        <div className="header"> Choose Font Color </div>
        <div className="content">
        <div>
    <>
      <Block
        color={hex2}
        onChange={(color) => setHex2(color.hex)}
      />
    </>
        </div>
        </div>
        <div className="actions">

          <button
            className="button"
            onClick={() => {
              console.log('Exit');
              close();
            }}
          >
            Exit
          </button>
        </div>
      </div>
    )}
  </Popup>
  
  <Popup
    trigger={<button className={CCardCSS.button}> Font </button>}
    modal
    nested
  >
{close => (
      <div className="modal">
        <div className="header"> Choose Font </div>
        <div className="content">
        <div>
    <>
      {/*Font dropdown In the popup*/}

      <div>
        <FontPicker
          apiKey="AIzaSyCk5zrYl8LSTgkUC1S_b5m1AKhtuy95sjM"
          activeFontFamily={activeFontFamily}
          onChange={(nextFont) => setFont(nextFont.family)}
        />
      </div>

      {/*Test Text for Font*/}

      <p className="apply-font">This is you test sentence, how does it look?</p>

    </>
        </div>
        </div>
        <div className="actions">

          <button
            className="button"
            onClick={() => {
              console.log('Exit');
              close();
            }}
          >
            Exit
          </button>
        </div>
      </div>
    )}
  </Popup>
        </div>
    </div>
  );
}

export default CreateCardPage;