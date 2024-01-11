// Internal
import { Login } from '@/features/login/components/pages'
import {
  LoginStateDialogsProvider,
  LoginUseFormStateProvider,
} from '@/features/login/context'

export default function LoginPage() {
  return (
    <LoginStateDialogsProvider>
      <LoginUseFormStateProvider>
        <Login />
      </LoginUseFormStateProvider>
    </LoginStateDialogsProvider>
  )
}
