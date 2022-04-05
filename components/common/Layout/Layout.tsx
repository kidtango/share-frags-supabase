import clsx from 'clsx'
import styles from './Layout.module.css'
import Navbar from '@components/Navbar'

type Page = {
  id: string
  name: string
  url?: string | undefined
  body: string
  is_visible?: boolean | undefined
  sort_order?: number | undefined
}

interface Props {
  pageProps: {
    pages?: [Page]
  }
}
const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.root}>
      <Navbar />
      <main>{children}</main>
      <div>Footer</div>
    </div>
  )
}

export default Layout
