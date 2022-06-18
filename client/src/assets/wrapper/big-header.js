import styled from 'styled-components'

const Wrapper = styled.div`
  border: 2px solid hotpink;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1em 0 1em 1em;
  .menu {
    display: none;
  }
  header {
    margin: 0.5em;

    a {
      margin: 1em;
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

  @media screen and (max-width: 832px) {
    header {
      display: none;
    }

    .menu {
      display: block;
      font-size: 2em;
      font-weight: 800;
      margin: 0.5em 0 0.5em 0.5em;
      cursor: pointer;
      background-color: transparent;
      border: none;
      outline: none;
    }
  }
  @media screen and (max-width: 500px) {
    .login-btn {
      display: none;
    }
  }
`
export default Wrapper
