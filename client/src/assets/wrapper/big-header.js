import styled from 'styled-components'

const Wrapper = styled.header`
  border: 2px solid hotpink;
  display: flex;
  justify-content: space-between;
  /* align-items: center; */

  .mobile-menu {
    display: none;
  }
  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    ul {
      display: flex;
      align-items: center;
      justify-content: center;
      li {
        margin: 0.5em 1em;
        a:not(.byemecoffee) {
          font-size: var(--fs-300);
          font-weight: var(--fw-semi-bold);
          color: var(--clr-neutral-100);
        }
      }
    }
  }
  .profile-btn {
    /* color: red; */
  }
  @media screen and (max-width: 832px) {
    nav {
      .login-btn {
        /* color: red; */
        display: none;
      }
    }
  }
  @media screen and (max-width: 612px) {
    nav {
      .login-btn,
      .profile-btn {
        display: none;
      }
    }
  }
  @media screen and (max-width: 562px) {
    nav {
      display: none;
    }
    .mobile-menu {
      position: fixed;  
      right: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0.5em 0;
      padding: 0.2rem;
      border-radius: var(--btn-radius);
      width: 40px;
      height: 40px;
      color: var(--clr-neutral-100);
      background-color: var(--clr-accent-300);
      font-size: 2.5em;
      z-index: 999;
    }
  }
`
export default Wrapper
