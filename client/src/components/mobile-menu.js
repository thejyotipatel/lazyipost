import {
  BsFillHeartFill,
  BsFillMenuButtonWideFill,
  BsGithub,
} from 'react-icons/bs'
// import { } from 'react-icons/fa'
import { GoPrimitiveDot } from 'react-icons/go'
import Wrapper from '../assets/wrapper/mobile-menu'
import { useAppContext } from '../context/appContext'

const MobileMenu = () => {
  const { toggleSidebar } = useAppContext()

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
      <button className='menu' type='button' onClick={toggleSidebar}>
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
