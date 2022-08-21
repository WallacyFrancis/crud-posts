import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
`

export const Button = styled.button`
  font-family: Heebo;
  font-weight: 800;
  font-size: 1.3rem;
  padding: 5px 60px;
  color: #fff;
  background-color: #3DECB1;
  border: 0;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: #36DAA3;
    transition: 0.2s;
  }
`