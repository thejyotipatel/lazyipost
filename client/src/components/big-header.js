import link from './links'
import Wrapper from '../assets/wrapper/big-header'
import {
  BsFillHeartFill,
  BsFillMenuButtonWideFill,
  BsGithub,
} from 'react-icons/bs'
import { GoPrimitiveDot } from 'react-icons/go'
import { BiChevronDown } from 'react-icons/bi'
import { Logo } from '.'
// import MobileMenu from './mobile-menu'
// import { Logo } from './index'
import { useAppContext } from '../context/appContext'

const BigHeader = () => {
  const { toggleSidebar } = useAppContext()
  return (
    <Wrapper>
      <Logo />
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
