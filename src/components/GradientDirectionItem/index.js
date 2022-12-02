// Write your code here
import {Button, ListItem} from './styledComponents'

const GradientDirectionItem = props => {
  const {directionDetails, activeDirection, changeDirection} = props
  const {displayText, value} = directionDetails

  const isActive = activeDirection === value

  const onClickingDirection = () => {
    changeDirection(value)
  }

  return (
    <ListItem onClick={onClickingDirection}>
      <Button type="button" activated={isActive}>
        {displayText}
      </Button>
    </ListItem>
  )
}

export default GradientDirectionItem
