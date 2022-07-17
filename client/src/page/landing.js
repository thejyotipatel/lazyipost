import { useState } from 'react'
import Wrapper from '../assets/wrapper/landing'
import { BiCopyright } from 'react-icons/bi'
import { Logo, BigHeader, MobileMenu, SmallHeader } from '../components'
import img from '../assets/images/logo.svg'
const Landing = () => {
  const [closeMenu, setCloseMenu] = useState(false)
  return (
    // <Wrapper>
    //   <div className='headers'>
    //     <Logo />
    //     <BigHeader />
    //     <MobileMenu closeMenu={closeMenu} setCloseMenu={setCloseMenu} />
    //     {closeMenu && <SmallHeader />}
    //   </div>
    //   <main>
    //     <h3>Post your Image,s on Instagram from here.</h3>
    //     <button className='btn login-btn'>Login with Instagram</button>
    //     <div
    //       className='fb-like'
    //       data-share='true'
    //       data-width='450'
    //       data-show-faces='true'
    //     ></div>
    //   </main>
    //   <div className='footer'>
    //     <p>
    //       <BiCopyright /> all right reserve
    //     </p>
    //   </div>
    // </Wrapper>
    <>
      <header className='primery-landingPage-header'>
        <a href='#'>
          <img src={img} alt='IPost' />
        </a>
        <nav>
          <ul role='list' className=''>
            <li>
              <a href='#'>about</a>
            </li>
            <li>
              <a href='#'>about</a>
            </li>
            <li>
              <a href='#'>Bye me Coffee</a>
            </li>
          </ul>
          <button className='button'>Login with Instagram</button>
        </nav>
      </header>
      <main>
        <div className='container'>
          <div className='col'>
            <p>Post your Image,s on Instagram from here.</p>
            <button className='button'>Login with Instagram</button>
          </div>
        </div>
      </main>
      <footer>
        <div className=''>
          <p>
            <span>
              <BiCopyright />
            </span>
            Copyright 2022
          </p>
          <nav>
            <ul role='list'>
              <li>
                <a href=''>privacy policy</a>
              </li>
              <li>
                <a href=''>Terms of Use</a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </>
  )
}

export default Landing
