import {React, useState, useEffect} from 'react';


import PlayArea from './Components/PlayArea'
import SelectArea from './Components/SelectArea'

import './reading.css'

function Reading(props) {

  const [numCardsChosen, setNumCardsChosen] =   useState(0);
  const [cardOneActive, setCardOneActive] = useState(false);
  const [cardTwoActive, setCardTwoActive] = useState(false);
  const [cardThreeActive, setCardThreeActive] = useState(false);
  const [cardFourActive, setCardFourActive] = useState(false);
  const [cardFiveActive, setCardFiveActive] = useState(false);

  const onSelectFromSelectArea = () => {
    setNumCardsChosen(numCardsChosen + 1);
  }

  useEffect(() => {
    switch(numCardsChosen) {
      case 0:
      default:
        break;
      case 1:
        setCardOneActive(true)
        break;
      case 2:
        setCardTwoActive(true)
        break;
      case 3:
        setCardThreeActive(true)
        break;
      case 4:
        setCardFourActive(true)
        break;
      case 5:
        setCardFiveActive(true)
        break;
    }
  }, [numCardsChosen])

  return (
    <div className='reading'>
        {/* <div className='deckArea highDeck'>

        </div>

        <div className='deckArea lowDeck'>

        </div> */}

        <SelectArea active={true} onSelectCard={onSelectFromSelectArea} />
        <PlayArea 
          cardOneActive={cardOneActive}
          cardTwoActive={cardTwoActive}
          cardThreeActive={cardThreeActive}
          cardFourActive={cardFourActive}
          cardFiveActive={cardFiveActive}
        />
    </div>
  )
}

export default Reading
