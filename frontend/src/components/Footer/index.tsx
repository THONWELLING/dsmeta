import * as C from './styles'
import { FaFacebookF, FaGithub, FaInstagramSquare, FaLinkedin } from'react-icons/fa'



const Footer = () => {
  return (

    <C.FooterContainer>
      <C.FooterInfo>
        Feito Por Wellington na Semana Spring React<br />
      </C.FooterInfo>
      <C.Media>
        <a href='https://www.facebook.com/profile.php?id=100028818758980'><FaFacebookF /></a>
        <a href='https://www.instagram.com/thonwellingd'><FaInstagramSquare /></a>
        <a href='https://github.com/THONWELLING'><FaGithub /></a>
        <a href='https://www.linkedin.com/in/wellington-sousa-6494a6179'><FaLinkedin /></a>
      </C.Media>
    </C.FooterContainer>
  )
}

export default Footer