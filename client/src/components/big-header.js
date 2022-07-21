import link from './links'
import Wrapper from '../assets/wrapper/big-header'
import {
  BsFillHeartFill,
  BsFillMenuButtonWideFill,
  BsGithub,
} from 'react-icons/bs'
import { BiChevronDown, BiUserCircle } from 'react-icons/bi'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { VscClose } from 'react-icons/vsc'

import { Logo, SmallHeader } from '.'
import { useAppContext } from '../context/appContext'

const BigHeader = ({ loginBtn }) => {
  const { toggleSidebar, showSidebar } = useAppContext()
  return (
    <Wrapper>
      <Logo />
      <button className='button mobile-menu' onClick={toggleSidebar}>
        <span>{showSidebar ? <VscClose /> : <HiOutlineMenuAlt3 />}</span>
      </button>
      {showSidebar && <SmallHeader loginBtn={loginBtn} />}
      <nav className='primery-list'>
        <ul role='list'>
          <li>
            <a href='#' className='primery-link'>
              Github
            </a>
          </li>
          <li>
            <a href='#' className='primery-link'>
              about
            </a>
          </li>
          <li>
            <a href='#' className='primery-link byemecoffee'>
              Bye me Coffee
            </a>
          </li>
        </ul>
        {!loginBtn ? (
          <button className='button login-btn'>Login with Instagram</button>
        ) : (
          <button className='button profile-btn'>
            <span>
              <BiUserCircle />
              <BiChevronDown />
            </span>
          </button>
        )}
      </nav>
    </Wrapper>
  )
}

export default BigHeader
