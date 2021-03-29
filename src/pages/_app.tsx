import Link from 'next/link'

export const DefaultLayout: React.FC = ({ children }) => {
  return (
    <>
      <Link href="/">
        <a>Home</a>
      </Link>

      <Link href="/photos">
        <a>Photos</a>
      </Link>

      {children}
    </>
  )
}

const App = ({ Component, pageProps }: any) => {
  return (
    <DefaultLayout>
      <Component {...pageProps}></Component>
    </DefaultLayout>
  )
}

export default App
