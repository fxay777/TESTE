import React from 'react';
import styled from 'styled-components';
import { Vaga } from './Vaga';

const ListaContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const vagas = [
  { title: 'Desenvolvedor Front-End', description: 'Trabalhar com React e TypeScript.' },
  { title: 'Designer UX/UI', description: 'Criar experiências incríveis para os usuários.' },
  { title: 'Engenheiro de Software', description: 'Desenvolver soluções escaláveis.' },
];

export const ListaVagas: React.FC = () => {
  return (
    <ListaContainer>
      {vagas.map((vaga, index) => (
        <Vaga key={index} title={vaga.title} description={vaga.description} />
      ))}
    </ListaContainer>
  );
};
