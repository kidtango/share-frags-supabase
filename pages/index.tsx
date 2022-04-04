import { useEffect } from 'react'

import Layout from '@components/common/Layout/Layout'
import SearchBar from '@components/search-bar'
import { useTheme } from 'next-themes'

export default function Home() {
  const { theme, setTheme } = useTheme()
  useEffect(() => setTheme('mytheme'), [])

  return (
    <div className="p-2 mt-4">
      <div>
        <button className="btn btn-primary">Hi</button>
      </div>
    </div>
  )
}

Home.Layout = Layout
