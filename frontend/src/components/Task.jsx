import React from 'react'
import TaskItem from './TaskItem';

import styled from 'styled-components'

const Container = styled.div`
  margin: 0 60px;
  height: 500px;
  border-radius: 30px;
  margin-bottom: 60px;
  box-shadow: 0px 4px 10px 0px #00000040;
`;

const Tasks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #D3D3D3;
  padding: 20px 30px;
  border-radius: 30px 30px 0 0;
`;

const Title = styled.h1`
  font-size: 25px;
  font-weight: 400;
`;

const Img = styled.img`
  width: 20px;
  height: 20px;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  color: #3195FF;

  &:hover {
    cursor: pointer;
  }
`;

const Task = () => {
  return (
    <Container>
      <Tasks>
        <Title>Todas as tarefas:</Title>
        <div style={{ display: 'flex', gap: '30px' }}>
          <div style={{ display: 'flex', gap: '10px'}}>
            <Button>
              <Img src="/assets/icon-filter.svg" alt="/" />
            </Button>
            <Button>Filtrar</Button>
          </div>
            <Button>
              <Img src="/assets/icon-add.svg" alt="/" />
            </Button>
        </div>
      </Tasks>

      <TaskItem />
    </Container>
  )
}

export default Task
