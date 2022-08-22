import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
  margin-bottom: 7px;
  width: 100%;
  font-family: Poppins;
`

export const TextArea = styled.textarea`
  border-radius: 10px;
  border: 0;
  outline: 0;
  resize: none;
  font-size: 1rem;
  padding-left: 15px;
  padding-top: 10px;
  margin-top: 3px;
  font-family: Poppins;
`

export const P = styled.p`
  color: red;
  font-family: Poppins;
  font-size: 0.8rem;
`
