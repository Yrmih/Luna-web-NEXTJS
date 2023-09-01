
export type Bens = {
    valor: number;
    descricao: string;
};

export type Movel = {
    valorMovel: number;
    descricaoMovel: string;
};

export type Imovel = {
    valorImovel: number;
    descricaoImovel: string;
};

export type Investimentos = {
    valorInvestimento: number;
    descricaoInvestimento: string;
};

export type QualificacaoFianceira = {
    numeroMembrosFamilia: number,
    numeroMembrosFamiliaAtivos: string,
    rendaIndividual: number,
    rendaFamiliar: number,
    bens: Bens[],
    investimentos: Investimentos[],
    aceitoTermosCondicoes: boolean,
}