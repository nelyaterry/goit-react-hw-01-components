import PropTypes from "prop-types";
import {
  Table,
  Header,
  HeaderTh,
  Body,
  TabelRow,
  TabelDate,
} from "./TransactionHistory.styled";

const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <Header>
        <tr>
          <HeaderTh>Type</HeaderTh>
          <HeaderTh>Amount</HeaderTh>
          <HeaderTh>Currency</HeaderTh>
        </tr>
      </Header>

      <Body>
        {items.map(({ id, type, amount, currency }) => (
          <TabelRow key={id}>
            <TabelDate>{type}</TabelDate>
            <TabelDate>{amount}</TabelDate>
            <TabelDate>{currency}</TabelDate>
          </TabelRow>
        ))}
      </Body>
    </Table>
  );
};

export default TransactionHistory;

TransactionHistory.protoTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ),
};
