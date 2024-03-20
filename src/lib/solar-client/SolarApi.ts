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
  certidao_tipo?: "CN" | "CC" | null;
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

export interface Pessoa {
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

export interface PessoaConsulta {
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

export interface AtendimentoTotalSerializar {
  /** Tipo */
  tipo?: string;
  /** Quantidade */
  quantidade: number;
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
  /** ID */
  id?: number;
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
  /** Ativo */
  ativo?: boolean;
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
     * @request POST:/assistidos/pessoa-consulta/
     * @secure
     */
    assistidosConsultarPessoaAssistida: (data: PessoaAssistidoConsulta, params: RequestParams = {}) =>
      this.request<PessoaAssistida, any>({
        path: `/assistidos/pessoa-consulta/`,
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
  atendimentosPartes = {
    /**
     * No description
     *
     * @tags atendimentos-partes
     * @name AtendimentosPartesList
     * @request GET:/atendimentos-partes/
     * @secure
     */
    atendimentosPartesList: (
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
          results: Pessoa[];
        },
        any
      >({
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
    atendimentosPartesCreate: (data: Pessoa, params: RequestParams = {}) =>
      this.request<Pessoa, any>({
        path: `/atendimentos-partes/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Há dois erros BAD_REQUEST(400) com situações particulares na consulta da pessoa, são elas: - **0** : Não existe a pessoa. - **1** : Existe a pessoa, porém não existe um atendimento vinculado a ela.
     *
     * @tags atendimentos-partes
     * @name AtendimentosPartesConsultarPessoa
     * @summary Consultar a parte do atendimento usando dados sensíveis.
     * @request POST:/atendimentos-partes/pessoa-consulta/
     * @secure
     */
    atendimentosPartesConsultarPessoa: (data: PessoaConsulta, params: RequestParams = {}) =>
      this.request<Pessoa, ErrorPessoAtendimentoWithSituacaoResponse>({
        path: `/atendimentos-partes/pessoa-consulta/`,
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
      this.request<Pessoa, any>({
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
    atendimentosPartesUpdate: (id: number, data: Pessoa, params: RequestParams = {}) =>
      this.request<Pessoa, any>({
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
    atendimentosPartesPartialUpdate: (id: number, data: Pessoa, params: RequestParams = {}) =>
      this.request<Pessoa, any>({
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
  authAssistidoLuna = {
    /**
     * @description Algumas situações serão retornadas na resposta ao acesso não autorizado no endpoint. ### São elas: - **0** : Assistido tem atendimento no SOLAR, porém não foi usado para acesso. - **1** : Assistido não tem atendimento cadastrado no SOLAR. - **2** : Não está cadastrado no SOLAR - **3** : Assistido possuí atendimento, porém não é o atendimento fornecido. > Obs.: Essa endpoint não retorna o token de autorização de acesso. Para isso, ultiza-se o token único gerado no SOLAR.
     *
     * @tags auth-assistido-luna
     * @name AuthAssistidoLunaCreate
     * @summary Endpoint para realização de autenticação no SOLAR para o assistido.
     * @request POST:/auth-assistido-luna/
     * @secure
     */
    authAssistidoLunaCreate: (data: AuthAssistidoLunaRequest, params: RequestParams = {}) =>
      this.request<AuthAssistidoLunaResponse, ErrorPessoAtendimentoWithSituacaoResponse>({
        path: `/auth-assistido-luna/`,
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
     * @name EnderecosCreate
     * @request POST:/enderecos/
     * @secure
     */
    enderecosCreate: (data: ContribEndereco, params: RequestParams = {}) =>
      this.request<ContribEndereco, any>({
        path: `/enderecos/`,
        method: "POST",
        body: data,
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

    /**
     * No description
     *
     * @tags enderecos
     * @name EnderecosUpdate
     * @request PUT:/enderecos/{id}/
     * @secure
     */
    enderecosUpdate: (id: number, data: ContribEndereco, params: RequestParams = {}) =>
      this.request<ContribEndereco, any>({
        path: `/enderecos/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags enderecos
     * @name EnderecosPartialUpdate
     * @request PATCH:/enderecos/{id}/
     * @secure
     */
    enderecosPartialUpdate: (id: number, data: ContribEndereco, params: RequestParams = {}) =>
      this.request<ContribEndereco, any>({
        path: `/enderecos/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags enderecos
     * @name EnderecosDelete
     * @request DELETE:/enderecos/{id}/
     * @secure
     */
    enderecosDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/enderecos/${id}/`,
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
