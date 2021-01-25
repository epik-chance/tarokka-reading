import React from 'react';

import cardInfo from '../Components/Card/cardInfo'
import Card from '../Components/Card'

import SelectArea from './Components/SelectArea'

import './reading.css'

function Reading(props) {


  return (
    <div className='reading'>
        {/* <div className='deckArea highDeck'>

        </div>

        <div className='deckArea lowDeck'>

        </div>

        <SelectArea active={true} /> */}
        <div className='playArea'>
          <div className="backgroundImage" />
          <div className="row">
            <Card art={cardInfo.Healer} active={true}/>
          </div>
          <div className="row">
            <Card art={cardInfo.Illusionist} active={true}/>
            <Card art={cardInfo.Artifact} active={true}/>
            <Card art={cardInfo.Conjurer} active={true}/>
          </div>
          <div className="row"> 
            <Card art={cardInfo.Ghost} active={true}/>
          </div>
        </div>
    </div>
  )
}

export default Reading
