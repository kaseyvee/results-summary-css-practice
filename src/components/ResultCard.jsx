import React from 'react';

function ResultCard(props) {
  const data = props.data;
  console.log(data)

  function getAverage() {
    let total = 0;

    for (let datum of data) {
      total += datum.score;
    }

    return Math.round(total / data.length);
  }

  const average = getAverage();

  return (
    <div className='ResultCard'>
      
      <h3>Your Result</h3>

      <div>
        <h1>{average}</h1>
        <p>of 100</p>
      </div>

      <div>
        <h2>Great</h2>
        <p>You scored higher than 65% of people who have taken these tests.</p>
      </div>

    </div>
  );
}

export default ResultCard;