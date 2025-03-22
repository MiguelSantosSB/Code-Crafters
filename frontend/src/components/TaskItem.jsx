import React, { useState } from 'react';
import styled from 'styled-components';

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  display: none;
`;

const StyledCheckbox = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%; 
  border: 2px solid #ccc;
  background-color: ${props => (props.checked ? '#4CAF50' : 'transparent')};
  transition: background-color 0.2s, border-color 0.2s;
  cursor: pointer;

  &:hover {
    border-color: #4CAF50;
  }
`;

const CheckboxContainer = styled.label`
  display: inline-block;
  vertical-align: middle;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  margin-top: 50px;
  background-color: transparent;
  border: none;
  color: #3195FF;
  gap: 10px;

  &:hover {
    cursor: pointer;
  }
`;

const Img = styled.img`
  width: 20px;
  height: 20px;
`;

function CustomCheckbox({ checked, onChange }) {
  return (
    <CheckboxContainer>
      <HiddenCheckbox checked={checked} onChange={onChange} />
      <StyledCheckbox checked={checked} />
    </CheckboxContainer>
  );
}

const TaskItem = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <div style={{ padding: '20px' }}>
      <CustomCheckbox checked={checked} onChange={handleChange} />
      <span style={{ marginLeft: '8px' }}>
        {checked ? 'Marcado' : 'Desmarcado'}
      </span>

      <div>
        <Button>
          <Img src="/assets/icon-add.svg" alt="/" />
          <p style={{ color: '#797979', fontSize: '20px' }}>Adicionar tarefa...</p>
        </Button>
      </div>
    </div>
  );
}

export default TaskItem;