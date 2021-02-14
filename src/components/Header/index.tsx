import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.png';
import backIcon from '../../assets/images/icons/back.svg';

import { Container } from './styles';
// import './styles.css';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <Container>
      <div className="top-bar-container">
        <Link to="/">
          <img src={backIcon} alt="Voltar" />
        </Link>
        <img src={logoImg} alt="CAT-CLUB" />
      </div>
      <div className="header-content">
        <strong>{props.title}</strong>
        {props.children}
      </div>
    </Container>
  );
};

export default Header;
