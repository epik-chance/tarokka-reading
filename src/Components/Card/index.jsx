import React from 'react';
import classNames from 'classnames';
import './card.css'

function Card(props) {


  const flipCard = (event) => {
    if (props.active) {
    
      if (!event || !event.target)
        return;
      
      const target = event.target;
      target.classList.toggle('flipped')
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