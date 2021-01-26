import {React, useEffect, useState} from 'react';
import classNames from 'classnames';

import cardInfo from '../../../Components/Card/cardInfo'
import Card from '../../../Components/Card'

import './playArea.css';

function PlayArea(props) {



  return (
    <div className='playArea'>
      <div className="backgroundImage" />
      <div className="row">
        <Card art={cardInfo.Healer} active={props.cardTwoActive}/>
      </div>
      <div className="row">
        <Card art={cardInfo.Illusionist} active={props.cardOneActive}/>
        <Card art={cardInfo.Artifact} active={props.cardFiveActive}/>
        <Card art={cardInfo.Conjurer} active={props.cardThreeActive}/>
      </div>
      <div className="row"> 
        <Card art={cardInfo.Ghost} active={props.cardFourActive}/>
      </div>
    </div>
  )
}

export default PlayArea;