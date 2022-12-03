import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, storage } from "../Firebase";
import { Link, useNavigate } from "react-router-dom";
import ImageCSS from './CardFolderImage.module.css';
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";

function ImageUpload() {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    const [image , setImage] = useState(null);
    const [imageList , setImageList] = useState([]);
    const imageListRef = ref(storage, "images/");
    const upload = () => {
      if(image == null)
        return;
      const imageRef = ref(storage, `images/${image.name}`);
      uploadBytes(imageRef, image).then(() =>{alert("Uploaded Image")});

      window.location.reload();
    }

    useEffect(() => {
        listAll(imageListRef).then(response => {
            response.items.forEach(item => {
                getDownloadURL(item).then(url => {
                    setImageList(prev => [...prev, url]);
                });
            });
        });
    }, []);

    /*useEffect(() => {
        if (loading) return;
        if (!user) return navigate("/");
        ImageUpload();
    }, [user, loading]);*/
      
      return (
        <body className = {ImageCSS.body}>
        <div className = {ImageCSS.imageUpload}>
            <div className = {ImageCSS.library}>
                {imageList.map((url) => {
                    return <img src = {url} className = {ImageCSS.images} />;
                    })}
            </div>
            <button className = {ImageCSS.button}><Link to="/Main">Home</Link></button>
            <input className = {ImageCSS.inputButton} type = "file" onChange = {(e) => {setImage(e.target.files[0])}}/>
            <button className = {ImageCSS.button} onClick = {upload} >Upload</button>
        </div>
        </body>
      );
    }
      
    export default ImageUpload;