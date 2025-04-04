import React from 'react'
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import styled from 'styled-components';

const dateToday = new Date();

const Container = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const Header = styled.div`
  display: flex;
  gap: 100px;
  padding: 60px 0;
`;

const Item1 = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  /* width: 400px; */
  height: 40px;
  border-radius: 30px;
  gap: 20px;
  padding: 20px;

  &::placeholder {
    color: #4F4F4F;
  }
`;

const Img = styled.img`
  width: 20px;
  height: 20px;
`;

const Input = styled.input`
  border: none;
  width: 400px;
  height: 40px;
  outline: none;
`;

const Item2 = styled.div`
  display: flex;
  align-items: center;
  color: #3195FF;
  gap: 10px;
  letter-spacing: 10%;
  font-weight: 500;
`;

const Menu = () => {
  return (
    <div>
      <Container>
        <Header>
          <Item1>
            <Img src="/assets/icon-search.svg" alt="/" />
            <Input placeholder='Pesquisar...'/>
          </Item1>
          <Item2>
            <Img src="/assets/icon-calendar.svg" alt="/" />
            <p>{format(dateToday, 'EEEE, d MMMM yyyy', { locale: ptBR })}</p>
          </Item2>
        </Header>
      </Container>
    </div>
  )
}

export default Menu
