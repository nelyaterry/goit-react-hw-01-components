import { Frienditem, IsOnline, Avatar, Name } from "./FriendCard.styled";

const FriendCard = ({ avatar, name, isOnline, id }) => {
  return (
    <Frienditem key={id}>
      <IsOnline isOnline={isOnline}></IsOnline>
      <Avatar src={avatar} alt={name} width="80" />
      <Name>{name}</Name>
    </Frienditem>
  );
};

export default FriendCard;
