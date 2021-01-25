import React, { useState } from 'react';
import classNames from 'classnames';

import './card.css'

function Card(props) {

  const flipCard = (event) => {

    if (props.active) {
      console.log('Clicked');
    
      if (!event || !event.target)
        return;
      
      const target = event.target;
      target.classList.toggle('flipped')
      console.log(props.art);
    }
  }

  return (
    <div className={classNames('card', {active: props.active})} onClick={ flipCard }>
      <div className="cardInner">
        <div className="cardFront" style={{backgroundImage: `url(${props.art}`}} />
        <div className="cardBack" />  
      </div> 
    </div>
  )
}

export default Card;