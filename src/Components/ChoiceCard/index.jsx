import { React, useState } from 'react';

import Card from '../Card';
import SetupCard from '../SetupCard';


function ChoiceCard(props) {
  const isDMCard = props.isDMCard;
  const cardKey = props.cardKey;
  const active = props.active;
  const art = props.art;

  if (isDMCard) {
    return (
      <SetupCard cardKey={cardKey} />
    )
  } else {
    return (
      <Card art={art} active={active} cardKey={cardKey} />
    )
  }

}

export default ChoiceCard;  