// Write your code here
import {Button, ListItem} from './styledComponents'

const GradientDirectionItem = props => {
  const {directionDetails, activeDirection, changeDirection} = props
  const {displayText, directionId} = directionDetails

  const isActive = activeDirection === directionId

  const onClickingDirection = () => {
    changeDirection(directionId)
  }

  return (
    <ListItem activated={isActive} onClick={onClickingDirection}>
      <Button type="button">{displayText}</Button>
    </ListItem>
  )
}

export default GradientDirectionItem
