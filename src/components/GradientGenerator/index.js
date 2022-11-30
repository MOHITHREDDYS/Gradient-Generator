import {Component} from 'react'
import {
  MainContainer,
  Container,
  Heading,
  ListContainer,
  FormContainer,
  ColorContainer,
  ColorInput,
  LabelElement,
  ColorsContainer,
  Button,
} from './styledComponents'
import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    firstColor: '#8ae323',
    secondColor: '#014f7b',
    activeDirection: gradientDirectionsList[0].directionId,
  }

  changeDirection = activeDirection => {
    this.setState({activeDirection})
  }

  onChangingColorOne = event => {
    this.setState({firstColor: event.target.value})
  }

  onChangingColorTwo = event => {
    this.setState({secondColor: event.target.value})
  }

  onClickingButton = event => {
    const {firstColor, secondColor} = this.setState
    event.preventDefault()
    this.setState({firstColor, secondColor})
  }

  render() {
    const {firstColor, secondColor, activeDirection} = this.state
    return (
      <MainContainer
        firstColor={firstColor}
        secondColor={secondColor}
        activeDirection={activeDirection}
      >
        <Container>
          <Heading heading>Generate a CSS Color Gradient</Heading>
          <Heading>Choose Direction</Heading>
          <ListContainer>
            {gradientDirectionsList.map(eachDirection => (
              <GradientDirectionItem
                key={eachDirection.directionId}
                directionDetails={eachDirection}
                activeDirection={activeDirection}
                changeDirection={this.changeDirection}
              />
            ))}
          </ListContainer>
          <Heading>Pick the Colors</Heading>
          <FormContainer onSubmit={this.onClickingButton}>
            <ColorsContainer>
              <ColorContainer>
                <LabelElement htmlFor="colorOne">{firstColor}</LabelElement>
                <ColorInput
                  id="colorOne"
                  type="color"
                  value={firstColor}
                  onChange={this.onChangingColorOne}
                />
              </ColorContainer>
              <ColorContainer>
                <LabelElement htmlFor="colorTwo">{secondColor}</LabelElement>
                <ColorInput
                  id="colorTwo"
                  type="color"
                  value={secondColor}
                  onChange={this.onChangingColorTwo}
                />
              </ColorContainer>
            </ColorsContainer>
            <Button type="submit">Generate</Button>
          </FormContainer>
        </Container>
      </MainContainer>
    )
  }
}

export default GradientGenerator
