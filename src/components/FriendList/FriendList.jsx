import PropTypes from "prop-types";

import {
  Friends,
  Frienditem,
  IsOnline,
  Avatar,
  Name,
} from "./FriendList.styled";

const FriendList = ({ friends }) => {
  return (
    <Friends>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <Frienditem key={id}>
          <IsOnline isOnline={isOnline}></IsOnline>
          <Avatar src={avatar} alt={name} width="80" />
          <Name>{name}</Name>
        </Frienditem>
      ))}
    </Friends>
  );
};

export default FriendList;

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
