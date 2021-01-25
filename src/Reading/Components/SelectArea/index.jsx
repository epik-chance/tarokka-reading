import {React, useEffect, useState} from 'react';
import classNames from 'classnames';

import SelectCard from '../SelectCard';

import './selectArea.css'

function SelectArea(props) {
  const [isActive, setActive] = useState(false);

  const length = 14;

  useEffect(() => {
    const timer = setTimeout(() => {
      setActive(true)
    }, 3000)
    return () => clearTimeout(timer);
  }, []);

  const setStyle = (i) => {
    const documentWidth = window.innerWidth * 0.96;
    const left = (documentWidth - 267.5) * i / 14;
    const style = {
      left: isActive ? left : 0,
    }
    return style;
  }

  const areaActive = {
    opacity: 1
  }

  return (
    <div className='selectArea' style={isActive ? areaActive : {}}>
    {console.log(isActive)}
      { Array.from(new Array(length), (_, i) => ( <SelectCard key={i} style={setStyle(i)} className={classNames({'spread': isActive})} />)) }
    </div>
  )
}

export default SelectArea;