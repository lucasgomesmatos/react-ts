import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FerramentaDeDetalhe } from '../../shared/components';
import { LayoutBaseDePagina } from '../../shared/layouts';
import { PessoasService } from '../../shared/services/api/pessoas/PessoasService';

export const DetalheDePessoas: React.FC = () => {
  const { id = 'nova' } = useParams<'id'>();
  const navigate = useNavigate();

  useEffect(() => {
    if (id !== 'nova') {
      PessoasService.getById;
    }
  }, [id]);

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
