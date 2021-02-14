import React from 'react';

import { Container } from './styles';

import watsappIcon from '../../assets/images/icons/whatsapp.svg';

const ServiceItem: React.FC = () => {
  return (
    <Container>
      <article className="service-item">
        <header>
          <img
            src="https://avatars.githubusercontent.com/u/34442504?s=460&u=052c6039350dc1ad5ae41209eb4b7762e050ee50&v=4"
            alt="Cristiano Borges"
          />
          <div>
            <strong>Cristiano Borges</strong>
            <span>Full Stack Developer</span>
          </div>
        </header>
        <p>
          Desenvolvedor de plataformas, softwares, sites e sistemas.
          <br />
          <br />
          Estudante de Ciencia da Computação, apaixonado por desenvolvimentos de
          softwares, conhecimantos em UI e UX, experiência suficiente para
          desenvolver sua apliacacão.
        </p>
        <footer>
          <p>
            Preço/hora
            <strong>R$ 80,00</strong>
          </p>
          <button type="button">
            <img src={watsappIcon} alt="Whatsapp" />
            Entrar em contato
          </button>
        </footer>
      </article>
    </Container>
  );
};

export default ServiceItem;
