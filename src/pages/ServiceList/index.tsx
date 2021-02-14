import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';
import Header from '../../components/Header';

function ServiceList() {
  return (
    <Container className="container">
      <Header title="Estes são os serviços disponíveis.">
        <form id="search-service">
          <div className="input-block">
            <label htmlFor="subject">Tipo de serviço</label>
            <input type="text" id="subject" />
          </div>
          <div className="input-block">
            <label htmlFor="week_day">Dia da semana</label>
            <input type="text" id="week_day" />
          </div>
          <div className="input-block">
            <label htmlFor="time">Hora</label>
            <input type="text" id="time" />
          </div>
        </form>
      </Header>
    </Container>
  );
}

export default ServiceList;
