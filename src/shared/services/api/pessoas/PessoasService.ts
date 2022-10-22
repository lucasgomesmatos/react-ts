import { Environment } from "../../../environment";
import { Api } from "../axios-config";

interface IDetalhePessoa {
  id: number;
  nomeCompleto: string;
  cidadeId: number;
  email: string;
}

interface IListagemPessoa {
  id: number;
  nomeCompleto: string;
  cidadeId: number;
  email: string;
}

type TPessoasComTotalCount = {
  data: IListagemPessoa[];
  totalCount: number;
}

const getAll = async (page = 1, filter = ''): Promise<TPessoasComTotalCount | Error> => {
  try {
    const urlRelativa = `pessoas?_page=${page}&_limit=${Environment.LIMITE_DE_LINHAS}&nomeCompleto_like=${filter}`

    const { data, headers } = await Api.get(urlRelativa);

    if (data) {
      return {
        data,
        totalCount: Number(headers['x-total-count'] || Environment.LIMITE_DE_LINHAS),
      };
    }

    return new Error('Error ao listar os registros.');
  } catch (error) {
    console.error(error);
    return new Error((error as { message: string }).message || 'Erro ao listar os registros');
  }
};

const getById = async (id: number): Promise<IDetalhePessoa | Error> => {
  try {

    const { data } = await Api.get(`/pessoas/${id}`);

    if (data) {
      return data;
    }

    return new Error('Error ao consultar o registro.');
  } catch (error) {
    console.error(error);
    return new Error((error as { message: string }).message || 'Error ao consultar o registro.');
  }

}

const create = async (dados: Omit<IDetalhePessoa, 'id'>): Promise<number | Error> => {
  try {
    const { data } = await Api.post<IDetalhePessoa>(`/pessoas`, dados);

    if (data) {
      return data.id;
    }

    return new Error('Error ao criar o registro.');
  } catch (error) {
    console.error(error);
    return new Error((error as { message: string }).message || 'Error ao criar o registro.');
  }
}

const update = async (id: number, dados: IDetalhePessoa): Promise<void | Error> => {
  try {

    await Api.put(`/pessoas/${id}`, dados);

    return new Error('Error ao atualizar o registro.');
  } catch (error) {
    console.error(error);
    return new Error((error as { message: string }).message || 'Error ao atualizar o registro.');
  }
}
const deleteById = async (id: number): Promise<void | Error> => {
  try {

    await Api.delete(`/pessoas/${id}`);

    return new Error('Error ao excluir o registro.');
  } catch (error) {
    console.error(error);
    return new Error((error as { message: string }).message || 'Error ao excluir o registro.');
  }
}

export const PessoasService = {
  getAll,
  getById,
  create,
  update,
  deleteById,
}