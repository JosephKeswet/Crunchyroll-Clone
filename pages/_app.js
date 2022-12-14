import '../styles/globals.css'
import { Provider } from 'react-redux'
import { ApiProvider } from '@reduxjs/toolkit/query/react'
import {store} from '../store'
import { animeApi } from '../redux/services/animeApi'

function MyApp({ Component, pageProps }) {
  return <Provider store={store}>
              <Component {...pageProps} />
          </Provider>

}

export default MyApp
