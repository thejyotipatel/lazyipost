import { useState } from 'react'
import Wrapper from '../assets/wrapper/landing'
import { BiCopyright } from 'react-icons/bi'
import { Logo, BigHeader, MobileMenu, SmallHeader } from '../components'
const Landing = () => {
  return (
    <Wrapper>
      <header className='primery-landingPage-header'>
        <Logo />
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
          <button className='button login-btn'>Login with Instagram</button>
        </nav>
      </header>
      <main>
        <div className='container'>
          <div className='col'>
            <p>Post your Image,s on Instagram from here.</p>
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
            Copyright 2022
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
