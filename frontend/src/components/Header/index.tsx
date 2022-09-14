import * as C from './styles'
import logo from'../../assets/img/logo.svg'

const Header = () => {

  return (
    <C.Container>
      <C.LogoImage src={logo} alt='DSMeta' />
      <C.Title>DSMeta</C.Title>
      <C.Link>
        Desenvolvido Por 
        <a href='https://www.linkedin.com/in/wellington-sousa-6494a6179/  '>  ThonWelling
        </a> 
      </C.Link>
    </C.Container>
  )
}

export default Header