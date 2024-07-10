import { styled } from "styled-components"
import EstilosGlobais from "./components/EstilosGlobais"
import Header from "./components/Header"
import BarraLateral from "./components/BarraLateral"
import Banner from "./components/Banner"
import bannerImage from './assets/banner.png'

const FundoGradiente = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`

function App() {

  return (
    <FundoGradiente>
      <EstilosGlobais />
      <Header />
      <BarraLateral />
      <Banner 
        texto="A galeria mais completa de fotos do espaço!"
        backgroundImage={bannerImage}
      />
    </FundoGradiente>
  )
}

export default App