import {React, useState, useEffect } from 'react';

import ChoiceCard from '../../ChoiceCard'

import {cardInfo, highDeck, commonDeck} from '../../Card/cardInfo';

function Cross(props) {



  const [swordsDeck, setSwordsDeck] = useState([]);
  const [coinsDeck, setCoinsDeck] = useState([]);
  const [starsDeck, setStarsDeck] = useState([]);
  const [glyphsDeck, setGlyphsDeck] = useState([]);
  const [commonDeckList, setCommonDeck] = useState([]);
  const [highDeckList, setHighDeck] = useState([]);
  const [allCardsList, setAllCards] = useState([]);

  useEffect(() => {
    const shuffledSwordsDeck = Object.values(commonDeck.swords).sort(() => 0.5 - Math.random());
    const shuffledCoinsDeck = Object.values(commonDeck.coins).sort(() => 0.5 - Math.random());
    const shuffledStarsDeck = Object.values(commonDeck.stars).sort(() => 0.5 - Math.random());
    const shuffledGlyphsDeck = Object.values(commonDeck.glyphs).sort(() => 0.5 - Math.random());
    const shuffledCommonDeck = [
      ...shuffledCoinsDeck,
      ...shuffledGlyphsDeck,
      ...shuffledStarsDeck,
      ...shuffledSwordsDeck
    ].sort(() => 0.5 - Math.random());
    const shuffledHighDeck = Object.values(highDeck).sort(() => 0.5 - Math.random());
    const allCards = [...shuffledCommonDeck, ...shuffledHighDeck].sort(() => 0.5 - Math.random());

    setSwordsDeck(shuffledSwordsDeck);
    setCoinsDeck(shuffledCoinsDeck);
    setStarsDeck(shuffledStarsDeck);
    setGlyphsDeck(shuffledGlyphsDeck);
    setCommonDeck(shuffledCommonDeck);
    setHighDeck(shuffledHighDeck);
    setAllCards(allCards);
  }, [])

  const getCardInfo = (cardKey, index, defaultDeck) => {
    // console.log(cardKey + " " + index + " " + defaultDeck);
    const savedCardInfo = JSON.parse(localStorage.getItem(cardKey));
    const deck = savedCardInfo?.deck || defaultDeck || 0;
    const card = savedCardInfo?.card || 'random';
    if(cardKey == 'cross1') {
      console.log(deck);
      console.log(card);
    }
    switch (deck) {
      default:
      case 0:
        return getCard(allCardsList, card, index);
      case 1:
        return getCard(highDeckList, card, index);
      case 2:
        return getCard(commonDeckList, card, index);
      case 3:
        return getCard(swordsDeck, card, index);
      case 4:
        return getCard(starsDeck, card, index);
      case 5:
        return getCard(coinsDeck, card, index);
      case 6:
        return getCard(glyphsDeck, card, index);
    }
  }

  const getCard = (deck, card, index) => {
    if(card.localeCompare('random', 'en', { sensitivity: 'base'  }) === 0) {
      return deck[index]
      
    } else {
      return cardInfo[card];
    }
  }

  const cross1 = getCardInfo('cross1', 1, 2);
  const cross2 = getCardInfo('cross2', 2, 2);
  const cross3 = getCardInfo('cross3', 3, 2);
  const cross4 = getCardInfo('cross4', 4, 1);
  const cross5 = getCardInfo('cross5', 5, 1);

  // console.log(shuffledCommonDeck[0]);

  return (
    <div className="patternContainer">
      <div className="row">
        <ChoiceCard art={cross2} cardKey='cross2' active={props.cardTwoActive} isDMCard={props.isDMCard}/>
      </div>
      <div className="row">
        <ChoiceCard art={cross1} cardKey='cross1' active={props.cardOneActive} isDMCard={props.isDMCard}/>
        <ChoiceCard art={cross5} cardKey='cross5' active={props.cardFiveActive} isDMCard={props.isDMCard}/>
        <ChoiceCard art={cross3} cardKey='cross3' active={props.cardThreeActive} isDMCard={props.isDMCard}/>
      </div>
      <div className="row"> 
        <ChoiceCard art={cross4} cardKey='cross4' active={props.cardFourActive} isDMCard={props.isDMCard}  />
      </div>
    </div>
  )
}

export default Cross;