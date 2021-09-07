import styled from "@emotion/styled";

export const Table = styled.table`
  background-color: #ffffff;
  padding: 0;
  margin-left: auto;
  margin-right: auto;
`;

export const Header = styled.thead`
  background-color: rgb(112, 183, 224);
  color: #ffffff;
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
`;

export const HeaderTh = styled.th`
  min-width: 240px;
  padding: 12px;
`;

export const Body = styled.tbody`
  font-size: 18px;
  font-weight: 500;
  text-align: center;
`;

export const TabelRow = styled.tr`
&:nth-of-type(2n) {
  background: rgba(228, 228, 228, 0.5);;
`;

export const TabelDate = styled.td`
  padding: 12px;
`;
