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
    background-color: var(--clr-accent-200);
    /* opacity: 50%; */
    /* color: hotpink; */
    inset: 0 0 0 0;
    z-index: 2;
    .menu-links {
      /* background-color: var(--color-2); */
      /* width: 100%; */
      /* width: 90%;
      height: 90%; */
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      /* border-radius: 0.3em; */
      /* margin: 2em 2em; */
      ul {
        li {
          margin: 01em 0;
          a {
            margin: 0.8em;
            font-weight: var(--fw-semi-bold);
            color: var(--clr-neutral-100);
            font-size: var(--fs-400);
          }
        }
      }
    }
  }
`
export default Wrapper
