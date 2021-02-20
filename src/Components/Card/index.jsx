import React, { useEffect, useState, useCallback } from 'react';
import classNames from 'classnames';

import {cardInfo, highDeck, commonDeck} from './cardInfo';
import './card.css'

function Card(props) {

  const [selectedCard, setSelectedCard] = useState('random');
  const [selectedDeck, setSelectedDeck] = useState(0);
  
  const cardKey = props.cardKey;
  const defaultDeck = props.defaultDeck;


  // const getCardInfo = () => {
  //   const savedCardInfo = localStorage.getItem(cardKey);

  // }

  // const getCardInfo2 = useCallback(
  //   () => {
  //     const savedCardInfo = localStorage.getItem(cardKey)
  //     const savedDeck = savedCardInfo?.deck || selectedDeck;
  //     const savedCard = savedCardInfo?.card || 'random';
  //     // console.log(selectedCard);
  //     console.log(savedCard);
  //     const cardList = getCardList(savedDeck);
  //     const card = getCard(savedCard, cardList);
  //     console.log(card);
  //     return card;
  //   },
  //   [cardKey, selectedDeck]
  // )

  // const getCardList = (deckValue) => {
  //   switch(deckValue) {
  //     default:
  //     case 0:
  //       return Object.values(cardInfo);
  //     case 1:
  //       return Object.values(highDeck);
  //     case 2:
  //       return [
  //         ...Object.values(commonDeck.swords),
  //         ...Object.values(commonDeck.coins),
  //         ...Object.values(commonDeck.stars),
  //         ...Object.values(commonDeck.glyphs)
  //       ]
  //     case 3:
  //       return Object.values(commonDeck.swords);
  //     case 4:
  //       return Object.values(commonDeck.stars);
  //     case 5:
  //       return Object.values(commonDeck.coins);
  //     case 6:
  //       return Object.values(commonDeck.glyphs);
  //   }
  // }

  // const getCard = (savedCard, cardList) => {
  //   if(savedCard === 'random') {
  //     const randomCard = Math.floor(Math.random() * cardList.length);
  //     return cardList[randomCard];
  //   } else {  
  //     return cardInfo[savedCard];
  //   }
  // }

  const flipCard = (event) => {
    console.log(props.art);
    if (props.active) {
    
      if (!event || !event.target)
        return;
      
      const target = event.target;
      target.classList.toggle('flipped')
    }
  }

  // useEffect(() => {
  //   setSelectedDeck(props.defaultDeck)
  // }, [props.defaultDeck])

  // useEffect(() => {
  //   setSelectedCard(getCardInfo2());
  // }, [getCardInfo2])

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