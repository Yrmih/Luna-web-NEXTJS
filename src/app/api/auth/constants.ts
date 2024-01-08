// Tem atendimento disponível (deve enviar para segunda etapa onde é solicitado o numero do atendimento)
export const SITUACAO_TEM_ATENDIMENTO = 0
// Não tem atendimento disponível (deve perguntar se deseja realizar uma nova solicitação)
export const SITUACAO_SEM_ATENDIMENTO = 1
// Não está cadastrado (deve perguntar se deseja ser cadastrado)
export const SITUACAO_NAO_CADASTRADO = 2
// Autenticado (deve encaminhar para tela das solicitações e autenticar o usuario)
export const SITUACAO_AUTENTICADO = 3
// Possuí atendimento porém não é o atendimento fornecido (deve perguntar se deseja recuperar o número do atendimento)
export const SITUACAO_ATENDIMENTO_ERRADO = 4
