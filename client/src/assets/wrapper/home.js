import styled from 'styled-components'

const Wrapper = styled.div`
  border: 2px solid hotpink;
  /* height: 80vh; */
  width: min(95%, 1400px);
  margin-inline: auto;
  .sections {
    display: flex;
    justify-content: space-between;
    .image-section {
      /* margin: 1em 0 1em 3em; */
      .btn-types {
        margin: 1em 1em 1em 1em;
        background-color: #f1f1f1;
        border: 1px solid #ddd;
        border-radius: 0.3em;
        /* padding: 0.5em; */
        display: flex;
        justify-content: center;
        .types-logo {
          font-size: 1.8em;
          margin: 0.5em;
          :hover {
            color: var(--color-3);
          }
        }
      }
      .images {
        /* img { */
        width: 200px;
        height: 200px;
        border-radius: 0.3em;
        border: 2px solid hotpink;
        /* } */
      }
    }
    .caption-section {
      margin-left: 1em;

      .captions {
        /* margin: 1em 0 1em 1em; */
        margin-top: 1.5em;

        display: flex;
        flex-direction: column;
        /* justify-content: baseline; */
        label {
          font-size: 1.2em;
          font-weight: 500;
        }
        textarea {
          /* width: min(95%, 500px); */
          margin-top: 0.5em;
          font-size: 1.2em;
          border: 2px solid var(--color-1);
          border-radius: 0.3em;
        }
      }
      .reference {
        margin-top: 1.5em;
        .checks {
          label {
            width: min(95%, 400px);
            font-size: 1.2em;
            font-weight: 500;
            text-transform: capitalize;
            margin-right: 0.8em;
          }
          input {
            /* width: min(95%, 500px); */
            margin-top: 0.5em;
          }
        }
        .reference-desc {
          width: min(95%, 500px);
          margin: 1em 0;
          border-radius: 0.3em;
          padding: 0.5em;
          border: 2px solid var(--color-1);
        }
      }
    }
  }
  .btns {
    display: flex;
    justify-content: center;
    margin-top: 2em;
    .btn {
      margin: 1em;
      padding: 01em 4em;
      border-radius: 0.3em;
      font-size: 1em;
      border: 2px solid var(--color-1);
      background-color: var(--color-1);
      color: var(--color-2);
      :hover {
        background-color: var(--color-2);
        color: var(--color-1);
      }
    }
  }
  @media screen and (max-width: 700px) {
    .sections {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      /* .image-section { */
      .image-section .images {
        width: 100%;
        justify-content: center;
        display: flex;
      }
    }
  }
  @media screen and (max-width: 590px) {
    .btns {
      flex-direction: column;
    }
  }
`
export default Wrapper
