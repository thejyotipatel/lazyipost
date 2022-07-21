import styled from 'styled-components'

const Wrapper = styled.footer`
  /* position: absolute; */
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
`
export default Wrapper
