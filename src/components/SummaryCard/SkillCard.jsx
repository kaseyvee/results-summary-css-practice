import React from 'react';
import memory from "../../../public/assets/memory.svg";
import reaction from "../../../public/assets/reaction.svg";
import verbal from "../../../public/assets/verbal.svg";
import visual from "../../../public/assets/visual.svg";

function SkillCard(props) {

  function getIcon() {
    if (props.datum.category === "Memory") return memory;
    if (props.datum.category === "Reaction") return reaction;
    if (props.datum.category === "Verbal") return verbal;
    if (props.datum.category === "Visual") return visual;
  }

  const icon = getIcon();

  return (
    <div className={`skillcard skillcard-${props.datum.category}`}>

      <div className='skillcard-category'> 
        <img src={icon} alt={`${props.datum.category} icon`} />
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