// Style your elements here
import styled from 'styled-components'

export const ListItem = styled.li`
  width: 40%;
  margin: 10px;
  text-align: center;
  min-width: 100px;

  @media screen and (min-width: 768px) {
    max-width: 125px;
  }
`

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #ffffff;
  border: none;
  border-radius: 5px;
  color: #334155;
  font-size: 15px;
  font-weight: bold;
  font-family: 'Roboto';
  opacity: ${props => (props.activated ? 1 : 0.5)};
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`
