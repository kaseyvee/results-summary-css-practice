import React from 'react';

function SkillCard(props) {
  return (
    <div className={`skillcard skillcard-${props.datum.category}`}>

      <div className='skillcard-category'> 
        <img src={`/public/assets/icon-${props.datum.category.toLowerCase()}.svg`} alt={`${props.datum.category} icon`} />
        <p>{props.datum.category}</p>
      </div>

      <div className='skillcard-score'>
        <h4 className='actual'>{props.datum.score} </h4>
        <h4 className='total'>/ 100</h4>
      </div>

    </div>
  );
}

export default SkillCard;