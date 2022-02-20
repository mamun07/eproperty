import CssBaseline from '@mui/material/CssBaseline';
import Layout from '../components/layout'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <CssBaseline/>
      <Component {...pageProps} />
    </Layout>
    )
}

export default MyApp
