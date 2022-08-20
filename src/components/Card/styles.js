import styled from "styled-components";

export const Container = styled.div`  
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: auto;
`
export const Content = styled.div`
  max-width: 500px;
  padding: 20px;
  background-color: #2F3644;
  border-radius: 10px;
  margin-top: 25px;
  margin-bottom: 20px;
`

export const CardHeader = styled.h2` 
  font-family: Nono Sans;
  font-weight: 700px;
  color: #D2DAF5;
  font-size: 1.5rem;
  margin-bottom: 8px;
`

export const CardContent = styled.p`
  margin-top: 8px;
  font-size: 1rem;
  max-width: 500px;
  font-family: Noto Sans;
  font-weight: 500;
  color: #B3BACF;
  text-align: justify;
`

export const Line = styled.div`
  height: 2px;
  background-color: #3E445B;
  width: 100%;
  margin-bottom: 8px;
`
