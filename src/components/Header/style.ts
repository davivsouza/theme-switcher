import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 5px 30px;

  width: 100%;
  height: 60px;

  font-family: Arial, sans-serif;
  color: ${(props) => props.theme.colors.text};

  background: ${(props) => props.theme.colors.primary};
`;
