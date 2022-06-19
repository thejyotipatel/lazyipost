import styled from 'styled-components'

const Wrapper = styled.div`
  border: 2px solid hotpink;
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  a {
    margin: 0 1em;
    span {
      font-size: 1.8em;
    }
    :nth-child(2) {
      color: var(--color-3);
    }
  }
  .menu {
    display: none;
  }
  @media screen and (max-width: 832px) {
    .menu {
      display: block;
      z-index: 3;
      border: 2px solid hotpink;

      /* margin: 0 0 0.5em 0.5em; */
      /* border: none; */
      outline: none;
      /* margin: 0.5em; */
      cursor: pointer;
      background-color: transparent;
      color: var(--color-1);
      text-transform: capitalize;
      span {
        font-size: 01em;
        display: flex;
        flex-direction: column;
        align-items: center;
        /* justify-content: center; */
      }
    }
  }
  @media screen and (min-width: 832px) {
    display: none;
  }
`
export default Wrapper
