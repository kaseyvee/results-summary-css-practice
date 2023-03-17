import { useContext } from 'react';
import { DataContext } from '../../App';
import SkillCard from './SkillCard';

function SummaryCard() {
  const data = useContext(DataContext);

  const skillCards = data.map(datum => {
    return (
      <SkillCard datum={datum} />
    )
  })

  return (
    <div>
      {skillCards}
    </div>
  );
}

export default SummaryCard;