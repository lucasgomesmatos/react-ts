import { LayoutBaseDePagina } from '../../shared/layouts';

export const Dashboard: React.FC = () => {
  return (
    <LayoutBaseDePagina
      titulo="Home"
      barraDeFerramentas={<>Barra de Ferramentas</>}
    >
      Testando
    </LayoutBaseDePagina>
  );
};
