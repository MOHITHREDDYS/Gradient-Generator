// Style your elements here
import styled from 'styled-components'

export const ListItem = styled.li`
  background-color: #ffffff;
  width: 40%;
  padding: 10px;
  margin: 10px;
  text-align: center;
  border-radius: 5px;
  min-width: 100px;
  opacity: ${props => (props.activated ? 1 : 0.5)};
`

export const Button = styled.button`
  background-color: transparent;
  border: none;
  color: #334155;
  font-size: 15px;
  font-weight: bold;
  font-family: 'Roboto';
`
