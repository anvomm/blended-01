import { ForbesListItem } from 'components';
/* import { Avatar } from 'components/BlogCard/BlogCard.styled'; */
import {
  BoardHeader,
  LeaderBoard,
  BoardTitle,
  TitleTop,
  TitleBottom,
  LeaderBoardProfiles,
} from './ForbesList.styled';

export const ForbesList = ({ forbes }) => {
  return (
    <LeaderBoard>
      <BoardHeader>
        <BoardTitle>
          <TitleTop>Forbes</TitleTop>
          <TitleBottom>Leader board</TitleBottom>
        </BoardTitle>
      </BoardHeader>

      <LeaderBoardProfiles>
        {forbes.map(({ id, name, capital, avatar, isIncrease }) => {
          return (
            <ForbesListItem
              key={id}
              name={name}
              capital={capital}
              avatar={avatar}
              isIncrease={isIncrease}
            />
          );
        })}
        {/* Довільна кіл-сть FriendListItem */}
      </LeaderBoardProfiles>
    </LeaderBoard>
  );
};
