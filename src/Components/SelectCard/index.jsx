import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

import './selectCard.css'

function SelectCard(props) {

  const [selected, setSelected] = useState(false);

  const onSelect = () => {
    props.onSelect();
    setSelected(true);
  }

  const onResetProp = props.onReset;
  const resetProp = props.reset;

  useEffect(() => {
    let timer;
    const onReset = () => {
      onResetProp();
      timer = setTimeout(() => {
        setSelected(false);
      }, 2000)

    }

    if(resetProp)
    {
      onReset();
    }

    return () => clearTimeout(timer);
  }, [resetProp, onResetProp])

  return (
    <>
      
      <div 
        className={classNames('selectCard',{active: props.active}, {selected: selected}, props.className)}
        style={props.style}
        onClick={onSelect}
        >
        <div className={classNames('label')}>{props.dataKey + 1}</div>
        <div className="selectCardInner">
          <div className="selectCardBack" />  
        </div> 
      </div>
    </>
  )
}

export default SelectCard;