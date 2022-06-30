import { useState } from 'react'
import Wrapper from '../assets/wrapper/landing'
import { BiCopyright } from 'react-icons/bi'
import { Logo, BigHeader, MobileMenu, SmallHeader } from '../components'
const Landing = () => {
  const [closeMenu, setCloseMenu] = useState(false)
  return (
    <Wrapper>
      <div className='headers'>
        <Logo />
        <BigHeader />
        <MobileMenu closeMenu={closeMenu} setCloseMenu={setCloseMenu} />
        {closeMenu && <SmallHeader />}
      </div>
      <main>
        <h3>Post your Image,s on Instagram from here.</h3>
        <button className='btn login-btn'>Login with Instagram</button>
        <div
          className='fb-like'
          data-share='true'
          data-width='450'
          data-show-faces='true'
        ></div>
      </main>
      <div className='footer'>
        <p>
          <BiCopyright /> all right reserve
        </p>
      </div>
    </Wrapper>
  )
}

export default Landing
