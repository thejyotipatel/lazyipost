import link from './links'
import { Logo } from './index'
import { FaWindowClose } from 'react-icons/fa'
import Wrapper from '../assets/wrapper/small-header'

const SmallHeader = () => {
  return (
    <Wrapper>
      {/* <button>
        <span>
          <FaWindowClose />
        </span>
      </button> */}
      <div className='menu-links'>
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
        <button className='button login-btn'>Login with Instagram</button>
      </div>
    </Wrapper>
  )
}

export default SmallHeader
