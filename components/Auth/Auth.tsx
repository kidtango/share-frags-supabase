import React, { useEffect, useRef, useState } from 'react'
import { SupabaseClient, Provider } from '@supabase/supabase-js'
import { UserContextProvider, useUser } from './UserContext'

import * as SocialIcons from './Icons'
// @ts-ignore
// import AuthStyles from './Auth.module.css'

const VIEWS: ViewsMap = {
  SIGN_IN: 'sign_in',
  SIGN_UP: 'sign_up',
  FORGOTTEN_PASSWORD: 'forgotten_password',
  MAGIC_LINK: 'magic_link',
  UPDATE_PASSWORD: 'update_password',
}

interface ViewsMap {
  [key: string]: ViewType
}

type ViewType =
  | 'sign_in'
  | 'sign_up'
  | 'forgotten_password'
  | 'magic_link'
  | 'update_password'

type RedirectTo = undefined | string

export interface Props {
  supabaseClient: SupabaseClient
  children?: React.ReactNode
  socialLayout?: 'horizontal' | 'vertical'
  socialColors?: boolean
  socialButtonSize?: 'tiny' | 'small' | 'medium' | 'large' | 'xlarge'
  providers?: Provider[]
  verticalSocialLayout?: any
  view?: ViewType
  redirectTo?: RedirectTo
  onlyThirdPartyProviders?: boolean
  magicLink?: boolean
}

function Auth({
  supabaseClient,
  socialLayout = 'vertical',
  socialColors = false,
  socialButtonSize = 'medium',
  providers,
  view = 'sign_in',
  redirectTo,
  onlyThirdPartyProviders = false,
  magicLink = false,
}: Props): JSX.Element | null {
  const [authView, setAuthView] = useState(view)
  const [defaultEmail, setDefaultEmail] = useState('')
  const [defaultPassword, setDefaultPassword] = useState('')

  const verticalSocialLayout = socialLayout === 'vertical' ? true : false

  const Container = (props: any) => (
    <div className={''}>
      <div>
        <SocialAuth
          supabaseClient={supabaseClient}
          verticalSocialLayout={verticalSocialLayout}
          providers={providers}
          socialLayout={socialLayout}
          socialButtonSize={socialButtonSize}
          socialColors={socialColors}
          redirectTo={redirectTo}
          onlyThirdPartyProviders={onlyThirdPartyProviders}
          magicLink={magicLink}
        />
        {!onlyThirdPartyProviders && props.children}
      </div>
    </div>
  )

  useEffect(() => {
    // handle view override
    setAuthView(view)
  }, [view])

  switch (authView) {
    case VIEWS.SIGN_IN:
    case VIEWS.SIGN_UP:
      return (
        <Container>
          <EmailAuth
            id={authView === VIEWS.SIGN_UP ? 'auth-sign-up' : 'auth-sign-in'}
            supabaseClient={supabaseClient}
            authView={authView}
            setAuthView={setAuthView}
            defaultEmail={defaultEmail}
            defaultPassword={defaultPassword}
            setDefaultEmail={setDefaultEmail}
            setDefaultPassword={setDefaultPassword}
            redirectTo={redirectTo}
            magicLink={magicLink}
          />
        </Container>
      )
    case VIEWS.FORGOTTEN_PASSWORD:
      return (
        <Container>
          <ForgottenPassword
            supabaseClient={supabaseClient}
            setAuthView={setAuthView}
            redirectTo={redirectTo}
          />
        </Container>
      )

    case VIEWS.MAGIC_LINK:
      return (
        <Container>
          <MagicLink
            supabaseClient={supabaseClient}
            setAuthView={setAuthView}
            redirectTo={redirectTo}
          />
        </Container>
      )

    case VIEWS.UPDATE_PASSWORD:
      return (
        <Container>
          <UpdatePassword supabaseClient={supabaseClient} />
        </Container>
      )

    default:
      return null
  }
}

function SocialAuth({
  supabaseClient,
  children,
  socialLayout = 'vertical',
  socialColors = false,
  socialButtonSize,
  providers,
  verticalSocialLayout,
  redirectTo,
  onlyThirdPartyProviders,
  magicLink,
  ...props
}: Props) {
  const buttonStyles: any = {
    facebook: 'bg-blue-500 hover:bg-blue-400 text-white',
    google: 'bg-red-500 hover:bg-red-400 text-white',
  }

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleProviderSignIn = async (provider: Provider) => {
    setLoading(true)
    const { error } = await supabaseClient.auth.signIn(
      { provider },
      { redirectTo }
    )
    if (error) setError(error.message)
    setLoading(false)
  }

  const socialButtonStyles = (provider: string) =>
    `gap-2 btn btn-block btn-ghost ${buttonStyles[provider]}`

  return (
    <div>
      {providers && providers.length > 0 && (
        <>
          {providers.map((provider) => {
            // @ts-ignore
            const AuthIcon = SocialIcons[provider]
            return (
              <div key={provider} className="mb-4">
                <div
                  className={socialButtonStyles(provider)}
                  onClick={() => handleProviderSignIn(provider)}
                >
                  <AuthIcon className={'text-white'} />
                  {'Continue with ' + provider}
                </div>
              </div>
            )
          })}

          {/* {!onlyThirdPartyProviders && <Divider>or continue with</Divider>} */}
        </>
      )}
    </div>
  )
}

