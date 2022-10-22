import React from 'react';
import CardsCSS from './Cards.module.css'

function Cards() {
    return (
    <body className= {CardsCSS.body}>
    <div className= {CardsCSS.container}>
        <div className= {CardsCSS.content}>
            <h1 className= {CardsCSS.h1}>Test Text</h1>
        </div>
        
        <div className= {CardsCSS.Flip}></div>
    </div>
    <div className= {CardsCSS.YesNo}>
        <input className= {CardsCSS.Yes}
                type="button"
                class="btn solid"
                onClick=""
                value="Yes"
            />
                    
        <input className= {CardsCSS.No}
                type="button"
                class="btn solid"
                onClick=""
                value="No"
            />
        
        </div>
    </body>
    );
  }
  
  export default Cards;