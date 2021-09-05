import PropTypes from "prop-types";

import { Container } from "../../assets/Container.styled";
import {
  Description,
  Avatar,
  Name,
  Tag,
  Location,
  Stats,
  Stat,
  Label,
  Quantity,
} from "./Profile.styled";

export const Profile = ({
  name,
  tag,
  location,
  avatar,
  followers,
  views,
  likes,
}) => {
  return (
    <Container>
      <Description>
        <Avatar src={avatar} alt="Аватар пользователя" />
        <Name>{name}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <Stats>
        <Stat>
          <Label>Followers</Label>
          <Quantity>{followers}</Quantity>
        </Stat>
        <Stat>
          <Label>Views</Label>
          <Quantity>{views}</Quantity>
        </Stat>
        <Stat>
          <Label>Likes</Label>
          <Quantity>{likes}</Quantity>
        </Stat>
      </Stats>
    </Container>
  );
};

Profile.propTypes = {
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};
