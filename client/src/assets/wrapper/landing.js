import styled from 'styled-components'

const Wrapper = styled.div`
  /* border: 2px solid hotpink; */
  /* height: 80vh; */
  /* width: min(90%, 1200px); */
  /* margin-inline: auto; */
  /* display: flex; */
  /* justify-content: center; */
  /* flex-direction: column; */
  /* align-items: center; */
  /*  */
  border: 2px solid red;
  width: min(90%, 1400px);
  margin-inline: auto;
  .headers {
    display: grid;
    grid-template-columns: 20% 60%;
    justify-content: space-between;
  }
  @media screen and (max-width: 1201px) {
    .headers {
      grid-template-columns: 20% 70%;
    }
  }
  @media screen and (max-width: 1044px) {
    .headers {
      grid-template-columns: 20% 75%;
    }
  }
  @media screen and (max-width: 935px) {
    .headers {
      grid-template-columns: 20% 80%;
    }
  }
  @media screen and (max-width: 884px) {
    .headers {
      grid-template-columns: 15% 85%;
    }
  }
  @media screen and (max-width: 832px) {
    .headers {
      grid-template-columns: 20% auto;
    }
  }
  /*  */
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
