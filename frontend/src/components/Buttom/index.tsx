import * as C from'./styles'
import icon from '../../assets/img/notification-icon.svg'


const Button = () => {
  return (
    <C.Container>
      <C.ButtonImage src={icon} />
    </C.Container>
  )
}

export default Button