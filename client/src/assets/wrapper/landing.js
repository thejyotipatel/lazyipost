import styled from 'styled-components'

const Wrapper = styled.div`
  border: 2px solid hotpink;
  height: 80vh;
  width: min(90%, 1200px);
  margin-inline: auto;
  display: flex;
  /* justify-content: center; */
  flex-direction: column;
  align-items: center;
  h3 {
    text-align: center;
    margin: 5em 0 2em 0;
    font-size: 1.8em;
    font-weight: 500;
  }
  .footer {
    margin: auto auto 0 auto;
    border: 2px solid hotpink;
    display: flex;
    align-items: center;
    width: inherit;
    p {
      margin: 1em 1em 1em 0;
    }
    a {
      /* margin: 1em; */
      /* span { */
      font-size: 2em;
      /* font-weight: 800; */
      /* } */
    }
  }
`
export default Wrapper
