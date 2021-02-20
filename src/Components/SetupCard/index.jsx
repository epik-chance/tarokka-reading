import React, { useState } from 'react';
import classNames from 'classnames';
import { Dropdown } from 'semantic-ui-react';

import {cardInfo, commonDeck, highDeck} from '../../Components/Card/cardInfo'

import './setupCard.css'

function SetupCard(props) {

  const [deckChoice, setDeckChoice] = useState(0)

  const deckOptions = [
    {key: 'allDecks', value:  0, text: 'All Decks'},
    {key: 'high', value: 1, text: 'High Deck'},
    {key: 'common', value: 2, text: 'Common Deck'},
    {key: 'swords', value: 3, text: 'Swords Deck'},
    {key: 'stars', value: 4, text: 'Stars Deck'},
    {key: 'coins', value: 5, text: 'Coins Deck'},
    {key: 'glyphs', value: 6, text: 'Glyphs Deck'},
  ]

  const cardOptions = (deckValue) => {
    switch(deckValue) {
      default:
      case 0:
        return Object.keys(cardInfo);
      case 1:
        return Object.keys(highDeck);
      case 2:
        return [
          ...Object.keys(commonDeck.swords),
          ...Object.keys(commonDeck.coins),
          ...Object.keys(commonDeck.stars),
          ...Object.keys(commonDeck.glyphs)
        ]
      case 3:
        return Object.keys(commonDeck.swords);
      case 4:
        return Object.keys(commonDeck.stars);
      case 5:
        return Object.keys(commonDeck.coins);
      case 6:
        return Object.keys(commonDeck.glyphs);
    }
  }

  const getCardOptions = () => {
    const deck = cardOptions(deckChoice);
    const deckOptions = deck.map((x) => {
      return ({
        key: x,
        value: x,
        text: x,
      })
    })
    return [...deckOptions, {key: 'random', value: 'Random', text: 'Random'}];
  }

  const onChangeDeck = (event, {value}) => {
    setDeckChoice(value);
  }

  const onChangeCard = (event, {value}) => {
    localStorage.setItem(props.cardKey, JSON.stringify({deck: deckChoice, card: value}));
  }

  return (
    <div className={classNames('setupCard', {active: true})}>
      <div className="cardInner">
        <div className="selections">
          <Dropdown
            placeholder='Deck'
            fluid
            search
            selection
            onChange={onChangeDeck}
            options={deckOptions}
          />

          <Dropdown
            placeholder='Card'
            fluid
            search
            selection
            onChange={onChangeCard}
            options={getCardOptions()}
          />
        </div>

        <div className="cardBack" />  
      </div> 
    </div>
  )
}

export default SetupCard;