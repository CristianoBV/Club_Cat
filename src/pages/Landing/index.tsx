import React from 'react';

import './styles.css';

import logoImg from '../../assets/images/logo.png';
import landingImg from '../../assets/images/landing.svg';

import { FaRegUser, FaSignInAlt } from 'react-icons/fa';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logoImg} alt="Cat Club" />
          <h2>Sua plataforma de serviços online.</h2>
        </div>

        <img
          src={landingImg}
          alt="Plataforma de serviços"
          className="hero-image"
        />
        <div className="buttons-container">
          <Link to="/login" className="study">
            <FaSignInAlt />
            Entrar
          </Link>

          <Link to="/register" className="give-classes">
            <FaRegUser />
            Cadastrar
          </Link>
        </div>

        <span className="total-connections">
          Total de 200 conexões já realizadas{' '}
          <img src={purpleHeartIcon} alt="Coração roxo" />
        </span>
      </div>
    </div>
  );
}

export default Landing;
