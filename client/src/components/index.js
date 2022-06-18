import BigHeader from './big-header'
import SmallHeader from './small-header'
import FooterSection from './footer'
import styled from 'styled-components'
const Logo = () => {
  return <Wrapper>LazyIPost</Wrapper>
}
const Wrapper = styled.div`
  font-size: 2em;
  font-weight: 500;
  margin: 1em 1em 1em 0;
`
export { Logo, BigHeader, SmallHeader, FooterSection }
