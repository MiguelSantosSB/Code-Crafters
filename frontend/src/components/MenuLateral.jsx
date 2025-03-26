import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #D3D3D3;
    color: #222222;
    font-size: 17px;
    /* width: 350px; */
    height: 100vh;
    padding: 40px;
    box-shadow: 0px 0px 10px 0px #00000040;
`;

const Title = styled.h1 `
    color: #144A85;
    font-size: 30px;
    font-weight: 900;
    padding-bottom: 90px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  padding: 6px;
  gap: 6px;
`;

const MenuLateral = () => {
  return (
    <Container>
      <Title>To Do List</Title>

      <Item>
        <img src="/assets/icon-gerenciamento-tarefas.svg" alt="/" />
        <Link to='/'>Gerenciamento de Tarefas</Link>
      </Item>
      
      <Item>
        <img src="/assets/icon-meu-perfil.svg" alt="/" />
        <Link to='/profile'>Meu Perfil</Link>
      </Item>
      
      <Item>
        <img src="/assets/icon-feedback.svg" alt="/" />
        <Link to='/feedback'>Feedback</Link>
      </Item>
      
      <Item>
        <img src="/assets/icon-logout.svg" alt="/" />
        <Link to='/logout'>Logout</Link>
      </Item>
    </Container>
  )
}

export default MenuLateral
