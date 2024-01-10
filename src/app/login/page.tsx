// Internal
import { Login } from './Login'
import { LoginStateDialogsProvider } from './hooks/LoginSateDialogsContext'
import { LoginUseFormStateProvider } from './hooks/LoginUseFormStateContext'

export default function LoginPage() {
  return (
    <LoginStateDialogsProvider>
      <LoginUseFormStateProvider>
        <Login />
      </LoginUseFormStateProvider>
    </LoginStateDialogsProvider>
  )
}
