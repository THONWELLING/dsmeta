import { Children } from 'react'
import * as C from'./styles'

interface CardProps {
  width?: string
  height?: string
  children?: React.ReactNode
}

const SalesCard = ({ width = '100%', height = 'auto', children }: CardProps) => {
  return(
    <C.Container width={width} height={height} >
      <C.Subtitle>Vendas</C.Subtitle>
      { children }
    </C.Container>
  )
}

export default SalesCard