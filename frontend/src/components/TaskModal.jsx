import React, { useState } from 'react';
import styled from 'styled-components';

const TaskModal = ({ isOpen, onClose, onSave }) => {
  const [task, setTask] = useState({
    title: '',
    date: '',
    status: 'pendente',
    details: '',
    category: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(task);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalContent>
          <ModalHeader>
            <h2>Adicionar Nova Tarefa</h2>
            <CloseButton onClick={onClose}>&times;</CloseButton>
          </ModalHeader>
          
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label>Tarefa:</Label>
              <Input
                type="text"
                name="title"
                value={task.title}
                onChange={handleChange}
                required
                placeholder='Digite aqui...'
              />
            </FormGroup>
            
            <FormGroup>
              <Label>Data:</Label>
              <Input
                type="date"
                name="date"
                value={task.date}
                onChange={handleChange}
                required
              />
            </FormGroup>
            
            <FormGroup>
              <Label>Status:</Label>
              <Select
                name="status"
                value={task.status}
                onChange={handleChange}
                required
              >
                <option value="pendente">Pendente</option>
                <option value="em-andamento">Em Andamento</option>
                <option value="concluido">Concluído</option>
              </Select>
            </FormGroup>
            
            <FormGroup>
              <Label>Detalhes:</Label>
              <TextArea
                name="details"
                value={task.details}
                onChange={handleChange}
                rows="4"
                placeholder='Adicione detalhes...'
              />
            </FormGroup>
            
            <FormGroup>
              <Label>Categoria:</Label>
              <Input
                type="text"
                name="category"
                value={task.category}
                onChange={handleChange}
                placeholder='Ex: Trabalho, Pessoal...'
              />
            </FormGroup>
            
            <ButtonGroup>
              <CancelButton type="button" onClick={onClose}>
                Cancelar
              </CancelButton>
              <SaveButton type="submit">
                Salvar
              </SaveButton>
            </ButtonGroup>
          </Form>
        </ModalContent>
      </ModalContainer>
    </ModalOverlay>
  );
};

// Estilos com Styled Components
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  background-color: #D9D9D9;
  border-radius: 30px;
  width: 90%;
  max-width: 450px;
  max-height: 80vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, #2C68A9 50%, #144A85 100%);
    border-radius: 3px;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #0d3a6b;
  color: white;
  position: sticky;
  top: 0;
  z-index: 10;
  
  h2 {
    margin: 0;
    font-size: 1.3rem;
    font-weight: 600;
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.8rem;
  cursor: pointer;
  color: white;
  line-height: 1;
  padding: 0;
  display: flex;
  align-items: center;
  
  &:hover {
    opacity: 0.8;
  }
`;

const Form = styled.form`
  padding: 20px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  color: #000000;
  font-size: 0.9rem;
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px 12px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 6px;
  font-size: 0.95rem;
  background-color: #fff;
  color: #000000;
  
  &::placeholder {
    color: #797979;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 10px 12px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 6px;
  font-size: 0.95rem;
  background-color: #fff;
  color: #797979;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px 12px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 6px;
  font-size: 0.95rem;
  background-color: #fff;
  color: #797979;
  resize: vertical;
  min-height: 100px;
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 15px;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 40px;
  border-radius: 30px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
`;

const SaveButton = styled(Button)`
  background: linear-gradient(180deg, #2C68A9 50%, #144A85 100%);
  color: #fff;
  border: none;
  
  &:hover {
    background: #2E8B57; 
  }
`;

const CancelButton = styled(Button)`
  background-color: #A3A3A3;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.3);
  
  &:hover {
    background-color: rgba(217, 54, 62, 0.8);
  }
`;

export default TaskModal;