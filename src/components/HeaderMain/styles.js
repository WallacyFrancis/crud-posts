import styled from "styled-components";

export const Container = styled.header`
  background-color: #2F3644;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1100px;
  margin: 0 auto;
  height: 100px;

  @media (max-width: 1099px) {
    width: 90%;
  }
`

export const Logo = styled.h1`
  font-family: Heebo;
  font-weight: 700;
  color: #29EBAA;
  cursor: pointer;
`

export const Button = styled.button`
  justify-content: center;
  font-size: 1.2rem;
  font-family: Heebo;
  font-weight: 700;
  background-color: #447CE2;
  border: 0;
  color: #fff;
  padding: 10px 20px;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    transition: 0.2s;
    background-color: #538af0;
  }
`