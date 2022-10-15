import { FerramentaDeDetalhe } from '../../shared/components';
import { LayoutBaseDePagina } from '../../shared/layouts';

export const Dashboard: React.FC = () => {
  return (
    <LayoutBaseDePagina
      titulo="Home"
      barraDeFerramentas={<FerramentaDeDetalhe mostrarBotaoSalvarEFechar />}
    >
      Testando
    </LayoutBaseDePagina>
  );
};
