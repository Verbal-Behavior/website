import React from 'react';
import CardsCSS from './Cards.module.css'
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import {auth} from "../Firebase";

function Cards() {
	const [user, loading, error] = useAuthState(auth);
	const navigate = useNavigate();
	const name = window.myGlobalVar;
  
	useEffect(() => {
		if (loading) return;
		if (!user) return navigate("/");
  
	}, [user, loading])
    return (
<body>
	<div className= {CardsCSS.card}>
		<div className= {CardsCSS.card__inner}>
               <div className= {CardsCSS.card__face__front}>
				<h2 className= {CardsCSS.h2}>Test Text</h2>
			</div>
			<div className= {CardsCSS.card__face__back}>
            <h2 className= {CardsCSS.h2}>Test Text</h2>
			</div>
		</div>
	</div>
	<script src="main.js"></script>
</body>
    );
  }
  
  export default Cards;