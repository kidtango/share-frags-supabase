import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Auth from '@components/Auth'
import { useSupabaseClient } from '@lib/supabase'
import { useRouter } from 'next/router'

const LogIn: NextPage = () => {
  const { user } = Auth.useUser()
  const supabaseClient = useSupabaseClient()
  const router = useRouter()

  React.useEffect(() => {
    if (user !== null) {
      router.replace('/account')
    }
  }, [])

  if (user) {
    return null
  }

  return (
    <>
      <Head>
        <title>share frags - the coral marketplace | Login</title>
        <meta
          name="description"
          content="Sign to sell and buy all things aquarium."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col justify-center min-h-screen px-3 sm:p-0">
        <div className="mx-56">
          <div className="w-full rounded-md bg-primary-2">
            <div className="flex flex-col items-center justify-center px-4 py-2">
              <div className="flex items-baseline space-x-2 text-4xl font-bold">
                <span>Welcome</span>
              </div>
              <div className="tracking-tight ">
                Share Frags is a community of obessed aquatic hobbysts
              </div>
              <div className="w-full mt-10 space-y-3">
                <Auth
                  supabaseClient={supabaseClient}
                  providers={['google']}
                  socialColors={true}
                  magicLink={true}
                  view={'magic_link'}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LogIn
