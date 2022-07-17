import styled from 'styled-components'

const Wrapper = styled.div`
  border: 2px solid hotpink;

  width: min(90%, 1400px);
  margin-inline: auto;
  .headers {
    display: grid;
    grid-template-columns: 20% 60%;
    justify-content: space-between;
  }

  @media screen and (max-width: 832px) {
    .headers {
      grid-template-columns: 20% auto;
    }
  }

  h3 {
    text-align: center;
    margin: 5em 0 2em 0;
    font-size: 1.8em;
    font-weight: 500;
  }
  main {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  .footer {
    margin: auto auto 0 auto;
    /* border: 2px solid hotpink; */
    position: absolute;
    bottom: 1em;
    width: inherit;
    p {
      margin: 1.5em 0 0 0;
    }
  }
`
export default Wrapper
