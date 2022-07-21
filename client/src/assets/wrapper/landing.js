import styled from 'styled-components'

const Wrapper = styled.div`
  border: 2px solid hotpink;

  width: min(90%, 1400px);
  margin-inline: auto;
  header {
    /* border: var(--d-border); */
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
  main {
    .container {
      margin-top: 2em;
      .col {
        display: flex;
        flex-direction: column;
        align-items: center;
        p {
          text-align: center;
          margin: 1em 0;
          font-weight: var(--fw-semi-bold);
          font-size: var(--fs-500);
          line-height: 1.2;
        }
      }
    }
  }
  footer {
    position: absolute;
    bottom: 1em;
    .container {
      display: flex;
      align-items: flex-start;

      font-size: var(--fs-200);
      p {
        display: flex;
        align-items: center;
      }
      .secandery-list {
        ul {
          display: flex;
          align-items: center;
          li a {
            color: var(--clr-neutral-100);
            text-decoration: underline;
            margin: 0 0.5em;
            :hover {
              text-decoration: none;
            }
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
        width: 40px;
        height: 40px;
        color: var(--clr-neutral-100);
        background-color: var(--clr-accent-100);
        font-size: 2.5em;
        z-index: 999;
      }
    }
  }
`
export default Wrapper
