import React from 'react';
import { FooterWrapper } from './style/FooterWrapper';

export default function Footer(props) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FooterWrapper {...props}>
      <a href="https://www.alura.com.br/">
        <img
          src="https://www.alura.com.br/assets/img/alura-logo.svg"
          alt="Logo Alura"
        />
      </a>

      <p>
        Orgulhosamente criado durante o
        {' '}
        <a href="https://www.alura.com.br/">
          <span>Bootcamp Alura JAM Stack</span>
        </a>
      </p>

      <small>Créditos:</small>
      <small>
        Ícone do
        {' '}
        <b>Sol</b>
        {' '}
        feito por
        {' '}
        <a href="https://www.flaticon.com/authors/smalllikeart">smalllikeart</a>
        {' '}
        obtido de
        {' '}
        <a href="https://www.flaticon.com">www.flaticon.com</a>
      </small>
      <small>
        Ícone da
        {' '}
        <b>Lua</b>
        {' '}
        feito por
        {' '}
        <a href="https://www.freepik.com/home">Freepik</a>
        {' '}
        obtido de
        {' '}
        <a href="https://www.flaticon.com">www.flaticon.com</a>
      </small>
    </FooterWrapper>
  );
}
