import styled from 'styled-components'

const Wrapper = styled.div`
  display: none;

  @media screen and (max-width: 832px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    /* border: 2em solid #00000087; */
    position: fixed;
    width: 100%;
    background-color: #00000087;
    /* opacity: 50%; */
    /* color: hotpink; */
    inset: 0 0 0 0;
    z-index: 2;
    .menu-links {
      background-color: var(--color-2);
      /* width: 100%; */
      width: 90%;
      height: 90%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      border-radius: 0.3em;
      /* margin: 2em 2em; */
      a {
        margin: 0.8em;
        font-weight: 600;
        font-size: 1.5em;

        :hover {
          text-decoration: underline;
        }

        :nth-child(3) {
          color: var(--color-3);
        }
      }
      button {
        margin-top: 2em;
      }
    }
  }
`
export default Wrapper
