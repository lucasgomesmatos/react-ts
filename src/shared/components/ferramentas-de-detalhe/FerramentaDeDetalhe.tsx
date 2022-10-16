import {
  Box,
  Divider,
  Paper,
  Skeleton,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import React from 'react';
import { ButtonCustom } from './ButtonCustom';

interface IFerramentaDeDetalhePros {
  textoBotaoNovo?: string;
  mostrarBotaoNovo?: boolean;
  mostrarBotaoVoltar?: boolean;
  mostrarBotaoApagar?: boolean;
  mostrarBotaoSalvar?: boolean;
  mostrarBotaoSalvarEFechar?: boolean;

  mostrarBotaoNovoCarregando?: boolean;
  mostrarBotaoVoltarCarregando?: boolean;
  mostrarBotaoApagarCarregando?: boolean;
  mostrarBotaoSalvarCarregando?: boolean;
  mostrarBotaoSalvarEFecharCarregando?: boolean;

  aoClicarEmNovo?: () => void;
  aoClicarEmVoltar?: () => void;
  aoClicarEmApagar?: () => void;
  aoClicarEmSalvar?: () => void;
  aoClicarEmSalvarEFechar?: () => void;
}

export const FerramentaDeDetalhe: React.FC<IFerramentaDeDetalhePros> = ({
  textoBotaoNovo = 'Novo',

  mostrarBotaoNovo = true,
  mostrarBotaoVoltar = true,
  mostrarBotaoApagar = true,
  mostrarBotaoSalvar = true,
  mostrarBotaoSalvarEFechar = false,

  mostrarBotaoNovoCarregando = false,
  mostrarBotaoVoltarCarregando = false,
  mostrarBotaoApagarCarregando = false,
  mostrarBotaoSalvarCarregando = false,
  mostrarBotaoSalvarEFecharCarregando = false,

  aoClicarEmNovo,
  aoClicarEmVoltar,
  aoClicarEmApagar,
  aoClicarEmSalvar,
  aoClicarEmSalvarEFechar,
}) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      sx={{
        height: theme.spacing(5),
        marginX: 1,
        padding: 1,
        paddingX: 2,
        display: 'flex',
        alignItems: 'center',
        gap: 1,
      }}
      component={Paper}
    >
      {mostrarBotaoSalvar && !mostrarBotaoSalvarCarregando && (
        <ButtonCustom
          icon="save"
          variant="contained"
          onClick={aoClicarEmSalvar}
        >
          Salvar
        </ButtonCustom>
      )}

      {mostrarBotaoSalvarCarregando && (
        <Skeleton sx={{ width: '110px', height: '60px' }} />
      )}

      {mostrarBotaoSalvarEFechar &&
        !mostrarBotaoSalvarEFecharCarregando &&
        !smDown &&
        !mdDown && (
          <ButtonCustom icon="save" onClick={aoClicarEmSalvarEFechar}>
            Salvar e voltar
          </ButtonCustom>
        )}

      {mostrarBotaoSalvarEFecharCarregando && !smDown && !mdDown && (
        <Skeleton sx={{ width: '180px', height: '60px' }} />
      )}

      {mostrarBotaoApagar && !mostrarBotaoApagarCarregando && (
        <ButtonCustom icon="delete" onClick={aoClicarEmApagar}>
          Apagar
        </ButtonCustom>
      )}

      {mostrarBotaoApagarCarregando && (
        <Skeleton sx={{ width: '110px', height: '60px' }} />
      )}

      {mostrarBotaoNovo && !mostrarBotaoNovoCarregando && !smDown && (
        <ButtonCustom icon="add" onClick={aoClicarEmNovo}>
          {textoBotaoNovo}
        </ButtonCustom>
      )}

      {mostrarBotaoNovoCarregando && !smDown && (
        <Skeleton sx={{ width: '110px', height: '60px' }} />
      )}

      {mostrarBotaoVoltar &&
        (mostrarBotaoNovo ||
          mostrarBotaoApagar ||
          mostrarBotaoSalvar ||
          mostrarBotaoSalvarEFechar) && (
          <Divider variant="middle" orientation="vertical" />
        )}

      {mostrarBotaoVoltar && !mostrarBotaoVoltarCarregando && (
        <ButtonCustom icon="arrow_back" onClick={aoClicarEmVoltar}>
          Voltar
        </ButtonCustom>
      )}

      {mostrarBotaoVoltarCarregando && (
        <Skeleton sx={{ width: '110px', height: '60px' }} />
      )}
    </Box>
  );
};
