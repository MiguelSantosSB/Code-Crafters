import React, { useState } from 'react';
import styled from 'styled-components';
import TaskModal from './TaskModal';

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  display: none;
`;

const StyledCheckbox = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%; 
  border: 2px solid #ccc;
  background-color: ${props => (props.checked ? '#4caf50' : 'transparent')};
  transition: background-color 0.2s, border-color 0.2s;
  margin-right: 10px;
  cursor: pointer;

  &:hover {
    border-color: #4caf50;
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
  color: #3195ff;
  gap: 10px;

  &:hover {
    cursor: pointer;
  }
`;

const Img = styled.img`
  width: 20px;
  height: 20px;
`;

const TaskList = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const TaskCard = styled.div`
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 15px;
  border-left: 4px solid ${props => {
    if (props.status === 'concluido') return '#4caf50';
    if (props.status === 'em-andamento') return '#ffc107';
    return '#2196f3';
  }};
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const TaskHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

const TaskTitle = styled.h3`
  margin: 0;
  color: #333;
`;

const TaskDate = styled.span`
  font-size: 0.85rem;
  color: #666;
`;

const TaskDeleteBtn = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
`;

const TaskDetails = styled.p`
  margin: 8px 0;
  color: #555;
`;

const TaskCategory = styled.span`
  display: inline-block;
  background-color: #e0e0e0;
  padding: 3px 8px;
  border-radius: 12px;
  font-size: 0.75rem;
  color: #333;
`;

const TaskContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const TasksWrapper = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  margin-bottom: 20px;
`;

const AddButtonWrapper = styled.div`
  margin-top: auto;
  padding-top: 20px;
  border-top: 1px solid #eee;
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tasks, setTasks] = useState([]);

  const handleSaveTask = (newTask) => {
    setTasks([...tasks, { ...newTask, id: Date.now() }]);
    setIsModalOpen(false);
  };

  const handleTaskComplete = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId 
        ? { ...task, status: task.status === 'concluido' ? 'pendente' : 'concluido' } 
        : task
    ));
  };

  const deleteTask = (taskId) => { // fazer função de remover tarefa
    console.log(taskId)
  }

  return (
    <TaskContainer>
      <TasksWrapper>
        <TaskList>
          {tasks.map(task => (
            <TaskCard key={task.id} status={task.status}>
              <TaskHeader>
                <TaskTitle>
                  <CustomCheckbox 
                    checked={task.status === 'concluido'} 
                    onChange={() => handleTaskComplete(task.id)} 
                  />
                  {task.title}
                </TaskTitle>
                <TaskDate>{new Date(task.date).toLocaleDateString()}</TaskDate>
                <TaskDeleteBtn onClick={() => deleteTask()}>
                  <img src="/assets/icon-delete.svg" alt="Botão de deletar" />
                </TaskDeleteBtn>
              </TaskHeader>
              {task.details && <TaskDetails>{task.details}</TaskDetails>}
              <div>
                <span style={{ 
                  color: task.status === 'concluido' ? '#4caf50' : 
                         task.status === 'em-andamento' ? '#ffc107' : '#2196f3',
                  fontWeight: '500'
                }}>
                  {task.status.charAt(0).toUpperCase() + task.status.slice(1)}
                </span>
                {task.category && (
                  <>
                    <span style={{ margin: '0 8px', color: '#ddd' }}>|</span>
                    <TaskCategory>{task.category}</TaskCategory>
                  </>
                )}
              </div>
            </TaskCard>
          ))}
        </TaskList>
      </TasksWrapper>

      <AddButtonWrapper>
        <Button onClick={() => setIsModalOpen(true)}>
          <Img src="/assets/icon-add.svg" alt="Adicionar tarefa" />
          <p style={{ color: '#797979', fontSize: '20px' }}>Adicionar tarefa...</p>
        </Button>
      </AddButtonWrapper>

      <TaskModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveTask}
      />
    </TaskContainer>
  );
}

export default TaskItem;