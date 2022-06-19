import styled from 'styled-components'

const Wrapper = styled.div`
  border: 2px solid hotpink;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1em 0 1em 1em;

  header {
    margin: 0.5em;

    a {
      margin: 1em 0.8em;
      font-weight: 600;
      font-size: 1.2em;

      :hover {
        text-decoration: underline;
      }

      :last-child {
        color: var(--color-3);
      }
    }
  }
  /* .login-btn {
    display: none;
  } */
  @media screen and (max-width: 832px) {
    display: none;
    /* }
    .login-btn {
      display: none;
    } */
  }
  @media screen and (max-width: 500px) {
    .login-btn {
      display: none;
    }
  }
`
export default Wrapper
