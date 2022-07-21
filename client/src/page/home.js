import { IoCopy } from 'react-icons/io'
import { useState } from 'react'
import { RiCheckboxMultipleBlankFill } from 'react-icons/ri'
import { BsFillSquareFill } from 'react-icons/bs'

import {
  BiArrowToBottom,
  BiChevronDown,
  BiCopyright,
  BiDockLeft,
  BiUpArrow,
  BiUpArrowAlt,
  BiUpArrowCircle,
  BiUserCircle,
} from 'react-icons/bi'
import { HiArrowDown, HiOutlineMenuAlt3 } from 'react-icons/hi'
import { VscClose } from 'react-icons/vsc'
import Wrapper from '../assets/wrapper/home'
import { BigHeader, MobileMenu, SmallHeader, Logo } from '../components'
import { useAppContext } from '../context/appContext'

const Home = () => {
  // const [closeMenu, setCloseMenu] = useState(false)
  const { showSidebar, toggleSidebar } = useAppContext()

  return (
    <Wrapper>
      <>
        <header className='primery-landingPage-header'>
          <Logo />
          <button className='button mobile-menu' onClick={toggleSidebar}>
            <span>{showSidebar ? <VscClose /> : <HiOutlineMenuAlt3 />}</span>
          </button>
          {showSidebar && <SmallHeader />}
          <nav className='primery-list'>
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
            <button className='button profile-btn'>
              <span>
                <BiUserCircle />
                <BiChevronDown />
              </span>
            </button>
          </nav>
        </header>
      </>
      <main>
        <div className='contaner'>
          <div className='col'>
            <div className='btn-types'>
              <button className='btn types-logo active'>
                <BsFillSquareFill />
              </button>
              <button className='btn types-logo'>
                <RiCheckboxMultipleBlankFill />
              </button>
            </div>
            <div className='images'>
              <img src='' alt='images' />
            </div>
          </div>

          <div className='col'>
            <div className='captions'>
              <label htmlFor='caption'>Caption</label>
              <textarea
                name='capton'
                id='caption'
                placeholder="write your post caption and #hastage's"
                // cols='30'
                rows='10'
                // maxWidth={500}
              ></textarea>
            </div>
            <div className='reference'>
              <div className='checks'>
                <label htmlFor='include'>Add reference by</label>
                <input type='checkbox' name='include' id='include' />
              </div>
              <p className='reference-desc'>
                This Images is posted by IPost, know more or post your Image's
                from IPost.com #IPost
              </p>
            </div>
          </div>
        </div>
        <div className='btns'>
          <button className='btn post-now'>Post Now</button>
          <button className='btn clear-all'>Clear All</button>
        </div>
      </main>
    </Wrapper>
  )
}
export default Home
