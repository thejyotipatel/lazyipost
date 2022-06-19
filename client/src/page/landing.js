import Wrapper from '../assets/wrapper/landing'
import { AiFillGithub } from 'react-icons/ai'
import { Logo, BigHeader, MobileMenu } from '../components'
const Landing = () => {
  return (
    <Wrapper>
      <div className='headers'>
        <Logo />
        <BigHeader />
        <MobileMenu />
      </div>
      {/* <main>
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
      </main> */}
    </Wrapper>
  )
}

export default Landing
