import link from './links'
import Wrapper from '../assets/wrapper/big-header'
import {
  BsFillHeartFill,
  BsFillMenuButtonWideFill,
  BsGithub,
} from 'react-icons/bs'
import { GoPrimitiveDot } from 'react-icons/go'
import { BiChevronDown } from 'react-icons/bi'
// import MobileMenu from './mobile-menu'
const BigHeader = () => {
  return (
    <Wrapper>
      <header>
        {link.map((item) => {
          const { id, text, link } = item
          return (
            <a href={link} key={id} className='link'>
              {text}
            </a>
          )
        })}
      </header>
      {/* <MobileMenu /> */}
      <button type='button' className='btn login-btn'>
        Login with Instagram
      </button>
    </Wrapper>
  )
}

export default BigHeader
