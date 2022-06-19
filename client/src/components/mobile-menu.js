import {
  BsFillHeartFill,
  BsFillMenuButtonWideFill,
  BsGithub,
} from 'react-icons/bs'
import { GoPrimitiveDot } from 'react-icons/go'
import Wrapper from '../assets/wrapper/mobile-menu'

const MobileMenu = () => {
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
      <button className='menu'>
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
