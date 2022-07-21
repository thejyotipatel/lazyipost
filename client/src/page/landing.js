import Wrapper from '../assets/wrapper/landing'
import { BiCopyright } from 'react-icons/bi'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { VscClose } from 'react-icons/vsc'
import { Logo, BigHeader, MobileMenu, SmallHeader } from '../components'
import { useAppContext } from '../context/appContext'
const Landing = () => {
  const { showSidebar, toggleSidebar } = useAppContext()

  return (
    <Wrapper>
      <BigHeader />
      <main>
        <div className='container'>
          <div className='col'>
            <p>Post your Image's on Instagram from here.</p>
            <button className='button login-btn'>Login with Instagram</button>
          </div>
        </div>
      </main>
      <footer>
        <div className='container'>
          <p>
            <span>
              <BiCopyright />
            </span>
            Copyright 2022.
          </p>
          <nav className='secandery-list'>
            <ul role='list'>
              <li>
                <a href='' className='secandery-link'>
                  privacy policy
                </a>
              </li>
              <li>
                <a href='' className='secandery-link'>
                  Terms of Use
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </Wrapper>
  )
}

export default Landing
