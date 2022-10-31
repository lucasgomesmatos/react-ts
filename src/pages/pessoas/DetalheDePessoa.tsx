import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FerramentaDeDetalhe } from '../../shared/components';
import { LayoutBaseDePagina } from '../../shared/layouts';

export const DetalheDePessoas: React.FC = () => {
  const { id = 'nova' } = useParams<'id'>();

  const navigate = useNavigate();

  return (
    <LayoutBaseDePagina
      titulo="Detalhe de Pessoa"
      barraDeFerramentas={
        <FerramentaDeDetalhe
          textoBotaoNovo="Nova"
          mostrarBotaoSalvarEFechar
          mostrarBotaoApagar={id !== 'nova'}
          mostrarBotaoNovo={id !== 'nova'}
          aoClicarEmSalvar={() => {}}
          aoClicarEmSalvarEFechar={() => {}}
          aoClicarEmApagar={() => {}}
          aoClicarEmNovo={() => navigate('/pessoas/detalhe/nova')}
          aoClicarEmVoltar={() => navigate('/pessoas')}
        />
      }
    ></LayoutBaseDePagina>
  );
};
