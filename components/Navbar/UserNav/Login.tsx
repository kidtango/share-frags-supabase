import React, { useEffect } from 'react'

import Auth from '@components/Auth'
import { useSupabaseClient } from '@lib/supabase'

const Login = () => {
  const { user } = Auth.useUser()
  const supabaseClient = useSupabaseClient()

  return (
    <>
      <label
        htmlFor="my-modal-4"
        className="px-3 rounded-3xl btn-sm btn btn-ghost"
      >
        sign in
      </label>

      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="cursor-pointer modal">
        <label className="relative modal-box" htmlFor="">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="mb-6 text-lg font-bold">Sign in</h3>
            </div>
            {/* <div className="rounded-full btn btn-outline">Sign up</div> */}
          </div>
          <Auth
            supabaseClient={supabaseClient}
            providers={['google', 'facebook']}
            socialColors={true}
            magicLink={true}
            view={'magic_link'}
          />
        </label>
      </label>
    </>
  )
}

export default Login
