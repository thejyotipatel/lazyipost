import styled from 'styled-components'

const Wrapper = styled.div`
  border: 2px solid hotpink;
  width: min(95%, 1400px);
  margin-inline: auto;
  .links {
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* margin: 1em 0 1em 1em; */
    .footer-links {
      margin: 0.5em;

      a {
        margin: 1em;
        font-weight: 700;
        font-size: 01em;

        :hover {
          text-decoration: underline;
        }

        :last-child {
          color: var(--color-3);
        }
      }
    }
  }
  p {
    text-align: center;
    font-size: 1em;
  }
  @media screen and (max-width: 521px) {
    .links {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
    }
  }
`
export default Wrapper
