import link from './links'
import { Logo } from './index'
import Wrapper from '../assets/wrapper/small-header'

const SmallHeader = () => {
  return (
    <Wrapper>
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
