import { Container } from "./App.styled";
import { Profile } from "../Profile/Profile";
import user from "../../assets/user.json";
import Statistics from "../Statistics/Statistics";
import statisticalData from "../../assets/statistical-data.json";
import FriendList from "../FriendList/FriendList";
import friends from "../../assets/friends.json";
import TransactionHistory from "../TransactionHistory/TransactionHistory";
import transactions from "../../assets/transactions.json";

const { name, tag, location, avatar, stats } = user;

export const App = () => {
  return (
    <>
      <Container>
        <Profile
          name={name}
          tag={tag}
          location={location}
          avatar={avatar}
          followers={stats.followers}
          views={stats.views}
          likes={stats.likes}
        />

        <Statistics title="Upload stats" stats={statisticalData} />
        <Statistics stats={statisticalData} />

        <FriendList friends={friends} />

        <TransactionHistory items={transactions} />
      </Container>
    </>
  );
};
