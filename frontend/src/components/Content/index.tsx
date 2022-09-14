import * as C from './styles'

type MainProps = {
  children?: React.ReactNode
}

const MainContent = ({ children }: MainProps) => {
  return (
    <C.MainContainer>
      <C.Container>
        { children }
      </C.Container>
    </C.MainContainer>
  )
}

export default  MainContent