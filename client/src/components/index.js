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
  /* font-weight: 500; */
  /* font-size: 8em; */
  /* margin: 1em 1em 1em 0; */
  width: 200px;
  img {
    display: block;
  }
`
export { Logo, BigHeader, SmallHeader, FooterSection, MobileMenu }
