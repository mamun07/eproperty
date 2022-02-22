import Header from './Header'
import Footer from './Footer'
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Layout({ children }) {
   return (
      <>
         <CssBaseline />
         <ThemeProvider theme={theme}>
            <Header />
               {children}
            <Footer />
         </ThemeProvider>
      </>
   )
}