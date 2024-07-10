import { styled } from "styled-components"
import Input from "../Input"

const HeaderEstilizado = styled.header`
    padding: 60px 0;
    display: flex;
    justify-content: space-between;
    img {
        max-width: 212px;
    }
`

const Header = () => {
  return (
    <HeaderEstilizado>
      <img src="/imagens/logo.png" alt="" />
      <Input />
    </HeaderEstilizado>
  )
}

export default Header