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
        {link.map((item) => {
          const { id, text, link } = item
          return (
            <a href={link} key={id} className='link'>
              {text}
            </a>
          )
        })}
        <button type='button' className='btn login-btn'>
          Login with Instagram
        </button>
      </div>
    </Wrapper>
  )
}

export default SmallHeader
