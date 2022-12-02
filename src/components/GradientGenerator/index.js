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
    colorOne: '#8ae323',
    colorTwo: '#014f7b',
    activeDirection: gradientDirectionsList[0].value,
  }

  changeDirection = activeDirection => {
    this.setState({activeDirection})
  }

  onChangingColorOne = event => {
    this.setState({colorOne: event.target.value})
  }

  onChangingColorTwo = event => {
    this.setState({colorTwo: event.target.value})
  }

  onClickingButton = event => {
    event.preventDefault()
    const {colorOne, colorTwo} = this.state
    this.setState({firstColor: colorOne, secondColor: colorTwo})
  }

  render() {
    const {
      firstColor,
      secondColor,
      activeDirection,
      colorOne,
      colorTwo,
    } = this.state
    return (
      <MainContainer
        data-testid="gradientGenerator"
        firstColor={firstColor}
        secondColor={secondColor}
        activeDirection={activeDirection}
      >
        <Container>
          <Heading heading>Generate a CSS Color Gradient</Heading>
          <Heading as="p">Choose Direction</Heading>
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
          <Heading as="p">Pick the Colors</Heading>
          <FormContainer onSubmit={this.onClickingButton}>
            <ColorsContainer>
              <ColorContainer>
                <LabelElement as="p" htmlFor="colorOne">
                  {colorOne}
                </LabelElement>
                <ColorInput
                  id="colorOne"
                  type="color"
                  value={colorOne}
                  onChange={this.onChangingColorOne}
                />
              </ColorContainer>
              <ColorContainer>
                <LabelElement as="p" htmlFor="colorTwo">
                  {colorTwo}
                </LabelElement>
                <ColorInput
                  id="colorTwo"
                  type="color"
                  value={colorTwo}
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
