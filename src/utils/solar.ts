export class ConstraintErrorPessoaAssistida {
  // Tem atendimento disponível (deve enviar para segunda etapa onde é solicitado o numero do atendimento)
  static readonly SITUACAO_TEM_ATENDIMENTO = 0
  // Não tem atendimento disponível (deve perguntar se deseja realizar uma nova solicitação)
  static readonly SITUACAO_SEM_ATENDIMENTO = 1
  // Não está cadastrado (deve perguntar se deseja ser cadastrado)
  static readonly SITUACAO_NAO_CADASTRADO = 2
  // Autenticado (deve encaminhar para tela das solicitações e autenticar o usuario)
  static readonly SITUACAO_AUTENTICADO = 3
  // Possuí atendimento porém não é o atendimento fornecido (deve perguntar se deseja recuperar o número do atendimento)
  static readonly SITUACAO_ATENDIMENTO_ERRADO = 4
}
