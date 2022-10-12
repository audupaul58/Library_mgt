import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from 'react';
import {SWRConfig} from 'swr'
import axios from 'axios';
import '../styles/globals.scss'
import {Layout} from '../../src/Components/Layout/Layout';
import {NotificationContainer} from 'react-notifications';
import { Container } from 'react-bootstrap';

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    import ('bootstrap/dist/js/bootstrap.js')
    }, []);

  return <Container>
        <SWRConfig value={{fetcher: (url) => axios.get(url).then(res => res.data)}}>
        <Component {...pageProps} />
          <NotificationContainer/>
        </SWRConfig>
  </Container>

}

export default MyApp
