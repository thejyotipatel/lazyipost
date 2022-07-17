import BigHeader from './big-header'
import SmallHeader from './small-header'
import FooterSection from './footer'
import MobileMenu from './mobile-menu'
import styled from 'styled-components'
import img from '../assets/images/logo.svg'
const Logo = () => {
  return (
    <Wrapper>
      <img src={img} alt="InstPost" />
    </Wrapper>
  ) 
}   
const Wrapper = styled.a`
  font-size: 1.8em; 
  font-weight: 500;
  margin: 1em 1em 1em 0;
`
export { Logo, BigHeader, SmallHeader, FooterSection, MobileMenu }
