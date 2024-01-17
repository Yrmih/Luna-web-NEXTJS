// Internal

import { Login } from './components/pages'
import { LoginStateDialogsProvider, LoginUseFormStateProvider } from './context'

export default function LoginPage() {
  return (
    <LoginStateDialogsProvider>
      <LoginUseFormStateProvider>
        <Login />
      </LoginUseFormStateProvider>
    </LoginStateDialogsProvider>
  )
}
