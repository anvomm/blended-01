import { formatArticleDate } from 'service/formatdate';

import {
  Card,
  CardHeader,
  CardPoster,
  CardBody,
  CardFooter,
  Avatar,
  Tag,
  CardTitle,
  CardText,
  UserBox,
  UserInfo,
  UserName,
  Date,
} from './BlogCard.styled';

export const BlogCard = ({
  data: { poster, tag, title, description, name, avatar, postedAt },
}) => {
  return (
    <Card>
      <CardHeader>
        <CardPoster src={poster} alt={name} />
      </CardHeader>
      <CardBody>
        <Tag>{tag}</Tag>
        <CardTitle>{title}</CardTitle>
        <CardText>{description}</CardText>
      </CardBody>
      <CardFooter>
        <UserBox>
          <Avatar src={avatar} alt={name} />
          <UserInfo>
            <UserName>{name}</UserName>
            <Date>{formatArticleDate(postedAt)}</Date>
          </UserInfo>
        </UserBox>
      </CardFooter>
    </Card>
  );
};
