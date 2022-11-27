import {
  StatisticBox,
  StatisticText,
  StatisticCounter,
} from './StatisticItem.styled';
import { IconContext } from 'react-icons/lib';

export const StatisticItem = ({ title, total, icon }) => {
  return (
    <StatisticBox>
      <IconContext.Provider value={{ size: 30, color: 'tomato' }}>
        {icon}
      </IconContext.Provider>

      <StatisticCounter>{total}</StatisticCounter>
      <StatisticText>{title}</StatisticText>
    </StatisticBox>
  );
};
