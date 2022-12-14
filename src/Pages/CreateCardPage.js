import React, { useEffect, useState } from "react";
import CCardCSS from './CardFolderImage.module.css';
import { Outlet, Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { db, auth, storageRef } from "../Firebase";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
import { listAll } from "firebase/storage";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

//popup imports
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


//color imports
import Block from '@uiw/react-color-block';

//font imports
import FontPicker from "font-picker-react";


function CreateCardPage() {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
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

//Image Storage Variables
const [images, setImages] = useState([]);
const [imageName, setImageName] = useState("");
const storage = getStorage();
const imagesRef = ref(storage, `${user?.uid}/${imageName}`);
const imageRef = ref(storage, `${user?.uid}/${imageName}`);

//Custom Function to retrieve the Image Path
const url = getDownloadURL(imageRef).then(function(url) {
    imagePath = url;});

var imagePath = "";

// Custom Function to List all Files
const listItem = () => {
  listAll(imagesRef)
    .then(res => {
      res.items.forEach((item) => {
        setImages(arr => [...arr, item.name]);
      })
    })
    .catch(err => {
      alert(err.message);
    })
}

  //Const for Fonts
  const [activeFontFamily, setFont] = useState("Open Sans");

  const getFolders = async () => {
    const q = query(folderCollectionRef, where("uid", "==", user?.uid))
    const data = await getDocs(q);
    setFolders(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
  };

  //Custom Function to Create Flashcard & Store to DB
  const createFlashcard = async () => {
    await addDoc(
        flashcardsCollectionRef, 
        {
        frontText: frontText, 
        backText: backText, 
        folderName: folderName, 
        txtcolor: hex2,
        bgcolor: hex,
        image: imageName,
        imageURL: imagePath,
        uid: user?.uid
        }
      )
  };

  //Custom Function to Check User & Load Images/Folders  
  useEffect(() => {
      if (loading) return;
      if (!user) return navigate("/");
      getFolders();
      listItem();
      

  }, [user, loading])
  
  return (
    <div className= {CCardCSS.body}>
    <div className= {CCardCSS.create}>
      <h2 className= {CCardCSS.h2}>Create a Card</h2>
    </div>

        <form className= {CCardCSS.form}>
        <h2 className= {CCardCSS.label} >Card Front:</h2>

        <input className= {CCardCSS.input} 
          placeholder="Front Text" 
          onChange={(event) => {
            setFrontText(event.target.value);
          }}
        />

        <h2 className= {CCardCSS.label}>Card Back:</h2>
        <input className= {CCardCSS.input}
          placeholder="Back Text" 
          onChange={(event) => {
              setBackText(event.target.value);
          }}
        />

        <h2 className= {CCardCSS.label}>Choose Folder:</h2>
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

        <h2 className= {CCardCSS.label}>Choose Image:</h2>
        <select className= {CCardCSS.select}
            onChange={(event) => {
              setImageName(event.target.value);
          }}
        >

        <select id = 'select' onChange = "return fontChange();">
	      </select> 

          <option className= {CCardCSS.option}></option>
        
        {/* CUSTOM FUNCTION TO MAP IMAGES TO DROP DOWN */}
        {images.map((image, index) => {
          return (
            <option className= {CCardCSS.option} key={index}>{image}</option>
          );
        })} 
        </select>
        </form>
        
        {/*Home Button Button*/}
        <div>
        <div className= {CCardCSS.buttons}>
        <button className= {CCardCSS.button}><Link to="/Main">Home</Link></button>

        <button className= {CCardCSS.button} onClick={() => {
          setOpen(o => !o);
          createFlashcard();
          }} >Create</button>

        <button className= {CCardCSS.button}>Click Me</button>

        {/*Create Button and PopUp*/}
        <Popup open={open} closeOnDocumentClick onClose={closeModal}>
          <div className="modal">
            <button className= {CCardCSS.button} onClick={closeModal}>Close</button>
              You Just Made a Card
          </div>
        </Popup>
        </div>
        </div>
        {/*color*/}
        <label className= {CCardCSS.HexCenter}>
        <div className= {CCardCSS.Hex} style={{ background: hex}}>
        BackGround</div>
        </label>
 
        {/*Text Color*/}
        <label className= {CCardCSS.HexCenter}>
        <div className= {CCardCSS.Hex} style={{ background: hex2}} >
        Text Color</div>
        </label>

        {/*Test Text for Font*/}
        <label className= {CCardCSS.FontChangeCenter}>
        <div className= {CCardCSS.Textfont}>
        <p className="apply-font">This is you test sentence, how does it look?</p>
        </div>
        </label>

        <div className= {CCardCSS.buttons}>
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