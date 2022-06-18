import link from './links'
import Wrapper from '../assets/wrapper/big-header'
import { BsFillMenuButtonWideFill } from 'react-icons/bs'
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
      <button type='button' className='btn login-btn'>
        Login with Instagram
      </button>
      <button className='menu'>
        <BsFillMenuButtonWideFill />
      </button>
    </Wrapper>
  )
}

export default BigHeader
