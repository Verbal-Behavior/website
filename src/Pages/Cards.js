import React from 'react';
import CardsCSS from './Cards.module.css'

function Cards() {
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