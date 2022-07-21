import Wrapper from '../assets/wrapper/small-header'

const SmallHeader = () => {
  return (
    <Wrapper>
      <div className='menu-links'>
        <ul role='list'>
          <li>
            <a href='#' className=' '>
              Github
            </a>
          </li>
          <li>
            <a href='#' className=' '>
              about
            </a>
          </li>
          <li>
            <a href='#' className='  byemecoffee'>
              Bye me Coffee
            </a>
          </li>
        </ul>
        <button className='button login-btn'>Login with Instagram</button>
      </div>
    </Wrapper>
  )
}

export default SmallHeader
