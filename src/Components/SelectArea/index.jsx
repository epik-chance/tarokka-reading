import {React, useEffect, useState} from 'react';
import classNames from 'classnames';

import SelectCard from '../SelectCard';

import './selectArea.css'

function SelectArea(props) {
  const [isActive, setActive] = useState(false);
  const [isDeckSpread, setDeckSpread] = useState(false);
  const [numCardsChosen, setNumCardsChosen] = useState(0);
  const [reset, setReset] = useState(false);

  const length = 20;

  useEffect(() => {
    let deckSpreadTimer;
    const timer = setTimeout(() => {
      setActive(true)
      deckSpreadTimer = setTimeout(() => {
        setDeckSpread(true);
      }, 1000)
    }, 1000)
    return () => {
      clearTimeout(timer);
      clearTimeout(deckSpreadTimer);
    }
  }, []);

  const setStyle = (i) => {
    const documentWidth = window.innerWidth * 0.96;
    const left = (documentWidth - 267.5) * i / length;
    const midPoint = length / 2;
    const rotation = (i - midPoint) * 1.5;
    const translateY = (Math.abs(i - midPoint) * 7) - 20;
    const transform = `rotate(${rotation}deg) translateY(${translateY}px) rotate(${rotation / 4}deg)`
    let style = {
      left: 0
    }
    if (isDeckSpread) {
      style = {
        left,
        transform,
      }
    }

    return style;
  }

  const areaActive = {
    opacity: 1
  }

  useEffect(() => {
    if(numCardsChosen >= 5) {
      setTimeout(() => {
        setDeckSpread(false);
        setTimeout(() => {
          setActive(false);
          startReset();
        }, 2000);
      }, 2000)
    }
  }, [numCardsChosen])

  const onSelect= () => {
    props.onSelectCard();
    setNumCardsChosen(numCardsChosen + 1);
  }

  const startReset = () => {
    setNumCardsChosen(0);
    setReset(true);
  }

  const onReset = () => {
    setReset(false);
  }

if(props.active) {
  return (
    <div className='selectArea' style={isActive ? areaActive : {}}>
      { Array.from(new Array(length), (_, i) => ( 
        <SelectCard
          key={i}
          dataKey={i}
          style={setStyle(i)}
          onSelect={onSelect}
          onReset={onReset}
          reset={reset}
          className={classNames({'spread': isDeckSpread})}
        />  
      )) }
    </div>
  )
} else {
  return ([]);
}

}

export default SelectArea;