import { Logo } from '../components/index'
import Wrapper from '../assets/wrapper/footer'
import { BiCopyright } from 'react-icons/bi'

const FooterSection = () => {
  return (
    <Wrapper>
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
    </Wrapper>
  )
}

export default FooterSection
