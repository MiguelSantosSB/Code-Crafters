import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center; 
    justify-content: center; 
    min-height: 100vh;
    padding: 30px;
    background: linear-gradient(to bottom, #3195FF, #2C68A9, #144A85);
`;

const Card = styled.div`
    background-color: #D3D3D3;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2.5rem;
    border-radius: 30px;
    width: 100%;
    max-width: 450px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center; 
    width: 100%;
    margin-top: 1.5rem;
`;

const Img = styled.img`
    width: 100px;
    height: 100px;
    filter: drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.2));
`;

const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
`;

const Input = styled.input`
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #D3D3D3;
    border-radius: 30px;
    font-size: 1rem;
    transition: border 0.3s;
    
    &:focus {
        border-color: #3195FF;
        outline: none;
    }
`;

const Button = styled.button`
    width: 100%;
    padding: 0.75rem;
    background: linear-gradient(90deg, #3195FF 0%, #2C68A9 50.09%, #144A85 100%);
    color: white;
    border: none;
    border-radius: 30px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s;
    margin-top: 0.5rem;
    
    &:hover {
        background-color: #2C68A9;
    }
`;

const LoginText = styled.p`
    margin-top: 1.5rem;
    color: #555;
    
    a {
        color: #144A85;
        text-decoration: none;
        font-weight: 500;
        
        &:hover {
            text-decoration: underline;
        }
    }
`;

const Cadastro = () => {
    return (
        <Container>
            <Card>
                <div>
                    <Img src="/assets/icon-register.svg" alt="Ícone de cadastro" />
                </div>
                <FormContainer>
                    <Form>
                        <Input 
                            type="email" 
                            placeholder="Email" 
                            required 
                        />
                        <Input 
                            type="text" 
                            placeholder="Nome" 
                            required 
                        />
                        <Input 
                            type="password" 
                            placeholder="Senha" 
                            required 
                        />
                        <Input 
                            type="password" 
                            placeholder="Confirmar senha" 
                            required 
                        />
                        <Button type="submit">
                            Cadastrar
                        </Button>
                    </Form>
                    <LoginText>Já tem uma conta? <Link to="/login">Faça login</Link></LoginText>
                </FormContainer>
            </Card>
        </Container>
    );
}

export default Cadastro;