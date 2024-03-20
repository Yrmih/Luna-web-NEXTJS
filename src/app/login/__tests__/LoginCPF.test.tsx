// Third Party
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

// Internal
import { ContraintErrorPessoaAssistida } from '@/lib/api/solar/constants'
import { ErrorPessoAtendimentoWithSituacao } from '@/lib/api/solar/types'
import { LoginCPF } from '../components/ui/LoginCPF'
import {
  LoginStateDialogsProvider,
  LoginUseFormStateProvider,
  useLoginStateDialogs,
} from '../context'
import { consultarPessoaAssistida } from '../services'

jest.mock('../services', () => ({
  consultarPessoaAssistida: jest.fn(),
}))

jest.mock('../context', () => ({
  ...jest.requireActual('../context'),
  useLoginStateDialogs: jest.fn().mockReturnValue({
    handleCloseAtendimentoNaoEncontradoDialog: jest.fn(),
    handleCloseCPFNaoEncontradoDialog: jest.fn(),
    handleCloseNaoTemAtendimentoDialog: jest.fn(),
  }), // apenas os "handles" usados no componente
}))

const CPF_INVALIDO = '12394857663'
const CPF_INVALIDO_MASCARA = '123.948.576-63'
const CPF_VALIDO = '43800847361'
const CPF_VALIDO_MASCARA = '438.008.473-61'

describe('LoginCPF: Validação para entrada de CPF', () => {
  const verificarSeBotaoEstaDesabilitado = () => {
    const button = screen.getByRole('button')
    expect(button).toBeDisabled()
  }

  const verificarSeBotaoEstaHabilitado = () => {
    const button = screen.getByRole('button')
    expect(button).toBeEnabled()
  }

  test('Deveria não permitir busca de assistido sem entrar com CPF', async () => {
    const user = userEvent.setup()
    render(
      <LoginStateDialogsProvider>
        <LoginUseFormStateProvider>
          <LoginCPF />
        </LoginUseFormStateProvider>
      </LoginStateDialogsProvider>,
    )

    verificarSeBotaoEstaDesabilitado()

    const cpfVazio = ' '

    const textFieldLoginCPF = screen.getByRole('textbox', { name: /cpf/i })
    await user.type(textFieldLoginCPF, cpfVazio)
    verificarSeBotaoEstaDesabilitado()
  })

  test('Deveria acusar erro e não permitir login com CPF inválido', async () => {
    const user = userEvent.setup()

    render(
      <LoginStateDialogsProvider>
        <LoginUseFormStateProvider>
          <LoginCPF />
        </LoginUseFormStateProvider>
      </LoginStateDialogsProvider>,
    )

    const textFieldLoginCPF = screen.getByRole('textbox', { name: /cpf/i })
    await user.type(textFieldLoginCPF, CPF_INVALIDO)

    expect(textFieldLoginCPF).toHaveAttribute('aria-invalid', 'true')
    expect(textFieldLoginCPF).toHaveValue(CPF_INVALIDO_MASCARA)
    verificarSeBotaoEstaDesabilitado()
  })

  test('Deveria permitir login com CPF correto', async () => {
    const user = userEvent.setup()
    render(
      <LoginStateDialogsProvider>
        <LoginUseFormStateProvider>
          <LoginCPF />
        </LoginUseFormStateProvider>
      </LoginStateDialogsProvider>,
    )
    const textFieldLoginCPF = screen.getByRole('textbox', { name: /cpf/i })

    await user.type(textFieldLoginCPF, CPF_VALIDO)

    expect(textFieldLoginCPF).toHaveAttribute('aria-invalid', 'false')
    expect(textFieldLoginCPF).toHaveValue(CPF_VALIDO_MASCARA)
    verificarSeBotaoEstaHabilitado()
  })
})

describe('LoginCPF: Etapa de verificação do usuário pelo CPF no Login', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('Deveria direcionar para cadastro do assistido quando não é encontrado', async () => {
    const user = userEvent.setup()
    const mockData: ErrorPessoAtendimentoWithSituacao = {
      situacao: ContraintErrorPessoaAssistida.SITUACAO_NAO_CADASTRADO,
      mensagem: 'Assistido não cadastrado',
    }
    const mockSuccess = false

    const mockConsultarPessoaAssistida = consultarPessoaAssistida as jest.Mock
    mockConsultarPessoaAssistida.mockImplementation(async (cpf: string) => {
      return { data: mockData, success: mockSuccess }
    })

    const mockUseLoginStateDialogs = useLoginStateDialogs as jest.Mock
    mockUseLoginStateDialogs.mockReturnValue({
      handleCloseCPFNaoEncontradoDialog: jest.fn(),
      handleCloseNaoTemAtendimentoDialog: jest.fn(),
    })

    render(
      <LoginStateDialogsProvider>
        <LoginUseFormStateProvider>
          <LoginCPF />
        </LoginUseFormStateProvider>
      </LoginStateDialogsProvider>,
    )
    const textFieldCPF = screen.getByRole('textbox', { name: /cpf/i })
    await user.type(textFieldCPF, CPF_VALIDO)

    const buttonProximo = screen.getByRole('button')
    await user.click(buttonProximo)

    expect(consultarPessoaAssistida).toHaveBeenCalledWith(CPF_VALIDO)
    expect(
      useLoginStateDialogs().handleCloseCPFNaoEncontradoDialog,
    ).toHaveBeenCalled()
  })

  test('Deveria direcionar para nova solicitação quando não tem atendimento', async () => {
    // TODO: verificar se abriu modal de handleCloseNaoTemAtendimentoDialog
    // quando o assistido não tem atendimento
    expect(true).toBe(true)
  })
})
