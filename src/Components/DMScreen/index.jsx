import {React, useEffect, useState} from 'react';
import classNames from 'classnames';

import cardInfo from '../Card/cardInfo'
// import Card from '../../../Components/Card'
import SetupCard from '../SetupCard'

import './dmscreen.css';

function DMArea(props) {



  return (
    <div className='playArea'>
      <div className="backgroundImage" />
      <div className="row">
        <SetupCard cardKey='cross2' />
      </div>
      <div className="row">
        <SetupCard cardKey='cross1' />
        <SetupCard cardKey='cross5' />   
        <SetupCard cardKey='cross3' />
      </div>
      <div className="row"> 
        <SetupCard cardKey='cross4' />
      </div>
    </div>
  )
}

export default DMArea;