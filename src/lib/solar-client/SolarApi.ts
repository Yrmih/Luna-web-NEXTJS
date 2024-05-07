/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface Acordo {
  /** ID */
  id?: number;
  /** Tipo */
  tipo?: 0 | 5 | 1 | 2 | 3 | 4;
  /** Ativo */
  ativo?: boolean;
  /** Atendimento */
  atendimento: number;
  /** Termo */
  termo?: number | null;
}

export interface Generic {
  /** Id */
  id: number;
  /** Nome */
  nome?: string;
}

export interface Usuario {
  /** ID */
  id?: number;
  /**
   * Usuário
   * Obrigatório. 150 caracteres ou menos. Letras, números e @/./+/-/_ apenas.
   * @minLength 1
   * @maxLength 150
   * @pattern ^[\w.@+-]+$
   */
  username: string;
  /** Nome */
  nome?: string;
  /**
   * Endereço de email
   * @format email
   * @maxLength 254
   */
  email?: string;
  /**
   * Foto
   * @format uri
   * @minLength 1
   */
  foto: string;
  /**
   * Papel
   * @minLength 1
   */
  papel: string;
  /**
   * Comarca
   * @minLength 1
   */
  comarca: string;
}

export interface AgendaFilho {
  /** ID */
  id?: number;
  defensoria: Generic;
}

export interface Agenda {
  /** ID */
  id?: number;
  /**
   * Titulo
   * @maxLength 256
   */
  titulo?: string | null;
  defensoria: Generic;
  /**
   * Data inicial
   * @format date
   */
  data_inicial: string;
  /**
   * Data final
   * @format date
   */
  data_final: string;
  /**
   * Cadastrado em
   * @format date-time
   */
  cadastrado_em: string;
  cadastrado_por: Usuario;
  filhos: AgendaFilho[];
}

export interface AgendaFilhoDetail {
  /** ID */
  id?: number;
  defensoria: Generic;
  horarios: (string | null)[];
}

export interface AgendaDetail {
  /** ID */
  id?: number;
  /**
   * Titulo
   * @maxLength 256
   */
  titulo?: string | null;
  defensoria: Generic;
  /**
   * Data inicial
   * @format date
   */
  data_inicial: string;
  /**
   * Data final
   * @format date
   */
  data_final: string;
  /**
   * Cadastrado em
   * @format date-time
   */
  cadastrado_em: string;
  cadastrado_por: Usuario;
  filhos: AgendaFilhoDetail[];
  horarios: (string | null)[];
}

export interface Aprisionamento {
  /** ID */
  id?: number;
  /**
   * Data da Início
   * @format date-time
   */
  data_inicial: string;
  /**
   * Data de Término
   * @format date-time
   */
  data_final?: string | null;
  /** Situação */
  situacao?: 0 | 1 | 2;
  /** Historico */
  historico?: string | null;
  /** Detração */
  detracao?: boolean;
  /**
   * Data de Cadastro
   * @format date-time
   */
  data_cadastro?: string | null;
  /** Origem */
  origem_cadastro?: 0 | 1 | 2 | 3;
  /**
   * Data de Exclusão
   * @format date-time
   */
  data_exclusao?: string | null;
  /** Ativo */
  ativo?: boolean;
  /** Prisao */
  prisao: number;
  /** Estabelecimento Penal */
  estabelecimento_penal: number;
  /** Cadastrado por */
  cadastrado_por?: number | null;
  /** Excluido por */
  excluido_por?: number | null;
  /** @uniqueItems true */
  eventos?: number[];
}

export interface Area {
  /** ID */
  id?: number;
  /**
   * Nome
   * @minLength 1
   * @maxLength 200
   */
  nome: string;
  /** Penal */
  penal?: boolean;
  /** Ativo */
  ativo?: boolean;
}

export interface DefensorDocumento {
  /** ID */
  id?: number;
  /**
   * Arquivo
   * @format uri
   */
  arquivo?: string;
  /**
   * Nome
   * @maxLength 255
   */
  nome?: string | null;
  /** Ativo */
  ativo?: boolean;
  /**
   * Data de Envio
   * @format date-time
   */
  data_enviado?: string | null;
  /**
   * Data de Exclusão
   * @format date-time
   */
  data_exclusao?: string | null;
  /** Minificado */
  minificado?: boolean;
  /** Pessoa */
  pessoa: number;
  /** Documento */
  documento?: number | null;
  /** Enviado por */
  enviado_por?: number | null;
  /** Excluido por */
  excluido_por?: number | null;
  /** Documento assinado */
  documento_assinado?: number | null;
}

export interface Filiacao {
  /** ID */
  id?: number;
  /** Tipo str */
  tipo_str?: string;
  /**
   * Nome
   * @minLength 1
   * @maxLength 256
   */
  nome: string;
  /** Tipo */
  tipo: 0 | 1;
}

export interface Telefone {
  /** ID */
  id?: number;
  /** Tipo str */
  tipo_str?: string;
  /**
   * Cadastrado em
   * @format date-time
   */
  cadastrado_em?: string | null;
  /**
   * Modificado em
   * @format date-time
   */
  modificado_em?: string | null;
  /**
   * Desativado em
   * @format date-time
   */
  desativado_em?: string | null;
  /**
   * Ddd
   * @min -32768
   * @max 32767
   */
  ddd?: number | null;
  /**
   * Número
   * @minLength 1
   * @maxLength 10
   */
  numero: string;
  /** Tipo */
  tipo: 0 | 1 | 2 | 3 | 4 | 5;
  /**
   * Nome
   * @maxLength 256
   */
  nome?: string | null;
  /** Cadastrado por */
  cadastrado_por?: number | null;
  /** Modificado por */
  modificado_por?: number | null;
  /** Desativado por */
  desativado_por?: number | null;
}

export interface Endereco {
  /** ID */
  id?: number;
  /**
   * Cadastrado em
   * @format date-time
   */
  cadastrado_em?: string | null;
  /**
   * Modificado em
   * @format date-time
   */
  modificado_em?: string | null;
  /**
   * Desativado em
   * @format date-time
   */
  desativado_em?: string | null;
  /**
   * Logradouro
   * @maxLength 256
   */
  logradouro?: string | null;
  /**
   * Número
   * @maxLength 32
   */
  numero?: string | null;
  /**
   * Complemento
   * @maxLength 512
   */
  complemento?: string | null;
  /**
   * CEP
   * @maxLength 10
   */
  cep?: string | null;
  /** Tipo area */
  tipo_area?: 0 | 1 | null;
  /** Principal */
  principal?: boolean;
  /** Tipo */
  tipo?: 10 | 20 | 30 | 40;
  /** Cadastrado por */
  cadastrado_por?: number | null;
  /** Modificado por */
  modificado_por?: number | null;
  /** Desativado por */
  desativado_por?: number | null;
  /** Bairro */
  bairro?: number | null;
  /** Municipio */
  municipio: number;
}

export interface PessoaPatrimonial {
  /** ID */
  id?: number;
  /** Tipo str */
  tipo_str?: string;
  /** Grupo str */
  grupo_str?: string;
  /**
   * Valor
   * @format decimal
   */
  valor?: string;
  /**
   * Descricao
   * @maxLength 6000
   */
  descricao?: string | null;
  /** É bem de família destinado a residência? */
  eh_bem_familia?: boolean;
  /** Tipo */
  tipo?: number;
}

export interface PessoaDependente {
  /** ID */
  id?: number;
  /** Situacao str */
  situacao_str?: string;
  /** Parentesco str */
  parentesco_str?: string;
  /**
   * Nome
   * @minLength 1
   * @maxLength 256
   */
  nome: string;
  /** Situação */
  situacao?: 0 | 1 | 2 | 3 | null;
  /** Grau de Parentesco */
  parentesco: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
  /**
   * Renda Individual
   * Ganhos mensais, em R$, do dependente
   * @format decimal
   */
  renda?: string;
  /** Situacao dependente */
  situacao_dependente?: number | null;
  /** Tipo renda */
  tipo_renda?: number | null;
}

export interface Renda {
  /** ID */
  id?: number;
  /**
   * Nº Membros
   * Número de membros na entidade familiar
   * @min 1
   * @max 32767
   */
  numero_membros?: number;
  /**
   * Nº Membros Economicamente Ativos
   * Número de membros na entidade familiar economicamente ativos
   * @min -32768
   * @max 32767
   */
  numero_membros_economicamente_ativos?: number;
  /**
   * Nº Dependentes
   * @min -32768
   * @max 32767
   */
  numero_dependentes?: number;
  /**
   * Renda Individual
   * Ganhos mensais, em R$, do declarante
   * @format decimal
   */
  ganho_mensal?: string;
  /**
   * Renda Familiar
   * Ganhos mensais, em R$, da entidade familiar
   * @format decimal
   */
  ganho_mensal_membros?: string;
  /** Tem gastos tratamento */
  tem_gastos_tratamento?: boolean;
  /**
   * Valor tratamento
   * @format decimal
   */
  valor_tratamento?: string;
  /** Plano de Saúde */
  tem_plano_saude?: boolean;
  /**
   * Nome plano saude
   * @maxLength 255
   */
  nome_plano_saude?: string | null;
  /**
   * Valor nome saude
   * @format decimal
   */
  valor_nome_saude?: string;
  /** Tem beneficio assistencial */
  tem_beneficio_assistencial?: boolean;
  /**
   * Valor beneficio assistencial
   * @format decimal
   */
  valor_beneficio_assistencial?: string;
  /** Tem educacao particular filhos */
  tem_educacao_particular_filhos?: boolean;
  /**
   * Valor educacao particular filhos
   * @format decimal
   */
  valor_educacao_particular_filhos?: string;
  /** Declara IR? */
  declarante_ir?: boolean;
  /** Isento IR? */
  isento_ir?: boolean;
  /** Previdencia */
  previdencia?: boolean;
  /**
   * Tem Fins Lucrativos
   * Selecione caso seja Pessoa Júridica e tenha fins lucrativos
   */
  tem_fins_lucrativos?: boolean;
  /**
   * Maior Remuneração
   * Preencha com a maior remuneração paga mensalmente
   * @format decimal
   */
  salario_funcionario?: string;
  /**
   * Data em que a triagem foi realizada
   * @format date-time
   */
  triagem_em?: string | null;
  /**
   * Data de expiração da triagem
   * @format date
   */
  triagem_data_expiracao?: string | null;
  /**
   * Tipo de renda
   * Tipo da renda individual do assistido
   */
  tipo_renda?: number | null;
  /** Triagem realizada por */
  triagem_por?: number | null;
}

export interface Moradia {
  /** ID */
  id?: number;
  /** Imóvel */
  tipo?: 5 | 0 | 1 | 2 | 3 | 4;
  /**
   * Nº cômodos
   * @min -32768
   * @max 32767
   */
  num_comodos?: number | null;
  /** @uniqueItems true */
  estrutura?: number[];
}

export interface PessoaAssistida {
  /** ID */
  id?: number;
  filiacoes: Filiacao[];
  telefones: Telefone[];
  enderecos: Endereco[];
  patrimonios?: PessoaPatrimonial[];
  dependentes?: PessoaDependente[];
  renda: Renda;
  moradia: Moradia;
  /** Hipossuficiente */
  hipossuficiente?: string;
  /**
   * Cadastrado em
   * @format date-time
   */
  cadastrado_em?: string | null;
  /**
   * Modificado em
   * @format date-time
   */
  modificado_em?: string | null;
  /**
   * Desativado em
   * @format date-time
   */
  desativado_em?: string | null;
  /**
   * Nome
   * @minLength 1
   * @maxLength 256
   */
  nome: string;
  /**
   * Apelido
   * @maxLength 256
   */
  apelido?: string | null;
  /**
   * Data de nascimento
   * @format date
   */
  data_nascimento?: string | null;
  /** Gênero */
  sexo?: 0 | 1 | 2 | null;
  /**
   * CPF
   * @maxLength 32
   */
  cpf?: string | null;
  /**
   * Nº RG
   * @maxLength 32
   */
  rg_numero?: string | null;
  /**
   * Orgão RG
   * @maxLength 32
   */
  rg_orgao?: string | null;
  /**
   * Data expedição RG
   * @format date
   */
  rg_data_expedicao?: string | null;
  /** Tipo Certidão Civil */
  certidao_tipo?: "CN" | "CC" | "CO" | null;
  /**
   * Nº Certidão Civil
   * Novo modelo (32 dígitos)
   * @maxLength 32
   */
  certidao_numero?: string | null;
  /**
   * Email
   * @format email
   * @maxLength 128
   */
  email?: string | null;
  /** Tipo */
  tipo?: 0 | 1;
  /** Possui Doença Grave */
  possui_doenca_grave?: boolean;
  /**
   * Nome social
   * @maxLength 256
   */
  nome_social?: string | null;
  /** Declara orientação sexual */
  declara_orientacao_sexual?: boolean;
  /** Declara identidade de gênero */
  declara_identidade_genero?: boolean;
  /** Cadastro protegido contra alterações (cpf/cnpj, nome/razão social, apelido/nome fantasia) */
  cadastro_protegido?: boolean;
  /** Aderiu ao Zap Defensoria */
  aderiu_zap_defensoria?: boolean;
  /** Aderiu a Luna Chatbot */
  aderiu_luna_chatbot?: boolean;
  /** Aderiu ao SMS */
  aderiu_sms?: boolean;
  /** Aderiu ao e-Defensor */
  aderiu_edefensor?: boolean;
  /** Estado Civil */
  estado_civil?: 0 | 1 | 2 | 3 | 4 | 5 | null;
  /**
   * Qtd. Filhos
   * @min -32768
   * @max 32767
   */
  qtd_filhos?: number | null;
  /**
   * Qtd. Pessoas
   * Quantidade de pessoas que morando junto, incluido assistido
   * @min -32768
   * @max 32767
   */
  qtd_pessoas?: number | null;
  /** Escolaridade */
  escolaridade?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | null;
  /** Tipo de trabalho */
  tipo_trabalho?: 0 | 1 | 2 | 3 | 4 | null;
  /**
   * Qtd. anos no Estado
   * Quantidade de anos que reside no Estado em que vive
   * @min -32768
   * @max 32767
   */
  qtd_estado?: number | null;
  /** Cor/Raça */
  raca?: 0 | 1 | 2 | 3 | 4 | 5 | null;
  /**
   * Naturalidade
   * @maxLength 128
   */
  naturalidade?: string | null;
  /**
   * Naturalidade (UF)
   * @maxLength 128
   */
  naturalidade_estado?: string | null;
  /** Nacionalidade */
  nacionalidade?: 0 | 1 | 2 | null;
  /** Cartão SUS */
  cartao_sus?: boolean;
  /**
   * Número de Identificação Social (NIS)
   * @maxLength 15
   */
  nis?: string | null;
  /** Plano de Saúde */
  plano_saude?: boolean;
  /**
   * Foto
   * @format uri
   */
  foto?: string | null;
  /** Cadastrado por */
  cadastrado_por?: number | null;
  /** Modificado por */
  modificado_por?: number | null;
  /** Desativado por */
  desativado_por?: number | null;
  /** Doença Grave */
  doenca_grave?: number | null;
  /** Orientação Sexual */
  orientacao_sexual?: number | null;
  /** Identidade de Gênero */
  identidade_genero?: number | null;
  /** Gênero */
  genero?: number | null;
  /** País de Origem */
  naturalidade_pais?: number | null;
  /** Profissao */
  profissao?: number | null;
  /** @uniqueItems true */
  situacoes?: number[];
  /** @uniqueItems true */
  deficiencias?: number[];
  /** @uniqueItems true */
  bens?: number[];
}

export interface PessoaAssistidoConsulta {
  /**
   * Cpf
   * @minLength 1
   */
  cpf?: string;
  /**
   * Rg numero
   * @minLength 1
   */
  rg_numero?: string;
  /**
   * Email
   * @format email
   * @minLength 1
   */
  email?: string;
}

export interface ErroResponse {
  /**
   * Mensagem
   * @minLength 1
   */
  mensagem: string;
}

export interface Assunto {
  /** ID */
  id?: number;
  /**
   * Título
   * @minLength 1
   * @maxLength 256
   */
  titulo: string;
  /**
   * Código
   * @maxLength 256
   */
  codigo?: string | null;
  /**
   * Ordem
   * @min -2147483648
   * @max 2147483647
   */
  ordem: number;
  /**
   * Data de cadastro
   * @format date-time
   */
  data_cadastro?: string;
  /**
   * Data de Exclusao
   * @format date-time
   */
  data_exclusao?: string | null;
  /**
   * Descição Completa (Caminho)
   * @maxLength 256
   */
  descricao?: string | null;
  /** Ativo */
  ativo?: boolean;
  /** Pai */
  pai?: number | null;
  /** Cadastrado por */
  cadastrado_por?: number | null;
  /** Excluido por */
  excluido_por?: number | null;
}

export interface Coletivo {
  /** ID */
  id?: number;
  /**
   * Propac
   * @minLength 1
   * @maxLength 25
   */
  propac: string;
  /** Atendimento */
  atendimento: number;
  /** Comunidade */
  comunidade?: number | null;
}

export interface AtendimentoDocumento {
  /**
   * Nome
   * @maxLength 255
   */
  nome?: string | null;
  /**
   * Anexo
   * @format uri
   */
  arquivo?: string | null;
  /** Atendimento */
  atendimento?: number | null;
  /** Enviado por */
  enviado_por?: number | null;
}

export interface DocumentoGED {
  /** Pessoa assistida id */
  pessoa_assistida_id: number;
  /** Modelo ged id */
  modelo_ged_id: number;
  /** Atendimento id */
  atendimento_id: number;
  /**
   * Nome documento
   * @minLength 1
   * @maxLength 255
   */
  nome_documento?: string;
  /**
   * Conteudo html
   * @minLength 1
   */
  conteudo_html?: string;
  /** Tipo documento id */
  tipo_documento_id?: number | null;
}

export interface DocumentoAtendimento {
  /** ID */
  id?: number;
  /**
   * Anexo
   * @format uri
   */
  arquivo?: string | null;
  /**
   * Nome
   * @maxLength 255
   */
  nome?: string | null;
  /** Ativo */
  ativo?: boolean;
  /**
   * Data enviado
   * @format date-time
   */
  data_enviado?: string | null;
  /**
   * Data de Cadastro
   * @format date-time
   */
  data_cadastro?: string | null;
  /**
   * Data de Exclusão
   * @format date-time
   */
  data_exclusao?: string | null;
  /**
   * Prazo resposta
   * @format date-time
   */
  prazo_resposta?: string | null;
  /** Status resposta */
  status_resposta?: 0 | 1 | 2 | null;
  /** Analisar */
  analisar?: boolean;
  /**
   * Data analise
   * @format date-time
   */
  data_analise?: string | null;
  /** Minificado */
  minificado?: boolean;
  /** Atendimento */
  atendimento?: number | null;
  /** Defensoria */
  defensoria?: number | null;
  /** Impedimento */
  impedimento?: number | null;
  /** Pessoa */
  pessoa?: string | null;
  /** Modelo */
  modelo?: number | null;
  /** Tipo */
  documento?: number | null;
  /** Documento */
  documento_online?: number | null;
  /** Enviado por */
  enviado_por?: number | null;
  /** Cadastrado por */
  cadastrado_por?: number | null;
  /** Excluido por */
  excluido_por?: number | null;
  /** Documento resposta */
  documento_resposta?: number | null;
  /** Analisado por */
  analisado_por?: number | null;
  /** Documento assinado */
  documento_assinado?: number | null;
  /** Pasta */
  pasta?: number | null;
  /** Solicitação que deu origem a esse documento */
  solicitacao?: number | null;
}

export interface ErrorResponse {
  /**
   * Mensagem
   * @minLength 1
   */
  mensagem: string;
}

export interface Atendimento {
  /** ID */
  id?: number;
  /**
   * Numero
   * @min -9223372036854776000
   * @max 9223372036854776000
   */
  numero?: number | null;
  /**
   * UUID
   * @format uuid
   */
  uuid?: string | null;
  /** Tipo */
  tipo?: 0 | 1 | 2 | 3 | 1031 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 1092 | 11 | 12 | 13 | 14 | 999 | 998;
  /**
   * Data do agendamento
   * @format date-time
   */
  data_agendamento?: string | null;
  /**
   * Data do atendimento
   * @format date-time
   */
  data_atendimento?: string | null;
  /** Histórico Atendimento */
  historico?: string | null;
  /** Histórico Agendamento */
  historico_recepcao?: string | null;
  /** Remarcado auto */
  remarcado_auto?: boolean;
  /** Prazo */
  prazo?: boolean;
  /** Exibir no Painel de Acompanhamento? */
  exibir_no_painel_de_acompanhamento?: boolean;
  /** Prioridade */
  prioridade?: 0 | 10 | 20 | 30;
  /** Qualificado por IA? */
  qualificado_por_ia?: boolean;
  /** Assertividade da Qualificação por IA */
  qualificado_por_ia_assertividade?: number | null;
  /**
   * Multiplicador
   * @min 0
   * @max 32767
   */
  multiplicador?: number;
  /** Interesse conciliacao */
  interesse_conciliacao?: 10 | 20 | null;
  /** Justificativa nao interesse */
  justificativa_nao_interesse?: string | null;
  /**
   * Data de Cadastro
   * @format date-time
   */
  data_cadastro?: string | null;
  /**
   * Data de Cadastro CRC
   * @format date-time
   */
  data_cadastro_crc?: string | null;
  /**
   * Data de Modificação
   * @format date-time
   */
  data_modificacao?: string | null;
  /**
   * Motivo exclusao
   * @maxLength 800
   */
  motivo_exclusao?: string | null;
  /**
   * Data de Exclusão
   * @format date-time
   */
  data_exclusao?: string | null;
  /** Ativo */
  ativo?: boolean;
  /** Oficio */
  oficio?: boolean;
  /** Detalhes do Ofício */
  detalhes?: string | null;
  /** Resposta foi visualizada? (pergunta via Luna) */
  resposta_visualizada_por_atendente?: boolean | null;
  /** Agenda */
  agenda?: number;
  /** Agendado por */
  agendado_por?: number | null;
  /** Atendido por */
  atendido_por?: number | null;
  /** Inicial */
  inicial?: number | null;
  /** Origem */
  origem?: number | null;
  /** Remarcado */
  remarcado?: number | null;
  /** Nucleo */
  nucleo?: number | null;
  /** Qualificação */
  qualificacao?: number | null;
  /** Qualificação (IA) */
  qualificacao_ia?: number | null;
  /** Forma de atendimento */
  forma_atendimento?: number | null;
  /** Atendimento Coletivo */
  tipo_coletividade?: number | null;
  /** Cadastrado por */
  cadastrado_por?: number | null;
  /** Modificado por */
  modificado_por?: number | null;
  /** Tipo motivo exclusao */
  tipo_motivo_exclusao?: number | null;
  /** Excluido por */
  excluido_por?: number | null;
  /** @uniqueItems true */
  assuntos?: number[];
  /** @uniqueItems true */
  participantes?: number[];
  /** @uniqueItems true */
  etiquetas?: number[];
}

export interface AtendimentoContainer {
  /** Id */
  id: number;
  /** Tipo */
  tipo?: 0 | 1 | 2 | 3 | 1031 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 1092 | 11 | 12 | 13 | 14 | 999 | 998;
  /**
   * Area
   * @minLength 1
   */
  area?: string;
  /**
   * Qualificacao
   * @minLength 1
   */
  qualificacao?: string;
  /**
   * Numero
   * @minLength 1
   */
  numero?: string;
  /**
   * Data agendamento
   * @minLength 1
   */
  data_agendamento?: string | null;
  /**
   * Data atendimento
   * @minLength 1
   */
  data_atendimento?: string | null;
  /** Documentos pendentes */
  documentos_pendentes?: number;
  /** Situacao */
  situacao?: 1 | 2 | 3 | 4 | 5 | 6;
  /**
   * Proximo atendimento
   * @format date-time
   */
  proximo_atendimento?: string | null;
}

export interface AtendimentoPessoaListResponse {
  /** Id */
  id: number;
  /** Representante modalidade */
  representante_modalidade?: "P" | "AP" | "SP" | "T" | "C" | null;
  /** Tipo */
  tipo: 0 | 1 | 4 | 5;
  /** Responsavel */
  responsavel: boolean;
  /** Ativo */
  ativo: boolean;
  /** Pessoa */
  pessoa: number;
  /** Representante */
  representante?: number | null;
  atendimento?: AtendimentoContainer;
}

export interface AtendimentoPessoaListResponsePagination {
  /** Count */
  count: number;
  /**
   * Next
   * @minLength 1
   */
  next?: string | null;
  /**
   * Previous
   * @minLength 1
   */
  previous?: string | null;
  results: AtendimentoPessoaListResponse[];
}

export interface AtendimentoPessoaListError {
  /**
   * Mensagem
   * @minLength 1
   */
  mensagem: string;
}

export interface AtendimentoPessoa {
  /** ID */
  id?: number;
  /** Representante modalidade */
  representante_modalidade?: "P" | "AP" | "SP" | "T" | "C" | null;
  /** Tipo */
  tipo: 0 | 1 | 4 | 5;
  /** Responsavel */
  responsavel?: boolean;
  /** Ativo */
  ativo?: boolean;
  /** Atendimento */
  atendimento: number;
  /** Pessoa */
  pessoa: string;
  /** Representante */
  representante?: number | null;
}

export interface AtendimentoPessoaConsulta {
  /**
   * Cpf
   * @minLength 1
   */
  cpf?: string;
  /**
   * Rg numero
   * @minLength 1
   */
  rg_numero?: string;
  /**
   * Email
   * @format email
   * @minLength 1
   */
  email?: string;
}

export interface ErrorPessoAtendimentoWithSituacaoResponse {
  /** Situacao */
  situacao: 0 | 1 | 2 | 3;
  /**
   * Mensagem
   * @minLength 1
   */
  mensagem: string;
}

export interface AtendimentoParticipante {
  /** ID */
  id?: number;
  /** Atendimento */
  atendimento: number;
  /** Servidor */
  servidor: number;
  /** Cargo */
  cargo?: number | null;
}

export interface AtendimentoTotalSerializar {
  /** Tipo */
  tipo?: string;
  /** Quantidade */
  quantidade: number;
}

export interface DefensoriaBasico {
  /** ID */
  id?: number;
  /**
   * Código
   * @maxLength 25
   */
  codigo?: string | null;
  /**
   * Nome
   * @minLength 1
   * @maxLength 255
   */
  nome: string;
  /**
   * Atuacao
   * @maxLength 1024
   */
  atuacao?: string | null;
  /** Pode vincular processo judicial? */
  pode_vincular_processo_judicial?: boolean;
}

export interface DefensorUsuario {
  /** ID */
  id?: number;
  /**
   * Username
   * @minLength 1
   */
  username: string;
  /**
   * Nome
   * @minLength 1
   */
  nome?: string;
}

export interface ServidorUsuario {
  /** ID */
  id?: number;
  /**
   * Username
   * @minLength 1
   */
  username: string;
  /**
   * Nome
   * @minLength 1
   */
  nome?: string;
}

export interface AtendimentoDefensor {
  /** ID */
  id?: number;
  /**
   * Numero
   * @min -9223372036854776000
   * @max 9223372036854776000
   */
  numero?: number | null;
  /**
   * Tipo
   * @minLength 1
   */
  tipo: string;
  qualificacao: Generic;
  agenda: Generic;
  /**
   * Data do agendamento
   * @format date-time
   */
  data_agendamento?: string | null;
  /**
   * Data do atendimento
   * @format date-time
   */
  data_atendimento?: string | null;
  defensoria: DefensoriaBasico;
  defensor: DefensorUsuario;
  substituto: DefensorUsuario;
  atendido_por: ServidorUsuario;
  requerente: Generic;
  requerido: Generic;
  prioridades?: string[];
  /** @uniqueItems true */
  etiquetas?: number[];
  /** Situacao */
  situacao?: string;
  /** Salva historico em arquivo */
  salva_historico_em_arquivo: boolean;
}

export interface DefensoriaRocket {
  /** ID */
  id?: number;
  /**
   * Rocketchat department id
   * @minLength 1
   */
  rocketchat_department_id: string;
  /**
   * Nome
   * @minLength 1
   * @maxLength 255
   */
  nome: string;
}

export interface RequerenteRocket {
  /** ID */
  id?: number;
  /**
   * Nome
   * @minLength 1
   * @maxLength 256
   */
  nome: string;
}

export interface AtendimentoRocket {
  /** ID */
  id?: number;
  /**
   * Numero
   * @min -9223372036854776000
   * @max 9223372036854776000
   */
  numero?: number | null;
  /**
   * Data do agendamento
   * @format date-time
   */
  data_agendamento?: string | null;
  /** Prioridade */
  prioridade?: 0 | 10 | 20 | 30;
  defensoria: DefensoriaRocket;
  defensor: DefensorUsuario;
  responsavel: DefensorUsuario;
  requerente: RequerenteRocket;
  /** Situacao */
  situacao?: number;
  /** Resposta automatica */
  resposta_automatica?: string;
}

export interface AtividadeExtraordinaria {
  /** ID */
  id?: number;
  /**
   * Cadastrado em
   * @format date-time
   */
  cadastrado_em?: string | null;
  /**
   * Modificado em
   * @format date-time
   */
  modificado_em?: string | null;
  /**
   * Desativado em
   * @format date-time
   */
  desativado_em?: string | null;
  /**
   * Data referencia
   * @format date-time
   */
  data_referencia?: string;
  /**
   * Encerrado em
   * @format date-time
   */
  encerrado_em?: string | null;
  /**
   * Numero
   * @min -32768
   * @max 32767
   */
  numero?: number | null;
  /**
   * Titulo
   * @maxLength 255
   */
  titulo?: string | null;
  /** Historico */
  historico?: string | null;
  /** Complemento */
  complemento?: string | null;
  /** Em edição? */
  em_edicao?: boolean;
  /** Cadastrado por */
  cadastrado_por?: number | null;
  /** Modificado por */
  modificado_por?: number | null;
  /** Desativado por */
  desativado_por?: number | null;
  /** Processo */
  processo?: number | null;
  /** Parte */
  parte?: number | null;
  /** Tipo */
  tipo: number;
  /** Setor criacao */
  setor_criacao: number;
  /** Setor encaminhado */
  setor_encaminhado?: number | null;
  /** Encerrado por */
  encerrado_por?: number | null;
  /** Area */
  area?: number | null;
  /** @uniqueItems true */
  participantes?: number[];
}

export interface AtuacaoDocumento {
  /** ID */
  id?: number;
  /** Tipo str */
  tipo_str?: string;
  /**
   * Numero
   * @minLength 1
   * @maxLength 50
   */
  numero: string;
  /**
   * Data
   * @format date-time
   */
  data: string;
  /** Tipo */
  tipo?: 0 | 1 | 2 | 3;
  /**
   * Doe numero
   * @min -32768
   * @max 32767
   */
  doe_numero?: number | null;
  /**
   * Doe data
   * @format date-time
   */
  doe_data?: string | null;
  /** Ativo */
  ativo?: boolean;
}

export interface ServidorBasic {
  /** ID */
  id?: number;
  /**
   * Nome
   * @maxLength 256
   */
  nome?: string;
  /** Username */
  username?: string;
  /** Eh defensor */
  eh_defensor?: string;
}

export interface Atuacao {
  /** ID */
  id?: number;
  /**
   * Data inicial
   * @format date-time
   */
  data_inicial: string;
  /**
   * Data final
   * @format date-time
   */
  data_final: string;
  defensoria: Generic;
  defensor: Generic;
  /** Usuario */
  usuario?: number;
  titular: Generic;
  cargo: Generic;
  documento: AtuacaoDocumento;
  cadastrado_por: ServidorBasic;
  excluido_por: ServidorBasic;
  /**
   * Data de Cadastro
   * @format date-time
   */
  data_cadastro?: string | null;
  /**
   * Data da última atualização
   * @format date-time
   */
  data_atualizacao?: string | null;
  /**
   * Data de Exclusão
   * @format date-time
   */
  data_exclusao?: string | null;
  /** Tipo */
  tipo?: 0 | 1 | 2 | 3;
  /** Observação */
  observacao?: string | null;
  /** É designação extraordinária? */
  designacao_extraordinaria?: boolean;
  /** Ativo */
  ativo?: boolean;
  /**
   * Cód. Athenas
   * @maxLength 25
   */
  codigo_athenas?: string | null;
  /**
   * Cód. Plantão
   * @maxLength 25
   */
  codigo_plantao?: string | null;
  /**
   * Cód. Plantão Local
   * @maxLength 25
   */
  codigo_plantao_local?: string | null;
  /** Foi enviado e-mail c/ extrato do plantão? */
  foi_enviado_email_plantao?: boolean;
  /** Pode assinar GED? */
  pode_assinar_ged?: boolean;
  /** Habilitado pra usar chat e-Defensor */
  habilitado_chat_edefensor?: boolean;
  /** Ativada a visualização do chat e-Defensor */
  visualiza_chat_edefensor?: boolean;
}

export interface Atualizacao {
  /** ID */
  id?: number;
  /** Tipo */
  tipo: 0 | 1 | 2;
  /**
   * Data
   * @format date-time
   */
  data: string;
  /**
   * Texto
   * @minLength 1
   * @maxLength 512
   */
  texto: string;
  /** Ativo */
  ativo?: boolean;
}

export interface AudienciaTotal {
  /** Tipo */
  tipo?: string;
  /** Quantidade */
  quantidade: number;
}

export interface Audiencia {
  /** ID */
  id?: number;
  /**
   * Data de Cadastro
   * @format date-time
   */
  data_cadastro?: string | null;
  /**
   * Modificado em
   * @format date-time
   */
  modificado_em?: string | null;
  /**
   * Data de Exclusão
   * @format date-time
   */
  data_exclusao?: string | null;
  /** Descricao */
  descricao?: string | null;
  /**
   * Data de Protocolo
   * @format date-time
   */
  data_protocolo?: string | null;
  /**
   * Data Término do Protocolo
   * @format date-time
   */
  data_termino_protocolo?: string | null;
  /** Ativo */
  ativo?: boolean;
  /** Automático */
  automatico?: boolean;
  /** Atividade */
  atividade?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  /** Plantão */
  plantao?: boolean;
  /**
   * Evento eproc
   * @min -2147483648
   * @max 2147483647
   */
  evento_eproc?: number | null;
  /**
   * Usuario eproc
   * @maxLength 100
   */
  usuario_eproc?: string | null;
  /** Audiencia status */
  audiencia_status?: 0 | 1 | 2 | 3;
  /** Audiência Realizada */
  audiencia_realizada?: boolean;
  /** Custodia */
  custodia?: 0 | 10 | 21 | 22 | 23 | 24 | 30;
  /**
   * Data de Baixa
   * @format date-time
   */
  data_baixa?: string | null;
  /**
   * Código procapi da audiência
   * @maxLength 25
   */
  codigo_procapi?: string | null;
  /** Cadastrado por */
  cadastrado_por?: number | null;
  /** Modificado por */
  modificado_por?: number | null;
  /** Excluido por */
  excluido_por?: number | null;
  /** Tipo */
  tipo?: number;
  /** Processo */
  processo: number;
  /** Parte */
  parte?: number | null;
  /** Defensoria */
  defensoria?: number | null;
  /** Defensor cadastro */
  defensor_cadastro?: number | null;
  /** Defensor substituto */
  defensor_substituto?: number | null;
  /** Baixado por */
  baixado_por?: number | null;
}

export interface AuthAssistidoLunaRequest {
  /**
   * Cpf
   * @minLength 11
   * @maxLength 11
   */
  cpf: string;
  /**
   * Numero atendimento
   * @min 0
   */
  numero_atendimento: number;
}

export interface AuthAssistidoLunaResponse {
  /**
   * Pessoa
   * @minLength 1
   */
  pessoa?: string | null;
  /**
   * Nome
   * @minLength 1
   */
  nome?: string | null;
  /**
   * Email
   * @minLength 1
   */
  email?: string | null;
  /** Tipo */
  tipo: 0 | 1 | 4 | 5;
}

export interface AssuntoField {
  /** Codigonacional */
  codigoNacional?: number;
  /**
   * Assuntolocal
   * @minLength 1
   */
  assuntoLocal?: string;
  /** Principal */
  principal?: boolean;
}

export interface OutroParametroField {
  /**
   * Nome
   * @minLength 1
   */
  nome?: string;
  /**
   * Meiocomunicacao
   * @minLength 1
   */
  meioComunicacao?: string;
}

export interface OrgaoJulgadorField {
  /**
   * Codigoorgao
   * @minLength 1
   */
  codigoOrgao?: string;
  /**
   * Nomeorgao
   * @minLength 1
   */
  nomeOrgao?: string;
  /**
   * Instancia
   * @minLength 1
   */
  instancia?: string;
  /**
   * Codigomunicipioibge
   * @minLength 1
   */
  codigoMunicipioIBGE?: string;
}

export interface ClasseField {
  /** Codigo */
  codigo?: number;
  /**
   * Nome
   * @minLength 1
   */
  nome?: string;
}

export interface ProcessoField {
  /**
   * Polo
   * @minLength 1
   */
  polo?: string;
  assunto?: AssuntoField;
  magistradoAtuante?: string[];
  processoVinculado?: string[];
  prioridade?: string[];
  outroParametro?: OutroParametroField;
  /**
   * Valorcausa
   * @minLength 1
   */
  valorCausa?: string;
  orgaoJulgador?: OrgaoJulgadorField;
  outrosnumeros?: string[];
  /**
   * Numero
   * @minLength 1
   */
  numero?: string;
  /** Competencia */
  competencia?: number;
  /**
   * Codigolocalidade
   * @minLength 1
   */
  codigoLocalidade?: string;
  /** Nivelsigilo */
  nivelSigilo?: number;
  /**
   * Intervencaomp
   * @minLength 1
   */
  intervencaoMP?: string;
  /** Tamanhoprocesso */
  tamanhoProcesso?: number;
  /**
   * Dataajuizamento
   * @minLength 1
   */
  dataAjuizamento?: string;
  classe?: ClasseField;
}

export interface PessoaField {
  outroNome?: string[];
  documento?: string[];
  endereco?: string[];
  pessoaRelacionada?: string[];
  /**
   * Pessoavinculada
   * @minLength 1
   */
  pessoaVinculada?: string;
  /**
   * Nome
   * @minLength 1
   */
  nome?: string;
  /**
   * Sexo
   * @minLength 1
   */
  sexo?: string;
  /**
   * Nomegenitor
   * @minLength 1
   */
  nomeGenitor?: string;
  /**
   * Nomegenitora
   * @minLength 1
   */
  nomeGenitora?: string;
  /**
   * Datanascimento
   * @minLength 1
   */
  dataNascimento?: string;
  /**
   * Dataobito
   * @minLength 1
   */
  dataObito?: string;
  /**
   * Numerodocumentoprincipal
   * @minLength 1
   */
  numeroDocumentoPrincipal?: string;
  /**
   * Tipopessoa
   * @minLength 1
   */
  tipoPessoa?: string;
  /**
   * Cidadenatural
   * @minLength 1
   */
  cidadeNatural?: string;
  /**
   * Nacionalidade
   * @minLength 1
   */
  nacionalidade?: string;
}

export interface DestinatarioField {
  pessoa?: PessoaField;
  /**
   * Interessepublico
   * @minLength 1
   */
  interessePublico?: string;
  advogado?: string[];
  pessoaProcessualRelacionada?: string[];
  /** Assistenciajudiciaria */
  assistenciaJudiciaria?: boolean;
  /** Intimacaopendente */
  intimacaoPendente?: number;
  /**
   * Relacionamentoprocessual
   * @minLength 1
   */
  relacionamentoProcessual?: string;
}

export interface AvisoField {
  /**
   * Id
   * @minLength 1
   */
  id?: string;
  /**
   * Comunicacao
   * @minLength 1
   */
  comunicacao?: string;
  /**
   * Evento
   * @minLength 1
   */
  evento?: string;
  /**
   * Situacao
   * @minLength 1
   */
  situacao?: string;
  /** Esta aberto */
  esta_aberto?: boolean;
  /** Esta fechado */
  esta_fechado?: boolean;
  /**
   * Polo destinatario
   * @minLength 1
   */
  polo_destinatario?: string;
  /** Grau */
  grau?: number;
  /**
   * Numero
   * @minLength 1
   */
  numero?: string;
  /**
   * Tipo
   * @minLength 1
   */
  tipo?: string;
  /**
   * Tipo documento
   * @minLength 1
   */
  tipo_documento?: string;
  /** Meio comunicacao */
  meio_comunicacao?: number;
  processo?: ProcessoField;
  destinatario?: DestinatarioField;
  /**
   * Data disponibilizacao
   * @minLength 1
   */
  data_disponibilizacao?: string;
  /**
   * Prazo
   * @minLength 1
   */
  prazo?: string;
  /**
   * Prazo ciencia
   * @minLength 1
   */
  prazo_ciencia?: string;
  /**
   * Prazo inicial
   * @minLength 1
   */
  prazo_inicial?: string;
  /**
   * Prazo final
   * @minLength 1
   */
  prazo_final?: string;
  /**
   * Prazo alterado
   * @minLength 1
   */
  prazo_alterado?: string;
  prioridades?: string[];
  outros_parametros?: OutroParametroField;
  /**
   * Sistema webservice
   * @minLength 1
   */
  sistema_webservice?: string;
  /**
   * Usuario webservice
   * @minLength 1
   */
  usuario_webservice?: string;
  /** Curadoria */
  curadoria?: boolean;
  /** Distribuido */
  distribuido?: boolean;
  /**
   * Distribuido em
   * @minLength 1
   */
  distribuido_em?: string;
  /**
   * Distribuido cpf
   * @minLength 1
   */
  distribuido_cpf?: string;
  /**
   * Distribuido defensoria
   * @minLength 1
   */
  distribuido_defensoria?: string;
  etiquetas?: number[];
  /**
   * Aviso original
   * @minLength 1
   */
  aviso_original?: string;
  /**
   * Cadastrado em
   * @minLength 1
   */
  cadastrado_em?: string;
  /**
   * Modificado em
   * @minLength 1
   */
  modificado_em?: string;
  /**
   * Desativado em
   * @minLength 1
   */
  desativado_em?: string;
}

export interface AvisoDistribuirList {
  /** Count */
  count: number;
  /**
   * Next
   * @format uri
   * @minLength 1
   */
  next: string;
  /**
   * Previous
   * @format uri
   * @minLength 1
   */
  previous: string;
  results: AvisoField[];
}

export interface AvisoDistribuirCreate {
  objects: AvisoField[];
}

export interface EtiquetarAviso {
  /** Aviso */
  aviso: number;
  etiquetas: number[];
}

export interface PainelDeAvisoItem {
  /** Id */
  id: number;
  /**
   * Nome
   * @minLength 1
   */
  nome: string;
  /** Total */
  total: number;
}

export interface PainelDeAvisoGrupo {
  /**
   * Id
   * @minLength 1
   */
  id: string;
  /**
   * Nome
   * @minLength 1
   */
  nome: string;
  /** Total */
  total: number;
  itens: PainelDeAvisoItem[];
}

export interface PainelDeAviso {
  /** Total geral */
  total_geral: number;
  prateleiras: PainelDeAvisoGrupo[];
}

export interface Bairro {
  /** ID */
  id?: number;
  /**
   * Nome
   * @minLength 1
   * @maxLength 128
   */
  nome: string;
  /** Municipio */
  municipio?: number | null;
}

export interface CalculoExecucaoPenal {
  /** ID */
  id?: number;
  /**
   * Pessoa nome
   * @minLength 1
   * @maxLength 256
   */
  pessoa_nome: string;
  /**
   * Número
   * @minLength 1
   * @maxLength 50
   */
  execucao_numero: string;
  /**
   * Estabelecimento penal nome
   * @minLength 1
   * @maxLength 200
   */
  estabelecimento_penal_nome: string;
  /** Regime Atual */
  regime_atual: 0 | 1 | 2 | 3 | 4;
  /**
   * Data-Base
   * @format date
   */
  data_base: string;
  /**
   * Data p/ Progressão de Regime
   * @format date
   */
  data_progressao: string;
  /**
   * Data p/ Livramento Condicional
   * @format date
   */
  data_livramento: string;
  /**
   * Data do Término da Pena
   * @format date
   */
  data_termino: string;
  /**
   * Pena Total
   * @minLength 1
   * @maxLength 10
   */
  total_pena: string;
  /**
   * Pena Total
   * @minLength 1
   * @maxLength 10
   */
  total_detracoes: string;
  /**
   * Pena Total
   * @minLength 1
   * @maxLength 10
   */
  total_interrupcoes: string;
  /**
   * Pena Total
   * @minLength 1
   * @maxLength 10
   */
  total_remissoes: string;
  /**
   * Pena Cumprida - Data Base
   * @minLength 1
   * @maxLength 10
   */
  pena_cumprida_data_base: string;
  /**
   * Pena Cumprida - Data Registro
   * @minLength 1
   * @maxLength 10
   */
  pena_cumprida_data_registro: string;
  /**
   * Pena Restante - Data Base
   * @minLength 1
   * @maxLength 10
   */
  pena_restante_data_base: string;
  /**
   * Pena Restante - Data Registro
   * @minLength 1
   * @maxLength 10
   */
  pena_restante_data_registro: string;
  /**
   * Data-Base
   * @format date
   */
  data_atualizacao: string;
  /**
   * Atualizado por nome
   * @minLength 1
   * @maxLength 256
   */
  atualizado_por_nome: string;
  /** Ativo */
  ativo?: boolean;
  /** Pessoa */
  pessoa: string;
  /** Execucao */
  execucao: number;
  /** Estabelecimento Penal */
  estabelecimento_penal: number;
  /** Atualizado por */
  atualizado_por: number;
}

export interface Cargo {
  /** ID */
  id?: number;
  /**
   * Cadastrado em
   * @format date-time
   */
  cadastrado_em?: string | null;
  /**
   * Modificado em
   * @format date-time
   */
  modificado_em?: string | null;
  /**
   * Desativado em
   * @format date-time
   */
  desativado_em?: string | null;
  /**
   * Nome
   * @minLength 1
   * @maxLength 512
   */
  nome: string;
  /**
   * Nome norm
   * @minLength 1
   * @maxLength 512
   */
  nome_norm: string;
  /**
   * Codigo
   * @minLength 1
   * @maxLength 512
   */
  codigo: string;
  /** Cadastrado por */
  cadastrado_por?: number | null;
  /** Modificado por */
  modificado_por?: number | null;
  /** Desativado por */
  desativado_por?: number | null;
}

export interface CategoriaDeAgenda {
  /** ID */
  id?: number;
  /**
   * Nome
   * @minLength 1
   * @maxLength 256
   */
  nome: string;
  /**
   * Sigla
   * @maxLength 25
   */
  sigla?: string | null;
  /** É uma categoria que será utilizada no módulo CRC? */
  eh_categoria_crc?: boolean;
}

export interface CEP {
  /** ID */
  id?: number;
  /**
   * Cadastrado em
   * @format date-time
   */
  cadastrado_em?: string | null;
  /**
   * Modificado em
   * @format date-time
   */
  modificado_em?: string | null;
  /**
   * Desativado em
   * @format date-time
   */
  desativado_em?: string | null;
  /**
   * Cep
   * @minLength 1
   * @maxLength 8
   */
  cep: string;
  /**
   * Logradouro
   * @maxLength 256
   */
  logradouro?: string | null;
  /**
   * Complemento
   * @maxLength 256
   */
  complemento?: string | null;
  /** É o cep geral do município (ignorar validação)? */
  eh_geral?: boolean;
  /** Cadastrado por */
  cadastrado_por?: number | null;
  /** Modificado por */
  modificado_por?: number | null;
  /** Desativado por */
  desativado_por?: number | null;
  /** Municipio */
  municipio?: number | null;
  /** Bairro */
  bairro?: number | null;
}

export interface Comarca {
  /** ID */
  id?: number;
  filhos?: Generic[];
  /**
   * Data de Cadastro
   * @format date-time
   */
  data_cadastro?: string | null;
  /**
   * Data da última atualização
   * @format date-time
   */
  data_atualizacao?: string | null;
  /**
   * Data da implantação
   * @format date-time
   */
  data_implantacao?: string | null;
  /**
   * Nome
   * @minLength 1
   * @maxLength 512
   */
  nome: string;
  /**
   * Código
   * @maxLength 25
   */
  codigo?: string | null;
  /**
   * Cód. E-Proc
   * @maxLength 25
   */
  codigo_eproc?: string | null;
  /** Ativo */
  ativo?: boolean;
  /** Coordenadoria */
  coordenadoria?: number | null;
}

export interface SistemaWebService {
  /** ID */
  id?: number;
  /**
   * Cadastrado em
   * @format date-time
   */
  cadastrado_em?: string | null;
  /**
   * Modificado em
   * @format date-time
   */
  modificado_em?: string | null;
  /**
   * Desativado em
   * @format date-time
   */
  desativado_em?: string | null;
  /**
   * Nome
   * @maxLength 512
   */
  nome?: string;
  /** Cadastrado por */
  cadastrado_por?: number | null;
  /** Modificado por */
  modificado_por?: number | null;
  /** Desativado por */
  desativado_por?: number | null;
}

export interface ContribDocumento {
  /** ID */
  id?: number;
  /**
   * Nome
   * @minLength 1
   * @maxLength 256
   */
  nome: string;
  /** Exibir em documento assistido */
  exibir_em_documento_assistido?: boolean;
  /** Exibir em documento atendimento */
  exibir_em_documento_atendimento?: boolean;
  /** Exibir na tela de solicitação de documentos do atendimento ao assistido */
  exibir_em_documento_solicitacao_atendimento?: boolean;
  /** É obrigatório? */
  eh_obrigatorio?: boolean;
  /** Ativo */
  ativo?: boolean;
}

export interface Classe {
  /** ID */
  id?: number;
  /**
   * Cadastrado em
   * @format date-time
   */
  cadastrado_em?: string | null;
  /**
   * Modificado em
   * @format date-time
   */
  modificado_em?: string | null;
  /**
   * Desativado em
   * @format date-time
   */
  desativado_em?: string | null;
  /** Tipo */
  tipo?: 10 | 6030 | 6040 | 6050 | 6051 | 6052;
  /** Tipo processo */
  tipo_processo?: 10 | 20 | 30 | 40 | 50 | 60 | 70 | null;
  /**
   * Nome
   * @minLength 1
   * @maxLength 255
   */
  nome: string;
  /**
   * Nome norm
   * @minLength 1
   * @maxLength 255
   */
  nome_norm: string;
  /** Indeferimento: Pode registrar recurso? */
  indeferimento_pode_registrar_recurso?: 0 | 10 | 20;
  /** Cadastrado por */
  cadastrado_por?: number | null;
  /** Modificado por */
  modificado_por?: number | null;
  /** Desativado por */
  desativado_por?: number | null;
  /** @uniqueItems true */
  modelos_documentos?: number[];
}

export interface CoreDocumento {
  /** ID */
  id?: number;
  /**
   * Cadastrado em
   * @format date-time
   */
  cadastrado_em?: string | null;
  /**
   * Modificado em
   * @format date-time
   */
  modificado_em?: string | null;
  /**
   * Desativado em
   * @format date-time
   */
  desativado_em?: string | null;
  /**
   * Nome
   * @minLength 1
   * @maxLength 255
   */
  nome: string;
  /**
   * Arquivo
   * @format uri
   */
  arquivo?: string | null;
  /** Nível de Sigilo */
  nivel_sigilo?: 0 | 1 | 2 | 3 | 4 | 5;
  /** Cadastrado por */
  cadastrado_por?: number | null;
  /** Modificado por */
  modificado_por?: number | null;
  /** Desativado por */
  desativado_por?: number | null;
  /** Processo */
  processo?: number | null;
  /** Evento */
  evento: number;
  /** Parte */
  parte?: number | null;
  /** Tipo */
  tipo: number;
  /** Modelo */
  modelo?: number | null;
  /** Documento */
  documento?: number | null;
}

export interface CoreEvento {
  /** ID */
  id?: number;
  /**
   * Cadastrado em
   * @format date-time
   */
  cadastrado_em?: string | null;
  /**
   * Modificado em
   * @format date-time
   */
  modificado_em?: string | null;
  /**
   * Desativado em
   * @format date-time
   */
  desativado_em?: string | null;
  /**
   * Data referencia
   * @format date-time
   */
  data_referencia?: string;
  /**
   * Encerrado em
   * @format date-time
   */
  encerrado_em?: string | null;
  /**
   * Numero
   * @min -32768
   * @max 32767
   */
  numero?: number | null;
  /**
   * Titulo
   * @maxLength 255
   */
  titulo?: string | null;
  /** Historico */
  historico?: string | null;
  /** Complemento */
  complemento?: string | null;
  /** Em edição? */
  em_edicao?: boolean;
  /** Cadastrado por */
  cadastrado_por?: number | null;
  /** Modificado por */
  modificado_por?: number | null;
  /** Desativado por */
  desativado_por?: number | null;
  /** Processo */
  processo?: number | null;
  /** Parte */
  parte?: number | null;
  /** Tipo */
  tipo: number;
  /** Setor criacao */
  setor_criacao: number;
  /** Setor encaminhado */
  setor_encaminhado?: number | null;
  /** Encerrado por */
  encerrado_por?: number | null;
  /** Area */
  area?: number | null;
  /** @uniqueItems true */
  participantes?: number[];
}

export interface CoreModeloDocumento {
  /** ID */
  id?: number;
  /**
   * Cadastrado em
   * @format date-time
   */
  cadastrado_em?: string | null;
  /**
   * Modificado em
   * @format date-time
   */
  modificado_em?: string | null;
  /**
   * Desativado em
   * @format date-time
   */
  desativado_em?: string | null;
  /**
   * Nome
   * @minLength 1
   * @maxLength 255
   */
  nome: string;
  /** Tipo */
  tipo?: 0 | 1 | 2;
  /**
   * Jasper resource
   * @maxLength 255
   */
  jasper_resource?: string | null;
  /**
   * Jasper name
   * @maxLength 255
   */
  jasper_name?: string | null;
  /**
   * Jasper params
   * @maxLength 255
   */
  jasper_params?: string | null;
  /** Cadastrado por */
  cadastrado_por?: number | null;
  /** Modificado por */
  modificado_por?: number | null;
  /** Desativado por */
  desativado_por?: number | null;
  /** Tipo documento */
  tipo_documento: number;
  /** Modelo GED */
  ged_modelo?: number | null;
  /** Modelo Formulário */
  formulario_modelo?: number | null;
}

export interface Parte {
  /** ID */
  id?: number;
  /**
   * Cadastrado em
   * @format date-time
   */
  cadastrado_em?: string | null;
  /**
   * Modificado em
   * @format date-time
   */
  modificado_em?: string | null;
  /**
   * Desativado em
   * @format date-time
   */
  desativado_em?: string | null;
  /** Tipo */
  tipo: 10 | 20;
  /** Cadastrado por */
  cadastrado_por?: number | null;
  /** Modificado por */
  modificado_por?: number | null;
  /** Desativado por */
  desativado_por?: number | null;
  /** Processo */
  processo: number;
  /** Pessoa */
  pessoa: number;
}

export interface CoreProcesso {
  /** ID */
  id?: number;
  /**
   * Cadastrado em
   * @format date-time
   */
  cadastrado_em?: string | null;
  /**
   * Modificado em
   * @format date-time
   */
  modificado_em?: string | null;
  /**
   * Desativado em
   * @format date-time
   */
  desativado_em?: string | null;
  /**
   * Uuid
   * @format uuid
   */
  uuid?: string;
  /**
   * Número
   * @maxLength 50
   */
  numero?: string | null;
  /** Situacao */
  situacao?: 10 | 20 | 30;
  /** Tipo */
  tipo: 10 | 20 | 30 | 40 | 50 | 60 | 70;
  /**
   * Baixado em
   * @format date-time
   */
  baixado_em?: string | null;
  /** Cadastrado por */
  cadastrado_por?: number | null;
  /** Modificado por */
  modificado_por?: number | null;
  /** Desativado por */
  desativado_por?: number | null;
  /** Setor criacao */
  setor_criacao: number;
  /** Setor atual */
  setor_atual: number;
  /** Setor encaminhado */
  setor_encaminhado?: number | null;
  /** Classe */
  classe?: number | null;
  /** Baixado por */
  baixado_por?: number | null;
  /** @uniqueItems true */
  setores_notificados?: number[];
}

export interface TipoDocumento {
  /** ID */
  id?: number;
  /**
   * Cadastrado em
   * @format date-time
   */
  cadastrado_em?: string | null;
  /**
   * Modificado em
   * @format date-time
   */
  modificado_em?: string | null;
  /**
   * Desativado em
   * @format date-time
   */
  desativado_em?: string | null;
  /**
   * Nome
   * @minLength 1
   * @maxLength 255
   */
  nome: string;
  /**
   * Nome norm
   * @minLength 1
   * @maxLength 255
   */
  nome_norm: string;
  /** Cadastrado por */
  cadastrado_por?: number | null;
  /** Modificado por */
  modificado_por?: number | null;
  /** Desativado por */
  desativado_por?: number | null;
}

export interface TipoEvento {
  /** ID */
  id?: number;
  /**
   * Cadastrado em
   * @format date-time
   */
  cadastrado_em?: string | null;
  /**
   * Modificado em
   * @format date-time
   */
  modificado_em?: string | null;
  /**
   * Desativado em
   * @format date-time
   */
  desativado_em?: string | null;
  /** Tipo */
  tipo?: 10 | 11 | 12 | 13 | 14 | 15 | 20 | 30 | 7010;
  /** Tipo processo */
  tipo_processo?: 10 | 20 | 30 | 40 | 50 | 60 | 70 | null;
  /**
   * Nome
   * @minLength 1
   * @maxLength 255
   */
  nome: string;
  /**
   * Nome norm
   * @minLength 1
   * @maxLength 255
   */
  nome_norm: string;
  /** Cadastrado por */
  cadastrado_por?: number | null;
  /** Modificado por */
  modificado_por?: number | null;
  /** Desativado por */
  desativado_por?: number | null;
}

export interface DefensorAtuacao {
  /** ID */
  id?: number;
  /** Tipo */
  tipo?: 0 | 1 | 2 | 3;
  /**
   * Data inicial
   * @format date-time
   */
  data_inicial: string;
  /**
   * Data final
   * @format date-time
   */
  data_final: string;
  defensoria: Generic;
  titular: Generic;
  documento: AtuacaoDocumento;
}

export interface Defensor {
  /** ID */
  id?: number;
  /** Nome */
  nome?: string;
  /**
   * Cpf
   * @minLength 1
   */
  cpf: string;
  /** Servidor */
  servidor: number;
  /** Usuario */
  usuario?: string;
  /** Supervisor */
  supervisor?: number | null;
  atuacoes?: DefensorAtuacao[];
  /**
   * Data de expiração das credenciais do MNI
   * @format date-time
   */
  data_expiracao_credenciais_mni?: string | null;
  /** Credenciais expiradas */
  credenciais_expiradas?: string;
  /** Ativo */
  ativo?: boolean;
}

export interface EtiquetaVisualizacao {
  /** ID */
  id?: number;
  /**
   * Nome
   * @minLength 1
   * @maxLength 255
   */
  nome: string;
  /**
   * Cor
   * @maxLength 7
   */
  cor?: string;
}

export interface DefensoriaEtiqueta {
  /** ID */
  id?: number;
  /**
   * Nome
   * @minLength 1
   */
  nome: string;
  etiqueta: EtiquetaVisualizacao;
  /**
   * Cadastrado em
   * @format date-time
   */
  cadastrado_em?: string | null;
  /**
   * Modificado em
   * @format date-time
   */
  modificado_em?: string | null;
  /**
   * Desativado em
   * @format date-time
   */
  desativado_em?: string | null;
  /** Cadastrado por */
  cadastrado_por?: number | null;
  /** Modificado por */
  modificado_por?: number | null;
  /** Desativado por */
  desativado_por?: number | null;
  /** Defensoria */
  defensoria: number;
  /** @uniqueItems true */
  usuarios_autorizados?: number[];
}

export interface DefensoriaTipoEvento {
  /** ID */
  id?: number;
  /**
   * Conta estatistica
   * Conta Estatísticas?
   */
  conta_estatistica?: boolean;
  /** Defensoria */
  defensoria: number;
  /** Tipo evento */
  tipo_evento: number;
}

export interface ContribUser {
  /** ID */
  id?: number;
  /**
   * Usuário
   * Obrigatório. 150 caracteres ou menos. Letras, números e @/./+/-/_ apenas.
   * @minLength 1
   * @maxLength 150
   * @pattern ^[\w.@+-]+$
   */
  username: string;
  /**
   * Endereço de email
   * @format email
   * @maxLength 254
   */
  email?: string;
  /**
   * Status de superusuário
   * Indica que este usuário tem todas as permissões sem atribuí-las explicitamente.
   */
  is_superuser?: boolean;
}

export interface DefensoriaVara {
  /** ID */
  id?: number;
  defensoria: Generic;
  vara: Generic;
  cadastrado_por: ContribUser;
  /**
   * Cadastrado em
   * @format date-time
   */
  cadastrado_em?: string | null;
  /**
   * Modificado em
   * @format date-time
   */
  modificado_em?: string | null;
  /**
   * Desativado em
   * @format date-time
   */
  desativado_em?: string | null;
  /** Paridade */
  paridade?: 0 | 1 | 2;
  /**
   * Expressão regular da regra de distribuição (regex)
   * @maxLength 80
   */
  regex?: string | null;
  /**
   * Nome do usuário webservice
   * @maxLength 80
   */
  usuario_webservice?: string | null;
  /**
   * Principal
   * É o valor default?
   */
  principal?: boolean;
  /** Distribuir Automaticamente */
  distribuicao_automatica?: boolean;
  /** Pré-distribuir por Peso */
  pre_distribuir_por_peso?: boolean;
  /** Modificado por */
  modificado_por?: number | null;
  /** Desativado por */
  desativado_por?: number | null;
  /** @uniqueItems true */
  distribuir_por_polo?: number[];
  /** @uniqueItems true */
  distribuir_por_competencia?: number[];
}

export interface ComarcaBasic {
  /** ID */
  id?: number;
  /**
   * Nome
   * @minLength 1
   * @maxLength 512
   */
  nome: string;
  /** Coordenadoria */
  coordenadoria?: number | null;
}

export interface DefensoriaAtuacao {
  /** ID */
  id?: number;
  /** Tipo */
  tipo?: 0 | 1 | 2 | 3;
  /**
   * Data inicial
   * @format date-time
   */
  data_inicial: string;
  /**
   * Data final
   * @format date-time
   */
  data_final?: string | null;
  defensor: Generic;
  /** Titular */
  titular?: number | null;
  documento: AtuacaoDocumento;
}

export interface Nucleo {
  /** ID */
  id?: number;
  /**
   * Nome
   * @minLength 1
   * @maxLength 255
   */
  nome: string;
  /**
   * Nivel
   * @min -32768
   * @max 32767
   */
  nivel?: number | null;
  /**
   * Apoio
   * Aceita receber pedidos de apoio?
   */
  apoio?: boolean;
  /** Pode registrar atividades em pedidos de apoio? */
  apoio_pode_registrar_atividades?: boolean;
  /**
   * Agendamento
   * Aceita receber agendamentos (inicial/retorno)?
   */
  agendamento?: boolean;
  /**
   * Encaminhamento
   * Aceita receber agendamentos via encaminhamento?
   */
  encaminhamento?: boolean;
  /**
   * Acordo
   * Aceita registrar atendimentos de acordo?
   */
  acordo?: boolean;
  /**
   * Coletivo
   * Aceita registrar atendimentos coletivos?
   */
  coletivo?: boolean;
  /**
   * Supervisionado
   * Os assessores/estagiários só verão os atendimentos a que lhe forem distribuídos
   */
  supervisionado?: boolean;
  /**
   * Recursal
   * É um núcleo Recursal?
   */
  recursal?: boolean;
  /**
   * Itinerante
   * É um núcleo Itinerante/Multirão?
   */
  itinerante?: boolean;
  /**
   * Plantao
   * É um núcleo de Plantão?
   */
  plantao?: boolean;
  /**
   * Multidisciplinar
   * É um núcleo Multidisciplinar?
   */
  multidisciplinar?: boolean;
  /**
   * Diligencia
   * É um núcleo de Diligências?
   */
  diligencia?: boolean;
  /**
   * Honorario
   * Tem acesso ao módulo Honorários?
   */
  honorario?: boolean;
  /**
   * Propac
   * Tem acesso ao módulo Propacs?
   */
  propac?: boolean;
  /**
   * Livre
   * Tem acesso ao módulo Livre?
   */
  livre?: boolean;
  /**
   * Indeferimento
   * Tem acesso ao módulo Indeferimento?
   */
  indeferimento?: boolean;
  /** Pode receber indeferimento por negação? */
  indeferimento_pode_receber_negacao?: boolean;
  /** Pode receber indeferimento por suspeição? */
  indeferimento_pode_receber_suspeicao?: boolean;
  /** Pode receber indeferimento por impedimento? */
  indeferimento_pode_receber_impedimento?: boolean;
  /** Pode registrar decisão em Indeferimento? */
  indeferimento_pode_registrar_decisao?: boolean;
  /** Pode registrar baixa em Indeferimento? */
  indeferimento_pode_registrar_baixa?: boolean;
  /** Ativo */
  ativo?: boolean;
  /** Nucleo */
  nucleo?: number | null;
}

export interface Predio {
  /** ID */
  id?: number;
  /**
   * Nome
   * @minLength 1
   * @maxLength 255
   */
  nome: string;
  /** Visao comarca */
  visao_comarca?: boolean;
  /** Recepção mostrar apenas atuações do servidor? */
  recepcao_por_atuacao?: boolean;
  /**
   * Quantidade de andares
   * Deixar zero caso tenha somente o térreo
   * @min 0
   * @max 32767
   */
  qtd_andares?: number | null;
  /** Ativo */
  ativo?: boolean;
  /** Comarca */
  comarca: number;
  /** Endereco */
  endereco?: number | null;
  /** Telefone */
  telefone?: number | null;
}

export interface Defensoria {
  /** ID */
  id?: number;
  /**
   * Código
   * @maxLength 25
   */
  codigo?: string | null;
  /**
   * Nome
   * @minLength 1
   * @maxLength 255
   */
  nome: string;
  comarca: ComarcaBasic;
  /** Grau */
  grau?: 1 | 2 | null;
  /** Pode vincular processo judicial? */
  pode_vincular_processo_judicial?: boolean;
  /**
   * Atuacao
   * @maxLength 1024
   */
  atuacao?: string | null;
  atuacoes?: DefensoriaAtuacao[];
  categorias_de_agendas?: Generic[];
  nucleo: Nucleo;
  /** @uniqueItems true */
  tipos_eventos?: number[];
  /**
   * Telefone da Unidade
   * @maxLength 25
   */
  telefone?: string | null;
  /**
   * Email
   * @format email
   * @maxLength 128
   */
  email?: string | null;
  /**
   * Cabeçalho Documento GED
   * Para utilizar formatação, utilize tags HTML
   */
  cabecalho_documento?: string;
  /**
   * Rodapé Documento GED
   * Para utilizar formatação, utilize tags HTML
   */
  rodape_documento?: string;
  predio: Predio;
}

export interface DefensoriaPartialUpdate {
  /** ID */
  id?: number;
  /**
   * Código
   * @maxLength 25
   */
  codigo?: string | null;
  /**
   * Nome
   * @minLength 1
   * @maxLength 255
   */
  nome?: string;
  comarca?: ComarcaBasic;
  /** Grau */
  grau?: 1 | 2 | null;
  /** Pode vincular processo judicial? */
  pode_vincular_processo_judicial?: boolean;
  /**
   * Atuacao
   * @maxLength 1024
   */
  atuacao?: string | null;
  atuacoes?: DefensoriaAtuacao[];
  categorias_de_agendas?: Generic[];
  nucleo?: Nucleo;
  /** @uniqueItems true */
  tipos_eventos?: number[];
  /**
   * Telefone da Unidade
   * @maxLength 25
   */
  telefone?: string | null;
  /**
   * Email
   * @format email
   * @maxLength 128
   */
  email?: string | null;
  /**
   * Cabeçalho Documento GED
   * Para utilizar formatação, utilize tags HTML
   */
  cabecalho_documento?: string;
  /**
   * Rodapé Documento GED
   * Para utilizar formatação, utilize tags HTML
   */
  rodape_documento?: string;
  predio?: Predio;
}

export interface Deficiencia {
  /** ID */
  id?: number;
  /**
   * Nome
   * @minLength 1
   * @maxLength 512
   */
  nome: string;
  /** Ativo */
  ativo?: boolean;
}

export interface Dependente {
  /** ID */
  id?: number;
  /**
   * Cadastrado em
   * @format date-time
   */
  cadastrado_em?: string | null;
  /**
   * Modificado em
   * @format date-time
   */
  modificado_em?: string | null;
  /**
   * Desativado em
   * @format date-time
   */
  desativado_em?: string | null;
  /**
   * Nome
   * @minLength 1
   * @maxLength 256
   */
  nome: string;
  /** Situação */
  situacao?: 0 | 1 | 2 | 3 | null;
  /** Grau de Parentesco */
  parentesco: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
  /**
   * Renda Individual
   * Ganhos mensais, em R$, do dependente
   * @format decimal
   */
  renda?: string;
  /** Cadastrado por */
  cadastrado_por?: number | null;
  /** Modificado por */
  modificado_por?: number | null;
  /** Desativado por */
  desativado_por?: number | null;
  /** Pessoa */
  pessoa: string;
  /** Situacao dependente */
  situacao_dependente?: number | null;
  /** Tipo renda */
  tipo_renda?: number | null;
}

export interface EditalConcorrenciaPlantao {
  /** ID */
  id?: number;
  /**
   * Descrição
   * @minLength 1
   * @maxLength 256
   */
  descricao: string;
  /**
   * Data de início do período do Plantão
   * @format date
   */
  data_inicio: string;
  /**
   * Data o final do período do Plantão
   * @format date
   */
  data_final: string;
  /**
   * Data de abertura de inscrições ao Plantão
   * @format date
   */
  data_abertura_inscricao: string;
  /**
   * Data de fechamento de inscrições ao Plantão
   * @format date
   */
  data_fechamento_inscricao: string;
  /** Status */
  status?: 0 | 1 | 2;
  /** Tipo */
  tipo?: 0 | 1;
  /** @uniqueItems true */
  vagas?: number[];
}

export interface Encaminhamento {
  /** ID */
  id?: number;
  /**
   * Nome
   * @minLength 1
   * @maxLength 200
   */
  nome: string;
  /**
   * Email
   * @format email
   * @maxLength 128
   */
  email?: string | null;
  /** Ativo */
  ativo?: boolean;
  /** Endereco */
  endereco?: number | null;
  /** Telefone */
  telefone?: number | null;
}

export interface EnderecoHistorico {
  /** ID */
  id?: number;
  /**
   * Logradouro
   * @maxLength 256
   */
  logradouro?: string | null;
  /**
   * Número
   * @maxLength 32
   */
  numero?: string | null;
  /**
   * Complemento
   * @maxLength 512
   */
  complemento?: string | null;
  /**
   * CEP
   * @maxLength 32
   */
  cep?: string | null;
  /** Tipo area */
  tipo_area?: 0 | 1 | null;
  /** Principal */
  principal?: boolean;
  /** Tipo */
  tipo?: 10 | 20 | 30 | 40 | null;
  /**
   * Cadastrado em
   * @format date-time
   */
  cadastrado_em?: string | null;
  /**
   * Modificado em
   * @format date-time
   */
  modificado_em?: string | null;
  /**
   * Desativado em
   * @format date-time
   */
  desativado_em?: string | null;
  /** Endereco */
  endereco: number;
  /** Bairro */
  bairro?: number | null;
  /** Municipio */
  municipio: number;
  /** Cadastrado por */
  cadastrado_por?: number | null;
  /** Modificado por */
  modificado_por?: number | null;
  /** Desativado por */
  desativado_por?: number | null;
}

export interface ContribEndereco {
  /** ID */
  id?: number;
  /**
   * Cadastrado em
   * @format date-time
   */
  cadastrado_em?: string | null;
  /**
   * Modificado em
   * @format date-time
   */
  modificado_em?: string | null;
  /**
   * Desativado em
   * @format date-time
   */
  desativado_em?: string | null;
  /**
   * Logradouro
   * @maxLength 256
   */
  logradouro?: string | null;
  /**
   * Número
   * @maxLength 32
   */
  numero?: string | null;
  /**
   * Complemento
   * @maxLength 512
   */
  complemento?: string | null;
  /**
   * CEP
   * @maxLength 10
   */
  cep?: string | null;
  /** Tipo area */
  tipo_area?: 0 | 1 | null;
  /** Principal */
  principal?: boolean;
  /** Tipo */
  tipo?: 10 | 20 | 30 | 40;
  /** Cadastrado por */
  cadastrado_por?: number | null;
  /** Modificado por */
  modificado_por?: number | null;
  /** Desativado por */
  desativado_por?: number | null;
  /** Bairro */
  bairro?: number | null;
  /** Municipio */
  municipio: number;
}

export interface Especializado {
  /** ID */
  id?: number;
  /**
   * Nome
   * @minLength 1
   * @maxLength 255
   */
  nome: string;
  /** Ativo */
  ativo?: boolean;
  /** Nucleo */
  nucleo?: number | null;
}

export interface EstabelecimentoPenal {
  /** ID */
  id?: number;
  /**
   * Data de cadastro
   * @format date-time
   */
  data_cadastro?: string | null;
  /**
   * Nome
   * @minLength 1
   * @maxLength 200
   */
  nome: string;
  /**
   * Email
   * @format email
   * @maxLength 128
   */
  email?: string | null;
  /** Destinado ao sexo */
  destinado_ao_sexo?: 0 | 1 | 2;
  /** Inspecionado pela DPE? */
  inspecionado_pela_dpe?: boolean;
  /** Ativo */
  ativo?: boolean;
  /** Endereco */
  endereco?: number | null;
  /** Telefone */
  telefone?: number | null;
  /** Tipo */
  tipo: number;
}

export interface Estado {
  /** ID */
  id?: number;
  /**
   * Nome
   * @minLength 1
   * @maxLength 32
   */
  nome: string;
  /**
   * Uf
   * @minLength 1
   * @maxLength 2
   */
  uf: string;
}

export interface EstruturaMoradia {
  /** ID */
  id?: number;
  /**
   * Nome
   * @minLength 1
   * @maxLength 128
   */
  nome: string;
}

export interface Etiqueta {
  /** ID */
  id?: number;
  /** Defensoria */
  defensoria?: number;
  /** Defensorias */
  defensorias?: string;
  /**
   * Cadastrado em
   * @format date-time
   */
  cadastrado_em?: string | null;
  /**
   * Modificado em
   * @format date-time
   */
  modificado_em?: string | null;
  /**
   * Desativado em
   * @format date-time
   */
  desativado_em?: string | null;
  /**
   * Nome
   * @minLength 1
   * @maxLength 255
   */
  nome: string;
  /**
   * Cor
   * @maxLength 7
   */
  cor?: string;
  /** Cadastrado por */
  cadastrado_por?: number | null;
  /** Modificado por */
  modificado_por?: number | null;
  /** Desativado por */
  desativado_por?: number | null;
}

export interface EventoDefensoriaCategoria {
  /** Defensoria */
  defensoria: number;
  /** Categoria */
  categoria: number;
}

export interface EventoFilho {
  /** ID */
  id?: number;
  comarca: Generic;
  defensoria: Generic;
  categoria_de_agenda: Generic;
}

export interface EventoEvento {
  /** ID */
  id?: number;
  comarca?: Generic;
  /** @uniqueItems true */
  comarcas?: number[];
  defensoria?: Generic;
  /** @uniqueItems true */
  defensorias?: number[];
  categoria_de_agenda?: Generic;
  categorias_de_agenda?: EventoDefensoriaCategoria[];
  /**
   * Data inicial
   * @format date
   */
  data_inicial: string;
  /**
   * Data final
   * @format date
   */
  data_final: string;
  /**
   * Cadastrado em
   * @format date-time
   */
  cadastrado_em?: string;
  cadastrado_por?: Usuario;
  filhos?: EventoFilho[];
  /**
   * Titulo
   * @maxLength 256
   */
  titulo?: string | null;
  /** Tipo */
  tipo?: 0 | 1;
  /**
   * Data Validade
   * @format date
   */
  data_validade?: string | null;
  /**
   * Data de Autorização
   * @format date-time
   */
  data_autorizacao?: string | null;
  /**
   * Data de Exclusão
   * @format date-time
   */
  data_exclusao?: string | null;
  /** Recorrente */
  recorrente?: boolean;
  /** Ativo */
  ativo?: boolean;
  /** Pai */
  pai?: number | null;
  /** Defensor */
  defensor?: number | null;
  /** Autorizado por */
  autorizado_por?: number | null;
  /** Excluido por */
  excluido_por?: number | null;
}

export interface Falta {
  /** ID */
  id?: number;
  /**
   * Data do Fato
   * @format date-time
   */
  data_fato?: string | null;
  /**
   * Número PAD
   * @minLength 1
   * @maxLength 255
   */
  numero_pad: string;
  /** Observação */
  observacao?: string | null;
  /** Tipo */
  resultado?: 0 | 1 | 2;
  /**
   * Data de Cadastro
   * @format date-time
   */
  data_cadastro?: string | null;
  /**
   * Data de Exclusão
   * @format date-time
   */
  data_exclusao?: string | null;
  /** Ativo */
  ativo?: boolean;
  /** Pessoa */
  pessoa: string;
  /** Estabelecimento penal */
  estabelecimento_penal?: number | null;
  /** Processo */
  processo?: number | null;
  /** Cadastrado por */
  cadastrado_por?: number | null;
  /** Excluido por */
  excluido_por?: number | null;
  /** Evento */
  evento?: number | null;
}

export interface FormaAtendimento {
  /** ID */
  id?: number;
  /**
   * Cadastrado em
   * @format date-time
   */
  cadastrado_em?: string | null;
  /**
   * Modificado em
   * @format date-time
   */
  modificado_em?: string | null;
  /**
   * Desativado em
   * @format date-time
   */
  desativado_em?: string | null;
  /**
   * Nome
   * @minLength 1
   * @maxLength 512
   */
  nome: string;
  /**
   * Data inicial
   * @format date-time
   */
  data_inicial: string;
  /**
   * Data final
   * @format date-time
   */
  data_final?: string | null;
  /**
   * Conta estatísticas
   * Conta Estatística?
   */
  conta_estatistica?: boolean;
  /**
   * Aparece para o defensor?
   * Aparece para o defensor?
   */
  aparece_defensor?: boolean;
  /**
   * Aparece para a recepção?
   * Aparece para a recepção?
   */
  aparece_recepcao?: boolean;
  /**
   * Atendido por e-mail?
   * O atendimento foi por e-mail?
   */
  por_email?: boolean;
  /**
   * Atendido por mensagem?
   * O atendimento foi por WhatsApp/Telegram/RocketChat?
   */
  por_app_mensagem?: boolean;
  /**
   * Atendido por ligação?
   * O atendimento foi por ligação?
   */
  por_ligacao?: boolean;
  /**
   * Atendido presencialmente?
   * O atendimento foi presencial?
   */
  presencial?: boolean;
  /** Cadastrado por */
  cadastrado_por?: number | null;
  /** Modificado por */
  modificado_por?: number | null;
  /** Desativado por */
  desativado_por?: number | null;
}

export interface FormularioPergunta {
  /** ID */
  id?: number;
  /**
   * Cadastrado em
   * @format date-time
   */
  cadastrado_em?: string | null;
  /**
   * Modificado em
   * @format date-time
   */
  modificado_em?: string | null;
  /**
   * Desativado em
   * @format date-time
   */
  desativado_em?: string | null;
  /**
   * Posição
   * @min -32768
   * @max 32767
   */
  posicao?: number | null;
  /**
   * Texto
   * @minLength 1
   * @maxLength 255
   */
  texto: string;
  /**
   * Texto complementar
   * @maxLength 255
   */
  texto_complementar?: string | null;
  /** Tipo */
  tipo?: 0 | 6 | 1 | 2 | 3 | 5 | 4;
  /**
   * Lista
   * @maxLength 255
   */
  lista?: string | null;
  /**
   * Lista url
   * @maxLength 255
   */
  lista_url?: string | null;
  /**
   * Classe css
   * Classe CSS (Ex: input-xxlarge)
   * @maxLength 255
   */
  classe_css?: string;
  /** Cadastrado por */
  cadastrado_por?: number | null;
  /** Modificado por */
  modificado_por?: number | null;
  /** Desativado por */
  desativado_por?: number | null;
  /** Formulario */
  formulario: number;
  /** Sessao */
  sessao?: number | null;
}

export interface Resposta {
  /** ID */
  id?: number;
  /**
   * Cadastrado em
   * @format date-time
   */
  cadastrado_em?: string | null;
  /**
   * Modificado em
   * @format date-time
   */
  modificado_em?: string | null;
  /**
   * Desativado em
   * @format date-time
   */
  desativado_em?: string | null;
  /** Texto */
  texto?: string | null;
  /** Cadastrado por */
  cadastrado_por?: number | null;
  /** Modificado por */
  modificado_por?: number | null;
  /** Desativado por */
  desativado_por?: number | null;
  /** Pergunta */
  pergunta: number;
  /** Atendimento */
  atendimento?: number | null;
  /** Evento */
  evento?: number | null;
}

export interface Formulario {
  /** ID */
  id?: number;
  /**
   * Cadastrado em
   * @format date-time
   */
  cadastrado_em?: string | null;
  /**
   * Modificado em
   * @format date-time
   */
  modificado_em?: string | null;
  /**
   * Desativado em
   * @format date-time
   */
  desativado_em?: string | null;
  /**
   * Posição
   * @min -32768
   * @max 32767
   */
  posicao?: number | null;
  /**
   * Texto
   * @minLength 1
   * @maxLength 255
   */
  texto: string;
  /** Público */
  publico?: boolean;
  /** Exibir em atendimento */
  exibir_em_atendimento?: boolean;
  /** Exibir em atividade extraordinaria */
  exibir_em_atividade_extraordinaria?: boolean;
  /** Gerar alerta em atendimento */
  gerar_alerta_em_atendimento?: boolean;
  /** Cadastrado por */
  cadastrado_por?: number | null;
  /** Modificado por */
  modificado_por?: number | null;
  /** Desativado por */
  desativado_por?: number | null;
  /** Nucleo */
  nucleo: number;
}

export interface GedDocumentoListSerializer {
  /** ID */
  id?: number;
  /**
   * Assunto
   * @maxLength 255
   */
  assunto?: string;
  /** Eh modelo */
  eh_modelo?: boolean;
  /** Eh modelo padrao */
  eh_modelo_padrao?: boolean;
  /** Finalizado por */
  finalizado_por: number;
  /**
   * Finalizado por nome
   * @minLength 1
   */
  finalizado_por_nome?: string;
  /** Versao numero */
  versao_numero?: number;
  /** Criado por */
  criado_por: number;
  /**
   * Criado por nome
   * @maxLength 255
   */
  criado_por_nome?: string;
  /**
   * Criado em
   * @format date-time
   */
  criado_em?: string;
  /** Modificado por */
  modificado_por: number;
  /**
   * Modificado em
   * @format date-time
   */
  modificado_em?: string | null;
  /**
   * Modificado por nome
   * @maxLength 255
   */
  modificado_por_nome?: string;
}

export interface GedDocumentoSerializer {
  /** ID */
  id?: number;
  /** Versao numero */
  versao_numero?: number;
  /** Is removed */
  is_removed?: boolean;
  /**
   * Pk uuid
   * @format uuid
   */
  pk_uuid?: string | null;
  /**
   * Assunto
   * @maxLength 255
   */
  assunto?: string;
  /** Cabecalho */
  cabecalho?: string;
  /** Conteudo */
  conteudo?: string;
  /** Conteudo assinaturas */
  conteudo_assinaturas?: string;
  /** Rodape */
  rodape?: string;
  /** Rodape qr validacao */
  rodape_qr_validacao?: string;
  /** Eh modelo */
  eh_modelo?: boolean;
  /** Eh modelo padrao */
  eh_modelo_padrao?: boolean;
  /** Modelo descricao */
  modelo_descricao?: string;
  /** Modelo pronto para utilizacao */
  modelo_pronto_para_utilizacao?: boolean;
  /** Modelo publico */
  modelo_publico?: boolean;
  /**
   * Assinatura hash
   * @minLength 1
   */
  assinatura_hash?: string | null;
  /**
   * Data assinado
   * @format date-time
   */
  data_assinado?: string | null;
  /**
   * Finalizado por nome
   * @minLength 1
   */
  finalizado_por_nome?: string;
  /** Esta assinado */
  esta_assinado?: boolean;
  /** Esta pronto para assinar */
  esta_pronto_para_assinar?: boolean;
  /**
   * Criado por nome
   * @maxLength 255
   */
  criado_por_nome?: string;
  /**
   * Criado em
   * @format date-time
   */
  criado_em?: string;
  /**
   * Modificado em
   * @format date-time
   */
  modificado_em?: string | null;
  /**
   * Modificado por nome
   * @maxLength 255
   */
  modificado_por_nome?: string;
  /**
   * Excluido em
   * @format date-time
   */
  excluido_em?: string | null;
  /**
   * Excluido por nome
   * @minLength 1
   */
  excluido_por_nome?: string;
  /** Esta ativo */
  esta_ativo?: boolean | null;
  /**
   * Page margin top
   * Margem superior em relação a pagina
   */
  page_margin_top?: number | null;
  /**
   * Page margin bottom
   * Margem inferior em relação a pagina
   */
  page_margin_bottom?: number | null;
  /**
   * Page margin left
   * Margem esquerda em relação a pagina
   */
  page_margin_left?: number | null;
  /**
   * Page margin right
   * Margem direita em relação a pagina
   */
  page_margin_right?: number | null;
  /** Modelo */
  modelo?: number | null;
  /**
   * Finalizado por
   * Usuario que finalizou o documento para o sistema gere o código de validação
   */
  finalizado_por?: number | null;
  /** Grupo dono */
  grupo_dono?: number | null;
  /** Tipo do Documento */
  tipo_documento?: number | null;
  /** Criado por */
  criado_por?: number | null;
  /** Modificado por */
  modificado_por?: number | null;
  /** Excluido por */
  excluido_por?: number | null;
  /** @uniqueItems true */
  grupos_assinates?: number[];
}

export interface GedTipoDocumentoSerializer {
  /** ID */
  id?: number;
  /**
   * Titulo
   * @maxLength 255
   */
  titulo?: string;
  /**
   * Descricao
   * @maxLength 255
   */
  descricao?: string;
}

export interface CustomAuthToken {
  /**
   * Nome do usuário
   * @minLength 1
   */
  username: string;
  /**
   * Senha
   * @minLength 1
   */
  password: string;
  /**
   * Token
   * @minLength 1
   */
  token?: string;
  user?: Usuario;
}

export interface GrupoDeDefensoriasParaAgendamento {
  /** ID */
  id?: number;
  /**
   * Nome
   * @minLength 1
   * @maxLength 256
   */
  nome: string;
  /**
   * Aceitar agendamento na pauta
   * Permitir que as defensorias do grupo e o disk 129 agendem na pauta
   */
  aceitar_agend_pauta?: boolean;
  /**
   * Aceitar agendamento extra-pauta
   * Permitir que as defensorias do grupo e o disk 129 agendem extra-pauta
   */
  aceitar_agend_extrapauta?: boolean;
  /** Ativo */
  ativo?: boolean;
  /** @uniqueItems true */
  defensorias?: number[];
}

export interface Guiche {
  /** ID */
  id?: number;
  /** Tipo de guichê */
  tipo?: 1 | 2 | null;
  /**
   * Número
   * @min -2147483648
   * @max 2147483647
   */
  numero?: number;
  /**
   * Qual andar?
   * @min -32768
   * @max 32767
   */
  andar?: number | null;
  /** Ativo */
  ativo?: boolean;
  /** Comarca */
  comarca: number;
  /** Predio */
  predio?: number | null;
  /** Defensoria */
  defensoria?: number | null;
  /** Usuario */
  usuario?: number | null;
}

export interface ParteHistoricoTransferencia {
  /** ID */
  id?: number;
  /**
   * Cadastrado em
   * @format date-time
   */
  cadastrado_em?: string | null;
  /**
   * Modificado em
   * @format date-time
   */
  modificado_em?: string | null;
  /**
   * Desativado em
   * @format date-time
   */
  desativado_em?: string | null;
  /** Cadastrado por */
  cadastrado_por?: number | null;
  /** Modificado por */
  modificado_por?: number | null;
  /** Desativado por */
  desativado_por?: number | null;
  /** Parte */
  parte: number;
  /** Atendimento antigo */
  atendimento_antigo: string;
  /** Atendimento novo */
  atendimento_novo: string;
}

export interface Historico {
  /** ID */
  id?: number;
  /**
   * Data Registro
   * @format date
   */
  data_registro: string;
  /** Evento */
  evento: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13;
  /** Historico */
  historico?: string | null;
  /**
   * Data de Cadastro
   * @format date-time
   */
  data_cadastro?: string | null;
  /**
   * Data de Exclusão
   * @format date-time
   */
  data_exclusao?: string | null;
  /** Ativo */
  ativo?: boolean;
  /** Pessoa */
  pessoa: string;
  /** Cadastrado por */
  cadastrado_por?: number | null;
  /** Excluido por */
  excluido_por?: number | null;
}

export interface AlertaProcessoMovimento {
  /** ID */
  id?: number;
  /**
   * Mensagem alerta
   * @maxLength 255
   */
  mensagem?: string | null;
  /**
   * Nome de quem visualizou
   * @maxLength 255
   */
  visualizado_por_nome?: string | null;
  /**
   * Data de visualizacao
   * @format date-time
   */
  data_visualizado?: string | null;
  /** Visualizado */
  visualizado?: boolean;
  /**
   * Data de cadastro
   * @format date-time
   */
  data_cadastro?: string;
  /** Ativo */
  ativo?: boolean;
  /** Honorario */
  honorario: number;
  /** Visualizado por */
  visualizado_por?: number | null;
}

export interface Analise {
  /** ID */
  id?: number;
  /**
   * Motivo pendência
   * @maxLength 255
   */
  motivo?: string | null;
  /**
   * Data de cadastro
   * @format date-time
   */
  data_cadastro?: string;
  /** Ativo */
  ativo?: boolean;
  /** Fase */
  fase: number;
  /** Cadastrado por */
  cadastrado_por?: number;
}

export interface HonorariosDocumento {
  /** ID */
  id?: number;
  /**
   * Anexo
   * @format uri
   */
  anexo?: string;
  /**
   * Nome
   * @minLength 1
   * @maxLength 256
   */
  nome: string;
  /** Visivel */
  visivel?: boolean;
  /** Ativo */
  ativo?: boolean;
  /** Movimento */
  movimento?: number;
}

export interface Movimento {
  /** ID */
  id?: number;
  /** Tipo */
  tipo?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  /**
   * Anotacao
   * @minLength 1
   * @maxLength 255
   */
  anotacao?: string | null;
  /**
   * Anexo
   * @format uri
   */
  anexo?: string | null;
  /**
   * Valor estimado
   * @format decimal
   */
  valor_estimado?: string | null;
  /**
   * Valor efetivo
   * @format decimal
   */
  valor_efetivo?: string | null;
  /**
   * Valor atualizado
   * @format decimal
   */
  valor_atualizado?: string | null;
  /**
   * Data Atualização Valor
   * @format date-time
   */
  data_atualizacao_valor?: string | null;
  /**
   * Data de cadastro
   * @format date-time
   */
  data_cadastro?: string;
  /**
   * Data de Exclusão
   * @format date-time
   */
  data_exclusao?: string | null;
  /** Ativo */
  ativo?: boolean;
  /** Honorario */
  honorario?: number;
  /** Defensor */
  defensor?: number | null;
  /** Defensoria */
  defensoria?: number | null;
  /** Cadastrado por */
  cadastrado_por?: number;
  /** Excluido por */
  excluido_por?: number | null;
}

export interface Honorario {
  /** ID */
  id?: number;
  /**
   * Número Puro Recurso
   * @maxLength 50
   */
  numero_recurso_gerado?: string | null;
  /**
   * Recurso finalizado
   * Ao finalizar o Recurso, deve ser marcado como True para liberar as movimentacoes.
   */
  recurso_finalizado?: boolean;
  /** Possivel */
  possivel?: boolean;
  /** Situacao */
  situacao?: 0 | 1 | 2;
  /**
   * Data de cadastro
   * @format date-time
   */
  data_cadastro?: string;
  /**
   * Data de Exclusão
   * @format date-time
   */
  data_exclusao?: string | null;
  /**
   * Modificado em
   * @format date-time
   */
  modificado_em?: string | null;
  /**
   * Valor estimado
   * @format decimal
   */
  valor_estimado?: string | null;
  /**
   * Valor efetivo
   * @format decimal
   */
  valor_efetivo?: string | null;
  /** Suspenso? */
  suspenso?: boolean;
  /**
   * Suspenso até
   * @format date
   */
  suspenso_ate?: string | null;
  /** Honorario baixado/finalizado */
  baixado?: boolean;
  /** Ativo */
  ativo?: boolean;
  /** Honorario origem */
  honorario_origem?: number | null;
  /** Recurso vinculado */
  recurso_vinculado?: number | null;
  /** Fase */
  fase: number;
  /** Defensor */
  defensor?: number | null;
  /** Defensoria */
  defensoria?: number | null;
  /** Cadastrado por */
  cadastrado_por?: number;
  /** Excluido por */
  excluido_por?: number | null;
  /** Modificado por */
  modificado_por?: number | null;
  /** Atendimento */
  atendimento?: string | null;
}

export interface IdentidadeGenero {
  /** ID */
  id?: number;
  /**
   * Cadastrado em
   * @format date-time
   */
  cadastrado_em?: string | null;
  /**
   * Modificado em
   * @format date-time
   */
  modificado_em?: string | null;
  /**
   * Desativado em
   * @format date-time
   */
  desativado_em?: string | null;
  /**
   * Nome
   * @minLength 1
   * @maxLength 256
   */
  nome: string;
  /** Cadastrado por */
  cadastrado_por?: number | null;
  /** Modificado por */
  modificado_por?: number | null;
  /** Desativado por */
  desativado_por?: number | null;
}

export interface Imovel {
  /** ID */
  id?: number;
  /** Pagamento */
  pagamento: 0 | 1;
  /**
   * Banco
   * @maxLength 255
   */
  banco?: string | null;
  /**
   * Parcelas
   * @min -32768
   * @max 32767
   */
  parcelas: number;
  /**
   * Valor parcela
   * @format decimal
   */
  valor_parcela: string;
  /**
   * Valor total
   * @format decimal
   */
  valor_total: string;
  /** Uso proprio */
  uso_proprio: boolean;
  /** Patrimonio */
  patrimonio: number;
}

export interface Impedimento {
  /** ID */
  id?: number;
  /** Medida pretendida */
  medida_pretendida?: string | null;
  /**
   * Justificativa
   * @minLength 1
   */
  justificativa?: string | null;
  /**
   * Data de Cadastro
   * @format date-time
   */
  data_cadastro?: string | null;
  /**
   * Data recurso
   * @format date-time
   */
  data_recurso?: string | null;
  /**
   * Data recebimento
   * @format date-time
   */
  data_recebimento?: string | null;
  /**
   * Anotacao comunicacao
   * @minLength 1
   */
  anotacao_comunicacao?: string | null;
  /**
   * Data comunicacao
   * @format date-time
   */
  data_comunicacao?: string | null;
  /**
   * Anotacao verificacao
   * @minLength 1
   */
  anotacao_verificacao?: string | null;
  /**
   * Data verificacao
   * @format date-time
   */
  data_verificacao?: string | null;
  /**
   * Anotacao avaliacao
   * @minLength 1
   */
  anotacao_avaliacao?: string | null;
  /**
   * Data avaliacao
   * @format date-time
   */
  data_avaliacao?: string | null;
  /** Resultado */
  resultado?: 0 | 10 | 20 | null;
  /**
   * Anotacao baixa
   * @minLength 1
   */
  anotacao_baixa?: string | null;
  /** Tipo baixa */
  tipo_baixa?: 0 | 10 | 20 | 30 | null;
  /**
   * Data baixa
   * @format date-time
   */
  data_baixa?: string | null;
  /** Ativo */
  ativo?: boolean;
  /** Defensor */
  defensor: number;
  /** Pessoa */
  pessoa: string;
  /** Atendimento */
  atendimento?: string | null;
  /** Razao */
  razao?: number | null;
  /** Cadastrado por */
  cadastrado_por?: number | null;
  /** Recorrido por */
  recorrido_por?: number | null;
  /** Recebido por */
  recebido_por?: number | null;
  /** Comunicado por */
  comunicado_por?: number | null;
  /** Verificado por */
  verificado_por?: number | null;
  /** Avaliado por */
  avaliado_por?: number | null;
  /** Baixado por */
  baixado_por?: number | null;
}

export interface Indeferimento {
  /** ID */
  id?: number;
  /** Medida pretendida */
  medida_pretendida?: string | null;
  /** Justificativa */
  justificativa?: string | null;
  /** Resultado */
  resultado?: 0 | 10 | 20 | 30 | null;
  /** Tipo baixa */
  tipo_baixa?: 0 | 10 | 20 | 30 | null;
  /** Processo */
  processo: number;
  /** Atendimento */
  atendimento: string;
  /** Pessoa */
  pessoa: string;
  /** Defensor */
  defensor: number;
  /** Defensoria */
  defensoria?: number | null;
}

export interface Informacao {
  /** ID */
  id?: number;
  /**
   * Titulo
   * @minLength 1
   * @maxLength 200
   */
  titulo: string;
  /**
   * Texto
   * @minLength 1
   */
  texto: string;
  /** Ativo */
  ativo?: boolean;
}

export interface Interrupcao {
  /** ID */
  id?: number;
  /**
   * Data Inicial
   * @format date
   */
  data_inicial: string;
  /**
   * Data Final
   * @format date
   */
  data_final?: string | null;
  /** Observação */
  observacao?: string | null;
  /**
   * Data de Cadastro
   * @format date-time
   */
  data_cadastro?: string | null;
  /**
   * Data de Exclusão
   * @format date-time
   */
  data_exclusao?: string | null;
  /** Ativo */
  ativo?: boolean;
  /** Pessoa */
  pessoa: string;
  /** Cadastrado por */
  cadastrado_por?: number | null;
  /** Excluido por */
  excluido_por?: number | null;
}

export interface TotalField {
  /**
   * Texto
   * @minLength 1
   */
  texto?: string;
  /**
   * Valor
   * @minLength 1
   */
  valor?: string;
  /**
   * Icone
   * @minLength 1
   */
  icone?: string;
  /**
   * Cor
   * @minLength 1
   */
  cor?: string;
  /**
   * Url
   * @minLength 1
   */
  url?: string;
  /**
   * Selecionado
   * @minLength 1
   */
  selecionado?: string;
}

export interface ListaDistribuir {
  totais?: TotalField[];
  prioridades?: string[];
  avisos?: TotalField[];
}

export interface AvisoPendenteCadastroField {
  /**
   * Numero processo
   * @minLength 1
   */
  numero_processo: string;
  /**
   * Numero aviso
   * @minLength 1
   */
  numero_aviso: string;
}

export interface RegistroAvisoPendente {
  /**
   * Cpf responsavel
   * @minLength 1
   */
  cpf_responsavel: string;
  avisos: AvisoPendenteCadastroField[];
}

export interface ItineranteEvento {
  /** ID */
  id?: number;
  /**
   * Titulo
   * @maxLength 256
   */
  titulo?: string | null;
  /**
   * Data Início
   * @format date
   */
  data_inicial: string;
  /**
   * Data Término
   * @format date
   */
  data_final: string;
  /**
   * Data de Cadastro
   * @format date-time
   */
  data_cadastro?: string | null;
  /**
   * Data de Autorização
   * @format date-time
   */
  data_autorizacao?: string | null;
  /**
   * Data de Exclusão
   * @format date-time
   */
  data_exclusao?: string | null;
  /** Ativo */
  ativo?: boolean;
  /** Municipio */
  municipio: number;
  /** Defensoria */
  defensoria: number;
  /** Cadastrado por */
  cadastrado_por?: number | null;
  /** Autorizado por */
  autorizado_por?: number | null;
  /** Excluido por */
  excluido_por?: number | null;
  /** @uniqueItems true */
  participantes: number[];
  /** @uniqueItems true */
  atuacoes: number[];
}

export interface Justificativa {
  /** ID */
  id?: number;
  /** Justificativa */
  justificativa?: string | null;
  /** Atendimento */
  atendimento: number;
}

export interface CustomTokenObtainPair {
  user?: Usuario;
  /**
   * Username
   * @minLength 1
   */
  username: string;
  /**
   * Password
   * @minLength 1
   */
  password: string;
}

export interface TokenRefresh {
  /**
   * Refresh
   * @minLength 1
   */
  refresh: string;
  /**
   * Access
   * @minLength 1
   */
  access?: string;
}

export interface TokenVerify {
  /**
   * Token
   * @minLength 1
   */
  token: string;
}

export interface Local {
  /** ID */
  id?: number;
  /**
   * Cadastrado em
   * @format date-time
   */
  cadastrado_em?: string | null;
  /**
   * Modificado em
   * @format date-time
   */
  modificado_em?: string | null;
  /**
   * Desativado em
   * @format date-time
   */
  desativado_em?: string | null;
  /** Pagina */
  pagina:
    | "relatorio_listar"
    | "agendamento_confirmar"
    | "assistido_cadastrar"
    | "atendimento_atender"
    | "atendimento_atender_btn_requerente"
    | "atendimento_atender_btn_requerido"
    | "atendimento_conflitos_corrigidos"
    | "diligencia_index"
    | "itinerante_index"
    | "livre_detalhes_btn_calculo_horas"
    | "multidisciplinar_index"
    | "precadastro_index"
    | "recepcao_detalhes_btn_carta_convite"
    | "recepcao_detalhes_btn_requerente"
    | "recepcao_detalhes_btn_requerido"
    | "propac_detalhes";
  /**
   * Posicao
   * @min 0
   * @max 32767
   */
  posicao?: number;
  /**
   * Titulo
   * @minLength 1
   * @maxLength 255
   */
  titulo: string;
  /** Parametros */
  parametros?: string;
  /**
   * Classe css
   * Classe CSS (Ex: fas fa-chart-pie text-success)
   * @maxLength 255
   */
  classe_css?: string;
  /** Cadastrado por */
  cadastrado_por?: number | null;
  /** Modificado por */
  modificado_por?: number | null;
  /** Desativado por */
  desativado_por?: number | null;
}

export interface HistoricoLogin {
  /** ID */
  id?: number;
  /**
   * Cadastrado em
   * @format date-time
   */
  cadastrado_em?: string | null;
  /**
   * Modificado em
   * @format date-time
   */
  modificado_em?: string | null;
  /**
   * Desativado em
   * @format date-time
   */
  desativado_em?: string | null;
  /**
   * Endereco ip
   * @minLength 1
   * @maxLength 255
   */
  endereco_ip: string;
  /**
   * Info navegador
   * @minLength 1
   * @maxLength 255
   */
  info_navegador?: string | null;
  /**
   * Logout
   * @format date-time
   */
  logout?: string | null;
  /** Cadastrado por */
  cadastrado_por?: number | null;
  /** Modificado por */
  modificado_por?: number | null;
  /** Desativado por */
  desativado_por?: number | null;
}

export interface ManifestacaoAviso {
  /** ID */
  id?: number;
  /**
   * Cadastrado em
   * @format date-time
   */
  cadastrado_em?: string | null;
  /**
   * Modificado em
   * @format date-time
   */
  modificado_em?: string | null;
  /**
   * Desativado em
   * @format date-time
   */
  desativado_em?: string | null;
  /**
   * Numero
   * Número do Aviso no Tribunal de Justiça
   * @maxLength 100
   */
  numero?: string | null;
  /** Cadastrado por */
  cadastrado_por?: number | null;
  /** Modificado por */
  modificado_por?: number | null;
  /** Desativado por */
  desativado_por?: number | null;
  /** Manifestacao */
  manifestacao: number;
}

export interface ManifestacaoDocumento {
  /** ID */
  id?: number;
  /**
   * Cadastrado em
   * @format date-time
   */
  cadastrado_em?: string | null;
  /**
   * Modificado em
   * @format date-time
   */
  modificado_em?: string | null;
  /**
   * Desativado em
   * @format date-time
   */
  desativado_em?: string | null;
  /** Origem */
  origem?: 10 | 20;
  /**
   * Origem id
   * @min -2147483648
   * @max 2147483647
   */
  origem_id: number;
  /**
   * Posicao
   * @min -2147483648
   * @max 2147483647
   */
  posicao?: number;
  /**
   * Tipo mni
   * @min -2147483648
   * @max 2147483647
   */
  tipo_mni?: number | null;
  /** Nivel sigilo */
  nivel_sigilo?: 0 | 1 | 2 | 3 | 4 | 5;
  /** Descricao */
  descricao?: string | null;
  /** Cadastrado por */
  cadastrado_por?: number | null;
  /** Modificado por */
  modificado_por?: number | null;
  /** Desativado por */
  desativado_por?: number | null;
  /** Manifestacao */
  manifestacao: number;
}

export interface Manifestacao {
  /** ID */
  id?: number;
  /**
   * Cadastrado em
   * @format date-time
   */
  cadastrado_em?: string | null;
  /**
   * Modificado em
   * @format date-time
   */
  modificado_em?: string | null;
  /**
   * Desativado em
   * @format date-time
   */
  desativado_em?: string | null;
  /**
   * Enviado em
   * @format date-time
   */
  enviado_em?: string | null;
  /**
   * Respondido em
   * @format date-time
   */
  respondido_em?: string | null;
  /**
   * Protocolo resposta
   * @maxLength 100
   */
  protocolo_resposta?: string | null;
  /** Mensagem resposta */
  mensagem_resposta?: string | null;
  /**
   * Codigo procapi
   * Código Identificador da Manifestação no ProcAPI
   * @maxLength 100
   */
  codigo_procapi?: string | null;
  /**
   * Sistema webservice
   * Identificador do Sistema Webservice no ProcAPI
   * @maxLength 100
   */
  sistema_webservice?: string | null;
  /**
   * Usuario webservice
   * Identificador do Usuário Webservice no ProcAPI
   * @maxLength 100
   */
  usuario_webservice?: string | null;
  /** Tipo */
  tipo?: 10 | 20;
  /**
   * Tipo evento
   * Tipo do Evento no MNI
   * @min -32768
   * @max 32767
   */
  tipo_evento?: number | null;
  /** Situacao */
  situacao?: 10 | 40 | 20 | 30 | 90;
  /** Enviando para ProcAPI */
  enviando?: boolean;
  /** Enviado para ProcAPI */
  enviado?: boolean;
  /** Cadastrado por */
  cadastrado_por?: number | null;
  /** Modificado por */
  modificado_por?: number | null;
  /** Desativado por */
  desativado_por?: number | null;
  /** Parte */
  parte: number;
  /** Defensoria */
  defensoria?: number | null;
  /** Defensor */
  defensor?: number | null;
  /** Manifestante */
  manifestante?: number | null;
  /** Enviado por */
  enviado_por?: number | null;
  /** Fase */
  fase?: number | null;
  /** @uniqueItems true */
  etiquetas?: number[];
}

export interface MenuExtra {
  /** ID */
  id?: number;
  /**
   * Cadastrado em
   * @format date-time
   */
  cadastrado_em?: string | null;
  /**
   * Modificado em
   * @format date-time
   */
  modificado_em?: string | null;
  /**
   * Desativado em
   * @format date-time
   */
  desativado_em?: string | null;
  /** Local */
  local?: "root" | "ajuda" | "convenios";
  /**
   * Posicao
   * @min 0
   * @max 32767
   */
  posicao: number;
  /**
   * Nome
   * @minLength 1
   * @maxLength 255
   */
  nome: string;
  /**
   * Descricao
   * @minLength 1
   * @maxLength 255
   */
  descricao: string;
  /**
   * Url
   * @format uri
   * @maxLength 200
   */
  url?: string;
  /**
   * Icone
   * @minLength 1
   * @maxLength 255
   */
  icone: string;
  /** Cadastrado por */
  cadastrado_por?: number | null;
  /** Modificado por */
  modificado_por?: number | null;
  /** Desativado por */
  desativado_por?: number | null;
}

export interface SubMenu {
  /**
   * Nome
   * @minLength 1
   */
  nome: string;
  /**
   * Url
   * @format uri
   * @minLength 1
   */
  url: string;
  /**
   * Icon
   * @minLength 1
   */
  icon: string;
}

export interface Menu {
  /**
   * Nome
   * @minLength 1
   */
  nome: string;
  /**
   * Url
   * @format uri
   * @minLength 1
   */
  url: string;
  /**
   * Icon
   * @minLength 1
   */
  icon: string;
  submenus?: SubMenu[];
}

export interface UsuarioMenus {
  usuario: Usuario;
  menus: Menu[];
}

export interface AtendimentoModeloDocumento {
  /** ID */
  id?: number;
  /**
   * Nome
   * @minLength 1
   * @maxLength 255
   */
  nome: string;
  /** Tipo */
  tipo?: 0 | 1;
  /**
   * Jasper resource
   * @maxLength 255
   */
  jasper_resource?: string | null;
  /**
   * Jasper name
   * @maxLength 255
   */
  jasper_name?: string | null;
  /**
   * Jasper params
   * @maxLength 255
   */
  jasper_params?: string | null;
  /**
   * Data de Cadastro
   * @format date-time
   */
  data_cadastro?: string | null;
  /** Ativo */
  ativo?: boolean;
  /** Documento */
  ged_modelo?: number | null;
  /** Cadastrado por */
  cadastrado_por?: number | null;
}

export interface MotivoExclusao {
  /** ID */
  id?: number;
  /**
   * Cadastrado em
   * @format date-time
   */
  cadastrado_em?: string | null;
  /**
   * Modificado em
   * @format date-time
   */
  modificado_em?: string | null;
  /**
   * Desativado em
   * @format date-time
   */
  desativado_em?: string | null;
  /**
   * Nome
   * @minLength 1
   * @maxLength 512
   */
  nome: string;
  /** Cadastrado por */
  cadastrado_por?: number | null;
  /** Modificado por */
  modificado_por?: number | null;
  /** Desativado por */
  desativado_por?: number | null;
}

export interface MotivoBaixaPrisao {
  /** ID */
  id?: number;
  /**
   * Cadastrado em
   * @format date-time
   */
  cadastrado_em?: string | null;
  /**
   * Modificado em
   * @format date-time
   */
  modificado_em?: string | null;
  /**
   * Desativado em
   * @format date-time
   */
  desativado_em?: string | null;
  /**
   * Nome
   * @minLength 1
   * @maxLength 512
   */
  nome: string;
  /** Cadastrado por */
  cadastrado_por?: number | null;
  /** Modificado por */
  modificado_por?: number | null;
  /** Desativado por */
  desativado_por?: number | null;
}

export interface Movel {
  /** ID */
  id?: number;
  /**
   * Marca
   * @maxLength 255
   */
  marca?: string | null;
  /**
   * Modelo
   * @maxLength 255
   */
  modelo?: string | null;
  /** Pagamento */
  pagamento: 0 | 1;
  /**
   * Banco
   * @maxLength 255
   */
  banco?: string | null;
  /**
   * Parcelas
   * @min -32768
   * @max 32767
   */
  parcelas: number;
  /**
   * Valor parcela
   * @format decimal
   */
  valor_parcela: string;
  /**
   * Valor total
   * @format decimal
   */
  valor_total: string;
  /** Patrimonio */
  patrimonio: number;
}

export interface MudancaRegime {
  /** ID */
  id?: number;
  /** Tipo */
  tipo: 0 | 1;
  /** Regime */
  regime: 0 | 1 | 2 | 3 | 4;
  /**
   * Data Registro
   * @format date-time
   */
  data_registro: string;
  /**
   * Data Base
   * @format date-time
   */
  data_base: string;
  /** Historico */
  historico?: string | null;
  /**
   * Data de Cadastro
   * @format date-time
   */
  data_cadastro?: string | null;
  /**
   * Data de Exclusão
   * @format date-time
   */
  data_exclusao?: string | null;
  /** Ativo */
  ativo?: boolean;
  /** Prisao */
  prisao: number;
  /** Estabelecimento Penal */
  estabelecimento_penal?: number | null;
  /** Cadastrado por */
  cadastrado_por?: number | null;
  /** Excluido por */
  excluido_por?: number | null;
  /** Evento */
  evento?: number | null;
}

export interface Municipio {
  /** ID */
  id?: number;
  /**
   * Nome
   * @minLength 1
   * @maxLength 128
   */
  nome: string;
  /** Estado */
  estado: number;
  /** Comarca */
  comarca?: number | null;
}

export interface OrientacaoSexual {
  /** ID */
  id?: number;
  /**
   * Cadastrado em
   * @format date-time
   */
  cadastrado_em?: string | null;
  /**
   * Modificado em
   * @format date-time
   */
  modificado_em?: string | null;
  /**
   * Desativado em
   * @format date-time
   */
  desativado_em?: string | null;
  /**
   * Nome
   * @minLength 1
   * @maxLength 256
   */
  nome: string;
  /** Cadastrado por */
  cadastrado_por?: number | null;
  /** Modificado por */
  modificado_por?: number | null;
  /** Desativado por */
  desativado_por?: number | null;
}

export interface Painel {
  /** ID */
  id?: number;
  /**
   * Chamado por nome
   * @minLength 1
   */
  chamado_por_nome?: string;
  /**
   * Requerente nome
   * @minLength 1
   */
  requerente_nome?: string;
  /**
   * Cadastrado em
   * @format date-time
   */
  cadastrado_em?: string | null;
  /**
   * Modificado em
   * @format date-time
   */
  modificado_em?: string | null;
  /**
   * Desativado em
   * @format date-time
   */
  desativado_em?: string | null;
  /** Tipo */
  tipo?: 0 | 1;
  /**
   * Vezes notificado
   * @min -2147483648
   * @max 2147483647
   */
  vezes_notificado?: number | null;
  /**
   * Data emissao
   * @format date-time
   */
  data_emissao?: string | null;
  /**
   * Senha numero
   * @min -2147483648
   * @max 2147483647
   */
  senha_numero?: number | null;
  /**
   * Ultima notificacao
   * @format date-time
   */
  ultima_notificacao?: string | null;
  /** Cadastrado por */
  cadastrado_por?: number | null;
  /** Modificado por */
  modificado_por?: number | null;
  /** Desativado por */
  desativado_por?: number | null;
  /** Atendimento */
  atendimento: string;
  /** Predio */
  predio: number;
  /** Chamado por */
  chamado_por?: number | null;
}

export interface ParteAtendimentoRecepcao {
  /** Id */
  id: number;
  /** Pessoa id */
  pessoa_id: number;
  /**
   * Nome
   * @minLength 1
   */
  nome: string;
  /**
   * Nome social
   * @minLength 1
   */
  nome_social: string;
  /**
   * Apelido
   * @minLength 1
   */
  apelido: string;
  /**
   * Cpf
   * @minLength 1
   */
  cpf: string;
  /** Tipo */
  tipo: number;
}

export interface DefensoriaAtendimentoRecepcao {
  /** Id */
  id: number;
  /**
   * Codigo
   * @minLength 1
   */
  codigo: string;
  /**
   * Nome
   * @minLength 1
   */
  nome: string;
}

export interface DefensorAtendimentoRecepcao {
  /**
   * Nome
   * @minLength 1
   */
  nome: string;
  /**
   * Username
   * @minLength 1
   */
  username: string;
}

export interface EmAtendimentoRecepcao {
  /**
   * Servidor
   * @minLength 1
   */
  servidor: string;
  /**
   * Data inicio
   * @format date-time
   */
  data_inicio: string;
}

export interface AtendimentoRecepcao {
  /** Id */
  id: number;
  /** Numero */
  numero: number;
  /**
   * Tipo
   * @minLength 1
   */
  tipo: string;
  /** Tipo id */
  tipo_id: number;
  requerente: ParteAtendimentoRecepcao;
  requerido: ParteAtendimentoRecepcao;
  /**
   * Area
   * @minLength 1
   */
  area: string;
  /**
   * Pedido
   * @minLength 1
   */
  pedido: string;
  /**
   * Horario
   * @minLength 1
   */
  horario: string;
  /**
   * Horario atendimento
   * @minLength 1
   */
  horario_atendimento: string;
  /**
   * Horario atendimento recepcao
   * @minLength 1
   */
  horario_atendimento_recepcao: string;
  /** Atrasado */
  atrasado: boolean;
  /**
   * Historico agendamento
   * @minLength 1
   */
  historico_agendamento: string;
  /**
   * Historico recepcao
   * @minLength 1
   */
  historico_recepcao: string;
  /** Historico atendimento */
  historico_atendimento: boolean;
  defensoria: DefensoriaAtendimentoRecepcao;
  defensor: DefensorAtendimentoRecepcao;
  substituto: DefensorAtendimentoRecepcao;
  /** Guiche */
  guiche: number;
  /** Extra */
  extra: boolean;
  /**
   * Agenda
   * @minLength 1
   */
  agenda: string;
  telefones: string[];
  /** Prazo */
  prazo: boolean;
  /** Prioridade */
  prioridade: number;
  /** Atividades */
  atividades: number;
  /** Apoio */
  apoio: boolean;
  em_atendimento: EmAtendimentoRecepcao;
  /** Forma atendimento */
  forma_atendimento: number;
  /** Status */
  status: number;
}

export interface Pais {
  /** ID */
  id?: number;
  /**
   * Iso
   * @minLength 1
   * @maxLength 2
   */
  iso: string;
  /**
   * Iso3
   * @minLength 1
   * @maxLength 3
   */
  iso3: string;
  /**
   * Numero
   * @maxLength 3
   */
  numero?: string | null;
  /**
   * Nome
   * @minLength 1
   * @maxLength 128
   */
  nome: string;
  /** Ativo */
  ativo?: boolean;
}

export interface Papel {
  /** ID */
  id?: number;
  grupos?: Generic[];
  /**
   * Nome
   * @minLength 1
   * @maxLength 256
   */
  nome: string;
  /**
   * Requer supervisor
   * Exige informar um supervisor no cadastro do servidor?
   */
  requer_supervisor?: boolean;
  /**
   * Requer matricula
   * Exige informar a matrícula no cadastro do servidor?
   */
  requer_matricula?: boolean;
  /**
   * Requer superusuario
   * Disponível apenas para superusuários?
   */
  requer_superusuario?: boolean;
  /**
   * Marcar usuario como defensor
   * Marcar usuário como defensor?
   */
  marcar_usuario_como_defensor?: boolean;
  /**
   * CSS Label Class
   * Usado para definir a cor de labels
   */
  css_label_class?: "" | "label-success" | "label-warning" | "label-important" | "label-info" | "label-inverse";
  /** Ativo */
  ativo?: boolean;
}

export interface PastaDocumento {
  /** ID */
  id?: number;
  /**
   * Nome
   * @minLength 1
   * @maxLength 100
   */
  nome: string;
  /** Descricao */
  descricao?: string;
  /** Atendimento */
  atendimento: number;
}

export interface PatrimonialTipo {
  /** ID */
  id?: number;
  /** Grupo nome */
  grupo_nome?: string;
  /**
   * Cadastrado em
   * @format date-time
   */
  cadastrado_em?: string | null;
  /**
   * Modificado em
   * @format date-time
   */
  modificado_em?: string | null;
  /**
   * Desativado em
   * @format date-time
   */
  desativado_em?: string | null;
  /**
   * Nome
   * @minLength 1
   * @maxLength 256
   */
  nome: string;
  /** Grupo */
  grupo?: 10 | 21 | 22 | 30;
  /** Cadastrado por */
  cadastrado_por?: number | null;
  /** Modificado por */
  modificado_por?: number | null;
  /** Desativado por */
  desativado_por?: number | null;
}

export interface Patrimonial {
  /** ID */
  id?: number;
  /** É bem de família destinado a residência? */
  eh_bem_familia?: boolean;
  /** Pessoa */
  pessoa?: number;
  tipo: PatrimonialTipo;
  /**
   * Descricao
   * @maxLength 6000
   */
  descricao?: string | null;
  /**
   * Valor
   * @format decimal
   */
  valor?: string;
}

export interface Patrimonio {
  /** ID */
  id?: number;
  /** Possui Imóveis */
  tem_imoveis?: boolean;
  /**
   * Quantidade imoveis
   * @min -32768
   * @max 32767
   */
  quantidade_imoveis?: number;
  /**
   * Valor imoveis
   * Valor total, em R$, dos bens imóveis
   * @format decimal
   */
  valor_imoveis?: string;
  /** Possui Móveis */
  tem_moveis?: boolean;
  /**
   * Quantidade moveis
   * @min -32768
   * @max 32767
   */
  quantidade_moveis?: number;
  /**
   * Valor moveis
   * Valor total, em R$, dos bens móveis
   * @format decimal
   */
  valor_moveis?: string;
  /** Possui Outros Bens */
  tem_outros_bens?: boolean;
  /**
   * Valor outros bens
   * Valor total, em R$, de outros bens e direitos
   * @format decimal
   */
  valor_outros_bens?: string;
  /** Possui Aplicações ou Investimentos */
  tem_investimentos?: boolean;
  /**
   * Valor investimentos
   * Valor total, em R$, de aplicações ou investimentos financeiros
   * @format decimal
   */
  valor_investimentos?: string;
  /** Pessoa */
  pessoa?: number | null;
}

export interface PenaRestritiva {
  /** ID */
  id?: number;
  /** Tipo */
  restricao: 1 | 2 | 4 | 5 | 6;
  /** Ativo */
  ativo?: boolean;
  /**
   * Data de Cadastro
   * @format date-time
   */
  data_cadastro?: string | null;
  /**
   * Data de Exclusão
   * @format date-time
   */
  data_exclusao?: string | null;
  /** Prisao */
  prisao: number;
  /** Cadastrado por */
  cadastrado_por?: number | null;
  /** Excluido por */
  excluido_por?: number | null;
}

export interface PerfilCamposObrigatorios {
  /** ID */
  id?: number;
  /**
   * Nome
   * @minLength 1
   * @maxLength 256
   */
  nome: string;
  /** Tipo Processo */
  tipo_processo?: 1 | 2 | null;
  /** Tipo Parte */
  tipo_parte?: 1 | 2 | null;
  /** Parte Principal? */
  parte_principal?: boolean | null;
  /**
   * Configuração
   * @minLength 1
   */
  configuracao: string;
  /** Tipo de Pessoa */
  tipo_pessoa?: 0 | 1;
}

export interface PerguntaAtendimento {
  /** ID */
  id?: number;
  /**
   * Slug
   * @minLength 1
   * @maxLength 64
   */
  slug: string;
  /**
   * Texto
   * @minLength 1
   * @maxLength 255
   */
  texto?: string;
  /**
   * Dica
   * @maxLength 255
   */
  dica?: string | null;
  /** Pergunta obrigatória? */
  obrigatorio?: boolean;
  /** Qualificacao */
  qualificacao: number;
}

export interface UsuarioPermissoes {
  usuario: Usuario;
  permissoes: string[];
}

export interface PeticaoTotalMensalSerializar {
  /**
   * Tipo
   * @minLength 1
   */
  tipo: string;
  /** Area id */
  area_id: number;
  /** Quantidade */
  quantidade: number;
}

export interface PredioList {
  /** ID */
  id?: number;
  telefone: Generic;
  comarca: Generic;
  endereco: Generic;
  /**
   * Nome
   * @minLength 1
   * @maxLength 255
   */
  nome: string;
  /** Visao comarca */
  visao_comarca?: boolean;
  /** Recepção mostrar apenas atuações do servidor? */
  recepcao_por_atuacao?: boolean;
  /**
   * Quantidade de andares
   * Deixar zero caso tenha somente o térreo
   * @min 0
   * @max 32767
   */
  qtd_andares?: number | null;
  /** Ativo */
  ativo?: boolean;
}

export interface TelefoneSerializer {
  /** Id */
  id?: number;
  /**
   * Ddd
   * @min -32768
   * @max 32767
   */
  ddd?: number | null;
  /**
   * Número
   * @minLength 1
   * @maxLength 10
   */
  numero: string;
  /** Tipo */
  tipo: 0 | 1 | 2 | 3 | 4 | 5;
  /**
   * Nome
   * @maxLength 256
   */
  nome?: string | null;
}

export interface EnderecoCreate {
  /** Id */
  id?: number;
  /**
   * Logradouro
   * @maxLength 256
   */
  logradouro?: string | null;
  /**
   * Número
   * @maxLength 32
   */
  numero?: string | null;
  /**
   * Complemento
   * @maxLength 512
   */
  complemento?: string | null;
  /**
   * Bairro
   * @minLength 1
   * @maxLength 128
   */
  bairro?: string;
  /** Municipio */
  municipio: number;
  /** Tipo area */
  tipo_area?: 0 | 1 | null;
  /** Estado */
  estado?: string;
  /**
   * CEP
   * @maxLength 10
   */
  cep?: string | null;
}

export interface PredioCreate {
  /** Id */
  id?: number;
  telefone: TelefoneSerializer;
  /** Comarca */
  comarca: number;
  endereco: EnderecoCreate;
  /**
   * Nome
   * @minLength 1
   * @maxLength 255
   */
  nome: string;
  /** Visao comarca */
  visao_comarca?: boolean;
  /** Recepção mostrar apenas atuações do servidor? */
  recepcao_por_atuacao?: boolean;
  /**
   * Quantidade de andares
   * Deixar zero caso tenha somente o térreo
   * @min 0
   * @max 32767
   */
  qtd_andares?: number | null;
  /** Ativo */
  ativo?: boolean;
}

export interface MunicipioRetrive {
  /** ID */
  id?: number;
  /**
   * Nome
   * @minLength 1
   * @maxLength 128
   */
  nome: string;
  estado: Generic;
  comarca?: Generic;
}

export interface EnderecoRetrive {
  /** ID */
  id?: number;
  /**
   * Logradouro
   * @maxLength 256
   */
  logradouro?: string | null;
  /**
   * Número
   * @maxLength 32
   */
  numero?: string | null;
  /**
   * Complemento
   * @maxLength 512
   */
  complemento?: string | null;
  bairro?: Generic;
  municipio: MunicipioRetrive;
  /** Tipo area */
  tipo_area?: 0 | 1 | null;
  /**
   * CEP
   * @maxLength 10
   */
  cep?: string | null;
}

export interface PredioRetrieve {
  /** Id */
  id?: number;
  /**
   * Nome
   * @minLength 1
   * @maxLength 255
   */
  nome: string;
  /**
   * Quantidade de andares
   * Deixar zero caso tenha somente o térreo
   * @min 0
   * @max 32767
   */
  qtd_andares?: number | null;
  /** Comarca */
  comarca: number;
  endereco: EnderecoRetrive;
  telefone: TelefoneSerializer;
}

export interface ParteProcesso {
  /** ID */
  id?: number;
  /**
   * Cadastrado em
   * @format date-time
   */
  cadastrado_em?: string | null;
  /**
   * Modificado em
   * @format date-time
   */
  modificado_em?: string | null;
  /**
   * Desativado em
   * @format date-time
   */
  desativado_em?: string | null;
  /**
   * Nome
   * @minLength 1
   * @maxLength 512
   */
  nome: string;
  /**
   * Codigo mni
   * @minLength 1
   * @maxLength 256
   */
  codigo_mni: string;
  /** Disponível para peticionamento? */
  disponivel_para_peticionamento?: boolean;
  /** Cadastrado por */
  cadastrado_por?: number | null;
  /** Modificado por */
  modificado_por?: number | null;
  /** Desativado por */
  desativado_por?: number | null;
}

export interface Prisao {
  /** ID */
  id?: number;
  /** Pena */
  pena?: 0 | 1;
  /** Tipo */
  tipo?: 0 | 1;
  /**
   * Número INFOPEN
   * @maxLength 11
   */
  infopen?: string | null;
  /**
   * Data do Fato
   * @format date
   */
  data_fato?: string | null;
  /**
   * Data da Prisão
   * @format date
   */
  data_prisao?: string | null;
  /**
   * Término da Pena
   * @format date
   */
  data_termino?: string | null;
  /** Tentado/Consumado */
  tentado_consumado?: 10 | 20 | null;
  /** Situação */
  situacao?: 0 | 1 | null;
  /** Regime Inicial */
  regime_inicial?: 0 | 1 | 2 | 3 | 4 | null;
  /** Regime Atual */
  regime_atual?: 0 | 1 | 2 | 3 | 4 | null;
  /**
   * Duração da Pena (Anos)
   * @min -32768
   * @max 32767
   */
  duracao_pena_anos?: number;
  /**
   * Duração da Pena (Meses)
   * @min -32768
   * @max 32767
   */
  duracao_pena_meses?: number;
  /**
   * Duração da Pena (Dias)
   * @min -32768
   * @max 32767
   */
  duracao_pena_dias?: number;
  /**
   * Duração da Pena (Horas)
   * Formato DD HH:mm:ss ou HHH:mm:ss
   */
  duracao_pena_horas?: string | null;
  /**
   * Prestacao pecuniaria
   * @format decimal
   */
  prestacao_pecuniaria?: string | null;
  /**
   * Dias Multa
   * @maxLength 512
   */
  multa?: string | null;
  /** Fração PR */
  fracao_pr?: 16 | 25 | 35 | null;
  /** Fração LC */
  fracao_lc?: 13 | 12 | 23 | 11 | null;
  /**
   * Data de Recebimento da Denúncia
   * @format date
   */
  data_recebimento_denuncia?: string | null;
  /**
   * Data da Pronúncia
   * @format date
   */
  data_pronuncia?: string | null;
  /** Resultado da Pronúncia */
  resultado_pronuncia?: 0 | 1 | 2 | null;
  /** Histórico da Pronúncia */
  historico_pronuncia?: string | null;
  /** Resultado da Sentença */
  resultado_sentenca?: 0 | 1 | 2 | 101 | 102 | null;
  /**
   * Data da Setença Condenatória
   * @format date
   */
  data_sentenca_condenatoria?: string | null;
  /**
   * Trânsito em Julgado da Sentença para o Defensor
   * @format date
   */
  data_transito_defensor?: string | null;
  /**
   * Trânsito em Julgado da Sentença para a Acusação
   * @format date
   */
  data_transito_acusacao?: string | null;
  /**
   * Trânsito em Julgado da Sentença para o(a) Apenado(a)
   * @format date
   */
  data_transito_apenado?: string | null;
  /**
   * Data da Liquidação da Pena
   * @format date
   */
  data_liquidacao?: string | null;
  /**
   * Data-Base
   * @format date
   */
  data_base?: string | null;
  /** Reicidente */
  reicidente?: boolean;
  /**
   * Data da Baixa
   * @format date
   */
  data_baixa?: string | null;
  /**
   * Data de Cadastro
   * @format date-time
   */
  data_cadastro?: string | null;
  /**
   * Data de Exclusão
   * @format date-time
   */
  data_exclusao?: string | null;
  /** Ativo */
  ativo?: boolean;
  /** Pessoa */
  pessoa: string;
  /** Processo */
  processo?: number | null;
  /** Parte */
  parte?: number | null;
  /** Origem */
  origem?: number | null;
  /** Município do Local da Prisão */
  local_prisao?: number | null;
  /** Estabelecimento Penal */
  estabelecimento_penal?: number | null;
  /** Tipificação */
  tipificacao?: number | null;
  /** Motivo da Baixa */
  motivo_baixa?: number | null;
  /** Baixado por */
  baixado_por?: number | null;
  /** Cadastrado por */
  cadastrado_por?: number | null;
  /** Excluido por */
  excluido_por?: number | null;
  /** @uniqueItems true */
  eventos?: number[];
}

export interface Procedimento {
  /** ID */
  id?: number;
  /**
   * Data de cadastro
   * @format date-time
   */
  data_cadastro?: string;
  /** Tipo */
  tipo: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  /** Ligacao */
  ligacao: number;
  /** Agendamento */
  agendamento?: string | null;
  /** Informacao */
  informacao?: number | null;
  /** Encaminhamento */
  encaminhamento?: number | null;
  /** Attprocedimento */
  attprocedimento?: number | null;
  /** Atendente */
  atendente?: number | null;
}

export interface ProcessoApenso {
  /** ID */
  id?: number;
  /**
   * Data de Cadastro
   * @format date-time
   */
  data_cadastro?: string | null;
  /** Ativo */
  ativo?: boolean;
  /** Pai */
  pai?: number;
  /** Apensado */
  apensado?: number;
  /** Apensado por */
  apensado_por?: number | null;
}

export interface ProcessosAssuntos {
  /** ID */
  id?: number;
  /**
   * Nome
   * @minLength 1
   * @maxLength 512
   */
  nome: string;
  /**
   * Codigo eproc
   * @maxLength 25
   */
  codigo_eproc?: string | null;
  /**
   * Codigo cnj
   * @maxLength 25
   */
  codigo_cnj?: string | null;
  /** Ativo */
  ativo?: boolean;
}

export interface Acao {
  /** ID */
  id?: number;
  /**
   * Nome
   * @minLength 1
   * @maxLength 512
   */
  nome: string;
  /**
   * Descricao
   * @maxLength 512
   */
  descricao?: string | null;
  /**
   * Codigo eproc
   * @maxLength 25
   */
  codigo_eproc?: string | null;
  /**
   * Codigo cnj
   * @maxLength 25
   */
  codigo_cnj?: string | null;
  /** Judicial */
  judicial?: boolean;
  /** Extrajudicial */
  extrajudicial?: boolean;
  /** Penal */
  penal?: boolean;
  /** Inquérito Policial */
  inquerito?: boolean;
  /** Ação Penal */
  acao_penal?: boolean;
  /** Execução Penal */
  execucao_penal?: boolean;
  /** Ativo */
  ativo?: boolean;
  /** Area */
  area?: number | null;
}

export interface DocumentoFase {
  /** ID */
  id?: number;
  /**
   * Arquivo
   * @format uri
   */
  arquivo?: string | null;
  /**
   * Nome
   * @minLength 1
   * @maxLength 255
   */
  nome: string;
  /**
   * Eproc
   * @maxLength 100
   */
  eproc?: string | null;
  /** Ativo */
  ativo?: boolean;
  /**
   * Data enviado
   * @format date-time
   */
  data_enviado?: string | null;
  /** Fase */
  fase: number;
  /**
   * Tipo
   * Tipo de Documento
   */
  tipo?: number | null;
  /** Documento */
  documento_atendimento?: number | null;
  /** Enviado por */
  enviado_por?: number | null;
}

export interface Fase {
  /** ID */
  id?: number;
  /**
   * Data de Cadastro
   * @format date-time
   */
  data_cadastro?: string | null;
  /**
   * Modificado em
   * @format date-time
   */
  modificado_em?: string | null;
  /**
   * Data de Exclusão
   * @format date-time
   */
  data_exclusao?: string | null;
  /** Descricao */
  descricao?: string | null;
  /**
   * Data de Protocolo
   * @format date-time
   */
  data_protocolo?: string | null;
  /**
   * Data Término do Protocolo
   * @format date-time
   */
  data_termino_protocolo?: string | null;
  /** Ativo */
  ativo?: boolean;
  /** Automático */
  automatico?: boolean;
  /** Atividade */
  atividade?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  /** Plantão */
  plantao?: boolean;
  /**
   * Evento eproc
   * @min -2147483648
   * @max 2147483647
   */
  evento_eproc?: number | null;
  /**
   * Usuario eproc
   * @maxLength 100
   */
  usuario_eproc?: string | null;
  /** Cadastrado por */
  cadastrado_por?: number | null;
  /** Modificado por */
  modificado_por?: number | null;
  /** Excluido por */
  excluido_por?: number | null;
  /** Tipo */
  tipo?: number;
  /** Processo */
  processo: number;
  /** Parte */
  parte?: number | null;
  /** Defensoria */
  defensoria?: number | null;
  /** Defensor cadastro */
  defensor_cadastro?: number | null;
  /** Defensor substituto */
  defensor_substituto?: number | null;
}

export interface OutroParametro {
  /** ID */
  id?: number;
  /**
   * Cadastrado em
   * @format date-time
   */
  cadastrado_em?: string | null;
  /**
   * Modificado em
   * @format date-time
   */
  modificado_em?: string | null;
  /**
   * Desativado em
   * @format date-time
   */
  desativado_em?: string | null;
  /**
   * Nome
   * @minLength 1
   * @maxLength 512
   */
  nome: string;
  /** Tipo */
  tipo?: 0 | 1 | 2 | 3 | 4;
  /**
   * Lista
   * @maxLength 255
   */
  lista?: string | null;
  /**
   * Codigo mni
   * @minLength 1
   * @maxLength 512
   */
  codigo_mni: string;
  /** Cadastrado por */
  cadastrado_por?: number | null;
  /** Modificado por */
  modificado_por?: number | null;
  /** Desativado por */
  desativado_por?: number | null;
}

export interface ProcessoPoloDestinatario {
  /** ID */
  id?: number;
  /**
   * Cadastrado em
   * @format date-time
   */
  cadastrado_em?: string | null;
  /**
   * Modificado em
   * @format date-time
   */
  modificado_em?: string | null;
  /**
   * Desativado em
   * @format date-time
   */
  desativado_em?: string | null;
  /**
   * Nome
   * @minLength 1
   * @maxLength 256
   */
  nome: string;
  /**
   * Sigla sistema webservice
   * @minLength 1
   * @maxLength 3
   */
  sigla_sistema_webservice: string;
  /** Cadastrado por */
  cadastrado_por?: number | null;
  /** Modificado por */
  modificado_por?: number | null;
  /** Desativado por */
  desativado_por?: number | null;
}

export interface DocumentoTipo {
  /** ID */
  id?: number;
  /**
   * Nome
   * @minLength 1
   * @maxLength 255
   */
  nome: string;
  /** Grau */
  grau?: 0 | 1 | 2;
  /**
   * Eproc
   * @maxLength 100
   */
  eproc?: string | null;
  /** Recurso */
  recurso?: boolean;
  /** Ativo */
  ativo?: boolean;
  /**
   * Conta estatistica
   * Conta Estatísticas?
   */
  conta_estatistica?: boolean;
}

export interface FaseTipo {
  /** ID */
  id?: number;
  /**
   * Cadastrado em
   * @format date-time
   */
  cadastrado_em?: string | null;
  /**
   * Modificado em
   * @format date-time
   */
  modificado_em?: string | null;
  /**
   * Desativado em
   * @format date-time
   */
  desativado_em?: string | null;
  /**
   * Nome
   * @minLength 1
   * @maxLength 512
   */
  nome: string;
  /**
   * Nome norm
   * @maxLength 512
   */
  nome_norm?: string | null;
  /**
   * Descricao
   * @maxLength 512
   */
  descricao?: string | null;
  /**
   * Código MNI (depreciado)
   * @maxLength 25
   */
  codigo_eproc?: string | null;
  /**
   * Código CNJ
   * Código Nacional do Movimento (para mais detalhes, acesse o SGT/CNJ)
   * @maxLength 25
   */
  codigo_cnj?: string | null;
  /** Audiência */
  audiencia?: boolean;
  /** Júri */
  juri?: boolean;
  /** Sentença */
  sentenca?: boolean;
  /** Recurso */
  recurso?: boolean;
  /** Judicial */
  judicial?: boolean;
  /** Extrajudicial */
  extrajudicial?: boolean;
  /** Petição Inicial */
  peticao_inicial?: boolean;
  /** Habeas Corpus */
  habeas_corpus?: boolean;
  /**
   * Código procapi do tipo de audiência
   * @maxLength 25
   */
  tipo_audiencia_procapi?: string | null;
  /** Cadastrado por */
  cadastrado_por?: number | null;
  /** Modificado por */
  modificado_por?: number | null;
  /** Desativado por */
  desativado_por?: number | null;
}

export interface GenericIdNome {
  /** Id */
  id: number;
  /**
   * Nome
   * @minLength 1
   */
  nome: string;
}

export interface Processo {
  /** ID */
  id?: number;
  comarca: Generic;
  area: Generic;
  vara: Generic;
  acao: Generic;
  partes?: ParteProcesso[];
  atendimento: Generic;
  /**
   * Número
   * @maxLength 50
   */
  numero?: string | null;
  /**
   * Número puro
   * @minLength 1
   * @maxLength 50
   */
  numero_puro: string;
  /**
   * Chave
   * @maxLength 50
   */
  chave?: string | null;
  /**
   * Grau
   * @default 0
   */
  grau?: 1 | 2 | 3;
  /**
   * Credencial MNI de Cadastro
   * @maxLength 50
   */
  credencial_mni_cadastro?: string | null;
  /** Tipo */
  tipo?: 0 | 1 | 2 | 3;
  /** Nível de Sigilo */
  nivel_sigilo?: 0 | 1 | 2 | 3 | 4 | 5;
  /**
   * Intervenção do Ministério Público
   * Intervenção do Ministério Público?
   */
  intervencao_mp?: boolean;
  /** Valor da Causa */
  valor_causa?: number;
  /**
   * Código do Cálculo Judicial
   * @maxLength 50
   */
  calculo_judicial?: string | null;
  /**
   * Competência Judicial
   * @maxLength 50
   */
  competencia_mni?: string | null;
  /**
   * Acao cnj
   * @maxLength 50
   */
  acao_cnj?: string | null;
  /** Pre cadastro */
  pre_cadastro?: boolean;
  /**
   * Parte pre cadastro
   * @maxLength 250
   */
  parte_pre_cadastro?: string | null;
  /**
   * Data de Cadastro
   * @format date-time
   */
  data_cadastro?: string | null;
  /**
   * Modificado em
   * @format date-time
   */
  modificado_em?: string | null;
  /**
   * Data de Exclusão
   * @format date-time
   */
  data_exclusao?: string | null;
  /**
   * Data da Última Modificação no ProcAPI
   * @format date-time
   */
  ultima_modificacao?: string | null;
  /**
   * Data da Última Consulta para Atualização no ProcAPI
   * @format date-time
   */
  ultima_consulta?: string | null;
  /** Atualizando via ProcAPI */
  atualizando?: boolean;
  /** Atualizado via ProcAPI */
  atualizado?: boolean;
  /** Situacao */
  situacao?: 0 | 1;
  /** Ativo */
  ativo?: boolean;
  /** Localidade */
  localidade?: number | null;
  /** Processo Originário */
  originario?: number | null;
  /** Peticao inicial */
  peticao_inicial?: number | null;
  /** Cadastrado por */
  cadastrado_por?: number | null;
  /** Modificado por */
  modificado_por?: number | null;
  /** Excluido por */
  excluido_por?: number | null;
  /** @uniqueItems true */
  assuntos?: number[];
  /** @uniqueItems true */
  prioridades?: number[];
  /** @uniqueItems true */
  outros_parametros?: number[];
}

export interface ProcessoCreate {
  /** ID */
  id?: number;
  /** Atendimento */
  atendimento?: string;
  /** Defensor */
  defensor?: number;
  /**
   * Número
   * @maxLength 50
   */
  numero?: string | null;
  /**
   * Chave
   * @maxLength 50
   */
  chave?: string | null;
  /** Grau */
  grau?: 1 | 2 | 3;
  /** Tipo */
  tipo?: 0 | 1 | 2 | 3;
  /** Nível de Sigilo */
  nivel_sigilo?: 0 | 1 | 2 | 3 | 4 | 5;
  /**
   * Intervenção do Ministério Público
   * Intervenção do Ministério Público?
   */
  intervencao_mp?: boolean;
  /** Valor da Causa */
  valor_causa?: number;
  /**
   * Código do Cálculo Judicial
   * @maxLength 50
   */
  calculo_judicial?: string | null;
  /**
   * Competência Judicial
   * @maxLength 50
   */
  competencia_mni?: string | null;
  /**
   * Acao cnj
   * @maxLength 50
   */
  acao_cnj?: string | null;
  /** Pre cadastro */
  pre_cadastro?: boolean;
  /**
   * Parte pre cadastro
   * @maxLength 250
   */
  parte_pre_cadastro?: string | null;
  /**
   * Data de Cadastro
   * @format date-time
   */
  data_cadastro?: string | null;
  /**
   * Modificado em
   * @format date-time
   */
  modificado_em?: string | null;
  /**
   * Data de Exclusão
   * @format date-time
   */
  data_exclusao?: string | null;
  /** Situacao */
  situacao?: 0 | 1;
  /** Comarca */
  comarca?: number | null;
  /** Localidade */
  localidade?: number | null;
  /** Area */
  area?: number | null;
  /** Vara */
  vara?: number | null;
  /** Acao */
  acao?: number | null;
  /** Processo Originário */
  originario?: number | null;
  /** Peticao inicial */
  peticao_inicial?: number | null;
  /** Modificado por */
  modificado_por?: number | null;
  /** Excluido por */
  excluido_por?: number | null;
  /** @uniqueItems true */
  assuntos?: number[];
  /** @uniqueItems true */
  prioridades?: number[];
  /** @uniqueItems true */
  outros_parametros?: number[];
}

export interface Profissao {
  /** ID */
  id?: number;
  /**
   * Codigo
   * @minLength 1
   * @maxLength 32
   */
  codigo: string;
  /**
   * Nome
   * @minLength 1
   * @maxLength 256
   */
  nome: string;
}

export interface DocumentoPropac {
  /** ID */
  id?: number;
  /** Tipo anexo nome */
  tipo_anexo_nome?: string;
  /** Cancelar doc propac url */
  cancelar_doc_propac_url?: string;
  /** Modo */
  modo?: string;
  /**
   * Nome
   * @maxLength 255
   */
  nome?: string;
  /**
   * Anexo
   * @format uri
   */
  anexo?: string | null;
  /**
   * Anexo original nome arquivo
   * @maxLength 128
   */
  anexo_original_nome_arquivo?: string;
  /** Ativo */
  ativo?: boolean;
  /**
   * Data de Cadastro
   * @format date-time
   */
  data_cadastro?: string | null;
  /**
   * Data de Remocao
   * @format date-time
   */
  data_remocao?: string | null;
  /**
   * Motivo remoção(256 letras)
   * @maxLength 256
   */
  motivo_remocao?: string | null;
  /**
   * Data de Exclusão
   * @format date-time
   */
  data_exclusao?: string | null;
  /** Movimento */
  movimento: number;
  /** Tipo anexo */
  tipo_anexo?: number | null;
  /** Documento */
  documento?: number | null;
  /** Cadastrado por */
  cadastrado_por?: number | null;
  /** Removido por */
  removido_por?: number | null;
  /** Excluido por */
  excluido_por?: number | null;
}

export interface PropacMovimento {
  /** ID */
  id?: number;
  /** É precadastro */
  eh_precadastro?: boolean;
  /**
   * Data de Movimento
   * @format date-time
   */
  data_movimento?: string | null;
  /**
   * Volume
   * @min -32768
   * @max 32767
   */
  volume: number;
  /**
   * Ordem volume
   * @min -32768
   * @max 32767
   */
  ordem_volume: number;
  /** Ativo */
  ativo?: boolean;
  /**
   * Data de Cadastro
   * @format date-time
   */
  data_cadastro?: string | null;
  /**
   * Data de Remocao
   * @format date-time
   */
  data_remocao?: string | null;
  /**
   * Motivo remoção(256 letras)
   * @maxLength 256
   */
  motivo_remocao?: string | null;
  /**
   * Data de Exclusão
   * @format date-time
   */
  data_exclusao?: string | null;
  /** Histórico */
  historico?: string | null;
  /** Procedimento */
  procedimento?: number | null;
  /** Tipo */
  tipo?: number;
  /** Cadastrado por */
  cadastrado_por?: number | null;
  /** Removido por */
  removido_por?: number | null;
  /** Excluido por */
  excluido_por?: number | null;
}

export interface SituacaoProcedimento {
  /** ID */
  id?: number;
  /** Situacao */
  situacao?: 10 | 20 | 30 | 40;
  /**
   * Motivo remoção(256 letras)
   * @maxLength 256
   */
  motivo?: string | null;
  /**
   * Data de Cadastro
   * @format date-time
   */
  data_cadastro?: string | null;
  /** Ativo */
  ativo?: boolean;
  /** Procedimento */
  procedimento?: number;
  /** Cadastrado por */
  cadastrado_por?: number | null;
}

export interface TipoAnexoDocumentoPropac {
  /** ID */
  id?: number;
  /**
   * Nome
   * @maxLength 255
   */
  nome?: string;
  /** Ativo */
  ativo?: boolean;
}

export interface MovimentoTipo {
  /** ID */
  id?: number;
  /**
   * Nome
   * @maxLength 128
   */
  nome?: string;
  /**
   * Codigo
   * @format slug
   * @maxLength 128
   * @pattern ^[-a-zA-Z0-9_]+$
   */
  codigo?: string;
  /** Instauracao */
  instauracao?: boolean;
  /** Ativo */
  ativo?: boolean;
}

export interface PropacProcedimento {
  /** ID */
  id?: number;
  /**
   * Defensor responsavel nome
   * @maxLength 256
   */
  defensor_responsavel_nome?: string | null;
  /**
   * Defensoria responsavel nome
   * @maxLength 256
   */
  defensoria_responsavel_nome?: string | null;
  /**
   * Representante
   * @maxLength 1024
   */
  representante?: string | null;
  /**
   * Representado
   * @maxLength 1024
   */
  representado?: string | null;
  /** Acesso */
  acesso?: 10 | 20 | 30;
  /**
   * Uuid
   * @format uuid
   */
  uuid?: string;
  /**
   * Número
   * @maxLength 50
   */
  numero?: string | null;
  /**
   * Objeto
   * @maxLength 256
   */
  assunto?: string | null;
  /** Tipo */
  tipo?: 10 | 20;
  /** Situacao */
  situacao?: 10 | 20 | 30 | 40;
  /**
   * Data da Ultima Movimentação
   * @format date-time
   */
  data_ultima_movimentacao?: string | null;
  /** Ativo */
  ativo?: boolean;
  /**
   * Data de Cadastro
   * @format date-time
   */
  data_cadastro?: string | null;
  /** Defensor responsavel */
  defensor_responsavel?: number | null;
  /** Defensoria responsavel */
  defensoria_responsavel?: number | null;
  /** Cadastrado por */
  cadastrado_por?: number | null;
  /** Area */
  area?: number | null;
  /** @uniqueItems true */
  atendimentos?: number[];
  /** @uniqueItems true */
  defensorias_acesso?: number[];
}

export interface QualificacaoAssunto {
  /** ID */
  id?: number;
  /**
   * Cadastrado em
   * @format date-time
   */
  cadastrado_em?: string | null;
  /**
   * Modificado em
   * @format date-time
   */
  modificado_em?: string | null;
  /**
   * Desativado em
   * @format date-time
   */
  desativado_em?: string | null;
  /** Principal */
  principal?: boolean;
  /** Cadastrado por */
  cadastrado_por?: number | null;
  /** Modificado por */
  modificado_por?: number | null;
  /** Desativado por */
  desativado_por?: number | null;
  /** Qualificação */
  qualificacao: number;
  /** Assunto Processual */
  assunto: number;
}

export interface Qualificacao {
  /** ID */
  id?: number;
  /** Tipo */
  tipo?: 10 | 20 | 30 | 31 | 32 | 40 | 50 | 60 | 61 | 62;
  /**
   * Tipo nome
   * @minLength 1
   */
  tipo_nome?: string;
  /**
   * Titulo
   * @minLength 1
   * @maxLength 255
   */
  titulo: string;
  area: Generic;
  nucleo: Generic;
  especializado: Generic;
  /**
   * Numero
   * @min -32768
   * @max 32767
   */
  numero?: number;
  /** Disponível para agendamento via apps (Luna, eDefensor, etc)? */
  disponivel_para_agendamento_via_app?: boolean;
  /** Orgao encaminhamento */
  orgao_encaminhamento?: number | null;
  /** @uniqueItems true */
  defensorias?: number[];
}

export interface RedistribuirAviso {
  /**
   * Defensoria
   * @minLength 1
   */
  defensoria: string;
  /** Aviso */
  aviso: number;
}

export interface Relatorio {
  /** ID */
  id?: number;
  /**
   * Parametros
   * @minLength 1
   */
  parametros: string;
  /** Iframe url */
  iframe_url?: string;
  /**
   * Cadastrado em
   * @format date-time
   */
  cadastrado_em?: string | null;
  /**
   * Modificado em
   * @format date-time
   */
  modificado_em?: string | null;
  /**
   * Desativado em
   * @format date-time
   */
  desativado_em?: string | null;
  /** Tipo */
  tipo?: 1 | 2;
  /**
   * Título
   * @minLength 1
   * @maxLength 255
   */
  titulo: string;
  /**
   * Caminho no JasperServer
   * @maxLength 255
   */
  caminho?: string;
  /**
   * ID do Dashboard (Painel) do Metabase
   * @min 0
   * @max 32767
   */
  metabase_dashboard_id?: number | null;
  /**
   * ID da Question (Pergunta) do Metabase
   * @min 0
   * @max 32767
   */
  metabase_question_id?: number | null;
  /** Cadastrado por */
  cadastrado_por?: number | null;
  /** Modificado por */
  modificado_por?: number | null;
  /** Desativado por */
  desativado_por?: number | null;
  /** @uniqueItems true */
  locais: number[];
  /** @uniqueItems true */
  papeis: number[];
  /** @uniqueItems true */
  defensorias?: number[];
}

export interface Remissao {
  /** ID */
  id?: number;
  /**
   * Data Inicial
   * @format date
   */
  data_inicial: string;
  /**
   * Data Final
   * @format date
   */
  data_final: string;
  /**
   * Dias Registro
   * @min -32768
   * @max 32767
   */
  dias_registro: number;
  /**
   * Dias Remição
   * @format decimal
   */
  dias_remissao: string;
  /** Tipo */
  tipo?: 0 | 1;
  /**
   * Data de Cadastro
   * @format date-time
   */
  data_cadastro?: string | null;
  /**
   * Data de Exclusão
   * @format date-time
   */
  data_exclusao?: string | null;
  /** Para Progressão? */
  para_progressao?: boolean;
  /** Ativo */
  ativo?: boolean;
  /** Pessoa */
  pessoa: string;
  /** Cadastrado por */
  cadastrado_por?: number | null;
  /** Excluido por */
  excluido_por?: number | null;
  /** Falta */
  falta?: number | null;
}

export interface RestricaoPrestacaoServico {
  /** ID */
  id?: number;
  /**
   * Data de Referência
   * @format date
   */
  data_referencia: string;
  /**
   * Horas Trabalhadas
   * Formato DD HH:mm:ss ou HHH:mm:ss
   */
  horas_trabalhadas: string;
  /** Ativo */
  ativo?: boolean;
  /**
   * Data de Cadastro
   * @format date-time
   */
  data_cadastro?: string | null;
  /**
   * Data de Exclusão
   * @format date-time
   */
  data_exclusao?: string | null;
  /** Prisao */
  prisao: number;
  /** Cadastrado por */
  cadastrado_por?: number | null;
  /** Excluido por */
  excluido_por?: number | null;
}

export interface Salario {
  /** ID */
  id?: number;
  /**
   * Vigencia
   * @format date
   */
  vigencia: string;
  /**
   * Valor
   * @format decimal
   */
  valor: string;
  /**
   * Índice de renda individual
   * @format decimal
   */
  indice_renda_individual?: string;
  /**
   * Índice de renda familiar
   * @format decimal
   */
  indice_renda_familiar?: string;
  /**
   * Índice de renda per capita
   * @format decimal
   */
  indice_renda_per_capita?: string;
  /**
   * Índice de valor em bens
   * @format decimal
   */
  indice_valor_bens?: string;
  /**
   * Índice de valor em investimentos
   * @format decimal
   */
  indice_valor_investimentos?: string;
  /** Tipo de pessoa */
  tipo_pessoa?: 0 | 1 | null;
  /**
   * Índice de salário do funcionário
   * @format decimal
   */
  indice_valor_salario_funcionario?: string;
}

export interface Semovente {
  /** ID */
  id?: number;
  /** Tipo */
  tipo: 1 | 2 | 3 | 4 | 5;
  /**
   * Quantidade
   * @min -32768
   * @max 32767
   */
  quantidade: number;
  /**
   * Valor aproximado
   * @format decimal
   */
  valor_aproximado: string;
  /** Patrimonio */
  patrimonio: number;
}

export interface ServidorV2 {
  /** ID */
  id?: number;
  /**
   * Username
   * @minLength 1
   */
  username: string;
  /**
   * Password
   * @minLength 1
   */
  password?: string;
  /**
   * Email
   * @format email
   * @minLength 1
   */
  email: string;
  /**
   * Nome
   * @minLength 1
   */
  nome: string;
  /**
   * Cpf
   * @minLength 1
   * @pattern ^[0-9]*$
   */
  cpf: string;
  /** Ativo */
  ativo: boolean;
  /** Uso interno */
  uso_interno?: boolean;
  comarca: Generic;
  papel: Generic;
  usuario?: ContribUser;
  /** Defensor */
  defensor?: string;
  /** Sexo */
  sexo?: 0 | 1 | null;
  /**
   * Matricula
   * @maxLength 256
   */
  matricula?: string;
  /**
   * Foto
   * @format uri
   */
  foto?: string | null;
}

export interface Situacao {
  /** ID */
  id?: number;
  /**
   * Cadastrado em
   * @format date-time
   */
  cadastrado_em?: string | null;
  /**
   * Modificado em
   * @format date-time
   */
  modificado_em?: string | null;
  /**
   * Desativado em
   * @format date-time
   */
  desativado_em?: string | null;
  /**
   * Codigo
   * @minLength 1
   * @maxLength 255
   */
  codigo: string;
  /**
   * Nome
   * @minLength 1
   * @maxLength 256
   */
  nome: string;
  /** É uma situação onde que há dedução no cálculo de hipossuficiência? */
  eh_situacao_deducao?: boolean;
  /** Disponível via apps (Luna, eDefensor, etc)? */
  disponivel_via_app?: boolean;
  /** Cadastrado por */
  cadastrado_por?: number | null;
  /** Modificado por */
  modificado_por?: number | null;
  /** Desativado por */
  desativado_por?: number | null;
}

export interface Soltura {
  /** ID */
  id?: number;
  /** Tipo */
  tipo: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  /** Historico */
  historico?: string | null;
  /**
   * Data de Cadastro
   * @format date-time
   */
  data_cadastro?: string | null;
  /**
   * Data de Exclusão
   * @format date-time
   */
  data_exclusao?: string | null;
  /** Ativo */
  ativo?: boolean;
  /** Aprisionamento */
  aprisionamento: number;
  /** Processo */
  processo?: number | null;
  /** Cadastrado por */
  cadastrado_por?: number | null;
  /** Excluido por */
  excluido_por?: number | null;
}

export interface Tarefa {
  /** ID */
  id?: number;
  /** É do tipo ofício? */
  tarefa_oficio?: boolean;
  /** Prioridade */
  prioridade?: 0 | 1 | 2 | 3 | 4 | 5 | null;
  /**
   * Titulo
   * @maxLength 255
   */
  titulo?: string | null;
  /** Descricao */
  descricao?: string | null;
  /**
   * Data inicial
   * @format date
   */
  data_inicial?: string | null;
  /**
   * Data final
   * @format date
   */
  data_final?: string | null;
  /**
   * Data finalizado
   * @format date-time
   */
  data_finalizado?: string | null;
  /** Status */
  status?: 0 | 1 | 2 | null;
  /** Ativo */
  ativo?: boolean;
  /**
   * Data de Cadastro
   * @format date-time
   */
  data_cadastro?: string | null;
  /**
   * Data de Exclusão
   * @format date-time
   */
  data_exclusao?: string | null;
  /** Tipo */
  tipo?: number | null;
  /** Origem */
  origem?: number | null;
  /** Documento */
  documento?: number | null;
  /** Atendimento */
  atendimento?: number | null;
  /**
   * Movimento (propac/procedimento)
   * Movimento de Propac ou Procedimento.
   */
  movimento?: number | null;
  /** Processo */
  processo?: number | null;
  /** Resposta para */
  resposta_para?: number | null;
  /** Setor responsavel */
  setor_responsavel?: number | null;
  /** Responsavel */
  responsavel?: number | null;
  /** Finalizado */
  finalizado?: number | null;
  /** Cadastrado por */
  cadastrado_por?: number | null;
  /** Excluido por */
  excluido_por?: number | null;
  /** @uniqueItems true */
  documentos?: number[];
}

export interface ContribTelefone {
  /** ID */
  id?: number;
  /**
   * Cadastrado em
   * @format date-time
   */
  cadastrado_em?: string | null;
  /**
   * Modificado em
   * @format date-time
   */
  modificado_em?: string | null;
  /**
   * Desativado em
   * @format date-time
   */
  desativado_em?: string | null;
  /**
   * Ddd
   * @min -32768
   * @max 32767
   */
  ddd?: number | null;
  /**
   * Número
   * @minLength 1
   * @maxLength 10
   */
  numero: string;
  /** Tipo */
  tipo: 0 | 1 | 2 | 3 | 4 | 5;
  /**
   * Nome
   * @maxLength 256
   */
  nome?: string | null;
  /** Cadastrado por */
  cadastrado_por?: number | null;
  /** Modificado por */
  modificado_por?: number | null;
  /** Desativado por */
  desativado_por?: number | null;
}

export interface TermoResposta {
  /** ID */
  id?: number;
  /**
   * Cadastrado em
   * @format date-time
   */
  cadastrado_em?: string | null;
  /**
   * Modificado em
   * @format date-time
   */
  modificado_em?: string | null;
  /**
   * Desativado em
   * @format date-time
   */
  desativado_em?: string | null;
  /**
   * Titulo
   * @minLength 1
   */
  titulo_termo?: string;
  /**
   * Descrição
   * @minLength 1
   */
  descricao_termo?: string;
  /** Aceite */
  aceite: boolean;
  /**
   * Data de Cadastro
   * @format date-time
   */
  data_resposta?: string | null;
  /** Cadastrado por */
  cadastrado_por?: number | null;
  /** Modificado por */
  modificado_por?: number | null;
  /** Desativado por */
  desativado_por?: number | null;
  /** Termo */
  termo: number;
  /** Servidor */
  servidor: number;
}

export interface Termo {
  /** ID */
  id?: number;
  /**
   * Cadastrado em
   * @format date-time
   */
  cadastrado_em?: string | null;
  /**
   * Modificado em
   * @format date-time
   */
  modificado_em?: string | null;
  /**
   * Desativado em
   * @format date-time
   */
  desativado_em?: string | null;
  /**
   * Titulo
   * @minLength 1
   * @maxLength 255
   */
  titulo: string;
  /**
   * Descrição
   * @minLength 1
   */
  descricao: string;
  /** Tipo de Resposta */
  tipo_resposta: "un" | "mu";
  /** Tipo descricao */
  tipo_descricao?: "txt" | "html";
  /**
   * Data de Início
   * @format date
   */
  data_inicio?: string | null;
  /**
   * Data de Finalização
   * @format date
   */
  data_finalizacao?: string | null;
  /** Cadastrado por */
  cadastrado_por?: number | null;
  /** Modificado por */
  modificado_por?: number | null;
  /** Desativado por */
  desativado_por?: number | null;
  /** @uniqueItems true */
  servidores?: number[];
}

export interface Tipificacao {
  /** ID */
  id?: number;
  /**
   * Cadastrado em
   * @format date-time
   */
  cadastrado_em?: string | null;
  /**
   * Modificado em
   * @format date-time
   */
  modificado_em?: string | null;
  /**
   * Desativado em
   * @format date-time
   */
  desativado_em?: string | null;
  /** Tipo */
  tipo?: 0 | 1 | null;
  /**
   * Nome
   * @minLength 1
   */
  nome: string;
  /**
   * Número da Lei
   * @maxLength 25
   */
  numero_lei?: string | null;
  /**
   * Artigo da Lei
   * @maxLength 25
   */
  artigo_lei?: string | null;
  /**
   * Parágrafo da Lei
   * @maxLength 25
   */
  paragrafo_lei?: string | null;
  /** Cadastrado por */
  cadastrado_por?: number | null;
  /** Modificado por */
  modificado_por?: number | null;
  /** Desativado por */
  desativado_por?: number | null;
}

export interface AtividadeExtraordinariaTipo {
  /** ID */
  id?: number;
  /**
   * Cadastrado em
   * @format date-time
   */
  cadastrado_em?: string | null;
  /**
   * Modificado em
   * @format date-time
   */
  modificado_em?: string | null;
  /**
   * Desativado em
   * @format date-time
   */
  desativado_em?: string | null;
  /** Tipo */
  tipo?: 10 | 11 | 12 | 13 | 14 | 15 | 20 | 30 | 7010;
  /** Tipo processo */
  tipo_processo?: 10 | 20 | 30 | 40 | 50 | 60 | 70 | null;
  /**
   * Nome
   * @minLength 1
   * @maxLength 255
   */
  nome: string;
  /**
   * Nome norm
   * @minLength 1
   * @maxLength 255
   */
  nome_norm: string;
  /** Cadastrado por */
  cadastrado_por?: number | null;
  /** Modificado por */
  modificado_por?: number | null;
  /** Desativado por */
  desativado_por?: number | null;
}

export interface TipoColetividade {
  /** ID */
  id?: number;
  /**
   * Nome
   * @minLength 1
   * @maxLength 512
   */
  nome: string;
}

export interface TipoEstabelecimentoPenal {
  /** ID */
  id?: number;
  /**
   * Cadastrado em
   * @format date-time
   */
  cadastrado_em?: string | null;
  /**
   * Modificado em
   * @format date-time
   */
  modificado_em?: string | null;
  /**
   * Desativado em
   * @format date-time
   */
  desativado_em?: string | null;
  /**
   * Nome
   * @minLength 1
   * @maxLength 256
   */
  nome: string;
  /** Cadastrado por */
  cadastrado_por?: number | null;
  /** Modificado por */
  modificado_por?: number | null;
  /** Desativado por */
  desativado_por?: number | null;
}

export interface TipoRenda {
  /** ID */
  id?: number;
  /**
   * Nome
   * @minLength 1
   * @maxLength 256
   */
  nome: string;
  /**
   * Deve ser realizada dedução máxima de 1 salário mínimo?
   * Caso marcado, deve-se deixar em branco o valor máximo de dedução abaixo e será utilizado o valor da tabela salários
   */
  eh_deducao_salario_minimo?: boolean;
  /**
   * Valor máximo de dedução
   * Valor máximo em R$ que será deduzido para este tipo de renda (caso não seja o salário mínimo)
   * @format decimal
   */
  valor_maximo_deducao?: string;
}

export interface TipoVulnerabilidade {
  /** ID */
  id?: number;
  /**
   * Cadastrado em
   * @format date-time
   */
  cadastrado_em?: string | null;
  /**
   * Modificado em
   * @format date-time
   */
  modificado_em?: string | null;
  /**
   * Desativado em
   * @format date-time
   */
  desativado_em?: string | null;
  /**
   * Tipo de atendimento
   * @minLength 1
   * @maxLength 100
   */
  nome: string;
  /**
   * Descrição da vulnerabilidade
   * @maxLength 500
   */
  descricao?: string | null;
  /** Cadastrado por */
  cadastrado_por?: number | null;
  /** Modificado por */
  modificado_por?: number | null;
  /** Desativado por */
  desativado_por?: number | null;
}

export interface VagaEditalPlantao {
  /** ID */
  id?: number;
  /**
   * Data de início da vaga
   * @format date
   */
  data_inicio: string;
  /**
   * Data do final da vaga
   * @format date
   */
  data_final: string;
}

export interface Vara {
  /** ID */
  id?: number;
  /**
   * Data de Cadastro
   * @format date
   */
  data_cadastro?: string | null;
  /**
   * Data da última atualização
   * @format date
   */
  data_atualizacao?: string | null;
  /**
   * Nome
   * @minLength 1
   * @maxLength 512
   */
  nome: string;
  /**
   * Codigo eproc
   * @maxLength 25
   */
  codigo_eproc?: string | null;
  /** Ativo */
  ativo?: boolean;
  /** Grau */
  grau?: 1 | 2 | 3;
  /** Comarca */
  comarca: number;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = process.env.SOLAR_API;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.Text]: (input: any) => (input !== null && typeof input !== "string" ? JSON.stringify(input) : input),
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
            ? JSON.stringify(property)
            : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
      },
      signal: (cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal) || null,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title SOLAR API
 * @version v2
 * @contact
 *
 * Solução Avançada em Atendimento de Refererência (SOLAR)
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  acordos = {
    /**
     * No description
     *
     * @tags acordos
     * @name AcordosList
     * @request GET:/acordos/
     * @secure
     */
    acordosList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: Acordo[];
        },
        any
      >({
        path: `/acordos/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags acordos
     * @name AcordosCreate
     * @request POST:/acordos/
     * @secure
     */
    acordosCreate: (data: Acordo, params: RequestParams = {}) =>
      this.request<Acordo, any>({
        path: `/acordos/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags acordos
     * @name AcordosRead
     * @request GET:/acordos/{id}/
     * @secure
     */
    acordosRead: (id: number, params: RequestParams = {}) =>
      this.request<Acordo, any>({
        path: `/acordos/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags acordos
     * @name AcordosUpdate
     * @request PUT:/acordos/{id}/
     * @secure
     */
    acordosUpdate: (id: number, data: Acordo, params: RequestParams = {}) =>
      this.request<Acordo, any>({
        path: `/acordos/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags acordos
     * @name AcordosPartialUpdate
     * @request PATCH:/acordos/{id}/
     * @secure
     */
    acordosPartialUpdate: (id: number, data: Acordo, params: RequestParams = {}) =>
      this.request<Acordo, any>({
        path: `/acordos/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags acordos
     * @name AcordosDelete
     * @request DELETE:/acordos/{id}/
     * @secure
     */
    acordosDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/acordos/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  agendas = {
    /**
     * No description
     *
     * @tags agendas
     * @name AgendasList
     * @request GET:/agendas/
     * @secure
     */
    agendasList: (
      query?: {
        defensor?: string;
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: Agenda[];
        },
        any
      >({
        path: `/agendas/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags agendas
     * @name AgendasCreate
     * @request POST:/agendas/
     * @secure
     */
    agendasCreate: (data: Agenda, params: RequestParams = {}) =>
      this.request<Agenda, any>({
        path: `/agendas/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags agendas
     * @name AgendasRead
     * @request GET:/agendas/{id}/
     * @secure
     */
    agendasRead: (id: number, params: RequestParams = {}) =>
      this.request<AgendaDetail, any>({
        path: `/agendas/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags agendas
     * @name AgendasDelete
     * @request DELETE:/agendas/{id}/
     * @secure
     */
    agendasDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/agendas/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  aprisionamentos = {
    /**
     * No description
     *
     * @tags aprisionamentos
     * @name AprisionamentosList
     * @request GET:/aprisionamentos/
     * @secure
     */
    aprisionamentosList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: Aprisionamento[];
        },
        any
      >({
        path: `/aprisionamentos/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags aprisionamentos
     * @name AprisionamentosCreate
     * @request POST:/aprisionamentos/
     * @secure
     */
    aprisionamentosCreate: (data: Aprisionamento, params: RequestParams = {}) =>
      this.request<Aprisionamento, any>({
        path: `/aprisionamentos/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags aprisionamentos
     * @name AprisionamentosRead
     * @request GET:/aprisionamentos/{id}/
     * @secure
     */
    aprisionamentosRead: (id: number, params: RequestParams = {}) =>
      this.request<Aprisionamento, any>({
        path: `/aprisionamentos/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags aprisionamentos
     * @name AprisionamentosUpdate
     * @request PUT:/aprisionamentos/{id}/
     * @secure
     */
    aprisionamentosUpdate: (id: number, data: Aprisionamento, params: RequestParams = {}) =>
      this.request<Aprisionamento, any>({
        path: `/aprisionamentos/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags aprisionamentos
     * @name AprisionamentosPartialUpdate
     * @request PATCH:/aprisionamentos/{id}/
     * @secure
     */
    aprisionamentosPartialUpdate: (id: number, data: Aprisionamento, params: RequestParams = {}) =>
      this.request<Aprisionamento, any>({
        path: `/aprisionamentos/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags aprisionamentos
     * @name AprisionamentosDelete
     * @request DELETE:/aprisionamentos/{id}/
     * @secure
     */
    aprisionamentosDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/aprisionamentos/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  areas = {
    /**
     * No description
     *
     * @tags areas
     * @name AreasList
     * @request GET:/areas/
     * @secure
     */
    areasList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: Area[];
        },
        any
      >({
        path: `/areas/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags areas
     * @name AreasRead
     * @request GET:/areas/{id}/
     * @secure
     */
    areasRead: (id: number, params: RequestParams = {}) =>
      this.request<Area, any>({
        path: `/areas/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  assistidosDocumentos = {
    /**
     * No description
     *
     * @tags assistidos-documentos
     * @name AssistidosDocumentosList
     * @request GET:/assistidos-documentos/
     * @secure
     */
    assistidosDocumentosList: (
      query?: {
        assistido_id?: number;
        ativo?: string;
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: DefensorDocumento[];
        },
        any
      >({
        path: `/assistidos-documentos/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags assistidos-documentos
     * @name AssistidosDocumentosCreate
     * @request POST:/assistidos-documentos/
     * @secure
     */
    assistidosDocumentosCreate: (data: DefensorDocumento, params: RequestParams = {}) =>
      this.request<DefensorDocumento, any>({
        path: `/assistidos-documentos/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags assistidos-documentos
     * @name AssistidosDocumentosRead
     * @request GET:/assistidos-documentos/{id}/
     * @secure
     */
    assistidosDocumentosRead: (id: number, params: RequestParams = {}) =>
      this.request<DefensorDocumento, any>({
        path: `/assistidos-documentos/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags assistidos-documentos
     * @name AssistidosDocumentosUpdate
     * @request PUT:/assistidos-documentos/{id}/
     * @secure
     */
    assistidosDocumentosUpdate: (id: number, data: DefensorDocumento, params: RequestParams = {}) =>
      this.request<DefensorDocumento, any>({
        path: `/assistidos-documentos/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags assistidos-documentos
     * @name AssistidosDocumentosPartialUpdate
     * @request PATCH:/assistidos-documentos/{id}/
     * @secure
     */
    assistidosDocumentosPartialUpdate: (id: number, data: DefensorDocumento, params: RequestParams = {}) =>
      this.request<DefensorDocumento, any>({
        path: `/assistidos-documentos/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags assistidos-documentos
     * @name AssistidosDocumentosDelete
     * @request DELETE:/assistidos-documentos/{id}/
     * @secure
     */
    assistidosDocumentosDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/assistidos-documentos/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  assistidos = {
    /**
     * No description
     *
     * @tags assistidos
     * @name AssistidosList
     * @request GET:/assistidos/
     * @secure
     */
    assistidosList: (
      query?: {
        nome?: string;
        apelido?: string;
        tipo?: string;
        nome_social?: string;
        telefone?: string;
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: PessoaAssistida[];
        },
        any
      >({
        path: `/assistidos/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags assistidos
     * @name AssistidosCreate
     * @request POST:/assistidos/
     * @secure
     */
    assistidosCreate: (data: PessoaAssistida, params: RequestParams = {}) =>
      this.request<PessoaAssistida, any>({
        path: `/assistidos/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Irá retornar o assistido se estiver cadastrado no SOLAR.
     *
     * @tags assistidos
     * @name AssistidosConsultarPessoaAssistida
     * @summary Consultar assistido cadastrado no SOLAR utilizando dados sensíveis.
     * @request POST:/assistidos/consultar/
     * @secure
     */
    assistidosConsultarPessoaAssistida: (data: PessoaAssistidoConsulta, params: RequestParams = {}) =>
      this.request<PessoaAssistida, ErroResponse>({
        path: `/assistidos/consultar/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags assistidos
     * @name AssistidosRead
     * @request GET:/assistidos/{id}/
     * @secure
     */
    assistidosRead: (id: number, params: RequestParams = {}) =>
      this.request<PessoaAssistida, any>({
        path: `/assistidos/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags assistidos
     * @name AssistidosUpdate
     * @request PUT:/assistidos/{id}/
     * @secure
     */
    assistidosUpdate: (id: number, data: PessoaAssistida, params: RequestParams = {}) =>
      this.request<PessoaAssistida, any>({
        path: `/assistidos/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags assistidos
     * @name AssistidosPartialUpdate
     * @request PATCH:/assistidos/{id}/
     * @secure
     */
    assistidosPartialUpdate: (id: number, data: PessoaAssistida, params: RequestParams = {}) =>
      this.request<PessoaAssistida, any>({
        path: `/assistidos/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags assistidos
     * @name AssistidosDelete
     * @request DELETE:/assistidos/{id}/
     * @secure
     */
    assistidosDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/assistidos/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags assistidos
     * @name AssistidosConfirmaTriagem
     * @request POST:/assistidos/{id}/confirma_triagem/
     * @secure
     */
    assistidosConfirmaTriagem: (id: number, data: PessoaAssistida, params: RequestParams = {}) =>
      this.request<PessoaAssistida, any>({
        path: `/assistidos/${id}/confirma_triagem/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  assuntos = {
    /**
     * No description
     *
     * @tags assuntos
     * @name AssuntosList
     * @request GET:/assuntos/
     * @secure
     */
    assuntosList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: Assunto[];
        },
        any
      >({
        path: `/assuntos/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags assuntos
     * @name AssuntosCreate
     * @request POST:/assuntos/
     * @secure
     */
    assuntosCreate: (data: Assunto, params: RequestParams = {}) =>
      this.request<Assunto, any>({
        path: `/assuntos/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags assuntos
     * @name AssuntosRead
     * @request GET:/assuntos/{id}/
     * @secure
     */
    assuntosRead: (id: number, params: RequestParams = {}) =>
      this.request<Assunto, any>({
        path: `/assuntos/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags assuntos
     * @name AssuntosUpdate
     * @request PUT:/assuntos/{id}/
     * @secure
     */
    assuntosUpdate: (id: number, data: Assunto, params: RequestParams = {}) =>
      this.request<Assunto, any>({
        path: `/assuntos/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags assuntos
     * @name AssuntosPartialUpdate
     * @request PATCH:/assuntos/{id}/
     * @secure
     */
    assuntosPartialUpdate: (id: number, data: Assunto, params: RequestParams = {}) =>
      this.request<Assunto, any>({
        path: `/assuntos/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags assuntos
     * @name AssuntosDelete
     * @request DELETE:/assuntos/{id}/
     * @secure
     */
    assuntosDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/assuntos/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  atendimentosColetivos = {
    /**
     * No description
     *
     * @tags atendimentos-coletivos
     * @name AtendimentosColetivosList
     * @request GET:/atendimentos-coletivos/
     * @secure
     */
    atendimentosColetivosList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: Coletivo[];
        },
        any
      >({
        path: `/atendimentos-coletivos/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags atendimentos-coletivos
     * @name AtendimentosColetivosCreate
     * @request POST:/atendimentos-coletivos/
     * @secure
     */
    atendimentosColetivosCreate: (data: Coletivo, params: RequestParams = {}) =>
      this.request<Coletivo, any>({
        path: `/atendimentos-coletivos/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags atendimentos-coletivos
     * @name AtendimentosColetivosRead
     * @request GET:/atendimentos-coletivos/{id}/
     * @secure
     */
    atendimentosColetivosRead: (id: number, params: RequestParams = {}) =>
      this.request<Coletivo, any>({
        path: `/atendimentos-coletivos/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags atendimentos-coletivos
     * @name AtendimentosColetivosUpdate
     * @request PUT:/atendimentos-coletivos/{id}/
     * @secure
     */
    atendimentosColetivosUpdate: (id: number, data: Coletivo, params: RequestParams = {}) =>
      this.request<Coletivo, any>({
        path: `/atendimentos-coletivos/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags atendimentos-coletivos
     * @name AtendimentosColetivosPartialUpdate
     * @request PATCH:/atendimentos-coletivos/{id}/
     * @secure
     */
    atendimentosColetivosPartialUpdate: (id: number, data: Coletivo, params: RequestParams = {}) =>
      this.request<Coletivo, any>({
        path: `/atendimentos-coletivos/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags atendimentos-coletivos
     * @name AtendimentosColetivosDelete
     * @request DELETE:/atendimentos-coletivos/{id}/
     * @secure
     */
    atendimentosColetivosDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/atendimentos-coletivos/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  atendimentosDocumentos = {
    /**
     * No description
     *
     * @tags atendimentos-documentos
     * @name AtendimentosDocumentosList
     * @request GET:/atendimentos-documentos/
     * @secure
     */
    atendimentosDocumentosList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: AtendimentoDocumento[];
        },
        any
      >({
        path: `/atendimentos-documentos/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags atendimentos-documentos
     * @name AtendimentosDocumentosCreate
     * @request POST:/atendimentos-documentos/
     * @secure
     */
    atendimentosDocumentosCreate: (data: AtendimentoDocumento, params: RequestParams = {}) =>
      this.request<AtendimentoDocumento, any>({
        path: `/atendimentos-documentos/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags atendimentos-documentos
     * @name AtendimentosDocumentosCriarGed
     * @request POST:/atendimentos-documentos/criar-ged/
     * @secure
     */
    atendimentosDocumentosCriarGed: (data: DocumentoGED, params: RequestParams = {}) =>
      this.request<DocumentoAtendimento, ErrorResponse>({
        path: `/atendimentos-documentos/criar-ged/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags atendimentos-documentos
     * @name AtendimentosDocumentosRead
     * @request GET:/atendimentos-documentos/{id}/
     * @secure
     */
    atendimentosDocumentosRead: (id: number, params: RequestParams = {}) =>
      this.request<AtendimentoDocumento, any>({
        path: `/atendimentos-documentos/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags atendimentos-documentos
     * @name AtendimentosDocumentosUpdate
     * @request PUT:/atendimentos-documentos/{id}/
     * @secure
     */
    atendimentosDocumentosUpdate: (id: number, data: AtendimentoDocumento, params: RequestParams = {}) =>
      this.request<AtendimentoDocumento, any>({
        path: `/atendimentos-documentos/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags atendimentos-documentos
     * @name AtendimentosDocumentosPartialUpdate
     * @request PATCH:/atendimentos-documentos/{id}/
     * @secure
     */
    atendimentosDocumentosPartialUpdate: (id: number, data: AtendimentoDocumento, params: RequestParams = {}) =>
      this.request<AtendimentoDocumento, any>({
        path: `/atendimentos-documentos/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags atendimentos-documentos
     * @name AtendimentosDocumentosDelete
     * @request DELETE:/atendimentos-documentos/{id}/
     * @secure
     */
    atendimentosDocumentosDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/atendimentos-documentos/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  atendimentosGerais = {
    /**
     * No description
     *
     * @tags atendimentos-gerais
     * @name AtendimentosGeraisList
     * @request GET:/atendimentos-gerais/
     * @secure
     */
    atendimentosGeraisList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: Atendimento[];
        },
        any
      >({
        path: `/atendimentos-gerais/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags atendimentos-gerais
     * @name AtendimentosGeraisCreate
     * @request POST:/atendimentos-gerais/
     * @secure
     */
    atendimentosGeraisCreate: (data: Atendimento, params: RequestParams = {}) =>
      this.request<Atendimento, any>({
        path: `/atendimentos-gerais/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags atendimentos-gerais
     * @name AtendimentosGeraisRead
     * @request GET:/atendimentos-gerais/{id}/
     * @secure
     */
    atendimentosGeraisRead: (id: number, params: RequestParams = {}) =>
      this.request<Atendimento, any>({
        path: `/atendimentos-gerais/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags atendimentos-gerais
     * @name AtendimentosGeraisUpdate
     * @request PUT:/atendimentos-gerais/{id}/
     * @secure
     */
    atendimentosGeraisUpdate: (id: number, data: Atendimento, params: RequestParams = {}) =>
      this.request<Atendimento, any>({
        path: `/atendimentos-gerais/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags atendimentos-gerais
     * @name AtendimentosGeraisPartialUpdate
     * @request PATCH:/atendimentos-gerais/{id}/
     * @secure
     */
    atendimentosGeraisPartialUpdate: (id: number, data: Atendimento, params: RequestParams = {}) =>
      this.request<Atendimento, any>({
        path: `/atendimentos-gerais/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags atendimentos-gerais
     * @name AtendimentosGeraisDelete
     * @request DELETE:/atendimentos-gerais/{id}/
     * @secure
     */
    atendimentosGeraisDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/atendimentos-gerais/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  atendimentosPartes = {
    /**
     * @description Utiliza a tabela AtendimentoPessoa para trazer informações resumidas sobre os atendimentos da pessoa
     *
     * @tags atendimentos-partes
     * @name AtendimentosPartesList
     * @summary Consulta todos atendimentos de uma pessoa
     * @request GET:/atendimentos-partes/
     * @secure
     */
    atendimentosPartesList: (
      query: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
        pessoa: number;
        responsavel?: boolean;
        atendimentos_ativos?: boolean;
        atendimentos_luna?: boolean;
        somente_inicial?: boolean;
        /** @default false */
        situacao?: boolean;
        /** @default false */
        documentos_pendentes?: boolean;
        /** @default false */
        detalhe_atendimento?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<AtendimentoPessoaListResponsePagination, AtendimentoPessoaListError>({
        path: `/atendimentos-partes/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags atendimentos-partes
     * @name AtendimentosPartesCreate
     * @request POST:/atendimentos-partes/
     * @secure
     */
    atendimentosPartesCreate: (data: AtendimentoPessoa, params: RequestParams = {}) =>
      this.request<AtendimentoPessoa, any>({
        path: `/atendimentos-partes/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Há dois erros BAD_REQUEST(400) com situações particulares na consulta da pessoa, são elas: - **1** : Existe a pessoa, porém não existe um atendimento vinculado a ela. - **2** : Não existe a pessoa.
     *
     * @tags atendimentos-partes
     * @name AtendimentosPartesConsultarPessoa
     * @summary Consultar a parte do atendimento usando dados sensíveis.
     * @request POST:/atendimentos-partes/consultar/
     * @secure
     */
    atendimentosPartesConsultarPessoa: (data: AtendimentoPessoaConsulta, params: RequestParams = {}) =>
      this.request<AtendimentoPessoa, ErrorPessoAtendimentoWithSituacaoResponse>({
        path: `/atendimentos-partes/consultar/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags atendimentos-partes
     * @name AtendimentosPartesRead
     * @request GET:/atendimentos-partes/{id}/
     * @secure
     */
    atendimentosPartesRead: (id: number, params: RequestParams = {}) =>
      this.request<AtendimentoPessoa, any>({
        path: `/atendimentos-partes/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags atendimentos-partes
     * @name AtendimentosPartesUpdate
     * @request PUT:/atendimentos-partes/{id}/
     * @secure
     */
    atendimentosPartesUpdate: (id: number, data: AtendimentoPessoa, params: RequestParams = {}) =>
      this.request<AtendimentoPessoa, any>({
        path: `/atendimentos-partes/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags atendimentos-partes
     * @name AtendimentosPartesPartialUpdate
     * @request PATCH:/atendimentos-partes/{id}/
     * @secure
     */
    atendimentosPartesPartialUpdate: (id: number, data: AtendimentoPessoa, params: RequestParams = {}) =>
      this.request<AtendimentoPessoa, any>({
        path: `/atendimentos-partes/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags atendimentos-partes
     * @name AtendimentosPartesDelete
     * @request DELETE:/atendimentos-partes/{id}/
     * @secure
     */
    atendimentosPartesDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/atendimentos-partes/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  atendimentosParticipantes = {
    /**
     * No description
     *
     * @tags atendimentos-participantes
     * @name AtendimentosParticipantesList
     * @request GET:/atendimentos-participantes/
     * @secure
     */
    atendimentosParticipantesList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: AtendimentoParticipante[];
        },
        any
      >({
        path: `/atendimentos-participantes/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags atendimentos-participantes
     * @name AtendimentosParticipantesCreate
     * @request POST:/atendimentos-participantes/
     * @secure
     */
    atendimentosParticipantesCreate: (data: AtendimentoParticipante, params: RequestParams = {}) =>
      this.request<AtendimentoParticipante, any>({
        path: `/atendimentos-participantes/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags atendimentos-participantes
     * @name AtendimentosParticipantesRead
     * @request GET:/atendimentos-participantes/{id}/
     * @secure
     */
    atendimentosParticipantesRead: (id: number, params: RequestParams = {}) =>
      this.request<AtendimentoParticipante, any>({
        path: `/atendimentos-participantes/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags atendimentos-participantes
     * @name AtendimentosParticipantesUpdate
     * @request PUT:/atendimentos-participantes/{id}/
     * @secure
     */
    atendimentosParticipantesUpdate: (id: number, data: AtendimentoParticipante, params: RequestParams = {}) =>
      this.request<AtendimentoParticipante, any>({
        path: `/atendimentos-participantes/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags atendimentos-participantes
     * @name AtendimentosParticipantesPartialUpdate
     * @request PATCH:/atendimentos-participantes/{id}/
     * @secure
     */
    atendimentosParticipantesPartialUpdate: (id: number, data: AtendimentoParticipante, params: RequestParams = {}) =>
      this.request<AtendimentoParticipante, any>({
        path: `/atendimentos-participantes/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags atendimentos-participantes
     * @name AtendimentosParticipantesDelete
     * @request DELETE:/atendimentos-participantes/{id}/
     * @secure
     */
    atendimentosParticipantesDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/atendimentos-participantes/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  atendimentosTotaisPorMes = {
    /**
     * No description
     *
     * @tags atendimentos-totais-por-mes
     * @name AtendimentosTotaisPorMesList
     * @request GET:/atendimentos-totais-por-mes/
     * @secure
     */
    atendimentosTotaisPorMesList: (
      query: {
        ano: number;
        mes: number;
        area_id?: number;
        usuario_defensor_id?: number;
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: AtendimentoTotalSerializar[];
        },
        any
      >({
        path: `/atendimentos-totais-por-mes/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  atendimentos = {
    /**
     * No description
     *
     * @tags atendimentos
     * @name AtendimentosList
     * @request GET:/atendimentos/
     * @secure
     */
    atendimentosList: (
      query?: {
        numero?: number;
        defensoria?: string;
        ativo?: string;
        data_agendamento_after?: string;
        data_agendamento_before?: string;
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: AtendimentoDefensor[];
        },
        any
      >({
        path: `/atendimentos/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags atendimentos
     * @name AtendimentosCreate
     * @request POST:/atendimentos/
     * @secure
     */
    atendimentosCreate: (data: AtendimentoDefensor, params: RequestParams = {}) =>
      this.request<AtendimentoDefensor, any>({
        path: `/atendimentos/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags atendimentos
     * @name AtendimentosConsultarPorTelefone
     * @request GET:/atendimentos/consultar_por_telefone/
     * @secure
     */
    atendimentosConsultarPorTelefone: (
      query: {
        numero?: number;
        defensoria?: string;
        ativo?: string;
        data_agendamento_after?: string;
        data_agendamento_before?: string;
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
        /** @minLength 1 */
        telefone: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<AtendimentoRocket, any>({
        path: `/atendimentos/consultar_por_telefone/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags atendimentos
     * @name AtendimentosRead
     * @request GET:/atendimentos/{numero}/
     * @secure
     */
    atendimentosRead: (numero: number, params: RequestParams = {}) =>
      this.request<AtendimentoDefensor, any>({
        path: `/atendimentos/${numero}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags atendimentos
     * @name AtendimentosUpdate
     * @request PUT:/atendimentos/{numero}/
     * @secure
     */
    atendimentosUpdate: (numero: number, data: AtendimentoDefensor, params: RequestParams = {}) =>
      this.request<AtendimentoDefensor, any>({
        path: `/atendimentos/${numero}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags atendimentos
     * @name AtendimentosPartialUpdate
     * @request PATCH:/atendimentos/{numero}/
     * @secure
     */
    atendimentosPartialUpdate: (numero: number, data: AtendimentoDefensor, params: RequestParams = {}) =>
      this.request<AtendimentoDefensor, any>({
        path: `/atendimentos/${numero}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags atendimentos
     * @name AtendimentosDelete
     * @request DELETE:/atendimentos/{numero}/
     * @secure
     */
    atendimentosDelete: (numero: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/atendimentos/${numero}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  atividadesExtraordinaria = {
    /**
     * No description
     *
     * @tags atividades-extraordinaria
     * @name AtividadesExtraordinariaList
     * @request GET:/atividades-extraordinaria/
     * @secure
     */
    atividadesExtraordinariaList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: AtividadeExtraordinaria[];
        },
        any
      >({
        path: `/atividades-extraordinaria/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags atividades-extraordinaria
     * @name AtividadesExtraordinariaCreate
     * @request POST:/atividades-extraordinaria/
     * @secure
     */
    atividadesExtraordinariaCreate: (data: AtividadeExtraordinaria, params: RequestParams = {}) =>
      this.request<AtividadeExtraordinaria, any>({
        path: `/atividades-extraordinaria/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags atividades-extraordinaria
     * @name AtividadesExtraordinariaRead
     * @request GET:/atividades-extraordinaria/{id}/
     * @secure
     */
    atividadesExtraordinariaRead: (id: number, params: RequestParams = {}) =>
      this.request<AtividadeExtraordinaria, any>({
        path: `/atividades-extraordinaria/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags atividades-extraordinaria
     * @name AtividadesExtraordinariaUpdate
     * @request PUT:/atividades-extraordinaria/{id}/
     * @secure
     */
    atividadesExtraordinariaUpdate: (id: number, data: AtividadeExtraordinaria, params: RequestParams = {}) =>
      this.request<AtividadeExtraordinaria, any>({
        path: `/atividades-extraordinaria/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags atividades-extraordinaria
     * @name AtividadesExtraordinariaPartialUpdate
     * @request PATCH:/atividades-extraordinaria/{id}/
     * @secure
     */
    atividadesExtraordinariaPartialUpdate: (id: number, data: AtividadeExtraordinaria, params: RequestParams = {}) =>
      this.request<AtividadeExtraordinaria, any>({
        path: `/atividades-extraordinaria/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags atividades-extraordinaria
     * @name AtividadesExtraordinariaDelete
     * @request DELETE:/atividades-extraordinaria/{id}/
     * @secure
     */
    atividadesExtraordinariaDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/atividades-extraordinaria/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  atuacoesDocumentos = {
    /**
     * No description
     *
     * @tags atuacoes-documentos
     * @name AtuacoesDocumentosList
     * @request GET:/atuacoes-documentos/
     * @secure
     */
    atuacoesDocumentosList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: DefensorDocumento[];
        },
        any
      >({
        path: `/atuacoes-documentos/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags atuacoes-documentos
     * @name AtuacoesDocumentosCreate
     * @request POST:/atuacoes-documentos/
     * @secure
     */
    atuacoesDocumentosCreate: (data: DefensorDocumento, params: RequestParams = {}) =>
      this.request<DefensorDocumento, any>({
        path: `/atuacoes-documentos/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags atuacoes-documentos
     * @name AtuacoesDocumentosRead
     * @request GET:/atuacoes-documentos/{id}/
     * @secure
     */
    atuacoesDocumentosRead: (id: number, params: RequestParams = {}) =>
      this.request<DefensorDocumento, any>({
        path: `/atuacoes-documentos/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags atuacoes-documentos
     * @name AtuacoesDocumentosUpdate
     * @request PUT:/atuacoes-documentos/{id}/
     * @secure
     */
    atuacoesDocumentosUpdate: (id: number, data: DefensorDocumento, params: RequestParams = {}) =>
      this.request<DefensorDocumento, any>({
        path: `/atuacoes-documentos/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags atuacoes-documentos
     * @name AtuacoesDocumentosPartialUpdate
     * @request PATCH:/atuacoes-documentos/{id}/
     * @secure
     */
    atuacoesDocumentosPartialUpdate: (id: number, data: DefensorDocumento, params: RequestParams = {}) =>
      this.request<DefensorDocumento, any>({
        path: `/atuacoes-documentos/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags atuacoes-documentos
     * @name AtuacoesDocumentosDelete
     * @request DELETE:/atuacoes-documentos/{id}/
     * @secure
     */
    atuacoesDocumentosDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/atuacoes-documentos/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  atuacoes = {
    /**
     * No description
     *
     * @tags atuacoes
     * @name AtuacoesList
     * @request GET:/atuacoes/
     * @secure
     */
    atuacoesList: (
      query?: {
        tipo?: string;
        defensor?: string;
        servidor?: string;
        defensoria?: string;
        data_inicial?: string;
        data_final?: string;
        eh_defensor?: string;
        esta_vigente?: string;
        incluir_filhos?: string;
        ativo?: string;
        incluir_defensorias_filhas?: string;
        apenas_defensor?: string;
        apenas_vigentes?: string;
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: Atuacao[];
        },
        any
      >({
        path: `/atuacoes/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags atuacoes
     * @name AtuacoesRead
     * @request GET:/atuacoes/{id}/
     * @secure
     */
    atuacoesRead: (id: number, params: RequestParams = {}) =>
      this.request<Atuacao, any>({
        path: `/atuacoes/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  atualizacoes = {
    /**
     * No description
     *
     * @tags atualizacoes
     * @name AtualizacoesList
     * @request GET:/atualizacoes/
     * @secure
     */
    atualizacoesList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: Atualizacao[];
        },
        any
      >({
        path: `/atualizacoes/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags atualizacoes
     * @name AtualizacoesRead
     * @request GET:/atualizacoes/{id}/
     * @secure
     */
    atualizacoesRead: (id: number, params: RequestParams = {}) =>
      this.request<Atualizacao, any>({
        path: `/atualizacoes/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  audienciasTotaisPorMes = {
    /**
     * No description
     *
     * @tags audiencias-totais-por-mes
     * @name AudienciasTotaisPorMesList
     * @request GET:/audiencias-totais-por-mes/
     * @secure
     */
    audienciasTotaisPorMesList: (
      query: {
        ano: number;
        mes: number;
        area_id?: number;
        /** Valores múltiplos podem ser separados por vírgulas. */
        vara_id?: string;
        usuario_defensor_id?: number;
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: AudienciaTotal[];
        },
        any
      >({
        path: `/audiencias-totais-por-mes/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  audiencias = {
    /**
     * No description
     *
     * @tags audiencias
     * @name AudienciasList
     * @request GET:/audiencias/
     * @secure
     */
    audienciasList: (
      query?: {
        data_inicial?: string;
        data_final?: string;
        defensor_cadastro?: string;
        defensoria?: string;
        processo?: string;
        ativo?: string;
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: Audiencia[];
        },
        any
      >({
        path: `/audiencias/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags audiencias
     * @name AudienciasCreate
     * @request POST:/audiencias/
     * @secure
     */
    audienciasCreate: (data: Audiencia, params: RequestParams = {}) =>
      this.request<Audiencia, any>({
        path: `/audiencias/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags audiencias
     * @name AudienciasRead
     * @request GET:/audiencias/{id}/
     * @secure
     */
    audienciasRead: (id: number, params: RequestParams = {}) =>
      this.request<Audiencia, any>({
        path: `/audiencias/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags audiencias
     * @name AudienciasUpdate
     * @request PUT:/audiencias/{id}/
     * @secure
     */
    audienciasUpdate: (id: number, data: Audiencia, params: RequestParams = {}) =>
      this.request<Audiencia, any>({
        path: `/audiencias/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags audiencias
     * @name AudienciasPartialUpdate
     * @request PATCH:/audiencias/{id}/
     * @secure
     */
    audienciasPartialUpdate: (id: number, data: Audiencia, params: RequestParams = {}) =>
      this.request<Audiencia, any>({
        path: `/audiencias/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags audiencias
     * @name AudienciasDelete
     * @request DELETE:/audiencias/{id}/
     * @secure
     */
    audienciasDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/audiencias/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  authAssistido = {
    /**
     * @description Algumas situações serão retornadas na resposta ao acesso não autorizado no endpoint. ### São elas: - **0** : Assistido tem atendimento no SOLAR, porém não foi usado para acesso. - **1** : Assistido não tem atendimento cadastrado no SOLAR. - **2** : Não está cadastrado no SOLAR - **3** : Assistido possuí atendimento, porém não é o atendimento fornecido. > Obs.: Essa endpoint não retorna o token de autorização de acesso. Para isso, ultiza-se o token único gerado no SOLAR.
     *
     * @tags auth-assistido
     * @name AuthAssistidoCreate
     * @summary Endpoint para realização de autenticação no SOLAR para o assistido.
     * @request POST:/auth-assistido/
     * @secure
     */
    authAssistidoCreate: (data: AuthAssistidoLunaRequest, params: RequestParams = {}) =>
      this.request<AuthAssistidoLunaResponse, ErrorPessoAtendimentoWithSituacaoResponse>({
        path: `/auth-assistido/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  avisos = {
    /**
     * No description
     *
     * @tags avisos
     * @name AvisosDistribuirList
     * @request GET:/avisos/distribuir/
     * @secure
     */
    avisosDistribuirList: (
      query?: {
        comarca?: string;
        defensor?: string;
        defensoria?: string;
        paridade?: string;
        sistema_webservice?: string;
        vara?: string;
        page?: string;
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<AvisoDistribuirList, any>({
        path: `/avisos/distribuir/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags avisos
     * @name AvisosDistribuirCreate
     * @request POST:/avisos/distribuir/
     * @secure
     */
    avisosDistribuirCreate: (data: AvisoDistribuirCreate, params: RequestParams = {}) =>
      this.request<AvisoDistribuirCreate, any>({
        path: `/avisos/distribuir/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags avisos
     * @name AvisosEtiquetarPrazoCreate
     * @request POST:/avisos/etiquetar-prazo/
     * @secure
     */
    avisosEtiquetarPrazoCreate: (data: EtiquetarAviso, params: RequestParams = {}) =>
      this.request<EtiquetarAviso, any>({
        path: `/avisos/etiquetar-prazo/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags avisos
     * @name AvisosPainelList
     * @request GET:/avisos/painel/
     * @secure
     */
    avisosPainelList: (
      query?: {
        defensoria?: string;
        responsavel?: string;
        sistema_webservice?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<PainelDeAviso, any>({
        path: `/avisos/painel/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags avisos
     * @name AvisosRedistribuidosList
     * @request GET:/avisos/redistribuidos/
     * @secure
     */
    avisosRedistribuidosList: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/avisos/redistribuidos/`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags avisos
     * @name AvisosSituacaoList
     * @request GET:/avisos/situacao/
     * @secure
     */
    avisosSituacaoList: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/avisos/situacao/`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags avisos
     * @name AvisosTipoList
     * @request GET:/avisos/tipo/
     * @secure
     */
    avisosTipoList: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/avisos/tipo/`,
        method: "GET",
        secure: true,
        ...params,
      }),
  };
  bairros = {
    /**
     * No description
     *
     * @tags bairros
     * @name BairrosList
     * @request GET:/bairros/
     * @secure
     */
    bairrosList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: Bairro[];
        },
        any
      >({
        path: `/bairros/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags bairros
     * @name BairrosCreate
     * @request POST:/bairros/
     * @secure
     */
    bairrosCreate: (data: Bairro, params: RequestParams = {}) =>
      this.request<Bairro, any>({
        path: `/bairros/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags bairros
     * @name BairrosRead
     * @request GET:/bairros/{id}/
     * @secure
     */
    bairrosRead: (id: number, params: RequestParams = {}) =>
      this.request<Bairro, any>({
        path: `/bairros/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags bairros
     * @name BairrosUpdate
     * @request PUT:/bairros/{id}/
     * @secure
     */
    bairrosUpdate: (id: number, data: Bairro, params: RequestParams = {}) =>
      this.request<Bairro, any>({
        path: `/bairros/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags bairros
     * @name BairrosPartialUpdate
     * @request PATCH:/bairros/{id}/
     * @secure
     */
    bairrosPartialUpdate: (id: number, data: Bairro, params: RequestParams = {}) =>
      this.request<Bairro, any>({
        path: `/bairros/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags bairros
     * @name BairrosDelete
     * @request DELETE:/bairros/{id}/
     * @secure
     */
    bairrosDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/bairros/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  cadUnicoBuscaPessoa = {
    /**
     * No description
     *
     * @tags cad_unico_busca_pessoa
     * @name CadUnicoBuscaPessoaList
     * @request GET:/cad_unico_busca_pessoa/
     * @secure
     */
    cadUnicoBuscaPessoaList: (
      query?: {
        cpf?: string;
        nis?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/cad_unico_busca_pessoa/`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),
  };
  calculosDeExecucaoPenal = {
    /**
     * No description
     *
     * @tags calculos-de-execucao-penal
     * @name CalculosDeExecucaoPenalList
     * @request GET:/calculos-de-execucao-penal/
     * @secure
     */
    calculosDeExecucaoPenalList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: CalculoExecucaoPenal[];
        },
        any
      >({
        path: `/calculos-de-execucao-penal/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags calculos-de-execucao-penal
     * @name CalculosDeExecucaoPenalCreate
     * @request POST:/calculos-de-execucao-penal/
     * @secure
     */
    calculosDeExecucaoPenalCreate: (data: CalculoExecucaoPenal, params: RequestParams = {}) =>
      this.request<CalculoExecucaoPenal, any>({
        path: `/calculos-de-execucao-penal/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags calculos-de-execucao-penal
     * @name CalculosDeExecucaoPenalRead
     * @request GET:/calculos-de-execucao-penal/{id}/
     * @secure
     */
    calculosDeExecucaoPenalRead: (id: number, params: RequestParams = {}) =>
      this.request<CalculoExecucaoPenal, any>({
        path: `/calculos-de-execucao-penal/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags calculos-de-execucao-penal
     * @name CalculosDeExecucaoPenalUpdate
     * @request PUT:/calculos-de-execucao-penal/{id}/
     * @secure
     */
    calculosDeExecucaoPenalUpdate: (id: number, data: CalculoExecucaoPenal, params: RequestParams = {}) =>
      this.request<CalculoExecucaoPenal, any>({
        path: `/calculos-de-execucao-penal/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags calculos-de-execucao-penal
     * @name CalculosDeExecucaoPenalPartialUpdate
     * @request PATCH:/calculos-de-execucao-penal/{id}/
     * @secure
     */
    calculosDeExecucaoPenalPartialUpdate: (id: number, data: CalculoExecucaoPenal, params: RequestParams = {}) =>
      this.request<CalculoExecucaoPenal, any>({
        path: `/calculos-de-execucao-penal/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags calculos-de-execucao-penal
     * @name CalculosDeExecucaoPenalDelete
     * @request DELETE:/calculos-de-execucao-penal/{id}/
     * @secure
     */
    calculosDeExecucaoPenalDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/calculos-de-execucao-penal/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  cargos = {
    /**
     * No description
     *
     * @tags cargos
     * @name CargosList
     * @request GET:/cargos/
     * @secure
     */
    cargosList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: Cargo[];
        },
        any
      >({
        path: `/cargos/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags cargos
     * @name CargosRead
     * @request GET:/cargos/{id}/
     * @secure
     */
    cargosRead: (id: number, params: RequestParams = {}) =>
      this.request<Cargo, any>({
        path: `/cargos/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  categoriasDeAgenda = {
    /**
     * No description
     *
     * @tags categorias-de-agenda
     * @name CategoriasDeAgendaList
     * @request GET:/categorias-de-agenda/
     * @secure
     */
    categoriasDeAgendaList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: CategoriaDeAgenda[];
        },
        any
      >({
        path: `/categorias-de-agenda/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags categorias-de-agenda
     * @name CategoriasDeAgendaCreate
     * @request POST:/categorias-de-agenda/
     * @secure
     */
    categoriasDeAgendaCreate: (data: CategoriaDeAgenda, params: RequestParams = {}) =>
      this.request<CategoriaDeAgenda, any>({
        path: `/categorias-de-agenda/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags categorias-de-agenda
     * @name CategoriasDeAgendaRead
     * @request GET:/categorias-de-agenda/{id}/
     * @secure
     */
    categoriasDeAgendaRead: (id: number, params: RequestParams = {}) =>
      this.request<CategoriaDeAgenda, any>({
        path: `/categorias-de-agenda/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags categorias-de-agenda
     * @name CategoriasDeAgendaUpdate
     * @request PUT:/categorias-de-agenda/{id}/
     * @secure
     */
    categoriasDeAgendaUpdate: (id: number, data: CategoriaDeAgenda, params: RequestParams = {}) =>
      this.request<CategoriaDeAgenda, any>({
        path: `/categorias-de-agenda/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags categorias-de-agenda
     * @name CategoriasDeAgendaPartialUpdate
     * @request PATCH:/categorias-de-agenda/{id}/
     * @secure
     */
    categoriasDeAgendaPartialUpdate: (id: number, data: CategoriaDeAgenda, params: RequestParams = {}) =>
      this.request<CategoriaDeAgenda, any>({
        path: `/categorias-de-agenda/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags categorias-de-agenda
     * @name CategoriasDeAgendaDelete
     * @request DELETE:/categorias-de-agenda/{id}/
     * @secure
     */
    categoriasDeAgendaDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/categorias-de-agenda/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  ceps = {
    /**
     * No description
     *
     * @tags ceps
     * @name CepsList
     * @request GET:/ceps/
     * @secure
     */
    cepsList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: CEP[];
        },
        any
      >({
        path: `/ceps/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ceps
     * @name CepsCreate
     * @request POST:/ceps/
     * @secure
     */
    cepsCreate: (data: CEP, params: RequestParams = {}) =>
      this.request<CEP, any>({
        path: `/ceps/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ceps
     * @name CepsRead
     * @request GET:/ceps/{id}/
     * @secure
     */
    cepsRead: (id: number, params: RequestParams = {}) =>
      this.request<CEP, any>({
        path: `/ceps/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ceps
     * @name CepsUpdate
     * @request PUT:/ceps/{id}/
     * @secure
     */
    cepsUpdate: (id: number, data: CEP, params: RequestParams = {}) =>
      this.request<CEP, any>({
        path: `/ceps/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ceps
     * @name CepsPartialUpdate
     * @request PATCH:/ceps/{id}/
     * @secure
     */
    cepsPartialUpdate: (id: number, data: CEP, params: RequestParams = {}) =>
      this.request<CEP, any>({
        path: `/ceps/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ceps
     * @name CepsDelete
     * @request DELETE:/ceps/{id}/
     * @secure
     */
    cepsDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/ceps/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  comarcas = {
    /**
     * No description
     *
     * @tags comarcas
     * @name ComarcasList
     * @request GET:/comarcas/
     * @secure
     */
    comarcasList: (
      query?: {
        eh_coordenadoria?: string;
        ativo?: string;
        incluir_filhos?: string;
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: Comarca[];
        },
        any
      >({
        path: `/comarcas/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags comarcas
     * @name ComarcasRead
     * @request GET:/comarcas/{id}/
     * @secure
     */
    comarcasRead: (id: number, params: RequestParams = {}) =>
      this.request<Comarca, any>({
        path: `/comarcas/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  competencias = {
    /**
     * No description
     *
     * @tags competencias
     * @name CompetenciasList
     * @request GET:/competencias/
     * @secure
     */
    competenciasList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: SistemaWebService[];
        },
        any
      >({
        path: `/competencias/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags competencias
     * @name CompetenciasRead
     * @request GET:/competencias/{id}/
     * @secure
     */
    competenciasRead: (id: number, params: RequestParams = {}) =>
      this.request<SistemaWebService, any>({
        path: `/competencias/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  contribDocumentos = {
    /**
     * No description
     *
     * @tags contrib-documentos
     * @name ContribDocumentosList
     * @request GET:/contrib-documentos/
     * @secure
     */
    contribDocumentosList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: ContribDocumento[];
        },
        any
      >({
        path: `/contrib-documentos/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags contrib-documentos
     * @name ContribDocumentosCreate
     * @request POST:/contrib-documentos/
     * @secure
     */
    contribDocumentosCreate: (data: ContribDocumento, params: RequestParams = {}) =>
      this.request<ContribDocumento, any>({
        path: `/contrib-documentos/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags contrib-documentos
     * @name ContribDocumentosRead
     * @request GET:/contrib-documentos/{id}/
     * @secure
     */
    contribDocumentosRead: (id: number, params: RequestParams = {}) =>
      this.request<ContribDocumento, any>({
        path: `/contrib-documentos/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags contrib-documentos
     * @name ContribDocumentosUpdate
     * @request PUT:/contrib-documentos/{id}/
     * @secure
     */
    contribDocumentosUpdate: (id: number, data: ContribDocumento, params: RequestParams = {}) =>
      this.request<ContribDocumento, any>({
        path: `/contrib-documentos/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags contrib-documentos
     * @name ContribDocumentosPartialUpdate
     * @request PATCH:/contrib-documentos/{id}/
     * @secure
     */
    contribDocumentosPartialUpdate: (id: number, data: ContribDocumento, params: RequestParams = {}) =>
      this.request<ContribDocumento, any>({
        path: `/contrib-documentos/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags contrib-documentos
     * @name ContribDocumentosDelete
     * @request DELETE:/contrib-documentos/{id}/
     * @secure
     */
    contribDocumentosDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/contrib-documentos/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  coreClasses = {
    /**
     * No description
     *
     * @tags core-classes
     * @name CoreClassesList
     * @request GET:/core-classes/
     * @secure
     */
    coreClassesList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: Classe[];
        },
        any
      >({
        path: `/core-classes/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags core-classes
     * @name CoreClassesCreate
     * @request POST:/core-classes/
     * @secure
     */
    coreClassesCreate: (data: Classe, params: RequestParams = {}) =>
      this.request<Classe, any>({
        path: `/core-classes/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags core-classes
     * @name CoreClassesRead
     * @request GET:/core-classes/{id}/
     * @secure
     */
    coreClassesRead: (id: number, params: RequestParams = {}) =>
      this.request<Classe, any>({
        path: `/core-classes/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags core-classes
     * @name CoreClassesUpdate
     * @request PUT:/core-classes/{id}/
     * @secure
     */
    coreClassesUpdate: (id: number, data: Classe, params: RequestParams = {}) =>
      this.request<Classe, any>({
        path: `/core-classes/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags core-classes
     * @name CoreClassesPartialUpdate
     * @request PATCH:/core-classes/{id}/
     * @secure
     */
    coreClassesPartialUpdate: (id: number, data: Classe, params: RequestParams = {}) =>
      this.request<Classe, any>({
        path: `/core-classes/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags core-classes
     * @name CoreClassesDelete
     * @request DELETE:/core-classes/{id}/
     * @secure
     */
    coreClassesDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/core-classes/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  coreDocumentos = {
    /**
     * No description
     *
     * @tags core-documentos
     * @name CoreDocumentosList
     * @request GET:/core-documentos/
     * @secure
     */
    coreDocumentosList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: CoreDocumento[];
        },
        any
      >({
        path: `/core-documentos/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags core-documentos
     * @name CoreDocumentosCreate
     * @request POST:/core-documentos/
     * @secure
     */
    coreDocumentosCreate: (data: CoreDocumento, params: RequestParams = {}) =>
      this.request<CoreDocumento, any>({
        path: `/core-documentos/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags core-documentos
     * @name CoreDocumentosRead
     * @request GET:/core-documentos/{id}/
     * @secure
     */
    coreDocumentosRead: (id: number, params: RequestParams = {}) =>
      this.request<CoreDocumento, any>({
        path: `/core-documentos/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags core-documentos
     * @name CoreDocumentosUpdate
     * @request PUT:/core-documentos/{id}/
     * @secure
     */
    coreDocumentosUpdate: (id: number, data: CoreDocumento, params: RequestParams = {}) =>
      this.request<CoreDocumento, any>({
        path: `/core-documentos/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags core-documentos
     * @name CoreDocumentosPartialUpdate
     * @request PATCH:/core-documentos/{id}/
     * @secure
     */
    coreDocumentosPartialUpdate: (id: number, data: CoreDocumento, params: RequestParams = {}) =>
      this.request<CoreDocumento, any>({
        path: `/core-documentos/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags core-documentos
     * @name CoreDocumentosDelete
     * @request DELETE:/core-documentos/{id}/
     * @secure
     */
    coreDocumentosDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/core-documentos/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  coreEventos = {
    /**
     * No description
     *
     * @tags core-eventos
     * @name CoreEventosList
     * @request GET:/core-eventos/
     * @secure
     */
    coreEventosList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: CoreEvento[];
        },
        any
      >({
        path: `/core-eventos/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags core-eventos
     * @name CoreEventosCreate
     * @request POST:/core-eventos/
     * @secure
     */
    coreEventosCreate: (data: CoreEvento, params: RequestParams = {}) =>
      this.request<CoreEvento, any>({
        path: `/core-eventos/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags core-eventos
     * @name CoreEventosRead
     * @request GET:/core-eventos/{id}/
     * @secure
     */
    coreEventosRead: (id: number, params: RequestParams = {}) =>
      this.request<CoreEvento, any>({
        path: `/core-eventos/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags core-eventos
     * @name CoreEventosUpdate
     * @request PUT:/core-eventos/{id}/
     * @secure
     */
    coreEventosUpdate: (id: number, data: CoreEvento, params: RequestParams = {}) =>
      this.request<CoreEvento, any>({
        path: `/core-eventos/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags core-eventos
     * @name CoreEventosPartialUpdate
     * @request PATCH:/core-eventos/{id}/
     * @secure
     */
    coreEventosPartialUpdate: (id: number, data: CoreEvento, params: RequestParams = {}) =>
      this.request<CoreEvento, any>({
        path: `/core-eventos/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags core-eventos
     * @name CoreEventosDelete
     * @request DELETE:/core-eventos/{id}/
     * @secure
     */
    coreEventosDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/core-eventos/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  coreModelosDocumento = {
    /**
     * No description
     *
     * @tags core-modelos-documento
     * @name CoreModelosDocumentoList
     * @request GET:/core-modelos-documento/
     * @secure
     */
    coreModelosDocumentoList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: CoreModeloDocumento[];
        },
        any
      >({
        path: `/core-modelos-documento/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags core-modelos-documento
     * @name CoreModelosDocumentoCreate
     * @request POST:/core-modelos-documento/
     * @secure
     */
    coreModelosDocumentoCreate: (data: CoreModeloDocumento, params: RequestParams = {}) =>
      this.request<CoreModeloDocumento, any>({
        path: `/core-modelos-documento/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags core-modelos-documento
     * @name CoreModelosDocumentoRead
     * @request GET:/core-modelos-documento/{id}/
     * @secure
     */
    coreModelosDocumentoRead: (id: number, params: RequestParams = {}) =>
      this.request<CoreModeloDocumento, any>({
        path: `/core-modelos-documento/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags core-modelos-documento
     * @name CoreModelosDocumentoUpdate
     * @request PUT:/core-modelos-documento/{id}/
     * @secure
     */
    coreModelosDocumentoUpdate: (id: number, data: CoreModeloDocumento, params: RequestParams = {}) =>
      this.request<CoreModeloDocumento, any>({
        path: `/core-modelos-documento/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags core-modelos-documento
     * @name CoreModelosDocumentoPartialUpdate
     * @request PATCH:/core-modelos-documento/{id}/
     * @secure
     */
    coreModelosDocumentoPartialUpdate: (id: number, data: CoreModeloDocumento, params: RequestParams = {}) =>
      this.request<CoreModeloDocumento, any>({
        path: `/core-modelos-documento/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags core-modelos-documento
     * @name CoreModelosDocumentoDelete
     * @request DELETE:/core-modelos-documento/{id}/
     * @secure
     */
    coreModelosDocumentoDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/core-modelos-documento/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  corePartes = {
    /**
     * No description
     *
     * @tags core-partes
     * @name CorePartesList
     * @request GET:/core-partes/
     * @secure
     */
    corePartesList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: Parte[];
        },
        any
      >({
        path: `/core-partes/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags core-partes
     * @name CorePartesCreate
     * @request POST:/core-partes/
     * @secure
     */
    corePartesCreate: (data: Parte, params: RequestParams = {}) =>
      this.request<Parte, any>({
        path: `/core-partes/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags core-partes
     * @name CorePartesRead
     * @request GET:/core-partes/{id}/
     * @secure
     */
    corePartesRead: (id: number, params: RequestParams = {}) =>
      this.request<Parte, any>({
        path: `/core-partes/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags core-partes
     * @name CorePartesUpdate
     * @request PUT:/core-partes/{id}/
     * @secure
     */
    corePartesUpdate: (id: number, data: Parte, params: RequestParams = {}) =>
      this.request<Parte, any>({
        path: `/core-partes/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags core-partes
     * @name CorePartesPartialUpdate
     * @request PATCH:/core-partes/{id}/
     * @secure
     */
    corePartesPartialUpdate: (id: number, data: Parte, params: RequestParams = {}) =>
      this.request<Parte, any>({
        path: `/core-partes/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags core-partes
     * @name CorePartesDelete
     * @request DELETE:/core-partes/{id}/
     * @secure
     */
    corePartesDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/core-partes/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  coreProcessos = {
    /**
     * No description
     *
     * @tags core-processos
     * @name CoreProcessosList
     * @request GET:/core-processos/
     * @secure
     */
    coreProcessosList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: CoreProcesso[];
        },
        any
      >({
        path: `/core-processos/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags core-processos
     * @name CoreProcessosCreate
     * @request POST:/core-processos/
     * @secure
     */
    coreProcessosCreate: (data: CoreProcesso, params: RequestParams = {}) =>
      this.request<CoreProcesso, any>({
        path: `/core-processos/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags core-processos
     * @name CoreProcessosRead
     * @request GET:/core-processos/{id}/
     * @secure
     */
    coreProcessosRead: (id: number, params: RequestParams = {}) =>
      this.request<CoreProcesso, any>({
        path: `/core-processos/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags core-processos
     * @name CoreProcessosUpdate
     * @request PUT:/core-processos/{id}/
     * @secure
     */
    coreProcessosUpdate: (id: number, data: CoreProcesso, params: RequestParams = {}) =>
      this.request<CoreProcesso, any>({
        path: `/core-processos/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags core-processos
     * @name CoreProcessosPartialUpdate
     * @request PATCH:/core-processos/{id}/
     * @secure
     */
    coreProcessosPartialUpdate: (id: number, data: CoreProcesso, params: RequestParams = {}) =>
      this.request<CoreProcesso, any>({
        path: `/core-processos/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags core-processos
     * @name CoreProcessosDelete
     * @request DELETE:/core-processos/{id}/
     * @secure
     */
    coreProcessosDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/core-processos/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  coreTiposDocumento = {
    /**
     * No description
     *
     * @tags core-tipos-documento
     * @name CoreTiposDocumentoList
     * @request GET:/core-tipos-documento/
     * @secure
     */
    coreTiposDocumentoList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: TipoDocumento[];
        },
        any
      >({
        path: `/core-tipos-documento/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags core-tipos-documento
     * @name CoreTiposDocumentoCreate
     * @request POST:/core-tipos-documento/
     * @secure
     */
    coreTiposDocumentoCreate: (data: TipoDocumento, params: RequestParams = {}) =>
      this.request<TipoDocumento, any>({
        path: `/core-tipos-documento/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags core-tipos-documento
     * @name CoreTiposDocumentoRead
     * @request GET:/core-tipos-documento/{id}/
     * @secure
     */
    coreTiposDocumentoRead: (id: number, params: RequestParams = {}) =>
      this.request<TipoDocumento, any>({
        path: `/core-tipos-documento/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags core-tipos-documento
     * @name CoreTiposDocumentoUpdate
     * @request PUT:/core-tipos-documento/{id}/
     * @secure
     */
    coreTiposDocumentoUpdate: (id: number, data: TipoDocumento, params: RequestParams = {}) =>
      this.request<TipoDocumento, any>({
        path: `/core-tipos-documento/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags core-tipos-documento
     * @name CoreTiposDocumentoPartialUpdate
     * @request PATCH:/core-tipos-documento/{id}/
     * @secure
     */
    coreTiposDocumentoPartialUpdate: (id: number, data: TipoDocumento, params: RequestParams = {}) =>
      this.request<TipoDocumento, any>({
        path: `/core-tipos-documento/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags core-tipos-documento
     * @name CoreTiposDocumentoDelete
     * @request DELETE:/core-tipos-documento/{id}/
     * @secure
     */
    coreTiposDocumentoDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/core-tipos-documento/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  coreTiposEvento = {
    /**
     * No description
     *
     * @tags core-tipos-evento
     * @name CoreTiposEventoList
     * @request GET:/core-tipos-evento/
     * @secure
     */
    coreTiposEventoList: (
      query?: {
        tipo?: string;
        tipo_processo?: string;
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: TipoEvento[];
        },
        any
      >({
        path: `/core-tipos-evento/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags core-tipos-evento
     * @name CoreTiposEventoCreate
     * @request POST:/core-tipos-evento/
     * @secure
     */
    coreTiposEventoCreate: (data: TipoEvento, params: RequestParams = {}) =>
      this.request<TipoEvento, any>({
        path: `/core-tipos-evento/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags core-tipos-evento
     * @name CoreTiposEventoRead
     * @request GET:/core-tipos-evento/{id}/
     * @secure
     */
    coreTiposEventoRead: (id: number, params: RequestParams = {}) =>
      this.request<TipoEvento, any>({
        path: `/core-tipos-evento/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags core-tipos-evento
     * @name CoreTiposEventoUpdate
     * @request PUT:/core-tipos-evento/{id}/
     * @secure
     */
    coreTiposEventoUpdate: (id: number, data: TipoEvento, params: RequestParams = {}) =>
      this.request<TipoEvento, any>({
        path: `/core-tipos-evento/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags core-tipos-evento
     * @name CoreTiposEventoPartialUpdate
     * @request PATCH:/core-tipos-evento/{id}/
     * @secure
     */
    coreTiposEventoPartialUpdate: (id: number, data: TipoEvento, params: RequestParams = {}) =>
      this.request<TipoEvento, any>({
        path: `/core-tipos-evento/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags core-tipos-evento
     * @name CoreTiposEventoDelete
     * @request DELETE:/core-tipos-evento/{id}/
     * @secure
     */
    coreTiposEventoDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/core-tipos-evento/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  defensores = {
    /**
     * No description
     *
     * @tags defensores
     * @name DefensoresList
     * @request GET:/defensores/
     * @secure
     */
    defensoresList: (
      query?: {
        servidor?: string;
        incluir_atuacoes?: string;
        ativo?: string;
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: Defensor[];
        },
        any
      >({
        path: `/defensores/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags defensores
     * @name DefensoresRead
     * @request GET:/defensores/{id}/
     * @secure
     */
    defensoresRead: (id: number, params: RequestParams = {}) =>
      this.request<Defensor, any>({
        path: `/defensores/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  defensoriasEtiquetas = {
    /**
     * No description
     *
     * @tags defensorias-etiquetas
     * @name DefensoriasEtiquetasList
     * @request GET:/defensorias-etiquetas/
     * @secure
     */
    defensoriasEtiquetasList: (
      query?: {
        defensorias?: string;
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: DefensoriaEtiqueta[];
        },
        any
      >({
        path: `/defensorias-etiquetas/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags defensorias-etiquetas
     * @name DefensoriasEtiquetasRead
     * @request GET:/defensorias-etiquetas/{id}/
     * @secure
     */
    defensoriasEtiquetasRead: (id: number, params: RequestParams = {}) =>
      this.request<DefensoriaEtiqueta, any>({
        path: `/defensorias-etiquetas/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  defensoriasTiposEvento = {
    /**
     * No description
     *
     * @tags defensorias-tipos-evento
     * @name DefensoriasTiposEventoList
     * @request GET:/defensorias-tipos-evento/
     * @secure
     */
    defensoriasTiposEventoList: (
      query?: {
        /** Valores múltiplos podem ser separados por vírgulas. */
        defensoria?: number;
        tipo_evento?: string;
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: DefensoriaTipoEvento[];
        },
        any
      >({
        path: `/defensorias-tipos-evento/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags defensorias-tipos-evento
     * @name DefensoriasTiposEventoRead
     * @request GET:/defensorias-tipos-evento/{id}/
     * @secure
     */
    defensoriasTiposEventoRead: (id: number, params: RequestParams = {}) =>
      this.request<DefensoriaTipoEvento, any>({
        path: `/defensorias-tipos-evento/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  defensoriasVaras = {
    /**
     * No description
     *
     * @tags defensorias-varas
     * @name DefensoriasVarasList
     * @request GET:/defensorias-varas/
     * @secure
     */
    defensoriasVarasList: (
      query?: {
        defensoria?: string;
        vara?: string;
        paridade?: string;
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: DefensoriaVara[];
        },
        any
      >({
        path: `/defensorias-varas/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags defensorias-varas
     * @name DefensoriasVarasRead
     * @request GET:/defensorias-varas/{id}/
     * @secure
     */
    defensoriasVarasRead: (id: number, params: RequestParams = {}) =>
      this.request<DefensoriaVara, any>({
        path: `/defensorias-varas/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  defensorias = {
    /**
     * No description
     *
     * @tags defensorias
     * @name DefensoriasList
     * @request GET:/defensorias/
     * @secure
     */
    defensoriasList: (
      query?: {
        nome?: string;
        numero?: number;
        comarca?: string;
        eh_itinerante?: string;
        incluir_atuacoes?: string;
        incluir_categorias?: string;
        ativo?: string;
        restringir_remetimentos?: string;
        remetimento_defensoria?: string;
        defensor?: string;
        serializer?: string;
        /** A page number within the paginated result set. */
        page?: number;
        /** Number of results to return per page. */
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: Defensoria[];
        },
        any
      >({
        path: `/defensorias/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags defensorias
     * @name DefensoriasCreate
     * @request POST:/defensorias/
     * @secure
     */
    defensoriasCreate: (data: Defensoria, params: RequestParams = {}) =>
      this.request<Defensoria, any>({
        path: `/defensorias/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags defensorias
     * @name DefensoriasRead
     * @request GET:/defensorias/{id}/
     * @secure
     */
    defensoriasRead: (id: number, params: RequestParams = {}) =>
      this.request<Defensoria, any>({
        path: `/defensorias/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags defensorias
     * @name DefensoriasUpdate
     * @request PUT:/defensorias/{id}/
     * @secure
     */
    defensoriasUpdate: (id: number, data: Defensoria, params: RequestParams = {}) =>
      this.request<Defensoria, any>({
        path: `/defensorias/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags defensorias
     * @name DefensoriasPartialUpdate
     * @request PATCH:/defensorias/{id}/
     * @secure
     */
    defensoriasPartialUpdate: (id: number, data: DefensoriaPartialUpdate, params: RequestParams = {}) =>
      this.request<DefensoriaPartialUpdate, any>({
        path: `/defensorias/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags defensorias
     * @name DefensoriasDelete
     * @request DELETE:/defensorias/{id}/
     * @secure
     */
    defensoriasDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/defensorias/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  deficiencias = {
    /**
     * No description
     *
     * @tags deficiencias
     * @name DeficienciasList
     * @request GET:/deficiencias/
     * @secure
     */
    deficienciasList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: Deficiencia[];
        },
        any
      >({
        path: `/deficiencias/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags deficiencias
     * @name DeficienciasRead
     * @request GET:/deficiencias/{id}/
     * @secure
     */
    deficienciasRead: (id: number, params: RequestParams = {}) =>
      this.request<Deficiencia, any>({
        path: `/deficiencias/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  dependentes = {
    /**
     * No description
     *
     * @tags dependentes
     * @name DependentesList
     * @request GET:/dependentes/
     * @secure
     */
    dependentesList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: Dependente[];
        },
        any
      >({
        path: `/dependentes/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags dependentes
     * @name DependentesCreate
     * @request POST:/dependentes/
     * @secure
     */
    dependentesCreate: (data: Dependente, params: RequestParams = {}) =>
      this.request<Dependente, any>({
        path: `/dependentes/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags dependentes
     * @name DependentesRead
     * @request GET:/dependentes/{id}/
     * @secure
     */
    dependentesRead: (id: number, params: RequestParams = {}) =>
      this.request<Dependente, any>({
        path: `/dependentes/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags dependentes
     * @name DependentesUpdate
     * @request PUT:/dependentes/{id}/
     * @secure
     */
    dependentesUpdate: (id: number, data: Dependente, params: RequestParams = {}) =>
      this.request<Dependente, any>({
        path: `/dependentes/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags dependentes
     * @name DependentesPartialUpdate
     * @request PATCH:/dependentes/{id}/
     * @secure
     */
    dependentesPartialUpdate: (id: number, data: Dependente, params: RequestParams = {}) =>
      this.request<Dependente, any>({
        path: `/dependentes/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags dependentes
     * @name DependentesDelete
     * @request DELETE:/dependentes/{id}/
     * @secure
     */
    dependentesDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/dependentes/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  editaisConcorrenciaPlantao = {
    /**
     * No description
     *
     * @tags editais-concorrencia-plantao
     * @name EditaisConcorrenciaPlantaoList
     * @request GET:/editais-concorrencia-plantao/
     * @secure
     */
    editaisConcorrenciaPlantaoList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: EditalConcorrenciaPlantao[];
        },
        any
      >({
        path: `/editais-concorrencia-plantao/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags editais-concorrencia-plantao
     * @name EditaisConcorrenciaPlantaoCreate
     * @request POST:/editais-concorrencia-plantao/
     * @secure
     */
    editaisConcorrenciaPlantaoCreate: (data: EditalConcorrenciaPlantao, params: RequestParams = {}) =>
      this.request<EditalConcorrenciaPlantao, any>({
        path: `/editais-concorrencia-plantao/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags editais-concorrencia-plantao
     * @name EditaisConcorrenciaPlantaoRead
     * @request GET:/editais-concorrencia-plantao/{id}/
     * @secure
     */
    editaisConcorrenciaPlantaoRead: (id: number, params: RequestParams = {}) =>
      this.request<EditalConcorrenciaPlantao, any>({
        path: `/editais-concorrencia-plantao/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags editais-concorrencia-plantao
     * @name EditaisConcorrenciaPlantaoUpdate
     * @request PUT:/editais-concorrencia-plantao/{id}/
     * @secure
     */
    editaisConcorrenciaPlantaoUpdate: (id: number, data: EditalConcorrenciaPlantao, params: RequestParams = {}) =>
      this.request<EditalConcorrenciaPlantao, any>({
        path: `/editais-concorrencia-plantao/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags editais-concorrencia-plantao
     * @name EditaisConcorrenciaPlantaoPartialUpdate
     * @request PATCH:/editais-concorrencia-plantao/{id}/
     * @secure
     */
    editaisConcorrenciaPlantaoPartialUpdate: (
      id: number,
      data: EditalConcorrenciaPlantao,
      params: RequestParams = {},
    ) =>
      this.request<EditalConcorrenciaPlantao, any>({
        path: `/editais-concorrencia-plantao/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags editais-concorrencia-plantao
     * @name EditaisConcorrenciaPlantaoDelete
     * @request DELETE:/editais-concorrencia-plantao/{id}/
     * @secure
     */
    editaisConcorrenciaPlantaoDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/editais-concorrencia-plantao/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  encaminhamentos = {
    /**
     * No description
     *
     * @tags encaminhamentos
     * @name EncaminhamentosList
     * @request GET:/encaminhamentos/
     * @secure
     */
    encaminhamentosList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: Encaminhamento[];
        },
        any
      >({
        path: `/encaminhamentos/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags encaminhamentos
     * @name EncaminhamentosCreate
     * @request POST:/encaminhamentos/
     * @secure
     */
    encaminhamentosCreate: (data: Encaminhamento, params: RequestParams = {}) =>
      this.request<Encaminhamento, any>({
        path: `/encaminhamentos/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags encaminhamentos
     * @name EncaminhamentosRead
     * @request GET:/encaminhamentos/{id}/
     * @secure
     */
    encaminhamentosRead: (id: number, params: RequestParams = {}) =>
      this.request<Encaminhamento, any>({
        path: `/encaminhamentos/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags encaminhamentos
     * @name EncaminhamentosUpdate
     * @request PUT:/encaminhamentos/{id}/
     * @secure
     */
    encaminhamentosUpdate: (id: number, data: Encaminhamento, params: RequestParams = {}) =>
      this.request<Encaminhamento, any>({
        path: `/encaminhamentos/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags encaminhamentos
     * @name EncaminhamentosPartialUpdate
     * @request PATCH:/encaminhamentos/{id}/
     * @secure
     */
    encaminhamentosPartialUpdate: (id: number, data: Encaminhamento, params: RequestParams = {}) =>
      this.request<Encaminhamento, any>({
        path: `/encaminhamentos/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags encaminhamentos
     * @name EncaminhamentosDelete
     * @request DELETE:/encaminhamentos/{id}/
     * @secure
     */
    encaminhamentosDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/encaminhamentos/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  enderecoHistoricos = {
    /**
     * No description
     *
     * @tags endereco-historicos
     * @name EnderecoHistoricosList
     * @request GET:/endereco-historicos/
     * @secure
     */
    enderecoHistoricosList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: EnderecoHistorico[];
        },
        any
      >({
        path: `/endereco-historicos/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags endereco-historicos
     * @name EnderecoHistoricosRead
     * @request GET:/endereco-historicos/{id}/
     * @secure
     */
    enderecoHistoricosRead: (id: number, params: RequestParams = {}) =>
      this.request<EnderecoHistorico, any>({
        path: `/endereco-historicos/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  enderecos = {
    /**
     * No description
     *
     * @tags enderecos
     * @name EnderecosList
     * @request GET:/enderecos/
     * @secure
     */
    enderecosList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: ContribEndereco[];
        },
        any
      >({
        path: `/enderecos/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags enderecos
     * @name EnderecosRead
     * @request GET:/enderecos/{id}/
     * @secure
     */
    enderecosRead: (id: number, params: RequestParams = {}) =>
      this.request<ContribEndereco, any>({
        path: `/enderecos/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  especializados = {
    /**
     * No description
     *
     * @tags especializados
     * @name EspecializadosList
     * @request GET:/especializados/
     * @secure
     */
    especializadosList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: Especializado[];
        },
        any
      >({
        path: `/especializados/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags especializados
     * @name EspecializadosCreate
     * @request POST:/especializados/
     * @secure
     */
    especializadosCreate: (data: Especializado, params: RequestParams = {}) =>
      this.request<Especializado, any>({
        path: `/especializados/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags especializados
     * @name EspecializadosRead
     * @request GET:/especializados/{id}/
     * @secure
     */
    especializadosRead: (id: number, params: RequestParams = {}) =>
      this.request<Especializado, any>({
        path: `/especializados/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags especializados
     * @name EspecializadosUpdate
     * @request PUT:/especializados/{id}/
     * @secure
     */
    especializadosUpdate: (id: number, data: Especializado, params: RequestParams = {}) =>
      this.request<Especializado, any>({
        path: `/especializados/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags especializados
     * @name EspecializadosPartialUpdate
     * @request PATCH:/especializados/{id}/
     * @secure
     */
    especializadosPartialUpdate: (id: number, data: Especializado, params: RequestParams = {}) =>
      this.request<Especializado, any>({
        path: `/especializados/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags especializados
     * @name EspecializadosDelete
     * @request DELETE:/especializados/{id}/
     * @secure
     */
    especializadosDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/especializados/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  estabelecimentosPenais = {
    /**
     * No description
     *
     * @tags estabelecimentos-penais
     * @name EstabelecimentosPenaisList
     * @request GET:/estabelecimentos-penais/
     * @secure
     */
    estabelecimentosPenaisList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: EstabelecimentoPenal[];
        },
        any
      >({
        path: `/estabelecimentos-penais/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags estabelecimentos-penais
     * @name EstabelecimentosPenaisCreate
     * @request POST:/estabelecimentos-penais/
     * @secure
     */
    estabelecimentosPenaisCreate: (data: EstabelecimentoPenal, params: RequestParams = {}) =>
      this.request<EstabelecimentoPenal, any>({
        path: `/estabelecimentos-penais/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags estabelecimentos-penais
     * @name EstabelecimentosPenaisRead
     * @request GET:/estabelecimentos-penais/{id}/
     * @secure
     */
    estabelecimentosPenaisRead: (id: number, params: RequestParams = {}) =>
      this.request<EstabelecimentoPenal, any>({
        path: `/estabelecimentos-penais/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags estabelecimentos-penais
     * @name EstabelecimentosPenaisUpdate
     * @request PUT:/estabelecimentos-penais/{id}/
     * @secure
     */
    estabelecimentosPenaisUpdate: (id: number, data: EstabelecimentoPenal, params: RequestParams = {}) =>
      this.request<EstabelecimentoPenal, any>({
        path: `/estabelecimentos-penais/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags estabelecimentos-penais
     * @name EstabelecimentosPenaisPartialUpdate
     * @request PATCH:/estabelecimentos-penais/{id}/
     * @secure
     */
    estabelecimentosPenaisPartialUpdate: (id: number, data: EstabelecimentoPenal, params: RequestParams = {}) =>
      this.request<EstabelecimentoPenal, any>({
        path: `/estabelecimentos-penais/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags estabelecimentos-penais
     * @name EstabelecimentosPenaisDelete
     * @request DELETE:/estabelecimentos-penais/{id}/
     * @secure
     */
    estabelecimentosPenaisDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/estabelecimentos-penais/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  estados = {
    /**
     * No description
     *
     * @tags estados
     * @name EstadosList
     * @request GET:/estados/
     * @secure
     */
    estadosList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: Estado[];
        },
        any
      >({
        path: `/estados/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags estados
     * @name EstadosRead
     * @request GET:/estados/{id}/
     * @secure
     */
    estadosRead: (id: number, params: RequestParams = {}) =>
      this.request<Estado, any>({
        path: `/estados/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  estruturasMoradia = {
    /**
     * No description
     *
     * @tags estruturas-moradia
     * @name EstruturasMoradiaList
     * @request GET:/estruturas-moradia/
     * @secure
     */
    estruturasMoradiaList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: EstruturaMoradia[];
        },
        any
      >({
        path: `/estruturas-moradia/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags estruturas-moradia
     * @name EstruturasMoradiaCreate
     * @request POST:/estruturas-moradia/
     * @secure
     */
    estruturasMoradiaCreate: (data: EstruturaMoradia, params: RequestParams = {}) =>
      this.request<EstruturaMoradia, any>({
        path: `/estruturas-moradia/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags estruturas-moradia
     * @name EstruturasMoradiaRead
     * @request GET:/estruturas-moradia/{id}/
     * @secure
     */
    estruturasMoradiaRead: (id: number, params: RequestParams = {}) =>
      this.request<EstruturaMoradia, any>({
        path: `/estruturas-moradia/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags estruturas-moradia
     * @name EstruturasMoradiaUpdate
     * @request PUT:/estruturas-moradia/{id}/
     * @secure
     */
    estruturasMoradiaUpdate: (id: number, data: EstruturaMoradia, params: RequestParams = {}) =>
      this.request<EstruturaMoradia, any>({
        path: `/estruturas-moradia/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags estruturas-moradia
     * @name EstruturasMoradiaPartialUpdate
     * @request PATCH:/estruturas-moradia/{id}/
     * @secure
     */
    estruturasMoradiaPartialUpdate: (id: number, data: EstruturaMoradia, params: RequestParams = {}) =>
      this.request<EstruturaMoradia, any>({
        path: `/estruturas-moradia/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags estruturas-moradia
     * @name EstruturasMoradiaDelete
     * @request DELETE:/estruturas-moradia/{id}/
     * @secure
     */
    estruturasMoradiaDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/estruturas-moradia/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  etiquetas = {
    /**
     * No description
     *
     * @tags etiquetas
     * @name EtiquetasList
     * @request GET:/etiquetas/
     * @secure
     */
    etiquetasList: (
      query?: {
        defensoria?: string;
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: Etiqueta[];
        },
        any
      >({
        path: `/etiquetas/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags etiquetas
     * @name EtiquetasRead
     * @request GET:/etiquetas/{id}/
     * @secure
     */
    etiquetasRead: (id: number, params: RequestParams = {}) =>
      this.request<Etiqueta, any>({
        path: `/etiquetas/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  eventos = {
    /**
     * No description
     *
     * @tags eventos
     * @name EventosList
     * @request GET:/eventos/
     * @secure
     */
    eventosList: (
      query?: {
        tipo?: string;
        eh_pai?: string;
        defensor?: string;
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: EventoEvento[];
        },
        any
      >({
        path: `/eventos/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags eventos
     * @name EventosCreate
     * @request POST:/eventos/
     * @secure
     */
    eventosCreate: (data: EventoEvento, params: RequestParams = {}) =>
      this.request<EventoEvento, any>({
        path: `/eventos/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags eventos
     * @name EventosRead
     * @request GET:/eventos/{id}/
     * @secure
     */
    eventosRead: (id: number, params: RequestParams = {}) =>
      this.request<EventoEvento, any>({
        path: `/eventos/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags eventos
     * @name EventosDelete
     * @request DELETE:/eventos/{id}/
     * @secure
     */
    eventosDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/eventos/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  faltas = {
    /**
     * No description
     *
     * @tags faltas
     * @name FaltasList
     * @request GET:/faltas/
     * @secure
     */
    faltasList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: Falta[];
        },
        any
      >({
        path: `/faltas/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags faltas
     * @name FaltasCreate
     * @request POST:/faltas/
     * @secure
     */
    faltasCreate: (data: Falta, params: RequestParams = {}) =>
      this.request<Falta, any>({
        path: `/faltas/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags faltas
     * @name FaltasRead
     * @request GET:/faltas/{id}/
     * @secure
     */
    faltasRead: (id: number, params: RequestParams = {}) =>
      this.request<Falta, any>({
        path: `/faltas/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags faltas
     * @name FaltasUpdate
     * @request PUT:/faltas/{id}/
     * @secure
     */
    faltasUpdate: (id: number, data: Falta, params: RequestParams = {}) =>
      this.request<Falta, any>({
        path: `/faltas/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags faltas
     * @name FaltasPartialUpdate
     * @request PATCH:/faltas/{id}/
     * @secure
     */
    faltasPartialUpdate: (id: number, data: Falta, params: RequestParams = {}) =>
      this.request<Falta, any>({
        path: `/faltas/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags faltas
     * @name FaltasDelete
     * @request DELETE:/faltas/{id}/
     * @secure
     */
    faltasDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/faltas/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  filiacoes = {
    /**
     * No description
     *
     * @tags filiacoes
     * @name FiliacoesList
     * @request GET:/filiacoes/
     * @secure
     */
    filiacoesList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: Filiacao[];
        },
        any
      >({
        path: `/filiacoes/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags filiacoes
     * @name FiliacoesCreate
     * @request POST:/filiacoes/
     * @secure
     */
    filiacoesCreate: (data: Filiacao, params: RequestParams = {}) =>
      this.request<Filiacao, any>({
        path: `/filiacoes/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags filiacoes
     * @name FiliacoesRead
     * @request GET:/filiacoes/{id}/
     * @secure
     */
    filiacoesRead: (id: number, params: RequestParams = {}) =>
      this.request<Filiacao, any>({
        path: `/filiacoes/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags filiacoes
     * @name FiliacoesUpdate
     * @request PUT:/filiacoes/{id}/
     * @secure
     */
    filiacoesUpdate: (id: number, data: Filiacao, params: RequestParams = {}) =>
      this.request<Filiacao, any>({
        path: `/filiacoes/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags filiacoes
     * @name FiliacoesPartialUpdate
     * @request PATCH:/filiacoes/{id}/
     * @secure
     */
    filiacoesPartialUpdate: (id: number, data: Filiacao, params: RequestParams = {}) =>
      this.request<Filiacao, any>({
        path: `/filiacoes/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags filiacoes
     * @name FiliacoesDelete
     * @request DELETE:/filiacoes/{id}/
     * @secure
     */
    filiacoesDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/filiacoes/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  formasAtendimento = {
    /**
     * No description
     *
     * @tags formas-atendimento
     * @name FormasAtendimentoList
     * @request GET:/formas-atendimento/
     * @secure
     */
    formasAtendimentoList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: FormaAtendimento[];
        },
        any
      >({
        path: `/formas-atendimento/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags formas-atendimento
     * @name FormasAtendimentoCreate
     * @request POST:/formas-atendimento/
     * @secure
     */
    formasAtendimentoCreate: (data: FormaAtendimento, params: RequestParams = {}) =>
      this.request<FormaAtendimento, any>({
        path: `/formas-atendimento/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags formas-atendimento
     * @name FormasAtendimentoRead
     * @request GET:/formas-atendimento/{id}/
     * @secure
     */
    formasAtendimentoRead: (id: number, params: RequestParams = {}) =>
      this.request<FormaAtendimento, any>({
        path: `/formas-atendimento/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags formas-atendimento
     * @name FormasAtendimentoUpdate
     * @request PUT:/formas-atendimento/{id}/
     * @secure
     */
    formasAtendimentoUpdate: (id: number, data: FormaAtendimento, params: RequestParams = {}) =>
      this.request<FormaAtendimento, any>({
        path: `/formas-atendimento/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags formas-atendimento
     * @name FormasAtendimentoPartialUpdate
     * @request PATCH:/formas-atendimento/{id}/
     * @secure
     */
    formasAtendimentoPartialUpdate: (id: number, data: FormaAtendimento, params: RequestParams = {}) =>
      this.request<FormaAtendimento, any>({
        path: `/formas-atendimento/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags formas-atendimento
     * @name FormasAtendimentoDelete
     * @request DELETE:/formas-atendimento/{id}/
     * @secure
     */
    formasAtendimentoDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/formas-atendimento/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  formulariosPerguntas = {
    /**
     * No description
     *
     * @tags formularios-perguntas
     * @name FormulariosPerguntasList
     * @request GET:/formularios-perguntas/
     * @secure
     */
    formulariosPerguntasList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: FormularioPergunta[];
        },
        any
      >({
        path: `/formularios-perguntas/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags formularios-perguntas
     * @name FormulariosPerguntasCreate
     * @request POST:/formularios-perguntas/
     * @secure
     */
    formulariosPerguntasCreate: (data: FormularioPergunta, params: RequestParams = {}) =>
      this.request<FormularioPergunta, any>({
        path: `/formularios-perguntas/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags formularios-perguntas
     * @name FormulariosPerguntasRead
     * @request GET:/formularios-perguntas/{id}/
     * @secure
     */
    formulariosPerguntasRead: (id: number, params: RequestParams = {}) =>
      this.request<FormularioPergunta, any>({
        path: `/formularios-perguntas/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags formularios-perguntas
     * @name FormulariosPerguntasUpdate
     * @request PUT:/formularios-perguntas/{id}/
     * @secure
     */
    formulariosPerguntasUpdate: (id: number, data: FormularioPergunta, params: RequestParams = {}) =>
      this.request<FormularioPergunta, any>({
        path: `/formularios-perguntas/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags formularios-perguntas
     * @name FormulariosPerguntasPartialUpdate
     * @request PATCH:/formularios-perguntas/{id}/
     * @secure
     */
    formulariosPerguntasPartialUpdate: (id: number, data: FormularioPergunta, params: RequestParams = {}) =>
      this.request<FormularioPergunta, any>({
        path: `/formularios-perguntas/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags formularios-perguntas
     * @name FormulariosPerguntasDelete
     * @request DELETE:/formularios-perguntas/{id}/
     * @secure
     */
    formulariosPerguntasDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/formularios-perguntas/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  formulariosRespostas = {
    /**
     * No description
     *
     * @tags formularios-respostas
     * @name FormulariosRespostasList
     * @request GET:/formularios-respostas/
     * @secure
     */
    formulariosRespostasList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: Resposta[];
        },
        any
      >({
        path: `/formularios-respostas/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags formularios-respostas
     * @name FormulariosRespostasCreate
     * @request POST:/formularios-respostas/
     * @secure
     */
    formulariosRespostasCreate: (data: Resposta, params: RequestParams = {}) =>
      this.request<Resposta, any>({
        path: `/formularios-respostas/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags formularios-respostas
     * @name FormulariosRespostasRead
     * @request GET:/formularios-respostas/{id}/
     * @secure
     */
    formulariosRespostasRead: (id: number, params: RequestParams = {}) =>
      this.request<Resposta, any>({
        path: `/formularios-respostas/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags formularios-respostas
     * @name FormulariosRespostasUpdate
     * @request PUT:/formularios-respostas/{id}/
     * @secure
     */
    formulariosRespostasUpdate: (id: number, data: Resposta, params: RequestParams = {}) =>
      this.request<Resposta, any>({
        path: `/formularios-respostas/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags formularios-respostas
     * @name FormulariosRespostasPartialUpdate
     * @request PATCH:/formularios-respostas/{id}/
     * @secure
     */
    formulariosRespostasPartialUpdate: (id: number, data: Resposta, params: RequestParams = {}) =>
      this.request<Resposta, any>({
        path: `/formularios-respostas/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags formularios-respostas
     * @name FormulariosRespostasDelete
     * @request DELETE:/formularios-respostas/{id}/
     * @secure
     */
    formulariosRespostasDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/formularios-respostas/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  formularios = {
    /**
     * No description
     *
     * @tags formularios
     * @name FormulariosList
     * @request GET:/formularios/
     * @secure
     */
    formulariosList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: Formulario[];
        },
        any
      >({
        path: `/formularios/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags formularios
     * @name FormulariosCreate
     * @request POST:/formularios/
     * @secure
     */
    formulariosCreate: (data: Formulario, params: RequestParams = {}) =>
      this.request<Formulario, any>({
        path: `/formularios/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags formularios
     * @name FormulariosRead
     * @request GET:/formularios/{id}/
     * @secure
     */
    formulariosRead: (id: number, params: RequestParams = {}) =>
      this.request<Formulario, any>({
        path: `/formularios/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags formularios
     * @name FormulariosUpdate
     * @request PUT:/formularios/{id}/
     * @secure
     */
    formulariosUpdate: (id: number, data: Formulario, params: RequestParams = {}) =>
      this.request<Formulario, any>({
        path: `/formularios/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags formularios
     * @name FormulariosPartialUpdate
     * @request PATCH:/formularios/{id}/
     * @secure
     */
    formulariosPartialUpdate: (id: number, data: Formulario, params: RequestParams = {}) =>
      this.request<Formulario, any>({
        path: `/formularios/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags formularios
     * @name FormulariosDelete
     * @request DELETE:/formularios/{id}/
     * @secure
     */
    formulariosDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/formularios/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  gedDocumentos = {
    /**
     * No description
     *
     * @tags ged-documentos
     * @name GedDocumentosList
     * @request GET:/ged-documentos/
     * @secure
     */
    gedDocumentosList: (
      query?: {
        assunto?: string;
        eh_modelo?: string;
        eh_modelo_padrao?: string;
        modelo_id?: number;
        modelo_pronto_para_utilizacao?: string;
        modelo_publico?: string;
        esta_assinado?: string;
        esta_pronto_para_assinar?: string;
        tipo_documento_id?: number;
        esta_ativo?: string;
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<GedDocumentoListSerializer, any>({
        path: `/ged-documentos/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ged-documentos
     * @name GedDocumentosRead
     * @request GET:/ged-documentos/{id}/
     * @secure
     */
    gedDocumentosRead: (id: number, params: RequestParams = {}) =>
      this.request<GedDocumentoSerializer, any>({
        path: `/ged-documentos/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  gedTiposDocumentos = {
    /**
     * No description
     *
     * @tags ged-tipos-documentos
     * @name GedTiposDocumentosList
     * @request GET:/ged-tipos-documentos/
     * @secure
     */
    gedTiposDocumentosList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: GedTipoDocumentoSerializer[];
        },
        any
      >({
        path: `/ged-tipos-documentos/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ged-tipos-documentos
     * @name GedTiposDocumentosRead
     * @request GET:/ged-tipos-documentos/{id}/
     * @secure
     */
    gedTiposDocumentosRead: (id: number, params: RequestParams = {}) =>
      this.request<GedTipoDocumentoSerializer, any>({
        path: `/ged-tipos-documentos/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  getAuthToken = {
    /**
     * No description
     *
     * @tags get-auth-token
     * @name GetAuthTokenCreate
     * @request POST:/get-auth-token/
     * @secure
     */
    getAuthTokenCreate: (data: CustomAuthToken, params: RequestParams = {}) =>
      this.request<CustomAuthToken, any>({
        path: `/get-auth-token/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  graus = {
    /**
     * No description
     *
     * @tags graus
     * @name GrausList
     * @request GET:/graus/
     * @secure
     */
    grausList: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/graus/`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags graus
     * @name GrausRead
     * @request GET:/graus/{id}/
     * @secure
     */
    grausRead: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/graus/${id}/`,
        method: "GET",
        secure: true,
        ...params,
      }),
  };
  gruposAgendamento = {
    /**
     * No description
     *
     * @tags grupos-agendamento
     * @name GruposAgendamentoList
     * @request GET:/grupos-agendamento/
     * @secure
     */
    gruposAgendamentoList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: GrupoDeDefensoriasParaAgendamento[];
        },
        any
      >({
        path: `/grupos-agendamento/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags grupos-agendamento
     * @name GruposAgendamentoCreate
     * @request POST:/grupos-agendamento/
     * @secure
     */
    gruposAgendamentoCreate: (data: GrupoDeDefensoriasParaAgendamento, params: RequestParams = {}) =>
      this.request<GrupoDeDefensoriasParaAgendamento, any>({
        path: `/grupos-agendamento/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags grupos-agendamento
     * @name GruposAgendamentoRead
     * @request GET:/grupos-agendamento/{id}/
     * @secure
     */
    gruposAgendamentoRead: (id: number, params: RequestParams = {}) =>
      this.request<GrupoDeDefensoriasParaAgendamento, any>({
        path: `/grupos-agendamento/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags grupos-agendamento
     * @name GruposAgendamentoUpdate
     * @request PUT:/grupos-agendamento/{id}/
     * @secure
     */
    gruposAgendamentoUpdate: (id: number, data: GrupoDeDefensoriasParaAgendamento, params: RequestParams = {}) =>
      this.request<GrupoDeDefensoriasParaAgendamento, any>({
        path: `/grupos-agendamento/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags grupos-agendamento
     * @name GruposAgendamentoPartialUpdate
     * @request PATCH:/grupos-agendamento/{id}/
     * @secure
     */
    gruposAgendamentoPartialUpdate: (id: number, data: GrupoDeDefensoriasParaAgendamento, params: RequestParams = {}) =>
      this.request<GrupoDeDefensoriasParaAgendamento, any>({
        path: `/grupos-agendamento/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags grupos-agendamento
     * @name GruposAgendamentoDelete
     * @request DELETE:/grupos-agendamento/{id}/
     * @secure
     */
    gruposAgendamentoDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/grupos-agendamento/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  guiches = {
    /**
     * No description
     *
     * @tags guiches
     * @name GuichesList
     * @request GET:/guiches/
     * @secure
     */
    guichesList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: Guiche[];
        },
        any
      >({
        path: `/guiches/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags guiches
     * @name GuichesCreate
     * @request POST:/guiches/
     * @secure
     */
    guichesCreate: (data: Guiche, params: RequestParams = {}) =>
      this.request<Guiche, any>({
        path: `/guiches/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags guiches
     * @name GuichesRead
     * @request GET:/guiches/{id}/
     * @secure
     */
    guichesRead: (id: number, params: RequestParams = {}) =>
      this.request<Guiche, any>({
        path: `/guiches/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags guiches
     * @name GuichesUpdate
     * @request PUT:/guiches/{id}/
     * @secure
     */
    guichesUpdate: (id: number, data: Guiche, params: RequestParams = {}) =>
      this.request<Guiche, any>({
        path: `/guiches/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags guiches
     * @name GuichesPartialUpdate
     * @request PATCH:/guiches/{id}/
     * @secure
     */
    guichesPartialUpdate: (id: number, data: Guiche, params: RequestParams = {}) =>
      this.request<Guiche, any>({
        path: `/guiches/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags guiches
     * @name GuichesDelete
     * @request DELETE:/guiches/{id}/
     * @secure
     */
    guichesDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/guiches/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  historicosTransferenciasPartes = {
    /**
     * No description
     *
     * @tags historicos-transferencias-partes
     * @name HistoricosTransferenciasPartesList
     * @request GET:/historicos-transferencias-partes/
     * @secure
     */
    historicosTransferenciasPartesList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: ParteHistoricoTransferencia[];
        },
        any
      >({
        path: `/historicos-transferencias-partes/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags historicos-transferencias-partes
     * @name HistoricosTransferenciasPartesCreate
     * @request POST:/historicos-transferencias-partes/
     * @secure
     */
    historicosTransferenciasPartesCreate: (data: ParteHistoricoTransferencia, params: RequestParams = {}) =>
      this.request<ParteHistoricoTransferencia, any>({
        path: `/historicos-transferencias-partes/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags historicos-transferencias-partes
     * @name HistoricosTransferenciasPartesRead
     * @request GET:/historicos-transferencias-partes/{id}/
     * @secure
     */
    historicosTransferenciasPartesRead: (id: number, params: RequestParams = {}) =>
      this.request<ParteHistoricoTransferencia, any>({
        path: `/historicos-transferencias-partes/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags historicos-transferencias-partes
     * @name HistoricosTransferenciasPartesUpdate
     * @request PUT:/historicos-transferencias-partes/{id}/
     * @secure
     */
    historicosTransferenciasPartesUpdate: (id: number, data: ParteHistoricoTransferencia, params: RequestParams = {}) =>
      this.request<ParteHistoricoTransferencia, any>({
        path: `/historicos-transferencias-partes/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags historicos-transferencias-partes
     * @name HistoricosTransferenciasPartesPartialUpdate
     * @request PATCH:/historicos-transferencias-partes/{id}/
     * @secure
     */
    historicosTransferenciasPartesPartialUpdate: (
      id: number,
      data: ParteHistoricoTransferencia,
      params: RequestParams = {},
    ) =>
      this.request<ParteHistoricoTransferencia, any>({
        path: `/historicos-transferencias-partes/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags historicos-transferencias-partes
     * @name HistoricosTransferenciasPartesDelete
     * @request DELETE:/historicos-transferencias-partes/{id}/
     * @secure
     */
    historicosTransferenciasPartesDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/historicos-transferencias-partes/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  historicos = {
    /**
     * No description
     *
     * @tags historicos
     * @name HistoricosList
     * @request GET:/historicos/
     * @secure
     */
    historicosList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: Historico[];
        },
        any
      >({
        path: `/historicos/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags historicos
     * @name HistoricosCreate
     * @request POST:/historicos/
     * @secure
     */
    historicosCreate: (data: Historico, params: RequestParams = {}) =>
      this.request<Historico, any>({
        path: `/historicos/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags historicos
     * @name HistoricosRead
     * @request GET:/historicos/{id}/
     * @secure
     */
    historicosRead: (id: number, params: RequestParams = {}) =>
      this.request<Historico, any>({
        path: `/historicos/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags historicos
     * @name HistoricosUpdate
     * @request PUT:/historicos/{id}/
     * @secure
     */
    historicosUpdate: (id: number, data: Historico, params: RequestParams = {}) =>
      this.request<Historico, any>({
        path: `/historicos/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags historicos
     * @name HistoricosPartialUpdate
     * @request PATCH:/historicos/{id}/
     * @secure
     */
    historicosPartialUpdate: (id: number, data: Historico, params: RequestParams = {}) =>
      this.request<Historico, any>({
        path: `/historicos/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags historicos
     * @name HistoricosDelete
     * @request DELETE:/historicos/{id}/
     * @secure
     */
    historicosDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/historicos/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  honorariosAlertasDeMovimentacoes = {
    /**
     * No description
     *
     * @tags honorarios-alertas-de-movimentacoes
     * @name HonorariosAlertasDeMovimentacoesList
     * @request GET:/honorarios-alertas-de-movimentacoes/
     * @secure
     */
    honorariosAlertasDeMovimentacoesList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: AlertaProcessoMovimento[];
        },
        any
      >({
        path: `/honorarios-alertas-de-movimentacoes/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags honorarios-alertas-de-movimentacoes
     * @name HonorariosAlertasDeMovimentacoesCreate
     * @request POST:/honorarios-alertas-de-movimentacoes/
     * @secure
     */
    honorariosAlertasDeMovimentacoesCreate: (data: AlertaProcessoMovimento, params: RequestParams = {}) =>
      this.request<AlertaProcessoMovimento, any>({
        path: `/honorarios-alertas-de-movimentacoes/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags honorarios-alertas-de-movimentacoes
     * @name HonorariosAlertasDeMovimentacoesRead
     * @request GET:/honorarios-alertas-de-movimentacoes/{id}/
     * @secure
     */
    honorariosAlertasDeMovimentacoesRead: (id: number, params: RequestParams = {}) =>
      this.request<AlertaProcessoMovimento, any>({
        path: `/honorarios-alertas-de-movimentacoes/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags honorarios-alertas-de-movimentacoes
     * @name HonorariosAlertasDeMovimentacoesUpdate
     * @request PUT:/honorarios-alertas-de-movimentacoes/{id}/
     * @secure
     */
    honorariosAlertasDeMovimentacoesUpdate: (id: number, data: AlertaProcessoMovimento, params: RequestParams = {}) =>
      this.request<AlertaProcessoMovimento, any>({
        path: `/honorarios-alertas-de-movimentacoes/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags honorarios-alertas-de-movimentacoes
     * @name HonorariosAlertasDeMovimentacoesPartialUpdate
     * @request PATCH:/honorarios-alertas-de-movimentacoes/{id}/
     * @secure
     */
    honorariosAlertasDeMovimentacoesPartialUpdate: (
      id: number,
      data: AlertaProcessoMovimento,
      params: RequestParams = {},
    ) =>
      this.request<AlertaProcessoMovimento, any>({
        path: `/honorarios-alertas-de-movimentacoes/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags honorarios-alertas-de-movimentacoes
     * @name HonorariosAlertasDeMovimentacoesDelete
     * @request DELETE:/honorarios-alertas-de-movimentacoes/{id}/
     * @secure
     */
    honorariosAlertasDeMovimentacoesDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/honorarios-alertas-de-movimentacoes/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  honorariosAnalises = {
    /**
     * No description
     *
     * @tags honorarios-analises
     * @name HonorariosAnalisesList
     * @request GET:/honorarios-analises/
     * @secure
     */
    honorariosAnalisesList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: Analise[];
        },
        any
      >({
        path: `/honorarios-analises/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags honorarios-analises
     * @name HonorariosAnalisesCreate
     * @request POST:/honorarios-analises/
     * @secure
     */
    honorariosAnalisesCreate: (data: Analise, params: RequestParams = {}) =>
      this.request<Analise, any>({
        path: `/honorarios-analises/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags honorarios-analises
     * @name HonorariosAnalisesRead
     * @request GET:/honorarios-analises/{id}/
     * @secure
     */
    honorariosAnalisesRead: (id: number, params: RequestParams = {}) =>
      this.request<Analise, any>({
        path: `/honorarios-analises/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags honorarios-analises
     * @name HonorariosAnalisesUpdate
     * @request PUT:/honorarios-analises/{id}/
     * @secure
     */
    honorariosAnalisesUpdate: (id: number, data: Analise, params: RequestParams = {}) =>
      this.request<Analise, any>({
        path: `/honorarios-analises/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags honorarios-analises
     * @name HonorariosAnalisesPartialUpdate
     * @request PATCH:/honorarios-analises/{id}/
     * @secure
     */
    honorariosAnalisesPartialUpdate: (id: number, data: Analise, params: RequestParams = {}) =>
      this.request<Analise, any>({
        path: `/honorarios-analises/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags honorarios-analises
     * @name HonorariosAnalisesDelete
     * @request DELETE:/honorarios-analises/{id}/
     * @secure
     */
    honorariosAnalisesDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/honorarios-analises/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  honorariosDocumentos = {
    /**
     * No description
     *
     * @tags honorarios-documentos
     * @name HonorariosDocumentosList
     * @request GET:/honorarios-documentos/
     * @secure
     */
    honorariosDocumentosList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: HonorariosDocumento[];
        },
        any
      >({
        path: `/honorarios-documentos/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags honorarios-documentos
     * @name HonorariosDocumentosCreate
     * @request POST:/honorarios-documentos/
     * @secure
     */
    honorariosDocumentosCreate: (data: HonorariosDocumento, params: RequestParams = {}) =>
      this.request<HonorariosDocumento, any>({
        path: `/honorarios-documentos/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags honorarios-documentos
     * @name HonorariosDocumentosRead
     * @request GET:/honorarios-documentos/{id}/
     * @secure
     */
    honorariosDocumentosRead: (id: number, params: RequestParams = {}) =>
      this.request<HonorariosDocumento, any>({
        path: `/honorarios-documentos/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags honorarios-documentos
     * @name HonorariosDocumentosUpdate
     * @request PUT:/honorarios-documentos/{id}/
     * @secure
     */
    honorariosDocumentosUpdate: (id: number, data: HonorariosDocumento, params: RequestParams = {}) =>
      this.request<HonorariosDocumento, any>({
        path: `/honorarios-documentos/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags honorarios-documentos
     * @name HonorariosDocumentosPartialUpdate
     * @request PATCH:/honorarios-documentos/{id}/
     * @secure
     */
    honorariosDocumentosPartialUpdate: (id: number, data: HonorariosDocumento, params: RequestParams = {}) =>
      this.request<HonorariosDocumento, any>({
        path: `/honorarios-documentos/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags honorarios-documentos
     * @name HonorariosDocumentosDelete
     * @request DELETE:/honorarios-documentos/{id}/
     * @secure
     */
    honorariosDocumentosDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/honorarios-documentos/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  honorariosMovimentos = {
    /**
     * No description
     *
     * @tags honorarios-movimentos
     * @name HonorariosMovimentosList
     * @request GET:/honorarios-movimentos/
     * @secure
     */
    honorariosMovimentosList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: Movimento[];
        },
        any
      >({
        path: `/honorarios-movimentos/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags honorarios-movimentos
     * @name HonorariosMovimentosCreate
     * @request POST:/honorarios-movimentos/
     * @secure
     */
    honorariosMovimentosCreate: (data: Movimento, params: RequestParams = {}) =>
      this.request<Movimento, any>({
        path: `/honorarios-movimentos/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags honorarios-movimentos
     * @name HonorariosMovimentosRead
     * @request GET:/honorarios-movimentos/{id}/
     * @secure
     */
    honorariosMovimentosRead: (id: number, params: RequestParams = {}) =>
      this.request<Movimento, any>({
        path: `/honorarios-movimentos/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags honorarios-movimentos
     * @name HonorariosMovimentosUpdate
     * @request PUT:/honorarios-movimentos/{id}/
     * @secure
     */
    honorariosMovimentosUpdate: (id: number, data: Movimento, params: RequestParams = {}) =>
      this.request<Movimento, any>({
        path: `/honorarios-movimentos/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags honorarios-movimentos
     * @name HonorariosMovimentosPartialUpdate
     * @request PATCH:/honorarios-movimentos/{id}/
     * @secure
     */
    honorariosMovimentosPartialUpdate: (id: number, data: Movimento, params: RequestParams = {}) =>
      this.request<Movimento, any>({
        path: `/honorarios-movimentos/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags honorarios-movimentos
     * @name HonorariosMovimentosDelete
     * @request DELETE:/honorarios-movimentos/{id}/
     * @secure
     */
    honorariosMovimentosDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/honorarios-movimentos/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  honorarios = {
    /**
     * No description
     *
     * @tags honorarios
     * @name HonorariosList
     * @request GET:/honorarios/
     * @secure
     */
    honorariosList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: Honorario[];
        },
        any
      >({
        path: `/honorarios/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags honorarios
     * @name HonorariosCreate
     * @request POST:/honorarios/
     * @secure
     */
    honorariosCreate: (data: Honorario, params: RequestParams = {}) =>
      this.request<Honorario, any>({
        path: `/honorarios/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags honorarios
     * @name HonorariosRead
     * @request GET:/honorarios/{id}/
     * @secure
     */
    honorariosRead: (id: number, params: RequestParams = {}) =>
      this.request<Honorario, any>({
        path: `/honorarios/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags honorarios
     * @name HonorariosUpdate
     * @request PUT:/honorarios/{id}/
     * @secure
     */
    honorariosUpdate: (id: number, data: Honorario, params: RequestParams = {}) =>
      this.request<Honorario, any>({
        path: `/honorarios/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags honorarios
     * @name HonorariosPartialUpdate
     * @request PATCH:/honorarios/{id}/
     * @secure
     */
    honorariosPartialUpdate: (id: number, data: Honorario, params: RequestParams = {}) =>
      this.request<Honorario, any>({
        path: `/honorarios/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags honorarios
     * @name HonorariosDelete
     * @request DELETE:/honorarios/{id}/
     * @secure
     */
    honorariosDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/honorarios/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  identidadesGenero = {
    /**
     * No description
     *
     * @tags identidades-genero
     * @name IdentidadesGeneroList
     * @request GET:/identidades-genero/
     * @secure
     */
    identidadesGeneroList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: IdentidadeGenero[];
        },
        any
      >({
        path: `/identidades-genero/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags identidades-genero
     * @name IdentidadesGeneroRead
     * @request GET:/identidades-genero/{id}/
     * @secure
     */
    identidadesGeneroRead: (id: number, params: RequestParams = {}) =>
      this.request<IdentidadeGenero, any>({
        path: `/identidades-genero/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  imoveis = {
    /**
     * No description
     *
     * @tags imoveis
     * @name ImoveisList
     * @request GET:/imoveis/
     * @secure
     */
    imoveisList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: Imovel[];
        },
        any
      >({
        path: `/imoveis/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags imoveis
     * @name ImoveisCreate
     * @request POST:/imoveis/
     * @secure
     */
    imoveisCreate: (data: Imovel, params: RequestParams = {}) =>
      this.request<Imovel, any>({
        path: `/imoveis/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags imoveis
     * @name ImoveisRead
     * @request GET:/imoveis/{id}/
     * @secure
     */
    imoveisRead: (id: number, params: RequestParams = {}) =>
      this.request<Imovel, any>({
        path: `/imoveis/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags imoveis
     * @name ImoveisUpdate
     * @request PUT:/imoveis/{id}/
     * @secure
     */
    imoveisUpdate: (id: number, data: Imovel, params: RequestParams = {}) =>
      this.request<Imovel, any>({
        path: `/imoveis/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags imoveis
     * @name ImoveisPartialUpdate
     * @request PATCH:/imoveis/{id}/
     * @secure
     */
    imoveisPartialUpdate: (id: number, data: Imovel, params: RequestParams = {}) =>
      this.request<Imovel, any>({
        path: `/imoveis/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags imoveis
     * @name ImoveisDelete
     * @request DELETE:/imoveis/{id}/
     * @secure
     */
    imoveisDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/imoveis/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  impedimentos = {
    /**
     * No description
     *
     * @tags impedimentos
     * @name ImpedimentosList
     * @request GET:/impedimentos/
     * @secure
     */
    impedimentosList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: Impedimento[];
        },
        any
      >({
        path: `/impedimentos/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags impedimentos
     * @name ImpedimentosCreate
     * @request POST:/impedimentos/
     * @secure
     */
    impedimentosCreate: (data: Impedimento, params: RequestParams = {}) =>
      this.request<Impedimento, any>({
        path: `/impedimentos/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags impedimentos
     * @name ImpedimentosRead
     * @request GET:/impedimentos/{id}/
     * @secure
     */
    impedimentosRead: (id: number, params: RequestParams = {}) =>
      this.request<Impedimento, any>({
        path: `/impedimentos/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags impedimentos
     * @name ImpedimentosUpdate
     * @request PUT:/impedimentos/{id}/
     * @secure
     */
    impedimentosUpdate: (id: number, data: Impedimento, params: RequestParams = {}) =>
      this.request<Impedimento, any>({
        path: `/impedimentos/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags impedimentos
     * @name ImpedimentosPartialUpdate
     * @request PATCH:/impedimentos/{id}/
     * @secure
     */
    impedimentosPartialUpdate: (id: number, data: Impedimento, params: RequestParams = {}) =>
      this.request<Impedimento, any>({
        path: `/impedimentos/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags impedimentos
     * @name ImpedimentosDelete
     * @request DELETE:/impedimentos/{id}/
     * @secure
     */
    impedimentosDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/impedimentos/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  indeferimentos = {
    /**
     * No description
     *
     * @tags indeferimentos
     * @name IndeferimentosList
     * @request GET:/indeferimentos/
     * @secure
     */
    indeferimentosList: (
      query?: {
        atendimento_id?: string;
        resultado?: string;
        atendimento_numero?: string;
        classe_tipo?: string;
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: Indeferimento[];
        },
        any
      >({
        path: `/indeferimentos/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags indeferimentos
     * @name IndeferimentosCreate
     * @request POST:/indeferimentos/
     * @secure
     */
    indeferimentosCreate: (data: Indeferimento, params: RequestParams = {}) =>
      this.request<Indeferimento, any>({
        path: `/indeferimentos/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags indeferimentos
     * @name IndeferimentosRead
     * @request GET:/indeferimentos/{id}/
     * @secure
     */
    indeferimentosRead: (id: number, params: RequestParams = {}) =>
      this.request<Indeferimento, any>({
        path: `/indeferimentos/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags indeferimentos
     * @name IndeferimentosUpdate
     * @request PUT:/indeferimentos/{id}/
     * @secure
     */
    indeferimentosUpdate: (id: number, data: Indeferimento, params: RequestParams = {}) =>
      this.request<Indeferimento, any>({
        path: `/indeferimentos/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags indeferimentos
     * @name IndeferimentosPartialUpdate
     * @request PATCH:/indeferimentos/{id}/
     * @secure
     */
    indeferimentosPartialUpdate: (id: number, data: Indeferimento, params: RequestParams = {}) =>
      this.request<Indeferimento, any>({
        path: `/indeferimentos/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags indeferimentos
     * @name IndeferimentosDelete
     * @request DELETE:/indeferimentos/{id}/
     * @secure
     */
    indeferimentosDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/indeferimentos/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  informacoes = {
    /**
     * No description
     *
     * @tags informacoes
     * @name InformacoesList
     * @request GET:/informacoes/
     * @secure
     */
    informacoesList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: Informacao[];
        },
        any
      >({
        path: `/informacoes/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags informacoes
     * @name InformacoesCreate
     * @request POST:/informacoes/
     * @secure
     */
    informacoesCreate: (data: Informacao, params: RequestParams = {}) =>
      this.request<Informacao, any>({
        path: `/informacoes/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags informacoes
     * @name InformacoesRead
     * @request GET:/informacoes/{id}/
     * @secure
     */
    informacoesRead: (id: number, params: RequestParams = {}) =>
      this.request<Informacao, any>({
        path: `/informacoes/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags informacoes
     * @name InformacoesUpdate
     * @request PUT:/informacoes/{id}/
     * @secure
     */
    informacoesUpdate: (id: number, data: Informacao, params: RequestParams = {}) =>
      this.request<Informacao, any>({
        path: `/informacoes/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags informacoes
     * @name InformacoesPartialUpdate
     * @request PATCH:/informacoes/{id}/
     * @secure
     */
    informacoesPartialUpdate: (id: number, data: Informacao, params: RequestParams = {}) =>
      this.request<Informacao, any>({
        path: `/informacoes/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags informacoes
     * @name InformacoesDelete
     * @request DELETE:/informacoes/{id}/
     * @secure
     */
    informacoesDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/informacoes/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  interrupcoes = {
    /**
     * No description
     *
     * @tags interrupcoes
     * @name InterrupcoesList
     * @request GET:/interrupcoes/
     * @secure
     */
    interrupcoesList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: Interrupcao[];
        },
        any
      >({
        path: `/interrupcoes/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags interrupcoes
     * @name InterrupcoesCreate
     * @request POST:/interrupcoes/
     * @secure
     */
    interrupcoesCreate: (data: Interrupcao, params: RequestParams = {}) =>
      this.request<Interrupcao, any>({
        path: `/interrupcoes/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags interrupcoes
     * @name InterrupcoesRead
     * @request GET:/interrupcoes/{id}/
     * @secure
     */
    interrupcoesRead: (id: number, params: RequestParams = {}) =>
      this.request<Interrupcao, any>({
        path: `/interrupcoes/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags interrupcoes
     * @name InterrupcoesUpdate
     * @request PUT:/interrupcoes/{id}/
     * @secure
     */
    interrupcoesUpdate: (id: number, data: Interrupcao, params: RequestParams = {}) =>
      this.request<Interrupcao, any>({
        path: `/interrupcoes/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags interrupcoes
     * @name InterrupcoesPartialUpdate
     * @request PATCH:/interrupcoes/{id}/
     * @secure
     */
    interrupcoesPartialUpdate: (id: number, data: Interrupcao, params: RequestParams = {}) =>
      this.request<Interrupcao, any>({
        path: `/interrupcoes/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags interrupcoes
     * @name InterrupcoesDelete
     * @request DELETE:/interrupcoes/{id}/
     * @secure
     */
    interrupcoesDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/interrupcoes/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  intimacaoBusca = {
    /**
     * No description
     *
     * @tags intimacao-busca
     * @name IntimacaoBuscaList
     * @request GET:/intimacao-busca/
     * @secure
     */
    intimacaoBuscaList: (
      query?: {
        sistema_webservice?: string;
        setor_responsavel?: string;
        responsavel?: string;
        data_inicial?: string;
        data_final?: string;
        situacao?: string;
        tipo?: string;
        etiqueta?: string;
        curadoria?: string;
        prioridade?: string;
        page?: string;
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<ListaDistribuir, any>({
        path: `/intimacao-busca/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags intimacao-busca
     * @name IntimacaoBuscaCreate
     * @request POST:/intimacao-busca/
     * @secure
     */
    intimacaoBuscaCreate: (data: RegistroAvisoPendente, params: RequestParams = {}) =>
      this.request<RegistroAvisoPendente, any>({
        path: `/intimacao-busca/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  itinerantes = {
    /**
     * No description
     *
     * @tags itinerantes
     * @name ItinerantesList
     * @request GET:/itinerantes/
     * @secure
     */
    itinerantesList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: ItineranteEvento[];
        },
        any
      >({
        path: `/itinerantes/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags itinerantes
     * @name ItinerantesCreate
     * @request POST:/itinerantes/
     * @secure
     */
    itinerantesCreate: (data: ItineranteEvento, params: RequestParams = {}) =>
      this.request<ItineranteEvento, any>({
        path: `/itinerantes/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags itinerantes
     * @name ItinerantesRead
     * @request GET:/itinerantes/{id}/
     * @secure
     */
    itinerantesRead: (id: number, params: RequestParams = {}) =>
      this.request<ItineranteEvento, any>({
        path: `/itinerantes/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags itinerantes
     * @name ItinerantesUpdate
     * @request PUT:/itinerantes/{id}/
     * @secure
     */
    itinerantesUpdate: (id: number, data: ItineranteEvento, params: RequestParams = {}) =>
      this.request<ItineranteEvento, any>({
        path: `/itinerantes/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags itinerantes
     * @name ItinerantesPartialUpdate
     * @request PATCH:/itinerantes/{id}/
     * @secure
     */
    itinerantesPartialUpdate: (id: number, data: ItineranteEvento, params: RequestParams = {}) =>
      this.request<ItineranteEvento, any>({
        path: `/itinerantes/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags itinerantes
     * @name ItinerantesDelete
     * @request DELETE:/itinerantes/{id}/
     * @secure
     */
    itinerantesDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/itinerantes/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  justificativas = {
    /**
     * No description
     *
     * @tags justificativas
     * @name JustificativasList
     * @request GET:/justificativas/
     * @secure
     */
    justificativasList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: Justificativa[];
        },
        any
      >({
        path: `/justificativas/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags justificativas
     * @name JustificativasCreate
     * @request POST:/justificativas/
     * @secure
     */
    justificativasCreate: (data: Justificativa, params: RequestParams = {}) =>
      this.request<Justificativa, any>({
        path: `/justificativas/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags justificativas
     * @name JustificativasRead
     * @request GET:/justificativas/{id}/
     * @secure
     */
    justificativasRead: (id: number, params: RequestParams = {}) =>
      this.request<Justificativa, any>({
        path: `/justificativas/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags justificativas
     * @name JustificativasUpdate
     * @request PUT:/justificativas/{id}/
     * @secure
     */
    justificativasUpdate: (id: number, data: Justificativa, params: RequestParams = {}) =>
      this.request<Justificativa, any>({
        path: `/justificativas/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags justificativas
     * @name JustificativasPartialUpdate
     * @request PATCH:/justificativas/{id}/
     * @secure
     */
    justificativasPartialUpdate: (id: number, data: Justificativa, params: RequestParams = {}) =>
      this.request<Justificativa, any>({
        path: `/justificativas/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags justificativas
     * @name JustificativasDelete
     * @request DELETE:/justificativas/{id}/
     * @secure
     */
    justificativasDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/justificativas/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  jwtToken = {
    /**
     * @description Takes a set of user credentials and returns an access and refresh JSON web token pair to prove the authentication of those credentials.
     *
     * @tags jwt-token
     * @name JwtTokenGetCreate
     * @request POST:/jwt-token/get/
     * @secure
     */
    jwtTokenGetCreate: (data: CustomTokenObtainPair, params: RequestParams = {}) =>
      this.request<CustomTokenObtainPair, any>({
        path: `/jwt-token/get/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Takes a refresh type JSON web token and returns an access type JSON web token if the refresh token is valid.
     *
     * @tags jwt-token
     * @name JwtTokenRefreshCreate
     * @request POST:/jwt-token/refresh/
     * @secure
     */
    jwtTokenRefreshCreate: (data: TokenRefresh, params: RequestParams = {}) =>
      this.request<TokenRefresh, any>({
        path: `/jwt-token/refresh/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Takes a token and indicates if it is valid.  This view provides no information about a token's fitness for a particular use.
     *
     * @tags jwt-token
     * @name JwtTokenVerifyCreate
     * @request POST:/jwt-token/verify/
     * @secure
     */
    jwtTokenVerifyCreate: (data: TokenVerify, params: RequestParams = {}) =>
      this.request<TokenVerify, any>({
        path: `/jwt-token/verify/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  locais = {
    /**
     * No description
     *
     * @tags locais
     * @name LocaisList
     * @request GET:/locais/
     * @secure
     */
    locaisList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: Local[];
        },
        any
      >({
        path: `/locais/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags locais
     * @name LocaisCreate
     * @request POST:/locais/
     * @secure
     */
    locaisCreate: (data: Local, params: RequestParams = {}) =>
      this.request<Local, any>({
        path: `/locais/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags locais
     * @name LocaisRead
     * @request GET:/locais/{id}/
     * @secure
     */
    locaisRead: (id: number, params: RequestParams = {}) =>
      this.request<Local, any>({
        path: `/locais/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags locais
     * @name LocaisUpdate
     * @request PUT:/locais/{id}/
     * @secure
     */
    locaisUpdate: (id: number, data: Local, params: RequestParams = {}) =>
      this.request<Local, any>({
        path: `/locais/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags locais
     * @name LocaisPartialUpdate
     * @request PATCH:/locais/{id}/
     * @secure
     */
    locaisPartialUpdate: (id: number, data: Local, params: RequestParams = {}) =>
      this.request<Local, any>({
        path: `/locais/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags locais
     * @name LocaisDelete
     * @request DELETE:/locais/{id}/
     * @secure
     */
    locaisDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/locais/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  loginHistoricos = {
    /**
     * No description
     *
     * @tags login-historicos
     * @name LoginHistoricosList
     * @request GET:/login-historicos/
     * @secure
     */
    loginHistoricosList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: HistoricoLogin[];
        },
        any
      >({
        path: `/login-historicos/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags login-historicos
     * @name LoginHistoricosRead
     * @request GET:/login-historicos/{id}/
     * @secure
     */
    loginHistoricosRead: (id: number, params: RequestParams = {}) =>
      this.request<HistoricoLogin, any>({
        path: `/login-historicos/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  manifestacoesAvisos = {
    /**
     * No description
     *
     * @tags manifestacoes-avisos
     * @name ManifestacoesAvisosList
     * @request GET:/manifestacoes-avisos/
     * @secure
     */
    manifestacoesAvisosList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: ManifestacaoAviso[];
        },
        any
      >({
        path: `/manifestacoes-avisos/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags manifestacoes-avisos
     * @name ManifestacoesAvisosCreate
     * @request POST:/manifestacoes-avisos/
     * @secure
     */
    manifestacoesAvisosCreate: (data: ManifestacaoAviso, params: RequestParams = {}) =>
      this.request<ManifestacaoAviso, any>({
        path: `/manifestacoes-avisos/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags manifestacoes-avisos
     * @name ManifestacoesAvisosRead
     * @request GET:/manifestacoes-avisos/{id}/
     * @secure
     */
    manifestacoesAvisosRead: (id: number, params: RequestParams = {}) =>
      this.request<ManifestacaoAviso, any>({
        path: `/manifestacoes-avisos/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags manifestacoes-avisos
     * @name ManifestacoesAvisosUpdate
     * @request PUT:/manifestacoes-avisos/{id}/
     * @secure
     */
    manifestacoesAvisosUpdate: (id: number, data: ManifestacaoAviso, params: RequestParams = {}) =>
      this.request<ManifestacaoAviso, any>({
        path: `/manifestacoes-avisos/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags manifestacoes-avisos
     * @name ManifestacoesAvisosPartialUpdate
     * @request PATCH:/manifestacoes-avisos/{id}/
     * @secure
     */
    manifestacoesAvisosPartialUpdate: (id: number, data: ManifestacaoAviso, params: RequestParams = {}) =>
      this.request<ManifestacaoAviso, any>({
        path: `/manifestacoes-avisos/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags manifestacoes-avisos
     * @name ManifestacoesAvisosDelete
     * @request DELETE:/manifestacoes-avisos/{id}/
     * @secure
     */
    manifestacoesAvisosDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/manifestacoes-avisos/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  manifestacoesDocumentos = {
    /**
     * No description
     *
     * @tags manifestacoes-documentos
     * @name ManifestacoesDocumentosList
     * @request GET:/manifestacoes-documentos/
     * @secure
     */
    manifestacoesDocumentosList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: ManifestacaoDocumento[];
        },
        any
      >({
        path: `/manifestacoes-documentos/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags manifestacoes-documentos
     * @name ManifestacoesDocumentosCreate
     * @request POST:/manifestacoes-documentos/
     * @secure
     */
    manifestacoesDocumentosCreate: (data: ManifestacaoDocumento, params: RequestParams = {}) =>
      this.request<ManifestacaoDocumento, any>({
        path: `/manifestacoes-documentos/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags manifestacoes-documentos
     * @name ManifestacoesDocumentosRead
     * @request GET:/manifestacoes-documentos/{id}/
     * @secure
     */
    manifestacoesDocumentosRead: (id: number, params: RequestParams = {}) =>
      this.request<ManifestacaoDocumento, any>({
        path: `/manifestacoes-documentos/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags manifestacoes-documentos
     * @name ManifestacoesDocumentosUpdate
     * @request PUT:/manifestacoes-documentos/{id}/
     * @secure
     */
    manifestacoesDocumentosUpdate: (id: number, data: ManifestacaoDocumento, params: RequestParams = {}) =>
      this.request<ManifestacaoDocumento, any>({
        path: `/manifestacoes-documentos/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags manifestacoes-documentos
     * @name ManifestacoesDocumentosPartialUpdate
     * @request PATCH:/manifestacoes-documentos/{id}/
     * @secure
     */
    manifestacoesDocumentosPartialUpdate: (id: number, data: ManifestacaoDocumento, params: RequestParams = {}) =>
      this.request<ManifestacaoDocumento, any>({
        path: `/manifestacoes-documentos/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags manifestacoes-documentos
     * @name ManifestacoesDocumentosDelete
     * @request DELETE:/manifestacoes-documentos/{id}/
     * @secure
     */
    manifestacoesDocumentosDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/manifestacoes-documentos/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  manifestacoes = {
    /**
     * No description
     *
     * @tags manifestacoes
     * @name ManifestacoesList
     * @request GET:/manifestacoes/
     * @secure
     */
    manifestacoesList: (
      query?: {
        data_inicial?: string;
        data_final?: string;
        cadastrado_por?: string;
        defensoria?: string;
        situacao?: string;
        ativo?: string;
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: Manifestacao[];
        },
        any
      >({
        path: `/manifestacoes/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags manifestacoes
     * @name ManifestacoesCreate
     * @request POST:/manifestacoes/
     * @secure
     */
    manifestacoesCreate: (data: Manifestacao, params: RequestParams = {}) =>
      this.request<Manifestacao, any>({
        path: `/manifestacoes/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags manifestacoes
     * @name ManifestacoesRead
     * @request GET:/manifestacoes/{id}/
     * @secure
     */
    manifestacoesRead: (id: number, params: RequestParams = {}) =>
      this.request<Manifestacao, any>({
        path: `/manifestacoes/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags manifestacoes
     * @name ManifestacoesUpdate
     * @request PUT:/manifestacoes/{id}/
     * @secure
     */
    manifestacoesUpdate: (id: number, data: Manifestacao, params: RequestParams = {}) =>
      this.request<Manifestacao, any>({
        path: `/manifestacoes/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags manifestacoes
     * @name ManifestacoesPartialUpdate
     * @request PATCH:/manifestacoes/{id}/
     * @secure
     */
    manifestacoesPartialUpdate: (id: number, data: Manifestacao, params: RequestParams = {}) =>
      this.request<Manifestacao, any>({
        path: `/manifestacoes/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags manifestacoes
     * @name ManifestacoesDelete
     * @request DELETE:/manifestacoes/{id}/
     * @secure
     */
    manifestacoesDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/manifestacoes/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  menusExtras = {
    /**
     * No description
     *
     * @tags menus-extras
     * @name MenusExtrasList
     * @request GET:/menus-extras/
     * @secure
     */
    menusExtrasList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: MenuExtra[];
        },
        any
      >({
        path: `/menus-extras/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags menus-extras
     * @name MenusExtrasRead
     * @request GET:/menus-extras/{id}/
     * @secure
     */
    menusExtrasRead: (id: number, params: RequestParams = {}) =>
      this.request<MenuExtra, any>({
        path: `/menus-extras/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  menus = {
    /**
     * No description
     *
     * @tags menus
     * @name MenusList
     * @request GET:/menus/
     * @secure
     */
    menusList: (params: RequestParams = {}) =>
      this.request<UsuarioMenus[], any>({
        path: `/menus/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  modelosDocumento = {
    /**
     * No description
     *
     * @tags modelos-documento
     * @name ModelosDocumentoList
     * @request GET:/modelos-documento/
     * @secure
     */
    modelosDocumentoList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: AtendimentoModeloDocumento[];
        },
        any
      >({
        path: `/modelos-documento/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags modelos-documento
     * @name ModelosDocumentoCreate
     * @request POST:/modelos-documento/
     * @secure
     */
    modelosDocumentoCreate: (data: AtendimentoModeloDocumento, params: RequestParams = {}) =>
      this.request<AtendimentoModeloDocumento, any>({
        path: `/modelos-documento/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags modelos-documento
     * @name ModelosDocumentoRead
     * @request GET:/modelos-documento/{id}/
     * @secure
     */
    modelosDocumentoRead: (id: number, params: RequestParams = {}) =>
      this.request<AtendimentoModeloDocumento, any>({
        path: `/modelos-documento/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags modelos-documento
     * @name ModelosDocumentoUpdate
     * @request PUT:/modelos-documento/{id}/
     * @secure
     */
    modelosDocumentoUpdate: (id: number, data: AtendimentoModeloDocumento, params: RequestParams = {}) =>
      this.request<AtendimentoModeloDocumento, any>({
        path: `/modelos-documento/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags modelos-documento
     * @name ModelosDocumentoPartialUpdate
     * @request PATCH:/modelos-documento/{id}/
     * @secure
     */
    modelosDocumentoPartialUpdate: (id: number, data: AtendimentoModeloDocumento, params: RequestParams = {}) =>
      this.request<AtendimentoModeloDocumento, any>({
        path: `/modelos-documento/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags modelos-documento
     * @name ModelosDocumentoDelete
     * @request DELETE:/modelos-documento/{id}/
     * @secure
     */
    modelosDocumentoDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/modelos-documento/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  motivosExclusao = {
    /**
     * No description
     *
     * @tags motivos-exclusao
     * @name MotivosExclusaoList
     * @request GET:/motivos-exclusao/
     * @secure
     */
    motivosExclusaoList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: MotivoExclusao[];
        },
        any
      >({
        path: `/motivos-exclusao/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags motivos-exclusao
     * @name MotivosExclusaoCreate
     * @request POST:/motivos-exclusao/
     * @secure
     */
    motivosExclusaoCreate: (data: MotivoExclusao, params: RequestParams = {}) =>
      this.request<MotivoExclusao, any>({
        path: `/motivos-exclusao/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags motivos-exclusao
     * @name MotivosExclusaoRead
     * @request GET:/motivos-exclusao/{id}/
     * @secure
     */
    motivosExclusaoRead: (id: number, params: RequestParams = {}) =>
      this.request<MotivoExclusao, any>({
        path: `/motivos-exclusao/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags motivos-exclusao
     * @name MotivosExclusaoUpdate
     * @request PUT:/motivos-exclusao/{id}/
     * @secure
     */
    motivosExclusaoUpdate: (id: number, data: MotivoExclusao, params: RequestParams = {}) =>
      this.request<MotivoExclusao, any>({
        path: `/motivos-exclusao/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags motivos-exclusao
     * @name MotivosExclusaoPartialUpdate
     * @request PATCH:/motivos-exclusao/{id}/
     * @secure
     */
    motivosExclusaoPartialUpdate: (id: number, data: MotivoExclusao, params: RequestParams = {}) =>
      this.request<MotivoExclusao, any>({
        path: `/motivos-exclusao/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags motivos-exclusao
     * @name MotivosExclusaoDelete
     * @request DELETE:/motivos-exclusao/{id}/
     * @secure
     */
    motivosExclusaoDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/motivos-exclusao/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  motivosParaBaixaPrisao = {
    /**
     * No description
     *
     * @tags motivos-para-baixa-prisao
     * @name MotivosParaBaixaPrisaoList
     * @request GET:/motivos-para-baixa-prisao/
     * @secure
     */
    motivosParaBaixaPrisaoList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: MotivoBaixaPrisao[];
        },
        any
      >({
        path: `/motivos-para-baixa-prisao/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags motivos-para-baixa-prisao
     * @name MotivosParaBaixaPrisaoCreate
     * @request POST:/motivos-para-baixa-prisao/
     * @secure
     */
    motivosParaBaixaPrisaoCreate: (data: MotivoBaixaPrisao, params: RequestParams = {}) =>
      this.request<MotivoBaixaPrisao, any>({
        path: `/motivos-para-baixa-prisao/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags motivos-para-baixa-prisao
     * @name MotivosParaBaixaPrisaoRead
     * @request GET:/motivos-para-baixa-prisao/{id}/
     * @secure
     */
    motivosParaBaixaPrisaoRead: (id: number, params: RequestParams = {}) =>
      this.request<MotivoBaixaPrisao, any>({
        path: `/motivos-para-baixa-prisao/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags motivos-para-baixa-prisao
     * @name MotivosParaBaixaPrisaoUpdate
     * @request PUT:/motivos-para-baixa-prisao/{id}/
     * @secure
     */
    motivosParaBaixaPrisaoUpdate: (id: number, data: MotivoBaixaPrisao, params: RequestParams = {}) =>
      this.request<MotivoBaixaPrisao, any>({
        path: `/motivos-para-baixa-prisao/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags motivos-para-baixa-prisao
     * @name MotivosParaBaixaPrisaoPartialUpdate
     * @request PATCH:/motivos-para-baixa-prisao/{id}/
     * @secure
     */
    motivosParaBaixaPrisaoPartialUpdate: (id: number, data: MotivoBaixaPrisao, params: RequestParams = {}) =>
      this.request<MotivoBaixaPrisao, any>({
        path: `/motivos-para-baixa-prisao/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags motivos-para-baixa-prisao
     * @name MotivosParaBaixaPrisaoDelete
     * @request DELETE:/motivos-para-baixa-prisao/{id}/
     * @secure
     */
    motivosParaBaixaPrisaoDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/motivos-para-baixa-prisao/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  moveis = {
    /**
     * No description
     *
     * @tags moveis
     * @name MoveisList
     * @request GET:/moveis/
     * @secure
     */
    moveisList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: Movel[];
        },
        any
      >({
        path: `/moveis/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags moveis
     * @name MoveisCreate
     * @request POST:/moveis/
     * @secure
     */
    moveisCreate: (data: Movel, params: RequestParams = {}) =>
      this.request<Movel, any>({
        path: `/moveis/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags moveis
     * @name MoveisRead
     * @request GET:/moveis/{id}/
     * @secure
     */
    moveisRead: (id: number, params: RequestParams = {}) =>
      this.request<Movel, any>({
        path: `/moveis/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags moveis
     * @name MoveisUpdate
     * @request PUT:/moveis/{id}/
     * @secure
     */
    moveisUpdate: (id: number, data: Movel, params: RequestParams = {}) =>
      this.request<Movel, any>({
        path: `/moveis/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags moveis
     * @name MoveisPartialUpdate
     * @request PATCH:/moveis/{id}/
     * @secure
     */
    moveisPartialUpdate: (id: number, data: Movel, params: RequestParams = {}) =>
      this.request<Movel, any>({
        path: `/moveis/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags moveis
     * @name MoveisDelete
     * @request DELETE:/moveis/{id}/
     * @secure
     */
    moveisDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/moveis/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  mudancasDeRegime = {
    /**
     * No description
     *
     * @tags mudancas-de-regime
     * @name MudancasDeRegimeList
     * @request GET:/mudancas-de-regime/
     * @secure
     */
    mudancasDeRegimeList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: MudancaRegime[];
        },
        any
      >({
        path: `/mudancas-de-regime/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags mudancas-de-regime
     * @name MudancasDeRegimeCreate
     * @request POST:/mudancas-de-regime/
     * @secure
     */
    mudancasDeRegimeCreate: (data: MudancaRegime, params: RequestParams = {}) =>
      this.request<MudancaRegime, any>({
        path: `/mudancas-de-regime/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags mudancas-de-regime
     * @name MudancasDeRegimeRead
     * @request GET:/mudancas-de-regime/{id}/
     * @secure
     */
    mudancasDeRegimeRead: (id: number, params: RequestParams = {}) =>
      this.request<MudancaRegime, any>({
        path: `/mudancas-de-regime/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags mudancas-de-regime
     * @name MudancasDeRegimeUpdate
     * @request PUT:/mudancas-de-regime/{id}/
     * @secure
     */
    mudancasDeRegimeUpdate: (id: number, data: MudancaRegime, params: RequestParams = {}) =>
      this.request<MudancaRegime, any>({
        path: `/mudancas-de-regime/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags mudancas-de-regime
     * @name MudancasDeRegimePartialUpdate
     * @request PATCH:/mudancas-de-regime/{id}/
     * @secure
     */
    mudancasDeRegimePartialUpdate: (id: number, data: MudancaRegime, params: RequestParams = {}) =>
      this.request<MudancaRegime, any>({
        path: `/mudancas-de-regime/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags mudancas-de-regime
     * @name MudancasDeRegimeDelete
     * @request DELETE:/mudancas-de-regime/{id}/
     * @secure
     */
    mudancasDeRegimeDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/mudancas-de-regime/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  municipios = {
    /**
     * No description
     *
     * @tags municipios
     * @name MunicipiosList
     * @request GET:/municipios/
     * @secure
     */
    municipiosList: (
      query?: {
        estado?: string;
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: Municipio[];
        },
        any
      >({
        path: `/municipios/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags municipios
     * @name MunicipiosCreate
     * @request POST:/municipios/
     * @secure
     */
    municipiosCreate: (data: Municipio, params: RequestParams = {}) =>
      this.request<Municipio, any>({
        path: `/municipios/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags municipios
     * @name MunicipiosRead
     * @request GET:/municipios/{id}/
     * @secure
     */
    municipiosRead: (id: number, params: RequestParams = {}) =>
      this.request<Municipio, any>({
        path: `/municipios/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags municipios
     * @name MunicipiosUpdate
     * @request PUT:/municipios/{id}/
     * @secure
     */
    municipiosUpdate: (id: number, data: Municipio, params: RequestParams = {}) =>
      this.request<Municipio, any>({
        path: `/municipios/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags municipios
     * @name MunicipiosPartialUpdate
     * @request PATCH:/municipios/{id}/
     * @secure
     */
    municipiosPartialUpdate: (id: number, data: Municipio, params: RequestParams = {}) =>
      this.request<Municipio, any>({
        path: `/municipios/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags municipios
     * @name MunicipiosDelete
     * @request DELETE:/municipios/{id}/
     * @secure
     */
    municipiosDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/municipios/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  nucleos = {
    /**
     * No description
     *
     * @tags nucleos
     * @name NucleosList
     * @request GET:/nucleos/
     * @secure
     */
    nucleosList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: Nucleo[];
        },
        any
      >({
        path: `/nucleos/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags nucleos
     * @name NucleosCreate
     * @request POST:/nucleos/
     * @secure
     */
    nucleosCreate: (data: Nucleo, params: RequestParams = {}) =>
      this.request<Nucleo, any>({
        path: `/nucleos/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags nucleos
     * @name NucleosRead
     * @request GET:/nucleos/{id}/
     * @secure
     */
    nucleosRead: (id: number, params: RequestParams = {}) =>
      this.request<Nucleo, any>({
        path: `/nucleos/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags nucleos
     * @name NucleosUpdate
     * @request PUT:/nucleos/{id}/
     * @secure
     */
    nucleosUpdate: (id: number, data: Nucleo, params: RequestParams = {}) =>
      this.request<Nucleo, any>({
        path: `/nucleos/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags nucleos
     * @name NucleosPartialUpdate
     * @request PATCH:/nucleos/{id}/
     * @secure
     */
    nucleosPartialUpdate: (id: number, data: Nucleo, params: RequestParams = {}) =>
      this.request<Nucleo, any>({
        path: `/nucleos/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags nucleos
     * @name NucleosDelete
     * @request DELETE:/nucleos/{id}/
     * @secure
     */
    nucleosDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/nucleos/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  orientacoesSexuais = {
    /**
     * No description
     *
     * @tags orientacoes-sexuais
     * @name OrientacoesSexuaisList
     * @request GET:/orientacoes-sexuais/
     * @secure
     */
    orientacoesSexuaisList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: OrientacaoSexual[];
        },
        any
      >({
        path: `/orientacoes-sexuais/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags orientacoes-sexuais
     * @name OrientacoesSexuaisRead
     * @request GET:/orientacoes-sexuais/{id}/
     * @secure
     */
    orientacoesSexuaisRead: (id: number, params: RequestParams = {}) =>
      this.request<OrientacaoSexual, any>({
        path: `/orientacoes-sexuais/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  painelAtendimentosHoje = {
    /**
     * No description
     *
     * @tags painel-atendimentos-hoje
     * @name PainelAtendimentosHojeList
     * @request GET:/painel-atendimentos-hoje/
     * @secure
     */
    painelAtendimentosHojeList: (
      query?: {
        id?: number;
        predio?: string;
        data_emissao?: string;
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: Painel[];
        },
        any
      >({
        path: `/painel-atendimentos-hoje/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags painel-atendimentos-hoje
     * @name PainelAtendimentosHojeRead
     * @request GET:/painel-atendimentos-hoje/{id}/
     * @secure
     */
    painelAtendimentosHojeRead: (id: number, params: RequestParams = {}) =>
      this.request<Painel, any>({
        path: `/painel-atendimentos-hoje/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  painel = {
    /**
     * No description
     *
     * @tags painel
     * @name PainelRecepcaoList
     * @request GET:/painel/recepcao/
     * @secure
     */
    painelRecepcaoList: (
      query: {
        comarca: string;
        predio?: string;
        situacao: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<AtendimentoRecepcao, any>({
        path: `/painel/recepcao/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  paises = {
    /**
     * No description
     *
     * @tags paises
     * @name PaisesList
     * @request GET:/paises/
     * @secure
     */
    paisesList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: Pais[];
        },
        any
      >({
        path: `/paises/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags paises
     * @name PaisesRead
     * @request GET:/paises/{id}/
     * @secure
     */
    paisesRead: (id: number, params: RequestParams = {}) =>
      this.request<Pais, any>({
        path: `/paises/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  papeis = {
    /**
     * No description
     *
     * @tags papeis
     * @name PapeisList
     * @request GET:/papeis/
     * @secure
     */
    papeisList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: Papel[];
        },
        any
      >({
        path: `/papeis/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags papeis
     * @name PapeisRead
     * @request GET:/papeis/{id}/
     * @secure
     */
    papeisRead: (id: number, params: RequestParams = {}) =>
      this.request<Papel, any>({
        path: `/papeis/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  pastasDocumentos = {
    /**
     * No description
     *
     * @tags pastas-documentos
     * @name PastasDocumentosList
     * @request GET:/pastas-documentos/
     * @secure
     */
    pastasDocumentosList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: PastaDocumento[];
        },
        any
      >({
        path: `/pastas-documentos/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags pastas-documentos
     * @name PastasDocumentosCreate
     * @request POST:/pastas-documentos/
     * @secure
     */
    pastasDocumentosCreate: (data: PastaDocumento, params: RequestParams = {}) =>
      this.request<PastaDocumento, any>({
        path: `/pastas-documentos/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags pastas-documentos
     * @name PastasDocumentosRead
     * @request GET:/pastas-documentos/{id}/
     * @secure
     */
    pastasDocumentosRead: (id: number, params: RequestParams = {}) =>
      this.request<PastaDocumento, any>({
        path: `/pastas-documentos/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags pastas-documentos
     * @name PastasDocumentosUpdate
     * @request PUT:/pastas-documentos/{id}/
     * @secure
     */
    pastasDocumentosUpdate: (id: number, data: PastaDocumento, params: RequestParams = {}) =>
      this.request<PastaDocumento, any>({
        path: `/pastas-documentos/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags pastas-documentos
     * @name PastasDocumentosPartialUpdate
     * @request PATCH:/pastas-documentos/{id}/
     * @secure
     */
    pastasDocumentosPartialUpdate: (id: number, data: PastaDocumento, params: RequestParams = {}) =>
      this.request<PastaDocumento, any>({
        path: `/pastas-documentos/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags pastas-documentos
     * @name PastasDocumentosDelete
     * @request DELETE:/pastas-documentos/{id}/
     * @secure
     */
    pastasDocumentosDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/pastas-documentos/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  patrimoniais = {
    /**
     * No description
     *
     * @tags patrimoniais
     * @name PatrimoniaisList
     * @request GET:/patrimoniais/
     * @secure
     */
    patrimoniaisList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: Patrimonial[];
        },
        any
      >({
        path: `/patrimoniais/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags patrimoniais
     * @name PatrimoniaisCreate
     * @request POST:/patrimoniais/
     * @secure
     */
    patrimoniaisCreate: (data: Patrimonial, params: RequestParams = {}) =>
      this.request<Patrimonial, any>({
        path: `/patrimoniais/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags patrimoniais
     * @name PatrimoniaisRead
     * @request GET:/patrimoniais/{id}/
     * @secure
     */
    patrimoniaisRead: (id: number, params: RequestParams = {}) =>
      this.request<Patrimonial, any>({
        path: `/patrimoniais/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags patrimoniais
     * @name PatrimoniaisUpdate
     * @request PUT:/patrimoniais/{id}/
     * @secure
     */
    patrimoniaisUpdate: (id: number, data: Patrimonial, params: RequestParams = {}) =>
      this.request<Patrimonial, any>({
        path: `/patrimoniais/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags patrimoniais
     * @name PatrimoniaisPartialUpdate
     * @request PATCH:/patrimoniais/{id}/
     * @secure
     */
    patrimoniaisPartialUpdate: (id: number, data: Patrimonial, params: RequestParams = {}) =>
      this.request<Patrimonial, any>({
        path: `/patrimoniais/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags patrimoniais
     * @name PatrimoniaisDelete
     * @request DELETE:/patrimoniais/{id}/
     * @secure
     */
    patrimoniaisDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/patrimoniais/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  patrimonios = {
    /**
     * No description
     *
     * @tags patrimonios
     * @name PatrimoniosList
     * @request GET:/patrimonios/
     * @secure
     */
    patrimoniosList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: Patrimonio[];
        },
        any
      >({
        path: `/patrimonios/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags patrimonios
     * @name PatrimoniosCreate
     * @request POST:/patrimonios/
     * @secure
     */
    patrimoniosCreate: (data: Patrimonio, params: RequestParams = {}) =>
      this.request<Patrimonio, any>({
        path: `/patrimonios/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags patrimonios
     * @name PatrimoniosRead
     * @request GET:/patrimonios/{id}/
     * @secure
     */
    patrimoniosRead: (id: number, params: RequestParams = {}) =>
      this.request<Patrimonio, any>({
        path: `/patrimonios/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags patrimonios
     * @name PatrimoniosUpdate
     * @request PUT:/patrimonios/{id}/
     * @secure
     */
    patrimoniosUpdate: (id: number, data: Patrimonio, params: RequestParams = {}) =>
      this.request<Patrimonio, any>({
        path: `/patrimonios/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags patrimonios
     * @name PatrimoniosPartialUpdate
     * @request PATCH:/patrimonios/{id}/
     * @secure
     */
    patrimoniosPartialUpdate: (id: number, data: Patrimonio, params: RequestParams = {}) =>
      this.request<Patrimonio, any>({
        path: `/patrimonios/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags patrimonios
     * @name PatrimoniosDelete
     * @request DELETE:/patrimonios/{id}/
     * @secure
     */
    patrimoniosDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/patrimonios/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  penasRestritivas = {
    /**
     * No description
     *
     * @tags penas-restritivas
     * @name PenasRestritivasList
     * @request GET:/penas-restritivas/
     * @secure
     */
    penasRestritivasList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: PenaRestritiva[];
        },
        any
      >({
        path: `/penas-restritivas/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags penas-restritivas
     * @name PenasRestritivasCreate
     * @request POST:/penas-restritivas/
     * @secure
     */
    penasRestritivasCreate: (data: PenaRestritiva, params: RequestParams = {}) =>
      this.request<PenaRestritiva, any>({
        path: `/penas-restritivas/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags penas-restritivas
     * @name PenasRestritivasRead
     * @request GET:/penas-restritivas/{id}/
     * @secure
     */
    penasRestritivasRead: (id: number, params: RequestParams = {}) =>
      this.request<PenaRestritiva, any>({
        path: `/penas-restritivas/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags penas-restritivas
     * @name PenasRestritivasUpdate
     * @request PUT:/penas-restritivas/{id}/
     * @secure
     */
    penasRestritivasUpdate: (id: number, data: PenaRestritiva, params: RequestParams = {}) =>
      this.request<PenaRestritiva, any>({
        path: `/penas-restritivas/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags penas-restritivas
     * @name PenasRestritivasPartialUpdate
     * @request PATCH:/penas-restritivas/{id}/
     * @secure
     */
    penasRestritivasPartialUpdate: (id: number, data: PenaRestritiva, params: RequestParams = {}) =>
      this.request<PenaRestritiva, any>({
        path: `/penas-restritivas/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags penas-restritivas
     * @name PenasRestritivasDelete
     * @request DELETE:/penas-restritivas/{id}/
     * @secure
     */
    penasRestritivasDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/penas-restritivas/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  perfil = {
    /**
     * No description
     *
     * @tags perfil
     * @name PerfilAtuacoesList
     * @request GET:/perfil/atuacoes/
     * @secure
     */
    perfilAtuacoesList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: Generic[];
        },
        any
      >({
        path: `/perfil/atuacoes/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags perfil
     * @name PerfilDefensoriasList
     * @request GET:/perfil/defensorias/
     * @secure
     */
    perfilDefensoriasList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: Generic[];
        },
        any
      >({
        path: `/perfil/defensorias/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags perfil
     * @name PerfilSupervisoresList
     * @request GET:/perfil/supervisores/
     * @secure
     */
    perfilSupervisoresList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: Generic[];
        },
        any
      >({
        path: `/perfil/supervisores/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  perfisCamposObrigatorios = {
    /**
     * No description
     *
     * @tags perfis-campos-obrigatorios
     * @name PerfisCamposObrigatoriosList
     * @request GET:/perfis-campos-obrigatorios/
     * @secure
     */
    perfisCamposObrigatoriosList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: PerfilCamposObrigatorios[];
        },
        any
      >({
        path: `/perfis-campos-obrigatorios/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags perfis-campos-obrigatorios
     * @name PerfisCamposObrigatoriosCreate
     * @request POST:/perfis-campos-obrigatorios/
     * @secure
     */
    perfisCamposObrigatoriosCreate: (data: PerfilCamposObrigatorios, params: RequestParams = {}) =>
      this.request<PerfilCamposObrigatorios, any>({
        path: `/perfis-campos-obrigatorios/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags perfis-campos-obrigatorios
     * @name PerfisCamposObrigatoriosRead
     * @request GET:/perfis-campos-obrigatorios/{id}/
     * @secure
     */
    perfisCamposObrigatoriosRead: (id: number, params: RequestParams = {}) =>
      this.request<PerfilCamposObrigatorios, any>({
        path: `/perfis-campos-obrigatorios/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags perfis-campos-obrigatorios
     * @name PerfisCamposObrigatoriosUpdate
     * @request PUT:/perfis-campos-obrigatorios/{id}/
     * @secure
     */
    perfisCamposObrigatoriosUpdate: (id: number, data: PerfilCamposObrigatorios, params: RequestParams = {}) =>
      this.request<PerfilCamposObrigatorios, any>({
        path: `/perfis-campos-obrigatorios/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags perfis-campos-obrigatorios
     * @name PerfisCamposObrigatoriosPartialUpdate
     * @request PATCH:/perfis-campos-obrigatorios/{id}/
     * @secure
     */
    perfisCamposObrigatoriosPartialUpdate: (id: number, data: PerfilCamposObrigatorios, params: RequestParams = {}) =>
      this.request<PerfilCamposObrigatorios, any>({
        path: `/perfis-campos-obrigatorios/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags perfis-campos-obrigatorios
     * @name PerfisCamposObrigatoriosDelete
     * @request DELETE:/perfis-campos-obrigatorios/{id}/
     * @secure
     */
    perfisCamposObrigatoriosDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/perfis-campos-obrigatorios/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  perguntas = {
    /**
     * No description
     *
     * @tags perguntas
     * @name PerguntasList
     * @request GET:/perguntas/
     * @secure
     */
    perguntasList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: PerguntaAtendimento[];
        },
        any
      >({
        path: `/perguntas/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags perguntas
     * @name PerguntasCreate
     * @request POST:/perguntas/
     * @secure
     */
    perguntasCreate: (data: PerguntaAtendimento, params: RequestParams = {}) =>
      this.request<PerguntaAtendimento, any>({
        path: `/perguntas/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags perguntas
     * @name PerguntasRead
     * @request GET:/perguntas/{id}/
     * @secure
     */
    perguntasRead: (id: number, params: RequestParams = {}) =>
      this.request<PerguntaAtendimento, any>({
        path: `/perguntas/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags perguntas
     * @name PerguntasUpdate
     * @request PUT:/perguntas/{id}/
     * @secure
     */
    perguntasUpdate: (id: number, data: PerguntaAtendimento, params: RequestParams = {}) =>
      this.request<PerguntaAtendimento, any>({
        path: `/perguntas/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags perguntas
     * @name PerguntasPartialUpdate
     * @request PATCH:/perguntas/{id}/
     * @secure
     */
    perguntasPartialUpdate: (id: number, data: PerguntaAtendimento, params: RequestParams = {}) =>
      this.request<PerguntaAtendimento, any>({
        path: `/perguntas/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags perguntas
     * @name PerguntasDelete
     * @request DELETE:/perguntas/{id}/
     * @secure
     */
    perguntasDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/perguntas/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  permissoes = {
    /**
     * No description
     *
     * @tags permissoes
     * @name PermissoesList
     * @request GET:/permissoes/
     * @secure
     */
    permissoesList: (params: RequestParams = {}) =>
      this.request<UsuarioPermissoes, any>({
        path: `/permissoes/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  peticionarEmMassa = {
    /**
     * No description
     *
     * @tags peticionar-em-massa
     * @name PeticionarEmMassaList
     * @request GET:/peticionar-em-massa/
     * @secure
     */
    peticionarEmMassaList: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/peticionar-em-massa/`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags peticionar-em-massa
     * @name PeticionarEmMassaCreate
     * @request POST:/peticionar-em-massa/
     * @secure
     */
    peticionarEmMassaCreate: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/peticionar-em-massa/`,
        method: "POST",
        secure: true,
        ...params,
      }),
  };
  peticoesTotaisPorMes = {
    /**
     * No description
     *
     * @tags peticoes-totais-por-mes
     * @name PeticoesTotaisPorMesList
     * @request GET:/peticoes-totais-por-mes/
     * @secure
     */
    peticoesTotaisPorMesList: (
      query: {
        usuario_defensor_id: number;
        area_id: number;
        /** Valores múltiplos podem ser separados por vírgulas. */
        vara_id?: string;
        ano: number;
        mes: number;
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: PeticaoTotalMensalSerializar[];
        },
        any
      >({
        path: `/peticoes-totais-por-mes/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  predios = {
    /**
     * No description
     *
     * @tags predios
     * @name PrediosList
     * @request GET:/predios/
     * @secure
     */
    prediosList: (
      query?: {
        /** A search term. */
        search?: string;
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: PredioList[];
        },
        any
      >({
        path: `/predios/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags predios
     * @name PrediosCreate
     * @request POST:/predios/
     * @secure
     */
    prediosCreate: (data: PredioCreate, params: RequestParams = {}) =>
      this.request<PredioCreate, any>({
        path: `/predios/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags predios
     * @name PrediosRead
     * @request GET:/predios/{id}/
     * @secure
     */
    prediosRead: (id: number, params: RequestParams = {}) =>
      this.request<PredioRetrieve, any>({
        path: `/predios/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags predios
     * @name PrediosUpdate
     * @request PUT:/predios/{id}/
     * @secure
     */
    prediosUpdate: (id: number, data: PredioCreate, params: RequestParams = {}) =>
      this.request<PredioCreate, any>({
        path: `/predios/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags predios
     * @name PrediosPartialUpdate
     * @request PATCH:/predios/{id}/
     * @secure
     */
    prediosPartialUpdate: (id: number, data: PredioList, params: RequestParams = {}) =>
      this.request<PredioList, any>({
        path: `/predios/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags predios
     * @name PrediosDelete
     * @request DELETE:/predios/{id}/
     * @secure
     */
    prediosDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/predios/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  prioridades = {
    /**
     * No description
     *
     * @tags prioridades
     * @name PrioridadesList
     * @request GET:/prioridades/
     * @secure
     */
    prioridadesList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: ParteProcesso[];
        },
        any
      >({
        path: `/prioridades/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags prioridades
     * @name PrioridadesCreate
     * @request POST:/prioridades/
     * @secure
     */
    prioridadesCreate: (data: ParteProcesso, params: RequestParams = {}) =>
      this.request<ParteProcesso, any>({
        path: `/prioridades/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags prioridades
     * @name PrioridadesRead
     * @request GET:/prioridades/{id}/
     * @secure
     */
    prioridadesRead: (id: number, params: RequestParams = {}) =>
      this.request<ParteProcesso, any>({
        path: `/prioridades/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags prioridades
     * @name PrioridadesUpdate
     * @request PUT:/prioridades/{id}/
     * @secure
     */
    prioridadesUpdate: (id: number, data: ParteProcesso, params: RequestParams = {}) =>
      this.request<ParteProcesso, any>({
        path: `/prioridades/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags prioridades
     * @name PrioridadesPartialUpdate
     * @request PATCH:/prioridades/{id}/
     * @secure
     */
    prioridadesPartialUpdate: (id: number, data: ParteProcesso, params: RequestParams = {}) =>
      this.request<ParteProcesso, any>({
        path: `/prioridades/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags prioridades
     * @name PrioridadesDelete
     * @request DELETE:/prioridades/{id}/
     * @secure
     */
    prioridadesDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/prioridades/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  prisoes = {
    /**
     * No description
     *
     * @tags prisoes
     * @name PrisoesList
     * @request GET:/prisoes/
     * @secure
     */
    prisoesList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: Prisao[];
        },
        any
      >({
        path: `/prisoes/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags prisoes
     * @name PrisoesCreate
     * @request POST:/prisoes/
     * @secure
     */
    prisoesCreate: (data: Prisao, params: RequestParams = {}) =>
      this.request<Prisao, any>({
        path: `/prisoes/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags prisoes
     * @name PrisoesRead
     * @request GET:/prisoes/{id}/
     * @secure
     */
    prisoesRead: (id: number, params: RequestParams = {}) =>
      this.request<Prisao, any>({
        path: `/prisoes/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags prisoes
     * @name PrisoesUpdate
     * @request PUT:/prisoes/{id}/
     * @secure
     */
    prisoesUpdate: (id: number, data: Prisao, params: RequestParams = {}) =>
      this.request<Prisao, any>({
        path: `/prisoes/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags prisoes
     * @name PrisoesPartialUpdate
     * @request PATCH:/prisoes/{id}/
     * @secure
     */
    prisoesPartialUpdate: (id: number, data: Prisao, params: RequestParams = {}) =>
      this.request<Prisao, any>({
        path: `/prisoes/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags prisoes
     * @name PrisoesDelete
     * @request DELETE:/prisoes/{id}/
     * @secure
     */
    prisoesDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/prisoes/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  procedimentos = {
    /**
     * No description
     *
     * @tags procedimentos
     * @name ProcedimentosList
     * @request GET:/procedimentos/
     * @secure
     */
    procedimentosList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: Procedimento[];
        },
        any
      >({
        path: `/procedimentos/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags procedimentos
     * @name ProcedimentosCreate
     * @request POST:/procedimentos/
     * @secure
     */
    procedimentosCreate: (data: Procedimento, params: RequestParams = {}) =>
      this.request<Procedimento, any>({
        path: `/procedimentos/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags procedimentos
     * @name ProcedimentosRead
     * @request GET:/procedimentos/{id}/
     * @secure
     */
    procedimentosRead: (id: number, params: RequestParams = {}) =>
      this.request<Procedimento, any>({
        path: `/procedimentos/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags procedimentos
     * @name ProcedimentosUpdate
     * @request PUT:/procedimentos/{id}/
     * @secure
     */
    procedimentosUpdate: (id: number, data: Procedimento, params: RequestParams = {}) =>
      this.request<Procedimento, any>({
        path: `/procedimentos/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags procedimentos
     * @name ProcedimentosPartialUpdate
     * @request PATCH:/procedimentos/{id}/
     * @secure
     */
    procedimentosPartialUpdate: (id: number, data: Procedimento, params: RequestParams = {}) =>
      this.request<Procedimento, any>({
        path: `/procedimentos/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags procedimentos
     * @name ProcedimentosDelete
     * @request DELETE:/procedimentos/{id}/
     * @secure
     */
    procedimentosDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/procedimentos/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  processosApensos = {
    /**
     * No description
     *
     * @tags processos-apensos
     * @name ProcessosApensosList
     * @request GET:/processos-apensos/
     * @secure
     */
    processosApensosList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: ProcessoApenso[];
        },
        any
      >({
        path: `/processos-apensos/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags processos-apensos
     * @name ProcessosApensosCreate
     * @request POST:/processos-apensos/
     * @secure
     */
    processosApensosCreate: (data: ProcessoApenso, params: RequestParams = {}) =>
      this.request<ProcessoApenso, any>({
        path: `/processos-apensos/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags processos-apensos
     * @name ProcessosApensosRead
     * @request GET:/processos-apensos/{id}/
     * @secure
     */
    processosApensosRead: (id: number, params: RequestParams = {}) =>
      this.request<ProcessoApenso, any>({
        path: `/processos-apensos/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags processos-apensos
     * @name ProcessosApensosUpdate
     * @request PUT:/processos-apensos/{id}/
     * @secure
     */
    processosApensosUpdate: (id: number, data: ProcessoApenso, params: RequestParams = {}) =>
      this.request<ProcessoApenso, any>({
        path: `/processos-apensos/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags processos-apensos
     * @name ProcessosApensosPartialUpdate
     * @request PATCH:/processos-apensos/{id}/
     * @secure
     */
    processosApensosPartialUpdate: (id: number, data: ProcessoApenso, params: RequestParams = {}) =>
      this.request<ProcessoApenso, any>({
        path: `/processos-apensos/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags processos-apensos
     * @name ProcessosApensosDelete
     * @request DELETE:/processos-apensos/{id}/
     * @secure
     */
    processosApensosDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/processos-apensos/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  processosAssuntos = {
    /**
     * No description
     *
     * @tags processos-assuntos
     * @name ProcessosAssuntosList
     * @request GET:/processos-assuntos/
     * @secure
     */
    processosAssuntosList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: ProcessosAssuntos[];
        },
        any
      >({
        path: `/processos-assuntos/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags processos-assuntos
     * @name ProcessosAssuntosCreate
     * @request POST:/processos-assuntos/
     * @secure
     */
    processosAssuntosCreate: (data: ProcessosAssuntos, params: RequestParams = {}) =>
      this.request<ProcessosAssuntos, any>({
        path: `/processos-assuntos/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags processos-assuntos
     * @name ProcessosAssuntosRead
     * @request GET:/processos-assuntos/{id}/
     * @secure
     */
    processosAssuntosRead: (id: number, params: RequestParams = {}) =>
      this.request<ProcessosAssuntos, any>({
        path: `/processos-assuntos/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags processos-assuntos
     * @name ProcessosAssuntosUpdate
     * @request PUT:/processos-assuntos/{id}/
     * @secure
     */
    processosAssuntosUpdate: (id: number, data: ProcessosAssuntos, params: RequestParams = {}) =>
      this.request<ProcessosAssuntos, any>({
        path: `/processos-assuntos/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags processos-assuntos
     * @name ProcessosAssuntosPartialUpdate
     * @request PATCH:/processos-assuntos/{id}/
     * @secure
     */
    processosAssuntosPartialUpdate: (id: number, data: ProcessosAssuntos, params: RequestParams = {}) =>
      this.request<ProcessosAssuntos, any>({
        path: `/processos-assuntos/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags processos-assuntos
     * @name ProcessosAssuntosDelete
     * @request DELETE:/processos-assuntos/{id}/
     * @secure
     */
    processosAssuntosDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/processos-assuntos/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  processosClasses = {
    /**
     * No description
     *
     * @tags processos-classes
     * @name ProcessosClassesList
     * @request GET:/processos-classes/
     * @secure
     */
    processosClassesList: (
      query?: {
        judicial?: string;
        extrajudicial?: string;
        penal?: string;
        inquerito?: string;
        acao_penal?: string;
        execucao_penal?: string;
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: Acao[];
        },
        any
      >({
        path: `/processos-classes/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags processos-classes
     * @name ProcessosClassesCreate
     * @request POST:/processos-classes/
     * @secure
     */
    processosClassesCreate: (data: Acao, params: RequestParams = {}) =>
      this.request<Acao, any>({
        path: `/processos-classes/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags processos-classes
     * @name ProcessosClassesRead
     * @request GET:/processos-classes/{id}/
     * @secure
     */
    processosClassesRead: (id: number, params: RequestParams = {}) =>
      this.request<Acao, any>({
        path: `/processos-classes/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags processos-classes
     * @name ProcessosClassesUpdate
     * @request PUT:/processos-classes/{id}/
     * @secure
     */
    processosClassesUpdate: (id: number, data: Acao, params: RequestParams = {}) =>
      this.request<Acao, any>({
        path: `/processos-classes/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags processos-classes
     * @name ProcessosClassesPartialUpdate
     * @request PATCH:/processos-classes/{id}/
     * @secure
     */
    processosClassesPartialUpdate: (id: number, data: Acao, params: RequestParams = {}) =>
      this.request<Acao, any>({
        path: `/processos-classes/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags processos-classes
     * @name ProcessosClassesDelete
     * @request DELETE:/processos-classes/{id}/
     * @secure
     */
    processosClassesDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/processos-classes/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  processosDocumentos = {
    /**
     * No description
     *
     * @tags processos-documentos
     * @name ProcessosDocumentosList
     * @request GET:/processos-documentos/
     * @secure
     */
    processosDocumentosList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: DocumentoFase[];
        },
        any
      >({
        path: `/processos-documentos/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags processos-documentos
     * @name ProcessosDocumentosCreate
     * @request POST:/processos-documentos/
     * @secure
     */
    processosDocumentosCreate: (data: DocumentoFase, params: RequestParams = {}) =>
      this.request<DocumentoFase, any>({
        path: `/processos-documentos/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags processos-documentos
     * @name ProcessosDocumentosRead
     * @request GET:/processos-documentos/{id}/
     * @secure
     */
    processosDocumentosRead: (id: number, params: RequestParams = {}) =>
      this.request<DocumentoFase, any>({
        path: `/processos-documentos/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags processos-documentos
     * @name ProcessosDocumentosUpdate
     * @request PUT:/processos-documentos/{id}/
     * @secure
     */
    processosDocumentosUpdate: (id: number, data: DocumentoFase, params: RequestParams = {}) =>
      this.request<DocumentoFase, any>({
        path: `/processos-documentos/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags processos-documentos
     * @name ProcessosDocumentosPartialUpdate
     * @request PATCH:/processos-documentos/{id}/
     * @secure
     */
    processosDocumentosPartialUpdate: (id: number, data: DocumentoFase, params: RequestParams = {}) =>
      this.request<DocumentoFase, any>({
        path: `/processos-documentos/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags processos-documentos
     * @name ProcessosDocumentosDelete
     * @request DELETE:/processos-documentos/{id}/
     * @secure
     */
    processosDocumentosDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/processos-documentos/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  processosEventos = {
    /**
     * No description
     *
     * @tags processos-eventos
     * @name ProcessosEventosList
     * @request GET:/processos-eventos/
     * @secure
     */
    processosEventosList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: Fase[];
        },
        any
      >({
        path: `/processos-eventos/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags processos-eventos
     * @name ProcessosEventosCreate
     * @request POST:/processos-eventos/
     * @secure
     */
    processosEventosCreate: (data: Fase, params: RequestParams = {}) =>
      this.request<Fase, any>({
        path: `/processos-eventos/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags processos-eventos
     * @name ProcessosEventosRead
     * @request GET:/processos-eventos/{id}/
     * @secure
     */
    processosEventosRead: (id: number, params: RequestParams = {}) =>
      this.request<Fase, any>({
        path: `/processos-eventos/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags processos-eventos
     * @name ProcessosEventosUpdate
     * @request PUT:/processos-eventos/{id}/
     * @secure
     */
    processosEventosUpdate: (id: number, data: Fase, params: RequestParams = {}) =>
      this.request<Fase, any>({
        path: `/processos-eventos/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags processos-eventos
     * @name ProcessosEventosPartialUpdate
     * @request PATCH:/processos-eventos/{id}/
     * @secure
     */
    processosEventosPartialUpdate: (id: number, data: Fase, params: RequestParams = {}) =>
      this.request<Fase, any>({
        path: `/processos-eventos/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags processos-eventos
     * @name ProcessosEventosDelete
     * @request DELETE:/processos-eventos/{id}/
     * @secure
     */
    processosEventosDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/processos-eventos/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  processosOutrosParametros = {
    /**
     * No description
     *
     * @tags processos-outros-parametros
     * @name ProcessosOutrosParametrosList
     * @request GET:/processos-outros-parametros/
     * @secure
     */
    processosOutrosParametrosList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: OutroParametro[];
        },
        any
      >({
        path: `/processos-outros-parametros/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags processos-outros-parametros
     * @name ProcessosOutrosParametrosCreate
     * @request POST:/processos-outros-parametros/
     * @secure
     */
    processosOutrosParametrosCreate: (data: OutroParametro, params: RequestParams = {}) =>
      this.request<OutroParametro, any>({
        path: `/processos-outros-parametros/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags processos-outros-parametros
     * @name ProcessosOutrosParametrosRead
     * @request GET:/processos-outros-parametros/{id}/
     * @secure
     */
    processosOutrosParametrosRead: (id: number, params: RequestParams = {}) =>
      this.request<OutroParametro, any>({
        path: `/processos-outros-parametros/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags processos-outros-parametros
     * @name ProcessosOutrosParametrosUpdate
     * @request PUT:/processos-outros-parametros/{id}/
     * @secure
     */
    processosOutrosParametrosUpdate: (id: number, data: OutroParametro, params: RequestParams = {}) =>
      this.request<OutroParametro, any>({
        path: `/processos-outros-parametros/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags processos-outros-parametros
     * @name ProcessosOutrosParametrosPartialUpdate
     * @request PATCH:/processos-outros-parametros/{id}/
     * @secure
     */
    processosOutrosParametrosPartialUpdate: (id: number, data: OutroParametro, params: RequestParams = {}) =>
      this.request<OutroParametro, any>({
        path: `/processos-outros-parametros/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags processos-outros-parametros
     * @name ProcessosOutrosParametrosDelete
     * @request DELETE:/processos-outros-parametros/{id}/
     * @secure
     */
    processosOutrosParametrosDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/processos-outros-parametros/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  processosPartes = {
    /**
     * No description
     *
     * @tags processos-partes
     * @name ProcessosPartesList
     * @request GET:/processos-partes/
     * @secure
     */
    processosPartesList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: ParteProcesso[];
        },
        any
      >({
        path: `/processos-partes/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags processos-partes
     * @name ProcessosPartesCreate
     * @request POST:/processos-partes/
     * @secure
     */
    processosPartesCreate: (data: ParteProcesso, params: RequestParams = {}) =>
      this.request<ParteProcesso, any>({
        path: `/processos-partes/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags processos-partes
     * @name ProcessosPartesRead
     * @request GET:/processos-partes/{id}/
     * @secure
     */
    processosPartesRead: (id: number, params: RequestParams = {}) =>
      this.request<ParteProcesso, any>({
        path: `/processos-partes/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags processos-partes
     * @name ProcessosPartesUpdate
     * @request PUT:/processos-partes/{id}/
     * @secure
     */
    processosPartesUpdate: (id: number, data: ParteProcesso, params: RequestParams = {}) =>
      this.request<ParteProcesso, any>({
        path: `/processos-partes/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags processos-partes
     * @name ProcessosPartesPartialUpdate
     * @request PATCH:/processos-partes/{id}/
     * @secure
     */
    processosPartesPartialUpdate: (id: number, data: ParteProcesso, params: RequestParams = {}) =>
      this.request<ParteProcesso, any>({
        path: `/processos-partes/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags processos-partes
     * @name ProcessosPartesDelete
     * @request DELETE:/processos-partes/{id}/
     * @secure
     */
    processosPartesDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/processos-partes/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  processosPoloDestinatario = {
    /**
     * No description
     *
     * @tags processos-polo-destinatario
     * @name ProcessosPoloDestinatarioList
     * @request GET:/processos-polo-destinatario/
     * @secure
     */
    processosPoloDestinatarioList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: ProcessoPoloDestinatario[];
        },
        any
      >({
        path: `/processos-polo-destinatario/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags processos-polo-destinatario
     * @name ProcessosPoloDestinatarioCreate
     * @request POST:/processos-polo-destinatario/
     * @secure
     */
    processosPoloDestinatarioCreate: (data: ProcessoPoloDestinatario, params: RequestParams = {}) =>
      this.request<ProcessoPoloDestinatario, any>({
        path: `/processos-polo-destinatario/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags processos-polo-destinatario
     * @name ProcessosPoloDestinatarioRead
     * @request GET:/processos-polo-destinatario/{id}/
     * @secure
     */
    processosPoloDestinatarioRead: (id: number, params: RequestParams = {}) =>
      this.request<ProcessoPoloDestinatario, any>({
        path: `/processos-polo-destinatario/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags processos-polo-destinatario
     * @name ProcessosPoloDestinatarioUpdate
     * @request PUT:/processos-polo-destinatario/{id}/
     * @secure
     */
    processosPoloDestinatarioUpdate: (id: number, data: ProcessoPoloDestinatario, params: RequestParams = {}) =>
      this.request<ProcessoPoloDestinatario, any>({
        path: `/processos-polo-destinatario/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags processos-polo-destinatario
     * @name ProcessosPoloDestinatarioPartialUpdate
     * @request PATCH:/processos-polo-destinatario/{id}/
     * @secure
     */
    processosPoloDestinatarioPartialUpdate: (id: number, data: ProcessoPoloDestinatario, params: RequestParams = {}) =>
      this.request<ProcessoPoloDestinatario, any>({
        path: `/processos-polo-destinatario/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags processos-polo-destinatario
     * @name ProcessosPoloDestinatarioDelete
     * @request DELETE:/processos-polo-destinatario/{id}/
     * @secure
     */
    processosPoloDestinatarioDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/processos-polo-destinatario/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  processosTiposDocumento = {
    /**
     * No description
     *
     * @tags processos-tipos-documento
     * @name ProcessosTiposDocumentoList
     * @request GET:/processos-tipos-documento/
     * @secure
     */
    processosTiposDocumentoList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: DocumentoTipo[];
        },
        any
      >({
        path: `/processos-tipos-documento/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags processos-tipos-documento
     * @name ProcessosTiposDocumentoCreate
     * @request POST:/processos-tipos-documento/
     * @secure
     */
    processosTiposDocumentoCreate: (data: DocumentoTipo, params: RequestParams = {}) =>
      this.request<DocumentoTipo, any>({
        path: `/processos-tipos-documento/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags processos-tipos-documento
     * @name ProcessosTiposDocumentoRead
     * @request GET:/processos-tipos-documento/{id}/
     * @secure
     */
    processosTiposDocumentoRead: (id: number, params: RequestParams = {}) =>
      this.request<DocumentoTipo, any>({
        path: `/processos-tipos-documento/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags processos-tipos-documento
     * @name ProcessosTiposDocumentoUpdate
     * @request PUT:/processos-tipos-documento/{id}/
     * @secure
     */
    processosTiposDocumentoUpdate: (id: number, data: DocumentoTipo, params: RequestParams = {}) =>
      this.request<DocumentoTipo, any>({
        path: `/processos-tipos-documento/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags processos-tipos-documento
     * @name ProcessosTiposDocumentoPartialUpdate
     * @request PATCH:/processos-tipos-documento/{id}/
     * @secure
     */
    processosTiposDocumentoPartialUpdate: (id: number, data: DocumentoTipo, params: RequestParams = {}) =>
      this.request<DocumentoTipo, any>({
        path: `/processos-tipos-documento/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags processos-tipos-documento
     * @name ProcessosTiposDocumentoDelete
     * @request DELETE:/processos-tipos-documento/{id}/
     * @secure
     */
    processosTiposDocumentoDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/processos-tipos-documento/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  processosTiposEvento = {
    /**
     * No description
     *
     * @tags processos-tipos-evento
     * @name ProcessosTiposEventoList
     * @request GET:/processos-tipos-evento/
     * @secure
     */
    processosTiposEventoList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: FaseTipo[];
        },
        any
      >({
        path: `/processos-tipos-evento/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags processos-tipos-evento
     * @name ProcessosTiposEventoCreate
     * @request POST:/processos-tipos-evento/
     * @secure
     */
    processosTiposEventoCreate: (data: FaseTipo, params: RequestParams = {}) =>
      this.request<FaseTipo, any>({
        path: `/processos-tipos-evento/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags processos-tipos-evento
     * @name ProcessosTiposEventoRead
     * @request GET:/processos-tipos-evento/{id}/
     * @secure
     */
    processosTiposEventoRead: (id: number, params: RequestParams = {}) =>
      this.request<FaseTipo, any>({
        path: `/processos-tipos-evento/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags processos-tipos-evento
     * @name ProcessosTiposEventoUpdate
     * @request PUT:/processos-tipos-evento/{id}/
     * @secure
     */
    processosTiposEventoUpdate: (id: number, data: FaseTipo, params: RequestParams = {}) =>
      this.request<FaseTipo, any>({
        path: `/processos-tipos-evento/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags processos-tipos-evento
     * @name ProcessosTiposEventoPartialUpdate
     * @request PATCH:/processos-tipos-evento/{id}/
     * @secure
     */
    processosTiposEventoPartialUpdate: (id: number, data: FaseTipo, params: RequestParams = {}) =>
      this.request<FaseTipo, any>({
        path: `/processos-tipos-evento/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags processos-tipos-evento
     * @name ProcessosTiposEventoDelete
     * @request DELETE:/processos-tipos-evento/{id}/
     * @secure
     */
    processosTiposEventoDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/processos-tipos-evento/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  processosTiposParte = {
    /**
     * @description Retorna uma lista dos tipos de parte
     *
     * @tags processos-tipos-parte
     * @name ProcessosTiposParteList
     * @request GET:/processos-tipos-parte/
     * @secure
     */
    processosTiposParteList: (params: RequestParams = {}) =>
      this.request<GenericIdNome[], any>({
        path: `/processos-tipos-parte/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  processos = {
    /**
     * No description
     *
     * @tags processos
     * @name ProcessosList
     * @request GET:/processos/
     * @secure
     */
    processosList: (
      query?: {
        data_inicial?: string;
        data_final?: string;
        defensor?: string;
        defensoria?: string;
        ativo?: string;
        incluir_partes?: string;
        filtro?: string;
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: Processo[];
        },
        any
      >({
        path: `/processos/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags processos
     * @name ProcessosCreate
     * @request POST:/processos/
     * @secure
     */
    processosCreate: (data: ProcessoCreate, params: RequestParams = {}) =>
      this.request<ProcessoCreate, any>({
        path: `/processos/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags processos
     * @name ProcessosRead
     * @request GET:/processos/{id}/
     * @secure
     */
    processosRead: (id: number, params: RequestParams = {}) =>
      this.request<Processo, any>({
        path: `/processos/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags processos
     * @name ProcessosUpdate
     * @request PUT:/processos/{id}/
     * @secure
     */
    processosUpdate: (id: number, data: ProcessoCreate, params: RequestParams = {}) =>
      this.request<ProcessoCreate, any>({
        path: `/processos/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags processos
     * @name ProcessosPartialUpdate
     * @request PATCH:/processos/{id}/
     * @secure
     */
    processosPartialUpdate: (id: number, data: ProcessoCreate, params: RequestParams = {}) =>
      this.request<ProcessoCreate, any>({
        path: `/processos/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags processos
     * @name ProcessosDelete
     * @request DELETE:/processos/{id}/
     * @secure
     */
    processosDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/processos/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  profissoes = {
    /**
     * No description
     *
     * @tags profissoes
     * @name ProfissoesList
     * @request GET:/profissoes/
     * @secure
     */
    profissoesList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: Profissao[];
        },
        any
      >({
        path: `/profissoes/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags profissoes
     * @name ProfissoesCreate
     * @request POST:/profissoes/
     * @secure
     */
    profissoesCreate: (data: Profissao, params: RequestParams = {}) =>
      this.request<Profissao, any>({
        path: `/profissoes/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags profissoes
     * @name ProfissoesRead
     * @request GET:/profissoes/{id}/
     * @secure
     */
    profissoesRead: (id: number, params: RequestParams = {}) =>
      this.request<Profissao, any>({
        path: `/profissoes/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags profissoes
     * @name ProfissoesUpdate
     * @request PUT:/profissoes/{id}/
     * @secure
     */
    profissoesUpdate: (id: number, data: Profissao, params: RequestParams = {}) =>
      this.request<Profissao, any>({
        path: `/profissoes/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags profissoes
     * @name ProfissoesPartialUpdate
     * @request PATCH:/profissoes/{id}/
     * @secure
     */
    profissoesPartialUpdate: (id: number, data: Profissao, params: RequestParams = {}) =>
      this.request<Profissao, any>({
        path: `/profissoes/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags profissoes
     * @name ProfissoesDelete
     * @request DELETE:/profissoes/{id}/
     * @secure
     */
    profissoesDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/profissoes/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  propacsDocumentos = {
    /**
     * No description
     *
     * @tags propacs-documentos
     * @name PropacsDocumentosList
     * @request GET:/propacs-documentos/
     * @secure
     */
    propacsDocumentosList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: DocumentoPropac[];
        },
        any
      >({
        path: `/propacs-documentos/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags propacs-documentos
     * @name PropacsDocumentosCreate
     * @request POST:/propacs-documentos/
     * @secure
     */
    propacsDocumentosCreate: (data: DocumentoPropac, params: RequestParams = {}) =>
      this.request<DocumentoPropac, any>({
        path: `/propacs-documentos/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags propacs-documentos
     * @name PropacsDocumentosRead
     * @request GET:/propacs-documentos/{id}/
     * @secure
     */
    propacsDocumentosRead: (id: number, params: RequestParams = {}) =>
      this.request<DocumentoPropac, any>({
        path: `/propacs-documentos/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags propacs-documentos
     * @name PropacsDocumentosUpdate
     * @request PUT:/propacs-documentos/{id}/
     * @secure
     */
    propacsDocumentosUpdate: (id: number, data: DocumentoPropac, params: RequestParams = {}) =>
      this.request<DocumentoPropac, any>({
        path: `/propacs-documentos/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags propacs-documentos
     * @name PropacsDocumentosPartialUpdate
     * @request PATCH:/propacs-documentos/{id}/
     * @secure
     */
    propacsDocumentosPartialUpdate: (id: number, data: DocumentoPropac, params: RequestParams = {}) =>
      this.request<DocumentoPropac, any>({
        path: `/propacs-documentos/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags propacs-documentos
     * @name PropacsDocumentosDelete
     * @request DELETE:/propacs-documentos/{id}/
     * @secure
     */
    propacsDocumentosDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/propacs-documentos/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  propacsEventos = {
    /**
     * No description
     *
     * @tags propacs-eventos
     * @name PropacsEventosList
     * @request GET:/propacs-eventos/
     * @secure
     */
    propacsEventosList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: PropacMovimento[];
        },
        any
      >({
        path: `/propacs-eventos/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags propacs-eventos
     * @name PropacsEventosCreate
     * @request POST:/propacs-eventos/
     * @secure
     */
    propacsEventosCreate: (data: PropacMovimento, params: RequestParams = {}) =>
      this.request<PropacMovimento, any>({
        path: `/propacs-eventos/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags propacs-eventos
     * @name PropacsEventosRead
     * @request GET:/propacs-eventos/{id}/
     * @secure
     */
    propacsEventosRead: (id: number, params: RequestParams = {}) =>
      this.request<PropacMovimento, any>({
        path: `/propacs-eventos/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags propacs-eventos
     * @name PropacsEventosUpdate
     * @request PUT:/propacs-eventos/{id}/
     * @secure
     */
    propacsEventosUpdate: (id: number, data: PropacMovimento, params: RequestParams = {}) =>
      this.request<PropacMovimento, any>({
        path: `/propacs-eventos/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags propacs-eventos
     * @name PropacsEventosPartialUpdate
     * @request PATCH:/propacs-eventos/{id}/
     * @secure
     */
    propacsEventosPartialUpdate: (id: number, data: PropacMovimento, params: RequestParams = {}) =>
      this.request<PropacMovimento, any>({
        path: `/propacs-eventos/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags propacs-eventos
     * @name PropacsEventosDelete
     * @request DELETE:/propacs-eventos/{id}/
     * @secure
     */
    propacsEventosDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/propacs-eventos/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  propacsSituacoes = {
    /**
     * No description
     *
     * @tags propacs-situacoes
     * @name PropacsSituacoesList
     * @request GET:/propacs-situacoes/
     * @secure
     */
    propacsSituacoesList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: SituacaoProcedimento[];
        },
        any
      >({
        path: `/propacs-situacoes/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags propacs-situacoes
     * @name PropacsSituacoesCreate
     * @request POST:/propacs-situacoes/
     * @secure
     */
    propacsSituacoesCreate: (data: SituacaoProcedimento, params: RequestParams = {}) =>
      this.request<SituacaoProcedimento, any>({
        path: `/propacs-situacoes/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags propacs-situacoes
     * @name PropacsSituacoesRead
     * @request GET:/propacs-situacoes/{id}/
     * @secure
     */
    propacsSituacoesRead: (id: number, params: RequestParams = {}) =>
      this.request<SituacaoProcedimento, any>({
        path: `/propacs-situacoes/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags propacs-situacoes
     * @name PropacsSituacoesUpdate
     * @request PUT:/propacs-situacoes/{id}/
     * @secure
     */
    propacsSituacoesUpdate: (id: number, data: SituacaoProcedimento, params: RequestParams = {}) =>
      this.request<SituacaoProcedimento, any>({
        path: `/propacs-situacoes/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags propacs-situacoes
     * @name PropacsSituacoesPartialUpdate
     * @request PATCH:/propacs-situacoes/{id}/
     * @secure
     */
    propacsSituacoesPartialUpdate: (id: number, data: SituacaoProcedimento, params: RequestParams = {}) =>
      this.request<SituacaoProcedimento, any>({
        path: `/propacs-situacoes/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags propacs-situacoes
     * @name PropacsSituacoesDelete
     * @request DELETE:/propacs-situacoes/{id}/
     * @secure
     */
    propacsSituacoesDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/propacs-situacoes/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  propacsTiposDocumento = {
    /**
     * No description
     *
     * @tags propacs-tipos-documento
     * @name PropacsTiposDocumentoList
     * @request GET:/propacs-tipos-documento/
     * @secure
     */
    propacsTiposDocumentoList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: TipoAnexoDocumentoPropac[];
        },
        any
      >({
        path: `/propacs-tipos-documento/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags propacs-tipos-documento
     * @name PropacsTiposDocumentoCreate
     * @request POST:/propacs-tipos-documento/
     * @secure
     */
    propacsTiposDocumentoCreate: (data: TipoAnexoDocumentoPropac, params: RequestParams = {}) =>
      this.request<TipoAnexoDocumentoPropac, any>({
        path: `/propacs-tipos-documento/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags propacs-tipos-documento
     * @name PropacsTiposDocumentoRead
     * @request GET:/propacs-tipos-documento/{id}/
     * @secure
     */
    propacsTiposDocumentoRead: (id: number, params: RequestParams = {}) =>
      this.request<TipoAnexoDocumentoPropac, any>({
        path: `/propacs-tipos-documento/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags propacs-tipos-documento
     * @name PropacsTiposDocumentoUpdate
     * @request PUT:/propacs-tipos-documento/{id}/
     * @secure
     */
    propacsTiposDocumentoUpdate: (id: number, data: TipoAnexoDocumentoPropac, params: RequestParams = {}) =>
      this.request<TipoAnexoDocumentoPropac, any>({
        path: `/propacs-tipos-documento/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags propacs-tipos-documento
     * @name PropacsTiposDocumentoPartialUpdate
     * @request PATCH:/propacs-tipos-documento/{id}/
     * @secure
     */
    propacsTiposDocumentoPartialUpdate: (id: number, data: TipoAnexoDocumentoPropac, params: RequestParams = {}) =>
      this.request<TipoAnexoDocumentoPropac, any>({
        path: `/propacs-tipos-documento/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags propacs-tipos-documento
     * @name PropacsTiposDocumentoDelete
     * @request DELETE:/propacs-tipos-documento/{id}/
     * @secure
     */
    propacsTiposDocumentoDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/propacs-tipos-documento/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  propacsTiposEvento = {
    /**
     * No description
     *
     * @tags propacs-tipos-evento
     * @name PropacsTiposEventoList
     * @request GET:/propacs-tipos-evento/
     * @secure
     */
    propacsTiposEventoList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: MovimentoTipo[];
        },
        any
      >({
        path: `/propacs-tipos-evento/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags propacs-tipos-evento
     * @name PropacsTiposEventoCreate
     * @request POST:/propacs-tipos-evento/
     * @secure
     */
    propacsTiposEventoCreate: (data: MovimentoTipo, params: RequestParams = {}) =>
      this.request<MovimentoTipo, any>({
        path: `/propacs-tipos-evento/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags propacs-tipos-evento
     * @name PropacsTiposEventoRead
     * @request GET:/propacs-tipos-evento/{id}/
     * @secure
     */
    propacsTiposEventoRead: (id: number, params: RequestParams = {}) =>
      this.request<MovimentoTipo, any>({
        path: `/propacs-tipos-evento/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags propacs-tipos-evento
     * @name PropacsTiposEventoUpdate
     * @request PUT:/propacs-tipos-evento/{id}/
     * @secure
     */
    propacsTiposEventoUpdate: (id: number, data: MovimentoTipo, params: RequestParams = {}) =>
      this.request<MovimentoTipo, any>({
        path: `/propacs-tipos-evento/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags propacs-tipos-evento
     * @name PropacsTiposEventoPartialUpdate
     * @request PATCH:/propacs-tipos-evento/{id}/
     * @secure
     */
    propacsTiposEventoPartialUpdate: (id: number, data: MovimentoTipo, params: RequestParams = {}) =>
      this.request<MovimentoTipo, any>({
        path: `/propacs-tipos-evento/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags propacs-tipos-evento
     * @name PropacsTiposEventoDelete
     * @request DELETE:/propacs-tipos-evento/{id}/
     * @secure
     */
    propacsTiposEventoDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/propacs-tipos-evento/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  propacs = {
    /**
     * No description
     *
     * @tags propacs
     * @name PropacsList
     * @request GET:/propacs/
     * @secure
     */
    propacsList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: PropacProcedimento[];
        },
        any
      >({
        path: `/propacs/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags propacs
     * @name PropacsCreate
     * @request POST:/propacs/
     * @secure
     */
    propacsCreate: (data: PropacProcedimento, params: RequestParams = {}) =>
      this.request<PropacProcedimento, any>({
        path: `/propacs/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags propacs
     * @name PropacsRead
     * @request GET:/propacs/{id}/
     * @secure
     */
    propacsRead: (id: number, params: RequestParams = {}) =>
      this.request<PropacProcedimento, any>({
        path: `/propacs/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags propacs
     * @name PropacsUpdate
     * @request PUT:/propacs/{id}/
     * @secure
     */
    propacsUpdate: (id: number, data: PropacProcedimento, params: RequestParams = {}) =>
      this.request<PropacProcedimento, any>({
        path: `/propacs/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags propacs
     * @name PropacsPartialUpdate
     * @request PATCH:/propacs/{id}/
     * @secure
     */
    propacsPartialUpdate: (id: number, data: PropacProcedimento, params: RequestParams = {}) =>
      this.request<PropacProcedimento, any>({
        path: `/propacs/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags propacs
     * @name PropacsDelete
     * @request DELETE:/propacs/{id}/
     * @secure
     */
    propacsDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/propacs/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  qualificacoesAssuntos = {
    /**
     * No description
     *
     * @tags qualificacoes-assuntos
     * @name QualificacoesAssuntosList
     * @request GET:/qualificacoes-assuntos/
     * @secure
     */
    qualificacoesAssuntosList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: QualificacaoAssunto[];
        },
        any
      >({
        path: `/qualificacoes-assuntos/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags qualificacoes-assuntos
     * @name QualificacoesAssuntosCreate
     * @request POST:/qualificacoes-assuntos/
     * @secure
     */
    qualificacoesAssuntosCreate: (data: QualificacaoAssunto, params: RequestParams = {}) =>
      this.request<QualificacaoAssunto, any>({
        path: `/qualificacoes-assuntos/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags qualificacoes-assuntos
     * @name QualificacoesAssuntosRead
     * @request GET:/qualificacoes-assuntos/{id}/
     * @secure
     */
    qualificacoesAssuntosRead: (id: number, params: RequestParams = {}) =>
      this.request<QualificacaoAssunto, any>({
        path: `/qualificacoes-assuntos/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags qualificacoes-assuntos
     * @name QualificacoesAssuntosUpdate
     * @request PUT:/qualificacoes-assuntos/{id}/
     * @secure
     */
    qualificacoesAssuntosUpdate: (id: number, data: QualificacaoAssunto, params: RequestParams = {}) =>
      this.request<QualificacaoAssunto, any>({
        path: `/qualificacoes-assuntos/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags qualificacoes-assuntos
     * @name QualificacoesAssuntosPartialUpdate
     * @request PATCH:/qualificacoes-assuntos/{id}/
     * @secure
     */
    qualificacoesAssuntosPartialUpdate: (id: number, data: QualificacaoAssunto, params: RequestParams = {}) =>
      this.request<QualificacaoAssunto, any>({
        path: `/qualificacoes-assuntos/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags qualificacoes-assuntos
     * @name QualificacoesAssuntosDelete
     * @request DELETE:/qualificacoes-assuntos/{id}/
     * @secure
     */
    qualificacoesAssuntosDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/qualificacoes-assuntos/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  qualificacoes = {
    /**
     * No description
     *
     * @tags qualificacoes
     * @name QualificacoesList
     * @request GET:/qualificacoes/
     * @secure
     */
    qualificacoesList: (
      query?: {
        disponivel_para_agendamento_via_app?: string;
        possui_orgao_encaminhamento?: string;
        exibir_em_atendimentos?: string;
        orgao_encaminhamento?: number;
        tipo?: string;
        penal?: string;
        area?: number;
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: Qualificacao[];
        },
        any
      >({
        path: `/qualificacoes/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags qualificacoes
     * @name QualificacoesCreate
     * @request POST:/qualificacoes/
     * @secure
     */
    qualificacoesCreate: (data: Qualificacao, params: RequestParams = {}) =>
      this.request<Qualificacao, any>({
        path: `/qualificacoes/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags qualificacoes
     * @name QualificacoesRead
     * @request GET:/qualificacoes/{id}/
     * @secure
     */
    qualificacoesRead: (id: number, params: RequestParams = {}) =>
      this.request<Qualificacao, any>({
        path: `/qualificacoes/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags qualificacoes
     * @name QualificacoesUpdate
     * @request PUT:/qualificacoes/{id}/
     * @secure
     */
    qualificacoesUpdate: (id: number, data: Qualificacao, params: RequestParams = {}) =>
      this.request<Qualificacao, any>({
        path: `/qualificacoes/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags qualificacoes
     * @name QualificacoesPartialUpdate
     * @request PATCH:/qualificacoes/{id}/
     * @secure
     */
    qualificacoesPartialUpdate: (id: number, data: Qualificacao, params: RequestParams = {}) =>
      this.request<Qualificacao, any>({
        path: `/qualificacoes/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags qualificacoes
     * @name QualificacoesDelete
     * @request DELETE:/qualificacoes/{id}/
     * @secure
     */
    qualificacoesDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/qualificacoes/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  redistribuirAviso = {
    /**
     * No description
     *
     * @tags redistribuir-aviso
     * @name RedistribuirAvisoCreate
     * @request POST:/redistribuir-aviso/
     * @secure
     */
    redistribuirAvisoCreate: (data: RedistribuirAviso, params: RequestParams = {}) =>
      this.request<RedistribuirAviso, any>({
        path: `/redistribuir-aviso/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  relatorios = {
    /**
     * No description
     *
     * @tags relatorios
     * @name RelatoriosList
     * @request GET:/relatorios/
     * @secure
     */
    relatoriosList: (
      query?: {
        titulo?: string;
        tipo?: string;
        locais?: string;
        papeis?: string;
        ativo?: string;
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: Relatorio[];
        },
        any
      >({
        path: `/relatorios/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags relatorios
     * @name RelatoriosCreate
     * @request POST:/relatorios/
     * @secure
     */
    relatoriosCreate: (data: Relatorio, params: RequestParams = {}) =>
      this.request<Relatorio, any>({
        path: `/relatorios/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags relatorios
     * @name RelatoriosRead
     * @request GET:/relatorios/{id}/
     * @secure
     */
    relatoriosRead: (id: number, params: RequestParams = {}) =>
      this.request<Relatorio, any>({
        path: `/relatorios/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags relatorios
     * @name RelatoriosUpdate
     * @request PUT:/relatorios/{id}/
     * @secure
     */
    relatoriosUpdate: (id: number, data: Relatorio, params: RequestParams = {}) =>
      this.request<Relatorio, any>({
        path: `/relatorios/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags relatorios
     * @name RelatoriosPartialUpdate
     * @request PATCH:/relatorios/{id}/
     * @secure
     */
    relatoriosPartialUpdate: (id: number, data: Relatorio, params: RequestParams = {}) =>
      this.request<Relatorio, any>({
        path: `/relatorios/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags relatorios
     * @name RelatoriosDelete
     * @request DELETE:/relatorios/{id}/
     * @secure
     */
    relatoriosDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/relatorios/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  remicoes = {
    /**
     * No description
     *
     * @tags remicoes
     * @name RemicoesList
     * @request GET:/remicoes/
     * @secure
     */
    remicoesList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: Remissao[];
        },
        any
      >({
        path: `/remicoes/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags remicoes
     * @name RemicoesCreate
     * @request POST:/remicoes/
     * @secure
     */
    remicoesCreate: (data: Remissao, params: RequestParams = {}) =>
      this.request<Remissao, any>({
        path: `/remicoes/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags remicoes
     * @name RemicoesRead
     * @request GET:/remicoes/{id}/
     * @secure
     */
    remicoesRead: (id: number, params: RequestParams = {}) =>
      this.request<Remissao, any>({
        path: `/remicoes/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags remicoes
     * @name RemicoesUpdate
     * @request PUT:/remicoes/{id}/
     * @secure
     */
    remicoesUpdate: (id: number, data: Remissao, params: RequestParams = {}) =>
      this.request<Remissao, any>({
        path: `/remicoes/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags remicoes
     * @name RemicoesPartialUpdate
     * @request PATCH:/remicoes/{id}/
     * @secure
     */
    remicoesPartialUpdate: (id: number, data: Remissao, params: RequestParams = {}) =>
      this.request<Remissao, any>({
        path: `/remicoes/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags remicoes
     * @name RemicoesDelete
     * @request DELETE:/remicoes/{id}/
     * @secure
     */
    remicoesDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/remicoes/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  rendas = {
    /**
     * No description
     *
     * @tags rendas
     * @name RendasList
     * @request GET:/rendas/
     * @secure
     */
    rendasList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: Renda[];
        },
        any
      >({
        path: `/rendas/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags rendas
     * @name RendasCreate
     * @request POST:/rendas/
     * @secure
     */
    rendasCreate: (data: Renda, params: RequestParams = {}) =>
      this.request<Renda, any>({
        path: `/rendas/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags rendas
     * @name RendasRead
     * @request GET:/rendas/{id}/
     * @secure
     */
    rendasRead: (id: number, params: RequestParams = {}) =>
      this.request<Renda, any>({
        path: `/rendas/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags rendas
     * @name RendasUpdate
     * @request PUT:/rendas/{id}/
     * @secure
     */
    rendasUpdate: (id: number, data: Renda, params: RequestParams = {}) =>
      this.request<Renda, any>({
        path: `/rendas/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags rendas
     * @name RendasPartialUpdate
     * @request PATCH:/rendas/{id}/
     * @secure
     */
    rendasPartialUpdate: (id: number, data: Renda, params: RequestParams = {}) =>
      this.request<Renda, any>({
        path: `/rendas/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags rendas
     * @name RendasDelete
     * @request DELETE:/rendas/{id}/
     * @secure
     */
    rendasDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/rendas/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  restricoesPrestacaoDeServico = {
    /**
     * No description
     *
     * @tags restricoes-prestacao-de-servico
     * @name RestricoesPrestacaoDeServicoList
     * @request GET:/restricoes-prestacao-de-servico/
     * @secure
     */
    restricoesPrestacaoDeServicoList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: RestricaoPrestacaoServico[];
        },
        any
      >({
        path: `/restricoes-prestacao-de-servico/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags restricoes-prestacao-de-servico
     * @name RestricoesPrestacaoDeServicoCreate
     * @request POST:/restricoes-prestacao-de-servico/
     * @secure
     */
    restricoesPrestacaoDeServicoCreate: (data: RestricaoPrestacaoServico, params: RequestParams = {}) =>
      this.request<RestricaoPrestacaoServico, any>({
        path: `/restricoes-prestacao-de-servico/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags restricoes-prestacao-de-servico
     * @name RestricoesPrestacaoDeServicoRead
     * @request GET:/restricoes-prestacao-de-servico/{id}/
     * @secure
     */
    restricoesPrestacaoDeServicoRead: (id: number, params: RequestParams = {}) =>
      this.request<RestricaoPrestacaoServico, any>({
        path: `/restricoes-prestacao-de-servico/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags restricoes-prestacao-de-servico
     * @name RestricoesPrestacaoDeServicoUpdate
     * @request PUT:/restricoes-prestacao-de-servico/{id}/
     * @secure
     */
    restricoesPrestacaoDeServicoUpdate: (id: number, data: RestricaoPrestacaoServico, params: RequestParams = {}) =>
      this.request<RestricaoPrestacaoServico, any>({
        path: `/restricoes-prestacao-de-servico/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags restricoes-prestacao-de-servico
     * @name RestricoesPrestacaoDeServicoPartialUpdate
     * @request PATCH:/restricoes-prestacao-de-servico/{id}/
     * @secure
     */
    restricoesPrestacaoDeServicoPartialUpdate: (
      id: number,
      data: RestricaoPrestacaoServico,
      params: RequestParams = {},
    ) =>
      this.request<RestricaoPrestacaoServico, any>({
        path: `/restricoes-prestacao-de-servico/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags restricoes-prestacao-de-servico
     * @name RestricoesPrestacaoDeServicoDelete
     * @request DELETE:/restricoes-prestacao-de-servico/{id}/
     * @secure
     */
    restricoesPrestacaoDeServicoDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/restricoes-prestacao-de-servico/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  salarios = {
    /**
     * No description
     *
     * @tags salarios
     * @name SalariosList
     * @request GET:/salarios/
     * @secure
     */
    salariosList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: Salario[];
        },
        any
      >({
        path: `/salarios/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags salarios
     * @name SalariosRead
     * @request GET:/salarios/{id}/
     * @secure
     */
    salariosRead: (id: number, params: RequestParams = {}) =>
      this.request<Salario, any>({
        path: `/salarios/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  semoventes = {
    /**
     * No description
     *
     * @tags semoventes
     * @name SemoventesList
     * @request GET:/semoventes/
     * @secure
     */
    semoventesList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: Semovente[];
        },
        any
      >({
        path: `/semoventes/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags semoventes
     * @name SemoventesCreate
     * @request POST:/semoventes/
     * @secure
     */
    semoventesCreate: (data: Semovente, params: RequestParams = {}) =>
      this.request<Semovente, any>({
        path: `/semoventes/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags semoventes
     * @name SemoventesRead
     * @request GET:/semoventes/{id}/
     * @secure
     */
    semoventesRead: (id: number, params: RequestParams = {}) =>
      this.request<Semovente, any>({
        path: `/semoventes/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags semoventes
     * @name SemoventesUpdate
     * @request PUT:/semoventes/{id}/
     * @secure
     */
    semoventesUpdate: (id: number, data: Semovente, params: RequestParams = {}) =>
      this.request<Semovente, any>({
        path: `/semoventes/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags semoventes
     * @name SemoventesPartialUpdate
     * @request PATCH:/semoventes/{id}/
     * @secure
     */
    semoventesPartialUpdate: (id: number, data: Semovente, params: RequestParams = {}) =>
      this.request<Semovente, any>({
        path: `/semoventes/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags semoventes
     * @name SemoventesDelete
     * @request DELETE:/semoventes/{id}/
     * @secure
     */
    semoventesDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/semoventes/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  servidores = {
    /**
     * No description
     *
     * @tags servidores
     * @name ServidoresList
     * @request GET:/servidores/
     * @secure
     */
    servidoresList: (
      query?: {
        id?: number;
        cpf?: string;
        comarca?: string;
        nome?: string;
        papel?: string;
        matricula?: string;
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: ServidorV2[];
        },
        any
      >({
        path: `/servidores/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags servidores
     * @name ServidoresRead
     * @request GET:/servidores/{id}/
     * @secure
     */
    servidoresRead: (id: number, params: RequestParams = {}) =>
      this.request<ServidorV2, any>({
        path: `/servidores/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  sistemasWebservice = {
    /**
     * No description
     *
     * @tags sistemas-webservice
     * @name SistemasWebserviceList
     * @request GET:/sistemas-webservice/
     * @secure
     */
    sistemasWebserviceList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: SistemaWebService[];
        },
        any
      >({
        path: `/sistemas-webservice/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags sistemas-webservice
     * @name SistemasWebserviceRead
     * @request GET:/sistemas-webservice/{id}/
     * @secure
     */
    sistemasWebserviceRead: (id: number, params: RequestParams = {}) =>
      this.request<SistemaWebService, any>({
        path: `/sistemas-webservice/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  situacoes = {
    /**
     * No description
     *
     * @tags situacoes
     * @name SituacoesList
     * @request GET:/situacoes/
     * @secure
     */
    situacoesList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: Situacao[];
        },
        any
      >({
        path: `/situacoes/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags situacoes
     * @name SituacoesCreate
     * @request POST:/situacoes/
     * @secure
     */
    situacoesCreate: (data: Situacao, params: RequestParams = {}) =>
      this.request<Situacao, any>({
        path: `/situacoes/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags situacoes
     * @name SituacoesRead
     * @request GET:/situacoes/{id}/
     * @secure
     */
    situacoesRead: (id: number, params: RequestParams = {}) =>
      this.request<Situacao, any>({
        path: `/situacoes/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags situacoes
     * @name SituacoesUpdate
     * @request PUT:/situacoes/{id}/
     * @secure
     */
    situacoesUpdate: (id: number, data: Situacao, params: RequestParams = {}) =>
      this.request<Situacao, any>({
        path: `/situacoes/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags situacoes
     * @name SituacoesPartialUpdate
     * @request PATCH:/situacoes/{id}/
     * @secure
     */
    situacoesPartialUpdate: (id: number, data: Situacao, params: RequestParams = {}) =>
      this.request<Situacao, any>({
        path: `/situacoes/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags situacoes
     * @name SituacoesDelete
     * @request DELETE:/situacoes/{id}/
     * @secure
     */
    situacoesDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/situacoes/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  solicitacoesDocumentos = {
    /**
     * No description
     *
     * @tags solicitacoes-documentos
     * @name SolicitacoesDocumentosCreate
     * @request POST:/solicitacoes-documentos/
     * @secure
     */
    solicitacoesDocumentosCreate: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/solicitacoes-documentos/`,
        method: "POST",
        secure: true,
        ...params,
      }),
  };
  solturas = {
    /**
     * No description
     *
     * @tags solturas
     * @name SolturasList
     * @request GET:/solturas/
     * @secure
     */
    solturasList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: Soltura[];
        },
        any
      >({
        path: `/solturas/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags solturas
     * @name SolturasCreate
     * @request POST:/solturas/
     * @secure
     */
    solturasCreate: (data: Soltura, params: RequestParams = {}) =>
      this.request<Soltura, any>({
        path: `/solturas/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags solturas
     * @name SolturasRead
     * @request GET:/solturas/{id}/
     * @secure
     */
    solturasRead: (id: number, params: RequestParams = {}) =>
      this.request<Soltura, any>({
        path: `/solturas/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags solturas
     * @name SolturasUpdate
     * @request PUT:/solturas/{id}/
     * @secure
     */
    solturasUpdate: (id: number, data: Soltura, params: RequestParams = {}) =>
      this.request<Soltura, any>({
        path: `/solturas/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags solturas
     * @name SolturasPartialUpdate
     * @request PATCH:/solturas/{id}/
     * @secure
     */
    solturasPartialUpdate: (id: number, data: Soltura, params: RequestParams = {}) =>
      this.request<Soltura, any>({
        path: `/solturas/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags solturas
     * @name SolturasDelete
     * @request DELETE:/solturas/{id}/
     * @secure
     */
    solturasDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/solturas/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  tarefas = {
    /**
     * No description
     *
     * @tags tarefas
     * @name TarefasList
     * @request GET:/tarefas/
     * @secure
     */
    tarefasList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: Tarefa[];
        },
        any
      >({
        path: `/tarefas/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags tarefas
     * @name TarefasCreate
     * @request POST:/tarefas/
     * @secure
     */
    tarefasCreate: (data: Tarefa, params: RequestParams = {}) =>
      this.request<Tarefa, any>({
        path: `/tarefas/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags tarefas
     * @name TarefasRead
     * @request GET:/tarefas/{id}/
     * @secure
     */
    tarefasRead: (id: number, params: RequestParams = {}) =>
      this.request<Tarefa, any>({
        path: `/tarefas/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags tarefas
     * @name TarefasUpdate
     * @request PUT:/tarefas/{id}/
     * @secure
     */
    tarefasUpdate: (id: number, data: Tarefa, params: RequestParams = {}) =>
      this.request<Tarefa, any>({
        path: `/tarefas/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags tarefas
     * @name TarefasPartialUpdate
     * @request PATCH:/tarefas/{id}/
     * @secure
     */
    tarefasPartialUpdate: (id: number, data: Tarefa, params: RequestParams = {}) =>
      this.request<Tarefa, any>({
        path: `/tarefas/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags tarefas
     * @name TarefasDelete
     * @request DELETE:/tarefas/{id}/
     * @secure
     */
    tarefasDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/tarefas/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  telefones = {
    /**
     * No description
     *
     * @tags telefones
     * @name TelefonesList
     * @request GET:/telefones/
     * @secure
     */
    telefonesList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: ContribTelefone[];
        },
        any
      >({
        path: `/telefones/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags telefones
     * @name TelefonesCreate
     * @request POST:/telefones/
     * @secure
     */
    telefonesCreate: (data: ContribTelefone, params: RequestParams = {}) =>
      this.request<ContribTelefone, any>({
        path: `/telefones/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags telefones
     * @name TelefonesRead
     * @request GET:/telefones/{id}/
     * @secure
     */
    telefonesRead: (id: number, params: RequestParams = {}) =>
      this.request<ContribTelefone, any>({
        path: `/telefones/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags telefones
     * @name TelefonesUpdate
     * @request PUT:/telefones/{id}/
     * @secure
     */
    telefonesUpdate: (id: number, data: ContribTelefone, params: RequestParams = {}) =>
      this.request<ContribTelefone, any>({
        path: `/telefones/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags telefones
     * @name TelefonesPartialUpdate
     * @request PATCH:/telefones/{id}/
     * @secure
     */
    telefonesPartialUpdate: (id: number, data: ContribTelefone, params: RequestParams = {}) =>
      this.request<ContribTelefone, any>({
        path: `/telefones/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags telefones
     * @name TelefonesDelete
     * @request DELETE:/telefones/{id}/
     * @secure
     */
    telefonesDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/telefones/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  termosRespostas = {
    /**
     * No description
     *
     * @tags termos-respostas
     * @name TermosRespostasList
     * @request GET:/termos-respostas/
     * @secure
     */
    termosRespostasList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: TermoResposta[];
        },
        any
      >({
        path: `/termos-respostas/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags termos-respostas
     * @name TermosRespostasCreate
     * @request POST:/termos-respostas/
     * @secure
     */
    termosRespostasCreate: (data: TermoResposta, params: RequestParams = {}) =>
      this.request<TermoResposta, any>({
        path: `/termos-respostas/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags termos-respostas
     * @name TermosRespostasRead
     * @request GET:/termos-respostas/{id}/
     * @secure
     */
    termosRespostasRead: (id: number, params: RequestParams = {}) =>
      this.request<TermoResposta, any>({
        path: `/termos-respostas/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags termos-respostas
     * @name TermosRespostasUpdate
     * @request PUT:/termos-respostas/{id}/
     * @secure
     */
    termosRespostasUpdate: (id: number, data: TermoResposta, params: RequestParams = {}) =>
      this.request<TermoResposta, any>({
        path: `/termos-respostas/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags termos-respostas
     * @name TermosRespostasPartialUpdate
     * @request PATCH:/termos-respostas/{id}/
     * @secure
     */
    termosRespostasPartialUpdate: (id: number, data: TermoResposta, params: RequestParams = {}) =>
      this.request<TermoResposta, any>({
        path: `/termos-respostas/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags termos-respostas
     * @name TermosRespostasDelete
     * @request DELETE:/termos-respostas/{id}/
     * @secure
     */
    termosRespostasDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/termos-respostas/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  termos = {
    /**
     * No description
     *
     * @tags termos
     * @name TermosList
     * @request GET:/termos/
     * @secure
     */
    termosList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: Termo[];
        },
        any
      >({
        path: `/termos/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags termos
     * @name TermosCreate
     * @request POST:/termos/
     * @secure
     */
    termosCreate: (data: Termo, params: RequestParams = {}) =>
      this.request<Termo, any>({
        path: `/termos/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags termos
     * @name TermosRead
     * @request GET:/termos/{id}/
     * @secure
     */
    termosRead: (id: number, params: RequestParams = {}) =>
      this.request<Termo, any>({
        path: `/termos/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags termos
     * @name TermosUpdate
     * @request PUT:/termos/{id}/
     * @secure
     */
    termosUpdate: (id: number, data: Termo, params: RequestParams = {}) =>
      this.request<Termo, any>({
        path: `/termos/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags termos
     * @name TermosPartialUpdate
     * @request PATCH:/termos/{id}/
     * @secure
     */
    termosPartialUpdate: (id: number, data: Termo, params: RequestParams = {}) =>
      this.request<Termo, any>({
        path: `/termos/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags termos
     * @name TermosDelete
     * @request DELETE:/termos/{id}/
     * @secure
     */
    termosDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/termos/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  tipificacoes = {
    /**
     * No description
     *
     * @tags tipificacoes
     * @name TipificacoesList
     * @request GET:/tipificacoes/
     * @secure
     */
    tipificacoesList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: Tipificacao[];
        },
        any
      >({
        path: `/tipificacoes/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags tipificacoes
     * @name TipificacoesCreate
     * @request POST:/tipificacoes/
     * @secure
     */
    tipificacoesCreate: (data: Tipificacao, params: RequestParams = {}) =>
      this.request<Tipificacao, any>({
        path: `/tipificacoes/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags tipificacoes
     * @name TipificacoesRead
     * @request GET:/tipificacoes/{id}/
     * @secure
     */
    tipificacoesRead: (id: number, params: RequestParams = {}) =>
      this.request<Tipificacao, any>({
        path: `/tipificacoes/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags tipificacoes
     * @name TipificacoesUpdate
     * @request PUT:/tipificacoes/{id}/
     * @secure
     */
    tipificacoesUpdate: (id: number, data: Tipificacao, params: RequestParams = {}) =>
      this.request<Tipificacao, any>({
        path: `/tipificacoes/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags tipificacoes
     * @name TipificacoesPartialUpdate
     * @request PATCH:/tipificacoes/{id}/
     * @secure
     */
    tipificacoesPartialUpdate: (id: number, data: Tipificacao, params: RequestParams = {}) =>
      this.request<Tipificacao, any>({
        path: `/tipificacoes/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags tipificacoes
     * @name TipificacoesDelete
     * @request DELETE:/tipificacoes/{id}/
     * @secure
     */
    tipificacoesDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/tipificacoes/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  tiposAtividadeExtraordinaria = {
    /**
     * No description
     *
     * @tags tipos-atividade-extraordinaria
     * @name TiposAtividadeExtraordinariaList
     * @request GET:/tipos-atividade-extraordinaria/
     * @secure
     */
    tiposAtividadeExtraordinariaList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: AtividadeExtraordinariaTipo[];
        },
        any
      >({
        path: `/tipos-atividade-extraordinaria/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags tipos-atividade-extraordinaria
     * @name TiposAtividadeExtraordinariaCreate
     * @request POST:/tipos-atividade-extraordinaria/
     * @secure
     */
    tiposAtividadeExtraordinariaCreate: (data: AtividadeExtraordinariaTipo, params: RequestParams = {}) =>
      this.request<AtividadeExtraordinariaTipo, any>({
        path: `/tipos-atividade-extraordinaria/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags tipos-atividade-extraordinaria
     * @name TiposAtividadeExtraordinariaRead
     * @request GET:/tipos-atividade-extraordinaria/{id}/
     * @secure
     */
    tiposAtividadeExtraordinariaRead: (id: number, params: RequestParams = {}) =>
      this.request<AtividadeExtraordinariaTipo, any>({
        path: `/tipos-atividade-extraordinaria/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags tipos-atividade-extraordinaria
     * @name TiposAtividadeExtraordinariaUpdate
     * @request PUT:/tipos-atividade-extraordinaria/{id}/
     * @secure
     */
    tiposAtividadeExtraordinariaUpdate: (id: number, data: AtividadeExtraordinariaTipo, params: RequestParams = {}) =>
      this.request<AtividadeExtraordinariaTipo, any>({
        path: `/tipos-atividade-extraordinaria/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags tipos-atividade-extraordinaria
     * @name TiposAtividadeExtraordinariaPartialUpdate
     * @request PATCH:/tipos-atividade-extraordinaria/{id}/
     * @secure
     */
    tiposAtividadeExtraordinariaPartialUpdate: (
      id: number,
      data: AtividadeExtraordinariaTipo,
      params: RequestParams = {},
    ) =>
      this.request<AtividadeExtraordinariaTipo, any>({
        path: `/tipos-atividade-extraordinaria/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags tipos-atividade-extraordinaria
     * @name TiposAtividadeExtraordinariaDelete
     * @request DELETE:/tipos-atividade-extraordinaria/{id}/
     * @secure
     */
    tiposAtividadeExtraordinariaDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/tipos-atividade-extraordinaria/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  tiposColetividade = {
    /**
     * No description
     *
     * @tags tipos-coletividade
     * @name TiposColetividadeList
     * @request GET:/tipos-coletividade/
     * @secure
     */
    tiposColetividadeList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: TipoColetividade[];
        },
        any
      >({
        path: `/tipos-coletividade/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags tipos-coletividade
     * @name TiposColetividadeCreate
     * @request POST:/tipos-coletividade/
     * @secure
     */
    tiposColetividadeCreate: (data: TipoColetividade, params: RequestParams = {}) =>
      this.request<TipoColetividade, any>({
        path: `/tipos-coletividade/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags tipos-coletividade
     * @name TiposColetividadeRead
     * @request GET:/tipos-coletividade/{id}/
     * @secure
     */
    tiposColetividadeRead: (id: number, params: RequestParams = {}) =>
      this.request<TipoColetividade, any>({
        path: `/tipos-coletividade/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags tipos-coletividade
     * @name TiposColetividadeUpdate
     * @request PUT:/tipos-coletividade/{id}/
     * @secure
     */
    tiposColetividadeUpdate: (id: number, data: TipoColetividade, params: RequestParams = {}) =>
      this.request<TipoColetividade, any>({
        path: `/tipos-coletividade/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags tipos-coletividade
     * @name TiposColetividadePartialUpdate
     * @request PATCH:/tipos-coletividade/{id}/
     * @secure
     */
    tiposColetividadePartialUpdate: (id: number, data: TipoColetividade, params: RequestParams = {}) =>
      this.request<TipoColetividade, any>({
        path: `/tipos-coletividade/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags tipos-coletividade
     * @name TiposColetividadeDelete
     * @request DELETE:/tipos-coletividade/{id}/
     * @secure
     */
    tiposColetividadeDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/tipos-coletividade/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  tiposEstabelecimentoPenal = {
    /**
     * No description
     *
     * @tags tipos-estabelecimento-penal
     * @name TiposEstabelecimentoPenalList
     * @request GET:/tipos-estabelecimento-penal/
     * @secure
     */
    tiposEstabelecimentoPenalList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: TipoEstabelecimentoPenal[];
        },
        any
      >({
        path: `/tipos-estabelecimento-penal/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags tipos-estabelecimento-penal
     * @name TiposEstabelecimentoPenalCreate
     * @request POST:/tipos-estabelecimento-penal/
     * @secure
     */
    tiposEstabelecimentoPenalCreate: (data: TipoEstabelecimentoPenal, params: RequestParams = {}) =>
      this.request<TipoEstabelecimentoPenal, any>({
        path: `/tipos-estabelecimento-penal/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags tipos-estabelecimento-penal
     * @name TiposEstabelecimentoPenalRead
     * @request GET:/tipos-estabelecimento-penal/{id}/
     * @secure
     */
    tiposEstabelecimentoPenalRead: (id: number, params: RequestParams = {}) =>
      this.request<TipoEstabelecimentoPenal, any>({
        path: `/tipos-estabelecimento-penal/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags tipos-estabelecimento-penal
     * @name TiposEstabelecimentoPenalUpdate
     * @request PUT:/tipos-estabelecimento-penal/{id}/
     * @secure
     */
    tiposEstabelecimentoPenalUpdate: (id: number, data: TipoEstabelecimentoPenal, params: RequestParams = {}) =>
      this.request<TipoEstabelecimentoPenal, any>({
        path: `/tipos-estabelecimento-penal/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags tipos-estabelecimento-penal
     * @name TiposEstabelecimentoPenalPartialUpdate
     * @request PATCH:/tipos-estabelecimento-penal/{id}/
     * @secure
     */
    tiposEstabelecimentoPenalPartialUpdate: (id: number, data: TipoEstabelecimentoPenal, params: RequestParams = {}) =>
      this.request<TipoEstabelecimentoPenal, any>({
        path: `/tipos-estabelecimento-penal/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags tipos-estabelecimento-penal
     * @name TiposEstabelecimentoPenalDelete
     * @request DELETE:/tipos-estabelecimento-penal/{id}/
     * @secure
     */
    tiposEstabelecimentoPenalDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/tipos-estabelecimento-penal/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  tiposPatrimonial = {
    /**
     * No description
     *
     * @tags tipos-patrimonial
     * @name TiposPatrimonialList
     * @request GET:/tipos-patrimonial/
     * @secure
     */
    tiposPatrimonialList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: PatrimonialTipo[];
        },
        any
      >({
        path: `/tipos-patrimonial/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags tipos-patrimonial
     * @name TiposPatrimonialCreate
     * @request POST:/tipos-patrimonial/
     * @secure
     */
    tiposPatrimonialCreate: (data: PatrimonialTipo, params: RequestParams = {}) =>
      this.request<PatrimonialTipo, any>({
        path: `/tipos-patrimonial/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags tipos-patrimonial
     * @name TiposPatrimonialRead
     * @request GET:/tipos-patrimonial/{id}/
     * @secure
     */
    tiposPatrimonialRead: (id: number, params: RequestParams = {}) =>
      this.request<PatrimonialTipo, any>({
        path: `/tipos-patrimonial/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags tipos-patrimonial
     * @name TiposPatrimonialUpdate
     * @request PUT:/tipos-patrimonial/{id}/
     * @secure
     */
    tiposPatrimonialUpdate: (id: number, data: PatrimonialTipo, params: RequestParams = {}) =>
      this.request<PatrimonialTipo, any>({
        path: `/tipos-patrimonial/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags tipos-patrimonial
     * @name TiposPatrimonialPartialUpdate
     * @request PATCH:/tipos-patrimonial/{id}/
     * @secure
     */
    tiposPatrimonialPartialUpdate: (id: number, data: PatrimonialTipo, params: RequestParams = {}) =>
      this.request<PatrimonialTipo, any>({
        path: `/tipos-patrimonial/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags tipos-patrimonial
     * @name TiposPatrimonialDelete
     * @request DELETE:/tipos-patrimonial/{id}/
     * @secure
     */
    tiposPatrimonialDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/tipos-patrimonial/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  tiposRenda = {
    /**
     * No description
     *
     * @tags tipos-renda
     * @name TiposRendaList
     * @request GET:/tipos-renda/
     * @secure
     */
    tiposRendaList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: TipoRenda[];
        },
        any
      >({
        path: `/tipos-renda/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags tipos-renda
     * @name TiposRendaCreate
     * @request POST:/tipos-renda/
     * @secure
     */
    tiposRendaCreate: (data: TipoRenda, params: RequestParams = {}) =>
      this.request<TipoRenda, any>({
        path: `/tipos-renda/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags tipos-renda
     * @name TiposRendaRead
     * @request GET:/tipos-renda/{id}/
     * @secure
     */
    tiposRendaRead: (id: number, params: RequestParams = {}) =>
      this.request<TipoRenda, any>({
        path: `/tipos-renda/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags tipos-renda
     * @name TiposRendaUpdate
     * @request PUT:/tipos-renda/{id}/
     * @secure
     */
    tiposRendaUpdate: (id: number, data: TipoRenda, params: RequestParams = {}) =>
      this.request<TipoRenda, any>({
        path: `/tipos-renda/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags tipos-renda
     * @name TiposRendaPartialUpdate
     * @request PATCH:/tipos-renda/{id}/
     * @secure
     */
    tiposRendaPartialUpdate: (id: number, data: TipoRenda, params: RequestParams = {}) =>
      this.request<TipoRenda, any>({
        path: `/tipos-renda/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags tipos-renda
     * @name TiposRendaDelete
     * @request DELETE:/tipos-renda/{id}/
     * @secure
     */
    tiposRendaDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/tipos-renda/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  tiposVulnerabilidadeDigital = {
    /**
     * No description
     *
     * @tags tipos-vulnerabilidade-digital
     * @name TiposVulnerabilidadeDigitalList
     * @request GET:/tipos-vulnerabilidade-digital/
     * @secure
     */
    tiposVulnerabilidadeDigitalList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: TipoVulnerabilidade[];
        },
        any
      >({
        path: `/tipos-vulnerabilidade-digital/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags tipos-vulnerabilidade-digital
     * @name TiposVulnerabilidadeDigitalCreate
     * @request POST:/tipos-vulnerabilidade-digital/
     * @secure
     */
    tiposVulnerabilidadeDigitalCreate: (data: TipoVulnerabilidade, params: RequestParams = {}) =>
      this.request<TipoVulnerabilidade, any>({
        path: `/tipos-vulnerabilidade-digital/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags tipos-vulnerabilidade-digital
     * @name TiposVulnerabilidadeDigitalRead
     * @request GET:/tipos-vulnerabilidade-digital/{id}/
     * @secure
     */
    tiposVulnerabilidadeDigitalRead: (id: number, params: RequestParams = {}) =>
      this.request<TipoVulnerabilidade, any>({
        path: `/tipos-vulnerabilidade-digital/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags tipos-vulnerabilidade-digital
     * @name TiposVulnerabilidadeDigitalUpdate
     * @request PUT:/tipos-vulnerabilidade-digital/{id}/
     * @secure
     */
    tiposVulnerabilidadeDigitalUpdate: (id: number, data: TipoVulnerabilidade, params: RequestParams = {}) =>
      this.request<TipoVulnerabilidade, any>({
        path: `/tipos-vulnerabilidade-digital/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags tipos-vulnerabilidade-digital
     * @name TiposVulnerabilidadeDigitalPartialUpdate
     * @request PATCH:/tipos-vulnerabilidade-digital/{id}/
     * @secure
     */
    tiposVulnerabilidadeDigitalPartialUpdate: (id: number, data: TipoVulnerabilidade, params: RequestParams = {}) =>
      this.request<TipoVulnerabilidade, any>({
        path: `/tipos-vulnerabilidade-digital/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags tipos-vulnerabilidade-digital
     * @name TiposVulnerabilidadeDigitalDelete
     * @request DELETE:/tipos-vulnerabilidade-digital/{id}/
     * @secure
     */
    tiposVulnerabilidadeDigitalDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/tipos-vulnerabilidade-digital/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  vagasEditalPlantao = {
    /**
     * No description
     *
     * @tags vagas-edital-plantao
     * @name VagasEditalPlantaoList
     * @request GET:/vagas-edital-plantao/
     * @secure
     */
    vagasEditalPlantaoList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: VagaEditalPlantao[];
        },
        any
      >({
        path: `/vagas-edital-plantao/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags vagas-edital-plantao
     * @name VagasEditalPlantaoCreate
     * @request POST:/vagas-edital-plantao/
     * @secure
     */
    vagasEditalPlantaoCreate: (data: VagaEditalPlantao, params: RequestParams = {}) =>
      this.request<VagaEditalPlantao, any>({
        path: `/vagas-edital-plantao/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags vagas-edital-plantao
     * @name VagasEditalPlantaoRead
     * @request GET:/vagas-edital-plantao/{id}/
     * @secure
     */
    vagasEditalPlantaoRead: (id: number, params: RequestParams = {}) =>
      this.request<VagaEditalPlantao, any>({
        path: `/vagas-edital-plantao/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags vagas-edital-plantao
     * @name VagasEditalPlantaoUpdate
     * @request PUT:/vagas-edital-plantao/{id}/
     * @secure
     */
    vagasEditalPlantaoUpdate: (id: number, data: VagaEditalPlantao, params: RequestParams = {}) =>
      this.request<VagaEditalPlantao, any>({
        path: `/vagas-edital-plantao/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags vagas-edital-plantao
     * @name VagasEditalPlantaoPartialUpdate
     * @request PATCH:/vagas-edital-plantao/{id}/
     * @secure
     */
    vagasEditalPlantaoPartialUpdate: (id: number, data: VagaEditalPlantao, params: RequestParams = {}) =>
      this.request<VagaEditalPlantao, any>({
        path: `/vagas-edital-plantao/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags vagas-edital-plantao
     * @name VagasEditalPlantaoDelete
     * @request DELETE:/vagas-edital-plantao/{id}/
     * @secure
     */
    vagasEditalPlantaoDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/vagas-edital-plantao/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  varas = {
    /**
     * No description
     *
     * @tags varas
     * @name VarasList
     * @request GET:/varas/
     * @secure
     */
    varasList: (
      query?: {
        grau?: string;
        comarca?: string;
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: Vara[];
        },
        any
      >({
        path: `/varas/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags varas
     * @name VarasRead
     * @request GET:/varas/{id}/
     * @secure
     */
    varasRead: (id: number, params: RequestParams = {}) =>
      this.request<Vara, any>({
        path: `/varas/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
}
