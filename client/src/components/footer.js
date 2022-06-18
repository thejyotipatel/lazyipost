import { Logo } from '../components/index'
import Wrapper from '../assets/wrapper/footer'
import link from '../components/links'
const FooterSection = () => {
  return (
    <Wrapper>
      <div className='links'>
        <Logo />
        <div className='footer-links'>
          {link.map((item) => {
            const { id, text, link } = item
            return (
              <a href={link} key={id} className='link'>
                {text}
              </a>
            )
          })}
        </div>
      </div>
      <p className='copyright'>;:copy All right reserve to IPost</p>
    </Wrapper>
  )
}

export default FooterSection
