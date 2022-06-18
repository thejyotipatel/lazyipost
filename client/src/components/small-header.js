import link from './links'
import { Logo } from './index'
import Wrapper from '../assets/wrapper/big-header'

const SmallHeader = () => {
  return (
    <Wrapper>
      <div className='menu'>----</div>
      <ul>
        {link.map((item) => {
          const { id, text, link } = item
          return (
            <a href={link} key={id} className='link'>
              {text}
            </a>
          )
        })}
      </ul>
      <button type='button' className='btn'>
        sign in
      </button>
    </Wrapper>
  )
}

export default SmallHeader
