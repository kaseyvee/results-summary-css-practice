import React from 'react';

function SkillCard(props) {
  return (
    <div className='skillcard'>

      <div className='skillcard-category'> 
        <img src={props.datum.icon} alt={`${props.datum.category} icon`} />
        <h3>{props.datum.category}</h3>
      </div>

      <div className='skillcard-score'>
        <h3>{props.datum.score} / 100</h3>
      </div>

    </div>
  );
}

export default SkillCard;