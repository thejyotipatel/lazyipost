import styled from 'styled-components'

const Wrapper = styled.div`
  border: 2px solid hotpink;

  width: min(90%, 1400px);
  margin-inline: auto;
  header {
    display: flex;
    /* grid-template-columns: 20% 60%; */
    justify-content: space-between;
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
  }

  @media screen and (max-width: 832px) {
    header {
      nav {
        .login-btn {
          display: none;
        }
      }
    }
  }
  @media screen and (max-width: 562px) {
    header {
      nav {
        display: none;
      }
      .mobile-menu {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0.5em 0;
        width: 50px;
        height: 50px;
        border-radius: 0.05em;
        color: var(--clr-neutral-100);
        background-color: var(--clr-accent-300);
        font-size: 2.8em;
      }
    }
  }

  h3 {
    text-align: center;
    margin: 5em 0 2em 0;
    font-size: 1.8em;
    font-weight: 500;
  }
  /* main {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  .footer {
    margin: auto auto 0 auto;
    /* border: 2px solid hotpink; */
  /* position: absolute;
    bottom: 1em;
    width: inherit;
    p {
      margin: 1.5em 0 0 0;
    }
  }  */
`
export default Wrapper
