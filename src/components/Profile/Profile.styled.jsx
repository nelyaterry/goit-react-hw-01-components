import styled from "@emotion/styled";

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: rgb(75, 75, 75);
  font-size: 20px;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  background-color: rgb(228, 228, 228);
  width: 100px;
  margin-top: 60px;
`;

export const Name = styled.p`
  color: black;
  font-size: 40px;
  margin-top: 60px;
`;

export const Tag = styled.p`
  margin-top: 20px;
`;

export const Location = styled.p`
  margin-top: 20px;
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: rgb(75, 75, 75);
  margin: 60px 0 0 0;
  padding: 0;
`;

export const Stat = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: calc(100% / 3);
  padding: 20px 0;
  background-color: rgba(129, 151, 151, 0.3);
  border: rgb(129, 151, 151) solid 1px;
`;

export const Label = styled.span``;

export const Quantity = styled.span``;
