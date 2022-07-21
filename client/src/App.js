import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { BigHeader, SmallHeader, Logo, FooterSection } from './components'
import Home from './page/home'
import Landing from './page/landing'
import styled from 'styled-components'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

const Wrapper = styled.div`
  border: 2px solid red;
  width: min(90%, 1400px);
  margin-inline: auto;
  .headers {
    display: grid;
    grid-template-columns: 20% 60%;
    justify-content: space-between;
  }
  @media screen and (max-width: 1201px) {
    .headers {
      grid-template-columns: 20% 70%;
    }
  }
  @media screen and (max-width: 1044px) {
    .headers {
      grid-template-columns: 20% 75%;
    }
  }
  @media screen and (max-width: 935px) {
    .headers {
      grid-template-columns: 20% 80%;
    }
  }
  @media screen and (max-width: 884px) {
    .headers {
      grid-template-columns: 15% 85%;
    }
  }
  @media screen and (max-width: 832px) {
    .headers {
      grid-template-columns: 20% auto;
    }
  }
`
export default App
