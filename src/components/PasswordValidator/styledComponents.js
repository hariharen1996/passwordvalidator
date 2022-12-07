// Style your elements here
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  background-color: #242637;
`
export const PasswordContainer = styled.div`
  padding: 25px;
  background-color: #434451;
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 600;
  color: #ffffff;
`
export const PasswordText = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 400;
  color: #ffffff;
`
export const Input = styled.input`
  width: 200px;
  padding: 7px;
  border: none;
`
export const Error = styled.p`
  color: #ef4444;
  font-size: 10px;
  font-family: 'Roboto';
`
