import {React, useEffect, useState} from 'react';
import classNames from 'classnames';

import cardInfo from '../Card/cardInfo';
import Card from '../Card';
import SetupCard from '../SetupCard';
import Patterns from '../Patterns';

import './playArea.css';

function PlayArea(props) {
  return (
    <div className='playArea'>
      <div className="backgroundImage" />
      <Patterns {...props} />
    </div>
  )
}

export default PlayArea;