function EmailAuth({
  authView,
  defaultEmail,
  defaultPassword,
  id,
  setAuthView,
  setDefaultEmail,
  setDefaultPassword,
  supabaseClient,
  redirectTo,
  magicLink,
}: {
  authView: ViewType
  defaultEmail: string
  defaultPassword: string
  id: 'auth-sign-up' | 'auth-sign-in'
  setAuthView: any
  setDefaultEmail: (email: string) => void
  setDefaultPassword: (password: string) => void
  supabaseClient: SupabaseClient
  redirectTo?: RedirectTo
  magicLink?: boolean
}) {
  const isMounted = useRef<boolean>(true)
  const [email, setEmail] = useState(defaultEmail)
  const [password, setPassword] = useState(defaultPassword)
  const [rememberMe, setRememberMe] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  useEffect(() => {
    setEmail(defaultEmail)
    setPassword(defaultPassword)

    return () => {
      isMounted.current = false
    }
  }, [authView])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    switch (authView) {
      case 'sign_in':
        const { error: signInError } = await supabaseClient.auth.signIn(
          {
            email,
            password,
          },
          { redirectTo }
        )
        if (signInError) setError(signInError.message)
        break
      case 'sign_up':
        const {
          user: signUpUser,
          session: signUpSession,
          error: signUpError,
        } = await supabaseClient.auth.signUp(
          {
            email,
            password,
          },
          { redirectTo }
        )
        if (signUpError) setError(signUpError.message)
        // Check if session is null -> email confirmation setting is turned on
        else if (signUpUser && !signUpSession)
          setMessage('Check your email for the confirmation link.')
        break
    }

    /*
     * it is possible the auth component may have been unmounted at this point
     * check if component is mounted before setting a useState
     */
    if (isMounted.current) setLoading(false)
  }

  const handleViewChange = (newView: ViewType) => {
    setDefaultEmail(email)
    setDefaultPassword(password)
    setAuthView(newView)
  }

  return (
    <form id={id} onSubmit={handleSubmit}>
      <div>
        <div>
          <input
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
          />
          <input
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
          />
        </div>
        <div>
          <div>
            {/* <Checkbox
              label="Remember me"
              name="remember_me"
              id="remember_me"
              onChange={(value: React.ChangeEvent<HTMLInputElement>) =>
                setRememberMe(value.target.checked)
              }
            /> */}
            {authView === VIEWS.SIGN_IN && <div>Forgot your password?</div>}
          </div>
          <button className={'btn btn-primary'}>
            {authView === VIEWS.SIGN_IN ? 'Sign in' : 'Sign up'}
          </button>
        </div>
        <div>
          {authView === VIEWS.SIGN_IN && magicLink && (
            <div>Sign in with magic link</div>
          )}
          {authView === VIEWS.SIGN_IN ? (
            <div>Don't have an account? Sign up</div>
          ) : (
            <div>Do you have an account? Sign in</div>
          )}
          {message && <div>{message}</div>}
          {error && <div>{error}</div>}
        </div>
      </div>
    </form>
  )
}

function MagicLink({
  supabaseClient,
  redirectTo,
}: {
  setAuthView: any
  supabaseClient: SupabaseClient
  redirectTo?: RedirectTo
}) {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const handleMagicLinkSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')
    setMessage('')
    setLoading(true)
    const { error } = await supabaseClient.auth.signIn(
      { email },
      { redirectTo }
    )
    if (error) setError(error.message)
    else setMessage('Check your email for the magic link')
    setLoading(false)
  }

  return (
    <div className="mt-10">
      <div className="mb-10 divider">OR</div>
      <form id="auth-magic-link" onSubmit={handleMagicLinkSignIn}>
        <div className="flex justify-between gap-4">
          <input
            className="w-full max-w-xs input input-bordered"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
          />
          <button className="btn btn-primary">Send magic link</button>
        </div>
        <div className="mt-4">
          {message && <div className="text-success">{message}</div>}
          {error && <div className="text-error">{error}</div>}
        </div>
      </form>
    </div>
  )
}

function ForgottenPassword({
  setAuthView,
  supabaseClient,
  redirectTo,
}: {
  setAuthView: any
  supabaseClient: SupabaseClient
  redirectTo?: RedirectTo
}) {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const handlePasswordReset = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')
    setMessage('')
    setLoading(true)
    const { error } = await supabaseClient.auth.api.resetPasswordForEmail(
      email,
      { redirectTo }
    )
    if (error) setError(error.message)
    else setMessage('Check your email for the password reset link')
    setLoading(false)
  }

  return (
    <form id="auth-forgot-password" onSubmit={handlePasswordReset}>
      <div>
        <div>
          <input
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
          />
          <button className="btn btn-primary">
            Send reset password instructions
          </button>
        </div>
        <div>Go back to sign in</div>
        {message && <div>{message}</div>}
        {error && <div>{error}</div>}
      </div>
    </form>
  )
}

function UpdatePassword({
  supabaseClient,
}: {
  supabaseClient: SupabaseClient
}) {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const handlePasswordReset = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')
    setMessage('')
    setLoading(true)
    const { error } = await supabaseClient.auth.update({ password })
    if (error) setError(error.message)
    else setMessage('Your password has been updated')
    setLoading(false)
  }

  return (
    <form id="auth-update-password" onSubmit={handlePasswordReset}>
      <div>
        <div>
          <input
            type="password"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
          />
          <button>Update password</button>
        </div>
        {message && <div>{message}</div>}
        {error && <div>{error}</div>}
      </div>
    </form>
  )
}

Auth.ForgottenPassword = ForgottenPassword
Auth.UpdatePassword = UpdatePassword
Auth.MagicLink = MagicLink
Auth.UserContextProvider = UserContextProvider
Auth.useUser = useUser

export default Auth
