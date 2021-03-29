import { AnimatePresence } from 'framer-motion'
import Link from 'next/link'

export const DefaultLayout: React.FC = ({ children }) => {
  return (
    <>
      <Link href='/'>
        <a>Home</a>
      </Link>

      <Link href='/photos'>
        <a>Photos</a>
      </Link>

      {children}
    </>
  )
}

const App = ({ Component, pageProps, router }: any) => {
  return (
    <DefaultLayout>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route}></Component>
      </AnimatePresence>
    </DefaultLayout>
  )
}

export default App
