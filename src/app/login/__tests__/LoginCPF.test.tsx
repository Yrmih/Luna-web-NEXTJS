import { render, screen } from '@testing-library/react';
import { LoginCPF } from '../components/ui/LoginCPF';
import { LoginStateDialogsProvider } from '../context';
import { LoginUseFormStateProvider } from '../context';


test('Login: Render Login CPF', () => {
  
  render(
    <LoginStateDialogsProvider>
      <LoginUseFormStateProvider>
        <LoginCPF />
      </LoginUseFormStateProvider>
    </LoginStateDialogsProvider>
  )
  expect(screen.getByText(
    'Para iniciar o atendimento digite o número do seu CPF:'
  ))
})
