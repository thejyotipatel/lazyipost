import Wrapper from '../assets/wrapper/landing'
import { AiFillGithub } from 'react-icons/ai'
const Landing = () => {
  return (
    <Wrapper>
      <h3>Post your Image,s on Instagram from here.</h3>
      <button className='btn login-btn'>Login with Instagram</button>
      <div className='footer'>
        <p>all right reserve</p>
        <a href=''>
          <span>
            <AiFillGithub />
          </span>
        </a>
      </div>
    </Wrapper>
  )
}

export default Landing
