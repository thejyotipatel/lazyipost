import styled from 'styled-components'

const Wrapper = styled.div`
  border: 2px solid hotpink;

  width: min(90%, 1400px);
  margin-inline: auto;

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
`
export default Wrapper
