import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  #search-service {
    margin-top: 3.2rem;
  }

  #search-service label {
    color: var(--color-text-in-primary);
  }

  #search-service .input-block {
    position: relative;
  }

  #search-service .input-block + .input-block {
    margin-top: 1.4rem;
  }

  #search-service .input-block label {
    font-size: 1.4rem;
  }

  #search-service .input-block input {
    width: 100%;
    height: 5.6rem;
    margin-top: 0.8rem;
    border-radius: 0.8rem;
    background: var(--color-input-background);
    border: 1px solid var(--color-line-in-white);
    outline: 0;
    padding: 0 1.6rem;
    font: 1.6rem Archivo;
  }

  #search-service .input-block:focus-within::after {
    width: calc(100% - 3.2rem);
    height: 2px;
    content: '';
    background: var(--color-primary-light);
    position: absolute;
    left: 1.6rem;
    right: 1.6rem;
    bottom: 0;
  }

  @media (min-width: 700px) {
    max-width: 100%;

    #search-service {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      column-gap: 16px;
      position: absolute;
      bottom: -28px;
    }

    #search-service .input-block + .input-block {
      margin-top: 0;
    }
  }
`;
