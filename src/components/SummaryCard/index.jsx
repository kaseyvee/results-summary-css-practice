import { useContext } from 'react';
import { DataContext } from '../../App';
import Button from './Button';
import SkillCard from './SkillCard';

function SummaryCard() {
  const data = useContext(DataContext);

  const skillCards = data.map(datum => {
    return (
      <SkillCard
        key={data.indexOf(datum)}
        datum={datum}
      />
    )
  })

  return (
    <div className='summarycard'>
      <h3>Summary</h3>
      <div className='summarycard-skillcards-container'>
        {skillCards}
      </div>
      <Button />
    </div>
  );
}

export default SummaryCard;