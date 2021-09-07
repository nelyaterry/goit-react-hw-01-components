import PropTypes from "prop-types";

import FriendCard from "../FriendCard/FriendCard";
import { Friends } from "./FriendList.styled";

const FriendList = ({ friends }) => {
  return (
    <Friends>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendCard avatar={avatar} name={name} isOnline={isOnline} key={id} />
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
