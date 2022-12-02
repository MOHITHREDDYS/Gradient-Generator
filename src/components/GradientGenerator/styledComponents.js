// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  min-height: 100vh;
  background-image: linear-gradient(
    to ${props => props.activeDirection},
    ${props => props.firstColor},
    ${props => props.secondColor}
  );
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Container = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Heading = styled.h1`
  color: #ffffff;
  font-size: ${props => (props.heading ? 25 : 20)}px;
  font-weight: ${props => (props.heading ? 'bold' : 'normal')};
  font-family: 'Roboto';
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: ${props => (props.heading ? 35 : 25)}px;
  }
`
export const ListContainer = styled.ul`
  padding-left: 0px;
  list-style-type: none;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  max-width: 600px;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ColorsContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const ColorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
`
export const LabelElement = styled.label`
  color: #ffffff;
  font-size: 15px;
  font-family: 'Roboto';
  margin-bottom: 0px;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`

export const ColorInput = styled.input`
  border: none;
  width: 80px;
  height: 40px;
  margin: 5px 20px;
  background-color: transparent;
  @media screen and (min-width: 768px) {
    width: 120px;
    height: 50px;
  }
`

export const Button = styled.button`
  color: #1e293b;
  font-weight: bold;
  background-color: #00c9b7;
  font-family: 'Roboto';
  font-size: 13px;
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  margin-top: 20px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`
