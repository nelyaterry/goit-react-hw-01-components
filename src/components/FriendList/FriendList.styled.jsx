import styled from "@emotion/styled";

export const Friends = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 12px;
  margin: 0;
  width: 400px;
`;

export const Frienditem = styled.li`
  display: flex;
  align-items: center;
  min-height: 50px;
  margin-bottom: 10px;
  padding: 12px 24px;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.15) 2px 2px 3px;
  background-color: rgba(228, 228, 228, 0.5);
`;

export const IsOnline = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 24px;
  background-color: ${(props) => {
    return props.isOnline ? "#1cb15c" : "#f72500";
  }};
`;

export const Avatar = styled.img`
  margin-right: 24px;
  border-radius: 10px;
  border: 1px solid black;
`;

export const Name = styled.p`
  color: black;
`;
