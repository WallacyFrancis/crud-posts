import styled from "styled-components"

export const CardButton = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 12px;
`

export const BtnEdit = styled.button`
  background-color: #80D8FF;
  color: rgba(255, 255, 255, 0.938);
  font-size: 1rem;
  border: 0;
  border-radius: 10px;
  font-family: Heebo;
  font-weight: 700;
  cursor: pointer;
  padding: 5px 40px;

  &:hover {
    background-color: #64C4EF;
    transition: 0.2s;
  }
`

export const BtnRead = styled.button`
  background-color: #3DECB1;
  color: rgba(255, 255, 255, 0.938);
  font-size: 1rem;
  border: 0;
  border-radius: 10px;
  font-family: Heebo;
  font-weight: 700;
  cursor: pointer;
  padding: 5px 40px;

  &:hover {
    background-color: #38D19E;
    transition: 0.2s;
  }
`

export const BtnDelete = styled.button`
  background-color: rgb(241, 45, 45);
  color: rgba(255, 255, 255, 0.938);
  font-size: 1rem;
  border: 0;
  border-radius: 10px;
  font-family: Heebo;
  font-weight: 700;
  cursor: pointer;
  padding: 5px 40px;

  &:hover {
    background-color: #E12525;
    transition: 0.2s;
  }
`