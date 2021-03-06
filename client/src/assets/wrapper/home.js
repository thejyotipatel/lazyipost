import styled from 'styled-components'

const Wrapper = styled.div`
  border: 2px solid hotpink;
  width: min(95%, 1400px);
  margin-inline: auto;
  .sections {
    display: flex;
    justify-content: space-between;
    .image-section {
      /* margin: 1em 0 1em 3em; */
      margin: 1em;
      .btn-types {
        margin: 1em 1em 1em 1em;
        background-color: #f1f1f159;
        border: 1px solid #ddd;
        border-radius: 0.3em;
        display: flex;
        justify-content: center;
        .types-logo {
          font-size: 1.8em;
          margin: 0.5em;
          background-color: transparent;
          :hover {
            color: var(--color-3);
          }
        }
        .active {
          color: var(--color-3);
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
        label {
          font-size: 1.2em;
          font-weight: 500;
        }
        textarea {
          margin-top: 0.5em;
          font-size: 1.2em;
          padding: 0.5em;
          border: 2px solid var(--color-1);
          border-radius: 0.3em;
          resize: vertical;
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
            margin-top: 0.5em;
          }
        }
        .reference-desc {
          width: min(100%, 700px);
          /* margin: 1em 0; */
          /* width: 100%; */
          border-radius: 0.3em;
          /* box-shadow: var(--box-shadow-3); */
          padding: 0.5em;
          border: 2px solid var(--color-1);
          text-align: justify;
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
      box-shadow: var(--box-shadow-3);
      color: var(--color-2);
      :hover {
        background-color: var(--color-2);
        color: var(--color-1);
      }
    }
    .post-now {
      border: 2px solid var(--color-3);
      background-color: var(--color-3);
      :hover {
        color: var(--color-3);
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
      .caption-section {
        margin-left: 0;
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
