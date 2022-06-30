import {
  BsFillHeartFill,
  BsFillMenuButtonWideFill,
  BsGithub,
} from 'react-icons/bs'
// import { } from 'react-icons/fa'
import { GoPrimitiveDot } from 'react-icons/go'
import Wrapper from '../assets/wrapper/mobile-menu'

const MobileMenu = ({ setCloseMenu, closeMenu }) => {
  return (
    <Wrapper className='mobile-menu'>
      <a href=''>
        <span>
          <BsGithub />
        </span>
      </a>
      <a href=''>
        <span>
          <BsFillHeartFill />
        </span>
      </a>
      <button className='menu' onClick={() => setCloseMenu(!closeMenu)}>
        {/* <button className='dots'> */}

        <span>
          <GoPrimitiveDot /> <GoPrimitiveDot /> <GoPrimitiveDot />
        </span>
        {/* </button> */}
      </button>
    </Wrapper>
  )
}

export default MobileMenu
