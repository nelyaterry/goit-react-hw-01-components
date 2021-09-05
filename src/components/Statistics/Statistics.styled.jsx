import styled from "@emotion/styled";

export const Title = styled.h2`
  color: black;
  font-size: 40px;
  margin: 60px 0;
  text-align: center;
`;

export const StatsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 0;
  margin: 0;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: calc(100% / 5);
  padding: 20px 0;
`;

export const Span = styled.span`
  color: rgb(255, 255, 255);
`;
