// Internal
import { Login } from './Login'
import { LoginStateDialogsProvider } from './context/LoginSateDialogsContext'
import { LoginUseFormStateProvider } from './context/LoginUseFormStateContext'

export default function LoginPage() {
  return (
    <LoginStateDialogsProvider>
      <LoginUseFormStateProvider>
        <Login />
      </LoginUseFormStateProvider>
    </LoginStateDialogsProvider>
  )
}
