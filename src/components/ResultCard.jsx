import { useContext } from 'react';
import { DataContext } from '../App';

function ResultCard() {
  const data = useContext(DataContext);

  function getAverage() {
    let total = 0;

    for (let datum of data) {
      total += datum.score;
    }

    return Math.round(total / data.length);
  }

  const average = getAverage();

  return (
    <div className='resultcard'>

      <div className='resultcard-header'>
        <h3>Your Result</h3>
      </div>

      <div className='resultcard-score'>
        <h1>{average}</h1>
        <p>of 100</p>
      </div>

      <div className='resultcard-blurb'>
        <h2>Great</h2>
        <p>You scored higher than 65% of the people who have taken these tests.</p>
      </div>

    </div>
  );
}

export default ResultCard;