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
    const urlRelativa = `/pessoas?_page=${page}&_limit=${Environment.LIMITE_DE_LINHAS}&nomeCompleto_like=${filter}`

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
const getById = async (id: number): Promise<IListagemPessoa | Error> => {
  try {
    const urlRelativa = `/pessoas/${id}`

    const { data, headers } = await Api.get(urlRelativa);

    if (data) {
      return data.json();
    }

    return new Error('Error ao listar pessoa pelo id.');
  } catch (error) {
    console.error(error);
    return new Error((error as { message: string }).message || 'Error ao listar pessoa pelo id.');
  }

}

const create = async (body: IDetalhePessoa): Promise<IDetalhePessoa> => {
  try {
    const urlRelativa = `/pessoas}`

    const { data, headers } = await Api.post(urlRelativa, body);

    if (data) {
      return data.json();
    }

    return new Error('Error ao listar pessoa pelo id.');
  } catch (error) {
    console.error(error);
    return new Error((error as { message: string }).message || 'Error ao listar pessoa pelo id.');
  }
}

const update = async (): Promise<any> => { }
const deleteById = async (): Promise<any> => { }

export const PessoasService = {
  getAll,
  getById,
  create,
  update,
  deleteById,
}