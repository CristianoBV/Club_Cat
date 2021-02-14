import styled from 'styled-components';

export const Container = styled.main`
  margin: 3.2rem auto;
  width: 90%;

  .service-item {
    background: var(--color-box-base);
    border: 1px solid font-variant(--color-line-in-white);
    border-radius: 0.8rem;
    margin-top: 2.4rem;
    overflow: hidden;
  }

  .service-item header {
    padding: 3.2rem 2rem;
    display: flex;
    align-items: center;
  }

  .service-item header img {
    width: 8rem;
    height: 8rem;
    border-radius: 50%50%;
  }

  .service-item header div {
    margin-left: 2.4rem;
  }

  .service-item header div strong {
    font: 700 2.4rem Archivo;
    display: block;
    color: var(--color-text-title);
  }

  .service-item header div span {
    font-size: 1.6rem;
    display: block;
    margin-top: 0.4rem;
    color: var(--color-text-complement);
  }

  .service-item > p {
    padding: 0 2rem;
    font-size: 1.6rem;
    line-height: 2.8rem;
  }

  .service-item footer {
    padding: 3.2rem 2rem;
    background: var(--color-box-footer);
    border-top: 1px solid var(--color-line-in-white);
    margin-top: 3.2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .service-item footer p strong {
    color: var(--color-primary);
    font: 500 1.6rem Archivo;
    display: block;
  }

  .service-item footer button {
    width: 20rem;
    height: 5.6rem;
    background: var(--color-primary);
    color: var(--color-button-text);
    border: 0;
    border-radius: 0.8rem;
    cursor: pointer;
    font: 700 1.4rem Archivo;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    transition: 0.2s ease-in;
  }

  .service-item footer button:hover {
    background: var(--color-primary-dark-button);
    transition: 0.2s ease-in;
  }

  @media (min-width: 700px) {
    padding: 3.2rem 0;
    max-width: 740px;
    margin: 0 auto;

    .service-item header,
    .service-item footer {
      padding: 3.2rem;
    }

    .service-item > p {
      padding: 0 3.2rem;
    }

    .service-item footer p strong {
      display: initial;
      margin-left: 1.6rem;
    }

    .service-item footer button {
      width: 24.5rem;
      font-size: 1.6rem;
      justify-content: center;
    }

    .service-item footer button img {
      margin-right: 1.6rem;
    }
  }
`;
