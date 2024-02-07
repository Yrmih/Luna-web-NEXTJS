// Third Party
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

// Internal
import { LoginCPF } from '../components/ui/LoginCPF'
import {
  LoginStateDialogsProvider,
  LoginUseFormStateProvider,
} from '../context'

describe('Validação dos estados do input de CPF e o botão de próximo', () => {
  const verificarSeBotaoEstaDesabilitado = () => {
    const button = screen.getByTestId('login-cpf-proximo')
    expect(button).toBeDisabled()
  }

  const verificarSeBotaoEstaHabilitado = () => {
    const button = screen.getByTestId('login-cpf-proximo')
    expect(button).toBeEnabled()
  }

  test('Iniciar tela de login o botão desabilitado ', () => {
    render(
      <LoginStateDialogsProvider>
        <LoginUseFormStateProvider>
          <LoginCPF />
        </LoginUseFormStateProvider>
      </LoginStateDialogsProvider>,
    )

    verificarSeBotaoEstaDesabilitado()
  })

  test('Acusou erro no input CPF inválido e desabilitou botão', async () => {
    const user = userEvent.setup()

    render(
      <LoginStateDialogsProvider>
        <LoginUseFormStateProvider>
          <LoginCPF />
        </LoginUseFormStateProvider>
      </LoginStateDialogsProvider>,
    )

    const cpfErrado = '12394857663'
    const cpfErradoMascarado = '123.948.576-63'

    const textFieldLoginCPF = screen.getByRole('textbox', { name: /cpf/i })
    await user.type(textFieldLoginCPF, cpfErrado)

    expect(textFieldLoginCPF).toHaveAttribute('aria-invalid', 'true')
    expect(textFieldLoginCPF).toHaveValue(cpfErradoMascarado)
    verificarSeBotaoEstaDesabilitado()
  })

  test('Desabilitou botão quando o TextField de CPF está zavio', async () => {
    const user = userEvent.setup()

    render(
      <LoginStateDialogsProvider>
        <LoginUseFormStateProvider>
          <LoginCPF />
        </LoginUseFormStateProvider>
      </LoginStateDialogsProvider>,
    )

    const cpfVazio = ' '

    const textFieldLoginCPF = screen.getByRole('textbox', { name: /cpf/i })
    await user.type(textFieldLoginCPF, cpfVazio)
    verificarSeBotaoEstaDesabilitado()
  })

  test('habilitou botão no input de CPF correto', async () => {
    const user = userEvent.setup()
    render(
      <LoginStateDialogsProvider>
        <LoginUseFormStateProvider>
          <LoginCPF />
        </LoginUseFormStateProvider>
      </LoginStateDialogsProvider>,
    )

    const cpfCorreto = '43800847361'
    const cpfCorretoMascarado = '438.008.473-61'

    const textFieldLoginCPF = screen.getByRole('textbox', { name: /cpf/i })

    await user.type(textFieldLoginCPF, cpfCorreto)

    expect(textFieldLoginCPF).toHaveAttribute('aria-invalid', 'false')
    expect(textFieldLoginCPF).toHaveValue(cpfCorretoMascarado)
    verificarSeBotaoEstaHabilitado()
  })
})
