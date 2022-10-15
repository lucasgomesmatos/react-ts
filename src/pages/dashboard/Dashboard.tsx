import { BarraDeFerramentas } from '../../shared/components';
import { LayoutBaseDePagina } from '../../shared/layouts';

export const Dashboard: React.FC = () => {
  return (
    <LayoutBaseDePagina
      titulo="Home"
      barraDeFerramentas={<BarraDeFerramentas mostrarInputBusca />}
    >
      Testando
    </LayoutBaseDePagina>
  );
};
