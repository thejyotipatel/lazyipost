import BigHeader from './big-header'
import SmallHeader from './small-header'
import FooterSection from './footer'
import MobileMenu from './mobile-menu'
import styled from 'styled-components'
import img from '../assets/images/logo.svg'
const Logo = () => {
  return (
    <Wrapper>
      <img src={img} alt='InstPost' />
    </Wrapper>
  )
}
const Wrapper = styled.a`
  margin-left: -1.5em;
  max-width: 200px;
  img {
    width: 100%;
    display: block;
  }
`
export { Logo, BigHeader, SmallHeader, FooterSection, MobileMenu }
